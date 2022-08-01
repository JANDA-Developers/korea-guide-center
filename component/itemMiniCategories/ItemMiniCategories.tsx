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
                        className="itemMiniCategoriesLinear__button"
                        mode="flat"
                        onClick={handleCatFilter(miniCat)}
                        thema="grey1"
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
                    className="ItemMiniCategories__button"
                    mode="flat"
                    onClick={handleCatFilter(miniCat)}
                    thema="grey1"
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
