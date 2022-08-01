import { Flex, isEmpty, JDavatar, JDbutton, JDcard } from "@janda-com/front";
import { IJDbadge } from "@janda-com/front/dist/components/badge/Badge";
import { IJDcardProps } from "@janda-com/front/dist/components/cards/Card";
import React from "react";
import { useContext } from "react";
import { CardHeadButton } from "../../../atom/CardHeadButtn";
import { CardBtn } from "../../../component/btns/ModalBtn";
import { useKakaoTemplateConfirmRequest } from "../../../hook/useNotification";
import {
    KakaoTemplateInspStatus,
    KakaoTemplateStatus,
    notificationTemplateList_NotificationTemplateList_items,
} from "../../../types/api";
import {} from "../../../types/api";
import {
    KAKAOTemplateInspStatusColor,
    KAKAOTemplateInspStatusKr,
    notificationMethodKr,
} from "../../../types/const";
import { completeMsg } from "../../../utils/onCompletedMessage";
import GuideContext from "../../context";
import { NotificationContext } from "../context";
import { notificationMethodChecker } from "../helper";
import { KakaoComments } from "./KakaoComments";

interface IProp extends IJDcardProps {
    template: notificationTemplateList_NotificationTemplateList_items;
    onEdit: () => void;
    onDelete: () => void;
}

export const SmsCard: React.FC<IProp> = ({
    template,
    onDelete: handleDelete,
    onEdit: handleEdit,
    ...props
}) => {
    const { alertModalHook } = useContext(GuideContext);
    const { manager } = useContext(NotificationContext);
    const { trigger } = template;
    const type = notificationMethodKr[template.notificationMethod];
    const badges: IJDbadge[] = [
        { label: type, mode: "folded", thema: "grey2" },
    ];
    const { isKakao } = notificationMethodChecker(template.notificationMethod);
    const noTrigger = isEmpty(trigger);

    if (!noTrigger) {
        badges.push({ label: "자동발신", mode: "folded", thema: "primary" });
    }

    if (isKakao) {
        badges.push({
            label: KAKAOTemplateInspStatusKr[template.kakaoTemplateInspStatus],
            mode: "folded",
            thema: KAKAOTemplateInspStatusColor[
                template.kakaoTemplateInspStatus
            ],
        });
        // badges.push({
        //     label: KAKAOTemplateStatusKr[template.kakaoTemplateStatus],
        //     mode: "folded",
        //     thema: KAKAOTemplateStatusColor[template.kakaoTemplateStatus],
        // });
    }

    const [kakaoConfirmRequest] = useKakaoTemplateConfirmRequest({
        awaitRefetchQueries: true,
        onCompleted: ({ KakaoTemplateConfirmRequest }) => {
            completeMsg(KakaoTemplateConfirmRequest, "심사요청완료");
        },
    });

    const handleResgitConfirm = () => {
        kakaoConfirmRequest({
            variables: {
                tpl_code: template.kakaoTemplateCode!,
            },
        });
    };

    const isRej =
        template.kakaoTemplateInspStatus === KakaoTemplateInspStatus.REJ;

    return (
        <JDcard
            badges={badges}
            {...props}
            foot={
                <div>
                    <CardBtn
                        tooltip="카카오톡 템플릿은 검수가 끝나야 사용 가능합니다"
                        hide={
                            !isKakao ||
                            template.kakaoTemplateInspStatus !==
                                KakaoTemplateInspStatus.REG
                        }
                        onClick={handleResgitConfirm}
                        size="small"
                        mr
                        thema="primary"
                    >
                        심사요청
                    </CardBtn>
                    <CardBtn
                        size="small"
                        mr
                        onClick={handleEdit}
                        thema="primary"
                    >
                        수정하기
                    </CardBtn>
                    <CardBtn size="small" onClick={handleDelete} thema="error">
                        삭제하기
                    </CardBtn>
                </div>
            }
            head={
                <Flex between>
                    <CardHeadButton
                        hide={!isRej}
                        onClick={() => {
                            alertModalHook?.openModal({
                                content: (
                                    <KakaoComments
                                        comments={
                                            template.kakaoTemplate?.comments ||
                                            []
                                        }
                                    />
                                ),
                                title: "카카오 템플릿 검수기록",
                            });
                        }}
                    >
                        반려사유보기
                    </CardHeadButton>
                </Flex>
            }
        >
            {template.description || ""}
        </JDcard>
    );
};
