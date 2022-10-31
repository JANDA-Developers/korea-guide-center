import {
    JDalign,
    JDlabel,
    JDatomClasses,
    JDbutton,
    Flex,
} from "@janda-com/front";
import { IButtonProps } from "@janda-com/front/dist/components/button/Button";
import { IInputTextCutsomProp } from "@janda-com/front/dist/components/InputText/InputText";
import { JDatomExtentionSet } from "@janda-com/front/dist/types/interface";
import classNames from "classnames";
import React, { useRef, useContext } from "react";
import { LineCutter } from "../../atom/LineCutter";
import { AppContext } from "../../context/context";
import { TUseSingleUpload } from "../../hook/useUpload";
import { IDiv, TElements } from "../../types/interface";
import { isIE } from "../../utils/isIE";
import { IIcons } from "../icons/declation";
import { JDicon } from "../icons/Icons";
import { ICropperProps } from "../imageCropper/ImageCropper";

export interface ISingleUploadProp
    extends Omit<IDiv, "onChange">,
        JDatomExtentionSet,
        TUseSingleUpload {
    label?: string;
    formFile?: {
        name: string;
        uri: string;
    };
    require?: boolean;
    mode?: "photoUpload";
    withOutName?: boolean;
    inputProp?: IInputTextCutsomProp;
    buttonProps?: IButtonProps;
    withCropper?: boolean;
    cropperProp?: Partial<ICropperProps>;
    fileButtonText?: string;
}

export const SingleUploader: React.FC<ISingleUploadProp> = ({
    label,
    name,
    mode,
    require,
    withOutName,
    formFile,
    onChange,
    buttonProps,
    className,
    inputProp,
    fileUploading,
    setFile,
    onChangeFile,
    withCropper,
    cropperProp,
    mb = "normal",
    fileButtonText: fileButtonTextProp,
    mr,
}) => {
    const { imageCropperModalHook } = useContext(AppContext);
    const BtnProp = {
        ...buttonProps,
    };
    const uploaderRef = useRef<HTMLInputElement>(null);
    const isPhotoUpload = mode === "photoUpload";

    const handleBtnClick = () => {
        if (uploaderRef.current) {
            uploaderRef.current.value = "";
            uploaderRef?.current?.click();
        }
    };

    const classes = classNames("JDsingleUploader", className, {
        "JDsingleUploader--withOutName": withOutName,
        ...JDatomClasses({ mb, mr }),
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e?.currentTarget?.files?.[0];
        if (!file) return;

        if (!withCropper || isIE()) {
            onChange(e);
            return;
        }

        const objectUrl = URL.createObjectURL(file);

        imageCropperModalHook.openModal({
            image: objectUrl,
            onSubmitOriginalFile: onChangeFile,
            cropperProp: cropperProp,
        });
    };

    let fileButtonText: TElements = "";
    let icon: IIcons = "upload";

    const hasFile = !!name;

    console.log(fileUploading);

    if (fileUploading) {
        fileButtonText = <div>로딩중</div>;
    } else if (hasFile) {
        if (withOutName) {
            fileButtonText = "파일 변경하기";
        } else {
            fileButtonText = <LineCutter line={1}>{name}</LineCutter>;
        }
    } else {
        fileButtonText = "파일 선택하기";
    }

    if (isPhotoUpload) {
        icon = "photo";
    }

    if (hasFile) {
        icon = "close";
    }

    if (fileButtonTextProp) {
        fileButtonText = fileButtonTextProp;
    }

    const handleIconClick = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        if (hasFile) {
            setFile(undefined);
            if (uploaderRef.current) uploaderRef.current.value = "";
        }
    };

    return (
        <div className={classes}>
            {label && <JDlabel require={require} txt={label} />}
            <JDalign
                flex={{
                    vCenter: true,
                }}
            >
                <input
                    style={{
                        position: "absolute",
                        opacity: 0,
                        width: "1px",
                        height: "1px",
                    }}
                    {...inputProp}
                    className={
                        "JDsingleUploader__input" + " " + inputProp?.className
                    }
                    type="file"
                    onChange={handleChange}
                    ref={uploaderRef}
                />
                {formFile && (
                    <JDbutton
                        mr
                        br="square"
                        onClick={() => {
                            window.open(formFile.uri, "_blank");
                        }}
                        style={{
                            minWidth: "min-content",
                        }}
                        padding="small"
                        mode="border"
                        mb="no"
                        iconProp={{ icon: "file" }}
                    >
                        양식받기
                    </JDbutton>
                )}
                <JDbutton
                    className="JDsingleUploader__uploadBtn"
                    mode="border"
                    br="square"
                    color={hasFile ? "grey4" : "grey2"}
                    size="long"
                    loading={fileUploading}
                    onClick={handleBtnClick}
                    {...BtnProp}
                >
                    <Flex vCenter center>
                        <JDalign mr="small">{fileButtonText}</JDalign>
                        <JDicon onClick={handleIconClick} icon={icon} />
                    </Flex>
                </JDbutton>
            </JDalign>
        </div>
    );
};
// mongodb+srv://<username>:<password>@pinkloader.eyyy2.mongodb.net/test

export default SingleUploader;
