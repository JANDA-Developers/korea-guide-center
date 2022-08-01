import { Validater } from "@janda-com/front";
import { useState, useContext } from "react";
import { IPolicyChecker } from "../component/policyViewer/PolicyChecker";
import { AppContext } from "../context/context";

export type TUsePolicyCheckers = ReturnType<typeof usePolicyCheckers>;
interface IUsePolicyChcekers {
    config: Omit<IPolicyChecker, "checked" | "onChange">[];
}
export const usePolicyCheckers = (props: IUsePolicyChcekers) => {
    const { s } = useContext(AppContext);
    const [policyCheckers, setPolicyCheckers] = useState<IPolicyChecker[]>(
        props.config.map((conf, index) => {
            return {
                ...conf,
                checked: false,
                onChange: (next?: boolean) => {
                    policyCheckers[index].checked = !!next;
                    setPolicyCheckers([...policyCheckers]);
                },
            };
        })
    );

    const checkedAll = !policyCheckers.find((pc) => !pc.checked);
    const handleCheckEvery = () => {
        if (!checkedAll)
            policyCheckers.forEach((pc) => {
                pc.checked = true;
                setPolicyCheckers([...policyCheckers]);
            });
        else {
            policyCheckers.forEach((pc) => {
                pc.checked = false;
                setPolicyCheckers([...policyCheckers]);
            });
        }
        setPolicyCheckers([...policyCheckers]);
    };

    const { validate: policyCheckerValidate, nodes: policyCheckNodes } =
        new Validater(
            policyCheckers.map((pc, index) => ({
                value: !pc.require || pc.checked,
                failMsg: pc.label + s("pleaseAgreeWithPolicies"),
                id: `PolicyChecker${index}`,
            }))
        );

    return {
        checkedAll,
        policyCheckers,
        setPolicyCheckers,
        handleCheckEvery,
        policyCheckNodes,
        policyCheckerValidate,
    };
};
