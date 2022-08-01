import {
    JDcheckBox,
    Bold,
    IJDalignProp,
    InputText,
    JDcard,
    JDalign,
    JDbutton,
    Gender,
} from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { GenderInput } from "../../../../component/genderInput/GenderInput";
import { AppContext } from "../../../../context/context";
import { IUseBookingWrite } from "../../../../hook/useBookingWrite";

interface IProp extends IUseBookingWrite, IJDalignProp {
    modileViewMode?: boolean;
}

export const BookerInfoBlock: React.FC<IProp> = ({
    bookerNameHook,
    bookerContactHook,
    bookerEmailHook,
    bookerGenderHook,
    messageHook,
    modileViewMode,
    mb,
    mr,
}) => {
    const { me, s, isLogin } = useContext(AppContext);

    const setWithMyProfile = () => {
        bookerNameHook.onChange(me?.name || "");
        bookerContactHook.onChange(me?.phoneNumber || "");
        bookerEmailHook.onChange(me?.email || "");
        bookerGenderHook[1](me?.gender || Gender.FEMALE);
    };

    return (
        <JDcard mr={mr} mb={mb} mode="border">
            <Bold mb flex={{ vCenter: true, wrap: true }}>
                <JDalign mr>{s("bookerInfo")}</JDalign>
                <JDbutton
                    hide={modileViewMode || !isLogin}
                    thema="grey4"
                    size="small"
                    label={s("myProfileInfo")}
                    onClick={setWithMyProfile}
                />{" "}
            </Bold>
            <InputText
                id="BuyerNameInput"
                require
                mb
                label={s("bookerName")}
                {...bookerNameHook}
            />
            <InputText
                id="BuyerContactInput"
                require
                mb
                hyphen
                label={s("phoneNumber")}
                {...bookerContactHook}
            />
            <InputText
                id="BuyerEmailInput"
                require
                mb
                label={s("email")}
                {...bookerEmailHook}
            />
            <GenderInput
                mb
                value={bookerGenderHook[0]}
                setValue={bookerGenderHook[1]}
            />
            <InputText {...messageHook} label={s("bookingMemoLabel")} />
        </JDcard>
    );
};
