import React from "react";
import BecomeGuideSlider from "./BecomeGuideSlider";
import BecomeGuideText from "./BecomeGuideText";

const BecomeGuide = () => {
    return (
        <div
            className="bloc-become-a-guide"
            style={{
                backgroundColor: "white",
                boxShadow:
                    "0 1px 1px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.16), 0 8px 8px rgba(0,0,0,0.20)",
            }}
        >
            <BecomeGuideSlider />
            <BecomeGuideText />
        </div>
    );
};

export default React.memo(BecomeGuide);
