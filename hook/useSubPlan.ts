import { Validater } from "@janda-com/front";
import { useState } from "react";
import { FsubPlan } from "../types/api";

export const useSubPlan = (defaultSubPlanes: FsubPlan[]) => {
    const [subPlanes, setSubplanes] = useState<FsubPlan[]>(defaultSubPlanes);

    // const {validate} = new Validater(subPlanes.map(subPlan => ({
    //     value: !!subPlan.title.ko
    // }))

    return { subPlanes, setSubplanes };
};
