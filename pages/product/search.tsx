import {
    Bold,
    Flex,
    getAllFromUrl,
    isEmpty,
    JDalign,
    JDbutton,
    JDcontainer,
    JDhorizen,
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
    ProductViewCards2,
    ProductViewCardsWithApi2,
} from "../../component/productViewCard/ProductViewCards";
import { AppContext } from "../../context/context";
import { useProductList } from "../../hook/useProduct";
import { updateURLParameters, UrlParam } from "../../utils/getUpdateUrlParam";
import { ProductStatus, _ProductFilter, _ProductSort } from "../../types/api";
import { ScrollBox } from "../../component/scrollBox/ScrollBox";
import { checkMobile } from "../../utils/isMobile";
import { EmptyInfo } from "../../atom/EmpyInfo";

interface ISearchPageQuery {
    title?: string;
    filter?: _ProductFilter;
    sort?: _ProductSort[];
}

export const getSearchPageQuery = () => {
    let { filter, sort, ...others } = getAllFromUrl() as ISearchPageQuery;

    if (filter) filter = JSON.parse(decodeURIComponent(filter as string));

    if (sort)
        // @ts-ignore
        sort = JSON.parse(decodeURIComponent(sort as string));

    return { sort, filter, ...others };
};

export const generateFilter = (searchParam?: ISearchPageQuery) => {
    const { locale } = useRouter();
    const { title, filter: _filter, sort } = searchParam || {};

    let filter: any = {};
    if (title) {
        filter.OR = [
            {
                [`title_${locale}__contains`]: title,
            },
            {
                [`descriptionLarge_${locale}__contains`]: title,
            },
            {
                [`shortDecsription_${locale}__contains`]: title,
            },
        ];
    }
    if (_filter) {
        filter = _filter;
    }
    return { filter, sort };
};

interface IProp {}

export const searchPageQueryGenerate = (query: ISearchPageQuery) => {
    const urlQueries: UrlParam[] = Object.entries(query).map(
        ([key, value]): UrlParam => {
            let _value = value;
            if (key === "filter" && value) {
                _value = encodeURIComponent(JSON.stringify(value));
            }
            if (key === "sort" && value) {
                _value = encodeURIComponent(JSON.stringify(value));
            }
            return { param: key, paramVal: _value };
        }
    );

    let host = location.origin;
    if (process.env.NODE_ENV === "production" && host.includes("localhost")) {
        // host = "https://jungle.booking.stayjanda.cloud";
        throw Error("--!");
    }

    // if( ) location.protocol + "://" + host +

    return updateURLParameters(Paths.search, urlQueries);
};

export const Search: React.FC<IProp> = () => {
    if (typeof window === "undefined") return null;
    const router = useRouter();
    const [detailSearch, setDetailSearch] = useState<boolean>(true);
    const urlSearchParam = getSearchPageQuery();
    const { title } = urlSearchParam;
    const { s, catMap, l } = useContext(AppContext);
    const [reload, setReload] = useState<boolean>(false);

    console.log("urlSearchParam", urlSearchParam);

    const { filter: _filter, sort: _sort } = generateFilter(urlSearchParam);

    console.log("title", title);

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
        console.log("products", products);
    }, [products]);

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
        if (reload) {
            router.push(`/product/searchTemp?title=${title}`);
        }
        setReload((prev) => !prev);
    }, [urlSearchParam.title]);

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
                    "{l(urlSerchCat?.label)}" {s("searchResult")}
                </JDtypho>
                <JDtypho
                    mr
                    className="search__searchCount"
                    hide={!title}
                    size="h6"
                    weight={600}
                >
                    <Primary mr="tiny">{title}</Primary>
                    {` `}
                    {s("searchResult")} <Mr mr="small" />
                    <JDbutton
                        className="search__detailSearchBtn"
                        onClick={() => {
                            setDetailSearch(!detailSearch);
                        }}
                        mode="border"
                        size="small"
                        label={`${s("searchDetail")} ${
                            detailSearch ? s("open") : s("close")
                        } `}
                    />
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
                                <Primary mr="tiny">{title}</Primary>{" "}
                                {s("searchResult")}
                            </JDtypho>
                            <Flex between>
                                <Bold mb className="search__searchCount">
                                    <Primary mr="tiny">
                                        {pageInfo.totalDocumentCount}{" "}
                                    </Primary>
                                    {s("searchResult")}
                                </Bold>
                                <ScrollBox mb scrollSize="small">
                                    <Flex mb>
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
                                    </Flex>
                                </ScrollBox>
                            </Flex>
                            <EmptyInfo
                                empty={isEmpty(products)}
                                msg="검색결과를 찾을 수 없습니다."
                                padding={8}
                            />
                            {/* <InfoBox hide={!isEmpty(products)} mb>
                                <LinkText
                                    onClick={() => {
                                        router.push(Paths.offer);
                                    }}
                                >
                                    {s("searchHowAboutCustomLink")}
                                </LinkText>
                            </InfoBox> */}

                            <ProductViewCards2 products={products} wrap />
                            {isEmpty(products) ? (
                                <div>
                                    <JDhorizen margin={5} />
                                    <ProductViewCardsWithApi2 wrap />
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
