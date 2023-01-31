import { IJDalignProp } from "@janda-com/front";
import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import styled from "styled-components";
import { mapRegion, regionableData } from "../koreaMap/KoreaData";

const ItemList = styled.ul`
    z-index: 20;
    position: absolute;
    height: 300px;
    top: 44px;
    overflow-y: scroll;
`;

const Item = styled.li`
    box-sizing: border-box;
    display: flex;
    padding-left: 25px;
    align-items: center;
    width: 165px;
    height: 45px;
    background-color: #d0242b;
    color: white;
    border-top: 0.5px rgba(255, 255, 255, 0.3) solid;
    cursor: pointer;

    &:hover {
        background-color: #a02024;
    }
`;

interface IProp extends IJDalignProp {}

export const CitySelecter: React.FC<IProp> = ({ ...props }) => {
    const [open, setOpen] = useState(false);
    const { s, l, locale } = useContext(AppContext);

    return (
        <div className="citySelector__dropDownContainer">
            <div
                className="citySelector__dropDown"
                onClick={() => setOpen(!open)}
            >
                <div className="citySelector__textBox">
                    <span>{s("selectCity")}</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        width="16"
                        height="16"
                    >
                        <path
                            fill="white"
                            d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"
                        />
                    </svg>
                </div>
            </div>
            {open && (
                <ItemList>
                    <Item
                        onClick={() => {
                            location.href = `${locale}/cities/search?title=${
                                regionableData[
                                    mapRegion.seoul as keyof typeof regionableData
                                ].queryTitle![
                                    locale! as "ko" | "en" | "ja" | "chi"
                                ]
                            }`;
                        }}
                    >
                        {l(
                            regionableData[
                                mapRegion.seoul as keyof typeof regionableData
                            ].title
                        )}
                    </Item>
                    <Item
                        onClick={() => {
                            location.href = `${locale}/cities/search?title=${
                                regionableData[
                                    mapRegion.busan as keyof typeof regionableData
                                ].queryTitle![
                                    locale! as "ko" | "en" | "ja" | "chi"
                                ]
                            }`;
                        }}
                    >
                        {l(
                            regionableData[
                                mapRegion.busan as keyof typeof regionableData
                            ].title
                        )}
                    </Item>
                    <Item
                        onClick={() => {
                            location.href = `${locale}/cities/search?title=${
                                regionableData[
                                    mapRegion.daegu as keyof typeof regionableData
                                ].queryTitle![
                                    locale! as "ko" | "en" | "ja" | "chi"
                                ]
                            }`;
                        }}
                    >
                        {l(
                            regionableData[
                                mapRegion.daegu as keyof typeof regionableData
                            ].title
                        )}
                    </Item>
                    <Item
                        onClick={() => {
                            location.href = `${locale}/cities/search?title=${
                                regionableData[
                                    mapRegion.Incheon as keyof typeof regionableData
                                ].queryTitle![
                                    locale! as "ko" | "en" | "ja" | "chi"
                                ]
                            }`;
                        }}
                    >
                        {l(
                            regionableData[
                                mapRegion.Incheon as keyof typeof regionableData
                            ].title
                        )}
                    </Item>
                    <Item
                        onClick={() => {
                            location.href = `${locale}/cities/search?title=${
                                regionableData[
                                    mapRegion.Gwangju as keyof typeof regionableData
                                ].queryTitle![
                                    locale! as "ko" | "en" | "ja" | "chi"
                                ]
                            }`;
                        }}
                    >
                        {l(
                            regionableData[
                                mapRegion.Gwangju as keyof typeof regionableData
                            ].title
                        )}
                    </Item>
                    <Item
                        onClick={() => {
                            location.href = `${locale}/cities/search?title=${
                                regionableData[
                                    mapRegion.Daejeon as keyof typeof regionableData
                                ].queryTitle![
                                    locale! as "ko" | "en" | "ja" | "chi"
                                ]
                            }`;
                        }}
                    >
                        {l(
                            regionableData[
                                mapRegion.Daejeon as keyof typeof regionableData
                            ].title
                        )}
                    </Item>
                    <Item
                        onClick={() => {
                            location.href = `${locale}/cities/search?title=${
                                regionableData[
                                    mapRegion.Ulsan as keyof typeof regionableData
                                ].queryTitle![
                                    locale! as "ko" | "en" | "ja" | "chi"
                                ]
                            }`;
                        }}
                    >
                        {l(
                            regionableData[
                                mapRegion.Ulsan as keyof typeof regionableData
                            ].title
                        )}
                    </Item>
                    <Item
                        onClick={() => {
                            location.href = `${locale}/cities/search?title=${
                                regionableData[
                                    mapRegion.Sejong as keyof typeof regionableData
                                ].queryTitle![
                                    locale! as "ko" | "en" | "ja" | "chi"
                                ]
                            }`;
                        }}
                    >
                        {l(
                            regionableData[
                                mapRegion.Sejong as keyof typeof regionableData
                            ].title
                        )}
                    </Item>
                    <Item
                        onClick={() => {
                            location.href = `${locale}/cities/search?title=${
                                regionableData[
                                    mapRegion.Jeju as keyof typeof regionableData
                                ].queryTitle![
                                    locale! as "ko" | "en" | "ja" | "chi"
                                ]
                            }`;
                        }}
                    >
                        {l(
                            regionableData[
                                mapRegion.Jeju as keyof typeof regionableData
                            ].title
                        )}
                    </Item>
                    <Item
                        onClick={() => {
                            location.href = `${locale}/cities/search?title=${
                                regionableData[
                                    mapRegion.SouthGyeongsang as keyof typeof regionableData
                                ].queryTitle![
                                    locale! as "ko" | "en" | "ja" | "chi"
                                ]
                            }`;
                        }}
                    >
                        {l(
                            regionableData[
                                mapRegion.SouthGyeongsang as keyof typeof regionableData
                            ].title
                        )}
                    </Item>
                    <Item
                        onClick={() => {
                            location.href = `${locale}/cities/search?title=${
                                regionableData[
                                    mapRegion.NorthGyeongsang as keyof typeof regionableData
                                ].queryTitle![
                                    locale! as "ko" | "en" | "ja" | "chi"
                                ]
                            }`;
                        }}
                    >
                        {l(
                            regionableData[
                                mapRegion.NorthGyeongsang as keyof typeof regionableData
                            ].title
                        )}
                    </Item>
                    <Item
                        onClick={() => {
                            location.href = `${locale}/cities/search?title=${
                                regionableData[
                                    mapRegion.SouthJeolla as keyof typeof regionableData
                                ].queryTitle![
                                    locale! as "ko" | "en" | "ja" | "chi"
                                ]
                            }`;
                        }}
                    >
                        {l(
                            regionableData[
                                mapRegion.SouthJeolla as keyof typeof regionableData
                            ].title
                        )}
                    </Item>
                    <Item
                        onClick={() => {
                            location.href = `${locale}/cities/search?title=${
                                regionableData[
                                    mapRegion.NorthJeolla as keyof typeof regionableData
                                ].queryTitle![
                                    locale! as "ko" | "en" | "ja" | "chi"
                                ]
                            }`;
                        }}
                    >
                        {l(
                            regionableData[
                                mapRegion.NorthJeolla as keyof typeof regionableData
                            ].title
                        )}
                    </Item>
                    <Item
                        onClick={() => {
                            location.href = `${locale}/cities/search?title=${
                                regionableData[
                                    mapRegion.SouthChungcheong as keyof typeof regionableData
                                ].queryTitle![
                                    locale! as "ko" | "en" | "ja" | "chi"
                                ]
                            }`;
                        }}
                    >
                        {l(
                            regionableData[
                                mapRegion.SouthChungcheong as keyof typeof regionableData
                            ].title
                        )}
                    </Item>
                    <Item
                        onClick={() => {
                            location.href = `${locale}/cities/search?title=${
                                regionableData[
                                    mapRegion.NorthChungcheong as keyof typeof regionableData
                                ].queryTitle![
                                    locale! as "ko" | "en" | "ja" | "chi"
                                ]
                            }`;
                        }}
                    >
                        {l(
                            regionableData[
                                mapRegion.NorthChungcheong as keyof typeof regionableData
                            ].title
                        )}
                    </Item>
                    <Item
                        onClick={() => {
                            location.href = `${locale}/cities/search?title=${
                                regionableData[
                                    mapRegion.Gangwon as keyof typeof regionableData
                                ].queryTitle![
                                    locale! as "ko" | "en" | "ja" | "chi"
                                ]
                            }`;
                        }}
                    >
                        {l(
                            regionableData[
                                mapRegion.Gangwon as keyof typeof regionableData
                            ].title
                        )}
                    </Item>
                    <Item
                        onClick={() => {
                            location.href = `${locale}/cities/search?title=${
                                regionableData[
                                    mapRegion.Gyeonggi as keyof typeof regionableData
                                ].queryTitle![
                                    locale! as "ko" | "en" | "ja" | "chi"
                                ]
                            }`;
                        }}
                    >
                        {l(
                            regionableData[
                                mapRegion.Gyeonggi as keyof typeof regionableData
                            ].title
                        )}
                    </Item>
                </ItemList>
            )}
        </div>
    );
};
