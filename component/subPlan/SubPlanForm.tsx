import { Flex, IJDalignProp, JDalign } from "@janda-com/front";
import React, { useEffect } from "react";
import { TUseGlobalModal } from "../../hook/useGlobalModal";
import { useSingleUpload } from "../../hook/useUpload";
import { FsubPlan } from "../../types/api";
import { InputWithGlobal } from "../InputWithGlobal/InputWithGlobal";
import SingleUploader from "../singleUploader/SingleUploader";
interface IProp extends Omit<IJDalignProp, "onChange"> {
    subplan: FsubPlan;
    onChange: (subPlan: FsubPlan) => void;
    onDelete?: () => void;
    globalModalHook: TUseGlobalModal;
}

export const SubPlanForm: React.FC<IProp> = ({
    subplan,
    onChange,
    onDelete,
    globalModalHook,
    ...props
}) => {
    const { description, photo, time, title } = subplan;
    const signleUploaderHook = useSingleUpload(photo || undefined);

    useEffect(() => {
        if (signleUploaderHook?.file) {
            subplan["photo"] = signleUploaderHook?.file;
            onChange({ ...subplan });
        }
    }, [signleUploaderHook?.file?.uri]);

    return (
        <JDalign className="subPlanForm" {...props}>
            <Flex mb vEnd>
                <InputWithGlobal
                    mr
                    langs={title}
                    label="타이틀(40자이하)"
                    require
                    maxLength={40}
                    globalModalHook={globalModalHook}
                    setLangs={(value: any) => {
                        subplan["title"] = value;
                        onChange({ ...subplan });
                    }}
                />
                <InputWithGlobal
                    mr="small"
                    label="시간(20자이하)"
                    maxLength={20}
                    globalModalHook={globalModalHook}
                    langs={time}
                    setLangs={(value: any) => {
                        subplan["time"] = value;
                        onChange({ ...subplan });
                    }}
                />
            </Flex>
            <InputWithGlobal
                mb
                label="일정내용 (500자이하)"
                textarea
                maxLength={500}
                globalModalHook={globalModalHook}
                langs={description}
                setLangs={(value: any) => {
                    subplan["description"] = value;
                    onChange({ ...subplan });
                }}
            />
            <SingleUploader mb label="일정 대표사진" {...signleUploaderHook} />
        </JDalign>
    );
};
