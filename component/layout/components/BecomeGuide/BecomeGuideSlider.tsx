import dynamic from "next/dynamic";
import React from "react";
import BecomeGuideSliderItem from "./BecomeGuideSliderItem";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

const images = [
    { image: "/img/media/media-1.jpeg" },
    { image: "/img/media/media-2.jpeg" },
    { image: "/img/media/media-3.jpeg" },
    { image: "/img/media/media-4.jpeg" },
    { image: "/img/media/media-5.jpeg" },
];

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
                {images.map((item, index) => {
                    return (
                        <BecomeGuideSliderItem key={index} url={item.image} />
                    );
                })}
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
