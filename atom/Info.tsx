import { IJDalignProp, JDalign, JDtypho } from "@janda-com/front";
import { TElements } from "@janda-com/front/dist/types/interface";
import React from "react";

interface IProp extends IJDalignProp {
    label: TElements;
    value?: TElements;
    center?: boolean;
    vCenter?: boolean;
    between?: boolean;
    around?: boolean;
    wrap?: boolean;
    vEnd?: boolean;
    column?: boolean;
    oneone?: boolean;
    grow?: boolean;
    alignEnd?: boolean;
    end?: boolean;
}

export const Info: React.FC<IProp> = ({ children, label, value, ...props }) => {
    return (
        <JDalign vCenter {...props}>
            <JDtypho size="small" mb="tiny" color="black">
                {label}
            </JDtypho>
            {value || children}
        </JDalign>
    );
};

//동진
export const Info2: React.FC<IProp> = ({
    children,
    label,
    value,
    ...props
}) => {
    return (
        <JDalign {...props} style={{ display: "flex" }}>
            <JDtypho size="small" color="black" style={{ display: "flex" }}>
                <div style={{ marginRight: "0.5vh", flexShrink: "0" }}>
                    {label}:
                </div>
                <span style={{ fontWeight: 400 }}>{value || children}</span>
            </JDtypho>
        </JDalign>
    );
};
// 필터바
// [] 날자 검색가능  키워드가 어떤 키워드인지 검색가능 []키워드 검색가능 // 키워드가능
