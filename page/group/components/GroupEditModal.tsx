import {
    InputText,
    Flex,
    IUseModal,
    JDmodal,
    s4,
    useInput,
} from "@janda-com/front";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { ModalBtn } from "../../../component/btns/ModalBtn";
import { InputWithGlobal } from "../../../component/InputWithGlobal/InputWithGlobal";
import { ModalHead } from "../../../component/modalHead/ModalHead";
import { useCopy } from "../../../hook/useCopy";
import { useGlobalInput } from "../../../hook/useGlobalInput";
import {
    useGroupCreate,
    useGroupDelete,
    useGroupUpdate,
} from "../../../hook/useGroup";
import { Fgroup, Fproduct, GroupInput } from "../../../types/api";
import { omits } from "../../../utils/omits";
import GuideContext from "../../context";

export interface IGroupEditModalInfo {
    group?: Fgroup;
}

interface IProp {
    modalHook: IUseModal<IGroupEditModalInfo>;
}

export const GroupEditModal: React.FC<IProp> = ({ modalHook }) => {
    const defaultGroup = modalHook.info?.group;
    const isCreate = !modalHook.info?.group;
    const { langs, setLangs } = useGlobalInput(defaultGroup?.label);
    const descHook = useGlobalInput(defaultGroup?.desc);
    const { globalModalHook } = useContext(GuideContext);
    const keyHook = useInput(defaultGroup?.key || "");

    const [groupCreate] = useGroupCreate({
        onCompleteSucess: modalHook.closeModal,
    });
    const [groupDelete] = useGroupDelete({
        onCompleteSucess: modalHook.closeModal,
    });
    const [groupUpdate] = useGroupUpdate({
        onCompleteSucess: modalHook.closeModal,
    });

    const nextData: GroupInput = {
        target: "Product",
        key: keyHook.value,
        ...defaultGroup,
        label: langs,
        desc: descHook.langs,
    };

    console.log({ nextData });

    const handleAdd = () => {
        groupCreate({
            variables: {
                input: omits(nextData),
            },
        });
    };
    const handleDelete = () => {
        groupDelete({
            variables: {
                GroupId: defaultGroup?._id,
            },
        });
    };

    const handleUpdate = () => {
        groupUpdate({
            variables: {
                GroupId: defaultGroup?._id,
                input: omits(nextData),
            },
        });
    };

    return (
        <JDmodal
            {...modalHook}
            head={{
                element: (
                    <ModalHead
                        title="상품전시 그룹 추가하기"
                        description="추가된 그룹은 잇츠테마에 추가됩니다"
                    />
                ),
            }}
            foot={
                <Flex>
                    <ModalBtn
                        onClick={handleAdd}
                        hide={!isCreate}
                        thema="primary"
                        mr
                    >
                        생성하기
                    </ModalBtn>
                    <ModalBtn
                        onClick={handleDelete}
                        hide={isCreate}
                        mr
                        thema="error"
                    >
                        삭제하기
                    </ModalBtn>
                    <ModalBtn
                        onClick={handleUpdate}
                        hide={isCreate}
                        thema="primary"
                    >
                        수정하기
                    </ModalBtn>
                </Flex>
            }
        >
            <InputWithGlobal
                mb
                setLangs={setLangs}
                langs={langs}
                label="그룹명"
            />
            <InputWithGlobal mb {...descHook} label="그룹설명" />
            <InputText label="그룹키(영어)" {...keyHook} />
        </JDmodal>
    );
};
