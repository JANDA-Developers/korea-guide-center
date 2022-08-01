import { s4 } from "@janda-com/front";
import { useMemo } from "react";

export const useS4 = () => {
    const randomId = useMemo(() => s4(), []);
    return randomId;
};
