import { JDradioButton } from "@janda-com/front";
import { ISet } from "@janda-com/front/dist/types/interface";
import React, { useContext } from "react";
import { AppContext } from "../../../context/context";
import { LANGUAGES, _ProductFilter } from "../../../types/api";
import { LanguagesOps } from "../../../utils/enumToKr";

interface IProp {
    filter: _ProductFilter;
    setFilter: ISet<_ProductFilter>;
}

export const LanguageFilter: React.FC<IProp> = ({ filter, setFilter }) => {
    const { languages__in } = filter;

    const handleSet = (langs?: LANGUAGES[]) => {
        filter.languages__in = langs;
        setFilter({ ...filter });
    };

    return (
        <div>
            <JDradioButton
                btnProps={{ mode: "border", size: "long", mb: "small" }}
                selectedValues={languages__in || []}
                onChangeSelect={handleSet as any}
                options={LanguagesOps}
            />
        </div>
    );
};
