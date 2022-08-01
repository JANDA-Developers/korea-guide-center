import { Bold, JDcard } from "@janda-com/front";
import { IJDcardProps } from "@janda-com/front/dist/components/cards/Card";
import React from "react";
import { useContext } from "react";
import { Empty } from "../../atom/Empty";
import { Banner, IBannerProp } from "../../component/banner/Banner";
import { CardBtn } from "../../component/btns/ModalBtn";
import { IImageCropModalInfo } from "../../component/imageCropper/ImageCropperModal";
import { MultiFileInput } from "../../component/multiFileInput/MultiFileInput";
import { AppContext } from "../../context/context";
import { Ffile } from "../../types/api";
import { TElements } from "../../types/interface";

interface IProp extends IJDcardProps {
    fileController?: ((file: Ffile, index: number) => TElements) | undefined;
    files: Ffile[];
    setFiles: (files: Ffile[]) => void;
    cropInfo?: Partial<IImageCropModalInfo>;
    label: string;
    bannerProps?: Partial<IBannerProp>;
}

export const BannerFormUI: React.FC<IProp> = ({
    fileController,
    files,
    setFiles,
    cropInfo,
    label,
    bannerProps,
    ...props
}) => {
    const { imageCropperModalHook } = useContext(AppContext);
    return (
        <JDcard {...props}>
            <MultiFileInput
                label={label}
                mb
                cropInfo={cropInfo}
                fileController={fileController}
                imageCroperHook={imageCropperModalHook}
                onChange={setFiles}
                files={files}
            />
            <Bold mb>미리보기</Bold>
            <Empty empty={files} msg={"배너 사진이 없습니다"} />
            <Banner
                key={
                    files.length +
                    files.map((file) => file.uri).join("") +
                    "BannerImages"
                }
                bannerImages={files}
                {...bannerProps}
            />
        </JDcard>
    );
};
