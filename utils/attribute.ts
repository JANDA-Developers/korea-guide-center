import { isEmpty } from "lodash";
import { Fattribute } from "../types/api";

export const findUnFilledAttribute = (attributes: Fattribute[]) => {
    return attributes.find((attr) => {
        const unFilled = attr.require && !attr.value;
        if (unFilled) {
            return true;
        }
        return !!unFilled;
    });
};
