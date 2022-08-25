import { Flex, IJDalignProp, JDalign } from "@janda-com/front";
import React, { useContext } from "react";
import { Img } from "../../atom/Image";
import { RatioBox } from "../../atom/Ratio";
import { AppContext } from "../../context/context";
import { Ffile } from "../../types/api";
import { Ratio } from "../../types/const";
import { beforeExtention } from "../../utils/fileExtendDivider";
import { Slider } from "./Slider";

interface IProp {
    photos: Ffile[];
}

interface IImgBoxProp extends IJDalignProp {
    src: string;
    noResize?: boolean;
}

const ImgBox: React.FC<IImgBoxProp> = ({
    src,
    children,
    noResize,
    ...props
}) => {
    if (!src) return null;
    return (
        <JDalign className="gallery__imgBox" {...props}>
            <RatioBox ratio={Ratio["5:4"]}>
                <Img
                    layout="fill"
                    src={noResize ? src : beforeExtention(src, "---1000")}
                />
                {children}
            </RatioBox>
        </JDalign>
    );
};

export const Galley: React.FC<IProp> = ({ photos }) => {
    const { imgSliderModalHook } = useContext(AppContext);
    const imgs = photos.map((p) => p.uri);

    const handleViewDetail = (num?: number) => () => {
        imgSliderModalHook.openModal({
            images: imgs,
            initialSlide: num,
            width: 800,
            height: 500,
        });
    };

    if (photos.length === 0) return null;

    return <Slider imgs={imgs} />;
};
