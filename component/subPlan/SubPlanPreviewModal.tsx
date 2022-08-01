import { IUseModal, JDmodal } from "@janda-com/front";
import React from "react";
import { ModalHead } from "../modalHead/ModalHead";
import { SubPlanViewers } from "./SubPlanViewers";
import { FsubPlan } from "../../types/api";

export interface ISubPlanPreveiwModalInfo {
    subPlanes: FsubPlan[];
}

interface IProp {
    modalHook: IUseModal<ISubPlanPreveiwModalInfo>;
}

export const SubPlanPreveiwModal: React.FC<IProp> = ({ modalHook }) => {
    const subPlanes = modalHook.info?.subPlanes || [];
    return (
        <JDmodal
            head={{
                element: (
                    <ModalHead
                        title="일정 미리보기"
                        description="아래 보이는대로 상품 페이지에 적용 됩니다"
                    />
                ),
            }}
            {...modalHook}
        >
            <SubPlanViewers subPlanes={subPlanes} />
        </JDmodal>
    );
};
