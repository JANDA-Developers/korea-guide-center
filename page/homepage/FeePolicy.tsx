import { JDcard, JDcontainer, toast, WindowSize } from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { CardBtn } from "../../component/btns/ModalBtn";
import { PageHeader } from "../../component/pageHeader/PageHeader";
import { AppContext } from "../../context/context";
import { useFeepolicy } from "../../hook/useFeepolicy";
import { useHomepageManage } from "../../hook/useHomepage";
import { omitsAuto } from "../../utils/omit";
import { FeeForms } from "./components/FeeForm";

interface IProp {}

export const FeePolicy: React.FC<IProp> = () => {
    const { homepage } = useContext(AppContext);
    const [updateHomepage] = useHomepageManage({
        skipMessage: true,
        onCompleteSucess: () => {
            toast.success("수수료 항목이 변경되었습니다");
        },
    });
    const { feePolicies: defaultPolicies } = homepage || {};
    const { feePolicies, setFeePolicies } = useFeepolicy(defaultPolicies || []);

    const handleSave = () => {
        updateHomepage({
            variables: {
                input: {
                    feePolicies: omitsAuto(feePolicies),
                },
            },
        });
    };

    return (
        <JDcontainer size={WindowSize.full} verticalPadding>
            <PageHeader
                title="수수료 항목 조정"
                pageName="수루료 금액 및 항목 조정"
                description="정산 신청요청이 끝난 투어들에는 반영되지 않습니다"
            />
            <JDcard
                foot={
                    <CardBtn thema="primary" onClick={handleSave}>
                        수정하기
                    </CardBtn>
                }
            >
                <FeeForms feePolicies={feePolicies} onChange={setFeePolicies} />
            </JDcard>
        </JDcontainer>
    );
};
