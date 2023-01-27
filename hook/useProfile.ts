import { useSNS } from "./useSNS";
import {
    getAllFromUrl,
    isEmail,
    isEmpty,
    opFind,
    toast,
    useInput,
    useModal,
    useRadioButton,
    Validater,
} from "@janda-com/front";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../context/context";
import GuideContext from "../page/context";
import { GuidePath } from "../page/GuideRouter";
import { Paths } from "../pages/index[depre]";
import { PersonalInformation } from "../policies/PersonalInformation";
import { PersonalInformationHandle } from "../policies/PersonalInformationHandle";
import { UsePolicy } from "../policies/UsePolicy";
import {
    Ffile,
    Gender,
    LANGUAGES,
    UserRole,
    UserSignUpInput,
    UserUpdateInput,
} from "../types/api";
import { LanguagesOps } from "../utils/enumToKr";
import { updateURLParameters } from "../utils/getUpdateUrlParam";
import { omitsAuto, omitTypeName } from "../utils/omit";
import { omits } from "../utils/omits";
import { completeMsg } from "../utils/onCompletedMessage";
import { useBankInfo } from "./useBankInfo";
import { useGlobalInput } from "./useGlobalInput";
import { usePolicyCheckers } from "./usePolicyCheckers";
import { useSingleUpload } from "./useUpload";
import { useDuplicateCheck, useSignUp, useUserUpdate } from "./useUser";

type profileRole = "GuideProfile" | "BookerProfile" | "JoinGuide" | "SignUp";

export type IUseProfile = ReturnType<typeof useProfile>;

export const useProfile = (role: profileRole) => {
    const { s } = useContext(AppContext);
    const { oauthEmail, oauthCompany: _oauthCompany } = getAllFromUrl() as any;
    const oauthCompany = _oauthCompany || "Email";

    const [securityInfoChange, setSecurityInfoChange] = useState(false);
    const { me, catOpMap, catMap } = useContext(AppContext);
    const { mylangsOps, myCatOps } = useContext(GuideContext);
    const isJoinGuide = role === "JoinGuide"; // 가이드 신청인지?
    const isGuideProfile = role === "GuideProfile"; // 가이드 프로필인지?
    const isSingUp = role === "SignUp"; // 회원가입인지?
    const isApplying = me?.role === UserRole.BUYER && me.applyAt;
    const isOauthProfiling = isSingUp && !!oauthEmail;
    const resginModalHook = useModal();

    const profileUpdateCompleteMessage = isJoinGuide
        ? "가이드로 전환되었습니다. 상품을 등록 해주세요."
        : s("profileHasChanged");
    const isGuideUpdate = isGuideProfile || isJoinGuide;
    const profileUplodHook = useSingleUpload(me?.profileImage || undefined);
    const nameHook = useInput(me?.name || "");
    const nickNameHook = useInput(me?.nickName || "");
    const emailHook = useInput(me?.email || "");
    const phoneNumberHook = useInput(me?.phoneNumber || "");
    const counturyCodeHook = useState(me?.countryCode || "");
    const passportNumberHook = useInput(me?.passportNumber || "");
    const bankInfoHook = useBankInfo(me?.bankInfo || undefined);
    const birthDateHook = useState<Date>(me?.birthDate || new Date());
    const snsHook = useSNS(me?.sns);
    const mediumImageHook = useSingleUpload(
        me?.profileMediumImage || undefined
    );
    const mediumVideoHook = useSingleUpload(me?.profileVideo || undefined);

    const signUpPolicesHook = usePolicyCheckers({
        config: [
            {
                Policy: UsePolicy,
                label: s("rule"),
                require: true,
            },
            {
                Policy: PersonalInformation,
                label: s("personalInformationGetter"),
                require: true,
            },
            {
                Policy: PersonalInformationHandle,
                label: s("privacy_policy"),
                require: true,
            },
        ],
    });
    const guideJoinPoilicyCheckHook = usePolicyCheckers({
        config: [
            {
                Policy: UsePolicy,
                label: s("footer_rule"),
                require: true,
            },
            {
                Policy: PersonalInformation,
                label: s("personalInformationGetter"),
                require: true,
            },
            {
                Policy: PersonalInformationHandle,
                label: s("privacy_policy"),
                require: true,
            },
        ],
    });

    const {
        checkNickNameDuplicateCheck,
        duplicateChecked: nickNameDuplicateChecked,
        setDuplicateCheck: setNickNameDuplicateCheck,
    } = useDuplicateCheck(false);
    const {
        checkEmailDuplicate,
        duplicateChecked: emailDuplicateChecked,
        setDuplicateCheck: setEmailDuplicateCheck,
    } = useDuplicateCheck(false);
    const [guideLicenses, setGuideLicenses] = useState<Ffile[]>([
        ...(me?.guideLicenses || []),
    ]);
    const [gender, setGender] = useState<Gender>(me?.gender || Gender.MALE);
    const bankImgHook = useSingleUpload(me?.bankImage || undefined);
    const profileBgImageHook = useSingleUpload(me?.profileBgImage || undefined);
    const [updateMu] = useUserUpdate({
        skipMessage: true,
    });
    const passwordHook = useInput("");
    const passwordCheckHook = useInput("");
    const introduceHook = useGlobalInput(me?.introduce);
    const [langs, setLangs] = useState(
        isEmpty(mylangsOps) ? [opFind(LANGUAGES.ko, LanguagesOps)] : mylangsOps
    );
    const regionRadioHook = useRadioButton(
        me?.regions?.map((r) => r._id) || [],
        catOpMap?.REIGION
    );

    const [guideCats, setGuideCats] = useState(myCatOps);

    const handleNickNameDuplicateCheck = () => {
        if (nickNameHook.value)
            checkNickNameDuplicateCheck(nickNameHook.value as string);
    };

    const handleEmailDuplicateCheck = () => {
        if (!isEmail(emailHook.value)) {
            toast.warn("올바른 이메일을 입력해주세요.");
            return;
        }
        if (emailHook.value) checkEmailDuplicate(emailHook.value as string);
    };

    const history = useHistory();
    const router = useRouter();
    const [signUpMu] = useSignUp({
        onCompleted: ({ SignUp }) => {
            if (completeMsg(SignUp, "이메일을 인증 해주세요.", "가입 실패")) {
                const nextUrl = updateURLParameters(Paths.verification, [
                    {
                        param: "oauthCompany",
                        paramVal: oauthCompany,
                    },
                    {
                        param: "email",
                        paramVal: emailHook.value,
                    },
                    {
                        param: "phoneNumber",
                        paramVal: phoneNumberHook.value,
                    },
                ]);
                router.push(nextUrl);
            }
        },
    });

    const email = emailHook.value;
    const birthDay = birthDateHook[0];
    const birthDate = birthDay;
    const passportNumber = passportNumberHook.value;
    const countryCode = counturyCodeHook[0];
    const password = passwordHook.value;
    const name = nameHook.value;
    const nickName = nickNameHook.value;
    const phoneNumber = phoneNumberHook.value;
    const regionIds = regionRadioHook.selectedValues;
    const introduce = introduceHook.langs;
    const regionCats = catMap?.REIGION.filter((region) =>
        regionIds.includes(region._id)
    );
    const profileVideo = mediumVideoHook.file;
    const profileMediumImage = mediumImageHook.file;

    const bankInfo = bankInfoHook.nextBankInfo;
    const profile = profileUplodHook.file;
    const profileBg = profileBgImageHook.file;
    const bankImg = bankImgHook.file;
    const langValues = langs?.map((lang) => lang?.value) || [];
    const guideCatsOriginal =
        guideCats?.map(
            (guideCat) => catMap?.GUIDE.find((c) => c._id === guideCat.value)!
        ) || [];
    const vals = {
        birthDay,
        countryCode,
        passportNumber,
        guideCatsOriginal,
        guideCats,
        profile,
        regionCats,
        introduce,
        guideLicenses,
        email,
        password,
        name,
        nickName,
        phoneNumber,
        langValues,
        bankInfo,
        langs,
    };

    const requireBookerSignUpPolicy = isSingUp || isOauthProfiling;
    const requireGuideJoinPolicy = isJoinGuide && !isApplying;

    const { validate: profileValidation, nodes: profileValidationNodes } =
        new Validater([
            ...(requireBookerSignUpPolicy
                ? signUpPolicesHook.policyCheckNodes
                : []),
            ...(requireGuideJoinPolicy
                ? guideJoinPoilicyCheckHook.policyCheckNodes
                : []),
            {
                value: profileUplodHook.uri,
                failMsg: "프로필 사진 필수 입력 부탁드립니다",
                id: "ProfileInput",
                skip: !isGuideUpdate,
            },
            {
                value: oauthEmail || isEmail(emailHook.value),
                failMsg: "올바른 이메일을 입력해주세요.",
                id: "EmailInput",
                skip: !isGuideUpdate,
            },
            {
                value: guideCats?.length > 0,
                failMsg: "가이드 타입을 선택 바랍니다",
                id: "guideCats",
                skip: !isGuideUpdate,
            },
            {
                value: bankImgHook.uri,
                failMsg: "통장사진 첨부 부탁드립니다",
                id: "BankImgInput",
                skip: !isGuideUpdate,
            },
            {
                value: nameHook.value,
                failMsg: "이름 입력 부탁드립니다",
                id: "NameInput",
            },
            {
                value: nickNameHook.value,
                failMsg: "닉네임 입력 부탁드립니다",
                id: "NickNameInput",
                skip: !isGuideUpdate,
            },
            {
                skip: !isGuideUpdate || !nickNameDuplicateChecked,
                value: nickNameDuplicateChecked,
                failMsg: "닉네임 중복체크 해주세요.",
                id: "NickNameInput",
            },
            {
                value: isOauthProfiling || emailDuplicateChecked,
                failMsg: "이메일 중복체크 부탁드립니다.",
                id: "EmailInput",
                skip: !isSingUp,
            },
            {
                value: phoneNumberHook.value,
                failMsg: "핸드폰 번호 필수 입력 부탁드립니다",
                id: "PhoneNumberInput",
            },
            {
                value: !isEmpty(langs),
                failMsg: "사용언어 필수 입력 부탁드립니다",
                id: "PhoneNumberInput",
                skip: !isGuideUpdate,
            },
            {
                value: !isEmpty(regionIds),
                failMsg: "활동지역 선택 부탁드립니다",
                id: "PhoneNumberInput",
                skip: !isGuideUpdate,
            },
            {
                value: isOauthProfiling || passwordHook.value.length > 7,
                failMsg: "올바른 비밀번호가 아닙니다",
                id: "PasswordInput",
                skip: !isSingUp,
            },
            {
                value:
                    isOauthProfiling ||
                    passwordCheckHook.value === passwordHook.value,
                failMsg: "비밀번호가 일치하지 않습니다",
                id: "PasswordInput",
                skip: !isSingUp,
            },
        ]);

    const handleChangeToGuide = () => {
        if (profileValidation()) {
            const {
                introduce,
                guideLicenses,
                name,
                nickName,
                phoneNumber,
                regionCats,
                langValues,
                profile,
            } = vals;

            const nextData: UserUpdateInput = {
                regions: regionCats,
                guideLicenses: omits(guideLicenses),
                introduce,
                name,
                guideCategory: guideCatsOriginal,
                nickName,
                phoneNumber,
                langs: langValues,
                gender,
                oauthSignUpCompleted: !!isOauthProfiling,
                profileImage: omits(profile),
                bankImage: omits(bankImg),
                profileBgImage: omits(profileBg),
                bankInfo,
                sns: omits(snsHook.sns),
                applyAt: isJoinGuide ? new Date() : undefined,
                profileVideo: omits(profileVideo),
                profileMediumImage: omits(profileMediumImage),
            };

            updateMu({
                variables: {
                    input: {
                        ...omitTypeName(nextData),
                        regions: omitTypeName(nextData.regions),
                    },
                    userId: me?._id,
                },
            }).then(() => {
                if (isJoinGuide) {
                    toast.success("가이드 신청이 접수 되었습니다");
                    history.push(GuidePath.joinReady);
                } else {
                    toast.success("프로필이 수정 되었습니다");
                }
            });
        }
    };

    const hanldeUpdateBookerProfile = () => {
        if (profileValidation()) {
            const nextData: UserUpdateInput = {
                name,
                phoneNumber,
                birthDate: birthDay,
                gender,
                _password: securityInfoChange ? passwordHook.value : undefined,
                email: securityInfoChange ? emailHook.value : undefined,
                countryCode,
                passportNumber,
                profileImage: omitsAuto(profile),
            };

            updateMu({
                variables: {
                    input: {
                        ...omitTypeName(nextData),
                    },
                    userId: me?._id,
                },
            }).then(() => {
                if (isOauthProfiling) {
                    toast.success(s("wellcometxt"));
                    router.push(Paths.locationalGuide);
                }
                toast.success(profileUpdateCompleteMessage);
            });
        }
    };

    const handleSignUpAsBooker = () => {
        if (profileValidation()) {
            const { email, name, password, phoneNumber, profile } = vals;

            const nextData: UserSignUpInput = {
                _password: password,
                email,
                name,
                gender,
                phoneNumber,
                profileImage: profile,
                birthDate,
                countryCode,
            };

            signUpMu({
                variables: {
                    role: UserRole.BUYER,
                    input: { ...omits(nextData) },
                },
            });
        }
    };

    useEffect(() => {
        setEmailDuplicateCheck(false);
    }, [emailHook.value]);
    useEffect(() => {
        setEmailDuplicateCheck(false);
    }, [nickNameHook.value]);

    return {
        gender,
        setGender,
        oauthEmail,
        vals,
        langs,
        setLangs,
        introduceHook,
        guideLicenses,
        setGuideLicenses,
        bankImgHook,
        isApplying,
        regionRadioHook,
        securityInfoChange,
        setSecurityInfoChange,
        emailHook,
        passwordCheckHook,
        passwordHook,
        guideCats,
        setGuideCats,
        resginModalHook,
        profileBgImageHook,
        handleSignUpAsBooker,
        handleChangeToGuide,
        handleEmailDuplicateCheck,
        handleNickNameDuplicateCheck,
        nickNameDuplicateChecked,
        emailDuplicateChecked,
        profileValidationNodes,
        profileValidation,
        langValues,
        profileUplodHook,
        countryCode,
        counturyCodeHook,
        passportNumberHook,
        birthDateHook,
        nameHook,
        nickNameHook,
        isOauthProfiling,
        bankInfoHook,
        phoneNumberHook,
        checkEmailDuplicate,
        signUpPolicesHook,
        hanldeUpdateBookerProfile,
        guideJoinPoilicyCheckHook,
        checkNickNameDuplicateCheck,
        setNickNameDuplicateCheck,
        snsHook,
        setEmailDuplicateCheck,
        mediumImageHook,
        mediumVideoHook,
    };
};
