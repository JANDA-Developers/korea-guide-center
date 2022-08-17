import router from "next/router";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { Paths } from "../../pages/index[depre]";
import { Fuser } from "../../types/api";
import { IHorizenGriderProp } from "../horizenGrider/HorizenGrider";
import PopularGuideTalk from "./PopularGuideTalk";

interface IProp extends Partial<IHorizenGriderProp<Fuser>> {
    guides: Fuser[];
}

const PopularGuideList: React.FC<IProp> = ({ guides, ...props }) => {
    const { l } = useContext(AppContext);

    return (
        <div>
            {guides.map((item) => {
                return (
                    <>
                        <div className="regionGuides__popularGuide--container">
                            <div
                                className="regionGuides__popularGuide--profileImage"
                                style={{
                                    backgroundImage: `url(${item.profileImage?.uri})`,
                                }}
                                onClick={() => {
                                    router.push(Paths.profile + "/" + item._id);
                                }}
                            />
                            <div className="regionGuides__popularGuide--guideInfo">
                                <span className="regionGuides__popularGuide--guideName">
                                    {item.name}
                                </span>
                                <span className="regionGuides__popularGuide--guideDesc">
                                    {l(item.introduce).length >= 70
                                        ? l(item.introduce).slice(0, 70) + "..."
                                        : l(item.introduce)}
                                </span>
                                <PopularGuideTalk item={item} />
                            </div>
                        </div>
                        <hr
                            style={{
                                background: "#DDDDDD",
                                height: "2px",
                                border: "0",
                            }}
                        />
                    </>
                );
            })}
        </div>
    );
};

export default PopularGuideList;
