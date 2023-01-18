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
import { BookLayout } from "../../component/layout/BookLayout";
import router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Paths } from "../index[depre]";
import { Empty } from "../../atom/Empty";
import { GrandProductSearchFilter } from "../../component/grandProductSearchFilter/GrandProductSearchFilter";
import Pagination from "../../component/pagination/Pagination";
import {
    NewSorter,
    PriceSortLarge,
    PriceSortMin,
    RatingSort,
    ReviwCountSort,
} from "../../component/productSorters/ProductSorters";
import {
    ProductViewCards,
    ProductViewCardsWithApi,
} from "../../component/productViewCard/ProductViewCards";
import { AppContext } from "../../context/context";
import { useProductList } from "../../hook/useProduct";
import { updateURLParameters, UrlParam } from "../../utils/getUpdateUrlParam";
import { ProductStatus, _ProductFilter, _ProductSort } from "../../types/api";
import { ScrollBox } from "../../component/scrollBox/ScrollBox";
import { InfoBox } from "../../component/infoBox/InfoBox";
import { LinkText } from "../../component/link/Link";
import { checkMobile } from "../../utils/isMobile";
import { EmptyInfo } from "../../atom/EmpyInfo";
import { generateFilter, getSearchPageQuery } from "./search";
import { groupProductMap } from "../../utils/categoryMap";

interface ISearchPageQuery {
    title?: string;
    filter?: _ProductFilter;
    sort?: _ProductSort[];
}



interface IProp { }


export const Search: React.FC<IProp> = () => {
    if (typeof window === "undefined") return null;
    const router = useRouter();
    const [detailSearch, setDetailSearch] = useState<boolean>(true);
    const urlSearchParam = getSearchPageQuery();
    const { title } = urlSearchParam;
    const { s, catMap, l, groupsNonIndex } = useContext(AppContext);
    const [reload, setReload] = useState<boolean>(false);

    console.log("urlSearchParam", urlSearchParam)

    const { filter: _filter, sort: _sort } = generateFilter(urlSearchParam);

    console.log("title", title)

    const productListHook = useProductList(
        {
            initialFilter: {
                ..._filter,
            },
            fixingFilter: {
                status__eq: ProductStatus.OPEN,
                isPriviate__not_eq: true,
            },
            initialViewCount: 16,
            initialSort: _sort,
        },
        {
            skipLoadingEffect: true,
        }
    );
    const {
        sort,
        setSort,
        page,
        pageInfo,
        paginatorHook,
        items: products,
        getLoading,
        filter,
        networkStatus,
    } = productListHook;

    useEffect(() => {
        console.log("productListHook", productListHook)
    }, [productListHook])

    const hasUrlCatMiniFilter =
        urlSearchParam.filter?.categoryMini__id__in?.[0] &&
        urlSearchParam.filter?.categoryMini__id__in?.[0] ===
        filter?.categoryMini__id__in?.[0];
    const urlSerchCat = catMap.ITEM_SMALL.find(
        (cat) => cat._id === urlSearchParam.filter?.categoryMini__id__in?.[0]
    );

    useEffect(() => {
        // if (!getLoading) {
        //     productListHook.setFilter({
        //         ...filter,
        //     });
        // }
        // if (reload) {
        //     router.push(`/product/searchTemp?title=${title}`)
        // }
        setReload((prev) => !prev)
    }, [urlSearchParam.title]);

    // 🚧🚧🚧🚧🚧여긴 내가 만든 내세상이야!🚧🚧🚧🚧🚧
    const evneryGroupProducts = groupsNonIndex?.flatMap(
        (group) => group.members
    );

    console.log("evneryGroupProducts", evneryGroupProducts)

    const { items: product } = useProductList({
        fixingFilter: {
            _id__in: evneryGroupProducts,
        },
    });

    const gropsWithProducts = groupProductMap(product, groupsNonIndex || []);
    const filterd = gropsWithProducts.filter((gp) => !isEmpty(gp.products));
    console.log("gropsWithProducts", gropsWithProducts)
    console.log("filterd", filterd)
    // 🚧🚧🚧🚧🚧🚧


    if (networkStatus === 1) return null;
    return (
        <BookLayout>
            <JDcontainer
                className="search"
                size={WindowSize.lg}
                verticalPadding
            >
                <JDtypho
                    mr
                    className="search__searchCount"
                    hide={!hasUrlCatMiniFilter || !urlSerchCat?.label}
                    size="h6"
                    weight={600}
                >
                </JDtypho>
                <JDtypho
                    mr
                    className="search__searchCount"
                    hide={!title}
                    size="h6"
                    weight={600}
                >
                    <Primary mr="tiny">{title}</Primary>


                </JDtypho>

                <Flex oneone className="search__wrapper">
                    <JDalign
                        hide={checkMobile() ? false : detailSearch}
                        className="search__filterzone"
                        mr
                        style={{ flex: 0 }}
                    >
                        <GrandProductSearchFilter
                            productListhook={productListHook}
                        />
                        <Mr
                            className="GrandProductSearchFilter__hideMobile"
                            mr="large"
                        />
                    </JDalign>
                    <SkipUpdate skip={getLoading}>
                        <div>
                            <JDtypho
                                mb="huge"
                                className="search__mobileSearchResult"
                                hide={!title}
                                size="h6"
                                weight={600}
                            >

                                {s("searchResult")}
                            </JDtypho>
                            <Flex between>
                                <Bold mb className="search__searchCount">
                                    <Primary mr="tiny">
                                        {filterd[0]?.products?.length}{" "}
                                    </Primary>
                                    {s("searchResult")}
                                </Bold>
                                <ScrollBox mb scrollSize="small">
                                    {/* <Flex mb>
                                        <NewSorter
                                            mr
                                            sort={sort}
                                            setSort={setSort}
                                        />
                                        <PriceSortMin
                                            mr
                                            sort={sort}
                                            setSort={setSort}
                                        />
                                        <PriceSortLarge
                                            mr
                                            sort={sort}
                                            setSort={setSort}
                                        />
                                        <RatingSort
                                            mr
                                            sort={sort}
                                            setSort={setSort}
                                        />
                                        <ReviwCountSort
                                            mr
                                            sort={sort}
                                            setSort={setSort}
                                        />
                                    </Flex> */}
                                </ScrollBox>
                            </Flex>


                            {isEmpty(products) ? (
                                <div>
                                    {filterd[0] ?
                                        <ProductViewCards wrap products={filterd[0]?.products} />
                                        : null}

                                    {/* {filterd[0]?.products ? filterd[0]?.products.map(fil => {
                                        <div>123</div>
                                    }) : null} */}

                                </div>
                            ) : null}


                            <EmptyInfo
                                empty={isEmpty(gropsWithProducts[0]?.products)}
                                msg="검색결과를 찾을 수 없습니다."
                                padding={8}
                            />

                            {isEmpty(products) ? (
                                <div>
                                    <JDhorizen margin={5} />
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

export default Search;
