import { JDdayPicker, useDayPicker } from "@janda-com/front";
import React, { useEffect } from "react";
import dayjs from "dayjs";
import { IJDdayPickerProps } from "@janda-com/front/dist/components/dayPicker/DayPicker";

interface IProp extends Partial<IJDdayPickerProps> {
    value?: string;
    onChange?: (val: string) => void;
}

export const DayPickerAdater: React.FC<IProp> = ({
    value,
    onChange,
    ...props
}) => {
    const defaultDate = dayjs(value).toDate();
    const dayPickerHook = useDayPicker(defaultDate, defaultDate);

    useEffect(() => {
        onChange?.(dayPickerHook.from?.toISOString() || "");
    }, [dayPickerHook.from]);

    return (
        <JDdayPicker
            isRange={false}
            mode="input"
            {...dayPickerHook}
            {...props}
        />
    );
};
