import {
    IUseModal,
    JDmodal,
    JDradio,
    JDtypho,
    useInput,
    useRadio,
    InputText,
} from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { useBookingManage } from "../../hook/useBookingManage";
import { Fbooking } from "../../types/api";
import { ModalBtn } from "../btns/ModalBtn";

export interface IBookingCancelModalInfo {
    booking: Fbooking;
}

interface IProp {
    modalHook: IUseModal<IBookingCancelModalInfo>;
}

export const BookingCancelModal: React.FC<IProp> = ({ modalHook }) => {
    if (typeof window === "undefined") return null;
    const booking = modalHook.info?.booking;
    const { s } = useContext(AppContext);
    const { handleCancel } = useBookingManage(booking, {
        onSucess: modalHook.closeModal,
    });
    const resignReasonHook = useInput("");

    const cancelRegions = [
        {
            key: "1",
            label: s("cancelReason1"),
            value: s("cancelReason1"),
        },
        {
            key: "2",
            label: s("cancelReason2"),
            value: s("cancelReason2"),
        },
        {
            key: "3",
            label: s("cancelReason3"),
            value: s("cancelReason3"),
        },
        {
            key: "4",
            label: s("else"),
            value: s("else"),
        },
    ];

    const radioHook = useRadio(cancelRegions);

    const hasCustomReason = radioHook.selectedValue === s("else");

    const handleSubmit = () => {
        const resignReason = hasCustomReason
            ? resignReasonHook.value
            : radioHook.selectedValue;
        handleCancel(resignReason);
    };

    return (
        <JDmodal
            className="resignModal"
            foot={<ModalBtn onClick={handleSubmit}>{s("cancel")}</ModalBtn>}
            {...modalHook}
            head={{
                element: (
                    <div>
                        <JDtypho size={"h6"}>{s("cancelTitle")}</JDtypho>
                        {s("cancelDesc")}
                    </div>
                ),
            }}
        >
            <JDradio flex={{ column: true }} mb dir="vertical" {...radioHook} />
            {hasCustomReason && (
                <InputText
                    textarea
                    label={s("cancelReason")}
                    {...resignReasonHook}
                    mb
                />
            )}
        </JDmodal>
    );
};

export default BookingCancelModal;
