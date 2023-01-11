import React from "react";
import PopularTourTab from "./PopularTourTab";
import PopularTourTextIntro from "./PopularTourTextIntro";

const PopularTour = () => {
    return (
        <div className="bloc-slider-tours grouped-tours">
            <div className="content-wrapper bloc-medium">
                <PopularTourTextIntro />
                <PopularTourTab />
            </div>
        </div>
    );
};

export default React.memo(PopularTour);
