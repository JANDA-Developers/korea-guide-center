import { TDayPickerDot } from "@janda-com/front";
import dayjs from "dayjs";
import classNames from "classnames";
import { isEmpty } from "lodash";
import { Tip } from "../../../tip/Tip";
import { DATE } from "../../../../types/const";

export type TdayRenderMessageFn = (
    day: Date,
    dot?: TDayPickerDot
) => string | undefined;

interface IHorizienDayBindProp {
    message?: TdayRenderMessageFn;
    dots: TDayPickerDot[];
}

const horizienDay = (horizenDayBindProp: IHorizienDayBindProp, day: any) => {
    const { dots, message } = horizenDayBindProp;
    const date = day?.getDate() || new Date();
    let Month = day.getMonth() + 1;

    const classes = classNames("DayPicker-Day", "", {
        "DayPicker-Day--today": dayjs(day).isSame(DATE.today, "day"),
    });

    if (Month === 0) Month = 12;

    const weekDay = parseInt(dayjs(day).format("d"));
    const isSat = weekDay === 6;
    const isSun = weekDay === 0;

    const dot = dots.find((dot) =>
        dayjs(day).add(9, "h").isSame(dot.date, "day")
    );

    return (
        <Tip Tag="div" message={message?.(day, dot) || ""} className={classes}>
            <div className="DayPicker-Day__dotWrap">
                {!isEmpty(dot) && <span className="DayPicker-Day__dot" />}
            </div>
            {date}
            <span
                className={`DayPicker-Day__month ${
                    isSat && "DayPicker-Day__month--sat"
                } ${isSun && "DayPicker-Day__month--sun"}`}
            >
                {` / ${Month}${dayjs(day).locale("ko").format("dd")}`}
            </span>
        </Tip>
    );
};

export default horizienDay;
