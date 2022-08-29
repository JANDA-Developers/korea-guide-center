import { Paths } from "../../pages/index[depre]";
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../../context/context";

const Aboutus = () => {
    const { s } = useContext(AppContext);
    return (
        <div className="aboutUs__Container">
            <div className="aboutUs__top">
                <h5 style={{ textAlign: "center", fontWeight: "bold" }}>
                    <span
                        style={{
                            color: "#d0242b",
                        }}
                    >
                        About
                    </span>{" "}
                    KoreaGuide
                </h5>
            </div>
            <div className="aboutUs__imageContainer">
                <div
                    className="aboutUs__imageFirst"
                    style={{
                        backgroundImage: `url("img/aboutus/aboutuscity.jpg" )`,
                    }}
                />
                <div
                    className="aboutUs__imageSecond"
                    style={{
                        backgroundImage: `url("img/aboutus/aboutusguide.jpg")`,
                    }}
                >
                    <div className="aboutUs__imageTextBox">
                        <span className="aboutUs__imageTextTop">
                            {s("aboutKoreaGuide")}
                        </span>
                        <span className="aboutUs__imageTextBottom">
                            <Link href={Paths.companyIntroduction}>
                                <a>{s("aboutKoreaGuideDetail")}</a>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
            <div className="aboutUs__bottomContainer">
                <div className="aboutUs__bottomLeft">
                    <div
                        style={{
                            marginLeft: "50px",
                        }}
                    >
                        <div className="aboutUs__bottomLeftTop">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                width="45px"
                                height="45px"
                                fill="rgb(128, 128, 128)"
                                style={{
                                    marginRight: "20px",
                                }}
                            >
                                <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM57.71 192.1L67.07 209.4C75.36 223.9 88.99 234.6 105.1 239.2L162.1 255.7C180.2 260.6 192 276.3 192 294.2V334.1C192 345.1 198.2 355.1 208 359.1C217.8 364.9 224 374.9 224 385.9V424.9C224 440.5 238.9 451.7 253.9 447.4C270.1 442.8 282.5 429.1 286.6 413.7L289.4 402.5C293.6 385.6 304.6 371.1 319.7 362.4L327.8 357.8C342.8 349.3 352 333.4 352 316.1V307.9C352 295.1 346.9 282.9 337.9 273.9L334.1 270.1C325.1 261.1 312.8 255.1 300.1 255.1H256.1C245.9 255.1 234.9 253.1 225.2 247.6L190.7 227.8C186.4 225.4 183.1 221.4 181.6 216.7C178.4 207.1 182.7 196.7 191.7 192.1L197.7 189.2C204.3 185.9 211.9 185.3 218.1 187.7L242.2 195.4C250.3 198.1 259.3 195 264.1 187.9C268.8 180.8 268.3 171.5 262.9 165L249.3 148.8C239.3 136.8 239.4 119.3 249.6 107.5L265.3 89.12C274.1 78.85 275.5 64.16 268.8 52.42L266.4 48.26C262.1 48.09 259.5 48 256 48C163.1 48 84.4 108.9 57.71 192.1L57.71 192.1zM437.6 154.5L412 164.8C396.3 171.1 388.2 188.5 393.5 204.6L410.4 255.3C413.9 265.7 422.4 273.6 433 276.3L462.2 283.5C463.4 274.5 464 265.3 464 256C464 219.2 454.4 184.6 437.6 154.5H437.6z" />
                            </svg>
                            <span className="aboutUs__bottomLeftText">
                                {s("aboutKoreaGuideAmazingCities")}
                            </span>
                        </div>
                        <div className="aboutUs__bottomLeftBottom">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                                width="45px"
                                height="45px"
                                fill="rgb(128, 128, 128)"
                                style={{
                                    marginRight: "20px",
                                }}
                            >
                                <path d="M288 358.3c13.98-8.088 17.53-30.04 28.88-41.39c11.35-11.35 33.3-14.88 41.39-28.87c7.98-13.79 .1658-34.54 4.373-50.29C366.7 222.5 383.1 208.5 383.1 192c0-16.5-17.27-30.52-21.34-45.73c-4.207-15.75 3.612-36.5-4.365-50.29c-8.086-13.98-30.03-17.52-41.38-28.87c-11.35-11.35-14.89-33.3-28.87-41.39c-13.79-7.979-34.54-.1637-50.29-4.375C222.5 17.27 208.5 0 192 0C175.5 0 161.5 17.27 146.3 21.34C130.5 25.54 109.8 17.73 95.98 25.7C82 33.79 78.46 55.74 67.11 67.08C55.77 78.43 33.81 81.97 25.72 95.95C17.74 109.7 25.56 130.5 21.35 146.2C17.27 161.5 .0008 175.5 .0008 192c0 16.5 17.27 30.52 21.34 45.73c4.207 15.75-3.615 36.5 4.361 50.29C33.8 302 55.74 305.5 67.08 316.9c11.35 11.35 14.89 33.3 28.88 41.4c13.79 7.979 34.53 .1582 50.28 4.369C161.5 366.7 175.5 384 192 384c16.5 0 30.52-17.27 45.74-21.34C253.5 358.5 274.2 366.3 288 358.3zM112 192c0-44.27 35.81-80 80-80s80 35.73 80 80c0 44.17-35.81 80-80 80S112 236.2 112 192zM1.719 433.2c-3.25 8.188-1.781 17.48 3.875 24.25c5.656 6.75 14.53 9.898 23.12 8.148l45.19-9.035l21.43 42.27C99.46 507 107.6 512 116.7 512c.3438 0 .6641-.0117 1.008-.0273c9.5-.375 17.65-6.082 21.24-14.88l33.58-82.08c-53.71-4.639-102-28.12-138.2-63.95L1.719 433.2zM349.6 351.1c-36.15 35.83-84.45 59.31-138.2 63.95l33.58 82.08c3.594 8.797 11.74 14.5 21.24 14.88C266.6 511.1 266.1 512 267.3 512c9.094 0 17.23-4.973 21.35-13.14l21.43-42.28l45.19 9.035c8.594 1.75 17.47-1.398 23.12-8.148c5.656-6.766 7.125-16.06 3.875-24.25L349.6 351.1z" />
                            </svg>
                            <span className="aboutUs__bottomLeftText">
                                {s("aboutKoreaGuideHighTour")}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="aboutUs__bottomRight">
                    <div className="aboutUs__bottomRightTop">
                        <p>{s("aboutKoreaGuideTop")}</p>
                        <div className="aboutUs__whiteLine" />
                    </div>
                    <div className="aboutUs__bottomRightBottom">
                        <p>{s("aboutKoreaGuideBottom")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;
