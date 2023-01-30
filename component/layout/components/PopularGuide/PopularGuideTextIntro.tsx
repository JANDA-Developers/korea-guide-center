import React from "react";

const PopularGuideTextIntro = () => {
    return (
        <div className="txt-intro">
            <h2>
                OUR <span id="popular-guides">&nbsp;&nbsp;&nbsp;POPULAR GUIDES</span>
            </h2>
            <div className="align-btn-right"></div>
        </div>
    );
};

export default React.memo(PopularGuideTextIntro);
