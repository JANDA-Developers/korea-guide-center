import { JDalign, JDtypho } from "@janda-com/front";
import { IJDtyphoProp } from "@janda-com/front/dist/components/typho/Typho";
import React from "react";
import { useContext } from "react";
import { JDicon } from "../component/icons/Icons";
import { AppContext } from "../context/context";

interface IProp extends IJDtyphoProp {
    onSeeMore: () => void;
    removeIcon?: boolean;
}

export const SeeMore: React.FC<IProp> = ({
    onSeeMore,
    removeIcon,
    children,
    ...props
}) => {
    const { s } = useContext(AppContext);
    return (
        <JDtypho
            hover
            flex={{ vCenter: true }}
            onClick={onSeeMore}
            z={8}
            weight={600}
            color="grey3"
            {...props}
        >
            {children || (
                <JDalign mr={removeIcon ? undefined : "tiny"}>
                    {s("seeMore")}
                </JDalign>
            )}
            {!removeIcon && (
                <JDicon hide={removeIcon} size="tiny" icon="arrowRight" />
            )}
        </JDtypho>
    );
};
