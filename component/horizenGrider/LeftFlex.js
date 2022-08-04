import { Flex, IJDalignProp, JDbutton } from "@janda-com/front";
import router from "next/router";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { Paths } from "../../pages/index[depre]";
import { GuideCircle2 } from "../guideCircle/GuideCircle";

function LeftFlex({ item }) {
    const context = useContext(AppContext);
    const { s, l } = context;
    return (
        <Flex
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
                    br="square"
                >
                    {s("seeMoreAboutGuide")}
                </button>
            </Flex>
            <br></br>
        </Flex>
    );
}

export default LeftFlex;
