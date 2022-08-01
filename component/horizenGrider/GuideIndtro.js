import { GuideCircle2 } from "../guideCircle/GuideCircle";

function GuideIntro({ item }) {
    return (
        <div
            style={{
                display: "flex",
                marginBottom: "3vh",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#D5CECE",
                width: "100vh",
                height: "50vh",
                backgroundColor: "",
                alignSelf: "center",
            }}
        >
            <GuideCircle2
                mr
                guideId={item._id}
                guideProfile={item.profileImage.uri}
            />
            {item._id}
            {item.profileImage.uri}
            123123
        </div>
    );
}

export default GuideIntro;
