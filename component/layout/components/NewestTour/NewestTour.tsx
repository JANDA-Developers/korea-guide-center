import React from "react";
import NewestTourTab from "./NewestTourTab";
import NewestTourTabBar from "./NewestTourTabBar";
import NewestTourTextIntro from "./NewestTourTextIntro";

const NewestTour = () => {
    return (
        <div className="bloc-slider-tours grouped-tours">
            <div className="content-wrapper bloc-medium">
                <NewestTourTextIntro />

                <NewestTourTab />
            </div>
        </div>
    );
};

export default React.memo(NewestTour);
