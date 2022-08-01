import {
    Flex,
    IJDalignProp,
    JDlabel,
    JDselect,
    opFind,
    toNumber,
    useSelect,
} from "@janda-com/front";
import { IselectedOption } from "@janda-com/front/dist/types/interface";
import dayjs from "dayjs";
import React from "react";
import { DAY_OPS, MONTH_OPS, YEARS_OPS } from "../../types/const";
import { AutoCompeletePreventer } from "../AutoCompeltePreventer/AutoCompletePreventer";

interface IProp extends IJDalignProp {
    label?: string;
    birthDate: Date;
    setBirthDate: (date: Date) => void;
}

export const BirthDayPicker: React.FC<IProp> = ({
    label,
    birthDate: _birthDate,
    setBirthDate,
    ...props
}) => {
    const birthDate = new Date(_birthDate) || new Date();
    if (!dayjs(birthDate).isValid()) return null;
    const month = birthDate.getMonth();
    const date = birthDate.getDate();
    const year = birthDate.getFullYear();
    const handleMonth = (day: number) => {
        birthDate.setMonth(day);
    };

    const handleDay = (day: number) => {
        birthDate.setDate(day);
    };

    const handleYear = (value: number) => {
        birthDate.setFullYear(value);
    };

    const handleDate = (type: "m" | "d" | "y") => (op: IselectedOption) => {
        const num = toNumber(op.value);
        if (type === "m") handleMonth(num);
        if (type === "y") handleYear(num);
        if (type === "d") handleDay(num);
        setBirthDate(birthDate);
    };

    return (
        <div className="birthDayPicker">
            {label ? <JDlabel txt={label} /> : null}
            <Flex vCenter {...props}>
                <JDselect
                    className="birthDayPicker__year"
                    mr
                    selectedOption={opFind(year, YEARS_OPS)}
                    onChange={handleDate("y")}
                    options={YEARS_OPS}
                />
                <JDselect
                    className="birthDayPicker__month"
                    mr
                    selectedOption={opFind(month, MONTH_OPS)}
                    onChange={handleDate("m")}
                    options={MONTH_OPS}
                />
                <JDselect
                    className="birthDayPicker__day"
                    selectedOption={opFind(date, DAY_OPS)}
                    onChange={handleDate("d")}
                    options={DAY_OPS}
                />
                <AutoCompeletePreventer />
            </Flex>
        </div>
    );
};
