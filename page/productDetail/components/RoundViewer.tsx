import { IJDalignProp, JDalign, JDbox } from "@janda-com/front";
import dayjs from "dayjs";
import React from "react";
import { yyyymmddLabelRange } from "../../../utils/dateFormat";

interface IRoundViwer extends IJDalignProp {
    start: Date;
    range: number;
    index: number;
}

export const RoundViewer: React.FC<IRoundViwer> = ({
    start,
    range,
    index,
    ...props
}) => {
    const end = dayjs(start).add(range, "days").toDate();
    return (
        <JDbox {...props}>
            {" "}
            [{index + 1}회차] {yyyymmddLabelRange(start, end)}
        </JDbox>
    );
};

interface IRoundViwersProps extends IJDalignProp {
    startDates: Date[];
    range: number;
}

export const RoundsViewer: React.FC<IRoundViwersProps> = ({
    startDates,
    range,
    ...props
}) => {
    return (
        <JDalign {...props}>
            {startDates.map((sd, index) => (
                <RoundViewer
                    mb="small"
                    index={index}
                    key={dayjs(sd).format("YYYYMMDD") + "RoundViwer"}
                    range={range}
                    start={sd}
                />
            ))}
        </JDalign>
    );
};
