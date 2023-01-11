import React from "react";
import AboutSectionDetailText from "./AboutSectionDetailText";
import AboutSectionQuality from "./AboutSectionQuality";

const AboutSectionText = () => {
    return (
        <div className="bloc-section-about">
            <div className="content-wrapper bloc bloc-medium">
                <AboutSectionDetailText />
                <AboutSectionQuality />
            </div>
        </div>
    );
};

export default React.memo(AboutSectionText);
