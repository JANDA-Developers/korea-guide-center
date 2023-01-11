import React from "react";

const MiddleText = () => {
    return (
        <div className="content-wrapper bloc bloc-small bloc-texte bloc-texte-homepage aligncenter">
            <h2>우리는 코리아가이드 입니다</h2>
            <p>
                <strong>여행의 시작부터 끝까지 코리아가이드와 함께!</strong>
                <br />
                가이드와 함께 대한민국 전역의 여행지에서 특별한 추억을
                만들어보세요.
            </p>
        </div>
    );
};

export default React.memo(MiddleText);
