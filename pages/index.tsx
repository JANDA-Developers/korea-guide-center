import React, { useContext } from "react";
import BookLayout from "../component/layout/BookLayout";
import { AppContext } from "../context/context";
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
import Head from "next/head";

const TourLayout = () => {
    const { s } = useContext(AppContext);
    const { locale } = useRouter();
    const [menuOpen, setMenuOpen] = useRecoilState(menuOpenState);

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
            title: "Local Tour",
        },
        {
            title: "The Original Korea Guide Tour",
        },
        {
            title: "Private Guide Tour",
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

    return (
        <BookLayout>
            <Head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                gtag('event', 'conversion', {'send_to': '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}/KECOCPmRgYEYEPH7irMo'});`,
                    }}
                ></script>
            </Head>
            {/* PC View */}
            <div className="tour">
                <div className="tour__container">
                    <DragImageSlider images={images} />
                    <DragTextSlider texts={texts} />
                    <div className="tour__searchBar">
                        <div className="tour__searchBarInnerBox">
                            <InputText
                                type="text"
                                autoComplete="false"
                                className="tour__searchInput text-black focus:text-black !important"
                                placeholder={s("searchCitiesGuidesTours")}
                                {...searchHook}
                                onKeyDown={whenEnter(toSearchPage)}
                            ></InputText>
                            <svg
                                onClick={toSearchPage}
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
                </div>
            </div>
            <div>
                <TourAndActivities />
                <LocalGuideAndPrivateTour />
                <RecommendGuide randomSort key={locale + "ProductViewCard1"} />
            </div>
            <Aboutus />
            <FindGuide />
            <SNS />
        </BookLayout>
    );
};

export default TourLayout;
