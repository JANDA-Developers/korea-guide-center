import { Flex, JDalign } from "@janda-com/front";
import Link from "next/link";
import React, { useContext } from "react";
import BookLayout from "../component/layout/BookLayout";
import { AppContext } from "../context/context";
import { SHOPPING_LINK } from "../types/const";
import { Paths } from "./index[depre]";
import DragTextSlider from "../component/Slider/DragTextSlider";
import { InputText, useInput } from "@janda-com/front";
import { whenEnter } from "../utils/whenEnter";
import { searchPageQueryGenerate } from "./product/search";
import { useRecoilState } from "recoil";
import { menuOpenState } from "../recoil/atoms";
import DragImageSlider from "../component/Slider/DragImageSlider";
import TourAndActivities from "../component/TourAndActivities/TourAndActivities";
import LocalGuideAndPrivateTour from "../component/LocalGuideAndPrivateTour/LocalGuideAndPrivateTour";
import { useRouter } from "next/router";
import RecommendGuide from "../component/RecommendGuide/RecommendGuide";
import Aboutus from "../component/Aboutus/Aboutus";
import FindGuide from "../component/FindGuide/FindGuide";
import SNS from "../component/SNS/SNS";

type TIntroList = {
    title: string;
    link: string;
    icon: string;
};

const svg_arrow_right = `<svg width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg_arrow_right"><path d="M2.85711 17.1429L37.1428 17.1429" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.1428 2.14285L37.1428 17.1429L22.1428 32.1429" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const TourLayout = () => {
    const { s } = useContext(AppContext);
    const { locale } = useRouter();
    const tour_title = "Korea Guide";
    const tour_subtitle = s("tourTitleSubTitle");
    const tour_subUnder = s("everyGuideHasLicense");
    const [menuOpen, setMenuOpen] = useRecoilState(menuOpenState);
    const onClickMenu = () => {
        setMenuOpen((prev) => !prev);
    };
    const images = [
        {
            url: "/img/bgmain/bgmain1.jpg",
        },
        {
            url: "/img/bgmain/bgmain2.jpg",
        },
        {
            url: "/img/bgmain/bgmain3.jpg",
        },
    ];

    const texts = [
        {
            title: "Locale Tour",
        },
        {
            title: "The Original Korea Guide Tour",
        },
        {
            title: "Private Guide Tour",
        },
    ];

    const tour_introList: TIntroList[] = [
        {
            title: s("localtionalGuide"),
            link: Paths.locationalGuide,
            icon: "/img/mainIcon/guide.png",
        },
        {
            title: s("itsThemaTravel"),
            link: Paths.itstheme,
            icon: "/img/mainIcon/theme.png",
        },
        {
            title: s("kpopCulture"),
            link: Paths.kpopCulture,
            icon: "/img/mainIcon/kpop.png",
        },
        {
            title: s("customTour"),
            link: Paths.offer,
            icon: "/img/mainIcon/carrer.png",
        },
        {
            title: s("shopping"),
            link: SHOPPING_LINK,
            icon: "/img/mainIcon/shopping.png",
        },
    ];

    const searchHook = useInput("");

    const onSearchFocus = () => {
        setMenuOpen((prev) => !prev);
    };

    const toSearchPage = () => {
        const to = searchPageQueryGenerate({ title: searchHook.value });
        location.href = to;
        // router.push(to);
    };

    const checkOn = (checkTarget: any) => {
        if (checkTarget === "전체") {
            return "on";
        }
        return "off";
    };

    const displayIntroList = (introList: TIntroList[]) => {
        return introList.map(function (list, index) {
            return (
                <Link href={`${list.link}`}>
                    <a
                        className={`tour__introblock ${checkOn(list.title)}`}
                        key={`introlist_${index}`}
                    >
                        <Flex vCenter center>
                            <JDalign mr className="tour__introtitle">
                                {list.title}
                            </JDalign>
                            <img
                                width={40}
                                height={40}
                                src={list.icon}
                                className="tour__icon"
                            />
                        </Flex>
                    </a>
                </Link>
            );
        });
    };

    return (
        <BookLayout>
            <div className="tour">
                <div className="tour__container">
                    <DragImageSlider images={images} />
                    {/* <div className="tour__filter"></div> */}
                    <DragTextSlider texts={texts} />
                    <div className="tour__searchBar">
                        <div className="tour__searchBarInnerBox">
                            <InputText
                                onFocus={onSearchFocus}
                                type="text"
                                autoComplete="false"
                                className="tour__searchInput"
                                placeholder={s("searchCitiesGuidesTours")}
                                {...searchHook}
                                onKeyDown={whenEnter(toSearchPage)}
                            ></InputText>
                            <svg
                                className="tour__searchIcon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                width="28"
                                height="28"
                            >
                                <path
                                    className="tour__searchIconPath"
                                    fill="#D0242B"
                                    d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
                                />
                            </svg>
                        </div>
                    </div>
                    {/* <div className="tour__introwrap">
                        {displayIntroList(tour_introList)}
                    </div> */}
                </div>
            </div>
            <TourAndActivities />
            <LocalGuideAndPrivateTour />
            <RecommendGuide randomSort key={locale + "ProductViewCard1"} />
            <Aboutus />
            <FindGuide />
            <SNS />
        </BookLayout>
    );
};

export default TourLayout;
