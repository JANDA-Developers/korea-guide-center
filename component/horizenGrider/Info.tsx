import { Flex, isEmpty } from "@janda-com/front";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Info2 } from "../../atom/Info";
import { AppContext } from "../../context/context";
import { Flangs } from "../../types/api";
import { Badges2 } from "../statusBadges/StatusBadges";
import { ProductViewCardsWithApi } from "../productViewCard/ProductViewCardsWithApi";
import { Introduce2 } from "../productDetailComponents/DetailNavCardIntroduce";
import { LineCutter } from "../../atom/LineCutter";

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
            <Introduce2
                children={
                    <LineCutter line={5}>{l(item.introduce)} </LineCutter>
                }
            />
        </Flex>
    );
}

export default Info;
