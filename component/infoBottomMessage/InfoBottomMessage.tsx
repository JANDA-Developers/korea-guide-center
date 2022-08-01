// import { Bold, Flex, JDtypho, Mr } from "@janda-com/front";
// import React from "react";
// import { useHistory } from "react-router-dom";
// import { Paths } from "../../MainRouter";
// import { InfoSVG } from "./InfoSVG";

// interface IBottomInfoLine {
//     message?: string;
//     path?: Paths;
//     link?: string;
// }

// interface IProp {
//     lines: IBottomInfoLine[];
// }

// export const InfoBottomMessage: React.FC<IProp> = ({ lines }) => {
//     const { push } = useHistory();
//     const Line: React.FC = ({ children }) => (
//         <li className="infoBottomMessage__li">{children}</li>
//     );
//     const Link: React.FC<{ path: string; link?: string }> = ({
//         path,
//         link,
//     }) => (
//         <a
//             className="infoBottomMessage__a"
//             onClick={() => {
//                 if (!link) push(path);
//             }}
//             href={link}
//             target="_self"
//         >
//             바로가기{`>`}
//         </a>
//     );
//     return (
//         <div className="infoBottomMessage">
//             <div className="infoBottomMessage__bottom">
//                 <JDtypho weight={600} size="normal" mb="small">
//                     <Flex>
//                         <InfoSVG />
//                         <Mr mr="small" />
//                         설정도우미
//                     </Flex>
//                 </JDtypho>
//                 <ul className="infoBottomMessage__ul">
//                     {lines.map((line, i) => (
//                         <Line key={"infoBottomMessage__li" + i}>
//                             <JDtypho mr>{line.message}</JDtypho>
//                             {line.path && (
//                                 <Link link={line.link} path={line.path} />
//                             )}
//                         </Line>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

export default "";
