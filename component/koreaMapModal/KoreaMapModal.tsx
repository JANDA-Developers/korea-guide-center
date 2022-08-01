import { IUseModal, JDmodal, JDmodalConfigProps } from "@janda-com/front";
import { title } from "process";
import React from "react";
import { useCategoryUpdate } from "../../hook/useCategory";
import { mapRegion } from "../koreaMap/KoreaData";
import { KoreaMap } from "../koreaMap/KoreaMap";

export interface IKoreaMapModalInfo {
    selectedRegiion?: mapRegion;
    onSubmit: (region: mapRegion) => void;
}

interface IProp extends JDmodalConfigProps {
    modalHook: IUseModal<IKoreaMapModalInfo>;
}

export const KoreaMapModal: React.FC<IProp> = ({ modalHook, ...props }) => {
    return (
        <JDmodal {...modalHook} {...props}>
            <KoreaMap
                selectedRegiion={modalHook.info?.selectedRegiion}
                onClick={(region) => {
                    modalHook.info?.onSubmit?.(region);
                    modalHook.closeModal();
                }}
            />
        </JDmodal>
    );
};
