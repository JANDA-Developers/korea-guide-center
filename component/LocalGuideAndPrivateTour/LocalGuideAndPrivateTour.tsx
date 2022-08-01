import React from "react";
import LocalGuideSlider from "./LocalGuideSlider";

const LocalGuideAndPrivateTour = () => {
    return (
        <>
            <div className="tour__sectionTitleContainer">
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
            </div>
            <LocalGuideSlider />
        </>
    );
};

export default LocalGuideAndPrivateTour;
