import React from "react";
import AboutSectionDetailText from "./AboutSectionDetailText";
import AboutSectionLinks from "./AboutSectionLinks";

const AboutSectionText = () => {
    return (
        <div className="bloc-section-about">
            <AboutSectionLinks />
            <div
                className="col-wrapper content-wrapper bloc bloc-medium bloc-duo"
                style={{
                    padding: 0,
                }}
            >
                <AboutSectionDetailText />
            </div>
        </div>
    );
};

export default React.memo(AboutSectionText);
