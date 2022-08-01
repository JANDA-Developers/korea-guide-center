import { Flex, JDalign } from "@janda-com/front";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import BookLayout from "../component/layout/BookLayout";
import { AppContext } from "../context/context";
import { SHOPPING_LINK } from "../types/const";
import { Paths } from "./index[depre]";

type TIntroList = {
    title: string;
    link: string;
    icon: string;
};

const svg_arrow_right = `<svg width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg_arrow_right"><path d="M2.85711 17.1429L37.1428 17.1429" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.1428 2.14285L37.1428 17.1429L22.1428 32.1429" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const TourLayout = () => {
    const { s } = useContext(AppContext);
    const tour_title = "Korea Guide";
    const tour_subtitle = s("tourTitleSubTitle");
    const tour_subUnder = s("everyGuideHasLicense");
    const tour_bgImage = "/img/main-99.jpeg";

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
                    <Image
                        src={tour_bgImage}
                        layout="fill"
                        objectFit="cover"
                        className="tour__bgimage"
                        loading="eager"
                        priority
                    />
                    <div className="tour__filter"></div>
                    <div className="tour__titlewrap ani_downtop">
                        <h1 className="tour__title">{tour_title}</h1>
                        <p
                            className="tour__subtitle"
                            dangerouslySetInnerHTML={{ __html: tour_subtitle }}
                        ></p>
                        <p className="tour__mini">{tour_subUnder}</p>
                    </div>
                    <div className="tour__introwrap">
                        {displayIntroList(tour_introList)}
                    </div>
                </div>
            </div>
        </BookLayout>
    );
};

export default TourLayout;
