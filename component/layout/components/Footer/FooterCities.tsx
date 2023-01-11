import React, { useContext } from "react";
import { AppContext } from "../../../../context/context";

const FooterCities = () => {
    const { s } = useContext(AppContext);
    return (
        <div className="col-50 footer-columns">
            <span className="footer-title"> {s("footerCities")}</span>
            <ul>
                <li>
                    <a
                        onClick={() => {
                            location.href = `/cities/search?title=서울`;
                        }}
                    >
                        {s("citySeoul")}
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            location.href = `/cities/search?title=인천`;
                        }}
                    >
                        {s("cityIncheon")}
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            location.href = `/cities/search?title=부산`;
                        }}
                    >
                        {s("cityBusan")}
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            location.href = `/cities/search?title=대구`;
                        }}
                    >
                        {s("cityDaegu")}
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            location.href = `/cities/search?title=울산`;
                        }}
                    >
                        {s("cityUlsan")}
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            location.href = `/cities/search?title=대전`;
                        }}
                    >
                        {s("cityDaejeon")}
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            location.href = `/cities/search?title=제주`;
                        }}
                    >
                        {s("cityJeju")}
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            location.href = `/cities/search?title=광주`;
                        }}
                    >
                        {s("cityGwangju")}
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            location.href = `/cities/search?title=세종`;
                        }}
                    >
                        {s("citySejong")}
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            location.href = `/cities/search?title=경기`;
                        }}
                    >
                        {s("cityGyeonggi")}
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            location.href = `/cities/search?title=강원`;
                        }}
                    >
                        {s("cityGangwon")}
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            location.href = `/cities/search?title=충북`;
                        }}
                    >
                        {s("cityNorthChungCheon")}
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            location.href = `/cities/search?title=충남`;
                        }}
                    >
                        {s("citySouthChungCheon")}
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            location.href = `/cities/search?title=경북`;
                        }}
                    >
                        {s("cityNorthGyeonSang")}
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            location.href = `/cities/search?title=경남`;
                        }}
                    >
                        {s("citySouthGyeonSang")}
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            location.href = `/cities/search?title=전북`;
                        }}
                    >
                        {s("cityNorthJeonla")}
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            location.href = `/cities/search?title=전남`;
                        }}
                    >
                        {s("citySouthJeonla")}
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            location.href = `/cities/search?title=dmz`;
                        }}
                    >
                        DMZ
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default React.memo(FooterCities);
