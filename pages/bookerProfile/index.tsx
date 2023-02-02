import {
    JDavatar,
    JDcard,
    JDcontainer,
    InputText,
    WindowSize,
    Flex,
    JDselect,
    opFind,
    JDalign,
    JDbutton,
    useModal,
    toast,
    Tiny,
} from "@janda-com/front";
import React, { useContext } from "react";
import { CardBtn } from "../../component/btns/ModalBtn";
import { GenderInput } from "../../component/genderInput/GenderInput";
import BookLayout from "../../component/layout/BookLayout";
import SingleUploader from "../../component/singleUploader/SingleUploader";
import { AppContext } from "../../context/context";
import { counturyOps } from "../../utils/countury";
import { useProfile } from "../../hook/useProfile";
import { DEFAULT_PROFILE_IMG } from "../../types/const";
import { ResignModal } from "../../component/components/ResignModal";
import { CardHead, ModalHead } from "../../component/modalHead/ModalHead";
import { BirthDayPicker } from "../../component/birthDayPicker/BirthDayPicker";
import PasswordChecker from "../../component/passwordChecker/PasswordCheck";

interface IProp { }

export const BookerProfile: React.FC<IProp> = () => {
    if (typeof window === "undefined") return null;
    const { s, loginAnd, me } = useContext(AppContext);
    const resginModalHook = useModal();

    const {
        countryCode,
        counturyCodeHook,
        profileUplodHook,
        nameHook,
        phoneNumberHook,
        passportNumberHook,
        emailHook,
        passwordCheckHook,
        passwordHook,
        gender,
        birthDateHook,
        setGender,
        hanldeUpdateBookerProfile,
        securityInfoChange,
        setSecurityInfoChange,
    } = useProfile("BookerProfile");

    const hanldePasswordChange = () => {
        loginAnd(
            () => {
                toast.success(s("AccountConfirmCompleted"));
                setSecurityInfoChange(true);
            },
            {
                forceLogin: true,
                modalInfo: {
                    modalProps: {
                        head: {
                            element: (
                                <ModalHead
                                    title={s("plesaeResginTitle")}
                                    description={s("plesaeResginDesc")}
                                />
                            ),
                        },
                    },
                },
            }
        );
    };
    const handleResgin = () => {
        loginAnd(
            () => {
                toast.success(s("AccountConfirmCompleted"));
                resginModalHook.openModal();
            },
            {
                forceLogin: true,
                modalInfo: {
                    modalProps: {
                        head: {
                            element: (
                                <ModalHead
                                    title={s("plesaeResginTitle")}
                                    description={s("plesaeResginDesc")}
                                />
                            ),
                        },
                    },
                },
            }
        );
    };

    return (
        <BookLayout>
            <JDcontainer verticalPadding size={WindowSize.md}>
                <JDcard
                    head={
                        <CardHead
                            title={
                                <div id="AA">
                                    <Flex className="CapitalLize" wrap between>
                                        {s("profileUpdateTitle")}
                                        <span>
                                            <JDbutton
                                                hide={!!me?.isOauth}
                                                br="square"
                                                size="small"
                                                padding="small"
                                                mode="border"
                                                onClick={hanldePasswordChange}
                                            >
                                                {s("accountChange")}
                                            </JDbutton>
                                        </span>
                                    </Flex>
                                </div>
                            }
                            description={s("bookProfileZoneDesc")}
                        />
                    }
                    foot={
                        <Flex>
                            <CardBtn
                                thema="primary"
                                onClick={() => {
                                    // console.log(`passwordHook : ${passwordHook.value} , passwordCheckHook : ${passwordCheckHook.value}`);
                                    // 새 비밀번호와 새 비밀번호 확인이 다를 때
                                    if (passwordHook.value !== passwordCheckHook.value) {
                                        toast.success(s("passwordDifferentSoFailMessage"));
                                    }
                                    //  새 비밀번호와 새 비밀번호 확인이 같으면서, ||||| 특수문자 1개, 숫자가 포함된 8-16자리 비번이라면, hanldeUpdateBookerProfile() 
                                    else {
                                        const passwordValidationToken = /(?=^.{8,16}$)(?=.*\d)(?=.*[ !@ #$%^ &*()_+}{":;'?/>.<,])(?!.*\s).*$/;
                                        // console.log(`비밀번호 유효성 검사 테스트 결과 : ${passwordValidationToken.test(passwordHook.value)}`);
                                        (passwordValidationToken.test(passwordHook.value)) ? hanldeUpdateBookerProfile() : toast.success(s("passwordMustIncludeMessage"));
                                    }
                                }}
                                size="large"
                            >
                                {s("update")}
                            </CardBtn>
                        </Flex>
                    }
                >
                    <Flex vCenter center column>
                        <JDavatar
                            size="largest"
                            img={
                                profileUplodHook.file?.uri ||
                                DEFAULT_PROFILE_IMG
                            }
                            mb
                        />
                        <SingleUploader
                            withOutName
                            name=""
                            mb="largest"
                            {...profileUplodHook}
                        />
                    </Flex>
                    <InputText mb {...nameHook} label={s("name")} />
                    <InputText
                        mb
                        {...phoneNumberHook}
                        label={s("phoneNumber")}
                    />
                    <InputText
                        mb
                        {...passportNumberHook}
                        label={s("passportNumber")}
                    />
                    <BirthDayPicker
                        mb
                        birthDate={birthDateHook[0]}
                        setBirthDate={birthDateHook[1]}
                        label={s("birthDay")}
                    />
                    <JDselect
                        id="CountrySelecter"
                        autoComplete="off"
                        mb
                        options={counturyOps}
                        onChange={(cc) => {
                            counturyCodeHook[1](cc.value);
                        }}
                        selectedOption={opFind(countryCode, counturyOps)}
                        label={s("country")}
                    />
                    <input
                        type="email"
                        style={{
                            position: "absolute",
                            opacity: 0,
                            height: 1,
                            width: 1,
                        }}
                    />
                    <GenderInput mb value={gender} setValue={setGender} />

                    <JDalign hide={!securityInfoChange}>
                        <JDalign hide={!!me?.isOauth}>
                            <InputText {...emailHook} mb label={s("email")} />
                            <InputText
                                {...passwordHook}
                                mb
                                type="password"
                                label={s("newPassword") || ""}
                            />
                            <Tiny className="ITSpasswordChecker" mb>
                                <PasswordChecker txt={passwordHook.value} />
                            </Tiny>
                            <InputText
                                mb
                                {...passwordCheckHook}
                                type="password"
                                label={s("newPasswordCheck") || ""}
                            />
                        </JDalign>

                        <ResignModal modalHook={resginModalHook} />
                    </JDalign>
                    <JDbutton mode="border" onClick={handleResgin}>
                        {s("resgin")}
                    </JDbutton>
                </JDcard>
            </JDcontainer >
        </BookLayout >
    );
};

export default BookerProfile;
