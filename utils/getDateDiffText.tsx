import { TimePerMs } from "@janda-com/front";
import dayjs from "dayjs";
import { useContext } from "react";
import { AppContext } from "../context/context";

export const getDateDiffText = (date: Date) => {
    const { s } = useContext(AppContext);
    let dateText = dayjs(date).format("YYYY-MM-DD");

    const newDateValue = new Date().valueOf();
    const compareDateValue = new Date(date).valueOf();
    const diff = newDateValue - compareDateValue;

    const minDiff = Math.floor(diff / TimePerMs.M);
    const hourDiff = Math.floor(diff / TimePerMs.H);
    const dateDiff = Math.floor(diff / TimePerMs.DAY);
    const secondDIff = Math.floor(diff / 1000);

    if (dateDiff) {
        dateText = `${dateDiff}${s("daybeforeBefore")}`;
    } else if (hourDiff) {
        dateText = `${hourDiff} ${s("hourAgo")}`;
    } else if (minDiff) {
        dateText = `${minDiff || 1} ${s("minAgo")}`;
    } else {
        dateText = `${s("newBorn")}`;
    }

    return dateText;
};
