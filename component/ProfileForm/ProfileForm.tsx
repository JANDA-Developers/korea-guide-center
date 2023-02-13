import {
    Flex,
    JDavatar,
    JDradioButton,
    JDselect,
    Bold,
    Small,
    JDrequireMark,
    JDalign,
    IJDalignProp,
    JDlabel,
} from "@janda-com/front";
import { TElements } from "@janda-com/front/dist/types/interface";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { IUseProfile } from "../../hook/useProfile";
import GuideContext from "../../page/context";
import { DEFAULT_PROFILE_IMG } from "../../types/const";
import { LanguagesOps } from "../../utils/enumToKr";
import { BankInfoInput } from "../bankComponents/BankInfoInput";
import { GenderInput } from "../genderInput/GenderInput";
import { IIcons } from "../icons/declation";
import { JDicon } from "../icons/Icons";
import { InputWithCheckButton } from "../InputWithCheckButton/InputWithCheckButton";
import { InputWithGlobal } from "../InputWithGlobal/InputWithGlobal";
import { MultiFileInput } from "../multiFileInput/MultiFileInput";
import SingleUploader from "../singleUploader/SingleUploader";
import { SNSInput } from "../snsInput/SNSinput";

interface IProp {
    profileHook: IUseProfile;
}

interface IHeadeProp extends Omit<IJDalignProp, "title"> {
    title: TElements;
    require: boolean;
    description: TElements;
    headIcon?: IIcons;
}

export const Head: React.FC<IHeadeProp> = ({
    description,
    headIcon = null,
    require,
    title,
    ...props
}) => {
    return (
        <JDalign {...props}>
            <Bold>
                {headIcon && (
                    <JDicon color="error" hide={!headIcon} icon={headIcon} />
                )}{" "}
                {title} {require ? <JDrequireMark /> : ""}
            </Bold>
            <Small color="grey3" mb>
                {description}
            </Small>
        </JDalign>
    );
};

export const ProfileForm: React.FC<IProp> = ({ profileHook }) => {
    const {
        guideCats,
        setGuideCats,
        gender,
        setGender,
        langs,
        setLangs,
        mediumImageHook,
        mediumVideoHook,
        nickNameDuplicateChecked,
        setNickNameDuplicateCheck,
        handleNickNameDuplicateCheck,
        introduceHook,
        guideLicenses,
        setGuideLicenses,
        nickNameHook,
        profileUplodHook,
        bankImgHook,
        langValues,
        bankInfoHook,
        regionRadioHook,
        snsHook,
    } = profileHook;
    const { catOpMap } = useContext(AppContext);
    const { me, globalModalHook } = useContext(GuideContext);

    const guideCatOps = catOpMap?.GUIDE;

    return (
        <div>
            <Flex center column>
                <Head
                    text="center"
                    title={"프로필사진"}
                    require
                    description={
                        "가이드 프로필로 사용하실 사진을 등록 해주세요. (가이드님 본인사진일 것을 권장해 드립니다.)"
                    }
                />
                <JDavatar
                    size="largest"
                    img={profileUplodHook.file?.uri || DEFAULT_PROFILE_IMG}
                    mb
                />
                <SingleUploader
                    withOutName
                    withCropper
                    name=""
                    mb
                    buttonProps={{
                        style: {
                            maxWidth: "fit-content",
                        },
                        br: "square",
                    }}
                    {...profileUplodHook}
                    cropperProp={{
                        round: true,
                        cropSize: {
                            height: 300,
                            width: 300,
                        },
                    }}
                />
            </Flex>
            <Head
                title={"닉네임"}
                require
                description={
                    "이름대신 표기될 닉네임을 입력해주세요 닉네임은 1~10글자 이내로 작성 부탁드립니다"
                }
            />
            <InputWithCheckButton
                inputProps={{
                    mr: true,
                    maxLength: 10,
                    id: "NickNameInput",
                    ...nickNameHook,
                    onChange: (val) => {
                        nickNameHook.onChange(val);
                        setNickNameDuplicateCheck(false);
                    },
                }}
                buttonProps={{
                    onClick: handleNickNameDuplicateCheck,
                    checked: !!nickNameDuplicateChecked,
                    label: "중복확인",
                }}
            />
            <GenderInput mb="largest" value={gender} setValue={setGender} />
            <Head
                title={"사용언어 (다중선택)"}
                require
                description={
                    "사용가능한 언어를 하나이상 등록해주세요. 여행자님이 가이드님을 찾을때 도움이 될거에요."
                }
            />
            <JDselect
                mb="largest"
                isMulti
                onChanges={setLangs}
                selectedOptions={langs}
                options={LanguagesOps}
            />
            <Head
                title={"가이드 타입 (다중선택)"}
                require
                description={
                    "가이드님이 어떤 가이드를 주로 하시는지 입력해주세요."
                }
            />
            <JDselect
                mb="largest"
                isMulti
                onChanges={setGuideCats}
                selectedOptions={guideCats}
                options={guideCatOps}
            />
            <Head
                title={"활동지역 (다중선택)"}
                require
                description={
                    "활동지역을 입력해주세요. 여행자님이 가이드님을 찾을때 도움이 될거에요."
                }
            />
            <JDradioButton
                mb="largest"
                btnProps={{ mode: "border", mr: "small", mb: "small" }}
                {...regionRadioHook}
            />

            <Head
                title={"소개"}
                require
                description={"본인의 소개를 적어주세요 200글자 내외 "}
            />
            <InputWithGlobal
                key=""
                globalModalHook={globalModalHook as any}
                textarea
                mb="largest"
                maxLength={900}
                targets={langValues}
                {...introduceHook}
            />
            <Head
                id="BankImgInput"
                title={"통장사진 (정산지급시 꼭 필요합니다.)"}
                require
                description={
                    "투어를 마치면 코리아가이드에서 대금을 아래 계좌로 정산해드립니다. 통장 정보가 명확하게 보이도록 등록 부탁드립니다"
                }
            />
            <SingleUploader mb="largest" {...bankImgHook} />

            <Head
                title={"통장정보 (정산지급시 꼭 필요합니다.)"}
                require
                description={
                    "투어를 마치면 코리아가이드에서 대금을 아래 계좌로 정산해드립니다. "
                }
            />
            <BankInfoInput
                mb="largest"
                bankInfo={bankInfoHook.nextBankInfo}
                onChange={bankInfoHook.handleChange}
            />

            <Head
                title={"가이드 자격증 (복수 등록 가능합니다.)"}
                require
                description={
                    "가이드 자격증을 하나이상 등록해주세요. 여행자님들이 가이드님을 좀더 신뢰하실수 있을거에요."
                }
            />
            <MultiFileInput
                mb
                files={guideLicenses}
                onChange={setGuideLicenses}
            />
            <Head
                title={"프로필사진 중간 사이즈(필수)"}
                require
                description={"중간 사이즈의 프로필 및 비디오 등록 (선택사항)"}
            />
            <SingleUploader
                label="중간사이즈 이미지(핸드폰 세로 촬영 사이즈)"
                {...mediumImageHook}
            />
            <SingleUploader
                label="비디오 (핸드폰 세로 촬영)"
                mb="largest"
                {...mediumVideoHook}
            />
            <JDlabel txt="SNS 정보입력" />
            <SNSInput {...snsHook} />
        </div>
    );
};
