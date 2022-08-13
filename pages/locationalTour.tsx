import { Flex, JDcontainer, JDtypho, Mb, WindowSize } from "@janda-com/front";
import { useRouter } from "next/router";
import React from "react";
import { useContext } from "react";
import { GuideMovieCardsWithApi } from "../component/guideMovieClicp/GuideMovieClipList";
import { KoreaMap } from "../component/koreaMap/KoreaMap";
import { BookLayout } from "../component/layout/BookLayout";
import {
    BestProductList,
    HyperRegionByProductViewCarsGroup,
    NewsProductList,
    ProductViewCardsWithApi,
} from "../component/productViewCard/ProductViewCards";
import { ProductViewCardsWithHorizenCalendar } from "../component/productViewCard/ProductViewCardsWithHorizenCalendar";
import {
    BestProductViewsLineHeader,
    NewstProductViewsLineHeader,
} from "../component/productViewCard/ProductViewsLineHeader";
import { RegionDescriptionSecotr } from "../component/RegionDescriptionSector/RegionDescriptionSector";
import { AppContext } from "../context/context";
import { useKoreaMap } from "../hook/useKoreaMap";

interface IProp {}

export const LocationalGuide: React.FC<IProp> = () => {
    const { locale } = useRouter();
    const { homepage, s } = useContext(AppContext);
    const koreaHook = useKoreaMap();
    const { selectedRegiion, onClick: selectRegion } = koreaHook;

    return (
        <BookLayout>
            <div className="locationalGuide">
                <div className="locationalGuide__regionArea">
                    <JDcontainer verticalPadding size={WindowSize.lg}>
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
                </div>
                <JDcontainer verticalPadding size={WindowSize.lg}>
                    {selectedRegiion && (
                        <HyperRegionByProductViewCarsGroup
                            key={selectedRegiion + "HyperProductViewCardS"}
                            hyper={selectedRegiion}
                        />
                    )}
                    <Mb mb="largest" />

                    <GuideMovieCardsWithApi />
                    <Mb mb="largest" />
                    <BestProductViewsLineHeader />
                    <ProductViewCardsWithApi
                        key={locale + "ProductViewCard1"}
                        {...BestProductList}
                    />
                    <Mb mb="largest" />
                    <NewstProductViewsLineHeader />
                    <ProductViewCardsWithApi
                        key={locale + "ProductViewCard2"}
                        {...NewsProductList}
                    />
                    <Mb mb="largest" />
                    <ProductViewCardsWithHorizenCalendar />
                </JDcontainer>
            </div>
        </BookLayout>
    );
};

export default LocationalGuide;
