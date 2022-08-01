import { useState } from "react";
import { IselectedOption } from "@janda-com/front/dist/types/interface";

export const useMultiSelect = (
    defaultValues: any[],
    options: IselectedOption[]
) => {
    const [selectedOptions, onChanges] = useState(
        options.filter((op) => defaultValues?.includes(op.value)) || []
    );

    const selectedValues = selectedOptions?.map((op) => op.value);

    return {
        isMulti: true,
        options,
        selectedValues,
        selectedOptions,
        onChanges,
    };
};
