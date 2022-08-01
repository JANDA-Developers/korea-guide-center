import React from "react";
import JDsearchBar from "../../../atom/SearchBar";
import { useProductList } from "../../../hook/useProduct";

interface IProp {
    productListhook: ReturnType<typeof useProductList>;
}

export const ProductSearchFilter: React.FC<IProp> = ({ productListhook }) => {
    return (
        <JDsearchBar
            listHook={productListhook}
            searchOps={[
                {
                    label: "제목",
                    value: "title_ko__contains",
                },
                {
                    label: "내용",
                    value: "shortDecsription_ot__contains",
                },
                {
                    label: "가이드닉네임",
                    value: "guideNickName__contains",
                },
            ]}
        />
    );
};
