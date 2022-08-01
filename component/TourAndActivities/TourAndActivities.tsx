import React from "react";
import TourSlider from "./TourSlider";
import RegionSlider from "./RegionSlider";

const TourAndActivities = () => {
    return (
        <>
            <div className="tour__sectionTitleContainer">
                <h1 className="tour__sectionTitle">
                    <span
                        style={{
                            color: "#D0242B",
                        }}
                    >
                        Tour&nbsp;
                    </span>
                    &&nbsp;
                    <span
                        style={{
                            color: "#D0242B",
                        }}
                    >
                        Activities
                    </span>
                </h1>
            </div>
            <RegionSlider />
            <TourSlider />
        </>
    );
};

export default TourAndActivities;
