import {
    Bold,
    Flex,
    getAllFromUrl,
    isEmpty,
    JDalign,
    JDbutton,
    JDcontainer,
    JDhorizen,
    JDswitch,
    JDtypho,
    Mb,
    Mr,
    Primary,
    SkipUpdate,
    WindowSize,
} from "@janda-com/front";
import { BookLayout } from "../../../component/layout/BookLayout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { GrandProductSearchFilter } from "../../../component/grandProductSearchFilter/GrandProductSearchFilter";
import Pagination from "../../../component/pagination/Pagination";
import {
    NewSorter,
    PriceSortLarge,
    PriceSortMin,
    RatingSort,
    ReviwCountSort,
} from "../../../component/productSorters/ProductSorters";
import {
    ProductViewCards,
    ProductViewCardsWithApi,
} from "../../../component/productViewCard/ProductViewCards";
import { AppContext } from "../../../context/context";
import { useProductList } from "../../../hook/useProduct";
import { _ProductFilter, _ProductSort } from "../../../types/api";
import { ScrollBox } from "../../../component/scrollBox/ScrollBox";
import { checkMobile } from "../../../utils/isMobile";
import { EmptyInfo } from "../../../atom/EmpyInfo";

interface IProp {}

export const Products: React.FC<IProp> = () => {
    if (typeof window === "undefined") return null;
    const router = useRouter();
    const { s, catMap, l } = useContext(AppContext);
    const [reload, setReload] = useState<boolean>(false);

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
        sort,
        setSort,
        pageInfo,
        paginatorHook,
        items: products,
        getLoading,
        networkStatus,
    } = productListHook;

    useEffect(() => {
        console.log("products", products);
    }, [products]);

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
                            <ProductViewCards wrap products={products} />
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