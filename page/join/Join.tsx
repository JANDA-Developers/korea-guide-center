import { Flex, JDcard, JDcontainer, Mb } from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { CardBtn } from "../../component/btns/ModalBtn";
import { ResignModal } from "../../component/components/ResignModal";
import { CardHead } from "../../component/modalHead/ModalHead";
import { PolicyCheckers } from "../../component/policyViewer/PolicyChecker";
import { ProfileForm } from "../../component/ProfileForm/ProfileForm";
import { AppContext } from "../../context/context";
import { useProfile } from "../../hook/useProfile";
import { JoinReady } from "../joinReady/JoinReady";

interface IProp {}

export const Join: React.FC<IProp> = () => {
    const { isBooker, isGuide, isMaster } = useContext(AppContext);
    const profileHook = useProfile(
        isGuide || isMaster ? "GuideProfile" : "JoinGuide"
    );

    const {
        resginModalHook,
        handleChangeToGuide,
        guideJoinPoilicyCheckHook,
        isApplying,
    } = profileHook;

    let applyLabel = "가이드 지원하기";
    if (isMaster || isGuide || isApplying) {
        applyLabel = "수정하기";
    }

    return (
        <JDcontainer verticalPadding>
            <JDcard
                head={
                    <CardHead
                        title={isBooker ? "가이드 지원하기" : "프로필 수정하기"}
                        description="코리아가이드 가이드가 되어 활동해 보세요. 손쉽게 나만의 상품을 기획하여 바로 판매를 시작할 수 있습니다"
                    />
                }
                foot={
                    <Flex between>
                        <CardBtn
                            onClick={handleChangeToGuide}
                            size="large"
                            thema="primary"
                            label={applyLabel}
                        />
                        <CardBtn
                            onClick={resginModalHook.openModal}
                            size="small"
                            thema={"white"}
                            label={"탈퇴하기"}
                        />
                    </Flex>
                }
            >
                <div>
                    {isApplying && <JoinReady />}
                    <ProfileForm profileHook={profileHook} />
                    <Mb hide={!isGuide} />
                    {isBooker && !isApplying && (
                        <PolicyCheckers {...guideJoinPoilicyCheckHook} />
                    )}
                </div>
            </JDcard>
            <ResignModal modalHook={resginModalHook} />
        </JDcontainer>
    );
};
