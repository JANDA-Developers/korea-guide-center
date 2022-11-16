import { autoComma, Flex, JDcard } from "@janda-com/front";
import { JDcardProps } from "@janda-com/front/dist/components/cards/Card";
import React, { useContext } from "react";
import { Info } from "../../atom/Info";
import { AppContext } from "../../context/context";
import { yyyymmddHHmm } from "../../utils/dateFormat";
import { CardHead } from "../modalHead/ModalHead";

interface IProp extends JDcardProps {
    bankName: string;
    bankAccount: string;
    bankHolder: string;
    expireAt?: Date;
    price?: number;
}

export const BankHolderViewer: React.FC<IProp> = ({
    children,
    bankAccount,
    bankHolder,
    bankName,
    ...props
}) => {
    return (
        <JDcard mode="border" {...props}>
            <div>
                <Flex vCenter>
                    <Info mr label="은행" value={bankName} />
                    <Info mr label="계좌번호" value={bankAccount} />
                    <Info label="계좌주" value={bankHolder} />
                </Flex>
                {children}
            </div>
        </JDcard>
    );
};

export const KGCBankHolderViewer: React.FC<Partial<IProp>> = ({ price }) => {
    const { s } = useContext(AppContext);
    return (
        <BankHolderViewer
            mb
            head={
                <CardHead
                    title={s("resvWillCompleteIf")}
                    description={
                        price ? s("price") + ": " + autoComma(price) : undefined
                    }
                />
            }
            bankName="농협"
            bankHolder="코리아가이드센터(주)"
            bankAccount={"301-0308-0055-81"}
        />
    );
};
export const BankHolderViewerWideMode: React.FC<IProp> = ({
    expireAt,
    children,
    bankAccount,
    bankHolder,
    bankName,
    ...props
}) => {
    return (
        <div>
            <Flex column>
                <Info mb between label="은행" value={bankName} />
                <Info mb between label="계좌번호" value={bankAccount} />
                <Info mb between label="계좌주" value={bankHolder} />
                <Info
                    hide={!expireAt}
                    between
                    label="입금만료"
                    value={yyyymmddHHmm(expireAt)}
                />
            </Flex>
            {children}
        </div>
    );
};
