import {
    Flex,
    IJDalignProp,
    JDalign,
    Large,
    Small,
    Tiny,
} from "@janda-com/front";
import dayjs from "dayjs";
import React, { useRef, useState } from "react";
import { useAvailDateProductList } from "../../hook/useTour";
import { JDicon } from "../icons/Icons";

interface IProp extends Omit<IJDalignProp, "onSelect"> {
    onSelect?: (date: Date) => void;
    selectedDay?: Date;
    startDay?: Date;
}

export const isSameDate = (a: Date, b: Date) => dayjs(a).isSame(b, "date");

const generateDateArray = (from = new Date(), cnt = 30) => {
    return new Array(cnt)
        .fill(null)
        .map((_, i) => dayjs(from).add(i, "day").toDate());
};

export const BigHorizenCalendar: React.FC<IProp> = ({
    startDay,
    selectedDay,
    onSelect: handleSelect,
    className,
    ...props
}) => {
    const [viewCnt, setViewCnt] = useState(30);
    const scrollWrapper = useRef<HTMLDivElement>(null);
    const dateArray = generateDateArray(startDay, viewCnt);
    const { data: dates } = useAvailDateProductList();

    const handleClickArrow = (go: "left" | "right") => () => {
        if (!scrollWrapper.current) return;
        const isLeft = go === "left";
        const currentScroll = scrollWrapper.current.scrollLeft;
        const scrollWidth = scrollWrapper.current.clientWidth;
        const scrollAmt = scrollWidth / 2;
        scrollWrapper.current.scrollLeft =
            currentScroll + (isLeft ? -1 * scrollAmt : scrollAmt);

        setViewCnt(viewCnt + 5);
    };

    return (
        <JDalign className={`bigHorizenCalendar ${className}`} {...props}>
            <JDicon
                onClick={handleClickArrow("left")}
                className="bigHorizenCalendar__icons bigHorizenCalendar__icons--left"
                icon="shortLeft"
            />
            <div ref={scrollWrapper} className="bigHorizenCalendar__daysWrap">
                {dateArray.map((d, index) => {
                    const isSelectedDay = selectedDay
                        ? isSameDate(selectedDay, d)
                        : false;

                    const hasTour = dates?.find((date) => isSameDate(d, date));

                    return (
                        <Flex key={index.toString()}
                            onClick={() => {
                                handleSelect?.(d);
                            }}
                            column
                            center
                            vCenter
                            className={`bigHorizenCalendar__day ${isSelectedDay &&
                                `bigHorizenCalendar__day--selected`
                                } `}
                        >
                            {hasTour && 1}
                            <Tiny color="grey2">
                                {dayjs(d).format("YYYY.MM")}
                            </Tiny>
                            <Large weight={600}>{dayjs(d).format("DD")}</Large>
                            <Small color="grey4">
                                {dayjs(d).locale("ko").format("dd")}
                            </Small>
                        </Flex>
                    );
                })}
            </div>
            <JDicon
                onClick={handleClickArrow("right")}
                className="bigHorizenCalendar__icons bigHorizenCalendar__icons--right"
                icon="shortRight"
            />
        </JDalign>
    );
};
