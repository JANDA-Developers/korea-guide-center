import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import ImageGallery from "react-image-gallery";

interface FinalResult {
    original: string;
    thumbnail: string;
}

interface SliderProps {
    item?: string;
    imgs: string[];
}

export const Slider = (props: SliderProps) => {
    // 여기부터 props.imgs에서 original,original속성으로 객체 재생성
    var finalResult: FinalResult[] = [];
    var img;

    {
        props.imgs.map(
            (item: any) => (
                (img = {
                    original: item,
                    thumbnail: item,
                }),
                finalResult.push(img)
            )
        );
    }

    return <ImageGallery items={finalResult} />;
};

export const Item = (props: SliderProps) => {
    return (
        <div>
            <img src={props.item} className="gallery__sliderImg"></img>
        </div>
    );
};
