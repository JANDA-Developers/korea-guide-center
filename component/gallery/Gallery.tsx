import { Flex, IJDalignProp, JDalign } from "@janda-com/front";
import React, { useContext } from "react";
import { Img } from "../../atom/Image";
import { RatioBox } from "../../atom/Ratio";
import { AppContext } from "../../context/context";
import { Ffile } from "../../types/api";
import { Ratio } from "../../types/const";
import { beforeExtention } from "../../utils/fileExtendDivider";

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
    if (photos.length === 1)
        return <ImgBox noResize onClick={handleViewDetail(0)} src={imgs[0]} />;

    if (photos.length < 3)
        return (
            <Flex oneone>
                <ImgBox onClick={handleViewDetail(0)} mr src={photos[0]?.uri} />
                <ImgBox onClick={handleViewDetail(1)} src={photos[1]?.uri} />
            </Flex>
        );

    const plus = photos.length - 4;
    const over4 = photos.length > 4;
    return (
        <div className="gallery">
            <ImgBox
                noResize
                onClick={handleViewDetail(0)}
                mb
                src={photos[0]?.uri}
            />
            <Flex oneone>
                <ImgBox onClick={handleViewDetail(2)} mr src={photos[1]?.uri} />
                <ImgBox
                    onClick={handleViewDetail(3)}
                    mr={photos.length > 3 ? "normal" : "no"}
                    src={photos[2]?.uri}
                />
                <ImgBox onClick={handleViewDetail(4)} src={photos[3]?.uri}>
                    {over4 && (
                        <div
                            onClick={handleViewDetail(4)}
                            className="gallery__plus"
                        >
                            {" "}
                            +{plus}
                        </div>
                    )}
                </ImgBox>
            </Flex>
        </div>
    );
};
