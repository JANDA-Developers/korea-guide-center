import React from "react";
import { Paths } from "../../../../pages/index[depre]";

const AboutSectionLinks = () => {
    return (
        <div
            className="col-wrapper bloc-medium bloc-duo"
            style={{
                padding: 0,
            }}
        >
            <span className="about-small-title">KOREA GUIDE</span>
            <h2
                className="about-text about-text-top-h2"
                style={{
                    color: "white",
                    fontWeight: 600,
                    lineHeight: 1,
                }}
            >
                ABOUT
            </h2>
            {/* <div
                className="wrapper-link"
                style={{
                    display: "none",
                }}
            >
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
            </div> */}
        </div>
    );
};

export default React.memo(AboutSectionLinks);
