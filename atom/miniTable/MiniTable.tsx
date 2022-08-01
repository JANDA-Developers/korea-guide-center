import { Flex, IJDalignProp, JDalign } from "@janda-com/front";
import { TElements } from "@janda-com/front/dist/types/interface";
import React from "react";
import { useS4 } from "../../hook/useUniqkey";

interface IProp extends IJDalignProp {
    data: {
        skip?: boolean;
        label: TElements;
        value: TElements;
        labelWidth?: number | string;
        valueWidth?: number | string;
    }[][];
    labelWidth?: number | string;
    valueWidth?: number | string;
}

export const MiniTable: React.FC<IProp> = ({
    data,
    className,
    labelWidth: globalLabelWidth,
    valueWidth: globalValueWidth,
    ...props
}) => {
    const uniqKey = useS4();
    return (
        <JDalign className={`miniTable ${className}`} {...props}>
            {data.map((dt, index) => (
                <Flex key={uniqKey + index} oneone className="miniTable__row">
                    {dt.map((d) => {
                        if (d.skip) return null;
                        return (
                            <Flex className="miniTable__col">
                                <div
                                    style={{
                                        minWidth:
                                            d.labelWidth || globalLabelWidth,
                                    }}
                                    className="miniTable__label"
                                >
                                    {d.label}
                                </div>
                                <div
                                    style={{
                                        minWidth:
                                            d.valueWidth || globalValueWidth,
                                    }}
                                    className="miniTable__value"
                                >
                                    {d.value}
                                </div>
                            </Flex>
                        );
                    })}
                </Flex>
            ))}
        </JDalign>
    );
};
