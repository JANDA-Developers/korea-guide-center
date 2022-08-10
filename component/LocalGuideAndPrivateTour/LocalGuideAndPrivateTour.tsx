import { JDcontainer, WindowSize } from "@janda-com/front";
import React from "react";
import LocalGuideSlider from "./LocalGuideSlider";

const LocalGuideAndPrivateTour = () => {
    const containerSize = WindowSize.full;
    return (
        <JDcontainer size={containerSize}>
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
        </JDcontainer>
    );
};

export default LocalGuideAndPrivateTour;
