import dynamic from "next/dynamic";
import React from "react";
import MainBannerItem from "./MainBannerItem";
import MainBannerPhrases from "./MainBannerPhrases";
import MainBannerSearchBox from "./MainBannerSearchBox";
import "owl.carousel/dist/assets/owl.carousel.css";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

const MainBanner = () => {
    return (
        <header>
            <OwlCarousel
                className="owl-carousel owl-basic-slider owl-homepage"
                loop={true}
                items={1}
                nav={false}
                auto-width={false}
                autoplay={true}
                autoplaySpeed={4000}
            >
                <MainBannerItem />
                <MainBannerItem />
                <MainBannerItem />
                <MainBannerItem />
            </OwlCarousel>
            <MainBannerSearchBox />
            <MainBannerPhrases />
        </header>
    );
};

export default React.memo(MainBanner);
