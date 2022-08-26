import React from "react";
import { useRouteMatch } from "react-router-dom";
import { useTourFindById } from "../../hook/useTour";
import { useUpdateComponent } from "../../hook/useUpdateComponent";
import { ProductDetail } from "../productDetail/ProductDetail";

type IDetailRouteProp = { tourId?: string; step: string };
export const TourDetailWrap = () => {
    const { updateComponent } = useUpdateComponent();
    const routeMatch = useRouteMatch<IDetailRouteProp>();
    const {
        params: { tourId, step },
    } = routeMatch;
    const { item, getData } = useTourFindById(tourId);
    if (!item) return null;
    return (
        <ProductDetail
            key={item?._id}
            tour={item}
            mode="tourUpdate"
            updateComponent={updateComponent}
            product={item?.productInfomation}
        />
    );
};

export default TourDetailWrap;
