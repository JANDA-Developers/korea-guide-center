import { JDhorizen } from "@janda-com/front";
import React from "react";
import { FsubPlan } from "../../types/api";
import { SubPlanViewer } from "./SubPlanViewer";

interface IProp {
    subPlanes: FsubPlan[];
}

export const SubPlanViewers: React.FC<IProp> = ({ subPlanes }) => {
    return (
        <div className="subPlanViewers">
            {subPlanes.map((subPlan, index) => (
                <div key={"subPlanViewers" + index}>
                    <SubPlanViewer
                        mb="tiny"
                        className="subPlanViewers__plan"
                        subPlan={subPlan}
                    />
                </div>
            ))}
        </div>
    );
};
