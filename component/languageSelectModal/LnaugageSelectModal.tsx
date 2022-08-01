import { IUseModal, JDmodal, JDselect, useRadioButton } from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { LANGUAGES } from "../../types/api";
import { LanguagesOps } from "../../utils/enumToKr";
import { ModalBtn } from "../btns/ModalBtn";
import { ModalHead } from "../modalHead/ModalHead";

export interface ILanguageSelectModalInfo {
    languages: LANGUAGES[];
    onSubmit: (langs: LANGUAGES[]) => void;
}

interface IProp {
    modalHook: IUseModal<ILanguageSelectModalInfo>;
}

export const LanguageSelectModal: React.FC<IProp> = ({ modalHook }) => {
    if (typeof window === "undefined") return null;
    const languages = modalHook.info?.languages || [];
    const { s } = useContext(AppContext);

    const regionRadioHook = useRadioButton(
        languages?.map((lang) => lang) || [],
        LanguagesOps
    );

    const handleSubmit = () => {
        console.log({ regionRadioHook });
        modalHook.info?.onSubmit(regionRadioHook.selectedValues as LANGUAGES[]);
        modalHook.closeModal();
    };

    const selectedOptions = regionRadioHook.options.filter((op) =>
        regionRadioHook.selectedValues.includes(op.value)
    );

    return (
        <JDmodal
            className="resignModal"
            foot={
                <div>
                    <ModalBtn onClick={handleSubmit}>
                        {s("LanguagesBtn")}
                    </ModalBtn>
                </div>
            }
            {...modalHook}
            head={{
                element: (
                    <ModalHead
                        title="지원하실 언어들을 선택 해주세요."
                        description="해당 언어에서만 베너가 출력됩니다"
                    />
                ),
            }}
        >
            <JDselect
                label={s("LanguagesOps")}
                mb="largest"
                isMulti
                {...regionRadioHook}
                menuPortalTarget={document.documentElement}
                portalElement
                onChanges={(languages) => {
                    regionRadioHook.onChangeSelect(
                        languages?.map((l) => l.value) || []
                    );
                }}
                selectedOptions={selectedOptions}
                // onChange={(lang) => {
                //     router.push(location.href, undefined, { locale: lang.value });
                // }}
            />
        </JDmodal>
    );
};

export default LanguageSelectModal;
