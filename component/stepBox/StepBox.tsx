import { Flex, JDbutton, JDcard, JDtypho, Mb } from "@janda-com/front";
import { IDiv, ISet } from "@janda-com/front/dist/types/interface";
import React from "react";
import { useState } from "react";
import { JDicon } from "../icons/Icons";

interface IStep extends IDiv {
    title: string;
    clear: boolean;
    disabled?: boolean;
}

interface IProp extends IDiv {
    steps: IStep[];
    mobileOpen: boolean;
    setMobileOpen: ISet<boolean>;
}

export const StepBox: React.FC<IProp> = ({
    steps,
    mobileOpen,
    setMobileOpen,
    className,
}) => {
    return (
        <JDcard
            className={`${className} stepBox ${
                mobileOpen && "stepBox--mobileOpen"
            }`}
        >
            <div>
                {steps.map((step) => (
                    <Flex
                        vCenter
                        className={`stepBox__step ${
                            step.disabled && "stepBox__step--disabled"
                        }`}
                        {...step}
                    >
                        <JDicon
                            mr
                            color={step.clear ? "primary" : "grey1"}
                            icon="checkCircle"
                        />{" "}
                        <JDtypho color={step.clear ? undefined : "grey1"}>
                            {step.title}
                        </JDtypho>
                    </Flex>
                ))}
                <Mb />
                <div className="stepBox__close" style={{ margin: ".8rem" }}>
                    <JDbutton
                        mode="flat"
                        size="long"
                        onClick={() => {
                            setMobileOpen(false);
                        }}
                        thema="primary"
                    >
                        닫기
                    </JDbutton>
                </div>
            </div>
        </JDcard>
    );
};
