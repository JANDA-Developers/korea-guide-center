import React from "react";
import RegionTourSliderItem from "./RegionTourSliderItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const RegionTourSliderCarousel = () => {
    const settings = {
        centerMode: false,
        slidesToShow: 4,
        speed: 500,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3,
                },
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 520,
                settings: {
                    centerMode: true,
                    centerPadding: "100px",
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    };
    return (
        <Slider className="slick-carousel slick-cities" {...settings}>
            <RegionTourSliderItem />
            <RegionTourSliderItem />
            <RegionTourSliderItem />
            <RegionTourSliderItem />
            <RegionTourSliderItem />
            <RegionTourSliderItem />
            <RegionTourSliderItem />
            <RegionTourSliderItem />
            <RegionTourSliderItem />
            <RegionTourSliderItem />
            <RegionTourSliderItem />
            <RegionTourSliderItem />
            <RegionTourSliderItem />
            <RegionTourSliderItem />
            <RegionTourSliderItem />
        </Slider>
    );
};

export default React.memo(RegionTourSliderCarousel);
