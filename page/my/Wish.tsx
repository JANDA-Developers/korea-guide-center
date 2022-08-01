import { Bold, JDcontainer, JDtypho, Mb, WindowSize } from "@janda-com/front";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Empty } from "../../atom/Empty";
import { ProductViewCardsWithApi } from "../../component/productViewCard/ProductViewCards";
import { ProductViewsLineHeader } from "../../component/productViewCard/ProductViewsLineHeader";
import { AppContext } from "../../context/context";
import { myWishListKey, useMyWishList } from "../../hook/useUser";
import LocalManager from "../../utils/localManager";
import { LocalCustomStorage } from "../../utils/storage";

interface IProp {}

export const WishPage: React.FC<IProp> = () => {
    if (typeof window === "undefined") return null;
    const storage = new LocalManager({ storage: "localStorage" });
    const { s, me } = useContext(AppContext);
    const wishList = storage?.getLocalObj(
        myWishListKey(me?._id),
        []
    ) as string[];

    return (
        <div className="wishList">
            <JDcontainer verticalPadding size={WindowSize.lg}>
                <Bold mb size="h6">
                    {s("wishList")}
                </Bold>
                <Empty msg={s("noWishList")} empty={wishList} />
                {wishList && (
                    <ProductViewCardsWithApi
                        align={"wrap"}
                        key={wishList.join("") + wishList.length}
                        queryParam={{
                            fixingFilter: {
                                _id__in: wishList || [],
                            },
                            initialViewCount: 99,
                        }}
                    />
                )}
                <Mb mb="huge" />
            </JDcontainer>
            <div className="wishList__anotherList">
                <JDcontainer verticalPadding size={WindowSize.lg}>
                    <ProductViewsLineHeader title={s("chcekSimilarTours")} />
                    <ProductViewCardsWithApi
                        key={wishList?.length}
                        queryParam={{
                            fixingFilter: {
                                _id__not_in: wishList || [],
                            },
                        }}
                    />
                </JDcontainer>
            </div>
        </div>
    );
};
