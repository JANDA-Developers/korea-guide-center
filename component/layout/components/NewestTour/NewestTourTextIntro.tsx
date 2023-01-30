import React from "react";
import NewestTourTabBar from "./NewestTourTabBar";

const NewestTourTextIntro = () => {
    return (
        <div className="txt-intro">
            <h2>
                BOOK <span id="newest-tour">&nbsp;&nbsp;&nbsp;NEWEST TOUR</span>
            </h2>
            <div className="align-btn-right"></div>
        </div>
    );
};

export default React.memo(NewestTourTextIntro);
