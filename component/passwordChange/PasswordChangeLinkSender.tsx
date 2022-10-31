import { JDcard } from "@janda-com/front";
import React from "react";

interface IProp {}

export const PasswordChangeLinkSender: React.FC<IProp> = () => {
    return (
        <JDcard>
            코리아가이드 가입 시 사용한 이메일 주소를 입력해주시면 비밀번호를
            재설정 할 수 있는 링크를 보내드립니다.
        </JDcard>
    );
};
