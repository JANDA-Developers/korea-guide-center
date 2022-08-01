import React, { useEffect, useRef, useState } from "react";
import { Animation } from "../../component/scrollAnimation/Animation";
import { IDiv } from "../../types/interface";
import { isImg, isVideo } from "../../utils/isImgFile";
import { Video, VideoOrImg } from "../video/Video";

interface IProp extends IDiv {
    video?: string;
    img?: string;
    secondImg?: string;
}

export const MouseMovieClip: React.FC<IProp> = ({
    video,
    img,
    className,
    secondImg,
    ...props
}) => {
    const [fisrtTriggered, setFirstTriggered] = useState(false);
    const [onLoaded, setOnLoaded] = useState(false);
    const [mouseOn, setMouseOn] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (!video) return;
        fetch(video)
            .then(() => {
                setOnLoaded(true);
            })
            .catch((e) => {
                console.error("video fetch error", e);
            });
    }, [video]);

    return (
        <div
            onMouseEnter={() => {
                setFirstTriggered(true);
                setMouseOn(true);
            }}
            className={`mouseMovieClip ${className}`}
            {...props}
        >
            <img className="mouseMovieClip__img" src={img} />
            {fisrtTriggered && (
                <Animation
                    animationDelay={"1s"}
                    onMouseOut={() => {
                        setMouseOn(false);
                    }}
                    animation="fade"
                    show={mouseOn && onLoaded}
                >
                    {secondImg ? (
                        <img
                            className="mouseMovieClip__video"
                            style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "100%",
                            }}
                            src={secondImg}
                        />
                    ) : (
                        <Video
                            muted
                            autoPlay
                            controls={false}
                            ref={videoRef}
                            src={video}
                            className="mouseMovieClip__video"
                            style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    )}
                </Animation>
            )}
        </div>
    );
};
