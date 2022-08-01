import React, { useEffect, useRef } from "react";
import { Ffile } from "../../types/api";
import { isImg, isImgFile, isVideo } from "../../utils/isImgFile";

interface IProp extends React.VideoHTMLAttributes<HTMLVideoElement> {}

export const Video = React.forwardRef<HTMLVideoElement, IProp>(
    ({ ...props }, ref) => {
        return <video loop controls ref={ref} className="JDvideo" {...props} />;
    }
);

// interface IProp {
//     file:Ffile
//  }

export const VideoOrImg: React.FC<IProp> = ({}) => {
    return <div />;
};

export const isVideoFile = (file: File) => isVideo(file.type);
