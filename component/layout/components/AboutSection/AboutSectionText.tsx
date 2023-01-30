import React from "react";
import { Paths } from "../../../../pages/index[depre]";
import AboutSectionDetailText from "./AboutSectionDetailText";
import AboutSectionQuality from "./AboutSectionQuality";

const AboutSectionText = () => {
    return (
        <div className="bloc-section-about">
            <div className="col-wrapper content-wrapper bloc bloc-medium bloc-duo">
                <AboutSectionDetailText />
                <div className="wrapper-link">
                    <a href={Paths.companyIntroduction}>
                        <figure className="fit-cover o70">
                            <img
                                src="img/aboutus/aboutusguide.jpg"
                                alt=""
                                width="953"
                                height="360"
                                className="lazy"
                            />
                        </figure>
                        <div className="caption">
                            <span className="surtitre">Korea Guide</span>
                            <h3>About us</h3>
                            <span className="basic-link">Discover</span>
                        </div>
                    </a>
                </div>
                {/* <AboutSectionQuality /> */}
            </div>
        </div>
    );
};

export default React.memo(AboutSectionText);
