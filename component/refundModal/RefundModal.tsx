import {
    autoComma,
    InputText,
    IUseModal,
    JDlabel,
    JDmodal,
    JDswitch,
    useCheckBox,
    useInput,
    Validater,
} from "@janda-com/front";
import React from "react";
import { useBookingManage } from "../../hook/useBookingManage";
import { Fbooking } from "../../types/api";
import { BankHolderViewer } from "../bankHolderViewer/BankHolderViewer";
import { ModalBtn } from "../btns/ModalBtn";

export interface IRefundModalInfo {
    booking: Fbooking;
}

interface IProp {
    modalHook: IUseModal<IRefundModalInfo>;
    onSucess?: () => void;
}

export const RefundModal: React.FC<IProp> = ({ modalHook }) => {
    const { booking } = modalHook.info || {};
    const fullRefundHook = useCheckBox(true);

    const minusAblePrice =
        (booking?.paidPrice || 0) - (booking?.refundPrice || 0);
    const amtHook = useInput(minusAblePrice || 0);
    const { handleRefund } = useBookingManage(booking, {
        onSucess: modalHook.closeModal,
    });

    const refundAmt = fullRefundHook.checked ? minusAblePrice : amtHook.value;
    const { validate } = new Validater([
        {
            value: refundAmt,
            failMsg: "환불 가격을 입력 해주세요",
        },
        {
            value: minusAblePrice >= amtHook.value,
            failMsg: "환불금액이 취소 가능금액보다 큽니다",
        },
    ]);

    const onSubmit = () => {
        if (validate()) {
            handleRefund(refundAmt || 0);
            modalHook.closeModal();
        }
    };

    const { accountHolder, accountNum, bankName } =
        booking?.refundBankInfo || {};

    return (
        <JDmodal
            head={{ title: "환불하기" }}
            foot={<ModalBtn onClick={onSubmit} label="환불하기" />}
            {...modalHook}
        >
            {accountHolder && (
                <div>
                    <JDlabel txt="환불계좌정보" />
                    <BankHolderViewer
                        mb
                        bankAccount={accountNum || ""}
                        bankHolder={accountHolder || ""}
                        bankName={bankName || ""}
                    />
                </div>
            )}
            <JDswitch mb label="전체환불" {...fullRefundHook} />
            <InputText
                disabled={fullRefundHook.checked}
                comma
                label={`환불금액 ${autoComma(minusAblePrice)}환불가능`}
                {...amtHook}
            />
        </JDmodal>
    );
};
