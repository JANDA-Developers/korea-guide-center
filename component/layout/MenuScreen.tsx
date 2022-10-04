import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { InputText, useInput } from "@janda-com/front";
import { whenEnter } from "../../utils/whenEnter";
import { AutoCompeletePreventer } from "../AutoCompeltePreventer/AutoCompletePreventer";
import { searchPageQueryGenerate } from "../../pages/product/search";
import { useState, useContext, SyntheticEvent } from "react";
import { AppContext } from "../../context/context";
import { mapRegion, regionableData, mapRegionArr } from "../koreaMap/KoreaData";
import { useRouter } from "next/router";
import { useCitiesKoreaMap } from "../../hook/useKoreaMap";

const Container = styled(motion.div)`
    display: flex;
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: white;
    z-index: 100;
    overflow-y: hidden;
`;

const CloseButton = styled.button`
    all: unset;
    background-color: "white";
    cursor: pointer;
`;

const SideNav = styled.div`
    background-color: #d0242b;
    width: 20%;
    height: 100%;
`;

const SearchAndCities = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const SideNavItem = styled.div<{ kind: string; isSelected?: boolean }>`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 5rem;
    padding: 0rem 1.875rem;
    color: white;
    font-size: ${(props) => (props.kind === "small" ? "1.125rem" : "1.875rem")};
    cursor: ${(props) => (props.kind === "small" ? "normal" : "pointer")};
    transition: background-color 0.2s linear;
    background-color: ${(props) =>
        props.isSelected ? "rgba(255, 255, 255, 0.3);" : "none"};
    border-left: ${(props) => (props.isSelected ? "3px solid white" : "none")};
    &:hover {
        background-color: ${(props) =>
            props.kind === "small" ? "none" : "rgba(255, 255, 255, 0.3);"};
        border-left: ${(props) =>
            props.kind === "small" ? "none" : "3px solid white"};
    }
`;

const CityContainer = styled(motion.div)`
    width: auto;
    height: 100%;
    box-sizing: border-box;
    overflow-y: auto;
`;

const CitySet = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

const City = styled.div<{ background?: string }>`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 22rem;
    cursor: pointer;
    background-image: url(${(props) => props.background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
    text-shadow: 1px 1px 1px #000;
`;

const SearchBar = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    height: 5rem;
    box-sizing: border-box;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const SearchIcon = styled.svg`
    margin: 0px 25px;
`;

const XmarkIcon = styled.svg`
    margin: 0px 25px;
`;

const menu = {
    entry: { x: 2500, opacity: 1 },
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.8,
        },
    },
};

interface IMenuScreenProps {
    menuOpen?: boolean;
    onClickMenu?: () => void;
    setMenuOpen?: any;
}

function MenuScreen({ onClickMenu, menuOpen }: IMenuScreenProps) {
    const router = useRouter();
    const [view, setView] = useState({
        cities: true,
        partnerNetwork: false,
        searchBar: false,
    });
    const { s, l } = useContext(AppContext);
    const searchHook = useInput("");
    const toSearchPage = () => {
        const to = searchPageQueryGenerate({ title: searchHook.value });
        location.href = to;
        // router.push(to);
    };
    const citiesKoreaMap = useCitiesKoreaMap();
    const { onClick: selectCitiesRegion } = citiesKoreaMap;
    const onSearchFocus = () => {
        setView({
            cities: false,
            partnerNetwork: false,
            searchBar: true,
        });
    };

    const onClickMenus = (event: SyntheticEvent) => {
        if (event.currentTarget.id === "cities") {
            setView({
                cities: true,
                partnerNetwork: false,
                searchBar: false,
            });
        } else if (event.currentTarget.id === "partnerNetwork") {
            setView({
                cities: false,
                partnerNetwork: true,
                searchBar: false,
            });
        }
    };

    return (
        <AnimatePresence>
            {menuOpen ? (
                <Container
                    key="menu"
                    variants={menu}
                    initial="entry"
                    animate="center"
                    exit="exit"
                >
                    <SideNav>
                        {/* 여기 있는 언어들 대표님께 어떤 문구로 채울지 여쭤보기 */}
                        <SideNavItem kind="small">Menu</SideNavItem>
                        <SideNavItem
                            kind="medium"
                            id="cities"
                            onClick={onClickMenus}
                            isSelected={view.cities}
                        >
                            도시
                        </SideNavItem>
                        {/* <SideNavItem
                            kind="medium"
                            id="partnerNetwork"
                            onClick={onClickMenus}
                        >
                            Partner Network
                        </SideNavItem>
                        <SideNavItem kind="medium">Blog</SideNavItem>
                        <SideNavItem kind="medium">Guide With us</SideNavItem> */}
                    </SideNav>
                    <SearchAndCities>
                        <SearchBar>
                            <SearchIcon
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                width="28"
                                height="28"
                            >
                                <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
                            </SearchIcon>
                            <InputText
                                onFocus={onSearchFocus}
                                type="text"
                                autoComplete="false"
                                className="bookHeader__searchInput"
                                placeholder={s("searchWithKeyWard")}
                                {...searchHook}
                                onKeyDown={whenEnter(toSearchPage)}
                            />
                            <AutoCompeletePreventer />
                            <CloseButton onClick={onClickMenu}>
                                <XmarkIcon
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    width="30"
                                    height="30"
                                >
                                    <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                                </XmarkIcon>
                            </CloseButton>
                        </SearchBar>
                        {view.cities ? (
                            <CityContainer>
                                <CitySet>
                                    <City
                                        background="/img/cities/seoul.jpg"
                                        onClick={() => {
                                            location.href = `/cities/search?title=서울`;
                                        }}
                                    >
                                        {l(
                                            regionableData[
                                                mapRegion.seoul as keyof typeof regionableData
                                            ].title
                                        )}
                                    </City>
                                    <City
                                        background="/img/cities/busan.jpg"
                                        onClick={() => {
                                            location.href = `/cities/search?title=부산`;
                                        }}
                                    >
                                        {l(
                                            regionableData[
                                                mapRegion.busan as keyof typeof regionableData
                                            ].title
                                        )}
                                    </City>
                                    <City
                                        background="/img/cities/daegu.jpg"
                                        onClick={() => {
                                            location.href = `/cities/search?title=대구`;
                                        }}
                                    >
                                        {l(
                                            regionableData[
                                                mapRegion.daegu as keyof typeof regionableData
                                            ].title
                                        )}
                                    </City>
                                </CitySet>
                                <CitySet>
                                    <City
                                        background="/img/cities/Incheon.jpg"
                                        onClick={() => {
                                            location.href = `/cities/search?title=인천`;
                                        }}
                                    >
                                        {l(
                                            regionableData[
                                                mapRegion.Incheon as keyof typeof regionableData
                                            ].title
                                        )}
                                    </City>
                                    <City
                                        background="/img/cities/Gwangju.jpg"
                                        onClick={() => {
                                            location.href = `/cities/search?title=광주`;
                                        }}
                                    >
                                        {l(
                                            regionableData[
                                                mapRegion.Gwangju as keyof typeof regionableData
                                            ].title
                                        )}
                                    </City>
                                    <City
                                        background="/img/cities/Daejeon.jpg"
                                        onClick={() => {
                                            location.href = `/cities/search?title=대전`;
                                        }}
                                    >
                                        {l(
                                            regionableData[
                                                mapRegion.Daejeon as keyof typeof regionableData
                                            ].title
                                        )}
                                    </City>
                                </CitySet>
                                <CitySet>
                                    <City
                                        background="/img/cities/Ulsan.jpg"
                                        onClick={() => {
                                            location.href = `/cities/search?title=울산`;
                                        }}
                                    >
                                        {l(
                                            regionableData[
                                                mapRegion.Ulsan as keyof typeof regionableData
                                            ].title
                                        )}
                                    </City>
                                    <City
                                        background="/img/cities/Sejong.jpg"
                                        onClick={() => {
                                            location.href = `/cities/search?title=세종`;
                                        }}
                                    >
                                        {l(
                                            regionableData[
                                                mapRegion.Sejong as keyof typeof regionableData
                                            ].title
                                        )}
                                    </City>
                                    <City
                                        background="/img/cities/Jeju.jpg"
                                        onClick={() => {
                                            location.href = `/cities/search?title=제주`;
                                        }}
                                    >
                                        {l(
                                            regionableData[
                                                mapRegion.Jeju as keyof typeof regionableData
                                            ].title
                                        )}
                                    </City>
                                </CitySet>
                                <CitySet>
                                    <City
                                        background="/img/cities/SouthGyeongsang.jpg"
                                        onClick={() => {
                                            location.href = `/cities/search?title=경남`;
                                        }}
                                    >
                                        {l(
                                            regionableData[
                                                mapRegion.SouthGyeongsang as keyof typeof regionableData
                                            ].title
                                        )}
                                    </City>
                                    <City
                                        background="/img/cities/NorthGyeongsang.jpg"
                                        onClick={() => {
                                            location.href = `/cities/search?title=경북`;
                                        }}
                                    >
                                        {l(
                                            regionableData[
                                                mapRegion.NorthGyeongsang as keyof typeof regionableData
                                            ].title
                                        )}
                                    </City>
                                    <City
                                        background="/img/cities/SouthJeolla.jpg"
                                        onClick={() => {
                                            location.href = `/cities/search?title=전남`;
                                        }}
                                    >
                                        {l(
                                            regionableData[
                                                mapRegion.SouthJeolla as keyof typeof regionableData
                                            ].title
                                        )}
                                    </City>
                                </CitySet>
                                <CitySet>
                                    <City
                                        background="/img/cities/NorthJeolla.jpg"
                                        onClick={() => {
                                            location.href = `/cities/search?title=전북`;
                                        }}
                                    >
                                        {l(
                                            regionableData[
                                                mapRegion.NorthJeolla as keyof typeof regionableData
                                            ].title
                                        )}
                                    </City>
                                    <City
                                        background="/img/cities/SouthChungcheong.jpg"
                                        onClick={() => {
                                            location.href = `/cities/search?title=충남`;
                                        }}
                                    >
                                        {l(
                                            regionableData[
                                                mapRegion.SouthChungcheong as keyof typeof regionableData
                                            ].title
                                        )}
                                    </City>
                                    <City
                                        background="/img/cities/NorthChungcheong.jpg"
                                        onClick={() => {
                                            location.href = `/cities/search?title=충북`;
                                        }}
                                    >
                                        {l(
                                            regionableData[
                                                mapRegion.NorthChungcheong as keyof typeof regionableData
                                            ].title
                                        )}
                                    </City>
                                </CitySet>
                                <CitySet>
                                    <City
                                        background="/img/cities/Gangwon.jpg"
                                        onClick={() => {
                                            location.href = `/cities/search?title=강원`;
                                        }}
                                    >
                                        {l(
                                            regionableData[
                                                mapRegion.Gangwon as keyof typeof regionableData
                                            ].title
                                        )}
                                    </City>
                                    <City
                                        background="/img/cities/Gyeonggi.jpg"
                                        onClick={() => {
                                            location.href = `/cities/search?title=경기`;
                                        }}
                                    >
                                        {l(
                                            regionableData[
                                                mapRegion.Gyeonggi as keyof typeof regionableData
                                            ].title
                                        )}
                                    </City>
                                    <City></City>
                                </CitySet>
                            </CityContainer>
                        ) : view.partnerNetwork ? (
                            "파트너 네트웤"
                        ) : null}
                    </SearchAndCities>
                </Container>
            ) : null}
        </AnimatePresence>
    );
}

export default MenuScreen;
