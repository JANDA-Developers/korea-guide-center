import { JDbutton, JDcard, Tiny, useInput } from "@janda-com/front";
import { InputText } from "@janda-com/front/dist/components/InputText/InputText";
import SecurityLevelViewer from "@janda-com/front/dist/components/securityViewer/SecurityViewer";
import React, { useEffect, useState } from "react";
import { InfoCard } from "../../atom/InfoCard";
import PasswordChecker from "../../component/passwordChecker/PasswordCheck";
import { TCheck } from "../passwordChecker/SecurityLevelViewer";

interface IProp {}

export const PasswordChange: React.FC<IProp> = () => {
    const passwordHook = useInput("");
    const passwordCheckHook = useInput("");
    const [passwordLevelViewer, setPasswordLevelViewer] = useState<TCheck>({
        enAndNumber: false,
        length: false,
        special: false,
        checkedCount: 0,
    });

    const handleChange = () => {};

    return (
        <JDcard>
            <InfoCard>
                {`유의사항 (추천)
                - 8자~16자 길이로 만들어주세요. - 영문 대/소문자, 숫자,
                특수 문자 1가지 이상을 조합해주세요. - 3자 이상 연속/동일한 문자,
                숫자는 사용할 수 없습니다`}
            </InfoCard>

            <InputText mb label="새 비밀번호" />
            <PasswordChecker txt={passwordHook.value} />
            <SecurityLevelViewer
                setPasswordCondition={setPasswordLevelViewer}
                password={passwordHook.value}
                passwordCondition={passwordLevelViewer}
            />
            <InputText mb label="새 비밀번호 확인" />
            <JDbutton
                size="long"
                br="square"
                thema="primary"
                onClick={handleChange}
            >
                변경하기
            </JDbutton>
        </JDcard>
    );
};
