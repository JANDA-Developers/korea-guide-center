import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 35.25rem;
    margin-top: 9.375rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    margin-bottom: 9.375rem;
`;

const Youtube = styled.div``;

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const LogoAndText = styled.div`
    display: flex;
    align-items: center;
`;

const TitleText = styled.span`
    margin-left: 10px;
    font-weight: 600;
`;

const Instagram = styled.div``;

const Image = styled.div`
    width: 500px;
    height: 500px;
    background-color: red;
`;

const SubButton = styled.a`
    background-color: red;
    color: white;
    font-weight: 600;
    padding: 5px 20px;
    border-radius: 10px;
`;

const FollowButton = styled.a`
    background-color: #1877f2;
    color: white;
    font-weight: 600;
    padding: 5px 20px;
    border-radius: 10px;
`;

const SNS = () => {
    return (
        <Container>
            <Youtube>
                <Title>
                    <LogoAndText>
                        <img
                            src="img/sns/youtubeIcon.png"
                            width="45px"
                            height="35px"
                        />
                        <TitleText>코리아 가이드 유튜브</TitleText>
                    </LogoAndText>
                    <SubButton
                        href="https://www.youtube.com/channel/UCaqfo9iu08Nz53fri_oHmCQ/videos"
                        target="_blank"
                    >
                        구독하기
                    </SubButton>
                </Title>
                <Image />
            </Youtube>
            <Instagram>
                <Title>
                    <LogoAndText>
                        <img
                            src="img/sns/instagramIcon.png"
                            width="50px"
                            height="50px"
                        />
                        <TitleText>코리아 가이드 인스타그램</TitleText>
                    </LogoAndText>
                    <FollowButton
                        href="https://www.instagram.com/korea_guide_/"
                        target="_blank"
                    >
                        팔로우
                    </FollowButton>
                </Title>
                <Image />
            </Instagram>
        </Container>
    );
};

export default SNS;
