import {
    Bold,
    IJDalignProp,
    JDalign,
    JDbadge,
    JDhorizen,
    Small,
} from "@janda-com/front";
import React, { useContext } from "react";
import { LineCutter } from "../../atom/LineCutter";
import { AppContext } from "../../context/context";
import { usePaths } from "../../hook/usePaths";
import { Fuser, UserRole } from "../../types/api";
import { MovieClipCard } from "../mouseMovieClip/MovieClipCard";

interface IProp extends IJDalignProp {
    user: Fuser;
}

//원본
export const GuideMovieClip: React.FC<IProp> = ({ user, ...props }) => {
    const { toGuideProfileDetail } = usePaths();
    const { l } = useContext(AppContext);
    const {
        _id,
        profileImage,
        introduce,
        profileMediumImage,
        profileVideo,
        regions,
        nickName,
        guideCategory,
        role,
    } = user;
    if (!profileMediumImage?.uri && !profileImage?.uri) return null;
    if (role === UserRole.ADMIN) return null;

    const isVideo = profileVideo?.fileType === "VIDEO";

    return (
        <>
            <MovieClipCard
                onClick={() => {
                    toGuideProfileDetail(_id);
                }}
                secondImg={isVideo ? undefined : profileVideo?.uri}
                style={{
                    height: "auto",
                }}
                img={
                    profileMediumImage
                        ? profileMediumImage?.uri
                        : profileImage?.uri
                }
                video={isVideo ? profileVideo?.uri : undefined}
                Body={
                    <JDalign text="left">
                        <Bold mb="small" flex={{ vCenter: true }}>
                            <JDbadge size="small" thema="primary" mr="small">
                                Guide
                            </JDbadge>{" "}
                            <JDalign mr="small">{nickName}</JDalign>
                        </Bold>
                        <LineCutter line={2} lineFix>
                            <Small weight={600} mb>
                                {guideCategory
                                    ?.map((cat) => l(cat.label))
                                    .join(" · ")}
                            </Small>
                        </LineCutter>
                        <JDhorizen
                            className="guideMovieClip__describeLine"
                            margin={1}
                        />
                        <Small>
                            <LineCutter lineFix line={2}>
                                {l(introduce)}
                            </LineCutter>
                        </Small>
                    </JDalign>
                }
                {...props}
            />
        </>
    );
};

export const GuideMovieClip2: React.FC<IProp> = ({ user, ...props }) => {
    const { toGuideProfileDetail } = usePaths();
    const { l } = useContext(AppContext);
    const {
        _id,
        introduce,
        profileMediumImage,
        profileVideo,
        regions,
        nickName,
        guideCategory,
    } = user;
    if (!profileMediumImage?.uri && !profileVideo?.uri) return null;

    const isVideo = profileVideo?.fileType === "VIDEO";

    return (
        <>
            <MovieClipCard
                onClick={() => {
                    toGuideProfileDetail(_id);
                }}
                secondImg={isVideo ? undefined : profileVideo?.uri}
                img={profileMediumImage?.uri}
                video={isVideo ? profileVideo?.uri : undefined}
                Body={
                    <JDalign text="left">
                        <Bold mb="small" flex={{ vCenter: true }}>
                            <JDbadge size="small" thema="primary" mr="small">
                                Guide
                            </JDbadge>{" "}
                            <JDalign mr="small">{nickName}</JDalign>
                        </Bold>
                        <LineCutter line={2} lineFix>
                            <Small weight={600} mb>
                                {guideCategory
                                    ?.map((cat) => l(cat.label))
                                    .join(" · ")}
                            </Small>
                        </LineCutter>
                        <JDhorizen
                            className="guideMovieClip__describeLine"
                            margin={1}
                        />
                        <Small>
                            <LineCutter lineFix line={2}>
                                {l(introduce)}
                            </LineCutter>
                        </Small>
                    </JDalign>
                }
                {...props}
            />
        </>
    );
};
