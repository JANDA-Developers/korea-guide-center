import { Flex, JDcard, JDicon, Split } from "@janda-com/front";
import { IJDcardProps } from "@janda-com/front/dist/components/cards/Card";
import React from "react";
import { Info } from "../../../atom/Info";
import { VerifiedBadge } from "../../../component/statusBadges/VerifiedBadge";
import { FnotificationSender } from "../../../types/api";
import { notificationMethodKr } from "../../../types/const";
import { RegisteredAligoBadge } from "./RegisteredAligoBadge";

interface IProp extends IJDcardProps {
    sender: FnotificationSender;
}

export const SenderViwer: React.FC<IProp> = ({ sender, ...props }) => {
    const {
        isRegisteredToAligo,
        isVerified,
        files,
        sender: payload,
        type,
        label,
    } = sender;
    return (
        <JDcard head={label || payload} {...props}>
            <Flex mb="tiny" vCenter>
                <Info mr="huge" label="발신번호" value={payload} />
                <Info label="발신타입" value={notificationMethodKr[type]} />
            </Flex>
            <Flex mb vCenter>
                <Info
                    mr="huge"
                    label="인증여부"
                    value={<VerifiedBadge isVerified={isVerified} />}
                />
                <Info
                    label="등록완료"
                    value={
                        <RegisteredAligoBadge
                            isRegisteredToAligo={isRegisteredToAligo || false}
                        />
                    }
                />
            </Flex>
            <div>
                <Info
                    label="제출파일"
                    value={
                        <div>
                            {files.map((file) => (
                                <JDicon
                                    hover
                                    label={file.name}
                                    onClick={() => {
                                        window.open(file.uri, "_blank");
                                    }}
                                    icon="file"
                                />
                            ))}
                        </div>
                    }
                />
            </div>
        </JDcard>
    );
};
