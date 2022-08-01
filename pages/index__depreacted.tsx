import { JDalign, JDbutton, WindowSize } from "@janda-com/front";
import { BookHeader } from "../component/layout/BookHeader";
import { useProductList } from "../hook/useProduct";
import ThumbNail from "../page/index/ThumNail";
import React, { useEffect, useContext } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import Link from "next/link";
import { Paths } from "./index[depre]";
import { AppContext } from "../context/context";
import { SHOPPING_LINK } from "../types/const";
import { BookFooter } from "../component/layout/BookFooter";
import { shuffle } from "../utils/shuffle";
import { PageTopBanner } from "../component/PageTopBanner.tsx/PageTopBanner";

interface IProp {}

export const Index: React.FC<IProp> = () => {
    const { s, indexGroup } = useContext(AppContext);
    const { items, setFilter } = useProductList({
        initialFilter: {
            _id__in: indexGroup?.members || [],
        },
        initialViewCount: 15,
    });

    const title = "Korea Guide";

    const itemCopy = shuffle([...items.filter((item) => !!item.thumbNail)]);

    const columns = [
        itemCopy.splice(0, 3),
        itemCopy.splice(0, 3),
        itemCopy.splice(0, 3),
        itemCopy.splice(0, 3),
        itemCopy.splice(0, 3),
    ];

    useEffect(() => {
        Aos.init();
        if (indexGroup?.members.length) {
            setFilter({
                _id__in: indexGroup?.members || [],
            });
        }
    }, [indexGroup?.members.length]);

    return (
        <div className="main">
            <PageTopBanner />
            <BookHeader />
            <div className="main__container">
                <div className="main__head">
                    <h1 className="main__title">{title}</h1>
                    {/* <p
                        className="main__subtitle"
                        dangerouslySetInnerHTML={{ __html: subTitle }}
                    ></p> */}
                    <div className="main__buttons">
                        <Link href={Paths.locationalGuide}>
                            <a>
                                <JDbutton mb mr thema="primary">
                                    {s("localtionalGuide")}
                                </JDbutton>
                            </a>
                        </Link>
                        <Link href={Paths.itstheme}>
                            <a>
                                <JDbutton mb mr thema="primary">
                                    {s("itsThemaTravel")}
                                </JDbutton>
                            </a>
                        </Link>
                        <Link href={Paths.kpopCulture}>
                            <a>
                                <JDbutton mb mr thema="primary">
                                    {s("kpopCulture")}
                                </JDbutton>
                            </a>
                        </Link>
                        <Link href={Paths.offer}>
                            <a>
                                <JDbutton mb mr thema="primary">
                                    {s("customTour")}
                                </JDbutton>
                            </a>
                        </Link>
                        <a href={SHOPPING_LINK}>
                            <JDbutton mb mr thema="primary">
                                {s("shopping")}
                            </JDbutton>
                        </a>
                        <a>
                            <JDbutton mb mr thema="primary">
                                {s("everyGuide")}
                            </JDbutton>
                        </a>
                    </div>
                </div>
                <div className="main__thumbnailwrap">
                    <div className="main__thumbnails">
                        {columns.map((columns, index) => (
                            <div
                                key={`main__thumbsColumn${index}`}
                                className="main__thumbsColumn"
                            >
                                {columns.map((product, index) => (
                                    <ThumbNail
                                        data-aos-delay={(
                                            index *
                                            2 *
                                            100
                                        ).toString()}
                                        data-aos-offset="-99000"
                                        data-aos="fade-up"
                                        className={`thumbImg ${index}`}
                                        product={product}
                                        key={product._id}
                                        index={0}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <div className="main__footer"></div> */}
            <BookFooter footerContainerSize={WindowSize.lg} />
        </div>
    );
};

export default Index;
