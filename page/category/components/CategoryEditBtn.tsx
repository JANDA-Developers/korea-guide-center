import { JDbutton } from "@janda-com/front";
import { IButtonProps } from "@janda-com/front/dist/components/button/Button";
import React from "react";
import { mapRegion } from "../../../component/koreaMap/KoreaData";
import { Fcategory } from "../../../types/api";
import { MapRegionKr } from "../../../types/const";

interface IProp extends IButtonProps {
    category: Fcategory;
}

export const CateogryEditBtn: React.FC<IProp> = ({ category, ...props }) => {
    const { label, hyper } = category;
    return (
        <JDbutton
            iconProp={{ icon: "edit" }}
            label={
                (hyper ? MapRegionKr[hyper as mapRegion] + "-" : "") +
                    label.ko || ""
            }
            {...props}
        />
    );
};
