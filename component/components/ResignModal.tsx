import {
    IUseModal,
    JDmodal,
    JDtypho,
    useInput,
    useModal,
    InputText,
    JDradio,
    useRadio,
    JDcard,
    toast,
} from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { useResign } from "../../hook/useUser";
import { ModalBtn } from "../btns/ModalBtn";

interface IProp {
    modalHook: IUseModal;
}

export const ResignModal: React.FC<IProp> = ({ modalHook }) => {
    const [resignMu] = useResign({
        onCompleteSucess: () => {
            location.href = location.origin;
        },
    });
    const { s } = useContext(AppContext);
    const resignReasonHook = useInput("");
    const passwordHook = useInput("");
    const radioHook = useRadio([
        {
            key: "1",
            label: s("resignReason1"),
            value: s("resignReason1"),
        },
        {
            key: "2",
            label: s("resignReason2"),
            value: s("resignReason2"),
        },
        {
            key: "3",
            label: s("else"),
            value: s("else"),
        },
    ]);

    const hasCustomReason = radioHook.selectedValue === s("else");

    const handleSubmit = () => {
        resignMu?.({
            variables: {
                resignData: {
                    resign: true,
                    resignReason: hasCustomReason
                        ? resignReasonHook.value
                        : radioHook.selectedValue,
                },
            },
        });
    };

    return (
        <JDmodal
            className="resignModal"
            foot={<ModalBtn onClick={handleSubmit}>{s("resign")}</ModalBtn>}
            {...modalHook}
            head={{
                element: (
                    <div>
                        <JDtypho size={"h6"}>{s("resignTitle")}</JDtypho>
                        {s("resignDesc")}
                    </div>
                ),
            }}
        >
            <JDradio flex={{ column: true }} mb dir="vertical" {...radioHook} />
            {hasCustomReason && (
                <InputText
                    textarea
                    label={s("resignReason")}
                    {...resignReasonHook}
                    mb
                />
            )}
        </JDmodal>
    );
};
