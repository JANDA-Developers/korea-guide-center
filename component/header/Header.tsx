import React, { useContext } from "react";
import { Flex, JDalign, useDropDown } from "@janda-com/front";
import { JDicon } from "../icons/Icons";
import GuideContext from "../../page/context";

interface IProps {
    sideOpen?: boolean;
    onMenuClick?: () => void;
    isHideIcon?: boolean;
}

const Header: React.FC<IProps> = ({ children, onMenuClick, sideOpen, isHideIcon }) => {
    const context = useContext(GuideContext);
    const { isLogin } = context;

    const dropBoxHook = useDropDown();

    return (
        <header className="header">
            <JDalign
                flex={{
                    vCenter: true,
                    between: true,
                }}
                className="header__items"
            >
                <Flex hide={!isLogin || isHideIcon} vCenter>
                    <JDicon
                        mr="huge"
                        size="small"
                        hover
                        className="header__icon"
                        onClick={onMenuClick}
                        icon={"menu"}
                    />
                </Flex>
                <div style={{ flex: 1 }}>{children}</div>
            </JDalign>
        </header>
    );
};

export default Header;
