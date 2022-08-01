import React from "react";
import { Ffile } from "../../types/api";
import { IImg } from "../../types/interface";
import { beforeExtention } from "../../utils/fileExtendDivider";

interface IProp extends IImg {
    file: Ffile;
}

export const ResolutionImg: React.FC<IProp> = ({ file, ...props }) => {
    const resizeFileTag = file.tags.find((t) => t.key === "resized");
    const sizeArray = resizeFileTag?.value.split(",").map((v) => parseInt(v));

    return (
        <img
            {...resolutionGenerater(file.uri, sizeArray || [])}
            src={file.uri}
            {...props}
        />
    );
};

const resolutionGenerater = (src: string, sizeArray: number[]) => {
    const 리사이즈조건계수 = 1.5;
    console.log({ sizeArray });
    const srcset = sizeArray
        .map((size) => beforeExtention(src, "---" + size) + ` ${size}w`)
        .join(", ");

    const copySizeArray = [...sizeArray];

    copySizeArray.pop();
    copySizeArray.sort((a, b) => b - a);
    let sizes = copySizeArray
        .map((size) => `(min-width: ${size * 리사이즈조건계수}px) ${size}px`)
        .join(", ");

    sizes += ", 100vw";

    return { sizes, srcset };
};
