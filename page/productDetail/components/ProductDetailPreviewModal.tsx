import { IUseModal, JDmodal } from "@janda-com/front";
import React from "react";
import { ProductDetail } from "../../../pages/product/[id]";
import { Fproduct } from "../../../types/api";

export interface IProdcutPreviewModalInfo {
    pid?: string;
    product?: Partial<Fproduct>;
}

interface IProdcutPreviewModalProp {
    modalHook: IUseModal<IProdcutPreviewModalInfo>;
}

export const ProdcutPreviewModal: React.FC<IProdcutPreviewModalProp> = ({
    modalHook,
}) => {
    const product = modalHook.info?.product;
    return (
        <JDmodal {...modalHook}>
            <ProductDetail
                product={product}
                id={modalHook.info?.pid}
                mode="preview"
            />
        </JDmodal>
    );
};
