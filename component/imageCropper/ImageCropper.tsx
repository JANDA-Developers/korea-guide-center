import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { Area } from "react-easy-crop/types";
import getCroppedImg from "./cropImage";
import { RangeSlider } from "../rangeSlider/RangeSlider";
import { JDbutton } from "@janda-com/front";

export interface ICropperProps {
    cropSize?: {
        width: number;
        height: number;
    };
    scale?: number;
    ratio?: number;
    iamge: string;
    handleSubmitImg: (file: File) => void;
    onCancel: () => void;
    round?: boolean;
}

export const ImageCropper: React.FC<ICropperProps> = ({
    cropSize,
    ratio = 4 / 3,
    scale = 1,
    iamge,
    handleSubmitImg,
    onCancel,
    round,
}) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0);
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(
        null
    );

    const onCropComplete = useCallback(
        (croppedArea: Area, croppedAreaPixels: Area) => {
            setCroppedAreaPixels(croppedAreaPixels);
        },
        []
    );

    const onSubmit = async () => {
        try {
            if (!croppedAreaPixels) return;
            const croppedImage = await getCroppedImg(
                iamge,
                croppedAreaPixels,
                rotation
            );
            handleSubmitImg(croppedImage);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="imageCropper">
            <div className="imageCropper__outWrap">
                <div
                    style={{
                        ...(cropSize as any),
                    }}
                    className="imageCropper__inWrap"
                >
                    <Cropper
                        cropSize={cropSize}
                        classes={{
                            containerClassName: "imageCropper__container",
                            cropAreaClassName: `imageCropper__cropArea ${
                                round ? "imageCropper__cropArea--round" : ""
                            }`,
                            mediaClassName: "imageCropper__media",
                        }}
                        image={iamge}
                        crop={crop}
                        rotation={rotation}
                        zoom={zoom}
                        onCropChange={setCrop}
                        onRotationChange={setRotation}
                        onCropComplete={onCropComplete}
                        onZoomChange={setZoom}
                    />
                </div>
            </div>
            <div className="imageCropper__rangeSlider">
                <div className="imageCropper__zoombar">
                    <RangeSlider
                        setValue={setZoom}
                        value={zoom}
                        MIN={1}
                        MAX={3}
                        step={0.1}
                        aria-labelledby="Zoom"
                    />
                </div>
                <JDbutton mr mode="flat" thema="primary" onClick={onSubmit}>
                    완료하기
                </JDbutton>
                <JDbutton color="grey4" mode="flat" onClick={onCancel}>
                    취소하기
                </JDbutton>
            </div>
        </div>
    );
};
