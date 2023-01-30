import React from "react";

const RegionalGuideTextIntro = () => {
    return (
        <div
            className="txt-intro"
            style={{
                textAlign: "left",
            }}
        >
            <h2>
                <strong>GUIDES</strong> BY REGION
            </h2>
        </div>
    );
};

export default React.memo(RegionalGuideTextIntro);
