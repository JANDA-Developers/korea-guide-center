import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IDragTextSlider {
    texts: {
        title: string;
    }[];
}

const DragTextSlider = ({ texts }: IDragTextSlider) => {
    // state should start with the index you want to start the slide on
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        swipeToSlide: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 7000,
    };
    return (
        <Slider {...settings}>
            {texts.map((item) => {
                return (
                    <div className="tour__TextsliderContainer">
                        <span className="tour__sliderText">{item.title}</span>
                    </div>
                );
            })}
        </Slider>
    );
};

export default DragTextSlider;
