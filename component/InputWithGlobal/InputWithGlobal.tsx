import { InputText, JDlabel } from "@janda-com/front";
import { IInputTextCutsomProp } from "@janda-com/front/dist/components/InputText/InputText";
import React from "react";
import { useContext } from "react";
import { TUseGlobalModal } from "../../hook/useGlobalModal";
import GuideContext from "../../page/context";
import { Flangs, LANGUAGES } from "../../types/api";
import { ISet } from "../../types/interface";
import { IGlobalInputModalInfo } from "../GlobalInput/GlobalInputModal";

interface IProp extends IInputTextCutsomProp {
    langs: Flangs;
    setLangs: ISet<Flangs>;
    globalModalHook?: TUseGlobalModal;
    targets?: LANGUAGES[];
    required?: boolean;
}

export const InputWithGlobal: React.FC<IProp> = ({
    langs,
    globalModalHook: _globalModalHook,
    setLangs,
    targets,
    require,
    label,
    ...props
}) => {
    const { globalModalHook: __globalModalHook } = useContext(GuideContext);
    const globalModalHook = _globalModalHook || __globalModalHook;
    const handleChange = () => {
        globalModalHook.openModal({
            inputProps: {
                ...props,
            },
            targets,
            title: label,
            langs,
            onSubmit: setLangs,
        });
    };

    return (
        <InputText
            onClick={handleChange}
            value={langs.ko!}
            placeholder={"언어별 입력하기"}
            readOnly
            // label={
            //     label
            //         ? ((
            //               <JDlabel
            //                   mb="superTiny"
            //                   txt={label}
            //                   require={require}
            //               />
            //           ) as any)
            //         : undefined
            // }
            label={label}
            {...props}
        />
    );
};
