import { JDbutton, Mr, Small } from "@janda-com/front";
import { IButtonProps } from "@janda-com/front/dist/components/button/Button";
import { ICONPROP } from "@janda-com/front/dist/components/icons/Icons";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { useWishToggler } from "../../hook/useUser";
import JDIcon from "../icons/Icons";

type OmitTarget = "icon" | "mode";
interface IProp extends Omit<ICONPROP, OmitTarget> {
    productId: string;
    mode?: "button" | "icon";
    withOutLabel?: boolean;
    buttonprops?: IButtonProps;
}

export const WishIcon: React.FC<IProp> = ({
    productId,
    buttonprops,
    mode = "icon",
    className,
    withOutLabel,
    ...props
}) => {
    const { s } = useContext(AppContext);
    const { handleToggle, wish } = useWishToggler(productId);

    const Icon = (
        <JDIcon
            className={`wishIcon ${className}`}
            {...props}
            onClick={handleToggle}
            color={wish ? "error" : undefined}
            icon={"roundHeart"}
        />
    );

    if (mode === "button")
        return (
            <JDbutton
                onClick={handleToggle}
                size="long"
                br="square"
                mode="border"
                {...buttonprops}
            >
                {Icon}
                {withOutLabel ? null : (
                    <div>
                        <Mr />
                        <Small style={{ marginLeft: "0.4rem" }}>
                            {s("addToLove")}
                        </Small>
                    </div>
                )}
            </JDbutton>
        );
    return Icon;
};
