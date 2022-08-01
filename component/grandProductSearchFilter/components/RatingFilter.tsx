import { JDalign, JDcard, JDcheckBox } from "@janda-com/front";
import { ISet } from "@janda-com/front/dist/types/interface";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../../../context/context";
import { _ProductFilter } from "../../../types/api";

interface IProp {
    filter: _ProductFilter;
    setFilter: ISet<_ProductFilter>;
}

export const RatingFilter: React.FC<IProp> = ({ filter, setFilter }) => {
    const { s } = useContext(AppContext);
    const { rating__gte } = filter;

    const handleSet = (rating?: number) => () => {
        filter.rating__gte = rating;
        setFilter({ ...filter });
    };

    return (
        <div>
            <JDalign mb>
                <JDcheckBox
                    onChange={handleSet(undefined)}
                    label={s("allRaiting")}
                    checked={!rating__gte}
                />
            </JDalign>
            <JDalign mb>
                <JDcheckBox
                    onChange={handleSet(4)}
                    label={s("fourUpper")}
                    checked={rating__gte === 4}
                />
            </JDalign>
            <JDalign>
                <JDcheckBox
                    onChange={handleSet(5)}
                    label={s("only5")}
                    checked={rating__gte === 5}
                />
            </JDalign>
        </div>
    );
};
