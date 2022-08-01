import {
    Flex,
    IUseModal,
    JDalign,
    JDconfiger,
    JDlabel,
    JDmodal,
    JDtypho,
    Small,
} from "@janda-com/front";
import React, { useContext, useState } from "react";
import { Info } from "../../atom/Info";
import { useTemplateCreate } from "../../hook/useNotification";
import GuideContext from "../../page/context";
import { NotificationTemplateCreateInput } from "../../types/api";
import { STATIC_PRICES } from "../../types/const";
import { ModalBtn } from "../btns/ModalBtn";
import { defaultTemplates } from "./template/template";

export interface INotificationAutoModalInfo {}

interface IProp {
    modalHook: IUseModal<INotificationAutoModalInfo>;
}

export const NotificationAutoModal: React.FC<IProp> = ({ modalHook }) => {
    const [templateCreate, { loading }] = useTemplateCreate({
        onCompleteSucess: modalHook.closeModal,
    });
    const [includePolicies, setIncludPolciies] = useState(
        defaultTemplates.map((dp) => dp.key)
    );

    const handleCreate = () => {
        const templates = defaultTemplates.filter((template) =>
            includePolicies.includes(template.key)
        );
        const inputs: NotificationTemplateCreateInput[] = templates.map(
            (temp) => ({
                ...temp.input,
            })
        );
        templateCreate({
            variables: {
                inputs,
            },
        });
    };

    return (
        <JDmodal
            loading={loading}
            {...modalHook}
            head={{ title: "알림 템플릿 스마트 설정하기" }}
            foot={
                <ModalBtn thema="primary" size="long" onClick={handleCreate}>
                    템플릿 생성 완료
                </ModalBtn>
            }
        >
            <div>
                <JDlabel txt="비용참고(발신건당)" />
                <Flex mb>
                    <Info
                        mr="small"
                        label="SMS"
                        value={`${STATIC_PRICES.SMS}원`}
                    />
                    <Info
                        mr="small"
                        label="MMS"
                        value={`${STATIC_PRICES.MMS}원`}
                    />
                    <Info
                        mr="small"
                        label="LMS"
                        value={`${STATIC_PRICES.LMS}원`}
                    />
                    <Info
                        mr="small"
                        label="EMAIL"
                        value={`${STATIC_PRICES.EMAIL}원`}
                    />
                    <Info label="KAKAO" value={`${STATIC_PRICES.KAKKAO}원`} />
                </Flex>
            </div>
            <JDlabel>아래 설정 템플릿대로 자동 발신됩니다.</JDlabel>
            <JDconfiger
                enableHeader="사용"
                unableHeader="미사용"
                onEnableChange={setIncludPolciies as any}
                enableIds={includePolicies}
                allItem={defaultTemplates.map((dp) => ({
                    _id: dp.key,
                    name: dp.input.name,
                }))}
            />
        </JDmodal>
    );
};
