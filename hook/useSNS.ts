import { useState } from "react";
import { Fsns } from "../types/api";
import { useCopy } from "./useCopy";

export const useSNS = (defaultSns?: Fsns | null) => {
    const [sns, setSns] = useCopy<Fsns>(
        defaultSns || {
            __typename: "SNS",
            facebook: "",
            insta: "",
            line: "",
            twitter: "",
            youtube: "",
        }
    );
    const onChange = setSns;
    return { sns, setSns, onChange };
};
