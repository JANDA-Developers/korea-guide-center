// 미완성 컴포넌트
// import React, { useState, useEffect } from "react";

// interface IProp {
//     start?: number;
//     duration?: number;
//     end: number;
// }

// export const CountEffect: React.FC<IProp> = ({
//     end,
//     start = 0,
//     duration = 3000,
// }) => {
//     const [currentNum, setCurrentNum] = useState(start);

//     const up = () => {
//         setCurrentNum(currentNum + 1);
//     };

//     const handleCnt = () => {
//         const range = end - start;
//         const increment = end > start ? 1 : -1;
//         const stepTime = Math.abs(duration / range);
//         const isOver = increment == end;

//         const timer = setInterval(up, 100);

//         return () => {
//             clearInterval(timer);
//         };
//     };

//     useEffect(handleCnt, [end]);

//     return <span>{currentNum}</span>;
// };

export default "";
