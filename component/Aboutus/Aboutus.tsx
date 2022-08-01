import styled from "styled-components";

const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 90vh;
    margin-top: 10.375rem;
`;

const AboutusTop = styled.div``;
const AboutusBot = styled.div`
    position: absolute;
    width: 100vw;
    height: 50vh;
    bottom: 0;
    background-color: #d0242b;
`;
const ImageContainer = styled.div`
    position: absolute;
    width: 100vw;
    display: flex;
    justify-content: center;
    top: 100px;
    z-index: 10;
`;

const ImageFirst = styled.div`
    width: 550px;
    height: 400px;
    margin-right: 30px;
    background-size: cover;
    color: white;
`;

const ImageSecond = styled.div`
    width: 550px;
    height: 400px;
    background-size: cover;
    color: white;
`;

const Aboutus = () => {
    return (
        <Container>
            <AboutusTop>
                <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
                    About us
                </h1>
            </AboutusTop>
            <ImageContainer>
                <ImageFirst
                    style={{
                        backgroundImage: `url("img/aboutus/aboutuscity.jpg" )`,
                    }}
                ></ImageFirst>
                <ImageSecond
                    style={{
                        backgroundImage: `url("img/aboutus/aboutusguide.jpg")`,
                    }}
                >
                    <div>코리아 가이드</div>
                    <div>자세히 알아보기</div>
                </ImageSecond>
            </ImageContainer>
            <AboutusBot>
                <div></div>
                <div></div>
            </AboutusBot>
        </Container>
    );
};

export default Aboutus;
