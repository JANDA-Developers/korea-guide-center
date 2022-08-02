import { Flex, isEmpty, JDhorizen } from "@janda-com/front";
import { useContext } from "react";
import { Info2 } from "../../atom/Info";
import { GuideCircle2 } from "../guideCircle/GuideCircle";
import { AppContext } from "../../context/context";
import { Badges2 } from "../statusBadges/StatusBadges";
import { Introduce2 } from "../productDetailComponents/DetailNavCardIntroduce";
import { LineCutter } from "../../atom/LineCutter";

function GuideIntro({ item }) {
    const context = useContext(AppContext);
    const { s, l } = context;
    return (
        <div
            style={{
                display: "flex",
                marginBottom: "3vh",
                borderWidth: "1.3px",
                borderStyle: "solid",
                borderColor: "#D5CECE",
                width: "90vh",
                height: "200vh",
                backgroundColor: "",
                alignSelf: "center",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "21vh",
                }}
            >
                <GuideCircle2
                    mr
                    guideId={item._id}
                    guideProfile={item.profileImage.uri}
                />
                <br></br>
                <br></br>
                <br></br>
            </div>
            <div
                style={{
                    fontWeight: "bold",
                    marginTop: "3vh",
                    fontSize: "1.3em",
                    width: "620px",
                }}
            >
                {item.nickName}
                <JDhorizen margin={2} />
                <Flex mb column>
                    <Info2
                        typho={{
                            size: "tiny",
                        }}
                        mb="tiny"
                        hide={isEmpty(item?.regions)}
                        label={s("workArea")}
                        value={
                            <Badges2
                                mb="tiny"
                                mr="tiny"
                                className="detailNavCard__Badges"
                                items={item?.regions || []}
                            >
                                {(region) => l(region.label)}
                            </Badges2>
                        }
                    />
                    <Info2
                        mb="tiny"
                        label={s("useLanguage")}
                        hide={isEmpty(item?.langs)}
                        value={
                            <Badges2
                                mb="tiny"
                                mr="tiny"
                                className="detailNavCard__Badges"
                                items={item?.langs}
                            >
                                {(item) => s(item)}
                            </Badges2>
                        }
                    />

                    {item?.guideCategory && (
                        <Info2
                            mb="tiny"
                            label={s("guideType")}
                            hide={isEmpty(item?.guideCategory)}
                            value={
                                <Badges2
                                    className="detailNavCard__Badges"
                                    mb="tiny"
                                    mr="tiny"
                                    items={item?.guideCategory || []}
                                >
                                    {(guideCat) => l(guideCat.label)}
                                </Badges2>
                            }
                        />
                    )}
                    <Introduce2
                        children={
                            <LineCutter line={10}>
                                {l(item.introduce)}{" "}
                            </LineCutter>
                        }
                    />
                </Flex>
            </div>
        </div>
    );
}

export default GuideIntro;
