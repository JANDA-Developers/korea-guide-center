import React from "react";
import {
    autoComma,
    autoHypen,
    Bold,
    Flex,
    IusePagination,
    JDalign,
    JDbadge,
    JDtypho,
    Mb,
    Small,
    useModal,
} from "@janda-com/front";
import {
    bookingList_BookingList_items,
    FoffsetPagingInfo,
} from "../../../types/api";
import JDtable, {
    IJDTableProps,
    JDcolumn,
} from "../../../component/table/Table";
import { Clip } from "../../../atom/clip/Clip";
import { yyyymmddHHmm } from "../../../utils/dateFormat";
import { Red } from "../../../atom/shortCut/Short";
import Pagination from "../../../component/pagination/Pagination";
import { payMethodKr } from "../../../types/const";
import { agePerPeopleCnt } from "../../../utils/enumToKr";
import {
    BookingStatusBadge,
    TimeBadge,
} from "../../../component/statusBadges/StatusBadges";
import { Info } from "../../../atom/Info";
import { Img } from "../../../atom/Image";
import { TableBtn } from "../../../component/btns/ModalBtn";
import {
    ITravlerFormModalInfo,
    TravlerFormModal,
} from "../../../component/traveler/TravlerFormModal";
import { useContext } from "react";
import GuideContext from "../../context";
import { useStartChat } from "../../../hook/useChatRoom";
import { AppContext } from "../../../context/context";
import { TBookingListType } from "../Booking";
import { Paths } from "../../../pages/index[depre]";
import { useRouter } from "next/router";
import { ProductInfoTableCell } from "../../tour/components/ProductInfoTableCell";

export type TproductRowData = bookingList_BookingList_items;

interface IProp extends Partial<IJDTableProps> {
    pageInfo?: FoffsetPagingInfo;
    paginationHook?: IusePagination;
    Controller?: (data: TproductRowData) => JSX.Element;
    bookings: TproductRowData[];
    type?: TBookingListType;
}
export const BookingTable: React.FC<IProp> = ({
    bookings,
    Controller,
    paginationHook,
    pageInfo,
    type,
    ...props
}) => {
    const router = useRouter();
    const isAllBookings = !type;
    const isPastBookings = isAllBookings || type === "cancel";
    const isWillBookings = isAllBookings || type === "will";
    const isCancelBookings = isAllBookings || type === "cancel";
    const isReadyBookings = isAllBookings || type === "ready";
    const { handleToChatRoomOrCreate } = useStartChat();

    const { travlerFormModalHook } = useContext(GuideContext);
    let columns: JDcolumn<TproductRowData>[] = [
        {
            skip: !Controller,
            Header: () => <div>기능</div>,
            accessor: "_id",
            Cell: ({ original }) => {
                return <div>{Controller?.(original)}</div>;
            },
        },
        {
            width: 150,
            Header: () => <div>투어/예약</div>,
            accessor: "createdAt",
            Cell: ({ original: { createdAt, tourStart } }) => {
                return (
                    <div>
                        <Info
                            mb
                            label="예약일"
                            value={<Small>{yyyymmddHHmm(createdAt)}</Small>}
                        />
                        <Info
                            label="투어일"
                            value={<Small>{yyyymmddHHmm(tourStart)}</Small>}
                        />
                    </div>
                );
            },
        },
        {
            width: 300,
            Header: () => <div>투어정보</div>,
            accessor: "createdAt",
            Cell: ({
                original: {
                    tourTitle,
                    tourCode,
                    tourThumbNail,
                    tourRecycleNumber,
                    tourStart,
                    productId,
                    tourId,
                },
            }) => {
                return (
                    <ProductInfoTableCell
                        title={tourTitle.ko || ""}
                        tourCode={tourCode}
                        tourId={tourId}
                        productId={productId}
                        thumbNail={tourThumbNail.uri}
                    />
                );
            },
        },
        {
            Header: () => <div>상태/가격</div>,
            accessor: "paidPrice",
            Cell: ({
                original: {
                    paidPrice,
                    refundPrice,
                    paymethod,
                    pendingPrice,
                    bookingStatus,
                },
            }) => {
                return (
                    <JDtypho text="center">
                        <BookingStatusBadge mb status={bookingStatus!} />
                        <div>
                            <JDbadge mb="small" thema="grey1">
                                {payMethodKr[paymethod]}
                            </JDbadge>
                        </div>
                        {paidPrice > 0 && autoComma(paidPrice)}
                        {!paidPrice && (
                            <JDtypho color="grey2">
                                {autoComma(pendingPrice)}
                            </JDtypho>
                        )}
                        <Red hide={!refundPrice}>-{autoComma(refundPrice)}</Red>
                    </JDtypho>
                );
            },
        },
        {
            width: 100,
            Header: () => <div>인원</div>,
            accessor: "adultCount",
            Cell: ({ original: { adultCount, kidsCount, babyCount } }) => {
                return (
                    <span>
                        {agePerPeopleCnt(adultCount, kidsCount, babyCount)}
                    </span>
                );
            },
        },
        {
            Header: () => <div>예약인 정보</div>,
            accessor: "buyerName",
            width: 230,
            Cell: ({
                original: {
                    buyerName,
                    buyerEmail,
                    buyerPhone,
                    travlers,
                    buyerId,
                },
            }) => {
                return (
                    <Flex column center vCenter text="center">
                        <JDalign mb="tiny">{buyerName}</JDalign>
                        <Clip mb="tiny">{autoHypen(buyerPhone)}</Clip>
                        <Clip mb="tiny">{buyerEmail}</Clip>
                        <TableBtn
                            mb={buyerId ? "tiny" : "no"}
                            onClick={() => {
                                travlerFormModalHook?.openModal({
                                    defaultTravlersInput: travlers || [],
                                });
                            }}
                        >
                            여행자정보보기
                        </TableBtn>
                        <TableBtn
                            hide={!buyerId}
                            onClick={() => {
                                handleToChatRoomOrCreate(buyerId, buyerName);
                            }}
                        >
                            여행자와 대화하기
                        </TableBtn>
                    </Flex>
                );
            },
        },
    ];
    columns = columns.filter((col) => !col.skip);

    return (
        <div>
            <JDtable columns={columns} data={bookings} {...props} />
            <Mb />
            {paginationHook && (
                <Pagination
                    {...paginationHook}
                    totalPageCount={pageInfo?.totalPageCount || 0}
                />
            )}
        </div>
    );
};
