import { JDselect } from "@janda-com/front";
import { IselectedOption } from "@janda-com/front/dist/components/select/SelectBox";
import React, { PropsWithChildren } from "react";
import { IListHook } from "../../hook/useListQuery";
import { enumToOp } from "../../utils/enumToOps";

interface IProp<F, S> extends IListHook<F, S> {
    SORT: any;
    SortLang: any;
}

export const SortSelect = <F, S>({
    SORT,
    sort,
    setSort,
    SortLang,
}: PropsWithChildren<IProp<F, S>>): JSX.Element => {
    const options = enumToOp(SORT, SortLang).filter((v) => v.label);

    const handleChange = (op: IselectedOption) => {
        setSort([op.value]);
    };

    return (
        <JDselect
            selectedOption={{
                value: sort,
                label: (SortLang as any)[sort[0]],
            }}
            onChange={handleChange}
            options={options}
        />
    );
};
