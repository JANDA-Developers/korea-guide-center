import {
    Bold,
    Flex,
    getAllFromUrl,
    getFromUrl,
    JDalign,
    JDbutton,
    JDcontainer,
    JDhorizen,
    Mb,
    s4,
    Small,
    useModal,
    WindowSize,
} from "@janda-com/front";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { InfoCard } from "../../atom/InfoCard";
import {
    DetailTourPicker,
    getSelecTableTour,
} from "../../component/productDetailComponents/DetailTourpicker";
import { DetailHeader } from "../../component/productDetailComponents/DetailHeader";
import { useProductFindById } from "../../hook/useProduct";
import { useTourList } from "../../hook/useTour";
import { useState } from "react";
import { Fproduct, Ftour, SettlementStatus, TourStatus } from "../../types/api";
import { useEffect } from "react";
import { DetailPeopleSelecter } from "../../component/productDetailComponents/DetailPeopleSelecter";
import { usePeopleCnt } from "../../hook/usePeopleCnt";
import { ReviewBoxsWithApi } from "../../component/reviewBox/ReviewBoxs";
import {
    BestProductList,
    NewsProductList,
    ProductViewCardsWithApi,
    regionIn,
} from "../../component/productViewCard/ProductViewCards";
import { DetailPriceViewer } from "../../component/productDetailComponents/DetailPriceViwer";
import { BookLayout } from "../../component/layout/BookLayout";
import { DetailNavCard } from "../../component/productDetailComponents/DetailNavCard";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import {
    IReviewModalInfo,
    ReviewModal,
    ReviewModalWrap,
} from "../../component/ReviewModal/ReviewModal";
import { IBuyPageQuery } from "../../page/pay/Pay";
import { Paths } from "../index[depre]";
import {
    BestProductViewsLineHeader,
    NewstProductViewsLineHeader,
    ProductViewsLineHeader,
    RegionProductViewsLineHeader,
    RegionProductViewsLineHeader2,
} from "../../component/productViewCard/ProductViewsLineHeader";
import { useHistory } from "react-router-dom";
import { Galley } from "../../component/gallery/Gallery";
import { Refund } from "../../types/const";
import { Red } from "../../atom/shortCut/Short";
import { DetailNavCardMobile } from "../../component/productDetailComponents/DetailNavCardMobile";
import { Video } from "../../component/video/Video";
import { InfoBox } from "../../component/infoBox/InfoBox";
import { SubPlanViewers } from "../../component/subPlan/SubPlanViewers";
import { pageQueryGenerate } from "../../utils/searchGen";
import GoogleMapViewOnly from "../../component/googleMap/ViewOnltMap";
import { ReviewSummaryBox } from "../../component/reviewSummaryBox/ReviewSummaryBox";
import { merge } from "../../utils/merge";
import { cloneDeep } from "lodash";
import RenderIfVisible from "../../component/renderIfVisible/RenderIfVisible";
import LocationMarker from "./LocationMarker";

export interface IProductDetailQuery {
    tourId?: string;
}

export const getPayPageQuery = () => {
    return getAllFromUrl() as IProductDetailQuery;
};

interface IProp {
    product?: Partial<Fproduct>;
    mode?: "preview";
    id?: string;
}

export const ProductDetail: React.FC<IProp> = ({
    id: propId,
    mode,
    product: propProduct,
}) => {
    const router = useRouter();
    const id = propId || (router.query.id as string);
    const reviewModalHook = useModal<IReviewModalInfo>();
    const { s, l, loginAnd } = useContext(AppContext);
    const [tour, setTour] = useState<Ftour>();
    const history = useHistory();
    const { loading, item: findProduct } = useProductFindById(id);
    const { items: tours } = useTourList(
        {
            fixingFilter: {
                productId__eq: id,
            },
        },
        {
            skip: !id,
        }
    );
    const product = useMemo(() => {
        if (!findProduct) return;
        let product = findProduct;
        if (propProduct) {
            const cloneProduct = cloneDeep(findProduct);
            product = merge(cloneProduct, propProduct);
        }
        return product;
    }, [propProduct, findProduct]);

    const isPreveiw = mode === "preview";
    const { peopleCnt, setPeopleCnt, totalPeopleCnt } = usePeopleCnt();

    const handleSelectTour = (tour: Ftour) => {
        setTour(tour);
    };

    const moveToPay = () => {
        const to = pageQueryGenerate<IBuyPageQuery>(
            {
                adult: peopleCnt.adult.toString(),
                baby: peopleCnt.baby.toString(),
                kids: peopleCnt.kids.toString(),
                tourId: tour?._id,
            },
            Paths.pay
        );
        router.push(to);
    };

    const handleToPay = () => {
        loginAnd(moveToPay, {
            modalInfo: {
                unLoginContinue: moveToPay,
            },
        });
    };

    const targets = getSelecTableTour(tours);
    const hasAvilalbeTour = targets.length > 0;

    useEffect(() => {
        const urlTourId = getFromUrl("tourId");
        if (tours.length) {
            const urlFindTour = tours.find((tour) => tour._id === urlTourId);
            setTour(urlFindTour || targets[0] || tours[0]);
        }
    }, [tours.length]);

    const HeadInfo = (str: string) => (
        <Bold size="large" mb="small">
            {str}
        </Bold>
    );

    const handleScrollToResv = () => {
        const scrollTarget = document.getElementById("ProductDetailDatePicker");
        if (scrollTarget) {
            scrollTarget.scrollIntoView({ behavior: "smooth" });
        }
    };

    if ((!isPreveiw && !tour) || !product) return null;

    const tourLike: Ftour = {
        __typename: "Tour",
        startDate: new Date(),
        _id: s4(),
        createdAt: new Date(),
        updatedAt: new Date(),
        bookings: [],
        cancelBookingCnt: 0,
        code: "",
        completeBookingCnt: 0,
        endDate: new Date(),
        number: 0,
        productId: product._id,
        readyBookingCnt: 0,
        representive: false,
        settlementAmt: 0,
        settlementId: "",
        settlementStatus: SettlementStatus.READY,
        totalAdult: 0,
        totalBaby: 0,
        totalKids: 0,
        totalMember: 0,
        totalPaidAmt: 0,
        totalRefundPrice: 0,
        tourStatus: TourStatus.DONE,
        productInfomation: product,
        ...tour,
    };

    const Tour = tour || tourLike;
    const {
        include,
        unInclude,
        address,
        descriptionLarge,
        shortDecsription,
        importantNotice,
        startPoint,
        videos,
        startTime,
        subPlanes,
        marker,
    } = Tour?.productInfomation;
    return (
        <BookLayout layoutHide={isPreveiw}>
            <JDcontainer
                size={WindowSize.lg}
                className="ProductDetail"
                verticalPadding
            >
                <Flex oneone mb="largest">
                    <JDalign className="ProductDetail__body" mr="large">
                        {/* 동진 */}
                        {product.region && (
                            <LocationMarker
                                location={
                                    <RegionProductViewsLineHeader2
                                        // 지역명 + ~~
                                        region={product.region}
                                    />
                                }
                            ></LocationMarker>
                        )}
                        <DetailHeader product={product} tour={Tour} />
                        {/*<JDhorizen margin={3} />* */}
                        <Galley photos={Tour.productInfomation.images || []} />
                        <Mb />
                        <InfoCard>
                            <Small style={{ whiteSpace: "pre-line" }}>
                                {l(shortDecsription)}
                            </Small>
                        </InfoCard>
                        <Mb />
                        {descriptionLarge && (
                            <>
                                <Small style={{ whiteSpace: "pre-line" }}>
                                    {l(descriptionLarge)}
                                </Small>
                                <Mb />
                            </>
                        )}
                        {videos?.[0]?.uri && <Video src={videos[0]?.uri} />}
                        <JDhorizen margin={3} />
                        {HeadInfo(s("dateSelect"))}

                        <DetailTourPicker
                            className="ProductDetail__datepicker"
                            handleSelectTour={handleSelectTour}
                            product={product}
                            tours={tours}
                            selectedTour={Tour}
                            hasAvilalbeTour={hasAvilalbeTour}
                        />
                        <Mb mb="tiny" />
                        <InfoBox size="small">
                            {s("tourDiffByDateWarn")}
                        </InfoBox>
                        <Mb />
                        {hasAvilalbeTour ? (
                            <DetailPeopleSelecter
                                setPeopleCnt={setPeopleCnt}
                                peopleCnt={peopleCnt}
                                tour={tour}
                            />
                        ) : (
                            <Red>{s("noTourDayCanSelect")}</Red>
                        )}
                        <Mb mb="largest" />
                        {hasAvilalbeTour && (
                            <JDalign mb="largest">
                                <DetailPriceViewer
                                    peopleCnt={peopleCnt}
                                    tour={Tour}
                                />
                                <Flex column vEnd text="right">
                                    <JDbutton
                                        onClick={handleToPay}
                                        br="square"
                                        mode="flat"
                                        size="large"
                                        thema="primary"
                                        disabled={!totalPeopleCnt}
                                    >
                                        {s("doPay")}
                                    </JDbutton>
                                </Flex>
                            </JDalign>
                        )}
                        {subPlanes && (
                            <JDalign mb="largest">
                                <SubPlanViewers subPlanes={subPlanes} />
                            </JDalign>
                        )}

                        <JDhorizen margin={3} />
                        <JDalign
                            hide={!l(include) && !l(unInclude) && !l(address)}
                        >
                            {HeadInfo(s("product_info"))}
                        </JDalign>
                        <JDalign mb="huge" hide={!l(address)}>
                            <Bold mb>{s("location")}</Bold>
                            <Small style={{ whiteSpace: "pre-line" }}>
                                {l(address)}
                            </Small>
                        </JDalign>
                        <JDalign mb="huge" hide={!l(include)}>
                            <Bold mb>{s("include")}</Bold>
                            <Small style={{ whiteSpace: "pre-line" }}>
                                {l(include)}
                            </Small>
                        </JDalign>
                        <JDalign hide={!l(unInclude)}>
                            <Bold mb>{s("unInclued")}</Bold>
                            <Small style={{ whiteSpace: "pre-line" }}>
                                {l(unInclude)}
                            </Small>
                        </JDalign>
                        {(!l(include) && !l(unInclude)) || (
                            <JDhorizen margin={3} />
                        )}
                        <JDalign hide={!l(startPoint)}>
                            <JDalign>{HeadInfo(s("useInfo"))}</JDalign>
                            <JDalign hide={!l(startPoint)}>
                                <Bold mb>{s("startPoint")}</Bold>
                                <Small mb style={{ whiteSpace: "pre-line" }}>
                                    {l(startPoint)}
                                </Small>
                                <RenderIfVisible>
                                    {marker && (
                                        <GoogleMapViewOnly
                                            marker={marker}
                                            googleMapsApiKey="AIzaSyCltTSNIJ-zystzs_1G_LEBP-S5L1B3fYk"
                                        />
                                    )}
                                </RenderIfVisible>
                            </JDalign>
                            <JDhorizen margin={3} />
                        </JDalign>
                        <JDalign hide={!l(importantNotice)}>
                            {HeadInfo(s("importantInfo"))}
                            <Small style={{ whiteSpace: "pre-line" }}>
                                {l(importantNotice)}
                            </Small>
                            <JDhorizen margin={3} />
                        </JDalign>
                        {HeadInfo(s("cancelRefundInfo"))}
                        <Small style={{ whiteSpace: "pre-line" }}>
                            {l(Refund)}
                        </Small>
                        <JDhorizen margin={5} />
                        {product.reviewCount ? (
                            <JDalign mb="largest">
                                <Flex>
                                    <ReviewSummaryBox
                                        mr="large"
                                        product={product}
                                    />
                                    <ReviewBoxsWithApi
                                        queryParam={{
                                            fixingFilter: {
                                                tourId__eq: Tour._id,
                                            },
                                        }}
                                    />
                                </Flex>
                            </JDalign>
                        ) : null}
                        <JDbutton
                            // hide={!reviewAb}
                            mode="border"
                            br="square"
                            size="long"
                            onClick={() => {
                                reviewModalHook.openModal({
                                    tour,
                                });
                            }}
                        >
                            {s("reviewWrite")}
                        </JDbutton>
                        <ReviewModalWrap
                            key={reviewModalHook.info?.tour?._id}
                            modalHook={reviewModalHook}
                        />
                    </JDalign>
                    <DetailNavCardMobile
                        onSelect={handleScrollToResv}
                        product={product}
                        tours={tours}
                        tour={Tour}
                    />
                    <DetailNavCard
                        reviewModalHook={reviewModalHook}
                        onSelect={handleScrollToResv}
                        product={product}
                        tours={tours}
                        tour={Tour}
                        className="ProductDetail__navCard"
                    />
                </Flex>
                {!isPreveiw && (
                    <div>
                        여행자들이 본 상품
                        <ProductViewsLineHeader
                            title={s("TravelerwithProduct")}
                        />
                        <JDalign mb="largest">
                            <ProductViewCardsWithApi />
                        </JDalign>
                        {product.region && (
                            <JDalign mb="largest">
                                <RegionProductViewsLineHeader
                                // 지역명 + ~~
                                // region={product.region}
                                />
                                <div>
                                    <ProductViewCardsWithApi
                                        queryParam={{
                                            fixingFilter: {
                                                ...regionIn(
                                                    Tour.productInfomation
                                                        .region?._id
                                                ),
                                            },
                                        }}
                                    />
                                    <Mb />
                                </div>
                            </JDalign>
                        )}
                        {/* 투어&여행 베스트셀러 , 최신&트렌드 투어
                        <RenderIfVisible>
                            <BestProductViewsLineHeader />
                        </RenderIfVisible>
                        <RenderIfVisible>
                            <JDalign mb="largest">
                                <ProductViewCardsWithApi {...BestProductList} />
                            </JDalign>
                        </RenderIfVisible> */}
                        {/* <RenderIfVisible>
                            <NewstProductViewsLineHeader />
                            <ProductViewCardsWithApi {...NewsProductList} />
                        </RenderIfVisible> */}
                        <Mb mb />
                        <JDbutton
                            mode="flat"
                            thema="primary"
                            br="square"
                            onClick={() => {
                                router.push(Paths.itstheme);
                            }}
                        >
                            {s("seeMoreProduct")}
                        </JDbutton>
                        {reviewModalHook.isOpen && (
                            <ReviewModal modalHook={reviewModalHook} />
                        )}
                    </div>
                )}
            </JDcontainer>
        </BookLayout>
    );
};

export async function getServerSideProps(context: any) {
    return {
        props: {
            id: context.query.id,
        }, // will be passed to the page component as props
    };
}

export const ProductDetailWrap = () => {
    const router = useRouter();
    const id = router.query.id as string;
    return <ProductDetail key={id + "productDetail"} />;
};

export default ProductDetailWrap;
