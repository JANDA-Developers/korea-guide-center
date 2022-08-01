import React, { useContext } from "react";
import Link from "next/link";
import BookLayout from "../../component/layout/BookLayout";
import { Intro_svg } from "../../page/companyIntro/svg/intro_svg";
import { HistoryList } from "../../page/companyIntro/HistoryLists";
import { ImgList } from "../../page/companyIntro/ImgList";
import { AppContext } from "../../context/context";
import CountUp from "react-countup";

const Introduction = () => {
    const { s } = useContext(AppContext);

    const TourInfo = [
        {
            title: s("introGuideTourText"),
            detail: s("introGuideTour"),
            src: "/img/intro_body_1.jpg",
        },
        {
            title: s("introPackageText"),
            detail: s("introPackage"),
            src: "/img/intro_body_2.jpg",
        },
        {
            title: s("introCustomText"),
            detail: s("introCustom"),
            src: "/img/intro_body_3.jpg",
        },
    ];

    const HistoryRecords = [
        {
            year: s("theYear_2020"),
            list: [
                s("introCompanyHistory2020_1"),
                s("introCompanyHistory2020_2"),
                s("introCompanyHistory2020_3"),
                s("introCompanyHistory2020_4"),
            ],
        },
        {
            year: s("theYear_2021"),
            list: [
                s("introCompanyHistory2021_1"),
                s("introCompanyHistory2021_2"),
                s("introCompanyHistory2021_3"),
                s("introCompanyHistory2021_4"),
                s("introCompanyHistory2021_5"),
                s("introCompanyHistory2021_6"),
            ],
        },
        {
            year: s("theYear_2022"),
            list: [s("introCompanyHistory2022_1")],
        },
    ];

    return (
        <BookLayout>
            <div className="intro">
                <div className="introHeader">
                    <div className="introHeader__wrap">
                        <div className="introHeader__leftContext">
                            <h5 className="introHeader__leftTitle">
                                {s("introHeaderTitle")}
                            </h5>
                            <p className="introHeader__leftDetail">
                                {s("introHeaderExplain")}
                            </p>
                        </div>

                        <div className="introHeader__rightContext">
                            <div className="introHeader__circle">
                                <div className="introHeader__textWrap">
                                    <div className="introHeader__title">
                                        <h2 className="introHeader__rightTitle">
                                            {s("introGuideTourText")}
                                        </h2>
                                    </div>
                                    <div className="introHeader__subTitle">
                                        <div className="introHeader__subTitleWrap">
                                            <div className="introHeader__people">
                                                {s("introTourNumber")}
                                            </div>

                                            <div className="introHeader__count">
                                                {/* {s("introEveryYear")} */}
                                                <div className="introHeader__rightNumber">
                                                    <CountUp
                                                        duration={1.5}
                                                        end={142}
                                                    />
                                                </div>
                                                {s("introPeople")}
                                            </div>
                                        </div>
                                        <div className="introHeader__subTitleWrap">
                                            <div className="introHeader__people">
                                                {s("introGuideNumber")}
                                            </div>
                                            <div className="introHeader__count">
                                                {/* {s("introNationWide")} */}
                                                <div className="introHeader__rightNumber">
                                                    <CountUp
                                                        duration={1.5}
                                                        end={32}
                                                    />
                                                </div>

                                                {s("introPeople")}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="introSection">
                    <div className="introSection__introWrap">
                        <div className="introSection__company">
                            <h3 className="introSection__companyTitle">
                                {s("itsguide")}
                            </h3>
                        </div>
                        <div className="introSection__companyIntro">
                            <p className="introSection__companyDetail">
                                {s("introCompany")}
                            </p>
                        </div>
                        <div className="introSection__more">
                            <Link href={"#"}>
                                <a>
                                    <h5 className="introSection__moreText">
                                        MORE
                                    </h5>
                                </a>
                            </Link>
                        </div>

                        <div className="introSection__imgs">
                            <div className="introSection__imgWrap">
                                {TourInfo.map((tour, index) => (
                                    <ImgList
                                        title={tour.title}
                                        detail={tour.detail}
                                        src={tour.src}
                                        index={index}
                                    />
                                ))}

                                <div className="introSection__logoWrap">
                                    <Intro_svg
                                        className={"introSection__logo"}
                                        viewBox={"0 0 1499 233"}
                                        path={"intro"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="introFooter">
                    <div className="introFooter__textWrap">
                        <div className="introFooter__companyName">
                            <h4 className="introFooter__title">
                                {s("itsguide")}
                            </h4>
                        </div>
                        <div className="introFooter__companyHistory">
                            <h2 className="introFooter__historyTitle">
                                {s("introCompanyHistory")}
                            </h2>
                        </div>
                    </div>
                    <div className="introFooter__recordsWrap">
                        {HistoryRecords.map((title, index) => (
                            <HistoryList
                                year={title.year}
                                list={title.list}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
                {/* </div> */}
            </div>
        </BookLayout>
    );
};
export default Introduction;
