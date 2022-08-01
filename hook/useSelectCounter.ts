import { opFind, useSelect } from "@janda-com/front";
import { IselectedOption } from "@janda-com/front/dist/types/interface";
import { COUNT } from "../types/const";

export const useSelectCounter = (
    defaultVal: number = 0,
    OPs: IselectedOption[] = COUNT
) => useSelect(opFind(defaultVal as any, OPs, true), OPs);
