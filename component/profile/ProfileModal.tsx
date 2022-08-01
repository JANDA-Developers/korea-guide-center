import React from "react";
import { JDdropDown, JDtypho } from "@janda-com/front";
import { IUseDropDown } from "@janda-com/front/dist/hooks/hook";

export type TuserInfo = {
    image: string;
    name: string;
    version: string;
};

export type Tservice = {
    skip?: boolean;
    title: string;
    onClick: () => void;
};

interface IProps {
    userInfo: TuserInfo;
    services: Tservice[];
    dropBoxHook: IUseDropDown;
}

const ProfileModal: React.FC<IProps> = ({
    userInfo,
    services,
    dropBoxHook,
}) => {
    if (typeof window === "undefined") return null;
    const { image, name, version } = userInfo;

    return (
        <JDdropDown
            mode="fixed"
            position="absolute"
            closeOnWindowClick
            {...dropBoxHook}
        >
            <div className="profileDropBox">
                {services.map((service, i) => {
                    return (
                        <div
                            key={"profileDropBox__service" + i}
                            className="profileDropBox__service"
                        >
                            <JDtypho
                                hover
                                size="small"
                                onTouchStart={service.onClick}
                                onClick={service.onClick}
                                key={"profileLi" + i}
                                flex
                                color="grey4"
                                weight={600}
                            >
                                {service.title}
                            </JDtypho>
                        </div>
                    );
                })}
            </div>
        </JDdropDown>
    );
};

export default ProfileModal;
