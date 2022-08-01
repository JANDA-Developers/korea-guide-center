import {
    IJDalignProp,
    JDalign,
    JDbutton,
    JDhorizen,
    Tiny,
    useModal,
} from "@janda-com/front";
import React from "react";
import { TUseGlobalModal } from "../../hook/useGlobalModal";
import { FsubPlan } from "../../types/api";
import { DEFAULT_LANGS } from "../../types/const";
import { SubPlanForm } from "./SubPlanForm";
import {
    ISubPlanPreveiwModalInfo,
    SubPlanPreveiwModal,
} from "./SubPlanPreviewModal";

interface IProp extends Omit<IJDalignProp, "onChange"> {
    subPlanes: FsubPlan[];
    onChange: (subPlanes: FsubPlan[]) => void;
    globalModalHook: TUseGlobalModal;
}

export const SubPlanForms: React.FC<IProp> = ({
    onChange,
    subPlanes,
    className,
    globalModalHook,
    ...props
}) => {
    const subPlanPreveiwModalHook = useModal<ISubPlanPreveiwModalInfo>();
    const handleAddPlan = () => {
        subPlanes.push({
            __typename: "SubPlan",
            description: DEFAULT_LANGS,
            time: DEFAULT_LANGS,
            title: DEFAULT_LANGS,
            photo: null,
        });
        onChange([...subPlanes]);
    };

    const handlePreview = () => {
        subPlanPreveiwModalHook.openModal({
            subPlanes,
        });
    };

    return (
        <JDalign className={`subPlanForms ${className}`} {...props}>
            {subPlanes.map((plan, index) => (
                <div key={"subPlanForm" + index}>
                    <Tiny weight={600}>{index + 1}번째 일정</Tiny>
                    <JDhorizen margin={1} />
                    <SubPlanForm
                        mb="small"
                        subplan={plan}
                        globalModalHook={globalModalHook}
                        onDelete={() => {
                            subPlanes.splice(index, 1);
                            onChange([...subPlanes]);
                        }}
                        onChange={() => {
                            onChange([...subPlanes]);
                        }}
                    />
                </div>
            ))}
            <JDbutton
                mr
                onClick={handleAddPlan}
                thema="grey4"
                mode="flat"
                br="square"
            >
                일정추가
            </JDbutton>
            <JDbutton
                disabled={subPlanes.length < 1}
                onClick={handlePreview}
                thema="grey4"
                mode="flat"
                br="square"
            >
                미리보기
            </JDbutton>
            <SubPlanPreveiwModal modalHook={subPlanPreveiwModalHook} />
        </JDalign>
    );
};
