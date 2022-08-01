import { InputText, JDalign, JDswitch, JDtagInput } from "@janda-com/front";
import { ISet } from "@janda-com/front/dist/types/interface";
import React from "react";
import { LoadEditor } from "../../../../component/edit/EdiotrLoading";
import { AttributeInput } from "../../../../component/formCreater/components/AttributeInput";
import { BoardDocInput, Fattribute } from "../../../../types/api";
const JDEditor = LoadEditor();

interface IProp {
    keys: any[];
    attrs: Fattribute[];
    setAttrs: ISet<Fattribute[]>;
    docInput: BoardDocInput;

    setDocInput: ISet<BoardDocInput>;
}

export const BoardInputs: React.FC<IProp> = ({
    attrs,
    keys,
    setAttrs,
    docInput,
    setDocInput,
}) => {
    return (
        <div>
            {keys.map((key) => {
                const targetAttr = attrs.find((at) => at.key === key);
                return (
                    <JDalign mb key={key}>
                        {targetAttr && (
                            <AttributeInput
                                onChange={(val) => {
                                    targetAttr.value = val;
                                    setAttrs([...attrs]);
                                }}
                                attribute={targetAttr}
                            />
                        )}
                        {key === "title" && (
                            <InputText
                                value={docInput.title}
                                onChange={(val: any) => {
                                    docInput.title = val;
                                    setDocInput({ ...docInput });
                                }}
                                label="제목"
                            />
                        )}
                        {key === "isOpen" && (
                            <JDswitch
                                mb
                                label="공개하기"
                                onChange={() => {
                                    docInput.isOpen = !docInput.isOpen;
                                    setDocInput({ ...docInput });
                                }}
                                checked={docInput.isOpen}
                            />
                        )}
                        {key === "keyWards" && (
                            <JDtagInput
                                mb
                                label="키워드"
                                setTags={(val: any) => {
                                    docInput.keyWards = val;
                                    setDocInput({ ...docInput });
                                }}
                                tags={docInput.keyWards || []}
                            />
                        )}
                        {key === "contents" && (
                            <JDEditor
                                data={docInput.contents || ""}
                                onChange={(val) => {
                                    docInput.contents = val as any;
                                    setDocInput({
                                        ...docInput,
                                    });
                                }}
                            />
                        )}
                    </JDalign>
                );
            })}
        </div>
    );
};
