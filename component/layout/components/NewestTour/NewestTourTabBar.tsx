import React from "react";

// 임시 컴포넌트, 실제 코리아 가이드 사이트에 적용할지는 미지수
const NewestTourTabBar = () => {
    return (
        <ul className="new-filtering">
            <li className="filter active" data-cat="AllTours">
                All tours
            </li>
            <li className="filter" data-cat="Amsterdam">
                Amsterdam
            </li>
            <li className="filter" data-cat="Barcelona">
                Barcelona
            </li>
            <li className="filter" data-cat="Berlin">
                Berlin
            </li>
            <li className="filter" data-cat="Bilbao">
                Bilbao
            </li>
            <li className="filter" data-cat="Brussels">
                Brussels
            </li>
            <li className="filter" data-cat="Budapest">
                Budapest
            </li>
            <li className="filter" data-cat="Cologne">
                Cologne
            </li>
            <li className="filter" data-cat="Copenhagen">
                Copenhagen
            </li>
            <li className="filter" data-cat="Cordoba">
                Cordoba
            </li>
            <li className="filter" data-cat="Dublin">
                Dublin
            </li>
            <li className="filter" data-cat="Edinburgh">
                Edinburgh
            </li>
            <li className="filter" data-cat="Florence">
                Florence
            </li>
            <li className="filter" data-cat="Granada">
                Granada
            </li>
            <li className="filter" data-cat="Hamburg">
                Hamburg
            </li>
            <li className="filter" data-cat="Jerusalem">
                Jerusalem
            </li>
            <li className="filter" data-cat="Lisbon">
                Lisbon
            </li>
            <li className="filter" data-cat="Liverpool">
                Liverpool
            </li>
            <li className="filter" data-cat="London">
                London
            </li>
            <li className="filter" data-cat="Madrid">
                Madrid
            </li>
            <li className="filter" data-cat="Munich">
                Munich
            </li>
            <li className="filter" data-cat="NewYork">
                New York
            </li>
            <li className="filter" data-cat="Paris">
                Paris
            </li>
            <li className="filter" data-cat="Porto">
                Porto
            </li>
            <li className="filter" data-cat="Prague">
                Prague
            </li>
            <li className="filter" data-cat="Rome">
                Rome
            </li>
            <li className="filter" data-cat="SanSebastian">
                San Sebastian
            </li>
            <li className="filter" data-cat="SantiagoDeCompostela">
                Santiago de Compostela
            </li>
            <li className="filter" data-cat="Seville">
                Seville
            </li>
            <li className="filter" data-cat="TelAviv">
                Tel Aviv
            </li>
            <li className="filter" data-cat="Valencia">
                Valencia
            </li>
            <li className="filter" data-cat="Vienna">
                Vienna
            </li>
        </ul>
    );
};
export default React.memo(NewestTourTabBar);
