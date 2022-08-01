import { IconSize, JDavatar } from "@janda-com/front";
import { IUploadIconProp } from "@janda-com/front/dist/components/iconUploader/IconUploader";
import {
    IDiv,
    JDatomExtentionSet,
} from "@janda-com/front/dist/types/interface";
import { useRouter } from "next/router";
import React from "react";
import { useHistory } from "react-router-dom";
import { useResizedImgLoadFailPreventer } from "../../hook/useResizeImgLoadFailPreventer";
import { Paths } from "../../pages/index[depre]";
import { DEFAULT_PROFILE_IMG } from "../../types/const";

export interface Iprops extends IDiv, JDatomExtentionSet, IUploadIconProp {
    /** 이미지 URL*/
    /** 사이즈*/
    size?: IconSize;
    /** 모드 edit 는 파일 업로드 같이 가능*/
    mode?: "edit" | "view";
    isError?: boolean;
    guideId?: string;
    guideProfile?: string;
    guideNickName?: string;
}

export const GuideCircle: React.FC<Iprops> = ({
    guideId,
    guideProfile,
    ...props
}) => {
    const { img } = useResizedImgLoadFailPreventer(guideProfile || "");
    const router = useRouter();
    return (
        <JDavatar
            hover
            size="large"
            onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                router.push(Paths.profile + "/" + guideId);
            }}
            className="guideCircle"
            {...props}
            img={img || DEFAULT_PROFILE_IMG}
        />
    );
};

export const GuideCircle2: React.FC<Iprops> = ({
    guideId,
    guideProfile,
    ...props
}) => {
    const { img } = useResizedImgLoadFailPreventer(guideProfile || "");
    return (
        <img
            style={{
                display: "flex",
                width: "14vh",
                height: "18vh",
                marginLeft: "2.4vh",
                marginTop: "3vh",
                marginBottom: "2vh",
                justifyContent: "center",
            }}
            src={img}
        ></img>
    );
};
