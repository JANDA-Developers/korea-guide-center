import {
    autoHypen,
    Flex,
    InputText,
    isEmail as isEmailCheck,
    IUseModal,
    JDalign,
    JDbox,
    JDbutton,
    JDlabel,
    JDmodal,
    JDselect,
    JDswitch,
    JDtypho,
    Mr,
    opFind,
    toast,
    useInput,
    useModal,
    useSelect,
    useSwitch,
} from "@janda-com/front";
import _, { isEmpty } from "lodash";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Empty } from "../../atom/Empty";
import {
    useNotificationSendSingle,
    useNotificationTemplateList,
} from "../../hook/useNotification";
import { useSenderOps } from "../../hook/useSenderOp";
import { useMyNotificationManager } from "../../hook/useUser";
import GuideContext from "../../page/context";
import {
    notificationMethodChecker,
    validTemplateFilter,
} from "../../page/smsRouter/helper";
import { Fbooking, NotificationMethod } from "../../types/api";
import { NOTI_METHOD_OPS } from "../../types/const";
import { whenEnter } from "../../utils/whenEnter";
import {
    BookingSearchModal,
    IBookingSearchModalInfo,
} from "../bookingSearchModal/BookingSearchModal";
import { ModalBtn } from "../btns/ModalBtn";
import JDEditor from "../editor/Editor";
import { JDicon } from "../icons/Icons";
import { ScrollBox } from "../scrollBox/ScrollBox";
import { TotalViewer } from "../totalViewer/TotalViewer";

export interface ISmsSendModalInfo {
    receviers: string[];
}

// 어떻게하면 되지?

//replacements 에다가 원하는 부분들을 넣어서 보낼 수 있을?
// TODO 백엔드 구조 살펴보기

interface IProp {
    modalHook: IUseModal<ISmsSendModalInfo>;
}

export const SmsSendModal: React.FC<IProp> = ({ modalHook }) => {
    const { data: manager } = useMyNotificationManager();

    const templateListHook = useNotificationTemplateList();
    const { getLoading, items: unValidTemplates } = templateListHook;
    const templates = validTemplateFilter(unValidTemplates);
    const selfOp = { label: "직접쓰기", value: "self" };
    const sendTemplateHook = useSelect(selfOp);
    const isSelfSend = sendTemplateHook.selectedOption?.value === "self";
    const defaultReceivers = modalHook.info?.receviers || [];
    const bookingSearchModal = useModal<IBookingSearchModalInfo>();
    const {} = useContext(GuideContext);
    const titleHook = useInput("");
    const sendMessageHook = useInput("");
    const receiverHook = useInput("");
    const [receivers, setReceivers] = useState(defaultReceivers);

    const smsTypeHook = useSelect(NOTI_METHOD_OPS[0], NOTI_METHOD_OPS);

    const selectedMethod = smsTypeHook.selectedOption?.value;

    const selectedSmsType = selectedMethod || NotificationMethod.SMS;
    const { isEmail, isKakao, isSMS } =
        notificationMethodChecker(selectedSmsType);

    const senderHook = useSenderOps(selectedSmsType, manager?.senders || []);
    const sender = senderHook.selectedOption?.value || "";

    const [sendSms] = useNotificationSendSingle({
        onCompleteSucess: () => {
            toast("발신완료");
        },
    });

    const selectedTemplate = templates.find(
        (template) => template._id === sendTemplateHook.selectedOption?.value
    );

    const templatesOps = templates
        .filter((template) => template.notificationMethod === selectedSmsType)
        .map((template) => ({
            label: template.name,
            value: template._id,
        }));

    const handleSendSms = () => {
        sendSms({
            variables: {
                method: selectedMethod || NOTI_METHOD_OPS[0].value,
                input: {
                    kakaoTemplateCode: selectedTemplate?.kakaoTemplateCode,
                    content: sendMessageHook.value,
                    receivers,
                    sender,
                    tempalteId: selectedTemplate
                        ? selectedTemplate._id
                        : undefined,
                    title: titleHook.value,
                },
            },
        });
    };

    useEffect(() => {
        sendMessageHook.onChange(selectedTemplate?.content);
    }, [sendTemplateHook.selectedOption?.value]);

    const handleSearchTarget = () => {
        const onSubmitSearch = (booking: Fbooking[]) => {
            const foundReceivers = booking.map((booking) => {
                if (isSMS || isKakao) {
                    return booking.buyerPhone;
                } else {
                    return booking.buyerEmail || "";
                }
            });
            const nextReceivers = _.uniq(
                [...receivers, ...foundReceivers].map((rc) => rc)
            );
            setReceivers(nextReceivers);
        };
        bookingSearchModal.openModal({ onSubmit: onSubmitSearch });
    };

    useEffect(() => {
        senderHook.onChange(senderHook.option[0]);

        if (selectedMethod === NotificationMethod.KAKAO) {
            sendTemplateHook.onChange(templatesOps[0]);
        }
        setReceivers([]);
    }, [selectedMethod]);

    return (
        <JDmodal
            fullInMobile
            head={{
                title: "단체문자 보내기",
            }}
            foot={
                <ModalBtn
                    disabled={receivers.length === 0}
                    thema="primary"
                    onClick={handleSendSms}
                >
                    발송하기({receivers.length})
                </ModalBtn>
            }
            {...modalHook}
        >
            <div>
                <InputText label="발신제목" {...titleHook} mb />
                <JDselect z={3} mb {...smsTypeHook} label={"발신수단"} />
                <JDlabel txt={`수신대상(${receivers.length})`} />
                <Empty
                    empty={receivers}
                    msg="아래쪽 수신추가를 통해 수신대상을 추가해주세요."
                />
                <ScrollBox mb>
                    <Flex vCenter>
                        {receivers.map((receiver, i) => (
                            <JDbox mr="small">
                                <Flex vCenter>
                                    {isEmail ? receiver : autoHypen(receiver)}
                                    <Mr />
                                    <JDicon
                                        hover
                                        onClick={() => {
                                            receivers.splice(i, 1);
                                            setReceivers([...receivers]);
                                        }}
                                        size="tiny"
                                        icon="close"
                                    />
                                </Flex>
                            </JDbox>
                        ))}
                        <JDbutton
                            hide={isEmpty(receivers)}
                            br="square"
                            thema="error"
                            size="small"
                            onClick={() => {
                                setReceivers([]);
                            }}
                            mode="border"
                        >
                            전부삭제
                        </JDbutton>
                    </Flex>
                </ScrollBox>
            </div>
            <Flex>
                <Flex mb vEnd>
                    <InputText
                        mr
                        onKeyPress={whenEnter((e) => {
                            const val = e.currentTarget.value;

                            if (isEmail) {
                                if (!isEmailCheck(val)) {
                                    toast.warn("올바른 이메일 형식이 아닙니다");
                                    return;
                                }
                            }
                            receivers.push(val);
                            receiverHook.onChange("");
                            setReceivers(_.uniq([...receivers]));
                        })}
                        hyphen={!isEmail}
                        placeholder={"Enter키로 구분"}
                        label="수신추가(이메일 / 전화번호)"
                        {...receiverHook}
                    />
                    <JDbutton
                        onClick={handleSearchTarget}
                        br="square"
                        mode="border"
                    >
                        대상찾기
                    </JDbutton>
                </Flex>
            </Flex>

            <JDselect z={2} mb {...senderHook} label={"발신자"} />
            <JDselect
                mb="small"
                z={1}
                label="발신템플릿 선택"
                {...sendTemplateHook}
                key={selectedMethod + "senders"}
                options={isKakao ? templatesOps : [selfOp, ...templatesOps]}
            />
            <JDtypho mb size="small" color="error">
                자동발신 상황이 아니면 치환문자열은 변환되지 않습니다.
            </JDtypho>
            {isSMS || isKakao ? (
                <InputText
                    mb="small"
                    readOnly={!isSelfSend || isKakao}
                    label="문자쓰기"
                    {...sendMessageHook}
                    textarea
                />
            ) : (
                <JDEditor
                    model={sendMessageHook.value}
                    setModel={sendMessageHook.onChange}
                />
            )}
            {isKakao && (
                <JDtypho mb size="small" color="error">
                    카카오 발신일 경우 템플릿 양식 대로만 발신 가능합니다.
                </JDtypho>
            )}
            <BookingSearchModal modalHook={bookingSearchModal} />
        </JDmodal>
    );
};
