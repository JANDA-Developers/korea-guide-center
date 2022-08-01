import { JDsearchInput, ISearchViewData } from "@janda-com/front";
import React from "react";
import { TSearchComponent } from "./Search";

interface IProp {}

export const DefaultMapSearcher: TSearchComponent = ({
    suggestions,
    value,
    setValue,
    onSelect,
}) => {
    const options = suggestions.data.map(
        (d): ISearchViewData => ({
            title: d.description,
            describe: d.structured_formatting.main_text,
            id: d.place_id,
        })
    );
    return (
        <div className="SearchGoogleMapPopUp__searchInput">
            <JDsearchInput
                onSearchChange={(val) => {
                    setValue(val);
                }}
                inputProp={{
                    placeholder: "검색어를 입력 하세요.",
                }}
                searchValue={value}
                onSelectData={(d) => {
                    onSelect(d.title);
                }}
                dataList={options}
            />
        </div>
    );
};
