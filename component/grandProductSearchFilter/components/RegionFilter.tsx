import { JDalign, JDcard, JDcheckBox } from "@janda-com/front";
import { ISet } from "@janda-com/front/dist/types/interface";
import React, { useContext } from "react";
import { AppContext } from "../../../context/context";
import { _ProductFilter } from "../../../types/api";

interface IProp {
    filter: _ProductFilter;
    setFilter: ISet<_ProductFilter>;
}

export const RegionFilter: React.FC<IProp> = ({ filter, setFilter }) => {
    const { region__id__eq } = filter;
    const { catOpMap, s } = useContext(AppContext);
    const regions = catOpMap.REIGION;

    const handleSet = (categoryId?: string) => () => {
        filter.region__id__eq = categoryId;
        setFilter({ ...filter });
    };

    return (
        <div className="RegionFilter">
            <JDcheckBox
                mb
                label={s("seeAll")}
                onChange={handleSet(undefined)}
                checked={!region__id__eq}
            />
            {regions.map((region) => (
                <JDalign mb>
                    <JDcheckBox
                        key={region.value + "filterBox"}
                        label={region.label}
                        onChange={handleSet(region.value)}
                        checked={region.value === region__id__eq}
                    />
                </JDalign>
            ))}
        </div>
    );
};
