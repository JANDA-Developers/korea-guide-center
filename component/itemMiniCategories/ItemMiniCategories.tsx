import { Flex, JDbutton } from "@janda-com/front";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import { searchPageQueryGenerate } from "../../pages/product/search";
import { Fcategory } from "../../types/api";
import { ScrollBox } from "../scrollBox/ScrollBox";

interface IProp {}

export const ItemMiniCategoriesLinear: React.FC<IProp> = () => {
    const router = useRouter();
    const { catMap, s, l } = useContext(AppContext);
    const handleCatFilter = (cat: Fcategory) => () => {
        router.push(
            searchPageQueryGenerate({
                filter: {
                    categoryMini__id__in: [cat._id],
                },
            })
        );
    };
    return (
        <Flex className="itemMiniCategoriesLinear" wrap oneone>
            <ScrollBox scrollSize="small">
                {catMap.ITEM_SMALL.map((miniCat) => (
                    <JDbutton
                        style={{
                            borderRadius: "0px",
                            border: "1px solid rgba(0,0,0,0.6)",
                            fontWeight: 300,
                        }}
                        className="itemMiniCategoriesLinear__button"
                        mode="flat"
                        onClick={handleCatFilter(miniCat)}
                        thema="white"
                        mr
                        mb
                    >
                        {l(miniCat.label)}
                    </JDbutton>
                ))}
            </ScrollBox>
        </Flex>
    );
};

// 상단에 카테고리 나오는 부분 (로컬투어 뭐 이런거)
export const ItemMiniCategoriesGrid: React.FC<IProp> = () => {
    const router = useRouter();
    const { catMap, s, l } = useContext(AppContext);
    const handleCatFilter = (cat: Fcategory) => () => {
        router.push(
            searchPageQueryGenerate({
                filter: {
                    categoryMini__id__in: [cat._id],
                },
            })
        );
    };

    return (
        <Flex className="ItemMiniCategories" wrap oneone>
            {catMap.ITEM_SMALL.map((miniCat) => (
                <JDbutton
                    style={{
                        borderRadius: "0px",
                        border: "1px solid rgba(0,0,0,0.6)",
                        fontWeight: 300,
                    }}
                    mode="flat"
                    onClick={handleCatFilter(miniCat)}
                    thema="white"
                    mr
                    mb
                    key={miniCat._id + "ItemMiniCategories"}
                >
                    {l(miniCat.label)}
                </JDbutton>
            ))}
        </Flex>
    );
};

export const ItemMiniCategories: React.FC<IProp> = () => {
    return (
        <div className="itemMiniCategories">
            <div className="itemMiniCategories__mobile">
                <ItemMiniCategoriesLinear />
            </div>
            <div className="itemMiniCategories__pc">
                <ItemMiniCategoriesGrid />
            </div>
        </div>
    );
};
