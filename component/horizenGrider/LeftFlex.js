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
                width: "21vh",
            }}
        >
            <GuideCircle2
                mr
                guideId={item._id}
                guideProfile={item.profileImage.uri}
            />
            <Flex style={{ width: "min-content", marginLeft: "15px" }}>
                <JDbutton
                    className="detailNavCard__jdButtonWidth"
                    onClick={() => {
                        router.push(Paths.profile + "/" + item._id);
                    }}
                    mb="small"
                    thema="lightPrimary"
                    size="tiny"
                    mode="flat"
                >
                    {s("seeMoreAboutGuide")}
                </JDbutton>
            </Flex>
            <br></br>
        </Flex>
    );
}

export default LeftFlex;
