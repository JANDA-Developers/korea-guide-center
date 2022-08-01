import {
    Bold,
    DEFAULT_PHOTO,
    Flex,
    IJDalignProp,
    JDalign,
    JDcard,
    JDphotoFrame,
    JDtypho,
} from "@janda-com/front";
import { IJDcardProps } from "@janda-com/front/dist/components/cards/Card";
import { IDiv, TElements } from "@janda-com/front/dist/types/interface";
import classNames from "classnames";
import { useResizeDetector } from "react-resize-detector/build/withPolyfill";
import {
    IPhotoFrameProps,
    Photo,
    PhotoFrame,
} from "../component/photoFrame/PhotoFram";
import { Ffile } from "../types/api";

export interface IImgCardProps extends IJDcardProps {
    head?: TElements;
    foot?: TElements;
    img?: Ffile | null;
    photoProp?: IPhotoFrameProps;
    alignImg?: "vertical" | "auto" | "horizen";
    onImgClick?: () => void;
}

//좌단에 이미지를 정렬하는 카드
//size auto 일때는 모바일에 가까울때 세로형 카드
//PC 에 가까울때 가로형 카드로 나타난다.
export const ImgCard: React.FC<IImgCardProps> = ({
    alignImg = "auto",
    foot,
    head,
    children,
    img,
    onImgClick: handleImgClick,
    className,
    photoProp,
    ...props
}) => {
    const { width, height, ref } = useResizeDetector();

    const autoCondition = (width || 0) < 800;

    const column = (() => {
        if (alignImg === "auto") return autoCondition;
        if (alignImg === "vertical") return true;
        if (alignImg === "horizen") return false;
        return false;
    })();

    const classes = classNames("imgCard", className, {
        "imgCard--hover": props.hover,
        "imgCard--horizen": column,
    });

    return (
        <JDcard className={classes} {...props}>
            <div ref={ref as any}>
                <Flex column={column} oneone>
                    <Photo
                        ratio={1}
                        file={img}
                        className="imgCard__photo"
                        onClick={handleImgClick}
                        isBgImg
                        {...photoProp}
                    />
                    <Flex column between className="imgCard__contents">
                        <JDalign mb>
                            {head && (
                                <Bold size="h6" className="imgCard__head">
                                    {head}
                                </Bold>
                            )}
                            <div className="imgCard__body">{children}</div>
                        </JDalign>
                        <Flex vCenter end className="imgCard__foot">
                            {foot}
                        </Flex>
                    </Flex>
                </Flex>
            </div>
        </JDcard>
    );
};
