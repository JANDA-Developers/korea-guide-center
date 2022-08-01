import { Bold, JDcard, JDselect, opFind } from "@janda-com/front";
import { InputText } from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../../../../context/context";
import { IUseBookingWrite } from "../../../../hook/useBookingWrite";
import { PAY_METHOD_LANGS_OPS, PAY_METHOD_OPS } from "../../../../types/const";

interface IProp extends IUseBookingWrite {}

export const PayInfoBlock: React.FC<IProp> = ({ paymethodHook, priceHook }) => {
    const { s } = useContext(AppContext);
    const selectedPayMethodOp = opFind(
        paymethodHook[0],
        PAY_METHOD_LANGS_OPS(s)
    );
    return (
        <JDcard mode="border">
            <Bold mb>결제정보</Bold>
            <JDselect
                mb
                selectedOption={selectedPayMethodOp}
                label={"결제방법"}
            />
            <InputText
                comma
                label="결제금액"
                value={priceHook[0]}
                onChange={(val) => {
                    priceHook[1](val);
                }}
            />
        </JDcard>
    );
};
