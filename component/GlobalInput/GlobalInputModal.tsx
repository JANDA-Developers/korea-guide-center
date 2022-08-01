import { Flex, IUseModal, JDmodal, Validater } from "@janda-com/front";
import { IInputTextCutsomProp } from "@janda-com/front/dist/components/InputText/InputText";
import { TElements } from "@janda-com/front/dist/types/interface";
import React from "react";
import { useGlobalInput } from "../../hook/useGlobalInput";
import { Flangs, LANGUAGES } from "../../types/api";
import { LanguagesOps } from "../../utils/enumToKr";
import { ModalBtn } from "../btns/ModalBtn";
import { ModalHead } from "../modalHead/ModalHead";
import { GlobalInput } from "./GlobalInput";

export interface IGlobalInputModalInfo {
    inputProps?: IInputTextCutsomProp;
    langs?: Flangs;
    onSubmit?: (langs: Flangs) => void;
    Controller?: TElements;
    targets?: LANGUAGES[];
    title?: string;
    description?: string;
}

interface IProp extends IUseModal<IGlobalInputModalInfo> {
    targets?: LANGUAGES[];
}

export const GlobalInputModal: React.FC<IProp> = ({
    targets: defaultTargets,
    ...modalHook
}) => {
    if (!modalHook.info) return null;
    const {
        title,
        description,
        inputProps,
        langs: defaultLangs,
        onSubmit,
        Controller,
        targets = defaultTargets || LanguagesOps.map((lang) => lang.value),
    } = modalHook.info;
    const { langs, setLangs } = useGlobalInput(defaultLangs);

    const { validate } = new Validater([
        {
            id: "GkoInput",
            value: langs.ko,
            failMsg: "한국어 입력값은 필수 입니다",
        },
        {
            id: "GchiInput",
            value: langs.chi,
            failMsg: "중국어 입력칸은 필수 입니다",
            skip: !targets.includes(LANGUAGES.chi),
        },
        {
            id: "GjaInput",
            value: langs.ja,
            failMsg: "일본어 ",
            skip: !targets.includes(LANGUAGES.ja),
        },
        {
            id: "GotInput",
            failMsg: "기타언어 입력칸을 입력 해주세요.",
            value: langs.ot,
            skip: !targets.includes(LANGUAGES.ot),
        },
        {
            id: "GenInput",
            failMsg: "영어 입력칸을 입력 해주세요.",
            value: langs.en,
            skip: !targets.includes(LANGUAGES.en),
        },
    ]);

    const handleSubmit = () => {
        if (!validate()) return;
        onSubmit?.(langs);
        modalHook.closeModal();
    };

    return (
        <JDmodal
            {...modalHook}
            foot={
                <Flex>
                    <ModalBtn mr onClick={handleSubmit} label="설정하기" />
                    <ModalBtn
                        mr
                        onClick={modalHook.closeModal}
                        label="취소하기"
                    />
                    {Controller}
                </Flex>
            }
            head={{
                element: (
                    <ModalHead
                        title={title || "언어별 내용 기입하기"}
                        description={
                            description ||
                            "언어별로 내용을 입력 해주세요. (한국어는 필수 대표값 입니다.)"
                        }
                    />
                ),
            }}
        >
            <GlobalInput
                targets={targets}
                inputProps={{ ...inputProps, require: !!defaultTargets }}
                id=""
                val={langs}
                onChange={setLangs}
            />
        </JDmodal>
    );
};
