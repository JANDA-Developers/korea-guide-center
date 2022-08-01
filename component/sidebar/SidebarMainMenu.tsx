import React from "react";
import { JDtypho } from "@janda-com/front";
import { IIcons } from "@janda-com/front/dist/components/icons/declation";
import { IMenu } from "./Sidebar";
import { JDicon } from "../icons/Icons";

export type IProps = {
    menu: IMenu;
    index: number;
    onMenuClick: (index: number) => void;
    selected: boolean;
};

const SidebarMainMenu: React.FC<IProps> = ({
    menu,
    index,
    onMenuClick,
    selected,
}) => {
    return (
        <li
            onClick={() => {
                onMenuClick(index);
            }}
            className={`mainMenu__list ${selected && "mainMenu__list--active"}`}
            key={`sidebar_${index}`}
        >
            <JDicon size="normal" icon={menu.icon} />
            <JDtypho
                style={{
                    whiteSpace: "nowrap",
                }}
                size="tiny"
            >
                {menu.title}
            </JDtypho>
        </li>
    );
};

export default SidebarMainMenu;
