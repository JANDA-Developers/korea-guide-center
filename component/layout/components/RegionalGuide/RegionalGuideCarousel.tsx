import React, { useContext } from "react";
import Slider from "react-slick";
import { AppContext } from "../../../../context/context";
import { useGlobalKoreaMap } from "../../../../hook/useKoreaMap";
import { mapRegion, regionableData } from "../../../koreaMap/KoreaData";
import { ILocalGuideSliderItem } from "../../../LocalGuideAndPrivateTour/LocalGuideSliderItem";
import RegionalGuideItem from "./RegionalGuideItem";

export interface IRegionSliderItem {
    title: string;
    queryTitle: {
        ko: string;
        en: string;
        ja: string;
        chi: string;
    };
    products?: number; // 혹시 몰라서 만들어둠
    imageUrl: string;
}

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: any) => (
    <button
        {...props}
        className={"slick-prev slick-arrow"}
        aria-hidden="true"
        type="button"
    >
        <span>
            <svg
                width="50px"
                height="50px"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                ></path>
            </svg>
        </span>
    </button>
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }: any) => (
    <button
        {...props}
        className={"slick-next slick-arrow"}
        aria-hidden="true"
        type="button"
    >
        <span>
            <svg
                width="50px"
                height="50px"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                ></path>
            </svg>
        </span>
    </button>
);

const RegionalGuideCarousel = () => {
    const { s, l } = useContext(AppContext);
    const localGuideData: ILocalGuideSliderItem[] = [
        {
            title: l(
                regionableData[mapRegion.seoul as keyof typeof regionableData]
                    .title
            ),
            desc: "서울 지역의 가이드",
            imageUrl: "img/cities/seoul.jpg",
            region: "seoul",
        },
        {
            title: l(
                regionableData[mapRegion.busan as keyof typeof regionableData]
                    .title
            ),
            desc: "부산 지역의 가이드",
            imageUrl: "img/cities/busan.jpg",
            region: "busan",
        },
        {
            title: l(
                regionableData[mapRegion.daegu as keyof typeof regionableData]
                    .title
            ),
            desc: "대구 지역의 가이드",
            imageUrl: "img/cities/daegu.jpg",
            region: "daegu",
        },
        {
            title: l(
                regionableData[mapRegion.Incheon as keyof typeof regionableData]
                    .title
            ),
            desc: "인천 지역의 가이드",
            imageUrl: "img/cities/Incheon.jpg",
            region: "Incheon",
        },
        {
            title: l(
                regionableData[mapRegion.Gwangju as keyof typeof regionableData]
                    .title
            ),
            desc: "광주 지역의 가이드",
            imageUrl: "img/cities/Gwangju.jpg",
            region: "Gwangju",
        },
        {
            title: l(
                regionableData[mapRegion.Daejeon as keyof typeof regionableData]
                    .title
            ),
            desc: "대전 지역의 가이드",
            imageUrl: "img/cities/Daejeon.jpg",
            region: "Daejeon",
        },
        {
            title: l(
                regionableData[mapRegion.Ulsan as keyof typeof regionableData]
                    .title
            ),
            desc: "울산 지역의 가이드",
            imageUrl: "img/cities/Ulsan.jpg",
            region: "Ulsan",
        },
        {
            title: l(
                regionableData[mapRegion.Sejong as keyof typeof regionableData]
                    .title
            ),
            desc: "세종 지역의 가이드",
            imageUrl: "img/cities/Sejong.jpg",
            region: "Sejong",
        },
        {
            title: l(
                regionableData[mapRegion.Jeju as keyof typeof regionableData]
                    .title
            ),
            desc: "제주 지역의 가이드",
            imageUrl: "img/cities/Jeju.jpg",
            region: "Jeju",
        },
        {
            title: l(
                regionableData[
                    mapRegion.SouthGyeongsang as keyof typeof regionableData
                ].title
            ),
            desc: "경남 지역의 가이드",
            imageUrl: "img/cities/SouthGyeongsang.jpg",
            region: "SouthGyeongsang",
        },
        {
            title: l(
                regionableData[
                    mapRegion.NorthGyeongsang as keyof typeof regionableData
                ].title
            ),
            desc: "경북 지역의 가이드",
            imageUrl: "img/cities/NorthGyeongsang.jpg",
            region: "NorthGyeongsang",
        },
        {
            title: l(
                regionableData[
                    mapRegion.SouthJeolla as keyof typeof regionableData
                ].title
            ),
            desc: "전남 지역의 가이드",
            imageUrl: "img/cities/SouthJeolla.jpg",
            region: "SouthJeolla",
        },
        {
            title: l(
                regionableData[
                    mapRegion.NorthJeolla as keyof typeof regionableData
                ].title
            ),
            desc: "전북 지역의 가이드",
            imageUrl: "img/cities/NorthJeolla.jpg",
            region: "NorthJeolla",
        },
        {
            title: l(
                regionableData[
                    mapRegion.SouthChungcheong as keyof typeof regionableData
                ].title
            ),
            desc: "충남 지역의 가이드",
            imageUrl: "img/cities/SouthChungcheong.jpg",
            region: "SouthChungcheong",
        },
        {
            title: l(
                regionableData[
                    mapRegion.NorthChungcheong as keyof typeof regionableData
                ].title
            ),
            desc: "충북 지역의 가이드",
            imageUrl: "img/cities/NorthChungcheong.jpg",
            region: "NorthChungcheong",
        },
        {
            title: l(
                regionableData[mapRegion.Gangwon as keyof typeof regionableData]
                    .title
            ),
            desc: "강원 지역의 가이드",
            imageUrl: "img/cities/Gangwon.jpg",
            region: "Gangwon",
        },
        {
            title: l(
                regionableData[
                    mapRegion.Gyeonggi as keyof typeof regionableData
                ].title
            ),
            desc: "경기 지역의 가이드",
            imageUrl: "img/cities/Gyeonggi.jpg",
            region: "Gyeonggi",
        },
    ];
    const koreaHook = useGlobalKoreaMap();
    const { selectedGlobalRegion, onClick: selectGlobalRegion } = koreaHook;

    const settings = {
        dots: false,
        arrows: true,
        centerMode: false,
        slidesToShow: 4,
        slidestoScroll: 1,
        slidesPerRow: 1,
        speed: 250,
        rows: 1,
        nextArrow: <SlickArrowRight />,
        prevArrow: <SlickArrowLeft />,
        loop: false,
        infinite: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 599,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <Slider className="slick-carousel slick-cities" {...settings}>
            {localGuideData.map((item, index) => {
                return (
                    <RegionalGuideItem
                        key={index}
                        item={item}
                        region={selectedGlobalRegion}
                        onSelectRegion={selectGlobalRegion}
                        selectedRegion={item.region}
                    />
                );
            })}
        </Slider>
    );
};

export default React.memo(RegionalGuideCarousel);
