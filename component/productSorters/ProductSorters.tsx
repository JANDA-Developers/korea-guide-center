import { IJDalignProp, JDalign, JDtypho } from "@janda-com/front";
import { ISet } from "@janda-com/front/dist/types/interface";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { _ProductSort } from "../../types/api";
import { TElements } from "../../types/interface";

interface IProp extends IJDalignProp {
    sort: _ProductSort[];
    targetSort: _ProductSort;
    setSort: ISet<_ProductSort[]>;
}

export const Sorter: React.FC<IProp> = ({
    sort,
    targetSort,
    setSort,
    ...props
}) => {
    const handleSort = () => {
        setSort([targetSort]);
    };

    const sortOn = sort.includes(targetSort);

    return (
        <JDtypho
            hover
            style={{
                whiteSpace: "nowrap",
            }}
            weight={sortOn ? 600 : undefined}
            color={sortOn ? "black" : ("grey2" as any)}
            {...props}
            onClick={handleSort}
        />
    );
};

export const NewSorter: React.FC<Omit<IProp, "targetSort">> = (props) => {
    const { s } = useContext(AppContext);
    return (
        <Sorter {...props} targetSort={_ProductSort.createdAt__desc}>
            {s("new")}
        </Sorter>
    );
};

export const RatingSort: React.FC<Omit<IProp, "targetSort">> = (props) => {
    const { s } = useContext(AppContext);
    return (
        <Sorter {...props} targetSort={_ProductSort.rating__desc}>
            {s("ratingOrder")}
        </Sorter>
    );
};

export const ReviwCountSort: React.FC<Omit<IProp, "targetSort">> = (props) => {
    const { s } = useContext(AppContext);
    return (
        <Sorter {...props} targetSort={_ProductSort.reviewCount__desc}>
            {s("reviewOrder")}
        </Sorter>
    );
};

export const PriceSortLarge: React.FC<Omit<IProp, "targetSort">> = (props) => {
    const { s } = useContext(AppContext);
    return (
        <Sorter {...props} targetSort={_ProductSort.priceAdult__desc}>
            {s("highestPrice")}
        </Sorter>
    );
};

export const PriceSortMin: React.FC<Omit<IProp, "targetSort">> = (props) => {
    const { s } = useContext(AppContext);
    return (
        <Sorter {...props} targetSort={_ProductSort.priceAdult__asc}>
            {s("lowestPrice")}
        </Sorter>
    );
};
