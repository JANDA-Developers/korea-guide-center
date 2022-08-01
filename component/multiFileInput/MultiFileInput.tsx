import {
    JDalign,
    InputText,
    IJDalignProp,
    Flex,
    IUseModal,
} from "@janda-com/front";
import { TElements } from "@janda-com/front/dist/types/interface";
import React, { useRef, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { useSingleUpload } from "../../hook/useUpload";
import { Ffile } from "../../types/api";
import DotButton from "../dotButton/DotButton";
import { IImageCropModalInfo } from "../imageCropper/ImageCropperModal";

interface IProp extends Omit<IJDalignProp, "onChange"> {
    label?: string;
    files: Ffile[];
    onChange: (files: Ffile[]) => void;
    imageCroperHook?: IUseModal<IImageCropModalInfo>;
    fileController?: (file: Ffile, index: number) => TElements;
    imageCropperHook?: IUseModal<IImageCropModalInfo>;
    cropInfo?: Partial<IImageCropModalInfo>;
}

export const MultiFileInput: React.FC<IProp> = ({
    label,
    files,
    onChange,
    className,
    imageCroperHook,
    fileController,
    imageCropperHook,
    cropInfo,
    ...props
}) => {
    const uploaderRef = useRef<HTMLInputElement>(null);
    const { onChange: fileChange, fileUploading } = useSingleUpload();
    const [selectedFileIndex, setSelectFildIndex] = useState<
        undefined | number
    >(0);
    const { s } = useContext(AppContext);
    if (!label) label = s("fileUpload");

    const handleFileClick = (index?: number) => () => {
        setSelectFildIndex(index);
        if (uploaderRef.current) {
            uploaderRef.current.value = "";
            uploaderRef?.current?.click();
        }
    };

    const handleChangeFile =
        (index?: number) => async (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = await fileChange(e);
            if (!file) return;

            const update = (file: Ffile) => {
                if (typeof index === "number") {
                    files.splice(index, 1, file);
                } else {
                    files.push(file);
                }
                onChange([...files]);
            };

            if (imageCroperHook)
                imageCroperHook?.openModal({
                    ...cropInfo,
                    image: file.uri,
                    onSubmit: (file) => {
                        update(file);
                    },
                });
            else {
                update(file);
            }
        };

    const handleClose = (index: number) => () => {
        files.splice(index, 1);
        onChange([...files]);
    };

    return (
        <JDalign className={`multiFileInput ${className}`} {...props}>
            {files.map((file, index) => (
                <Flex key={file._id} oneone className="multiFileInput__cell">
                    <InputText
                        readOnly
                        mb
                        mr={fileController ? "normal" : undefined}
                        value={file.name}
                        className="multiFileInput__input"
                        icon="close"
                        iconOnClick={handleClose(index)}
                        onClick={handleFileClick(index)}
                    />
                    <div style={{ flex: 0, minWidth: "max-content" }}>
                        {fileController?.(file, index)}
                    </div>
                </Flex>
            ))}
            <DotButton
                onClick={handleFileClick()}
                className="multiFileInput__cell multiFileInput__addCard"
            >
                {label}
            </DotButton>
            <input
                style={{
                    position: "absolute",
                    opacity: 0,
                    width: "1px",
                    height: "1px",
                }}
                type="file"
                onChange={handleChangeFile(selectedFileIndex)}
                ref={uploaderRef}
            />
        </JDalign>
    );
};
