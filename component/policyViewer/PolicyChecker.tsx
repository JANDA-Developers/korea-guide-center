import { Bold, Flex, JDbutton, JDcard, JDcheckBox } from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { TUsePolicyCheckers } from "../../hook/usePolicyCheckers";
import { TElements } from "../../types/interface";

export interface IPolicyChecker {
    require?: boolean;
    label: string;
    Policy: TElements;
    checked: boolean;
    onChange: (checked?: boolean) => void;
    index?: number;
}

export const PolicyChecker: React.FC<IPolicyChecker> = ({
    checked,
    label,
    onChange,
    Policy,
    index,
}) => {
    const { policyModalHook, s } = useContext(AppContext);
    return (
        <Flex id={`PolicyChecker${index}`} between mb vCenter>
            <JDcheckBox
                mr
                id="AgreePolicy"
                label={label}
                checked={checked}
                onChange={() => {
                    onChange(!checked);
                }}
            />
            <JDbutton
                br="round"
                padding="small"
                size="small"
                mode="border"
                onClick={() => {
                    policyModalHook.openModal({
                        onAgree: () => {
                            onChange(true);
                            policyModalHook.closeModal();
                        },
                        policy: Policy,
                        head: {
                            title: label,
                        },
                    });
                }}
            >
                {s("seeDetail")}
            </JDbutton>
        </Flex>
    );
};

export interface IPolicyCheckers extends TUsePolicyCheckers {}

export const PolicyCheckers: React.FC<IPolicyCheckers> = ({
    handleCheckEvery,
    policyCheckNodes,
    policyCheckerValidate,
    policyCheckers,
    setPolicyCheckers,
    checkedAll,
}) => {
    const { s } = useContext(AppContext);
    return (
        <div>
            <Flex mb vCenter>
                <JDcheckBox
                    onChange={() => {
                        handleCheckEvery();
                    }}
                    checked={checkedAll}
                    mr
                />{" "}
                <Bold>{s("agreeAll")}</Bold>
            </Flex>
            <JDcard mode="border">
                {policyCheckers?.map((policyConfig, index) => (
                    <PolicyChecker
                        key={index + "PolicyCheckers"}
                        {...policyConfig}
                    />
                ))}
            </JDcard>
        </div>
    );
};
