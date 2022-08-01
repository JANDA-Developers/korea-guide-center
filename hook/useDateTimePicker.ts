import { useDayPicker, useTimePicker } from "@janda-com/front";
import dayjs from "dayjs";
import { todayDate, tomorrowDate } from "../types/const";

export type TUseDateTimePicker = ReturnType<typeof useDateTimepicker>;
export interface IUseDatePickerProps {
    defaultStart: Date;
    defaultEnd: Date;
    rangeFix?: boolean;
}
export const useDateTimepicker = (
    { defaultEnd, defaultStart }: IUseDatePickerProps = {
        defaultEnd: tomorrowDate,
        defaultStart: todayDate,
    }
) => {
    const startDateHook = useDayPicker(defaultStart, defaultStart);
    const endDateHook = useDayPicker(defaultEnd, defaultEnd);
    const startTimerHook = useTimePicker({
        hour: dayjs(defaultStart).get("hour"),
        min: dayjs(defaultStart).get("minute"),
    });
    const endTimerHook = useTimePicker({
        hour: dayjs(defaultEnd).get("hour"),
        min: dayjs(defaultEnd).get("minute"),
    });

    const startDate = dayjs(startDateHook.from || new Date())
        .set("hour", startTimerHook.hour)
        .set("minute", startTimerHook.min);

    const endDate = dayjs(
        endDateHook.from ? new Date(endDateHook.from) : new Date()
    )
        .set("hour", endTimerHook.hour)
        .set("minute", endTimerHook.min);

    return {
        startDateHook,
        endDateHook,
        startTimerHook,
        endTimerHook,
        startDate,
        endDate,
    };
};
