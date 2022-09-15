import { Flex, IJDalignProp, JDbutton } from "@janda-com/front";
import router from "next/router";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { Paths } from "../../pages/index[depre]";
import { GuideCircle2 } from "../guideCircle/GuideCircle";

function LeftFlex({ item }: any) {
    const context = useContext(AppContext);
    const { s, l } = context;
    return (
        <Flex
            className="regionGuides__avatar"
            style={{
                flexDirection: "column",
                width: "210px",
            }}
        >
            <GuideCircle2
                mr
                guideId={item._id}
                guideProfile={item.profileImage.uri}
            />
            <Flex
                className="regionGuides__avater--button"
                style={{
                    width: "min-content",
                    marginLeft: "24px",
                    marginBottom: "15px",
                }}
            >
                <button
                    className="detailNavCard__jdButtonWidth2"
                    onClick={() => {
                        router.push(Paths.profile + "/" + item._id);
                    }}
                >
                    {s("seeMoreAboutGuide")}
                </button>
            </Flex>
            <br></br>
        </Flex>
    );
}

export default LeftFlex;
