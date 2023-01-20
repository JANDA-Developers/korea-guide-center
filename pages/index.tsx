import React, { useContext } from "react";
import { AppContext } from "../context/context";
import { useInput } from "@janda-com/front";
import { searchPageQueryGenerate } from "./product/search";
import { useRecoilState } from "recoil";
import { menuOpenState } from "../recoil/atoms";
import { useRouter } from "next/router";
import MainBanner from "../component/layout/components/MainBanner/MainBanner";
import RegionTourSlider from "../component/layout/components/RegionTourSlider/RegionTourSlider";
import MiddleText from "../component/layout/components/MiddleText/MiddleText";
import NewestTour from "../component/layout/components/NewestTour/NewestTour";
import AboutSection from "../component/layout/components/AboutSection/AboutSection";
import BecomeGuide from "../component/layout/components/BecomeGuide/BecomeGuide";
import Social from "../component/layout/components/Social/Social";
import BookLayout from "../component/layout/BookLayout";
import Head from "next/head";
import PopularGuide from "../component/layout/components/PopularGuide/PopularGuide";
import RegionalGuide from "../component/layout/components/RegionalGuide/RegionalGuide";

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
            <main className="page-homepage">
                <MainBanner images={images} />
                <RegionTourSlider />
                <MiddleText />
                <NewestTour />
                <AboutSection />
                <RegionalGuide />
                <PopularGuide />
                <BecomeGuide />
                <Social />
            </main>
        </BookLayout>
    );
};

export default TourLayout;
