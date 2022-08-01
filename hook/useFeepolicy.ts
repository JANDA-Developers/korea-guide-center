import { s4 } from "@janda-com/front";
import { useEffect } from "react";
import { FeeType, Ffeepolicy } from "../types/api";
import { useCopy } from "./useCopy";

export const DefaultFeePolicy: Ffeepolicy = {
    __typename: "FeePolicy",
    _id: s4(),
    createdAt: new Date(),
    fee: 0,
    feeDescription: "",
    feeName: "",
    feePercent: 0,
    type: FeeType.DEFAULT,
    updatedAt: new Date(),
    feePercentUnder: null,
    targetPayMethods: null,
};

export const useFeepolicy = (defaultFeePolicies?: Ffeepolicy[]) => {
    const [feePolicies, setFeePolicies] = useCopy(defaultFeePolicies || []);

    useEffect(() => {
        if (!feePolicies?.length) {
            setFeePolicies([DefaultFeePolicy]);
        }
    }, [feePolicies?.length]);

    return { feePolicies, setFeePolicies };
};
