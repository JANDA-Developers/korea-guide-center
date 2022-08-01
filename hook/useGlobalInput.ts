import { useState } from "react";
import { Flangs } from "../types/api";
import { DEFAULT_LANGS } from "../types/const";
import { useCopy } from "./useCopy";

export const useGlobalInput = (defaultLangSet?: Flangs | null) => {
    const [langs, setLangs] = useCopy(defaultLangSet || DEFAULT_LANGS);
    return { langs, setLangs };
};
