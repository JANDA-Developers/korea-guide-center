import React, { useContext } from "react";
import TourSlider from "./TourSlider";
import RegionSlider from "./RegionSlider";
import { _ProductFilter, _ProductSort } from "../../types/api";
import { AppContext } from "../../context/context";

const TourAndActivities = () => {
    const { s } = useContext(AppContext);
    return (
        <>
            <div
                style={{
                    marginBottom: "50px",
                }}
            >
                <h5 className="tour__sectionTitle">{s("mainCityTour")}</h5>
                <RegionSlider />
            </div>
            <div
                style={{
                    marginBottom: "50px",
                }}
            >
                <h5 className="tour__sectionTitle">{s("mainPopularTour")}</h5>
                <TourSlider
                    queryParam={{
                        initialSort: [_ProductSort.rating__desc],
                    }}
                />
            </div>
        </>
    );
};

export default TourAndActivities;
