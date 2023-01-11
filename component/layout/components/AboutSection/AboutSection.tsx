import React from "react";
import AboutSectionLinks from "./AboutSectionLinks";
import AboutSectionText from "./AboutSectionText";

const AboutSection = () => {
    return (
        <>
            <AboutSectionLinks />
            <AboutSectionText />
        </>
    );
};

export default React.memo(AboutSection);
