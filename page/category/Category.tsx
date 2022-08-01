import { JDcontainer } from "@janda-com/front";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { PageHeader } from "../../component/pageHeader/PageHeader";
import { useCategoryList } from "../../hook/useCategory";
import { useGlobalModal } from "../../hook/useGlobalModal";
import { CategoryOps } from "../../utils/enumToKr";
import GuideContext from "../context";
import { CategoryGroup } from "./components/CategoryGroup";

interface IProp {}

export const Category: React.FC<IProp> = () => {
    return (
        <JDcontainer verticalPadding>
            <PageHeader
                title="카테고리 설정하기"
                pageName="카테고리"
                description="카테고리를 설정합니다. (자주 바꾸면 혼란스러울 수 있습니다.)"
            />
            {CategoryOps.map((catOp) => (
                <CategoryGroup type={catOp.value} key={catOp.value} />
            ))}
        </JDcontainer>
    );
};
