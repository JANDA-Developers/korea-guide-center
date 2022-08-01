import {
    Bold,
    Flex,
    JDbutton,
    JDcard,
    JDhorizen,
    JDtypho,
    Language,
    useInput,
    useModal,
    InputText,
} from "@janda-com/front";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import { useProductList } from "../../hook/useProduct";
import { searchPageQueryGenerate } from "../../pages/product/search";
import { _ProductFilter } from "../../types/api";
import { whenEnter } from "../../utils/eventValueExtracter";
import { MobileFootBox } from "../mobileFootBox/MobileFootBox";
import { ScrollBox } from "../scrollBox/ScrollBox";
import { CategoryFilter } from "./components/CategoryFilter";
import { DateFilter } from "./components/DateFilter";
import { LanguageFilter } from "./components/LanguageFilter";
import { MiniCategoryFilter } from "./components/MiniCategoryFilter";
import { PriceFilter } from "./components/PriceFilter";
import { RatingFilter } from "./components/RatingFilter";
import { RegionFilter } from "./components/RegionFilter";

interface IProp {
    productListhook: ReturnType<typeof useProductList>;
}
type TFilterType = "region" | "price" | "lang" | "rating" | "date";

export const GrandProductSearchFilter: React.FC<IProp> = ({
    productListhook,
}) => {
    const { s } = useContext(AppContext);
    const router = useRouter();
    const { filter, setFilter } = productListhook;
    const modalHook = useModal<{ type: TFilterType }>();
    const mobileType = modalHook.info?.type;
    const searchHook = useInput("");

    const handleOpenMobile = (type: TFilterType) => () => {
        modalHook.openModal({ type });
    };

    const toSearchPage = () => {
        const to = searchPageQueryGenerate({ title: searchHook.value });
        router.push(to);
    };

    return (
        <div>
            <div className="GrandProductSearchFilter GrandProductSearchFilter--pc">
                <Bold mb>{s("concept")}</Bold>
                <CategoryFilter mb filter={filter} setFilter={setFilter} />

                <Bold mb>{s("category")}</Bold>
                <MiniCategoryFilter mb filter={filter} setFilter={setFilter} />

                <Flex between>
                    <Bold mb>{s("filter")}</Bold>
                    <JDtypho
                        weight={600}
                        color="grey3"
                        hover
                        onClick={() => {
                            setFilter({});
                        }}
                    >
                        {s("reset")}
                    </JDtypho>
                </Flex>
                <JDcard mode="border">
                    <DateFilter filter={filter} setFilter={setFilter} />
                    <JDhorizen margin={3} />
                    <PriceFilter filter={filter} setFilter={setFilter} />
                    <JDhorizen margin={3} />
                    <RatingFilter filter={filter} setFilter={setFilter} />
                    <JDhorizen margin={3} />
                    <RegionFilter filter={filter} setFilter={setFilter} />
                    <JDhorizen margin={3} />
                    <LanguageFilter filter={filter} setFilter={setFilter} />
                </JDcard>
            </div>
            <div className="GrandProductSearchFilter GrandProductSearchFilter--mb">
                <InputText
                    icon="search"
                    className="GrandProductSearchFilter__searchInput"
                    placeholder={s("searchWithKeyWard")}
                    {...searchHook}
                    mb
                    onKeyDown={whenEnter(toSearchPage)}
                />
                <ScrollBox>
                    <JDbutton mode="flat" onClick={handleOpenMobile("date")}>
                        {s("schedule")}
                    </JDbutton>
                    <JDbutton mode="flat" onClick={handleOpenMobile("price")}>
                        {s("price")}
                    </JDbutton>
                    <JDbutton mode="flat" onClick={handleOpenMobile("rating")}>
                        {s("rating")}
                    </JDbutton>
                    <JDbutton mode="flat" onClick={handleOpenMobile("region")}>
                        {s("region")}
                    </JDbutton>
                    <JDbutton mode="flat" onClick={handleOpenMobile("lang")}>
                        {s("lang")}
                    </JDbutton>
                </ScrollBox>
                <JDhorizen margin={1} />
                <MobileFootBox modalHook={modalHook as any}>
                    {mobileType === "lang" && (
                        <LanguageFilter filter={filter} setFilter={setFilter} />
                    )}
                    {mobileType === "region" && (
                        <RegionFilter filter={filter} setFilter={setFilter} />
                    )}
                    {mobileType === "rating" && (
                        <RatingFilter filter={filter} setFilter={setFilter} />
                    )}
                    {mobileType === "price" && (
                        <PriceFilter filter={filter} setFilter={setFilter} />
                    )}
                    {mobileType === "date" && (
                        <DateFilter filter={filter} setFilter={setFilter} />
                    )}
                </MobileFootBox>
            </div>
        </div>
    );
};
