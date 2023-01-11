import React from "react";

const AboutSectionDetailText = () => {
    return (
        <div className="bloc-texte">
            <h2>
                <span>
                    모처럼 찾은 한국여행 더욱 즐거운 여행, 더 안전한 여행,
                    새롭게 한국을 발견하는 여행을 지향합니다.
                </span>
            </h2>
            <p>
                더욱 즐거운 한국여행 더 안전한 한국여행 새롭게 한국을 발견하는
                여행을 위해 각 분야별 전문 가이드들이 여러분의 여행을 서포트
                합니다. 여행일정에 커미션투어, 쇼핑은 처음부터 없습니다. 한국
                여행 전문 프레너들과 프리미엄 가이드들이 자신의 재능을 발휘하여
                프라이빗 여행, 로컬 여행, 리얼한 한국을 경험해 보시기 바랍니다.
            </p>
        </div>
    );
};

export default React.memo(AboutSectionDetailText);
