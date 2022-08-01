import { Ftour } from "../types/api";
import { twoDigit } from "./digits";

export const getTourStartTimeString = (tour: Ftour) => {
    const { productInfomation } = tour;
    const { startTimeAmPm, startTimeHour, startTimeMin } = productInfomation;

    if (startTimeAmPm === "NONE") return "-";
    if (!startTimeAmPm || !startTimeHour) return "-";
    return `${startTimeAmPm} ${twoDigit(startTimeHour)}:${twoDigit(
        startTimeMin
    )}`;
};
