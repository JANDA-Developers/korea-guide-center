import React from "react";
import {
    autoComma,
    autoHypen,
    Bold,
    Flex,
    IusePagination,
    JDalign,
    JDbadge,
    JDbutton,
    JDtypho,
    Mb,
    Small,
    useModal,
} from "@janda-com/front";
import {
    FoffsetPagingInfo,
    settlementList_SettlementList_items,
} from "../../../types/api";
import JDtable, {
    IJDTableProps,
    JDcolumn,
} from "../../../component/table/Table";
import { Clip } from "../../../atom/clip/Clip";
import { yyyymmdd, yyyymmddHHmm } from "../../../utils/dateFormat";
import Pagination from "../../../component/pagination/Pagination";
import { TableBtn } from "../../../component/btns/ModalBtn";
import { ITravlerFormModalInfo } from "../../../component/traveler/TravlerFormModal";
import { useContext } from "react";
import GuideContext from "../../context";
import { FeeViewers } from "../../../component/feeViewer/FeeViwer";
import { minusFee } from "../../../hook/useSettlement";

export type TsettlementhistoryRowData = settlementList_SettlementList_items;

interface IProp extends Partial<IJDTableProps> {
    tableFor?: "completed" | "request";
    pageInfo?: FoffsetPagingInfo;
    paginationHook?: IusePagination;
    Controller?: (data: TsettlementhistoryRowData) => JSX.Element;
    settlementhistorys: TsettlementhistoryRowData[];
}
export const SeettlementTable: React.FC<IProp> = ({
    tableFor,
    settlementhistorys,
    Controller,
    paginationHook,
    pageInfo,
    ...props
}) => {
    const isRequestTable = tableFor === "request";
    const { userModalHook, tourModalHook } = useContext(GuideContext);
    let columns: JDcolumn<TsettlementhistoryRowData>[] = [
        {
            width: 200,
            Header: () => <div>투어(회차)코드</div>,
            accessor: "createdAt",
            Cell: ({ original: { tourCode, tourId } }) => {
                return (
                    <Flex center vCenter column>
                        <Clip mb="small">{tourCode}</Clip>
                        <TableBtn
                            onClick={() => {
                                tourModalHook.openModal({
                                    tourId,
                                });
                            }}
                        >
                            자세히보기
                        </TableBtn>
                    </Flex>
                );
            },
        },
        {
            width: 200,
            Header: () => <div>투어명</div>,
            accessor: "createdAt",
            Cell: ({ original: { tourName } }) => {
                return <Small>{tourName.ko}</Small>;
            },
        },
        {
            width: 120,
            Header: () => <div>신청일</div>,
            accessor: "createdAt",
            Cell: ({ original: { createdAt, tourDate } }) => {
                return <Small>{yyyymmddHHmm(createdAt)}</Small>;
            },
        },
        {
            width: 100,
            Header: () => <div>투어일</div>,
            accessor: "createdAt",
            Cell: ({ original: { tourDate } }) => {
                return <Small>{yyyymmdd(tourDate)}</Small>;
            },
        },
        {
            width: 150,
            Header: () => <div>가이드정보</div>,
            accessor: "createdAt",
            Cell: ({ original: { guideName, guideNickName, guideId } }) => {
                return (
                    <Flex center vCenter column>
                        <JDalign typho={{ size: "small" }} mb="tiny">
                            {guideName}({guideNickName})
                        </JDalign>
                        <TableBtn
                            onClick={() => {
                                userModalHook.openModal({ userId: guideId });
                            }}
                        >
                            자세히보기
                        </TableBtn>
                    </Flex>
                );
            },
        },
        {
            width: 100,
            Header: () => <div>판매금액</div>,
            accessor: "amt",
            Cell: ({ original: { amt } }) => {
                return <div>{autoComma(amt)}</div>;
            },
        },
        {
            width: 300,
            Header: () => <div>정산금액</div>,
            accessor: "amt",
            Cell: ({
                original: { settlementedPrice, appliedFeePolicy, amt },
            }) => {
                return (
                    <Flex vCenter center column>
                        <Bold mb="small">
                            {autoComma(minusFee(amt, appliedFeePolicy))}
                        </Bold>
                        <FeeViewers
                            feePolicies={appliedFeePolicy}
                            price={amt}
                        />
                    </Flex>
                );
            },
        },
        {
            width: 180,
            Header: () => <div>가이드메모</div>,
            accessor: "amt",
            Cell: ({ original: { guideMemo } }) => {
                return <Small>{guideMemo}</Small>;
            },
        },
        {
            skip: isRequestTable,
            width: 180,
            Header: () => <div>정산완료메모</div>,
            accessor: "amt",
            Cell: ({ original: { masterMemo } }) => {
                return <Small>{masterMemo}</Small>;
            },
        },
        {
            width: 200,
            skip: !Controller || !isRequestTable,
            Header: () => <div>기능</div>,
            accessor: "_id",
            Cell: ({ original }) => {
                return <div>{Controller?.(original)}</div>;
            },
        },
    ];
    columns = columns.filter((col) => !col.skip);

    return (
        <div>
            <JDtable columns={columns} data={settlementhistorys} {...props} />
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
