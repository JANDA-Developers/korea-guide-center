import { Bold, Flex, JDalign, JDbutton } from "@janda-com/front";
import { useContext, useState } from "react";
import { AppContext } from "../../context/context";
import Horizen from "../horizen/Horizen";
import { JDicon } from "../icons/Icons";
import { mapRegion, mapRegionArr, regionableData } from "../koreaMap/KoreaData";
import { Photo } from "../photoFrame/PhotoFram";

interface IProp {
    region: mapRegion;
    onSelectRegion: (region: mapRegion) => void;
}

export const SelectRegionSector: React.FC<IProp> = ({
    region,
    onSelectRegion,
}) => {
    const [viewMoreText, setViewMoreText] = useState(false);
    const { l } = useContext(AppContext);

    const handleSelectRegion = (region: mapRegion) => () => {
        onSelectRegion(region);
    };

    return (
        <JDalign mr className="RegionDescriptionSecotr">
            {mapRegionArr.map((_region) => {
                const target =
                    regionableData[_region as keyof typeof regionableData];
                const isSelected = region === _region;
                return (
                    <JDbutton
                        onClick={handleSelectRegion(_region)}
                        className="RegionDescriptionSecotr__regionBtn"
                        mr="tiny"
                        mb="tiny"
                        padding="small"
                        mode={"flat"}
                        br="square"
                        size="small"
                        thema={isSelected ? "darkPrimary" : undefined}
                        style={{
                            backgroundColor: isSelected
                                ? undefined
                                : "transparent",
                        }}
                    >
                        {l(target.title)}
                    </JDbutton>
                );
            })}
        </JDalign>
    );
};
