import { autoComma, Flex, JDalign, Tiny, useDayPicker } from "@janda-com/front";
import { isSameDay } from "date-fns";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import JDdayPicker from "../../atom/dayPicker/DayPicker";
import { getEveryTourDate } from "../../page/productDetail/ProductDetail";
import { Fproduct, Ftour, TourStatus } from "../../types/api";
import { IDiv } from "../../types/interface";
import { mobileShortyFyWithOne, withWon } from "../../utils/formatter";
import { JDicon } from "../icons/Icons";
import { findTourByDate } from "./helper";

interface IProp extends IDiv {
    product: Fproduct;
    tours: Ftour[];
    selectedTour: Ftour;
    handleSelectTour: (tour: Ftour) => void;
    hasAvilalbeTour: boolean;
}

export const DetailTourPicker: React.FC<IProp> = ({
    product,
    tours,
    selectedTour,
    hasAvilalbeTour,
    handleSelectTour,
    ...props
}) => {
    const { locale } = useRouter();
    const dayPickerhook = useDayPicker(
        hasAvilalbeTour ? selectedTour.startDate : null,
        hasAvilalbeTour ? selectedTour.startDate : null
    );
    const [month, setMonth] = useState<Date>(
        dayPickerhook.from ? new Date(dayPickerhook.from) : new Date()
    );

    const avilableTours = getSelecTableTour(tours);
    const avilableTourDates = avilableTours.map((td) => new Date(td.startDate));

    useEffect(() => {
        if (!dayPickerhook.from) return;
        const targetTour = findTourByDate(tours, dayPickerhook.from);
        if (!targetTour) return;
        handleSelectTour(targetTour);
        setMonth(dayPickerhook.from);
    }, [dayPickerhook.from?.valueOf()]);

    return (
        <div
            className="detailTourPicker"
            id="ProductDetailDatePicker"
            {...props}
        >
            <JDdayPicker
                lang={locale}
                navbarElement={({
                    onPreviousClick,
                    onNextClick,
                    className,
                    month,
                    viewMonthRange,
                }: any) => {
                    return (
                        <JDalign
                            style={{ width: "100%", boxSizing: "border-box" }}
                            flex={{
                                between: true,
                                vCenter: true,
                            }}
                            className={className}
                        >
                            <JDicon
                                color="white"
                                onClick={() => {
                                    onPreviousClick();
                                }}
                                style={{
                                    transform: "rotate(90deg)",
                                }}
                                size="small"
                                icon="arrowSlim"
                            />

                            <div style={{ width: 200 }}>
                                {dayjs(month).format("YYYY MMM")}
                            </div>
                            <div style={{ width: 200 }}>
                                {dayjs(month)
                                    .add((viewMonthRange || 0) + 1, "month")
                                    .format("YYYY MMM월")}
                            </div>

                            <JDicon
                                size="small"
                                color="white"
                                style={{
                                    transform: "rotate(-90deg)",
                                }}
                                onClick={() => {
                                    onNextClick();
                                }}
                                icon="arrowSlim"
                            />
                        </JDalign>
                    );
                }}
                isRange={false}
                {...dayPickerhook}
                numberOfMonths={2}
                month={month}
                renderDay={(date) => {
                    const everyTourDate = getEveryTourDate(
                        [selectedTour.startDate],
                        (selectedTour?.productInfomation?.rangeDay || 1) - 1 ||
                            0
                    );

                    const targetTour = findTourByDate(tours, date);

                    const inRange = everyTourDate?.find((td) =>
                        dayjs(td).isSame(date, "date")
                    );
                    return (
                        <div
                            className={
                                "detailTourPicker__day" +
                                (inRange
                                    ? " detailTourPicker__day--inRange"
                                    : "")
                            }
                        >
                            <JDalign flex={{ column: true, center: true }}>
                                <JDalign mb="tiny">{date.getDate()}</JDalign>
                                <Tiny
                                    hide={!targetTour}
                                    className="detailTourPicker__priceFloat"
                                    size="superTiny"
                                >
                                    {mobileShortyFyWithOne(
                                        targetTour?.productInfomation
                                            .priceAdult || 0
                                    )}
                                </Tiny>
                            </JDalign>
                        </div>
                    );
                }}
                onMonthChange={(m) => {
                    const dir = dayjs(m).diff(month, "month") > 0;
                    const nextDate = dayjs(month)
                        .add(dir ? 1 : -1, "month")
                        .toDate();
                    setMonth(nextDate);
                }}
                selectedDays={hasAvilalbeTour ? undefined : []}
                disabledDays={(day) => {
                    const isTourDate = avilableTourDates?.find((date: Date) =>
                        dayjs(day).isSame(date, "day")
                    );
                    return !isTourDate;
                }}
            />
        </div>
    );
};

const isAvailableTourDay = (td: Date) =>
    dayjs(td).isAfter(dayjs().add(0, "day"), "day");

export const getSelecTableTourDates = (tourDates: Date[]) => {
    return tourDates?.filter((td) => isAvailableTourDay(td));
};

export const getSelecTableTour = (tours: Ftour[]) => {
    return tours.filter(
        (tour) =>
            isAvailableTourDay(tour.startDate) &&
            tour.tourStatus === TourStatus.READY
    );
};
