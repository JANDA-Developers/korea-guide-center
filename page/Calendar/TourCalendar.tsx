import {
    IUseDayPicker,
    SkipUpdate,
    useDayPicker,
    useModal,
} from "@janda-com/front";
import { endOfMonth, startOfMonth } from "date-fns";
import dayjs from "dayjs";
import React, { useEffect } from "react";
import { useContext } from "react";
import Calendar, { ICalendarProps } from "../../component/Calendar/Calendar";
import { IUserModalInfo } from "../../component/userModal/UserModal";
import { useTourList } from "../../hook/useTour";
import { Ftour } from "../../types/api";
import { today, tomorrow } from "../../types/const";
import GuideContext from "../context";

interface IProp extends Partial<ICalendarProps> {
    items: Ftour[];
}

export const TourCalendar: React.FC<IProp> = ({
    // @ts-ignore
    item,
    items,
    // @ts-ignore
    dobuleClickEvent = "bookingView",
    // @ts-ignore
    dayPickerHook: _dayPickerHook,
    ...calendarProps
}) => {
    const { tourModalHook } = useContext(GuideContext);
    const unControllDayPickerHook = useDayPicker(null, null);
    const dayPickerHook = _dayPickerHook || unControllDayPickerHook;

    return (
        <div>
            <Calendar
                onNavigate={(date: any) => {
                    dayPickerHook.setFrom(date);
                }}
                onDoubleClickEvent={(e: any) => {
                    tourModalHook.openModal({
                        tourId: e.resource._id,
                    });
                }}
                onView={() => {}}
                displayTools
                startHour={today}
                popup
                views={["month", "agenda"]}
                defaultView="month"
                endHour={tomorrow}
                data={items || []}
                date={dayjs(dayPickerHook.from || undefined).toDate()}
                dateTimeRange={{
                    from: dayPickerHook.from,
                    to: dayPickerHook.to,
                }}
                {...calendarProps}
            />
        </div>
    );
};

interface ITourCalendarWrapProp extends Partial<IProp> {
    listVariables?: Parameters<typeof useTourList>;
}

export const TourCalendarWrap: React.FC<ITourCalendarWrapProp> = ({
    listVariables,
    ...props
}) => {
    const dayPickerHook = useDayPicker(new Date(), new Date());
    const {
        setFilter,
        items: products,
        getLoading,
    } = useTourList(
        {
            ...listVariables?.[0],
            initialFilter: {
                startDate__gte: startOfMonth(new Date()),
                startDate__lte: endOfMonth(new Date()),
            },
        },
        {
            skip: !dayPickerHook.from,
        }
    );

    useEffect(() => {
        const { from } = dayPickerHook;
        if (from) {
            setFilter({
                startDate__gte: startOfMonth(from),
                startDate__lte: endOfMonth(from),
            });
        }
    }, [dayPickerHook.from?.valueOf()]);

    return (
        <SkipUpdate skip={getLoading}>
            <TourCalendar
                // @ts-ignore
                dayPickerHook={dayPickerHook}
                items={products}
                {...props}
            />
        </SkipUpdate>
    );
};
