import { ITS_GUIDE_LOGO } from "../../types/const";

function LogoComponent() {
    return (
        <div className="detailNavCard__logoComponent">
            <img
                className="detailNavCard__img"
                src={location.origin + ITS_GUIDE_LOGO}
            ></img>
            <div className="detailNavCard__logobox">코리아 가이드</div>
        </div>
    );
}

export default LogoComponent;
