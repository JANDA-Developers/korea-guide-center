import React from "react";
import RegionTourSliderCarousel from "./RegionTourSliderCarousel";
import RegionTourSliderTextIntro from "./RegionTourSliderTextIntro";

const RegionTourSlider = () => {
    return (
        <div className="bloc-slider-city">
            <div className="content-wrapper bloc bloc-medium bloc-texte">
                <RegionTourSliderTextIntro />
                <RegionTourSliderCarousel />
            </div>
        </div>
    );
};

export default React.memo(RegionTourSlider);
