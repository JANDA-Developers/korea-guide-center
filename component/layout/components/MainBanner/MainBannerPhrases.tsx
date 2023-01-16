import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

const options = {
    items: 1,
    loop: true,
    nav: true,
    autoplay: true,
};

const MainBannerPhrases = () => {
    return (
        <OwlCarousel
            className="content-wrapper owl-carousel owl-basic-slider owl-slider-txt"
            {...options}
        >
            <div className="item" key={0}>
                <h1>
                    <span>Local Tour</span>
                </h1>
            </div>
            <div className="item" key={1}>
                <h2>
                    <span>The Original Korea Guide Tour</span>
                </h2>
            </div>
            <div className="item" key={2}>
                <h2>
                    <span>Private Guide Tour</span>
                </h2>
            </div>
        </OwlCarousel>
    );
};

export default React.memo(MainBannerPhrases);
