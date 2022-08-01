import { Flex, JDcontainer, JDtypho, Mb, WindowSize } from "@janda-com/front";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { useContext } from "react";
import { Banner } from "../component/banner/Banner";
import {
    GuideMovieCardsWithApi,
    HyperRegionByGuideViewCarsGroup,
} from "../component/guideMovieClicp/GuideMovieClipList";
import { KoreaMap } from "../component/koreaMap/KoreaMap";
import { BookLayout } from "../component/layout/BookLayout";
import {
    BestProductViewsLineHeader,
    NewstProductViewsLineHeader,
    ProductViewsLineHeader,
} from "../component/productViewCard/ProductViewsLineHeader";
import { RegionDescriptionSecotr } from "../component/RegionDescriptionSector/RegionDescriptionSector";
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
                            {selectedRegiion && (
                                <div className="locationalGuide__regionSecotr">
                                    <RegionDescriptionSecotr
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
                <JDcontainer verticalPadding size={WindowSize.lg}>
                    {selectedRegiion && (
                        <HyperRegionByGuideViewCarsGroup
                            key={selectedRegiion + "HyperProductViewCardS"}
                            hyper={selectedRegiion}
                        />
                    )}
                    <Mb mb="largest" />
                    <Banner
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
                    />
                    <Mb mb="largest" />

                    <GuideMovieCardsWithApi
                        Head={
                            <ProductViewsLineHeader
                                description={s("bestSubGuideTitle")}
                                title={s("bestGuideTitle")}
                            />
                        }
                        randomSort
                        key={locale + "ProductViewCard1"}
                    />
                    <Mb mb="largest" />

                    <GuideMovieCardsWithApi
                        Head={
                            <ProductViewsLineHeader
                                description={s("mianSubGuideLineTitle2")}
                                title={s("mianGuideLineTitle2")}
                            />
                        }
                        randomSort
                        key={locale + "ProductViewCard2"}
                    />
                </JDcontainer>
            </div>
        </BookLayout>
    );
};

export default LocationalGuide;
