import {
    Bold,
    Flex,
    JDbutton,
    JDdayPicker,
    useDayPicker,
} from "@janda-com/front";
import { ISet } from "@janda-com/front/dist/types/interface";
import React from "react";
import { useEffect, useContext } from "react";
import { AppContext } from "../../../context/context";
import { _ProductFilter } from "../../../types/api";
import { yyyymmdd } from "../../../utils/dateFormat";
import { checkMobile } from "../../../utils/isMobile";

interface IProp {
    filter: _ProductFilter;
    setFilter: ISet<_ProductFilter>;
}

export const DateFilter: React.FC<IProp> = ({ filter, setFilter }) => {
    const { s } = useContext(AppContext);
    const { elemMatch } = filter;
    const dayPickerHook = useDayPicker(
        elemMatch?.tourDates__gte || null,
        elemMatch?.tourDates__lte || null
    );

    useEffect(() => {
        if (dayPickerHook.from && dayPickerHook.to) {
            if (!filter["elemMatch"]) filter["elemMatch"] = {};
            filter["elemMatch"]["tourDates__gte"] = dayPickerHook.from;
            filter["elemMatch"]["tourDates__lte"] = dayPickerHook.to;
            setFilter({
                ...filter,
            });
        }
    }, [dayPickerHook.from?.valueOf(), dayPickerHook.to?.valueOf()]);

    let isMobile = checkMobile();

    return (
        <Flex between vCenter>
            <Bold>{s("itinerary")}</Bold>
            {isMobile ? (
                <JDdayPicker {...dayPickerHook} />
            ) : (
                <JDdayPicker
                    {...dayPickerHook}
                    mode={"input"}
                    inputComponent={(input) => {
                        const from = dayPickerHook.from;
                        const to = dayPickerHook.to;

                        let rangeStr = s("selectDates");

                        if (from && to)
                            rangeStr = yyyymmdd(from) + "~" + yyyymmdd(to);

                        return (
                            <JDbutton
                                size="small"
                                mode="flat"
                                br="square"
                                label={rangeStr}
                                onClick={input.onClick}
                            />
                        );
                    }}
                />
            )}
        </Flex>
    );
};
