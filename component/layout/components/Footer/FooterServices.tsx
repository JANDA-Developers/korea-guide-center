import React, { useContext } from "react";
import { AppContext } from "../../../../context/context";
import { mapRegion, regionableData } from "../../../koreaMap/KoreaData";
import { IRegionSliderItem } from "../RegionTourSlider/RegionTourSliderCarousel";

const FooterServices = () => {
    const { l, s, locale } = useContext(AppContext);

    const regionData: IRegionSliderItem[] = [
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
                ko: "요리투어",
                en: "Cooking",
                ja: "料理",
                chi: "料理",
            },
            products: 0,
            imageUrl: "img/cities/CookTour.jpg",
        },
    ];

    console.log(regionData.length);
    return (
        <div className="col-25">
            <span className="footer-title"> {s("footerServices")}</span>
            <ul>
                {regionData.map((item, index) => {
                    return (
                        <li key={index}>
                            <a
                                onClick={() => {
                                    location.href = `/${locale}/cities/search?title=${
                                        item.queryTitle[
                                            locale! as
                                                | "ko"
                                                | "en"
                                                | "ja"
                                                | "chi"
                                        ]
                                    }`;
                                }}
                            >
                                {item.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default React.memo(FooterServices);
