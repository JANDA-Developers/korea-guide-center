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
                <div
                    style={{
                        marginBottom: "2rem",
                    }}
                    key={"subPlanForm" + index}
                >
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
                    {/* 버그 : 
                    1. 각 항목의 "일정내용"란이 비어있을시에는 동작에 문제가 없으나 "일정내용"란을 채우고, 일정내용이 채워져있는 항목의 전 index의 항목에서 일정을 추가하면,
                     시스템 상 내용은 비어있으니 보이는 부분에서 일정내용을 채운 항목과 같은 내용이 복사됨
                    2. 회차수정페이지에서 어떤 항목이든 채우려고 클릭하면 에러가 발생함  */}
                    <JDbutton
                        mr
                        onClick={() => {
                            subPlanes.splice(index + 1, 0, {
                                __typename: "SubPlan",
                                description: DEFAULT_LANGS,
                                time: DEFAULT_LANGS,
                                title: DEFAULT_LANGS,
                                photo: null,
                            });
                            onChange([...subPlanes]);
                        }}
                        thema="grey4"
                        mode="flat"
                        br="square"
                        style={{
                            width: "100%",
                            marginBottom: "0.3rem",
                        }}
                    >
                        일정추가
                    </JDbutton>
                    <JDbutton
                        onClick={() => {
                            subPlanes.splice(index, 1);
                            onChange([...subPlanes]);
                        }}
                        br="square"
                        mode="flat"
                        thema="error"
                        style={{
                            width: "100%",
                        }}
                    >
                        삭제
                    </JDbutton>
                </div>
            ))}
            {subPlanes.length <= 0 ? (
                <JDbutton
                    mr
                    onClick={handleAddPlan}
                    thema="grey4"
                    mode="flat"
                    br="square"
                >
                    일정추가
                </JDbutton>
            ) : null}
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
