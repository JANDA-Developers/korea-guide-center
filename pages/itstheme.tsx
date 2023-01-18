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
    KPOPBestProductList,
} from "../component/productViewCard/ProductViewCards";
import { ProductViewCardsWithHorizenCalendar } from "../component/productViewCard/ProductViewCardsWithHorizenCalendar";
import {
    BestProductViewsLineHeader,
    KPOPBestProductViewsLineHeader,
    NewstProductViewsLineHeader,
} from "../component/productViewCard/ProductViewsLineHeader";
import { AppContext } from "../context/context";
import { useSortBanner } from "../page/homepage/hook/useSortBanner";
import { FileTagManager } from "../utils/tagManager";
import { ProductType } from "../types/api";
import Head from "next/head";

interface IProp {}

export const LocationalGuide: React.FC<IProp> = () => {
    const { locale } = useRouter();
    const { homepage } = useContext(AppContext);
    const { tourCircleBannerImgs: circleBannerImages } = useSortBanner(
        homepage?.bannerImages || []
    );
    const commonFilter = {
        queryParam: {
            fixingFilter: {
                type__eq: ProductType?.KPOP,
            },
        },
    };

    return (
        <BookLayout>
            <Head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                gtag('event', 'conversion', {'send_to': '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}/QNJRCNLB7IIYEPH7irMo'});`,
                    }}
                ></script>
            </Head>
            <JDcontainer verticalPadding size={WindowSize.lg}>
                <ItemMiniCategories />
                <Mb mb="largest" />
                <ProductsGroupRenders />
                <Mb mb="largest" />
                <ProductViewCardsWithApi
                    Head={<BestProductViewsLineHeader />}
                    {...BestProductList}
                />
                <Mb mb="largest" />
                <Banner
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
                />
                <ProductViewCardsWithApi
                    Head={<NewstProductViewsLineHeader />}
                    {...NewsProductList}
                />
                <Mb mb="largest" />
                <KPOPBestProductViewsLineHeader />
                <ProductViewCardsWithApi
                    {...{
                        ...KPOPBestProductList,
                        queryParam: {
                            ...KPOPBestProductList.queryParam,
                            ...commonFilter.queryParam,
                        },
                    }}
                />
                <Mb mb="largest" />
                <ProductViewCardsWithHorizenCalendar />
            </JDcontainer>
        </BookLayout>
    );
};

export default LocationalGuide;
