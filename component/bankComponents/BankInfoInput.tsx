import { InputText, Flex, IJDalignProp, JDalign } from "@janda-com/front";
import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import { FbankInfo } from "../../types/api";

interface IProp extends Omit<IJDalignProp, "onChange"> {
    bankInfo: FbankInfo;
    onChange: (bankInfo: FbankInfo) => void;
}

export const BankInfoInput: React.FC<IProp> = ({
    bankInfo,
    onChange,
    ...props
}) => {
    const { s } = useContext(AppContext);
    const { accountHolder, accountNum, bankName } = bankInfo;
    return (
        <JDalign {...props}>
            <Flex mb>
                <InputText
                    mr
                    value={accountHolder || ""}
                    onChange={(v) => {
                        bankInfo.accountHolder = v;
                        onChange({ ...bankInfo });
                    }}
                    id="BankHolderInput"
                    label={s("accountHolder")}
                />
                <InputText
                    value={bankName || ""}
                    onChange={(v) => {
                        bankInfo.bankName = v;
                        onChange({ ...bankInfo });
                    }}
                    id="BankNameInput"
                    label={s("bankName")}
                />
            </Flex>
            <InputText
                value={accountNum || ""}
                onChange={(v) => {
                    bankInfo.accountNum = v;
                    onChange({ ...bankInfo });
                }}
                id="BankAccountInput"
                label={s("footer_accountNum")}
            />
        </JDalign>
    );
};
