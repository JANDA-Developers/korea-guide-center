import {
    Flex,
    getAllFromUrl,
    JDbutton,
    JDColor,
    JDcontainer,
    SkipUpdate,
    updateURLParameter,
} from "@janda-com/front";
import { useRouter } from "next/router";
import React from "react";
import { useContext } from "react";
import { Empty } from "../../atom/Empty";
import { BookingViewCard } from "../../component/bookingViewCard/BookingViewCard";
import { RoundRadioBtnWrap } from "../../component/iconRadioBtn/IconRadioBtn";
import BookLayout from "../../component/layout/BookLayout";
import { AppContext } from "../../context/context";
import { useBookingList } from "../../hook/useBooking";
import { usePaths } from "../../hook/usePaths";
import { Paths } from "../../pages/index[depre]";
import { BookingStatus, Fbooking, _BookingFilter } from "../../types/api";
import {
    onGoingBookingQuery,
    pastBookQuery,
} from "../../utils/bookingStatusChecker";

type TtimeStatus = "PAST" | "ONGOING" | "CANCEL";

interface IBuyPageQuery {
    timeStatus?: TtimeStatus;
}

const getFilterByTimeStatus = (timeStatus: TtimeStatus): _BookingFilter => {
    if (timeStatus === "CANCEL")
        return {
            bookingStatus__eq: BookingStatus.CANCEL,
        };
    if (timeStatus === "ONGOING") return onGoingBookingQuery;
    else return pastBookQuery;
};

export const getPayPageQuery = () => {
    return getAllFromUrl() as IBuyPageQuery;
};

interface IProp {}

export const MyBookPage: React.FC<IProp> = () => {
    if (typeof window === "undefined") return null;
    const rotuer = useRouter();
    const urlParam = getPayPageQuery();
    const { toGuideProfileDetail, toProductDetailPage } = usePaths();
    const { me, s } = useContext(AppContext);
    const { timeStatus } = urlParam;
    const {
        getLoading,
        items: bookings,
        filter,
        setFilter,
    } = useBookingList({
        fixingFilter: {
            buyerId__eq: me?._id,
        },
        initialFilter: getFilterByTimeStatus(timeStatus || "ONGOING"),
    });

    const handleClickStatusFilter = (status: TtimeStatus) => () => {
        const nextUrl = updateURLParameter(location.href, "status", status);
        history.pushState(null, document.title, nextUrl);
        setFilter({ ...getFilterByTimeStatus(status) });
    };

    const isStatusOn = (status: TtimeStatus): JDColor | undefined => {
        if (status === "PAST")
            if (filter.tourStart__lte) return "primary";
            else return undefined;
        if (status === "ONGOING")
            if (filter.tourStart__gte) return "primary";
            else return undefined;
        if (status === "CANCEL")
            if (filter.bookingStatus__eq === BookingStatus.CANCEL)
                return "primary";
            else return undefined;
    };

    const handleViewDetail = (booking: Fbooking) => () => {
        rotuer.push(Paths.bookingDetailView + "?bookingId=" + booking._id);
    };

    return (
        <BookLayout>
            <JDcontainer verticalPadding>
                <Flex>
                    <RoundRadioBtnWrap
                        flex={{ oneone: true }}
                        mb
                        style={{ overflow: "visible" }}
                    >
                        <JDbutton
                            padding="small"
                            mode="border"
                            thema={isStatusOn("ONGOING")}
                            onClick={handleClickStatusFilter("ONGOING")}
                        >
                            {s("willTravel")}
                        </JDbutton>
                        <JDbutton
                            padding="small"
                            mode="border"
                            thema={isStatusOn("PAST")}
                            onClick={handleClickStatusFilter("PAST")}
                        >
                            {s("pastTravel")}
                        </JDbutton>
                        <JDbutton
                            padding="small"
                            mode="border"
                            thema={isStatusOn("CANCEL")}
                            onClick={handleClickStatusFilter("CANCEL")}
                        >
                            {s("cancelTravel")}
                        </JDbutton>
                    </RoundRadioBtnWrap>
                </Flex>
                <Empty empty={bookings} msg={s("noBookedTour")} />
                <SkipUpdate skip={getLoading}>
                    {bookings.map((bk) => (
                        <BookingViewCard
                            handleViewDetail={handleViewDetail(bk)}
                            handleViewTour={() => {
                                toProductDetailPage(bk.productId, {
                                    tourId: bk.tourId,
                                });
                            }}
                            mb
                            key={bk._id}
                            booking={bk}
                        />
                    ))}
                </SkipUpdate>
            </JDcontainer>
        </BookLayout>
    );
};
