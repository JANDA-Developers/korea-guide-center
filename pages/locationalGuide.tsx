import { Flex, JDcontainer, JDtypho, Mb, WindowSize } from "@janda-com/front";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { useContext } from "react";
import { Banner } from "../component/banner/Banner";
import {
    GuideMovieCardsWithApi,
    HyperRegionByGuideViewCarsGroup,
    HyperRegionByGuideViewCarsGroup2,
} from "../component/guideMovieClicp/GuideMovieClipList";
import { KoreaMap } from "../component/koreaMap/KoreaMap";
import { BookLayout } from "../component/layout/BookLayout";
import {
    ProductViewCardsWithApi,
    regionIn,
} from "../component/productViewCard/ProductViewCards";
import {
    BestProductViewsLineHeader,
    NewstProductViewsLineHeader,
    ProductViewsLineHeader,
    RegionProductViewsLineHeader,
    RegionProductViewsLineHeader2,
} from "../component/productViewCard/ProductViewsLineHeader";
import {
    RegionDescriptionSecotr,
    RegionDescriptionSecotr2,
    RegionDescriptionSecotr3,
} from "../component/RegionDescriptionSector/RegionDescriptionSector";
import { AppContext } from "../context/context";
import { useKoreaMap } from "../hook/useKoreaMap";
import { useSortBanner } from "../page/homepage/hook/useSortBanner";
import { FileTagManager } from "../utils/tagManager";

interface IProp {}

export const LocationalGuide: React.FC<IProp> = () => {
    const { locale } = useRouter();
    const { homepage, s } = useContext(AppContext);
    const { locationalBannerImgs } = useSortBanner(
        homepage?.bannerImages || []
    );

    const koreaHook = useKoreaMap();
    const { selectedRegiion, onClick: selectRegion } = koreaHook;

    const imgUrl = `/img/regionBg/${selectedRegiion}.jpg`;

    return (
        <BookLayout>
            <div className="locationalGuide">
                {console.log(selectedRegiion)}

                <div className="locationalGuide__regionArea">
                    <JDcontainer
                        className="locationalGuide__regionArea-on"
                        verticalPadding
                        size={WindowSize.lg}
                    >
                        <Flex
                            className="locationalGuide__region"
                            oneone
                            center
                            mb="largest"
                        >
                            {/*  */}
                            {selectedRegiion && (
                                <div className="locationalGuide__regionSecotr">
                                    <RegionDescriptionSecotr3
                                        onSelectRegion={selectRegion}
                                        region={selectedRegiion}
                                    />
                                </div>
                            )}
                            <JDtypho
                                hide={!!selectedRegiion}
                                mr
                                weight={600}
                                size="h6"
                            >
                                {s("selectRegion")}
                            </JDtypho>
                            <div className="locationalGuide__mapWrapper">
                                <KoreaMap {...koreaHook} />
                            </div>
                        </Flex>
                    </JDcontainer>
                    <Image
                        className="locationalGuide__regionArea-bg"
                        src={imgUrl}
                        objectFit="cover"
                        loading="eager"
                        layout="fill"
                        priority
                    />
                </div>

                {/*
                //상단 지역 대표그림 동진
                <div className="locationalGuide__regionArea">
                    <JDcontainer
                        className="locationalGuide__regionArea-on"
                        verticalPadding="normal"
                        size={WindowSize.md}
                    >
                        <Flex
                            className="locationalGuide__region"
                            oneone
                            center
                            mb="largest"
                        >
                            {selectedRegiion && (
                                <div className="locationalGuide__regionSecotr">
                                    <RegionDescriptionSecotr2
                                        onSelectRegion={selectRegion}
                                        region={selectedRegiion}
                                    />
                                </div>
                            )}
                        </Flex>
                    </JDcontainer>
                    <Image
                        className="locationalGuide__regionArea"
                        src={imgUrl}
                        objectFit="cover"
                        loading="eager"
                        layout="fill"
                        priority
                    />
                </div> */}

                {/*<div>
                    <RegionProductViewsLineHeader
                    // 지역명 + ~~
                    // region={product.region}
                    />
                    
                    {true && (
                        <div>
                            <ProductViewCardsWithApi
                                queryParam={{
                                    fixingFilter: {
                                        ...regionIn("613b06e8c5b0cb5fd53cabdc"),
                                    },
                                }}
                            />
                            <Mb />
                        </div>
                    )}
                </div> */}

                <JDcontainer verticalPadding size={WindowSize.lg}>
                    {/* 지역 가이드 */}
                    {selectedRegiion && (
                        <HyperRegionByGuideViewCarsGroup2
                            key={selectedRegiion + "HyperProductViewCardS"}
                            hyper={selectedRegiion}
                        />
                    )}
                    <Mb mb="largest" />

                    {/*<Banner
                        sliderProps={{
                            autoplay: true,
                        }}
                        bannerImages={
                            locationalBannerImgs?.filter((banner) =>
                                FileTagManager.getTagByTagNameAndValue(
                                    banner?.tags || [],
                                    "lang",
                                    locale || "ko"
                                )
                            ) || []
                        }
                    /> */}

                    {/* <Mb mb="largest" /> */}

                    {/* 추천 가이드 */}
                    {/* <GuideMovieCardsWithApi
                        Head={
                            <ProductViewsLineHeader
                                description={s("bestSubGuideTitle")}
                                title={s("bestGuideTitle")}
                            />
                        }
                        randomSort
                        key={locale + "ProductViewCard1"}
                    />
                    <Mb mb="largest" /> */}

                    {/* 스페셜 가이드 */}
                    {/* <GuideMovieCardsWithApi
                        Head={
                            <ProductViewsLineHeader
                                description={s("mianSubGuideLineTitle2")}
                                title={s("mianGuideLineTitle2")}
                            />
                        }
                        randomSort
                        key={locale + "ProductViewCard2"}
                    /> */}
                </JDcontainer>
            </div>
        </BookLayout>
    );
};

export default LocationalGuide;
