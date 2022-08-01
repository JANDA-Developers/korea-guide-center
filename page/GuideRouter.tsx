import React, { useContext } from "react";
import {
    Switch,
    HashRouter,
    Route,
    Redirect,
    useHistory,
} from "react-router-dom";
import { GuideLayout } from "../component/layout/Layout";
import {
    GuideContextProvider,
    IGuideContext,
    useGuideContext,
} from "./context";
import { Join } from "./join/Join";
import { Category } from "./category/Category";
import { Product } from "./product/Product";
import ProductDetailWrap from "./productDetail/ProductDetail";
import { Tour } from "./tour/Tour";
import Calendar from "./Calendar/Calendar";
import SmsRouter from "./smsRouter/SmsRouter";
import { Booking } from "./booking/Booking";
import { UserModalWrap } from "../component/userModal/UserModal";
import { TourModalWrap } from "../component/tourModal/TourModal";
import TourDetailWrap from "./tourDetail/TourDetail";
import { GuideChatRoomList } from "./my/GuideChatRoomList";
import { GuideOffers } from "./my/GuideOffer";
import { GlobalInputModal } from "../component/GlobalInput/GlobalInputModal";
import { ReviewsGuidePage } from "./review/Reviews";
import { User } from "./User/Users";
import { UserRole } from "../types/api";
import { ProductSearchModalModal } from "../component/grandProductSearchFilter/ProductSearchModal";
import { Group } from "./group/Group";
import { RefundModal } from "../component/refundModal/RefundModal";
import { BookingViewModal } from "./booking/components/bookingModal/BookingViewModal";
import { BannerForm } from "./homepage/BannerForm";
import { SettlementHistory } from "./settlementHistory/SettlementHistory";
import { FeePolicy } from "./homepage/FeePolicy";
import { s4 } from "@janda-com/front";
import { JoinReady } from "./joinReady/JoinReady";
import SuperBoardConfig from "./board/SuperBoardConfig";
import SuperBoardConfigDetail from "./board/SuperBoardConfigDetail";
import { TourSearchModal } from "../component/grandProductSearchFilter/TourSearchModal";
import { Paths } from "../pages/index[depre]";
import { AppContext } from "../context/context";
import { useEffect } from "react";
import { isIE } from "../utils/isIE";
import { useRouter } from "next/router";
import { IndexControl } from "./indexControl/IndexControl";
import { BoardDocList, TRouteChange } from "../pages/BoardList";
import { boardKeys } from "../types/const";
import BoardDocWrite from "../pages/BoardWrite";
import BoardDocView from "../pages/BoardView";

// const InvoiceList = React.lazy(() => import("./page/invoiceLIst/InvoiceList"));

export enum GuidePath {
    main = "/",
    join = "/join",
    sms = "/sms",
    notificationView = "/notificationView",
    notificationWrite = "/notificationWrite",
    notificationList = "/notificationList",
    indexControl = "/indexControl",
    banner = "/banner",
    joinReady = "/joinReady",
    userAll = "/userAll",
    userGuide = "/userGuide",
    userBooker = "/userBooker",
    userAdmin = "/userAdmin",
    guideRequests = "/guideRequests",
    userDeleted = "/userDeleted",
    categories = "/categories",
    product = "/product",
    offers = "/offers",
    chatRoom = "/chatRoom",
    boardConfig = "/boardConfig",
    boardConfigDetail = "/boardConfigDetail",
    tour = "/tour",
    tourWill = "/tourWill",
    tourCancel = "/tourCancel",
    tourPast = "/tourPast",
    settlementHistory = "/settlementHistory",
    settlementRequest = "/settlementRequest",
    groups = "/groups",
    booking = "/booking",
    bookingCancel = "/bookingCancel",
    bookingComplete = "/bookingComplete",
    bookingReady = "/bookingReady",
    bookingPasted = "/bookingPasted",
    bookingWill = "/bookingWill",
    policy = "/policy",
    reviews = "/reviews",
    schedule = "/schedule",
    feePolicy = "/feePolicy",
    boardDocList = "/boardDocList",
    boardDocWrite = "/boardDocWrite",
    boardDocView = "/boardDocView",
    productDetail = "/productDetail",
    productDetailAddRound = "/productDetailAddRound",
    tourDetail = "/tourDetail",
}

interface IGuideRouterProp extends Partial<IGuideContext> {}

const GuideRouter: React.FC<IGuideRouterProp> = () => {
    const { isGuide, contextQueryLoading, isMaster, isLogin } =
        useContext(AppContext);
    const router = useRouter();
    const history = useHistory();
    const context = useGuideContext();
    const {
        bookingViewModalHook,
        refundModalHook,
        tourModalHook,
        userModalHook,
        globalModalHook,
        productSearchModalHook,
        tourSearchModalHook,
    } = context;

    useEffect(() => {
        if (typeof window !== "undefined" && !contextQueryLoading && !isLogin) {
            location.href = Paths.locationalGuide;
        }
    });

    if (isIE()) {
        alert(
            "죄송합니다. Internet Explore를 지원하지 않는 페이지입니다. Edge 또는 Chrome등 다른 브라우저를 통해 이용 부탁드립니다. "
        );
        router.push(Paths.locationalGuide);
    }

    const routerChange = ({ to, docId = "" }: TRouteChange) => {
        let nextPath: string = "";
        if (to === "list") {
            nextPath = GuidePath.notificationList;
        } else if (to === "view") {
            nextPath = GuidePath.notificationView + "/" + docId;
        } else if (to === "write") {
            nextPath = GuidePath.notificationWrite + "/" + docId;
        }
        history.push(nextPath);
    };

    if (contextQueryLoading) return null;
    return (
        <GuideContextProvider
            value={{
                ...context,
            }}
        >
            <GuideLayout>
                <Switch>
                    <Route
                        exact
                        path={[GuidePath.join, "/"]}
                        render={() => <Join />}
                    />
                    <Route
                        path={GuidePath.joinReady}
                        render={() => <JoinReady />}
                    />
                    {/* {isLogin && !(isGuide || isMaster) && (
                        <Redirect to={GuidePath.join} />
                    )} */}
                    <Route
                        path={GuidePath.categories}
                        render={() => <Category />}
                    />
                    <Route
                        path={GuidePath.product + "/:productId?"}
                        render={() => <Product />}
                    />
                    <Route
                        path={
                            GuidePath.productDetail + "/:productId?" + "/:step?"
                        }
                        children={<ProductDetailWrap key={"ProductDetail"} />}
                    />
                    <Route
                        path={GuidePath.productDetailAddRound + "/:productId?"}
                        children={
                            <ProductDetailWrap
                                key={"GuidePath.productDetailAddRound"}
                                mode="addRound"
                            />
                        }
                    />
                    <Route
                        path={GuidePath.tourDetail + "/:tourId"}
                        render={() => <TourDetailWrap />}
                    />
                    <Route
                        path={GuidePath.chatRoom}
                        render={() => <GuideChatRoomList />}
                    />
                    <Route
                        path={GuidePath.offers}
                        render={() => <GuideOffers />}
                    />
                    <Route
                        path={GuidePath.tour + "/:productId?"}
                        render={() => <Tour mode="all" key={"tourAll"} />}
                    />
                    <Route
                        path={GuidePath.tourCancel + "/:productId?"}
                        render={() => <Tour key={"tourCancel"} mode="cancel" />}
                    />
                    <Route
                        path={GuidePath.tourPast + "/:productId?"}
                        render={() => <Tour key={"tourPast"} mode="past" />}
                    />
                    <Route
                        path={GuidePath.tourWill + "/:productId?"}
                        render={() => <Tour key="tourWill" mode="will" />}
                    />
                    <Route
                        path={GuidePath.schedule}
                        render={() => <Calendar />}
                    />
                    <Route
                        path={GuidePath.booking}
                        render={() => <Booking key={"BookingAll"} />}
                    />
                    <Route
                        path={GuidePath.bookingWill}
                        render={() => (
                            <Booking key={"BookingWill"} type="will" />
                        )}
                    />
                    <Route
                        path={GuidePath.bookingCancel}
                        render={() => (
                            <Booking key={"BookingCanceld"} type="cancel" />
                        )}
                    />
                    <Route
                        path={GuidePath.bookingPasted}
                        render={() => <Booking key={"Booking"} type="past" />}
                    />
                    <Route
                        path={GuidePath.bookingReady}
                        render={() => <Booking type="ready" />}
                    />
                    <Route
                        path={GuidePath.reviews}
                        render={() => <ReviewsGuidePage />}
                    />
                    <Route path={GuidePath.groups} render={() => <Group />} />
                    <Route path={GuidePath.sms} render={() => <SmsRouter />} />
                    <Route
                        path={GuidePath.userAll}
                        render={() => <User key={"userAll"} />}
                    />
                    <Route
                        path={GuidePath.userGuide}
                        render={() => (
                            <User key={UserRole.GUIDE} role={UserRole.GUIDE} />
                        )}
                    />
                    <Route
                        path={GuidePath.userBooker}
                        render={() => (
                            <User key={UserRole.BUYER} role={UserRole.BUYER} />
                        )}
                    />
                    <Route
                        path={GuidePath.userAdmin}
                        render={() => (
                            <User key={UserRole.ADMIN} role={UserRole.ADMIN} />
                        )}
                    />
                    <Route
                        path={GuidePath.guideRequests}
                        render={() => (
                            <User GuideRequests key={"GuideRequests"} />
                        )}
                    />
                    <Route
                        path={GuidePath.userDeleted}
                        render={() => (
                            <User deletedUsers key={"Delteed user"} />
                        )}
                    />
                    <Route
                        path={GuidePath.banner}
                        render={() => <BannerForm key={UserRole.ADMIN} />}
                    />
                    <Route
                        path={GuidePath.settlementHistory}
                        render={() => (
                            <SettlementHistory
                                key={"completed"}
                                role={"completed"}
                            />
                        )}
                    />
                    <Route
                        path={GuidePath.settlementRequest}
                        render={() => (
                            <SettlementHistory
                                key={"reqeust"}
                                role={"request"}
                            />
                        )}
                    />
                    <Route
                        path={GuidePath.feePolicy}
                        render={() => <FeePolicy />}
                    />
                    <Route
                        path={GuidePath.indexControl}
                        render={() => <IndexControl />}
                    />

                    <Route
                        exact
                        path={GuidePath.boardConfig}
                        render={() => <SuperBoardConfig />}
                    />
                    <Route
                        path={GuidePath.boardConfigDetail + "/:itemId?"}
                        render={() => <SuperBoardConfigDetail />}
                    />
                    <Route
                        path={GuidePath.joinReady}
                        render={() => <JoinReady />}
                    />
                    <Route
                        path={GuidePath.notificationList}
                        render={() => (
                            <BoardDocList
                                withOutCatFilter
                                layoutHide
                                boardKey={boardKeys.guideAlert}
                                routerChange={routerChange}
                            />
                        )}
                    />
                    <Route
                        path={GuidePath.notificationWrite + "/:docId?"}
                        render={({ match }) => (
                            <BoardDocWrite
                                layoutHide
                                docId={match.params.docId}
                                boardKey={boardKeys.guideAlert}
                                routerChange={routerChange}
                            />
                        )}
                    />
                    <Route
                        path={GuidePath.notificationView + "/:docId"}
                        render={({ match }) => (
                            <BoardDocView
                                layoutHide
                                docId={match.params.docId}
                                boardKey={boardKeys.guideAlert}
                                routerChange={routerChange}
                            />
                        )}
                    />
                </Switch>
            </GuideLayout>
            <UserModalWrap modalHook={userModalHook} />
            <TourModalWrap
                key={tourModalHook.info?.tourId}
                modalHook={tourModalHook}
            />
            <ProductSearchModalModal
                key={
                    productSearchModalHook.isOpen
                        ? "opendProductSearch"
                        : "closedProductSearch"
                }
                modalHook={productSearchModalHook}
            />
            <TourSearchModal
                key={
                    tourSearchModalHook.isOpen
                        ? "opendProductSearch"
                        : "closedProductSearch"
                }
                modalHook={tourSearchModalHook}
            />
            <GlobalInputModal
                key={globalModalHook.isOpen ? "opend" : "closed"}
                {...globalModalHook}
            />
            <RefundModal
                key={
                    refundModalHook.isOpen
                        ? "opnedRefundModal"
                        : "closedRefundModal"
                }
                modalHook={refundModalHook}
            />
            <BookingViewModal
                key={bookingViewModalHook.info?.bookingId}
                modalHook={bookingViewModalHook}
            />
        </GuideContextProvider>
    );
};

export const GuideRouterWrap = () => {
    return (
        <div>
            <HashRouter>
                <Route path="/">
                    <GuideRouter />
                </Route>
            </HashRouter>
        </div>
    );
};

export default GuideRouterWrap;
