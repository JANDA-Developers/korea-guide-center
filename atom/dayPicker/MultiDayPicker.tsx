import { ISet } from "@janda-com/front/dist/types/interface";
import React from "react";
import DayPicker from "react-day-picker";
import dayjs from "dayjs";

interface IProp {
    days: Date[];
    setDays: ISet<Date[]>;
}

export const MultiDayPicker: React.FC<IProp> = ({ days, setDays }) => {
    const handleMultiDayPick = (date: Date) => {
        const isInclude = !!days.find((day) => dayjs(day).isSame(date, "day"));
        if (isInclude) {
            setDays([...days.filter((day) => dayjs(day).isSame(date, "day"))]);
        } else {
            setDays([...days, date]);
        }
    };
    return <DayPicker selectedDays={days} onDayClick={handleMultiDayPick} />;
};
