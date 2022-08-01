import {
    autoComma,
    Bold,
    Flex,
    IJDalignProp,
    JDalign,
    Tiny,
} from "@janda-com/front";
import React from "react";
import { FeeType, Ffeepolicy } from "../../types/api";

interface IProp extends IJDalignProp {
    price: number;
    feePolicy: Ffeepolicy;
}

export const FeeViwer: React.FC<IProp> = ({ feePolicy, price, mb, mr }) => {
    const {
        feeName,
        fee,
        feePercent,
        type,
        createdAt,
        feePercentUnder,
        feeDescription,
    } = feePolicy;
    const isPercent = type === FeeType.PERCNET;
    const feeDigitNumber =
        ((feePercent || 0) + (feePercentUnder || 0) / 100) / 100;
    const percentPrice = Math.floor(price * feeDigitNumber);

    return (
        <Tiny flex={{ vCenter: true }} mb={mb} mr={mr}>
            <Bold mr>{feeName}</Bold>
            <JDalign hide={isPercent}>- {autoComma(fee || 0)}</JDalign>
            <JDalign hide={!isPercent}>
                - {autoComma(percentPrice)} (
                {feePercent + "." + (feePercentUnder || 0)})%
            </JDalign>
        </Tiny>
    );
};

interface IFeeViewersProps extends IJDalignProp {
    price: number;
    feePolicies: Ffeepolicy[];
}

export const FeeViewers: React.FC<IFeeViewersProps> = ({
    feePolicies,
    price,
}) => {
    return (
        <div>
            {feePolicies.map((feePolicy) => (
                <FeeViwer
                    key={feePolicy._id}
                    feePolicy={feePolicy}
                    price={price}
                />
            ))}
        </div>
    );
};
