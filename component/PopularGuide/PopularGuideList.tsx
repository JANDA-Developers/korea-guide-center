import { useContext } from "react";
import { AppContext } from "../../context/context";
import { Fuser } from "../../types/api";
import { IHorizenGriderProp } from "../horizenGrider/HorizenGrider";

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
                            />
                            <div className="regionGuides__popularGuide--guideInfo">
                                <span className="regionGuides__popularGuide--guideName">
                                    {item.name}
                                </span>
                                <span className="regionGuides__popularGuide--guideDesc">
                                    {l(item.introduce).length >= 100
                                        ? l(item.introduce).slice(0, 100) +
                                          "..."
                                        : l(item.introduce)}
                                </span>
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
