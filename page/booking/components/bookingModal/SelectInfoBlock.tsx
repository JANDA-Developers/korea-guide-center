import {
    Bold,
    IJDalignProp,
    JDcard,
    JDlabel,
    JDselectCounter,
} from "@janda-com/front";
import React from "react";
import { IUseBookingWrite } from "../../../../hook/useBookingWrite";

interface IProp extends IUseBookingWrite, IJDalignProp {}

export const SelectInfoBlock: React.FC<IProp> = ({
    adultCountHook,
    kidCountHook,
    babyCountHook,
    mb,
}) => {
    return (
        <JDcard mb={mb} mode="border">
            <Bold mb>인원정보</Bold>
            <JDlabel txt="성인" />
            <JDselectCounter mb selectHook={adultCountHook} />
            <JDlabel txt="소인" />
            <JDselectCounter mb selectHook={kidCountHook} />
            <JDlabel txt="유아" />
            <JDselectCounter selectHook={babyCountHook} />
        </JDcard>
    );
};
