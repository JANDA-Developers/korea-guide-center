import React from "react";

const AboutSectionLinks = () => {
    return (
        <div className="col-wrapper bloc-medium bloc-duo">
            <h2>ABOUT KOREA GUIDE</h2>
            <div className="wrapper-link">
                <a href="https://www.neweuropetours.eu/sandemans-partner-network/">
                    <figure className="fit-cover o70">
                        <img
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            data-src="https://www.neweuropetours.eu/wp-content/uploads/2021/10/florence-views-photo-by-heidi-kaden-953x360.jpeg"
                            alt=""
                            width="953"
                            height="360"
                            className="lazy"
                        />
                    </figure>
                    <div className="caption">
                        <h3>KoreaGuide Partner Network</h3>
                        <span className="basic-link">Discover</span>
                    </div>
                </a>
                <a href="https://www.neweuropetours.eu/about-us/">
                    <figure className="fit-cover o70">
                        <img
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            data-src="https://www.neweuropetours.eu/wp-content/uploads/2018/06/miniature-video-guide-1-953x360.jpg"
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
        </div>
    );
};

export default React.memo(AboutSectionLinks);
