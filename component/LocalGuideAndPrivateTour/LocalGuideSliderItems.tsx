import { useGlobalKoreaMap } from "../../hook/useKoreaMap";
import LocalGuideSliderItem from "./LocalGuideSliderItem";
import { ILocalGuideSliderItem } from "./LocalGuideSliderItem";

interface ILocalGuideSliderItemProps {
    items: ILocalGuideSliderItem[];
    offset: number;
    index: number;
}

const LocalGuideSliderItems = ({
    items,
    offset,
    index,
}: ILocalGuideSliderItemProps) => {
    const koreaHook = useGlobalKoreaMap();
    const { selectedGlobalRegion, onClick: selectGlobalRegion } = koreaHook;
    return (
        <>
            {items
                .slice(offset * index, offset * index + offset)
                .map((i, index) => {
                    return (
                        <LocalGuideSliderItem
                            item={i}
                            region={selectedGlobalRegion}
                            onSelectRegion={selectGlobalRegion}
                            selectedRegion={i.region}
                        />
                    );
                })}
        </>
    );
};

export default LocalGuideSliderItems;
