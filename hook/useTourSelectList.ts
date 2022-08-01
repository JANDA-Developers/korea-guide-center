import { IselectedOption } from "@janda-com/front/dist/types/interface";
import { useTourList } from "./useTour";

export const useTourSelectList = () => {
    const tourListHook = useTourList();
    const { items: tours } = tourListHook;

    const ops: IselectedOption[] = tours.map((tour) => ({
        label:
            tour.productInfomation.title?.ko +
            `[${tour.number}]회차 ${tour.code}`,
        value: tour._id,
    }));

    return { ops, ...tourListHook };
};
