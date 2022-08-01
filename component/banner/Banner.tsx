import {
    IJDalignProp,
    JDalign,
    JDslide,
    JDslider,
    TJDsliderProp,
} from "@janda-com/front";
import React from "react";
import { Img } from "../../atom/Image";
import { Ratio } from "../../atom/Ratio";
import { Ffile, Ftag } from "../../types/api";
import { checkMobile } from "../../utils/isMobile";
import { FileTagManager } from "../../utils/tagManager";

export interface IBannerProp extends IJDalignProp {
    bannerImages: Ffile[];
    ratio?: number;
    slideToShow?: number;
    sliderProps?: TJDsliderProp;
}

export const Banner: React.FC<IBannerProp> = ({
    slideToShow = 1,
    bannerImages,
    ratio = 4.5,
    className,
    sliderProps,
    ...props
}) => {
    const isMobile = checkMobile();

    const slidesToShowCnt =
        slideToShow > bannerImages.length ? bannerImages.length : slideToShow;

    return (
        <JDalign className={`Banner ${className}`} {...props}>
            <JDslider rows={1} slidesToShow={slidesToShowCnt} {...sliderProps}>
                {bannerImages.map((bannerImage, index) => (
                    <JDslide key={"BannerSlider" + bannerImage._id + index}>
                        <Ratio
                            ratio={ratio}
                            onClick={() => {
                                if (typeof window === "undefined") return;
                                const link = FileTagManager.getValueByTagName(
                                    bannerImage.tags,
                                    "link"
                                );
                                if (!link) return;
                                window.open(link, "_blank");
                            }}
                            style={{
                                cursor: "pointer",
                                position: "relative",
                            }}
                        >
                            <Img
                                className="Banner__img"
                                layout="fill"
                                src={bannerImage.uri}
                            />
                        </Ratio>
                    </JDslide>
                ))}
            </JDslider>
        </JDalign>
    );
};
