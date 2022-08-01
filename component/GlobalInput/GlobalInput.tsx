import { InputText, isLast, s4 } from "@janda-com/front";
import { IInputTextCutsomProp } from "@janda-com/front/dist/components/InputText/InputText";
import React from "react";
import { Flangs, LANGUAGES } from "../../types/api";
import { LanguagesOps } from "../../utils/enumToKr";

interface IProp {
    id: string;
    val: Flangs;
    onChange: (val: Flangs) => void;
    inputProps?: IInputTextCutsomProp;
    targets?: LANGUAGES[];
}

export const GlobalInput: React.FC<IProp> = ({
    id,
    onChange,
    val: langs,
    inputProps,
    targets = LanguagesOps.map((ln) => ln.value),
}) => {
    const targetLanagues = LanguagesOps.filter((op) =>
        targets?.includes(op.value)
    );

    const hasKr = targetLanagues.find((op) => op.value === LANGUAGES.ko);

    if (!hasKr) targetLanagues.push({ label: "한국어", value: LANGUAGES.ko });

    return (
        <div>
            {targetLanagues.map((op, index) => (
                <InputText
                    {...inputProps}
                    autoComplete="off"
                    id={"G" + op.value + "Input"}
                    mb={isLast(index, LanguagesOps) ? undefined : true}
                    key={"globalInput" + op.value + id}
                    onChange={(val) => {
                        langs[op.value as LANGUAGES] = val;
                        onChange({ ...langs });
                    }}
                    value={(langs[op.value as LANGUAGES] as string) || ""}
                    label={op.label}
                />
            ))}
        </div>
    );
};
