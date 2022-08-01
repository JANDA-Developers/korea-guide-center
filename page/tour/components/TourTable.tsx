import React from "react";
import {
    autoComma,
    Flex,
    IusePagination,
    JDalign,
    JDlabel,
    JDtypho,
    Mb,
    Small,
    Tiny,
} from "@janda-com/front";
import {
    FoffsetPagingInfo,
    Ftour,
    SettlementStatus,
    tourList_TourList_items,
    TourStatus,
} from "../../../types/api";
import JDtable, {
    IJDTableProps,
    JDcolumn,
} from "../../../component/table/Table";
import { useRouter } from "next/router";
import { Clip } from "../../../atom/clip/Clip";
import { yymmdd, yyyymmdd, yyyymmddHHmm } from "../../../utils/dateFormat";
import { Red } from "../../../atom/shortCut/Short";
import Pagination from "../../../component/pagination/Pagination";
import { Img } from "../../../atom/Image";
import { minusFee, useSettlementManage } from "../../../hook/useSettlement";
import { useContext } from "react";
import { AppContext, IContext } from "../../../context/context";
import {
    MaxiMumMemberBadge,
    RepresentiveTourBadge,
    SettlementStatusBadge,
    TourStatusBadge,
} from "../../../component/statusBadges/StatusBadges";
import { TableBtn } from "../../../component/btns/ModalBtn";
import { getTourLink } from "../../../hook/useInit";
import dayjs from "dayjs";
import { IGuideContext } from "../../context";
import { TourPriceView } from "./TourPriceView";
import { isPast } from "date-fns";
import { ProductInfoTableCell } from "./ProductInfoTableCell";

export type TproductRowData = tourList_TourList_items;

export const getTourSummary = (
    context: IContext | IGuideContext,
    tour: Ftour
) => {
    const { isMaster, me } = context;

    const iBooked = me?.myTourInfoes?.find((t) => t.code === tour.code);
    const isSettlementReady = tour.settlementStatus === SettlementStatus.READY;
    const { totalMember, productInfomation, tourStatus, startDate } = tour;
    const minMember = productInfomation.minMember;
    const isPastCompleted = dayjs(tour.endDate).isBefore(new Date());

    const isPast = dayjs(startDate).isBefore(new Date());
    const isCanceld = tourStatus === TourStatus.CANCEL;
    const cancelAb = isMaster || ((minMember || 0) > totalMember && !isCanceld);
    const reviewAb = isMaster || (isPast && iBooked);
    const settlementAb = isPast;
    const settlementRequestAb =
        !isCanceld && isSettlementReady && (isMaster || isPastCompleted);

    const bookingCnt =
        (tour?.readyBookingCnt || 0) + (tour?.completeBookingCnt || 0);

    const hasBooking = bookingCnt > 0;
    const updateAb = !isPast && !bookingCnt && !isPast;

    return {
        isPast,
        hasBooking,
        settlementRequestAb,
        updateAb,
        bookingCnt,
        cancelAb,
        reviewAb,
        settlementAb,
    };
};

interface IProp extends Partial<IJDTableProps> {
    editMode?: boolean;
    proposal?: boolean;
    pageInfo?: FoffsetPagingInfo;
    paginationHook?: IusePagination;
    Controller?: (data: TproductRowData) => JSX.Element;
    tours: TproductRowData[];
}
export const TourTable: React.FC<IProp> = ({
    tours,
    editMode,
    proposal,
    Controller,
    paginationHook,
    pageInfo,
    ...props
}) => {
    const { s, l } = useContext(AppContext);
    const route = useRouter();
    const context = useContext(AppContext);
    const { homepage } = context;

    let columns: JDcolumn<TproductRowData>[] = [
        {
            skip: !Controller,
            width: 200,
            Header: () => <div>{s("function")}</div>,
            accessor: "_id",
            Cell: ({ original }) => {
                const { representive } = original;
                return (
                    <div>
                        <div>
                            <RepresentiveTourBadge
                                mb="small"
                                representive={representive}
                            />
                        </div>
                        {Controller?.(original)}
                    </div>
                );
            },
        },
        {
            Header: () => <div>{s("tourInfo")}</div>,
            accessor: "productInfomation",
            Cell: ({ original }) => {
                const {
                    _id,
                    code,
                    productInfomation: { thumbNail, title },
                    productId,
                } = original;
                if (!thumbNail?.uri) return;
                return (
                    <ProductInfoTableCell
                        tourCode={code}
                        tourId={_id}
                        productId={productId}
                        title={title?.ko || ""}
                        thumbNail={thumbNail.uri}
                    />
                );
            },
        },
        {
            width: 200,
            Header: () => <div>{s("tourDate")}</div>,
            accessor: "createdAt",
            Cell: ({ original: { startDate, tourStatus, createdAt } }) => {
                return (
                    <div>
                        <TourStatusBadge
                            mb="small"
                            isPast={isPast(startDate)}
                            status={tourStatus}
                        />
                        <div>
                            <Small color="grey2" mb="small">
                                {s("tourDate")} {yymmdd(startDate)}
                            </Small>
                        </div>
                        <div>
                            <Small color="grey2">
                                {s("createdDate")}{" "}
                                {yymmdd(dayjs(createdAt).toDate())}
                            </Small>
                        </div>
                    </div>
                );
            },
        },

        {
            width: 200,
            skip: !editMode,
            Header: () => <div>{s("price")}</div>,
            accessor: "productInfomation",
            Cell: ({ original: { productInfomation } }) => {
                const { priceAdult, priceKid, priceBaby } =
                    productInfomation || {};
                return (
                    <div>
                        <TourPriceView
                            adult={priceAdult}
                            baby={priceBaby}
                            kid={priceKid}
                        />
                    </div>
                );
            },
        },
        {
            skip: proposal || editMode,
            Header: () => <div>정산가격</div>,
            accessor: "totalPaidAmt",
            Cell: ({
                original: {
                    totalPaidAmt,
                    totalRefundPrice,
                    settlementAmt,
                    settlementStatus,
                },
            }) => {
                if (settlementAmt) return <div>{autoComma(settlementAmt)}</div>;
                return (
                    <Small>
                        <div>
                            <JDlabel>합계가격</JDlabel>
                        </div>
                        <JDtypho mb text="center">
                            {autoComma(totalPaidAmt || 0)}
                            <Red hide={!totalRefundPrice}>
                                -{autoComma(totalRefundPrice || 0)}
                            </Red>
                        </JDtypho>

                        <SettlementStatusBadge
                            mb="small"
                            status={settlementStatus}
                        />
                        <div>
                            <JDlabel>정산가격</JDlabel>
                        </div>
                        {autoComma(
                            minusFee(
                                (totalPaidAmt || 0) - (totalRefundPrice || 0),
                                homepage?.feePolicies || []
                            )
                        )}
                    </Small>
                );
            },
        },
        {
            skip: proposal,
            Header: () => <div>인원</div>,
            accessor: "totalPaidAmt",
            Cell: ({
                original: {
                    totalMember,
                    completeBookingCnt,
                    readyBookingCnt,
                    productInfomation,
                },
            }) => {
                return (
                    <span>
                        <MaxiMumMemberBadge
                            mb="tiny"
                            currentMember={totalMember}
                            maxMember={productInfomation.maxMember || 0}
                            minMember={productInfomation.minMember || 0}
                        />
                        <JDtypho mb="tiny">{totalMember}</JDtypho>
                        <Tiny color="grey4">
                            (최소:{productInfomation.minMember} 최대:
                            {productInfomation.maxMember})
                        </Tiny>
                    </span>
                );
            },
        },
        {
            skip: proposal,
            Header: () => <div>예약</div>,
            accessor: "totalPaidAmt",
            Cell: ({
                original: {
                    totalMember,
                    completeBookingCnt,
                    readyBookingCnt,
                    cancelBookingCnt,
                    productInfomation,
                },
            }) => {
                return (
                    <span>
                        <Small color="grey4">
                            <JDalign mb="small">
                                완료예약:{completeBookingCnt}
                            </JDalign>
                            <JDalign mb="small">
                                취소예약:{cancelBookingCnt}
                            </JDalign>
                            <JDalign mb="small">
                                대기예약:{readyBookingCnt}
                            </JDalign>
                        </Small>
                    </span>
                );
            },
        },
    ];
    columns = columns.filter((col) => !col.skip);

    return (
        <div className="TableWrap">
            <JDtable columns={columns} data={tours} {...props} />
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
