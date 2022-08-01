import {
    Flex,
    InputText,
    JDcard,
    JDselect,
    opFind,
    Tiny,
} from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { AutoCompeletePreventer } from "../../component/AutoCompeltePreventer/AutoCompletePreventer";
import { BirthDayPicker } from "../../component/birthDayPicker/BirthDayPicker";
import { CardBtn } from "../../component/btns/ModalBtn";
import { CheckBtn } from "../../component/checkBtn/CheckBtn";
import PasswordChecker from "../../component/passwordChecker/PasswordCheck";
import { PolicyCheckers } from "../../component/policyViewer/PolicyChecker";
import { AppContext } from "../../context/context";
import { useLanguageHardChange } from "../../hook/useLanguageHardChange";
import { useProfile } from "../../hook/useProfile";
import { counturyOps } from "../../utils/countury";

interface IProp {}

export const SignUp: React.FC<IProp> = () => {
    if (typeof window === "undefined") return null;
    const { s } = useContext(AppContext);
    const profileHook = useProfile("SignUp");
    useLanguageHardChange();

    const {
        isOauthProfiling,
        birthDateHook,
        countryCode,
        signUpPolicesHook,
        emailHook,
        nameHook,
        counturyCodeHook,
        phoneNumberHook,
        handleEmailDuplicateCheck,
        emailDuplicateChecked,
        passwordHook,
        passwordCheckHook,
        hanldeUpdateBookerProfile,
        handleSignUpAsBooker,
    } = profileHook;

    return (
        <JDcard
            foot={
                <CardBtn
                    onClick={
                        isOauthProfiling
                            ? hanldeUpdateBookerProfile
                            : handleSignUpAsBooker
                    }
                    size="long"
                    label={s("signUp")}
                />
            }
            mode="border"
        >
            <AutoCompeletePreventer />
            <InputText
                maxLength={15}
                mb
                {...nameHook}
                label={s("name")}
                require
            />
            <Flex mb oneone vEnd>
                <InputText
                    maxLength={30}
                    label={s("email")}
                    mr
                    id="EmailInput"
                    {...emailHook}
                    require
                />
                <CheckBtn
                    onClick={handleEmailDuplicateCheck}
                    checked={!!emailDuplicateChecked}
                >
                    {s("dupliCateCheck")}
                </CheckBtn>
            </Flex>
            <InputText
                hyphen
                mb
                maxLength={20}
                {...phoneNumberHook}
                label={s("phoneNumber")}
                require
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
            <BirthDayPicker
                mr
                mb
                label={s("birthDay")}
                id={`TravlerFormBirthDay`}
                birthDate={birthDateHook[0]}
                setBirthDate={(date) => {
                    birthDateHook[1](new Date(date));
                }}
            />
            <div>
                {!isOauthProfiling && (
                    <div>
                        <InputText
                            require
                            mb="small"
                            type="password"
                            {...passwordHook}
                            label={s("password")}
                        />
                        <Tiny className="ITSpasswordChecker" mb>
                            <PasswordChecker txt={passwordHook.value} />
                        </Tiny>
                        <InputText
                            mb
                            require
                            type="password"
                            {...passwordCheckHook}
                            label={s("passwordCheck")}
                        />
                    </div>
                )}
            </div>
            <PolicyCheckers {...signUpPolicesHook} />
        </JDcard>
    );
};

export default SignUp;
