import {
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
import { useRouter } from "next/router";
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
    ProductViewCards,
    ProductViewCardsWithApi,
} from "../../component/productViewCard/ProductViewCards";
import { AppContext } from "../../context/context";
import { useProductList } from "../../hook/useProduct";
import { updateURLParameters, UrlParam } from "../../utils/getUpdateUrlParam";
import { ProductStatus, _ProductFilter, _ProductSort } from "../../types/api";
import { ScrollBox } from "../../component/scrollBox/ScrollBox";
import { checkMobile } from "../../utils/isMobile";
import { EmptyInfo } from "../../atom/EmpyInfo";
import { useCitiesKoreaMap } from "../../hook/useKoreaMap";
import {
    regionableData,
    mapRegionArr,
} from "../../component/koreaMap/KoreaData";
import { useRecoilState } from "recoil";
import { menuOpenState } from "../../recoil/atoms";

interface ISearchPageQuery {
    title?: string;
    filter?: _ProductFilter;
    sort?: _ProductSort[];
}

const translateKoreanToEnglish = (title: string) => {
    // 하드코딩이라 죄송합니다 😭
    if (title === "dmz") {
        return mapRegionArr[0];
    } else if (title === "서울") {
        return mapRegionArr[1];
    } else if (title === "부산") {
        return mapRegionArr[2];
    } else if (title === "대구") {
        return mapRegionArr[3];
    } else if (title === "인천") {
        return mapRegionArr[4];
    } else if (title === "광주") {
        return mapRegionArr[5];
    } else if (title === "대전") {
        return mapRegionArr[6];
    } else if (title === "울산") {
        return mapRegionArr[7];
    } else if (title === "세종") {
        return mapRegionArr[8];
    } else if (title === "제주") {
        return mapRegionArr[9];
    } else if (title === "경남") {
        return mapRegionArr[10];
    } else if (title === "경북") {
        return mapRegionArr[11];
    } else if (title === "전남") {
        return mapRegionArr[12];
    } else if (title === "전북") {
        return mapRegionArr[13];
    } else if (title === "충남") {
        return mapRegionArr[14];
    } else if (title === "충북") {
        return mapRegionArr[15];
    } else if (title === "강원") {
        return mapRegionArr[16];
    } else if (title === "경기") {
        return mapRegionArr[17];
    } else if (title === "Custom") {
        return mapRegionArr[18];
    } else if (title === "MICE") {
        return mapRegionArr[19];
    } else if (title === "DRIVING") {
        return mapRegionArr[20];
    } else if (title === "의료관광") {
        return mapRegionArr[21];
    } else if (title === "축제") {
        return mapRegionArr[22];
    } else if (title === "통역") {
        return mapRegionArr[23];
    } else if (title === "Barrier-Free") {
        return mapRegionArr[24];
    } else if (title === "VIP의전") {
        return mapRegionArr[25];
    } else if (title === "부동산") {
        return mapRegionArr[26];
    } else if (title === "유학") {
        return mapRegionArr[27];
    } else if (title === "장기체류") {
        return mapRegionArr[28];
    } else if (title === "요리") {
        return mapRegionArr[29];
    }
};

export const getSearchPageQuery = () => {
    let { filter, sort, ...others } = getAllFromUrl() as ISearchPageQuery;

    if (filter) filter = JSON.parse(decodeURIComponent(filter as string));

    if (sort)
        // @ts-ignore
        sort = JSON.parse(decodeURIComponent(sort as string));

    return { sort, filter, ...others };
};

const generateFilter = (searchParam?: ISearchPageQuery) => {
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
    const [detailSearch, setDetailSearch] = useState<boolean>(true);
    const urlSearchParam = getSearchPageQuery();
    console.log(urlSearchParam);
    const { title } = urlSearchParam;
    const { s, catMap, l } = useContext(AppContext);
    const [menuOpen, setMenuOpen] = useRecoilState(menuOpenState);

    const { filter: _filter, sort: _sort } = generateFilter(urlSearchParam);

    const citiesKoreaHook = useCitiesKoreaMap();

    const { selectedCitiesRegion, onClick: selectCitiesRegion } =
        citiesKoreaHook;

    const data = regionableData[selectedCitiesRegion];

    const productListHook = useProductList(
        {
            initialFilter: {
                ..._filter,
            },
            fixingFilter: {
                status__eq: ProductStatus.OPEN,
                isPriviate__not_eq: true,
            },
            initialViewCount: 15,
            initialSort: _sort,
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
        filter,
        networkStatus,
    } = productListHook;

    console.log(title);

    const hasUrlCatMiniFilter =
        urlSearchParam.filter?.categoryMini__id__in?.[0] &&
        urlSearchParam.filter?.categoryMini__id__in?.[0] ===
            filter?.categoryMini__id__in?.[0];
    const urlSerchCat = catMap.ITEM_SMALL.find(
        (cat) => cat._id === urlSearchParam.filter?.categoryMini__id__in?.[0]
    );

    useEffect(() => {
        if (!getLoading) {
            productListHook.setFilter({
                ...filter,
            });
            setMenuOpen(false);
            selectCitiesRegion(translateKoreanToEnglish(title!));
        }
    }, [title]);

    console.log("selectedCitiesRegion : " + selectedCitiesRegion);

    if (networkStatus === 1) return null;
    return (
        <BookLayout>
            <div className="locationalGuide__regionArea">
                <div className="regionTopImage__container">
                    <div
                        className="regionTopImage__titleAndDescContainer"
                        style={{
                            backgroundImage: `url(/img/cities/${selectedCitiesRegion}.jpg)`,
                        }}
                    >
                        <h1 className="regionTopImage__title">
                            {data && l(data.title)}
                        </h1>
                        <p className="regionTopImage__desc">
                            {data && l(data.description)}
                        </p>
                    </div>
                </div>
            </div>
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
                            <Flex between style={{ justifyContent: "end" }}>
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

                            <ProductViewCards wrap products={products} />
                            {isEmpty(products) ? (
                                <div>
                                    <JDhorizen margin={5} />

                                    <ProductViewCardsWithApi wrap />
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
