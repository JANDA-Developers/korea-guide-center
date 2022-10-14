import React, { useContext } from "react";
import TourSlider from "./TourSlider";
import RegionSlider from "./RegionSlider";
import { NewsProductList } from "../productViewCard/ProductViewCards";
import { _ProductFilter, _ProductSort } from "../../types/api";
import { AppContext } from "../../context/context";
import { useWindowSize } from "usehooks-ts";

const TourAndActivities = () => {
    const { s } = useContext(AppContext);

    return (
        <>
            <div className=" my-40">
                <h5 className="tour__sectionTitle">{s("mainCityTour")}</h5>
                <RegionSlider />
            </div>
            <div className="mb-40">
                <h5 className="tour__sectionTitle">{s("mainLatestTour")}</h5>
                <TourSlider
                    queryParam={{
                        ...NewsProductList.queryParam,
                    }}
                />
            </div>
        </>
    );
};

export default TourAndActivities;
