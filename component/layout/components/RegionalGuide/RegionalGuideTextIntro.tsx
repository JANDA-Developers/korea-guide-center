import React from "react";

const RegionalGuideTextIntro = () => {
    return (
        <div
            className="txt-intro"
            style={{
                margin: 0,
                marginBottom: "20px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
            }}>
            <h2 style={{
                width: "fit-content"
            }}>
                <strong>GUIDES</strong> BY REGION
            </h2>
        </div>
    );
};

export default React.memo(RegionalGuideTextIntro);
