import { Flex, IUseModal, JDbadge } from "@janda-com/front";
import { TElements } from "@janda-com/front/dist/types/interface";
import React, { useRef, useState } from "react";
import { useSingleUpload } from "../../hook/useUpload";
import { Ffile } from "../../types/api";
import DotButton from "../dotButton/DotButton";
import { Dragger } from "../dragger/Dragger";
import { JDicon } from "../icons/Icons";
import { IImageCropModalInfo } from "../imageCropper/ImageCropperModal";
import PhotoFrame, { Photo } from "../photoFrame/PhotoFram";

interface IProp {
    files: Ffile[];
    onChange: (files: Ffile[]) => void;
    photoIconContoller?: (file: Ffile) => TElements;
    imageCroperHook?: IUseModal<IImageCropModalInfo>;
    cropSize?: {
        width: number;
        height: number;
    };
    idKey?: keyof Ffile;
}

export const PhotoGrider: React.FC<IProp> = ({
    files,
    onChange,
    cropSize,
    photoIconContoller,
    imageCroperHook,
    idKey,
}) => {
    const uploaderRef = useRef<HTMLInputElement>(null);
    const { onChange: fileChange, fileUploading } = useSingleUpload();
    const [selectPhotoIndex, setSelectPhoto] = useState<undefined | number>(0);

    const handlePhotoClick = (index?: number) => () => {
        setSelectPhoto(index);
        if (uploaderRef.current) {
            uploaderRef.current.value = "";
            uploaderRef?.current?.click();
        }
    };

    const handleChangeFile =
        (index?: number) => async (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = await fileChange(e);
            if (!file) return;

            const setResult = (file: Ffile) => {
                if (typeof index === "number") {
                    files.splice(index, 1, file);
                } else {
                    files.push(file);
                }
                onChange([...files]);
            };
            if (imageCroperHook) {
                imageCroperHook?.openModal({
                    image: file.uri,
                    cropperProp: {
                        cropSize,
                    },
                    onSubmit: (file) => {
                        setResult(file);
                    },
                });
            } else {
                setResult(file);
            }
            return file;
        };

    const handleClose = (index: number) => () => {
        files.splice(index, 1);
        onChange([...files]);
    };

    return (
        <Flex className="photoGrider">
            <Dragger<Ffile>
                items={files}
                idKey={idKey || "_id"}
                handle
                ulClassName="photoGrider__ul"
                onOrder={onChange}
                dir="horizontal"
                ItemRender={(item, index, props) => (
                    <div className="photoGrider__cell">
                        <JDbadge
                            size="small"
                            hide={index !== 0}
                            className="photoGrider__badge"
                            thema="primary"
                        >
                            대표사진
                        </JDbadge>
                        <Photo
                            className="photoGrider__img"
                            isBgImg
                            key={item.uri}
                            file={item}
                            onClick={handlePhotoClick(index)}
                        />
                        <div
                            className="photoGrider__photoGrab"
                            {...props.dragHandleProps}
                        />
                        <Flex className="photoGrider__icons">
                            {photoIconContoller?.(item)}
                            <JDicon
                                className="photoGrider__icon"
                                onClick={handlePhotoClick(index)}
                                size="superTiny"
                                icon="camera"
                            />
                            <JDicon
                                className="photoGrider__icon photoGrider__icon--close"
                                onClick={handleClose(index)}
                                size="superTiny"
                                icon="close"
                            />
                        </Flex>
                    </div>
                )}
            />
            <DotButton
                withIcon={!fileUploading}
                onClick={handlePhotoClick()}
                className="photoGrider__cell photoGrider__addCard"
            >
                {fileUploading && <PhotoFrame loading />}
            </DotButton>
            <input
                style={{
                    position: "absolute",
                    opacity: 0,
                    width: "1px",
                    height: "1px",
                }}
                type="file"
                onChange={handleChangeFile(selectPhotoIndex)}
                ref={uploaderRef}
            />
        </Flex>
    );
};
