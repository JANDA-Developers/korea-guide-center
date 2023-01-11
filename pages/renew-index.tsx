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
import PopularTour from "../component/layout/components/PopularTour/PopularTour";
import BecomeGuide from "../component/layout/components/BecomeGuide/BecomeGuide";
import Social from "../component/layout/components/Social/Social";
import Footer from "../component/layout/components/Footer/Footer";
import BookLayout from "../component/layout/BookLayout";
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
                <PopularTour />
                <BecomeGuide />
                <Social />
            </main>
            <Footer />
        </BookLayout>
    );
};

export default TourLayout;
