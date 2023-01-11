import React from "react";
import NewestTourTabItem from "./NewestTourTabItem";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

const options = {
    stageOuterClass: "owl-stage-outer owl-height",
    responsiveClass: true,
    items: 4,
    dots: false,
    nav: true,
    navText: [
        `<span><svg width="100px" height="100px" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
  </svg></span>`,
        `<span><svg width="100px" height="100px" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
  </svg></span>`,
    ],
    responsive: {
        0: {
            items: 1,
            margin: -100,
        },
        560: {
            items: 2,
        },
        800: {
            items: 3,
        },
        1200: {
            items: 4,
        },
    },
};

// id는 임시임 나중에 코리아 가이드에 적용할 때 신경 쓸 것
const NewestTourTab = () => {
    return (
        <OwlCarousel
            id="tab-AllTours"
            className="owl-theme owl-tours owl-opacify active"
            {...options}
        >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => {
                return <NewestTourTabItem key={index} />;
            })}
        </OwlCarousel>
    );
};

export default React.memo(NewestTourTab);
