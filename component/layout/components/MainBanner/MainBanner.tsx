import dynamic from "next/dynamic";
import React from "react";
import MainBannerItem from "./MainBannerItem";
import MainBannerPhrases from "./MainBannerPhrases";
import MainBannerSearchBox from "./MainBannerSearchBox";
import "owl.carousel/dist/assets/owl.carousel.css";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

interface IMainBannerProps {
    images: {
        url: string;
    }[];
}

const MainBanner = ({ images }: IMainBannerProps) => {
    return (
        <header>
            <OwlCarousel
                className="owl-carousel owl-basic-slider owl-homepage"
                loop={true}
                items={1}
                nav={false}
                autoWidth={false}
                autoplay={true}
                autoplaySpeed={4000}
            >
                {images.map((item, index) => {
                    return <MainBannerItem url={item.url} />;
                })}
            </OwlCarousel>
            <MainBannerSearchBox />
            <MainBannerPhrases />
        </header>
    );
};

export default React.memo(MainBanner);
