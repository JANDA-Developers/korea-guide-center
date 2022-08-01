import { Flex, IUseModal } from "@janda-com/front";
import React from "react";
import { IDiv, TElements } from "../../types/interface";
import { JDicon } from "../icons/Icons";
import classNames from "classnames";

interface IUseModalInfo {
    head?: TElements;
    foot?: TElements;
}

interface IProp extends IDiv {
    modalHook: IUseModal<IUseModalInfo>;
    head?: TElements;
    foot?: TElements;
}

export const MobileFootBox: React.FC<IProp> = ({
    modalHook,
    head,
    foot,
    children,
    className,
    ...props
}) => {
    const { isOpen } = modalHook;
    const classes = classNames("MobileFootBox", className, {
        "MobileFootBox--open": isOpen,
        "MobileFootBox--close": !isOpen,
    });

    return (
        <div onClick={modalHook.closeModal} className={classes} {...props}>
            <div
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className="MobileFootBox__content"
            >
                <JDicon
                    onClick={modalHook.closeModal}
                    className="MobileFootBox__close"
                    hover
                    icon="close"
                />
                <Flex column between>
                    <div className="MobileFootBox__head">{head}</div>
                    <div className="MobileFootBox__body">{children}</div>
                    <div className="MobileFootBox__foot">{foot}</div>
                </Flex>
            </div>
        </div>
    );
};
