import { JDcontainer, Mb, WindowSize } from "@janda-com/front";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Banner } from "../component/banner/Banner";
import { ItemMiniCategories } from "../component/itemMiniCategories/ItemMiniCategories";
import { BookLayout } from "../component/layout/BookLayout";
import {
    BestProductList,
    NewsProductList,
    ProductsGroupRenders,
    ProductViewCardsWithApi,
} from "../component/productViewCard/ProductViewCards";
import { ProductViewCardsWithHorizenCalendar } from "../component/productViewCard/ProductViewCardsWithHorizenCalendar";
import {
    BestProductViewsLineHeader,
    NewstProductViewsLineHeader,
} from "../component/productViewCard/ProductViewsLineHeader";
import { AppContext } from "../context/context";
import { useSortBanner } from "../page/homepage/hook/useSortBanner";
import { FileTagManager } from "../utils/tagManager";

interface IProp {}

export const LocationalGuide: React.FC<IProp> = () => {
    const { locale } = useRouter();
    const { homepage } = useContext(AppContext);
    const { tourCircleBannerImgs: circleBannerImages } = useSortBanner(
        homepage?.bannerImages || []
    );
    return (
        <BookLayout>
            <JDcontainer verticalPadding size={WindowSize.lg}>
                <Mb mb="largest" />
                {/**<Banner
                    ratio={1}
                    slideToShow={8}
                    className="tourCircleBanner"
                    mb="largest"
                    bannerImages={
                        circleBannerImages?.filter((banner) =>
                            FileTagManager.getTagByTagNameAndValue(
                                banner?.tags || [],
                                "lang",
                                locale || "ko"
                            )
                        ) || []
                    }
                /> */}
                <ProductsGroupRenders />
                <ProductViewCardsWithApi
                    Head={<BestProductViewsLineHeader />}
                    {...BestProductList}
                />
                <Mb mb="largest" />
                <ProductViewCardsWithApi
                    Head={<NewstProductViewsLineHeader />}
                    {...NewsProductList}
                />
                <Mb mb="largest" />
                <ProductViewCardsWithHorizenCalendar />
            </JDcontainer>
        </BookLayout>
    );
};

export default LocationalGuide;
