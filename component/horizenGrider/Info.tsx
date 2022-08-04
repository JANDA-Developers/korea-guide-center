import { Flex, isEmpty, JDhorizen } from "@janda-com/front";
import router, { useRouter } from "next/router";
import { useContext } from "react";
import { Info2 } from "../../atom/Info";
import { LineCutter } from "../../atom/LineCutter";
import { AppContext } from "../../context/context";
import { Flangs, Fuser } from "../../types/api";
import { filterVisibleProduct } from "../../utils/product";
import { Introduce2 } from "../productDetailComponents/DetailNavCardIntroduce";
import { ProductViewCardsWithApi2 } from "../productViewCard/ProductViewCards";
import { ProductViewsLineHeader } from "../productViewCard/ProductViewsLineHeader";
import { LANGUAGES } from "../../types/api";
import { Badges2 } from "../statusBadges/StatusBadges";

function Info({ item }: any) {
    const router = useRouter();
    const context = useContext(AppContext);
    const { s, l } = context;
    return (
        <Flex column>
            <Info2
                typho={{
                    size: "tiny",
                }}
                mb="tiny"
                hide={isEmpty(item?.regions)}
                label={s("workArea")}
                value={
                    <Badges2
                        mb="tiny"
                        mr="tiny"
                        className="detailNavCard__Badges"
                        items={item?.regions || []}
                    >
                        {(region: { label: Flangs }) => l(region.label)}
                    </Badges2>
                }
            />
            <Info2
                mb="tiny"
                label={s("useLanguage")}
                hide={isEmpty(item?.langs)}
                value={
                    <Badges2
                        mb="tiny"
                        mr="tiny"
                        className="detailNavCard__Badges"
                        items={item?.langs}
                    >
                        {(item: any) => s(item)}
                    </Badges2>
                }
            />

            {item?.guideCategory && (
                <Info2
                    mb="tiny"
                    label={s("guideType")}
                    hide={isEmpty(item?.guideCategory)}
                    value={
                        <Badges2
                            className="detailNavCard__Badges"
                            mb="tiny"
                            mr="tiny"
                            items={item?.guideCategory || []}
                        >
                            {(guideCat: { label: Flangs }) => l(guideCat.label)}
                        </Badges2>
                    }
                />
            )}
            <Flex mb column>
                <Introduce2
                    children={
                        <LineCutter line={5}>{l(item.introduce)} </LineCutter>
                    }
                />
                {!isEmpty(
                    filterVisibleProduct(
                        item.products || [],
                        (router.locale as LANGUAGES) || LANGUAGES.ko
                    )
                ) && (
                    <div style={{ marginTop: "1vh" }}>
                        <ProductViewsLineHeader title={s("guideTours")} />
                        <JDhorizen margin={2} />
                        <ProductViewCardsWithApi2
                            queryParam={{
                                fixingFilter: {
                                    guideId__eq: item._id,
                                },
                            }}
                        />
                    </div>
                )}
            </Flex>
        </Flex>
    );
}

export default Info;
