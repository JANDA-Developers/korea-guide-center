import { FsubPlan_description } from "../../types/api";

interface SubPlanInputContents {
    contents: FsubPlan_description;
}

const SubPlanInputContent = ({ contents }: SubPlanInputContents) => {
    return (
        <div className="JDinput-wrap undefined undefined JDstandard-margin-bottom">
            <textarea
                className="JDtextarea JDtextarea--labeled JDtextarea03f5"
                readOnly
                placeholder="언어별 입력하기"
                maxLength={500}
            ></textarea>
            <label htmlFor="JDtextarea" className="JDtextarea_label">
                <span className="JDlabel JDstandard-superTiny-mb">
                    일정내용 (500자이하){" "}
                    <span className="JDtypho JDtextColor--point"></span>
                </span>
            </label>
        </div>
    );
};

export default SubPlanInputContent;
