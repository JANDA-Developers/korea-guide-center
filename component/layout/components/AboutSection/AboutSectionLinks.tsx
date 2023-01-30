import React from "react";
import { Paths } from "../../../../pages/index[depre]";

const AboutSectionLinks = () => {
    return (
        <div className="col-wrapper bloc-medium bloc-duo">
            <h2
                style={{
                    color: "white",
                    fontWeight: 600,
                }}
            >
                ABOUT KOREA GUIDE
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
