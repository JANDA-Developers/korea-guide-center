import {
    Flex,
    isEmpty,
    JDcontainer,
    JDhorizen,
    Mb,
    SkipUpdate,
    WindowSize,
} from "@janda-com/front";
import { BookLayout } from "../../../component/layout/BookLayout";
import { useRouter } from "next/router";
import React from "react";

import Pagination from "../../../component/pagination/Pagination";

import {
    ProductViewCards,
    ProductViewCards2,
} from "../../../component/productViewCard/ProductViewCards";
import { useProductList } from "../../../hook/useProduct";
import { _ProductFilter, _ProductSort } from "../../../types/api";

interface IProp {}

export const Products: React.FC<IProp> = () => {
    if (typeof window === "undefined") return null;
    const router = useRouter();

    const productListHook = useProductList(
        {
            fixingFilter: {
                guideId__eq: router.query.key,
                isPriviate__not_eq: true,
            },
            initialViewCount: 100,
        },
        {
            skipLoadingEffect: true,
        }
    );
    const {
        pageInfo,
        paginatorHook,
        items: products,
        getLoading,
        networkStatus,
    } = productListHook;

    if (networkStatus === 1) return null;
    return (
        <BookLayout>
            <JDcontainer
                className="search"
                size={WindowSize.lg}
                verticalPadding
            >
                <Flex oneone className="search__wrapper">
                    <SkipUpdate skip={getLoading}>
                        <div>
                            <ProductViewCards2 wrap products={products} />
                            {isEmpty(products) ? (
                                <div>
                                    <JDhorizen margin={5} />
                                    <div>현재 운영중인 투어가 없습니다.</div>
                                </div>
                            ) : null}
                            <Mb mb="largest" />
                            <Pagination
                                totalPageCount={pageInfo?.totalPageCount || 0}
                                {...paginatorHook}
                            />
                        </div>
                    </SkipUpdate>
                </Flex>
            </JDcontainer>
        </BookLayout>
    );
};

export default Products;
