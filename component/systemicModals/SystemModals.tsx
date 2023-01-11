import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { AlertModal, ConfirmModal } from "../AlertModal/AlertModal";
import { PormptModal } from "../promptModal/PromptModal";
import { SliderModalModal } from "../sliderModal/SliderModal";

interface IProp {}

export const SystemModals: React.FC<IProp> = () => {
    const {
        alertModalHook,
        confirmModalHook,
        promptModalHook,
        imgSliderModalHook,
    } = useContext(AppContext);
    if (typeof window === "undefined") return null;
    return (
        <div>
            <AlertModal
                {...alertModalHook}
                // key={alertModalHook?.isOpen ? "opendAlert" : "closedAlert"}
            />
            <ConfirmModal
                {...confirmModalHook}
                // key={
                //     confirmModalHook?.isOpen ? "opendConfirm" : "closedConfirm"
                // }
            />
            <PormptModal
                modalHook={promptModalHook}
                // key={promptModalHook?.isOpen ? "opendPropmt" : "closedPropmt"}
            />
            <SliderModalModal
                modalHook={imgSliderModalHook}
                // key={
                //     imgSliderModalHook?.isOpen ? "opendPropmt" : "closedPropmt"
                // }
            />
        </div>
    );
};

export default SystemModals;
