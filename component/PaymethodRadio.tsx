import { IJDalignProp, IUseSelect, JDbutton, JDradio } from "@janda-com/front";
import { IButtonProps } from "@janda-com/front/dist/components/button/Button";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/context";
import { LANGUAGES, Paymethod } from "../types/api";
import { PAY_METHOD_LANGS_OPS } from "../types/const";
import { checkMobile } from "../utils/isMobile";

interface IProp
    extends Omit<IUseSelect, "options">,
        Omit<IJDalignProp, "onChange"> {
    paymethods?: Paymethod[];
}

export const PaymethodRadios: React.FC<IProp> = ({
    selectedOption,
    onChange,
    paymethods,
    ...props
}) => {
    const { s, locale } = useContext(AppContext);
    const allPayMethods = PAY_METHOD_LANGS_OPS(s);
    const availMethods = allPayMethods.filter((method) => {
        if (
            locale !== LANGUAGES.ko &&
            method.value === Paymethod.BANK_TRANSFER
        ) {
            return false;
        }
        return method.value !== Paymethod.CASH;
    });

    return (
        <div className="payMethodRadio">
            {availMethods.map((method) => {
                const isSelected = selectedOption?.value === method.value;

                const buttonProp: IButtonProps = {
                    size: undefined,
                    mode: "border",
                    thema: undefined,
                };

                if (checkMobile()) buttonProp.size = "long";
                if (isSelected) {
                    buttonProp.thema = "primary";
                    buttonProp.mode = "flat";
                }

                return (
                    <JDbutton
                        className="payMethodRadio__btn"
                        br="square"
                        onClick={() => {
                            onChange({
                                ...method,
                            });
                        }}
                        {...buttonProp}
                        mr
                        mb
                    >
                        {method.label}
                    </JDbutton>
                );
            })}
        </div>
    );
};
