import React, { useContext } from "react";
import RegionTourSliderItem from "./RegionTourSliderItem";
import Slider from "react-slick";
import { AppContext } from "../../../../context/context";
import { mapRegion, regionableData } from "../../../koreaMap/KoreaData";

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

const RegionTourSliderCarousel = () => {
    const { s, l } = useContext(AppContext);
    const regionData: IRegionSliderItem[] = [
        {
            title: l(
                regionableData[mapRegion.seoul as keyof typeof regionableData]
                    .title
            ),
            queryTitle: {
                ko: "서울",
                en: "Seoul",
                ja: "ソウル",
                chi: "汉城",
            },
            products: 0,
            imageUrl: "img/cities/seoul.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.busan as keyof typeof regionableData]
                    .title
            ),
            queryTitle: {
                ko: "부산",
                en: "Busan",
                ja: "釜山",
                chi: "釜山",
            },
            products: 0,
            imageUrl: "img/cities/busan.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.daegu as keyof typeof regionableData]
                    .title
            ),
            queryTitle: {
                ko: "대구",
                en: "Dae-gu",
                ja: "大邱",
                chi: "大邱",
            },
            products: 0,
            imageUrl: "img/cities/daegu.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.Incheon as keyof typeof regionableData]
                    .title
            ),
            queryTitle: {
                ko: "인천",
                en: "Incheon",
                ja: "仁川",
                chi: "仁川",
            },
            products: 0,
            imageUrl: "img/cities/Incheon.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.Gwangju as keyof typeof regionableData]
                    .title
            ),
            queryTitle: {
                ko: "광주",
                en: "Gwangju",
                ja: "光州",
                chi: "光州",
            },
            products: 0,
            imageUrl: "img/cities/Gwangju.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.Daejeon as keyof typeof regionableData]
                    .title
            ),
            queryTitle: {
                ko: "대전",
                en: "Daejeon",
                ja: "大田",
                chi: "大田",
            },
            products: 0,
            imageUrl: "img/cities/Daejeon.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.Ulsan as keyof typeof regionableData]
                    .title
            ),
            queryTitle: {
                ko: "울산",
                en: "Ulsan",
                ja: "蔚山",
                chi: "蔚山",
            },
            products: 0,
            imageUrl: "img/cities/Ulsan.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.Sejong as keyof typeof regionableData]
                    .title
            ),
            queryTitle: {
                ko: "세종시",
                en: "Sejong City",
                ja: "世宗市",
                chi: "世宗",
            },
            products: 0,
            imageUrl: "img/cities/Sejong.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.Jeju as keyof typeof regionableData]
                    .title
            ),
            queryTitle: {
                ko: "제주도",
                en: "Jeju Island",
                ja: "济州",
                chi: "济州",
            },
            products: 0,
            imageUrl: "img/cities/Jeju.jpg",
        },
        {
            title: l(
                regionableData[
                    mapRegion.SouthGyeongsang as keyof typeof regionableData
                ].title
            ),
            queryTitle: {
                ko: "경상남도",
                en: "Gyeongsangnam-do",
                ja: "慶尚南道",
                chi: "庆尚南道",
            },
            products: 0,
            imageUrl: "img/cities/SouthGyeongsang.jpg",
        },
        {
            title: l(
                regionableData[
                    mapRegion.NorthGyeongsang as keyof typeof regionableData
                ].title
            ),
            queryTitle: {
                ko: "경상북도",
                en: "Gyeongsangbuk-do",
                ja: "慶尚北道",
                chi: "庆尚北道",
            },
            products: 0,
            imageUrl: "img/cities/NorthGyeongsang.jpg",
        },
        {
            title: l(
                regionableData[
                    mapRegion.SouthJeolla as keyof typeof regionableData
                ].title
            ),
            queryTitle: {
                ko: "전라남도",
                en: "Jeollanam-do",
                ja: "全羅南道",
                chi: "全罗南道",
            },
            products: 0,
            imageUrl: "img/cities/SouthJeolla.jpg",
        },
        {
            title: l(
                regionableData[
                    mapRegion.NorthJeolla as keyof typeof regionableData
                ].title
            ),
            queryTitle: {
                ko: "전라북도",
                en: "Jeollabuk-do",
                ja: "全羅北道",
                chi: "全罗北道",
            },
            products: 0,
            imageUrl: "img/cities/NorthJeolla.jpg",
        },
        {
            title: l(
                regionableData[
                    mapRegion.SouthChungcheong as keyof typeof regionableData
                ].title
            ),
            queryTitle: {
                ko: "충청남도",
                en: "Chungcheongnam-do",
                ja: "忠清南道",
                chi: "忠清南道",
            },
            products: 0,
            imageUrl: "img/cities/SouthChungcheong.jpg",
        },
        {
            title: l(
                regionableData[
                    mapRegion.NorthChungcheong as keyof typeof regionableData
                ].title
            ),
            queryTitle: {
                ko: "충청북도",
                en: "Chung-cheong bukdo",
                ja: "忠清北道",
                chi: "忠清北道",
            },
            products: 0,
            imageUrl: "img/cities/NorthChungcheong.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.Gangwon as keyof typeof regionableData]
                    .title
            ),
            queryTitle: {
                ko: "강원도",
                en: "Gangwon-do",
                ja: "江原道",
                chi: "江原道",
            },
            products: 0,
            imageUrl: "img/cities/Gangwon.jpg",
        },
        {
            title: l(
                regionableData[
                    mapRegion.Gyeonggi as keyof typeof regionableData
                ].title
            ),
            queryTitle: {
                ko: "경기도",
                en: "Gyeonggi-do",
                ja: "京畿道",
                chi: "京畿道",
            },
            products: 0,
            imageUrl: "img/cities/Gyeonggi.jpg",
        },
        {
            title: l(
                regionableData[mapRegion.dmz as keyof typeof regionableData]
                    .title
            ),
            queryTitle: {
                ko: "DMZ",
                en: "DMZ",
                ja: "DMZ",
                chi: "DMZ",
            },
            products: 0,
            imageUrl: "img/cities/dmz.jpg",
        },
        {
            title: s("ServicesCustom"),
            queryTitle: {
                ko: "커스텀 투어",
                en: "Customized Tour",
                ja: "オーダーメイドツアー",
                chi: "定制旅游",
            },
            products: 0,
            imageUrl: "img/cities/CustomTour.jpg",
        },
        {
            title: s("ServicesMICE"),
            queryTitle: {
                ko: "MICE",
                en: "MICE",
                ja: "MICE",
                chi: "MICE",
            },
            products: 0,
            imageUrl: "img/cities/MICE.jpg",
        },
        {
            title: s("ServicesDriving"),
            queryTitle: {
                ko: "드라이빙가이드",
                en: "Driving Guide",
                ja: "ドライビングガイド",
                chi: "驾驶导游",
            },
            products: 0,
            imageUrl: "img/cities/DrivingTour.jpg",
        },
        {
            title: s("ServicesWellness"),
            queryTitle: {
                ko: "의료관광",
                en: "Medical tourism",
                ja: "医療観光",
                chi: "医疗观光",
            },
            products: 0,
            imageUrl: "img/cities/WellnessMedical.jpg",
        },
        {
            title: s("ServicesLocalFestival"),
            queryTitle: {
                ko: "로컬페스티벌",
                en: "LocalFestival",
                ja: "ローカルフェスティバル",
                chi: "当地庆典",
            },
            products: 0,
            imageUrl: "img/cities/LocalFestival.jpg",
        },
        {
            title: s("ServicesTranlate"),
            queryTitle: {
                ko: "통역",
                en: "interpreter",
                ja: "通訳",
                chi: "翻译",
            },
            products: 0,
            imageUrl: "img/cities/InterpreterGuide.jpg",
        },
        {
            title: s("ServicesBarrierFree"),
            queryTitle: {
                ko: "Barrier-Free",
                en: "Barrier-Free",
                ja: "Barrier-Free",
                chi: "Barrier-Free",
            },
            products: 0,
            imageUrl: "img/cities/BarrierFree.jpg",
        },
        {
            title: s("ServicesVIP"),
            queryTitle: {
                ko: "VIP의전",
                en: "VIP exhibition",
                ja: "VIP儀典",
                chi: "VIP礼宾",
            },
            products: 0,
            imageUrl: "img/cities/VIPexhibition.jpg",
        },
        {
            title: s("ServicesRealEstate"),
            queryTitle: {
                ko: "부동산",
                en: "Real estate",
                ja: "不動産",
                chi: "房地产",
            },
            products: 0,
            imageUrl: "img/cities/RealEstate.jpg",
        },
        {
            title: s("ServicesStudyingAbroad"),
            queryTitle: {
                ko: "유학",
                en: "Studying abroad",
                ja: "留学",
                chi: "留学",
            },
            products: 0,
            imageUrl: "img/cities/StudyAbroad.jpg",
        },
        {
            title: s("ServicesLongStay"),
            queryTitle: {
                ko: "장기체류",
                en: "LongStay",
                ja: "長期滞在",
                chi: "长期滞留",
            },
            products: 0,
            imageUrl: "img/cities/LongStay.jpg",
        },
        {
            title: s("ServicesCook"),
            queryTitle: {
                ko: "요리",
                en: "Cooking",
                ja: "料理",
                chi: "料理",
            },
            products: 0,
            imageUrl: "img/cities/CookTour.jpg",
        },
    ];

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
