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
import { SelectRegionSector } from "../component/SelectRegionSector/SelectRegionSector";
import { AppContext } from "../context/context";
import { useGlobalKoreaMap, useKoreaMap } from "../hook/useKoreaMap";
import { useSortBanner } from "../page/homepage/hook/useSortBanner";
import { localGuideData } from "../component/LocalGuideAndPrivateTour/LocalGuideSlider";
import { FileTagManager } from "../utils/tagManager";
import RegionTopImage from "../component/RegionTopImage/RegionTopImage";
import RegionGuides from "../component/RegionGuides/RegionGuides";

interface IProp {}

export const LocationalGuide: React.FC<IProp> = () => {
    // const { locale } = useRouter();
    // const { homepage, s } = useContext(AppContext);
    // const { locationalBannerImgs } = useSortBanner(
    //     homepage?.bannerImages || []
    // );

    const globalKoreaHook = useGlobalKoreaMap();
    const { selectedGlobalRegion, onClick: selectGlobalRegion } =
        globalKoreaHook;

    const imgUrl = `/img/regionBg/${selectedGlobalRegion}.jpg`;

    const containerSize = WindowSize.lg;

    return (
        <BookLayout>
            <div className="locationalGuide">
                <div className="locationalGuide__regionArea">
                    <RegionTopImage
                        onSelectRegion={selectGlobalRegion}
                        region={selectedGlobalRegion}
                    />
                    {selectedGlobalRegion && (
                        <JDcontainer size={containerSize}>
                            <div className="locationalGuide__regionSelectorSectorContainer">
                                <SelectRegionSector
                                    onSelectRegion={selectGlobalRegion}
                                    region={selectedGlobalRegion}
                                    items={localGuideData}
                                />
                            </div>
                        </JDcontainer>
                    )}
                </div>
                <RegionGuides
                    key={selectedGlobalRegion + "HyperProductViewCardS"}
                    hyper={selectedGlobalRegion}
                />
            </div>
        </BookLayout>
    );
};

export default LocationalGuide;
