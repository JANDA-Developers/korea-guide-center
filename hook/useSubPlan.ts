import { Validater } from "@janda-com/front";
import { useState } from "react";
import { FsubPlan } from "../types/api";

export const useSubPlan = (defaultSubPlanes: FsubPlan[]) => {
    const [subPlanes, setSubplanes] = useState<FsubPlan[]>(defaultSubPlanes);

    return { subPlanes, setSubplanes };
};
