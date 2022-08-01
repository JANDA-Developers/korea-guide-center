import {
    Flex,
    JDcard,
    JDcontainer,
    JDpagination,
    useModal,
    WindowSize,
} from "@janda-com/front";
import { IselectedOption } from "@janda-com/front/dist/types/interface";
import React from "react";
import { useContext } from "react";
import JDsearchBar from "../../atom/SearchBar";
import { CardBtn, TableBtn } from "../../component/btns/ModalBtn";
import { ItemRadio } from "../../component/itemRadio/ItemRadio";
import { CardHead } from "../../component/modalHead/ModalHead";
import { PageHeader } from "../../component/pageHeader/PageHeader";
import { ScrollBox } from "../../component/scrollBox/ScrollBox";
import {
    ISmsSendModalInfo,
    SmsSendModal,
} from "../../component/smsSendModal/SmsSendModal";
import { AppContext } from "../../context/context";
import { useBookingList } from "../../hook/useBooking";
import {
    getBookingSummary,
    useBookingManage,
} from "../../hook/useBookingManage";
import { BookingStatus, Fbooking, _BookingFilter } from "../../types/api";
import {
    cancelBookingQuery,
    onGoingBookingQuery,
    pastBookQuery,
    readyBookingQuery,
} from "../../utils/bookingStatusChecker";
import GuideContext from "../context";
import {
    BookingModal,
    IBookingModalInfo,
} from "./components/bookingModal/BookingModal";
import { BookingTable } from "./components/BookingTable";

export type TBookingListType = "will" | "past" | "cancel" | "ready";

interface IProp {
    type?: TBookingListType;
}

export const getBookingTypeSummary = (type?: TBookingListType) => {
    const isAllBookings = !type;
    const isPastBookings = isAllBookings || type === "past";
    const isWillBookings = isAllBookings || type === "will";
    const isCancelBookings = isAllBookings || type === "cancel";
    const isReadyBookings = isAllBookings || type === "ready";

    return {
        isAllBookings,
        isPastBookings,
        isWillBookings,
        isCancelBookings,
        isReadyBookings,
    };
};

export const Booking: React.FC<IProp> = ({ type }) => {
    const Appcontext = useContext(AppContext);
    const { me, isMaster } = Appcontext;
    const {
        isAllBookings,
        isCancelBookings,
        isPastBookings,
        isReadyBookings,
        isWillBookings,
    } = getBookingTypeSummary(type);

    let typeFilter: _BookingFilter = {};

    if (isCancelBookings) {
        typeFilter = cancelBookingQuery;
    }
    if (isPastBookings) {
        typeFilter = pastBookQuery;
    }
    if (isReadyBookings) {
        typeFilter = readyBookingQuery;
    }
    if (isWillBookings) {
        typeFilter = onGoingBookingQuery;
    }

    if (isAllBookings) {
        typeFilter = {};
    }

    const ownerFilter: _BookingFilter = isMaster
        ? {}
        : {
              guideId__eq: me?._id,
          };
    const bookingListHook = useBookingList({
        fixingFilter: {
            ...typeFilter,
            ...ownerFilter,
        },
    });
    const smsSendModal = useModal<ISmsSendModalInfo>();
    const { items, paginatorHook, pageInfo, filter, setFilter } =
        bookingListHook;
    const { handleComplete, bookingCacnelLoading, bookingUpdateLoading } =
        useBookingManage();
    const bookingModalHook = useModal<IBookingModalInfo>();
    const { bookingCacnelModalHook, refundModalHook, bookingViewModalHook } =
        useContext(GuideContext);

    const handleSelectItem = (item?: IselectedOption) => {
        setFilter({
            productId__eq: item?.value,
        });
    };

    const handleSelfWrite = () => {
        bookingModalHook.openModal();
    };

    const handleEditView = (booking: Fbooking) => () => {
        bookingModalHook.openModal({
            booking,
        });
    };

    const handleSendAllMessage = () => {
        smsSendModal.openModal({
            receviers: [],
        });
    };

    const handleDetailView = (booking: Fbooking) => () => {
        bookingViewModalHook.openModal({
            bookingId: booking._id,
        });
    };

    return (
        <div>
            <JDcontainer size={WindowSize.full} verticalPadding>
                <PageHeader
                    title="예약목록 살펴보기"
                    pageName="예약목록"
                    description="나의 투어에 예약된 목록을 살펴봅니다"
                />
                <JDcard mb head={"예약목록 필터"}>
                    <ScrollBox mb scrollSize="small">
                        <ItemRadio
                            itemIdFilter={filter?.productId__eq}
                            handleSelectItem={handleSelectItem}
                        />
                    </ScrollBox>
                    <JDsearchBar
                        searchOps={[
                            {
                                label: "전체검색",
                                value: "Moid__eq",
                                filter: (value) => {
                                    setFilter({
                                        ...filter,
                                        OR: [
                                            {
                                                tourTitle_ko__contains: value,
                                            },
                                            {
                                                buyerName__contains: value,
                                            },
                                            {
                                                guideNickName__contains: value,
                                            },
                                            {
                                                tourCode__eq: value,
                                            },
                                            {
                                                tourTitle_ko__contains: value,
                                            },
                                            {
                                                buyerEmail__contains: value,
                                            },
                                            {
                                                buyerPhone__contains: value,
                                            },
                                            {
                                                code__eq: value,
                                            },
                                        ],
                                    });
                                },
                            },
                            {
                                label: "구매자이름",
                                value: "buyerName__contains",
                            },
                            {
                                label: "가이드닉네임",
                                value: "guideNickName__contains",
                            },
                            {
                                label: "투어코드",
                                value: "tourCode__eq",
                            },
                            {
                                label: "투어타이틀",
                                value: "tourTitle_ko__contains",
                            },
                            {
                                label: "구매자이메일",
                                value: "buyerEmail__contains",
                            },
                            {
                                label: "핸드폰 번호",
                                value: "buyerPhone__contains",
                            },
                            {
                                label: "예약코드",
                                value: "code__eq",
                            },
                            {
                                label: "예약일",
                                value: "createdAt__gte",
                                type: "dateRange",
                            },
                            {
                                label: "투어일",
                                value: "tourStart__gte",
                                type: "dateRange",
                            },
                        ]}
                        listHook={bookingListHook}
                    />
                </JDcard>
                <JDcard
                    // foot={
                    //     <Flex>
                    //         <CardBtn onClick={handleSelfWrite} mr>
                    //             예약수기 쓰기
                    //         </CardBtn>
                    //         <CardBtn onClick={handleSendAllMessage}>
                    //             단체문자 보내기
                    //         </CardBtn>
                    //     </Flex>
                    // }
                    head={<CardHead title="예약목록" />}
                >
                    <BookingTable
                        type={type}
                        pageInfo={pageInfo}
                        paginationHook={paginatorHook}
                        bookings={items}
                        Controller={(data: Fbooking) => {
                            const { confirmAb, cancelAb, refundAb } =
                                getBookingSummary(data, Appcontext);
                            return (
                                <div>
                                    <div>
                                        <TableBtn
                                            mb="small"
                                            onClick={handleDetailView(data)}
                                        >
                                            자세히보기
                                        </TableBtn>
                                    </div>
                                    {/* <TableBtn
                                        mb="small"
                                        onClick={handleEditView(data)}
                                    >
                                        수정하기
                                    </TableBtn> */}
                                    <div>
                                        <TableBtn
                                            hide={!cancelAb}
                                            mb="small"
                                            thema="error"
                                            loading={bookingCacnelLoading}
                                            onClick={() => {
                                                bookingCacnelModalHook?.openModal(
                                                    {
                                                        booking: data,
                                                    }
                                                );
                                            }}
                                        >
                                            예약취소
                                        </TableBtn>
                                    </div>
                                    <div>
                                        <TableBtn
                                            thema="primary"
                                            hide={!confirmAb}
                                            mb="small"
                                            loading={bookingUpdateLoading}
                                            onClick={() => {
                                                handleComplete(data);
                                            }}
                                        >
                                            예약승인
                                        </TableBtn>
                                    </div>
                                    <div>
                                        <TableBtn
                                            hide={!refundAb}
                                            mb="small"
                                            onClick={() => {
                                                refundModalHook?.openModal({
                                                    booking: data,
                                                });
                                            }}
                                        >
                                            환불하기
                                        </TableBtn>
                                    </div>
                                </div>
                            );
                        }}
                    />
                </JDcard>
            </JDcontainer>
            {smsSendModal.isOpen && <SmsSendModal modalHook={smsSendModal} />}
            <BookingModal
                key={bookingModalHook.info?.booking?._id}
                modalHook={bookingModalHook}
            />
        </div>
    );
};
