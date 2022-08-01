import { Flex } from "@janda-com/front";
import React, { useState } from "react";
import { useContext } from "react";
import GuideContext from "../../page/context";
import HeaderWrap from "../header/HeaderWrap";
import Sidebar from "../sidebar/Sidebar";

interface IProp {}

export const GuideLayout: React.FC<IProp> = ({ children }) => {
    const { isBooker, isLogin } = useContext(GuideContext);
    const [sideBarOpen, setSideBarOpen] = useState(true);

    const sideBarVisible = !isBooker && isLogin;

    return (
        <Flex className="layout guideLayout" oneone>
            {sideBarVisible && (
                <Sidebar setSide={setSideBarOpen} isOpen={sideBarOpen} />
            )}
            <div
                style={{
                    maxHeight: "100vh",
                    overflowY: "auto",
                }}
                className="layout__contents"
            >
                <HeaderWrap setSide={setSideBarOpen} sideOpen={sideBarOpen} />
                {children}
            </div>
        </Flex>
    );
};
