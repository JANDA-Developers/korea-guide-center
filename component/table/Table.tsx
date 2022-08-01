import { Flex } from "@janda-com/front";
import classNames from "classnames";
import React from "react";
import Scrollbars from "react-custom-scrollbars-2";
import ReactTable, {
    TableProps,
    ReactTableDefaults,
    RowRenderProps,
    Column,
} from "react-table-6";
import { Empty } from "../../atom/Empty";
import { Circle } from "../circle/Circle";
import { JDicon } from "../icons/Icons";

export interface JDrowInfo<T, C extends keyof T = any> extends RowRenderProps {
    original: T;
    value: T[C];
}

export interface JDcolumn<T> {
    [key: string]: any;
    accessor?: keyof T;
    Cell?: (props: JDrowInfo<T>) => string | JSX.Element | JSX.Element[] | void;
}

export interface IJDTableProps<D = any> extends Partial<TableProps<D>> {
    /** 어떤 컬럼이 있는지 정의 */
    columns: Array<Column<D>>;
    /** 컬럼과 키값이 일치하는 데이터 정의 */
    data: D[];
    align?: "center";
    isCheckable?: boolean;
    inClassNames?: string;
    marginAtuo?: boolean;
    visibleOver?: boolean;
}

const overrideConfig: Partial<TableProps<any, any>> = {
    defaultPageSize: 10,
    minRows: 3,
    showPagination: false,
    sortable: false,
    resizable: false,
    previousText: "이전",
    nextText: "다음",
    loadingText: "로딩...",
    noDataText: null,
    pageText: "페이지",
    ofText: "/",
    rowsText: "줄",
};

export const JDtableDefaultConfig = Object.assign(
    ReactTableDefaults,
    overrideConfig
);

const JDtable: React.FC<IJDTableProps> = ({
    align,
    children,
    visibleOver,
    inClassNames,
    marginAtuo = true,
    isCheckable,
    ...props
}) => {
    const classes = classNames("JDtable", inClassNames, {
        "JDtable--select": isCheckable,
    });

    // scroll calculater

    // 상하단 스크롤이 일어날때 화살표가 범위를 벋어나면 하이드
    // 좌우 스크롤이 일어날때

    return (
        <div className="TableWrap">
            <ReactTable
                {...JDtableDefaultConfig}
                loading={false}
                {...props}
                className={classes}
            />
            <Flex hide={true} between>
                <Circle className="TableWrap__OverflowController TableWrap__OverflowController--left">
                    <JDicon icon="shortLeft" />
                </Circle>
                <Circle className="TableWrap__OverflowController TableWrap__OverflowController--right">
                    <JDicon icon="shortRight" />
                </Circle>
            </Flex>
        </div>
    );
};

export default JDtable;
