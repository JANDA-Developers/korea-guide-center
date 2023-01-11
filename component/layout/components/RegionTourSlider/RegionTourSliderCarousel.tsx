import React, { useContext } from "react";
import RegionTourSliderItem from "./RegionTourSliderItem";
import Slider from "react-slick";
import { AppContext } from "../../../../context/context";
import { mapRegion, regionableData } from "../../../koreaMap/KoreaData";

export interface IRegionSliderItem {
    title: string;
    queryTitle: string;
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
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                ></path>
            </svg>
        </span>
    </button>
);

const RegionTourSliderCarousel = () => {
    const { s, l } = useContext(AppContext);
    const regionData: IRegionSliderItem[] = [
        {
            title: l(
                regionableData[mapRegion.seoul as keyof typeof regionableData]
                    .title
            ),
            queryTitle: "서울",
            products: 0,
            imageUrl: "img/cities/seoul.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.busan as keyof typeof regionableData]
                    .title
            ),
            queryTitle: "부산",
            products: 0,
            imageUrl: "img/cities/busan.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.daegu as keyof typeof regionableData]
                    .title
            ),
            queryTitle: "대구",
            products: 0,
            imageUrl: "img/cities/daegu.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.Incheon as keyof typeof regionableData]
                    .title
            ),
            queryTitle: "인천",
            products: 0,
            imageUrl: "img/cities/Incheon.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.Gwangju as keyof typeof regionableData]
                    .title
            ),
            queryTitle: "광주",
            products: 0,
            imageUrl: "img/cities/Gwangju.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.Daejeon as keyof typeof regionableData]
                    .title
            ),
            queryTitle: "대전",
            products: 0,
            imageUrl: "img/cities/Daejeon.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.Ulsan as keyof typeof regionableData]
                    .title
            ),
            queryTitle: "울산",
            products: 0,
            imageUrl: "img/cities/Ulsan.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.Sejong as keyof typeof regionableData]
                    .title
            ),
            queryTitle: "세종",
            products: 0,
            imageUrl: "img/cities/Sejong.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.Jeju as keyof typeof regionableData]
                    .title
            ),
            queryTitle: "제주",
            products: 0,
            imageUrl: "img/cities/Jeju.jpg",
        },
        {
            title: l(
                regionableData[
                    mapRegion.SouthGyeongsang as keyof typeof regionableData
                ].title
            ),
            queryTitle: "경남",
            products: 0,
            imageUrl: "img/cities/SouthGyeongsang.jpg",
        },
        {
            title: l(
                regionableData[
                    mapRegion.NorthGyeongsang as keyof typeof regionableData
                ].title
            ),
            queryTitle: "경북",
            products: 0,
            imageUrl: "img/cities/NorthGyeongsang.jpg",
        },
        {
            title: l(
                regionableData[
                    mapRegion.SouthJeolla as keyof typeof regionableData
                ].title
            ),
            queryTitle: "전남",
            products: 0,
            imageUrl: "img/cities/SouthJeolla.jpg",
        },
        {
            title: l(
                regionableData[
                    mapRegion.NorthJeolla as keyof typeof regionableData
                ].title
            ),
            queryTitle: "전북",
            products: 0,
            imageUrl: "img/cities/NorthJeolla.jpg",
        },
        {
            title: l(
                regionableData[
                    mapRegion.SouthChungcheong as keyof typeof regionableData
                ].title
            ),
            queryTitle: "충남",
            products: 0,
            imageUrl: "img/cities/SouthChungcheong.jpg",
        },
        {
            title: l(
                regionableData[
                    mapRegion.NorthChungcheong as keyof typeof regionableData
                ].title
            ),
            queryTitle: "충북",
            products: 0,
            imageUrl: "img/cities/NorthChungcheong.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.Gangwon as keyof typeof regionableData]
                    .title
            ),
            queryTitle: "강원",
            products: 0,
            imageUrl: "img/cities/Gangwon.jpg",
        },
        {
            title: l(
                regionableData[
                    mapRegion.Gyeonggi as keyof typeof regionableData
                ].title
            ),
            queryTitle: "경기",
            products: 0,
            imageUrl: "img/cities/Gyeonggi.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.dmz as keyof typeof regionableData]
                    .title
            ),
            queryTitle: "dmz",
            products: 0,
            imageUrl: "img/cities/dmz.jpg",
        },
        {
            title: s("ServicesCustom"),
            queryTitle: "Custom",
            products: 0,
            imageUrl: "img/cities/CustomTour.jpg",
        },
        {
            title: s("ServicesMICE"),
            queryTitle: "MICE",
            products: 0,
            imageUrl: "img/cities/MICE.jpg",
        },
        {
            title: s("ServicesDriving"),
            queryTitle: "DRIVING",
            products: 0,
            imageUrl: "img/cities/DrivingTour.jpg",
        },
        {
            title: s("ServicesWellness"),
            queryTitle: "의료관광",
            products: 0,
            imageUrl: "img/cities/WellnessMedical.jpg",
        },
        {
            title: s("ServicesLocalFestival"),
            queryTitle: "축제",
            products: 0,
            imageUrl: "img/cities/LocalFestival.jpg",
        },
        {
            title: s("ServicesTranlate"),
            queryTitle: "통역",
            products: 0,
            imageUrl: "img/cities/InterpreterGuide.jpg",
        },
        {
            title: s("ServicesBarrierFree"),
            queryTitle: "Barrier-Free",
            products: 0,
            imageUrl: "img/cities/BarrierFree.jpg",
        },
        {
            title: s("ServicesVIP"),
            queryTitle: "VIP의전",
            products: 0,
            imageUrl: "img/cities/VIPexhibition.jpg",
        },
        {
            title: s("ServicesRealEstate"),
            queryTitle: "부동산",
            products: 0,
            imageUrl: "img/cities/RealEstate.jpg",
        },
        {
            title: s("ServicesStudyingAbroad"),
            queryTitle: "유학",
            products: 0,
            imageUrl: "img/cities/StudyAbroad.jpg",
        },
        {
            title: s("ServicesLongStay"),
            queryTitle: "장기체류",
            products: 0,
            imageUrl: "img/cities/LongStay.jpg",
        },
        {
            title: s("ServicesCook"),
            queryTitle: "요리",
            products: 0,
            imageUrl: "img/cities/CookTour.jpg",
        },
    ];

    const settings = {
        centerMode: false,
        slidesToShow: 4,
        speed: 500,
        nextArrow: <SlickArrowRight />,
        prevArrow: <SlickArrowLeft />,
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
            {regionData.map((item, index) => {
                return (
                    <RegionTourSliderItem
                        key={index}
                        title={item.title}
                        imageUrl={item.imageUrl}
                        queryTitle={item.queryTitle}
                    />
                );
            })}
        </Slider>
    );
};

export default React.memo(RegionTourSliderCarousel);
