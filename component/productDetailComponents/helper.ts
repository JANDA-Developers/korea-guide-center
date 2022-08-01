import { Ftour } from "../../types/api";
import dayjs from "dayjs";

export const findTourByDate = (tours: Ftour[], date: Date) => {
    return tours.find((tour) => dayjs(date!).isSame(tour.startDate, "date"));
};
