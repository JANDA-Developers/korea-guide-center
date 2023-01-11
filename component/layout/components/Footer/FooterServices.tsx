import React, { useContext } from "react";
import { AppContext } from "../../../../context/context";

const FooterServices = () => {
    const { s } = useContext(AppContext);
    return (
        <div className="col-25">
            <span className="footer-title"> {s("footerServices")}</span>
            <ul>
                <li>
                    <a
                        onClick={() => {
                            location.href = `/cities/search?title=DRIVING`;
                        }}
                    >
                        {s("ServicesDriving")}
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            location.href = `/cities/search?title=MICE`;
                        }}
                    >
                        {s("ServicesMICE")}
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            location.href = `/cities/search?title=통역`;
                        }}
                    >
                        {s("ServicesTranlate")}
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            location.href = `/cities/search?title=Barrier-Free`;
                        }}
                    >
                        {s("ServicesBarrierFree")}
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            location.href = `/cities/search?title=VIP의전`;
                        }}
                    >
                        {s("ServicesVIP")}
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            location.href = `/cities/search?title=의료관광`;
                        }}
                    >
                        {s("ServicesWellness")}
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            location.href = `/offer`;
                        }}
                    >
                        {s("ServicesPrivate")}
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            location.href = `/cities/search?title=부동산`;
                        }}
                    >
                        {s("ServicesRealEstate")}
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            location.href = `/cities/search?title=유학`;
                        }}
                    >
                        {s("ServicesStudyingAbroad")}
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            location.href = `/cities/search?title=장기체류`;
                        }}
                    >
                        {s("ServicesLongStay")}
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            location.href = `/cities/search?title=요리`;
                        }}
                    >
                        {s("ServicesCook")}
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            location.href = `cities/search?title=${s(
                                "ServicesCustom"
                            )}`;
                        }}
                    >
                        {s("ServicesCustom")}
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            location.href = `/cities/search?title=축제`;
                        }}
                    >
                        {s("ServicesLocalFestival")}
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default React.memo(FooterServices);
