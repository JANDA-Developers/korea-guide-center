import styled from "styled-components";
import EmblaCarousel from "../EmblaCarousel/EmblaCarousel";

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const FindGuide = () => {
    return (
        <div className="findGuide__Container">
            <div className="findGuide__imageSliderContainer">
                <EmblaCarousel slides={slides} />
            </div>
            <div className="findGuide__textContainer">
                <h1 className="findGuide__title">파트너 가이드를 찾습니다.</h1>
                <p>
                    단순한 정보는 구글등 웹사이트만으로도 충분합니다. 사람의
                    여행에 통역 앱, 지도 앱, AI의 안내만으로는 소통, 체험,
                    교류등 궁극의 여행에 다 다를수 없습니다. ‘KoreaGuide’에서는
                    여러 가지 형태의 여행을 위해 전원이 국가고시 자격취득 전문
                    지식가이드가 안내합니다. 이제 한국여행도 'Korea Guide'를
                    선택하시면 획일적인 여행, 커미션베이스의 쇼핑과 옵션투어에서
                    벗어날 수 있습니다. 여행사가 가이드를 랜덤으로 배정하는
                    구조가 아닌 방문 목적, 취향중심의 맞춤 서비스로 지금까지의
                    패키지투어 가이드와는 다른 프리미엄 가이드투어를 경험해
                    보시기 바랍니다. 저렴하지는 않습니다. 그러나 그만큼 가치가
                    있는 여행이 될 것 입니다. 더 다양하게 행복한 세상을 위해
                    개인의 취향이 존중받고 여행의 다름을 인정받기 위해 다양한
                    한국여행을 만드는 회사 'KoreaGuide'입니다.
                </p>
                <button className="findGuide__button">가이드 등록하기</button>
            </div>
        </div>
    );
};

export default FindGuide;
