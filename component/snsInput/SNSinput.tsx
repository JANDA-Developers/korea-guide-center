import { Flex, InputText } from "@janda-com/front";
import React from "react";
import { Fsns } from "../../types/api";
import { omits } from "../../utils/omit";
import { JDicon } from "../icons/Icons";
import { SnsKeys, SnsKeyToIcon, SnsKeyToKr } from "./snsMap";

interface IProp {
    sns: Fsns;
    onChange: (sns: Fsns) => void;
}

export const SNSInput: React.FC<IProp> = ({ onChange, sns }) => {
    const handleChange = (key: SnsKeys) => (val: any) => {
        sns[key] = val;
        onChange({ ...sns });
    };

    return (
        <div>
            {Object.entries<string>(omits(sns)).map(([key, val]) => {
                return (
                    <Flex oneone mb vCenter key={key + "SNSInputCell"}>
                        <JDicon mr icon={SnsKeyToIcon[key as SnsKeys]} />
                        <InputText
                            placeholder="SNS 링크를 입력해주세요."
                            onChange={handleChange(key as SnsKeys)}
                            // label={SnsKeyToKr[key as SnsKeys]}
                            value={val || ""}
                        />
                    </Flex>
                );
            })}
        </div>
    );
};
