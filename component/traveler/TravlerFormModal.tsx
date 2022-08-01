import { Flex, IUseModal, JDmodal, Validater } from "@janda-com/front";
import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { useCopy } from "../../hook/useCopy";
import { TravelerInfoInput } from "../../types/api";
import isEmpty from "../../utils/isEmpty";
import { ModalBtn } from "../btns/ModalBtn";
import { ModalHead } from "../modalHead/ModalHead";
import { defaultTralver, TravelersForm } from "./TravlerForm";
import { TravlerViews } from "./TravlerView";

export interface ITravlerFormModalInfo {
    defaultTravlersInput: TravelerInfoInput[];
    onSubmit?: (input: TravelerInfoInput[]) => void;
}

interface IProp {
    modalHook: IUseModal<ITravlerFormModalInfo>;
}

export const TravlerFormModal: React.FC<IProp> = ({ modalHook }) => {
    if (typeof window === "undefined") return null;
    const { defaultTravlersInput, onSubmit } = modalHook.info || {};
    const readMode = !onSubmit;
    const [travlersInput, setTravlersInput] = useCopy<TravelerInfoInput[]>(
        isEmpty(defaultTravlersInput) ? [defaultTralver] : defaultTravlersInput
    );
    const { s } = useContext(AppContext);

    const representive = travlersInput[0];
    if (readMode && !representive && modalHook.isOpen) {
        modalHook.closeModal();
        return null;
    }

    if (isEmpty(travlersInput)) {
        modalHook.closeModal();
        return null;
    }

    const { validate } = new Validater([
        {
            value: !travlersInput.find((ti) => !ti.name),
            failMsg: s("bookNameIsRequired"),
        },
        {
            value: representive.phoneNumber,
            failMsg: s("bookNameIsRequired"),
        },
        {
            value: representive.email,
            failMsg: s("representerContactIsRequired"),
        },
        {
            value: representive.birthDate,
            failMsg: s("representerBirthDateIsRequired"),
        },
    ]);

    const handleSubmit = () => {
        if (!validate()) return;
        onSubmit?.(travlersInput);
        modalHook.closeModal();
    };

    return (
        <JDmodal
            fullInMobile
            head={{
                element: (
                    <ModalHead
                        title={
                            readMode
                                ? s("bookerInfoCheck")
                                : s("titleBookerInfoModal")
                        }
                        description={readMode ? undefined : s("description")}
                    />
                ),
            }}
            foot={
                <Flex hide={readMode}>
                    <ModalBtn mr onClick={handleSubmit} thema="primary">
                        {s("submit")}
                    </ModalBtn>
                    <ModalBtn onClick={modalHook.closeModal}>
                        {s("cancel")}
                    </ModalBtn>
                </Flex>
            }
            {...modalHook}
        >
            {readMode ? (
                <TravlerViews travlers={travlersInput as any} />
            ) : (
                <TravelersForm
                    setTravlersInput={setTravlersInput}
                    travlersInput={travlersInput}
                />
            )}
        </JDmodal>
    );
};

export default TravlerFormModal;
