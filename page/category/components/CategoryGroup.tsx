import {
    Flex,
    JDalign,
    JDbutton,
    JDcard,
    Mr,
    useModal,
} from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { ModalBtn } from "../../../component/btns/ModalBtn";
import { GlobalInputModal } from "../../../component/GlobalInput/GlobalInputModal";
import { JDicon } from "../../../component/icons/Icons";
import {
    IKoreaMapModalInfo,
    KoreaMapModal,
} from "../../../component/koreaMapModal/KoreaMapModal";
import { CardHead, ModalHead } from "../../../component/modalHead/ModalHead";
import { ScrollBox } from "../../../component/scrollBox/ScrollBox";
import { AppContext } from "../../../context/context";
import {
    useCategoryCreate,
    useCategoryDelete,
    useCategoryUpdate,
} from "../../../hook/useCategory";
import { useGlobalModal } from "../../../hook/useGlobalModal";
import { CategoryType, Fcategory, Flangs } from "../../../types/api";
import { categoryTypeToKr } from "../../../utils/enumToKr";
import { deepCopy } from "../../../utils/formatter";
import { omits } from "../../../utils/omit";
import GuideContext from "../../context";
import { CateogryEditBtn } from "./CategoryEditBtn";

interface IProp {
    type: CategoryType;
}

export const CategoryGroup: React.FC<IProp> = ({ type }) => {
    const { catMap } = useContext(AppContext);
    const targets = catMap?.[type];
    const koreaMapModalHook = useModal<IKoreaMapModalInfo>();
    const globalModalHook = useGlobalModal();
    const [updateMu] = useCategoryUpdate();
    const [createMu] = useCategoryCreate();
    const [deleteMu] = useCategoryDelete();

    const handleUpdateCat = (target: Fcategory) => () => {
        const updateLang = (langs: Flangs) => {
            updateMu({
                variables: {
                    categoryId: target._id,
                    input: {
                        label: omits(langs),
                    },
                },
            });
        };

        const deleteCat = () => {
            deleteMu({
                variables: {
                    categoryId: target._id,
                },
            });
        };

        globalModalHook.openModal({
            langs: target.label,
            onSubmit: updateLang,
            Controller: (
                <ModalBtn onClick={deleteCat} thema="error">
                    삭제하기
                </ModalBtn>
            ),
        });
    };

    const handleCreateCat = () => {
        const createCat = (langs: Flangs) => {
            createMu({
                variables: {
                    input: {
                        label: omits(langs),
                        type: type,
                    },
                },
            });
        };
        globalModalHook.openModal({
            onSubmit: createCat,
        });
    };
    const handleAddHyperRegion = (target: Fcategory) => () => {
        koreaMapModalHook.openModal({
            selectedRegiion: (target.hyper as any) || undefined,
            onSubmit: (hyper) => {
                target.hyper = hyper;
                updateMu({
                    variables: {
                        categoryId: target._id,
                        input: {
                            hyper,
                        },
                    },
                });
            },
        });
    };

    return (
        <JDcard head={categoryTypeToKr[type]} mb>
            <ScrollBox>
                <Flex wrap>
                    {deepCopy(targets)?.map((target) => (
                        <JDalign
                            flex={{ vCenter: true }}
                            style={{ width: "max-content" }}
                            mr
                        >
                            <CateogryEditBtn
                                mb
                                mode="border"
                                key={target._id}
                                onClick={handleUpdateCat(target)}
                                category={target}
                                mr={
                                    target.type === CategoryType.REIGION
                                        ? "small"
                                        : undefined
                                }
                            />
                            {target.type === CategoryType.REIGION && (
                                <span>
                                    <JDicon
                                        onClick={handleAddHyperRegion(target)}
                                        icon="map"
                                    />
                                </span>
                            )}
                        </JDalign>
                    ))}
                    <JDbutton
                        mode="border"
                        thema="primary"
                        onClick={handleCreateCat}
                    >
                        추가하기
                    </JDbutton>
                    <GlobalInputModal {...globalModalHook} />
                </Flex>
            </ScrollBox>
            <KoreaMapModal
                head={{
                    title: "해당지역이 어디에 속하는지 지도에서 찾아주세요.",
                }}
                modalHook={koreaMapModalHook}
            />
        </JDcard>
    );
};
