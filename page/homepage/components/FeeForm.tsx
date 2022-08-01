import {
    InputText,
    Flex,
    JDselect,
    JDbutton,
    opFind,
    JDalign,
} from "@janda-com/front";
import React from "react";
import DotButton from "../../../component/dotButton/DotButton";
import { DefaultFeePolicy } from "../../../hook/useFeepolicy";
import { FeeType, Ffeepolicy } from "../../../types/api";
import { PAY_METHOD_OPS } from "../../../types/const";
import { FeeTpyesOps } from "../../../utils/enumToKr";
import { deepCopy } from "../../../utils/formatter";
import { toNumber } from "../../../utils/toNumber";

interface IFeeFormProp {
    feePolicy: Ffeepolicy;
    onChange: (feePolicy: Ffeepolicy) => void;
    onDelete: () => void;
}

export const FeeForm: React.FC<IFeeFormProp> = ({
    feePolicy,
    onChange,
    onDelete,
}) => {
    const { type, targetPayMethods } = feePolicy;
    const isPercent = type === FeeType.PERCNET;
    return (
        <Flex mb="small" vCenter vEnd>
            <InputText
                onChange={(v) => {
                    feePolicy.feeName = v;
                    onChange(feePolicy);
                }}
                value={feePolicy.feeName}
                mr="small"
                label="항목명"
            />
            <JDselect
                onChange={(v) => {
                    feePolicy.type = v.value;
                    onChange(feePolicy);
                }}
                selectedOption={opFind(feePolicy.type, FeeTpyesOps)}
                options={FeeTpyesOps}
                mr="small"
                label="계산법"
            />
            <InputText
                onChange={(v) => {
                    if (isPercent) {
                        const num = parseFloat(v);
                        if (num < 0) return;
                        if (num > 100) return;
                        feePolicy.feePercent = num;
                    } else feePolicy.fee = toNumber(v);
                    onChange(feePolicy);
                }}
                value={
                    isPercent ? feePolicy.feePercent || 0 : feePolicy.fee || 0
                }
                mr="small"
                label="수수료"
            />
            {isPercent && (
                <InputText
                    onChange={(v) => {
                        const num = parseFloat(v);
                        if (num < 0) return;
                        if (num > 100) return;
                        feePolicy.feePercentUnder = num;
                        onChange(feePolicy);
                    }}
                    value={feePolicy.feePercentUnder || 0}
                    mr="small"
                    label="수수료 소숫점 아래"
                />
            )}
            <InputText
                onChange={(v) => {
                    feePolicy.feeDescription = v;
                    onChange(feePolicy);
                }}
                mr="small"
                value={feePolicy.feeDescription}
                label="항목설명"
            />
            {/* <JDselect
                mr="tiny"
                options={PAY_METHOD_OPS}
                label="대상결제수단"
                selectedOptions={PAY_METHOD_OPS.filter((op) =>
                    targetPayMethods?.includes(op.value)
                )}
                onChanges={(ops) => {
                    const values = ops?.map((op) => op.value);
                    feePolicy.targetPayMethods = values || [];
                    onChange(feePolicy);
                }}
                isMulti
            /> */}
            <JDbutton mode="flat" thema="error" br="square" onClick={onDelete}>
                항목삭제
            </JDbutton>
        </Flex>
    );
};

interface IProps {
    feePolicies: Ffeepolicy[];
    onChange: (feePolicies: Ffeepolicy[]) => void;
}

export const FeeForms: React.FC<IProps> = ({ feePolicies, onChange }) => {
    return (
        <div>
            <JDalign mb>
                {feePolicies.map((feePolicy, index) => (
                    <FeeForm
                        key={feePolicy._id}
                        feePolicy={feePolicy}
                        onChange={() => {
                            onChange([...feePolicies]);
                        }}
                        onDelete={() => {
                            feePolicies.splice(index, 1);
                            onChange([...feePolicies]);
                        }}
                    />
                ))}
            </JDalign>
            <DotButton
                onClick={() => {
                    feePolicies.push(deepCopy({ ...DefaultFeePolicy }));
                    onChange([...feePolicies]);
                }}
            >
                항목추가
            </DotButton>
        </div>
    );
};
