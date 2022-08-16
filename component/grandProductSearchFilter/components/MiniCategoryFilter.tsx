import { IJDalignProp, JDalign, JDbutton } from "@janda-com/front";
import { ISet } from "@janda-com/front/dist/types/interface";
import React, { useContext } from "react";
import { AppContext } from "../../../context/context";
import { _ProductFilter } from "../../../types/api";

interface IProp extends IJDalignProp {
    filter: _ProductFilter;
    setFilter: ISet<_ProductFilter>;
}

export const MiniCategoryFilter: React.FC<IProp> = ({
    filter,
    setFilter,
    ...props
}) => {
    const { catOpMap, l, s } = useContext(AppContext);
    const { categoryMini__id__in } = filter;

    const handleOn = (catId?: string) => () => {
        filter.categoryMini__id__in = catId ? [catId] : undefined;
        setFilter({
            ...filter,
        });
    };

    return (
        <div>
            <JDalign className="categoryFilter" {...props}>
                <JDbutton
                    className="categoryFilter__btn"
                    br="no"
                    mode="flat"
                    thema={!categoryMini__id__in?.[0] ? "primary" : undefined}
                    onClick={handleOn(undefined)}
                >
                    {s("seeAll")}
                </JDbutton>
                {catOpMap.ITEM_SMALL.map((op, index) => (
                    <JDbutton
                        key={index}
                        className="categoryFilter__btn"
                        br="no"
                        mode="flat"
                        thema={
                            op.value === categoryMini__id__in?.[0]
                                ? "primary"
                                : undefined
                        }
                        onClick={handleOn(op.value)}
                    >
                        {op.label}
                    </JDbutton>
                ))}
            </JDalign>{" "}
        </div>
    );
};
