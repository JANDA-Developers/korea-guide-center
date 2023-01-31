import React, { useContext } from "react";
import { AppContext } from "../../../../context/context";
import { mapRegion, regionableData } from "../../../koreaMap/KoreaData";
import { IRegionSliderItem } from "../RegionTourSlider/RegionTourSliderCarousel";

const FooterCities = () => {
    const { l, s, locale } = useContext(AppContext);
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
            region: "seoul",
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
            region: "busan",
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
            region: "daegu",
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
            region: "Incheon",
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
            region: "Gwangju",
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
            region: "Daejeon",
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
            region: "Ulsan",
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
            region: "Sejong",
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
            region: "Jeju",
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
            region: "SouthGyeongsang",
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
            region: "NorthGyeongsang",
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
            region: "SouthJeolla",
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
            region: "NorthJeolla",
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
            region: "SouthChungcheong",
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
            region: "NorthChungcheong",
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
            region: "Gangwon",
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
            region: "Gyeonggi",
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
            region: "dmz",
        },
    ];
    return (
        <div className="col-50 footer-columns">
            <span className="footer-title"> {s("footerCities")}</span>
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
                                    }&region=${item.region}`;
                                }}
                            >
                                {
                                    item.queryTitle[
                                        locale! as "ko" | "en" | "ja" | "chi"
                                    ]
                                }
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default React.memo(FooterCities);
