import { TElements } from "@janda-com/front/dist/types/interface";
import React, { PropsWithChildren } from "react";
import { useS4 } from "../../hook/useUniqkey";

export interface ILineTableColumn<T> {
    header: TElements;
    key: keyof T;
    onRowClick?: () => void;
    body: (data: T) => TElements;
    style?: {
        maxWidth: string;
        minWidth: string;
    };
}

interface IColumnProp<T> {
    data: T[];
    columns: ILineTableColumn<T>[];
}

export const LineTable = <_, T>({
    data,
    columns,
}: PropsWithChildren<IColumnProp<T>>): JSX.Element => {
    const uniqKey = useS4();
    return (
        <div className="lineTable">
            {columns.map((column, index) => (
                <div
                    key={(column.key as string) + uniqKey}
                    className="lineTable__column"
                >
                    <div className="lineTable__columnHeader">
                        {column.header}
                    </div>
                    {data.map((data, index) => (
                        <div
                            onClick={column.onRowClick}
                            key={index + uniqKey}
                            className="lineTable__row"
                        >
                            {column.body(data)}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default LineTable;
