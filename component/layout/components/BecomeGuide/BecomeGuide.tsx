import React from "react";
import BecomeGuideSlider from "./BecomeGuideSlider";
import BecomeGuideText from "./BecomeGuideText";

const BecomeGuide = () => {
    return (
        <div className="bloc-become-a-guide">
            <BecomeGuideText />
        </div>
    );
};

export default React.memo(BecomeGuide);
