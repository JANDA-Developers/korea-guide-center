import React, { useState } from "react";
import JDtable, {
    IJDTableProps,
    JDcolumn,
} from "../../../component/table/Table";
import { notificationHistory_NotificationHistory_items } from "../../../types/api";
import { yyyymmddHHmm } from "../../../utils/dateFormat";
import { JDicon } from "../../../component/icons/Icons";
import { Taccent } from "../../../atom/format/DateFormat";

import { autoHypen, JDbutton, s4, Small } from "@janda-com/front";
import { Clip } from "../../../atom/clip/Clip";
import { stripHtml } from "../../../utils/stripHtml";
import { cutStr } from "../../../utils/cutStr";
import { notificationMethodKr } from "../../../types/const";

export type TBundleRow = Partial<notificationHistory_NotificationHistory_items>;

interface IProp extends Partial<IJDTableProps> {
    handleView?: (product: TBundleRow) => void;
    histories: TBundleRow[];
}
export const SmsHistoryTable: React.FC<IProp> = ({
    histories,
    handleView,
    ...props
}) => {
    const columns: JDcolumn<TBundleRow>[] = [
        {
            Header: () => <div>생성일</div>,
            accessor: "createdAt",
            Cell: ({ original: { createdAt } }) => {
                return <div>{yyyymmddHHmm(createdAt)}</div>;
            },
        },
        {
            width: 300,
            Header: () => <div>발신내용</div>,
            accessor: "content",
            Cell: ({ original: { content } }) => {
                return (
                    <Small style={{ whiteSpace: "pre-line" }}>
                        {cutStr(stripHtml(content || ""), 100)}
                    </Small>
                );
            },
        },
        {
            Header: () => <div>수신자</div>,
            accessor: "receivers",
            Cell: ({ original: { receivers } }) => {
                return (
                    <div>
                        {receivers?.map((receiver) => (
                            <Clip key={s4()}>{receiver}</Clip>
                        ))}
                    </div>
                );
            },
        },
        {
            Header: () => <div>발신방법</div>,
            accessor: "method",
            Cell: ({ original: { method } }) => {
                return notificationMethodKr[method!];
            },
        },
        {
            Header: () => <div>이용금액</div>,
            accessor: "pointConsumed",
            Cell: ({ original: { pointConsumed } }) => {
                return <div>{pointConsumed}</div>;
            },
        },
        {
            Header: () => <div>발신자</div>,
            accessor: "sender",
            Cell: ({ original: { sender } }) => {
                return <div>{sender}</div>;
            },
        },
        {
            Header: () => <div>상세</div>,
            width: 150,
            accessor: "_id",
            Cell: ({ original }) => {
                return (
                    <span>
                        <div>
                            {handleView && (
                                <JDbutton
                                    mb
                                    hover
                                    mode="border"
                                    onClick={() => {
                                        handleView(original);
                                    }}
                                >
                                    자세히보기
                                </JDbutton>
                            )}
                        </div>
                    </span>
                );
            },
        },
    ];

    return <JDtable columns={columns} data={histories} {...props} />;
};
