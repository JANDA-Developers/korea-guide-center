import {
    IJDalignProp,
    JDalign,
    JDbutton,
    JDradioButton,
} from "@janda-com/front";
import { ISet } from "@janda-com/front/dist/types/interface";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../../../context/context";
import { _ProductFilter } from "../../../types/api";

interface IProp extends IJDalignProp {
    filter: _ProductFilter;
    setFilter: ISet<_ProductFilter>;
}

export const CategoryFilter: React.FC<IProp> = ({
    filter,
    setFilter,
    ...props
}) => {
    const { catMap, l, s } = useContext(AppContext);
    const { category__id__eq } = filter;

    const options = catMap.ITEM.map((item) => {
        return {
            label: l(item.label),
            value: item._id,
        };
    });

    const handleOn = (catId?: string) => () => {
        filter.category__id__eq = catId;
        setFilter({
            ...filter,
        });
    };

    return (
        <JDalign className="categoryFilter" {...props}>
            <JDbutton
                className="categoryFilter__btn"
                br="no"
                mode="flat"
                thema={!category__id__eq ? "primary" : undefined}
                onClick={handleOn(undefined)}
            >
                {s("seeAll")}
            </JDbutton>
            {options.map((op, index) => (
                <JDbutton
                    key={index}
                    className="categoryFilter__btn"
                    br="no"
                    mode="flat"
                    thema={
                        op.value === category__id__eq ? "primary" : undefined
                    }
                    onClick={handleOn(op.value)}
                >
                    {op.label}
                </JDbutton>
            ))}
        </JDalign>
    );
};
