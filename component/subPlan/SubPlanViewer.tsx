import {
    Bold,
    Flex,
    IJDalignProp,
    JDalign,
    JDicon,
    numberStr,
    Small,
    Thin,
} from "@janda-com/front";
import React, { useContext } from "react";
import { Img } from "../../atom/Image";
import { AppContext } from "../../context/context";
import { FsubPlan } from "../../types/api";
import { beforeExtention } from "../../utils/fileExtendDivider";

interface IProp extends Omit<IJDalignProp, "onChange"> {
    subPlan: FsubPlan;
}

export const SubPlanViewer: React.FC<IProp> = ({
    subPlan,
    className,
    ...props
}) => {
    const { l, imgSliderModalHook } = useContext(AppContext);
    const { description, photo, time, title } = subPlan;
    return (
        <JDalign className={`subPlanViewer ${className}`} {...props}>
            <Flex>
                <JDalign mr="small" className="subPlanViewer__decoBox">
                    <JDicon icon="location" />
                    <div className="subPlanViewer__bar" />
                </JDalign>
                <div>
                    <Small>
                        <Bold
                            flex={{ wrap: true }}
                            className="subPlanViewer__title"
                            mb="tiny"
                        >
                            <JDalign mr="small">{l(title)}</JDalign>
                            <Thin>{l(time)}</Thin>
                        </Bold>
                        <div className="subPlanViewer__content">
                            {l(description)}
                        </div>
                    </Small>
                </div>
            </Flex>
            {photo && (
                <div className="subPlanViewer__photo">
                    <Img
                        onClick={() => {
                            imgSliderModalHook.openModal({
                                images: [photo.uri],
                                width: 400,
                                height: 300,
                            });
                        }}
                        layout="fill"
                        src={beforeExtention(photo.uri, "---500")}
                    />
                </div>
            )}
        </JDalign>
    );
};
