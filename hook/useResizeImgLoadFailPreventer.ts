import { useState, useLayoutEffect } from "react";
import { ResizedImgStr } from "../utils/ResizedImgStr";
export const useResizedImgLoadFailPreventer = (src: string) => {
    const [img, setImg] = useState(src);
    useLayoutEffect(() => {
        function load(src: string) {
            return new Promise((resolve, reject) => {
                const image = new Image();
                image.addEventListener("load", resolve);
                image.addEventListener("error", reject);
                image.src = src;
            });
        }

        load(src).catch(() => {
            const nextTry = new ResizedImgStr(src).getOrigin();
            setImg(nextTry);
        });
    }, [src]);

    return { img, setImg };
};
