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
                <strong>Guides</strong> by Region
            </h2>
        </div>
    );
};

export default React.memo(RegionalGuideTextIntro);
