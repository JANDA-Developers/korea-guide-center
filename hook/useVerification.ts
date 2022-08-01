import { useState } from "react";
import {
    VERIFICATION_COMPLETE,
    VERIFICATION_COMPLETE_WITH_PHONE_NUMBER,
    VERIFICATION_START,
} from "../apollo/gql/verification";
import {
    verificationComplete,
    verificationCompleteJoinWithPhoneNumber,
    verificationCompleteJoinWithPhoneNumberVariables,
    verificationCompleteVariables,
    verificationComplete_VerificationComplete_data,
    VerificationEvent,
    verificationStart,
    verificationStartVariables,
    VerificationTarget,
} from "../types/api";
import { generateMutationHook } from "../utils/query";
import { completeMsg } from "../utils/utils";

export const useVerificationSignInPhoneNumber = generateMutationHook<
    verificationCompleteJoinWithPhoneNumber,
    verificationCompleteJoinWithPhoneNumberVariables
>(VERIFICATION_COMPLETE_WITH_PHONE_NUMBER);

export const useVerificationStart = generateMutationHook<
    verificationStart,
    verificationStartVariables
>(VERIFICATION_START);
export const useVerificationComplete = generateMutationHook<
    verificationComplete,
    verificationCompleteVariables
>(VERIFICATION_COMPLETE);

export type TVerificationStart = (
    payload: string,
    event: VerificationEvent,
    target: VerificationTarget
) => Promise<any>;

export type TVerificationComplete = (code: string) => Promise<any>;
export type TuseVerification = ReturnType<typeof useVerification>;

export const useVerification = () => {
    const [code, setCode] = useState("");
    const [verifiData, setVerifiData] =
        useState<verificationComplete_VerificationComplete_data>();
    const [verifyMu, { loading: startLoading }] = useVerificationStart({
        onCompleted: ({ VerificationStart }) => {
            if (completeMsg(VerificationStart, "인증코드 발송"))
                setVerifiData(VerificationStart.data!);
        },
    });
    const [verifyCompleteMu, { loading: completeLoading }] =
        useVerificationComplete({
            onCompleted: ({ VerificationComplete }) => {
                if (
                    completeMsg(
                        VerificationComplete,
                        "인증완료",
                        "번호를 확인하세요."
                    )
                ) {
                    setVerifiData(VerificationComplete.data!);
                }
            },
        });

    const verifiStart: TVerificationStart = async (payload, event, target) => {
        return await verifyMu({
            variables: {
                input: {
                    event,
                    target: target || VerificationTarget.PHONE,
                    payload,
                },
            },
        }).then((result) => {
            return { ...result?.data?.VerificationStart };
        });
    };

    const verifiComplete = async (_code?: string) => {
        if (!verifiData) return;
        return await verifyCompleteMu({
            variables: {
                input: {
                    code: _code || code,
                    payload: verifiData.payload,
                    target: verifiData.target,
                    verificationId: verifiData._id,
                },
            },
        }).then((result) => {
            return { ...result?.data?.VerificationComplete };
        });
    };

    const reset = () => {
        setCode("");
        setVerifiData(undefined);
    };

    const totalLoading = startLoading || completeLoading;

    return {
        code,
        setCode,
        verifiStart,
        verifiComplete,
        verifyMu,
        reset,
        verifyCompleteMu,
        verifiData,
        totalLoading,
        setVerifiData,
    };
};
