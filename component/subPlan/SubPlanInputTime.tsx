import { FsubPlan_time } from "../../types/api";

interface SubPlanInputTime {
    time: FsubPlan_time;
}

const SubPlanInputTime = ({ time }: SubPlanInputTime) => {
    return (
        <div className="JDinput-wrap undefined undefined JDstandard-small-space">
            <span className="JDlabel JDinput_label">
                <span className="JDlabel JDstandard-superTiny-mb">
                    시간(20자이하){" "}
                    <span className="JDtypho JDtextColor--point"></span>
                </span>
                <span className="JDtypho JDtextColor--point"></span>
            </span>
            <div className="JDinput__inside-wrap">
                <input
                    readOnly
                    type=""
                    data-color="1213"
                    className="JDinput JDinput--labeled"
                    maxLength={20}
                    placeholder="언어별 입력하기"
                    value=""
                />
                <span className="JDinput-iconWrap"></span>
            </div>
        </div>
    );
};

export default SubPlanInputTime;
