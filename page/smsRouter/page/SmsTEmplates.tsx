import {
    Flex,
    JDcontainer,
    JDpageHeader,
    JDpreloader,
    SkipUpdate,
    useModal,
} from "@janda-com/front";
import React from "react";
import DotButton from "../../../component/dotButton/DotButton";
import {
    useNotificationTemplateList,
    useTemplateCreate,
    useTemplateDelete,
    useTemplateUpdate,
} from "../../../hook/useNotification";
import {
    notificationTemplateList_NotificationTemplateList_items,
    _ITemplateFilter,
} from "../../../types/api";
import { completeMsg } from "../../../utils/onCompletedMessage";
import { promptConfirm } from "../../../utils/prompt";
import { SmsCard } from "../components/SmsCard";
import { NotificationAutoModal } from "../../../component/notificationTemplateAutoModal.tsx/NotificationTemplateAutoModal";
import {
    ISmsDetailModalInfo,
    NotificationTemplateDetail,
} from "./SmsTemplateDetail";
import { useContext } from "react";
import GuideContext from "../../context";
import { PageHeader } from "../../../component/pageHeader/PageHeader";

interface IProp {}

export const NotificationTemplates: React.FC<IProp> = () => {
    const {} = useContext(GuideContext);
    const templateListHook = useNotificationTemplateList(
        {
            fixingFilter: {},
        },
        {}
    );
    const { getLoading, items } = templateListHook;
    const smsModalHook = useModal<ISmsDetailModalInfo>();
    const autoTemplateModalHook = useModal();
    const [deleteMu] = useTemplateDelete({
        onCompleted: ({ NotificationTemplateDelete }) => {
            completeMsg(NotificationTemplateDelete, "템플릿 삭제완료");
        },
    });
    const hasTemplate = !!items.length;

    const handleCreate = () => {
        if (hasTemplate) {
            smsModalHook.openModal();
        } else {
            autoTemplateModalHook.openModal();
        }
    };

    const handleEdit =
        (template: notificationTemplateList_NotificationTemplateList_items) =>
        () => {
            smsModalHook.openModal({
                template,
            });
        };

    const handleDelete =
        (template: notificationTemplateList_NotificationTemplateList_items) =>
        () => {
            const { name, _id } = template;
            promptConfirm(
                name,
                `템플릿을 삭제하실려면 "${name}"을 정확하게 입력 해주세요.`,
                () => {
                    deleteMu({
                        variables: {
                            templateId: _id,
                        },
                    });
                }
            );
        };

    return (
        <div>
            <JDpreloader loading={getLoading} floating />
            <JDcontainer verticalPadding>
                <PageHeader
                    pageName="SMS"
                    title="발신 템플릿 생성하기"
                    description="자동발신 등록가능 발신 템플릿 생성하기"
                />
                {smsModalHook.isOpen ? (
                    <NotificationTemplateDetail
                        modalHook={smsModalHook}
                        key={
                            (smsModalHook.isOpen
                                ? "open"
                                : "close" + smsModalHook.info?.template?._id ||
                                  "create") + "NotificationTemplateModal"
                        }
                    />
                ) : (
                    <div>
                        <DotButton mb onClick={handleCreate}>
                            {hasTemplate ? "생성하기" : "스마트 설정"}
                        </DotButton>
                        <SkipUpdate skip={getLoading}>
                            <Flex
                                oneone
                                wrap
                                className="smsTemplates__smsCardWrap"
                            >
                                {items.map((item) => (
                                    <SmsCard
                                        mb
                                        mr
                                        key={"smsCard"}
                                        className="smsTemplates__smsCard"
                                        onDelete={handleDelete(item)}
                                        onEdit={handleEdit(item)}
                                        template={item}
                                    />
                                ))}
                            </Flex>
                        </SkipUpdate>
                    </div>
                )}
            </JDcontainer>
            <NotificationAutoModal modalHook={autoTemplateModalHook} />
        </div>
    );
};
