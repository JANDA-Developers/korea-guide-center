/* --------------------------------- NAV_BAR --------------------------------- */
// http://react-day-picker.js.org/examples/elements-navbar
import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import { NavbarElementProps } from "react-day-picker";
import { JDicon } from "../../../component/icons/Icons";
import { JDalign } from "@janda-com/front";

export const JDMonthTextChanger = (Month: string | number): string => {
    if (Month === "December" || Month === 11) return "12";
    if (Month === "November" || Month === 10) return "11";
    if (Month === "October" || Month === 9) return "10";
    if (Month === "September" || Month === 8) return "9";
    if (Month === "August" || Month === 7) return "8";
    if (Month === "July" || Month === 6) return "7";
    if (Month === "June" || Month === 5) return "6";
    if (Month === "May" || Month === 4) return "5";
    if (Month === "April" || Month === 3) return "4";
    if (Month === "March" || Month === 2) return "3";
    if (Month === "February" || Month === 1) return "2";
    if (Month === "January" || Month === 0) return "1";
    console.error("JDMonthTextChanger Montalh is not 0~11");
    return "";
};

interface ICustomNavBarProp extends NavbarElementProps {
    viewMonthRange?: number;
    arrowOnly?: boolean;
}
const Navbar = ({
    arrowOnly,
    onPreviousClick,
    onNextClick,
    className,
    month,
    viewMonthRange,
}: ICustomNavBarProp) => {
    return (
        <JDalign
            flex={{
                between: true,
                vCenter: true,
            }}
            className={className}
        >
            <JDicon
                color="white"
                onClick={() => {
                    onPreviousClick();
                }}
                style={{
                    transform: "rotate(90deg)",
                }}
                size="small"
                icon="arrowSlim"
            />
            {arrowOnly}
            <div
                style={{
                    display: arrowOnly ? "none" : undefined,
                }}
            >
                {dayjs(month).format("YYYY MMM") +
                    (viewMonthRange || 1 > 1
                        ? "~" +
                          dayjs(month)
                              .add((viewMonthRange || 0) - 1, "month")
                              .format("YYYY MMM")
                        : "")}
            </div>
            <JDicon
                size="small"
                color="white"
                style={{
                    transform: "rotate(-90deg)",
                }}
                onClick={() => {
                    onNextClick();
                }}
                icon="arrowSlim"
            />
        </JDalign>
    );
};

Navbar.propTypes = {
    onPreviousClick: PropTypes.func,
    onNextClick: PropTypes.func,
    nextMonth: PropTypes.instanceOf(Date),
    previousMonth: PropTypes.instanceOf(Date),
    className: PropTypes.string,
    localeUtils: PropTypes.object,
};

Navbar.defaultProps = {
    onPreviousClick: () => {},
    onNextClick: () => {},
    nextMonth: new Date(),
    previousMonth: new Date(),
    className: "",
    localeUtils: {},
};

export default Navbar;
