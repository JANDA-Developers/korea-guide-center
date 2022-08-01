import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Bold } from "@janda-com/front";
import classNames from "classnames";
import { Tip } from "../../atom/tip/Tip";
import { IIcons } from "../icons/declation";
import { JDicon } from "../icons/Icons";
import { GuidePath } from "../../page/GuideRouter";

export type TSidebarSub = {
    icon: IIcons;
    title: string;
    exact?: boolean;
    externalHref?: string;
    path: string;
    skip?: boolean;
    keywards: string[];
    description: string;
    disabled: boolean;
    redirect?: GuidePath;
    disabledTooltip?: string;
    showWhenMatched?: boolean;
    onClickAdd?: () => void;
};

interface IProps {
    menu: TSidebarSub;
    onMenuClick: (path: string) => void;
}

const SidebarSubMenu: React.FC<IProps> = ({ menu, onMenuClick }) => {
    const history = useHistory();
    const { pathname } = useLocation();
    const {
        disabled,
        icon,
        path,
        redirect,
        title,
        exact,
        disabledTooltip,
        skip,
        showWhenMatched,
    } = menu;

    let selected: boolean = exact ? pathname === path : pathname.includes(path);

    const classes = classNames("subMenu__list", undefined, {
        "subMenu__list--activate": selected,
        "subMenu__list--disabled": disabled,
    });

    const handleClick = () => {
        if (menu.externalHref) {
            window.open(menu.externalHref, "_blank");
            return;
        }
        menu.onClickAdd?.();
        if (!disabled) onMenuClick(path);
    };

    if (!selected && showWhenMatched) return null;
    if (skip) return null;

    return (
        <Tip
            Tag="span"
            message={disabled ? disabledTooltip : undefined}
            onClick={handleClick}
            className={classes}
        >
            <JDicon size="small" mr="small" icon={icon} />
            <Bold size="small">{title}</Bold>
        </Tip>
    );
};

export default SidebarSubMenu;
