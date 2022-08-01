import { IJDalignProp, JDalign, JDlabel } from "@janda-com/front";
import React from "react";
import { LineCutter } from "../../atom/LineCutter";
import { TElements } from "../../types/interface";
import { MouseMovieClip } from "./MouseMovieClip";

interface IProp extends IJDalignProp {
    img?: string;
    video?: string;
    secondImg?: string;
    Body?: TElements;
}

export const MovieClipCard: React.FC<IProp> = ({
    Body,
    img,
    video,
    className,
    secondImg,
    ...props
}) => {
    return (
        <JDalign className={`movieClipCard ${className}`} {...props}>
            {(video || img) && (
                <MouseMovieClip
                    className="movieClipCard__movieClip"
                    video={video}
                    img={img}
                    secondImg={secondImg}
                />
            )}

            <div className="movieClipCard__body">{Body}</div>
        </JDalign>
    );
};
