import { JDbutton, useModal } from "@janda-com/front";
import React, { useRef } from "react";
import { useSingleUpload } from "../../hook/useUpload";
import { Ffile } from "../../types/api";
import ImageCropperModal from "../imageCropper/ImageCropperModal";

interface IProp {
    cropSize: {
        width: number;
        height: number;
    };
}

export const ImageOptimiser: React.FC<IProp> = ({ cropSize }) => {
    if (window.outerWidth < 800) return null;
    const cropperModalHook = useModal();
    const optiomizeUpload = useSingleUpload();
    const optimiseInputRef = useRef<HTMLInputElement>(null);

    const openOptimiser = (file: Ffile) => {
        if (file?.uri)
            cropperModalHook.openModal({
                image: file.uri,
                onSubmit: (file: Ffile) => {
                    var link = document.createElement("a");
                    link.href = file.uri;
                    link.download = "Download.jpg";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                },
            });
    };

    const handleOptimizeFileChnage = async (e: any) => {
        const file = await optiomizeUpload.onChange(e);
        if (file) {
            openOptimiser(file);
        }
    };

    return (
        <div>
            <JDbutton
                onClick={() => {
                    optimiseInputRef.current?.click();
                }}
                br="square"
                size="small"
                mode="flat"
                thema="grey4"
            >
                이미지 최적화
            </JDbutton>
            <div
                style={{
                    position: "absolute",
                }}
            >
                <div
                    style={{
                        width: 1,
                        height: 1,
                        opacity: 0,
                    }}
                >
                    <input
                        ref={optimiseInputRef}
                        type={"file"}
                        onChange={handleOptimizeFileChnage}
                    />
                </div>
                <ImageCropperModal
                    cropperProp={{
                        cropSize,
                    }}
                    {...cropperModalHook}
                />
            </div>
        </div>
    );
};
