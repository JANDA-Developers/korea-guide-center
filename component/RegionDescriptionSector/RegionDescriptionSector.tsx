import {
    Bold,
    Flex,
    JDalign,
    JDbutton,
    JDhorizen,
    Small,
} from "@janda-com/front";
import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { cutStr } from "../../utils/cutStr";
import Horizen from "../horizen/Horizen";
import { JDicon } from "../icons/Icons";
import { mapRegion, mapRegionArr, regionableData } from "../koreaMap/KoreaData";
import { Photo } from "../photoFrame/PhotoFram";
import { SeeMore } from "../../atom/SeeMore";

interface IProp {
    region: mapRegion;
    onSelectRegion: (region: mapRegion) => void;
}

export const RegionDescriptionSecotr: React.FC<IProp> = ({
    region,
    onSelectRegion,
}) => {
    const [viewMoreText, setViewMoreText] = useState(false);
    const { l } = useContext(AppContext);
    const data = regionableData[region];
    const { title, description, photos } = data;

    const handleSelectRegion = (region: mapRegion) => () => {
        onSelectRegion(region);
    };

    return (
        <JDalign mr className="RegionDescriptionSecotr">
            <Flex vCenter mb="huge">
                <JDicon color="darkPrimary" mr size="large" icon="flag" />
                <Bold color="darkPrimary" size="h3">
                    {l(title as any)}
                </Bold>
            </Flex>
            <Small
                weight={700}
                className="textTransformClear"
                color="darkPrimary"
                style={{
                    whiteSpace: "pre-line",
                    fontSize: "0.95rem",
                }}
                dangerouslySetInnerHTML={{
                    __html: cutStr(
                        l(description as any),
                        viewMoreText ? 9999 : 400
                    ),
                }}
            />
            {!viewMoreText && (
                <SeeMore
                    size="small"
                    color="primary"
                    onSeeMore={() => {
                        setViewMoreText(true);
                    }}
                />
            )}
            <Flex>
                {photos.map((photo) => (
                    <div className="RegionDescriptionSecotr__photo">
                        <Photo src={photo} />
                    </div>
                ))}
            </Flex>
            <Horizen
                className="JDbgColor--darkPrimary"
                margin={3}
                color="primary"
                height={3}
                br={5}
            />
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
