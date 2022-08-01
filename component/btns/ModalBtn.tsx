import { JDbutton } from "@janda-com/front";
import { IButtonProps } from "@janda-com/front/dist/components/button/Button";
import React from "react";

interface IProp extends IButtonProps {}

// 모달 하단에 있는 버튼
export const ModalBtn: React.FC<IProp> = ({ ...props }) => {
    return (
        <JDbutton
            br="square"
            thema="grey4"
            mode="flat"
            padding="huge"
            {...props}
        />
    );
};

// 카드 하단에 있는 버튼
export const CardBtn: React.FC<IProp> = ({ ...props }) => {
    return (
        <JDbutton
            padding="small"
            br="square"
            size="small"
            thema="grey4"
            mode="flat"
            {...props}
        />
    );
};

// 테이블 안에 있는버튼
export const TableBtn: React.FC<IProp> = ({ ...props }) => {
    return (
        <JDbutton
            size="small"
            mb="small"
            br="round"
            mode="border"
            padding="small"
            {...props}
        />
    );
};
