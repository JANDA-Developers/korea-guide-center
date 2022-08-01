import {
    TimePerMs,
    InputText,
    IUseModal,
    JDmodal,
    JDmodalConfigProps,
    toast,
    Mb,
    Bold,
    Small,
} from "@janda-com/front";
import React, { useEffect, useState } from "react";
import JDTimer from "../../atom/Timer";
import Timer from "react-compound-timer";
import {
    TuseVerification,
    TVerificationStart,
} from "../../hook/useVerification";
import { ModalBtn } from "../btns/ModalBtn";
import { VerificationEvent, VerificationTarget } from "../../types/api";

let RE_SEND_COUNT = 10;

export interface IVerfiModalInfo {
    payload?: string;
    target?: any;
    event?: any;
    onVerificationSucess?: () => void;
}

interface IProps extends JDmodalConfigProps, TuseVerification {
    modalHook: IUseModal<IVerfiModalInfo>;
    payload?: string;
    event?: VerificationEvent;
    target?: VerificationTarget;
    verifiStart: TVerificationStart;
    verifiComplete: any;
    insteadEmail?: string;
    onComplete?: () => void;
}

const VerificationModal: React.FC<IProps> = ({
    modalHook,
    payload = modalHook.info?.payload || "",
    totalLoading,
    verifiStart,
    verifiComplete,
    insteadEmail,
    onComplete: handleComplete,
    code,
    setCode,
    target,
    event,
}) => {
    if (typeof window === "undefined") return null;
    const _event = modalHook.info?.event || event;
    const _target = modalHook.info?.target || target;
    const isPhone = _target === VerificationTarget.PHONE;
    const [isTimeOver, setTimeOver] = useState(false);

    const handleResend = () => {
        if (totalLoading) return;
        if (!RE_SEND_COUNT) {
            toast.error(
                isPhone
                    ? "더이상 인증 문자를 발송할 수 없습니다."
                    : "더이상 이메일을 발송할 수 없습니다."
            );
            return;
        }
        if (RE_SEND_COUNT < 5) {
            alert(`재발송 가능 횟수 ${RE_SEND_COUNT}회 남았습니다.`);
        }
        verifiStart(payload, _event, target!);
        RE_SEND_COUNT = RE_SEND_COUNT - 1;
    };

    const HandleComplete = async () => {
        if (totalLoading) return;
        if (isTimeOver)
            toast.warn("시간이 초과하였습니다. 다시 인증요청을 해주세요.");

        await verifiComplete().then((data: any) => {
            if (data?.ok) {
                modalHook.closeModal();
                modalHook.info?.onVerificationSucess?.();
            }
        });
    };

    useEffect(() => {
        if (modalHook.isOpen) verifiStart(payload, _event, target!);
    }, [modalHook.isOpen]);

    return (
        <JDmodal
            {...modalHook}
            head={{
                element: (
                    <div>
                        <Bold mb size={"h6"}>
                            {isPhone ? "핸드폰 인증하기" : "이메일 인증하기"}
                        </Bold>
                        {isPhone && (
                            <Small>
                                카카오톡으로 인증번호가 전송됩니다.
                                <br /> 카카오톡 사용이 불가능하신 분들은 문자로
                                번호가 발송됩니다.
                            </Small>
                        )}
                    </div>
                ),
            }}
            foot={
                <div>
                    <ModalBtn
                        mr
                        id="verfiCompleteBtn"
                        thema={"primary"}
                        label={"인증완료"}
                        onClick={handleComplete || HandleComplete}
                    />
                    <ModalBtn
                        mode="flat"
                        disabled={RE_SEND_COUNT === 0}
                        label={"인증번호 재발송"}
                        onClick={handleResend}
                    />
                </div>
            }
            loading={totalLoading}
            className="Modal"
            overlayClassName="Overlay"
            ariaHideApp={false}
        >
            <JDTimer initialTime={TimePerMs.M * 3} direction="backward">
                {({ timerState }: any) => {
                    if (timerState === "STOPPED") {
                        setTimeOver(true);
                    }
                    return (
                        <span className="JDtimer">
                            <span className="JDtimer__minute">
                                <Timer.Minutes />분
                            </span>
                            <span className="JDtimer__second">
                                <Timer.Seconds />초
                            </span>
                        </span>
                    );
                }}
            </JDTimer>
            <Mb />
            <InputText
                mb
                placeholder={"******"}
                id="verifiKeyInput"
                value={code}
                onChange={setCode as any}
                label={"인증하기"}
            />
        </JDmodal>
    );
};

export default VerificationModal;
