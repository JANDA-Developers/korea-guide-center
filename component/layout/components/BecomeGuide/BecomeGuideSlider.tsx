import dynamic from "next/dynamic";
import React from "react";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

const options = {
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
};

const BecomeGuideSlider = () => {
    return (
        <div className="wrapper-slider">
            <OwlCarousel
                className="owl-carousel owl-slider-homepage-guide"
                {...options}
            >
                <div className="item">
                    <figure>
                        <picture>
                            <source
                                data-srcSet="https://www.neweuropetours.eu/wp-content/uploads/2018/06/sandemans-guide-800x650.jpg"
                                media="(max-width: 800px) and (min-width: 421px)"
                            />
                            <source
                                data-srcSet="https://www.neweuropetours.eu/wp-content/uploads/2018/06/sandemans-guide-420x450.jpg"
                                media="(max-width: 420px)"
                            />
                            <img
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                data-src="https://www.neweuropetours.eu/wp-content/uploads/2018/06/sandemans-guide-1000x800.jpg"
                                alt=""
                                width="1000"
                                height="800"
                                className="lazy"
                            />
                        </picture>
                    </figure>
                </div>
                <div className="item">
                    <figure>
                        <picture>
                            <source
                                data-srcSet="https://www.neweuropetours.eu/wp-content/uploads/2018/06/miniature-video-guide-2-800x650.jpg"
                                media="(max-width: 800px) and (min-width: 421px)"
                            />
                            <source
                                data-srcSet="https://www.neweuropetours.eu/wp-content/uploads/2018/06/miniature-video-guide-2-420x450.jpg"
                                media="(max-width: 420px)"
                            />
                            <img
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                data-src="https://www.neweuropetours.eu/wp-content/uploads/2018/06/miniature-video-guide-2-1000x800.jpg"
                                alt=""
                                width="1000"
                                height="800"
                                className="lazy"
                            />
                        </picture>
                    </figure>
                </div>
                <div className="item">
                    <figure>
                        <picture>
                            <source
                                data-srcSet="https://www.neweuropetours.eu/wp-content/uploads/2018/08/ams-alt-3-800x650.jpg"
                                media="(max-width: 800px) and (min-width: 421px)"
                            />
                            <source
                                data-srcSet="https://www.neweuropetours.eu/wp-content/uploads/2018/08/ams-alt-3-420x450.jpg"
                                media="(max-width: 420px)"
                            />
                            <img
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                data-src="https://www.neweuropetours.eu/wp-content/uploads/2018/08/ams-alt-3-1000x800.jpg"
                                alt="amsterdam alternative tour"
                                width="1000"
                                height="800"
                                className="lazy"
                            />
                        </picture>
                    </figure>
                </div>
            </OwlCarousel>
            <div className="wrapper-nav-slider">
                <div>
                    <div className="carousel-custom-dots"></div>
                    <div className="carousel-custom-nav"></div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(BecomeGuideSlider);
