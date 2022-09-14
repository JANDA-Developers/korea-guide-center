import { useRouter } from "next/router";
import { mapRegion, regionableData } from "../koreaMap/KoreaData";
import { Paths } from "../../pages/index[depre]";

export interface ILocalGuideSliderItem {
    title: string;
    desc: string;
    imageUrl: string;
    region: string;
}

interface IGuideSliderItemProps {
    item: ILocalGuideSliderItem;
    onSelectRegion: (region: mapRegion) => void;
    region: mapRegion;
    selectedRegion: string;
}

const LocalGuideSliderItem = ({
    item,
    onSelectRegion,
    region,
    selectedRegion,
}: IGuideSliderItemProps) => {
    const data = regionableData[region];
    const router = useRouter();
    const { title, description, photos } = data;
    const handleSelectRegion = (region: any) => {
        onSelectRegion(region);
    };

    return (
        <div className="slider__ShortSliderItems">
            <img src={`${item.imageUrl}`} className="region__bgImage" />
            <div className="region__contents">
                <h5 className="region__RegionSliderItemTitle">{item.title}</h5>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <span
                        style={{
                            color: "white",
                            fontWeight: "bold",
                            marginBottom: "5px",
                            textShadow: "2px 2px 2px gray",
                        }}
                    >
                        {item.desc}
                    </span>
                    <button
                        className="region__RegionDetailButton"
                        onClick={() => {
                            handleSelectRegion(selectedRegion);
                            router.push(Paths.locationalGuide);
                        }}
                    >
                        둘러보기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LocalGuideSliderItem;
