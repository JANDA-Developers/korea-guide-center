import { IUseModal, JDmodal, JDmodalConfigProps } from "@janda-com/front";
import { IDiv } from "@janda-com/front/dist/types/interface";
import React from "react";
import { ImgSlider, ISliderModalProp } from "../../atom/Imgslider";
import { ModalHead } from "../modalHead/ModalHead";

export interface ISliderModalModalInfo extends Partial<ISliderModalProp> {
    images: string[];
}

interface IProp extends JDmodalConfigProps {
    modalHook: IUseModal<ISliderModalModalInfo>;
    className?: string;
    images?: string[];
    width?: number;
    height?: number;
    sliderProp?: ISliderModalProp;
}

export const SliderModalModal: React.FC<IProp> = ({
    modalHook,
    width,
    height,
    images = modalHook.info?.images,
    sliderProp,
    ...props
}) => {
    if (typeof window === "undefined") return null;
    const { info } = modalHook;
    const { images: _images, ...sliderProps } = info || {};
    return (
        <JDmodal className="imageSliderModal" {...modalHook} {...props}>
            <ImgSlider
                {...sliderProp}
                width={width}
                height={height}
                imgs={_images || images || []}
                {...sliderProps}
            />
        </JDmodal>
    );
};
