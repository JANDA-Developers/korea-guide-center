import { useState } from "react";
import { Fattribute } from "../types/api";

export const useAttributes = (defaultAttributes?: Fattribute[]) => {
    const [attributes, setAttributes] = useState<Fattribute[]>(
        (defaultAttributes || []).slice()
    );
    return { attributes, setAttributes };
};
