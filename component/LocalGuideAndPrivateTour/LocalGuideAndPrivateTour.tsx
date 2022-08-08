import React from "react";
import LocalGuideSlider from "./LocalGuideSlider";

const LocalGuideAndPrivateTour = () => {
    return (
        <div
            style={{
                marginBottom: "50px",
            }}
        >
            <h1 className="tour__sectionTitle">
                <span
                    style={{
                        color: "#D0242B",
                    }}
                >
                    Local&nbsp;
                </span>
                <span>Guides</span>
            </h1>
            <LocalGuideSlider />
        </div>
    );
};

export default LocalGuideAndPrivateTour;
