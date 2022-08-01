import {
    JDslider,
    JDslide,
    JDphotoFrame,
    Large,
    TJDsliderProp,
} from "@janda-com/front";
import React from "react";
import PhotoFrame, {
    IPhotoFrameProps,
} from "../component/photoFrame/PhotoFram";

export interface ISliderModalProp extends TJDsliderProp, TJDsliderProp {
    width?: number;
    height?: number;
    imgs?: string[];
    photoProps?: IPhotoFrameProps;
    onClickImg?: (src: string, index: number) => void;
}

export const ImgSlider: React.FC<ISliderModalProp> = ({
    height,
    width,
    onClickImg,
    imgs = [],
    photoProps,
    ...props
}) => {
    return (
        <JDslider style={{ width }} {...props} slidesPerRow={1}>
            {imgs.map((img, i) => (
                <JDslide key={i + "imgSliderImg"}>
                    <PhotoFrame
                        width={width}
                        height={height}
                        onClick={() => {
                            onClickImg?.(img, i);
                        }}
                        src={img}
                        {...photoProps}
                        isBgImg
                    />
                </JDslide>
            ))}
        </JDslider>
    );
};
