import { Validater } from "@janda-com/front";
import { useState } from "react";
import { FbankInfo } from "../types/api";

export const useBankInfo = (defaultBankInfo?: FbankInfo) => {
    const [accountHolder, setAccountHolder] = useState(
        defaultBankInfo?.accountHolder || ""
    );
    const [accountNum, setAccountNum] = useState(
        defaultBankInfo?.accountNum || ""
    );
    const [bankName, setBankName] = useState(defaultBankInfo?.bankName || "");

    const handleChange = (bankInfo: FbankInfo) => {
        const { accountHolder, accountNum, bankName } = bankInfo;
        setAccountHolder(accountHolder || "");
        setAccountNum(accountNum || "");
        setBankName(bankName || "");
    };

    const { validate: bankInfoValidate, nodes: bankInfoNodes } = new Validater([
        {
            value: bankName,
            failMsg: "은행명을 입력 해주세요.",
            id: "BankNameInput",
        },
        {
            value: bankName,
            failMsg: "계좌번호를 입력 해주세요.",
            id: "BankAccountInput",
        },
        {
            value: bankName,
            failMsg: "계좌주명을 입력 해주세요.",
            id: "BankHolderInput",
        },
    ]);

    const nextBankInfo: FbankInfo = {
        __typename: "BankInfo",
        accountHolder,
        accountNum,
        bankName,
    };

    return {
        bankInfoNodes,
        handleChange,
        bankInfoValidate,
        bankName,
        accountNum,
        accountHolder,
        nextBankInfo,
    };
};
