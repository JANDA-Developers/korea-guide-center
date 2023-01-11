import React from "react";
import PopularGuideTab from "./PopularGuideTab";
import PopularGuideTextIntro from "./PopularGuideTextIntro";

const PopularGuide = () => {
    return (
        <div className="bloc-slider-tours grouped-tours">
            <div className="content-wrapper bloc-medium">
                <PopularGuideTextIntro />
                <PopularGuideTab randomSort />
            </div>
        </div>
    );
};

export default React.memo(PopularGuide);
