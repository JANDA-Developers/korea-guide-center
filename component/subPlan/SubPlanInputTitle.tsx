import { useContext } from "react";
import GuideContext from "../../page/context";
import { FsubPlan_title } from "../../types/api";

interface SubPlanInputTitleProps {
    title: FsubPlan_title;
}

const SubPlanInputTitle = ({ title }: SubPlanInputTitleProps) => {
    const { globalModalHook: __globalModalHook } = useContext(GuideContext);
    const globalModalHook = __globalModalHook;

    const handleChange = () => {
        globalModalHook.openModal({});
    };

    return (
        <div
            className="JDinput-wrap undefined undefined JDstandard-space"
            onClick={handleChange}
        >
            <span className="JDlabel JDinput_label">
                <span className="JDlabel JDstandard-superTiny-mb">
                    타이틀(40자이하){" "}
                    <span className="JDtypho JDtextColor--point">*필수</span>
                </span>
                <span className="JDtypho JDtextColor--point"></span>
            </span>
            <div className="JDinput__inside-wrap">
                <input
                    readOnly
                    type=""
                    data-color="1213"
                    className="JDinput JDinput--labeled"
                    maxLength={40}
                    placeholder="언어별 입력하기"
                    value=""
                />
                <span className="JDinput-iconWrap"></span>
            </div>
        </div>
    );
};

export default SubPlanInputTitle;
