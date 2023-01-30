import React from "react";

const PopularGuideTextIntro = () => {
    return (
        <div className="txt-intro">
            <h2>
                WITH
                <span id="popular-guides">
                    &nbsp;&nbsp;&nbsp;
                    <span
                        style={{
                            color: "#db1a1c",
                            display: "inline",
                        }}
                    >
                        POPULAR
                    </span>{" "}
                    GUIDES
                </span>
            </h2>
            <div className="align-btn-right"></div>
        </div>
    );
};

export default React.memo(PopularGuideTextIntro);
