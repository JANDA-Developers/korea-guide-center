import { useContext } from "react";
import { AppContext } from "../../context/context";
import { getTourSummary } from "../../page/tour/components/TourTable";
import { Ftour } from "../../types/api";

export const checkEveryTourIsEditable = (tours: Ftour[]) => {
    const context = useContext(AppContext);

    const unUpdatableExsit = !!tours.find((t) => {
        const { updateAb } = getTourSummary(context, t);

        return !updateAb;
    });

    const EvetTourIsUpdatable = !unUpdatableExsit;
    return EvetTourIsUpdatable;
};
