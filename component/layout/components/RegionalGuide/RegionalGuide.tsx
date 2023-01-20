import React from "react";
import RegionalGuideCarousel from "./RegionalGuideCarousel";
import RegionalGuideTextIntro from "./RegionalGuideTextIntro";

const RegionTourSlider = () => {
    return (
        <div className="bloc-slider-city">
            <div className="content-wrapper bloc bloc-medium bloc-texte">
                <RegionalGuideTextIntro />
                <RegionalGuideCarousel />
            </div>
        </div>
    );
};

export default React.memo(RegionTourSlider);
