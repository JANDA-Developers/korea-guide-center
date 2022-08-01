import { JDhorizen } from "@janda-com/front";
import { GuideCircle2 } from "../guideCircle/GuideCircle";

function GuideIntro({ item }) {
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
                {item.name}
                <JDhorizen margin={2} />
            </div>
        </div>
    );
}

export default GuideIntro;
