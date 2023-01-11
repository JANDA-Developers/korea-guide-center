import React from "react";
import NewestTourTabBar from "./NewestTourTabBar";

const NewestTourTextIntro = () => {
    return (
        <div className="txt-intro">
            <h2>
                BOOK YOUR <span>NEWEST TOUR NOW</span>
            </h2>
            <div className="align-btn-right"></div>
        </div>
    );
};

export default React.memo(NewestTourTextIntro);
