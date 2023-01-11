import React from "react";

// 임시

const PopularGuideTabBar = () => {
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
            <li className="filter" data-cat="Brussels">
                Brussels
            </li>
            <li className="filter" data-cat="Dublin">
                Dublin
            </li>
            <li className="filter" data-cat="Edinburgh">
                Edinburgh
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
            <li className="filter" data-cat="Paris">
                Paris
            </li>
            <li className="filter" data-cat="Porto">
                Porto
            </li>
            <li className="filter" data-cat="Prague">
                Prague
            </li>
        </ul>
    );
};

export default React.memo(PopularGuideTabBar);
