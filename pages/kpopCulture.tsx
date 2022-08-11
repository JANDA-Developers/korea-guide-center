import { JDcontainer, Mb, WindowSize } from "@janda-com/front";
import React from "react";
import { ItemMiniCategories } from "../component/itemMiniCategories/ItemMiniCategories";
import { BookLayout } from "../component/layout/BookLayout";
import {
    BestProductList,
    NewsProductList,
    ProductViewCardsWithApi,
} from "../component/productViewCard/ProductViewCards";
import {
    BestProductViewsLineHeader,
    KPOPBestProductViewsLineHeader,
    KPOPNewestProductViewsLineHeader,
    NewstProductViewsLineHeader,
} from "../component/productViewCard/ProductViewsLineHeader";
import { useKoreaMap } from "../hook/useKoreaMap";
import { ProductType } from "../types/api";

interface IProp {}

export const KPOPCulture: React.FC<IProp> = () => {
    const commonFilter = {
        queryParam: {
            fixingFilter: {
                type__eq: ProductType?.KPOP,
            },
        },
    };

    return (
        <BookLayout>
            <JDcontainer verticalPadding size={WindowSize.lg}>
                <ItemMiniCategories />
                <Mb mb="largest" />
                <KPOPBestProductViewsLineHeader />
                <ProductViewCardsWithApi
                    {...{
                        ...BestProductList,
                        queryParam: {
                            ...BestProductList.queryParam,
                            ...commonFilter.queryParam,
                        },
                    }}
                />
            </JDcontainer>
        </BookLayout>
    );
};

export default KPOPCulture;
