import { IUseModal, JDmodal } from "@janda-com/front";
import React from "react";
import { useSingleUpload } from "../../hook/useUpload";
import { Ffile } from "../../types/api";
import { ICropperProps, ImageCropper } from "./ImageCropper";

export interface IImageCropModalInfo {
    image: string;
    onSubmit?: (file: Ffile) => void;
    onSubmitOriginalFile?: (file: File) => void;
    singleUploader?: typeof useSingleUpload;
    cropperProp?: Partial<ICropperProps>;
}

interface IProp extends IUseModal<IImageCropModalInfo> {
    cropperProp?: Partial<ICropperProps>;
}

export const ImageCropModal: React.FC<IProp> = ({
    info,
    cropperProp = info?.cropperProp,
    ...modalHook
}) => {
    if (typeof window === "undefined") return null;
    if (!info) return null;
    const uploader = useSingleUpload();
    const images = info.image;

    const handleSubmit = async (file: File) => {
        if (info?.onSubmit) {
            const result = await uploader.fileUpload(file);
            if (result) info?.onSubmit(result);
        } else if (info?.onSubmitOriginalFile) {
            info?.onSubmitOriginalFile(file);
        }
        modalHook.closeModal();
    };

    return (
        <JDmodal
            className="imageCropModal"
            head={{
                title: "이미지 편집",
            }}
            {...modalHook}
        >
            <div style={{ position: "relative" }}>
                <ImageCropper
                    {...cropperProp}
                    onCancel={modalHook.closeModal}
                    handleSubmitImg={handleSubmit}
                    iamge={images}
                />
            </div>
        </JDmodal>
    );
};

export default ImageCropModal;
