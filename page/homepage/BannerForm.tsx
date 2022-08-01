import {
    Flex,
    JDbutton,
    JDcontainer,
    toast,
    WindowSize,
} from "@janda-com/front";
import React from "react";
import { Ffile, Ftag, LANGUAGES } from "../../types/api";
import { PageHeader } from "../../component/pageHeader/PageHeader";
import { useHomepageManage } from "../../hook/useHomepage";
import { omitsAuto } from "../../utils/omit";
import { useCopy } from "../../hook/useCopy";
import { useContext, useMemo } from "react";
import { AppContext } from "../../context/context";
import { FileTagManager, TBannerKey } from "../../utils/tagManager";
import { BannerFormUI } from "./BannerFormUI";
import { CardHead } from "../../component/modalHead/ModalHead";
import { CardBtn } from "../../component/btns/ModalBtn";
import { useSortBanner } from "./hook/useSortBanner";

interface IProp {}

export const BannerForm: React.FC<IProp> = () => {
    const { promptModalHook, homepage, languageSelectModal } =
        useContext(AppContext);
    const [homepageUpdate] = useHomepageManage({
        skipMessage: true,
        onCompleteSucess: () => {
            toast.success("배너 정보가 수정 되었습니다");
        },
    });
    const [files, setFiles] = useCopy<Ffile[]>(homepage?.bannerImages || []);
    console.log({ files });
    const {
        locationalBannerImgs,
        loginBannerImgs,
        tourCircleBannerImgs,
        topBannerImgs,
    } = useSortBanner(files);

    const handleUpdate = () => {
        homepageUpdate({
            variables: {
                input: {
                    bannerImages: omitsAuto(files),
                },
            },
        });
    };

    const handleUpsertLinkTag = (file: Ffile, link: string) => () => {
        promptModalHook.openModal({
            title: "링크값을 입력해주세요",
            inputProps: {
                placeholder: "http://",
                textarea: false,
            },
            messageLabel: "링크값",
            defaultValue: link,
            callBack: (val: string) => {
                FileTagManager.setTag(file.tags, "link", val);
                setFiles([...files]);
                promptModalHook.closeModal();
            },
        });
    };

    const handleUpsertLangTag = (file: Ffile, langs: LANGUAGES[]) => () => {
        languageSelectModal.openModal({
            languages: langs,
            onSubmit: (langs) => {
                const langTags = langs?.map(
                    (lang): Ftag => ({
                        __typename: "Tag",
                        key: "lang",
                        value: lang,
                    })
                );
                FileTagManager.setTags(
                    file.tags,
                    "lang",
                    langTags?.map((t) => t.value)
                );
                setFiles([...files]);
                languageSelectModal.closeModal();
            },
        });
    };

    const handleSetBannerFiles = (Files: Ffile[], banerKey: TBannerKey) => {
        const unRelatedFiles = files.filter(
            (f) =>
                !FileTagManager.getTagByTagNameAndValue(
                    f.tags,
                    "BannerKey",
                    banerKey
                )
        );

        console.log({ unRelatedFiles });

        Files.forEach((file) => {
            FileTagManager.setTag(file.tags, "BannerKey", banerKey);
        });

        setFiles([...Files, ...unRelatedFiles]);
    };

    const setBannerKey = (files: Ffile[], key: TBannerKey) => {
        files.forEach((file) => {
            FileTagManager.setTag(file.tags, "BannerKey", key);
        });
    };

    const langAndLinkFileController = (file: Ffile) => {
        const link = FileTagManager.getValueByTagName(file.tags, "link") || "";
        const langs = FileTagManager.getByTagNameArray(
            file.tags,
            "lang"
        ) as LANGUAGES[];

        return (
            <Flex>
                <JDbutton
                    mr
                    mode="border"
                    br="square"
                    thema={link ? "primary" : undefined}
                    onClick={handleUpsertLinkTag(file, link)}
                >
                    링크설정
                </JDbutton>
                <JDbutton
                    mode="border"
                    br="square"
                    thema={langs?.length ? "primary" : undefined}
                    onClick={handleUpsertLangTag(file, langs)}
                >
                    언어설정
                </JDbutton>
            </Flex>
        );
    };

    return (
        <JDcontainer size={WindowSize.md} verticalPadding>
            <PageHeader
                title="배너설정"
                pageName="배너사진 조정하기"
                description="아래 내용에서 배너사진을 조정해주세요"
            />

            <CardBtn mb thema="primary" onClick={handleUpdate}>
                수정하기
            </CardBtn>
            <BannerFormUI
                mb
                label="근교투어 배너이미지"
                files={locationalBannerImgs}
                cropInfo={{
                    cropperProp: {
                        cropSize: {
                            height: 200,
                            width: 700,
                        },
                    },
                }}
                setFiles={(files) => {
                    handleSetBannerFiles(files, TBannerKey.LocationalBanner);
                }}
                head={<CardHead title="근교투어 배너이미지" />}
                fileController={langAndLinkFileController}
            />
            <BannerFormUI
                mb
                label="로그인 배너이미지"
                files={loginBannerImgs}
                cropInfo={{
                    cropperProp: {
                        cropSize: {
                            height: 400,
                            width: 300,
                        },
                    },
                }}
                bannerProps={{
                    ratio: 0.75,
                    slideToShow: 3,
                }}
                setFiles={(files) => {
                    handleSetBannerFiles(files, TBannerKey.Login);
                }}
                head={<CardHead title="로그인 배너이미지" />}
                fileController={langAndLinkFileController}
            />
            <BannerFormUI
                mb
                label="서클 배너이미지"
                files={tourCircleBannerImgs}
                cropInfo={{
                    cropperProp: {
                        cropSize: {
                            height: 400,
                            width: 400,
                        },
                    },
                }}
                bannerProps={{
                    ratio: 1,
                    slideToShow: 3,
                    className: "tourCircleBanner",
                }}
                setFiles={(files) => {
                    handleSetBannerFiles(files, TBannerKey.TourCircle);
                }}
                head={<CardHead title="투어 서클 배너이미지" />}
                fileController={langAndLinkFileController}
            />
            <BannerFormUI
                label="탑 배너이미지"
                files={topBannerImgs}
                cropInfo={{
                    cropperProp: {
                        cropSize: {
                            height: 80,
                            width: 400,
                        },
                    },
                }}
                bannerProps={{
                    ratio: 10,
                    slideToShow: 1,
                    className: "topBannerImg",
                }}
                setFiles={(files) => {
                    handleSetBannerFiles(files, TBannerKey.TopBanner);
                }}
                head={<CardHead title="탑 베너 이미지" />}
                fileController={langAndLinkFileController}
            />
        </JDcontainer>
    );
};
