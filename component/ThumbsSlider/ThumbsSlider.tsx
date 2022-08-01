// import React, { useContext, useState } from "react";
// import { ImgSlider } from "../../atom/Imgslider";
// import { BuypageContext } from "../../page/buypageRouter/page/buypageList/helper/context";
// import { Ratio } from "../../type/const";
// import { PhotoFrame } from "../photoFrame/PhotoFram";

// interface IProp {
//     images: string[];
// }

// export const ThumbsSlider: React.FC<IProp> = ({ images }) => {
//     const { isShoppingType } = useContext(BuypageContext);
//     const [thumbNail, setThumbNail] = useState(images[0] || "");
//     return (
//         <div>
//             <PhotoFrame
//                 mb
//                 isBgImg
//                 ratio={isShoppingType ? Ratio["3:4"] : Ratio["16:9"]}
//                 src={thumbNail || ""}
//             />
//             {images.length > 1 && (
//                 <ImgSlider
//                     hover
//                     onClickImg={setThumbNail}
//                     photoProps={{
//                         ratio: Ratio["16:9"],
//                         hover: true,
//                     }}
//                     slidesToShow={images.length}
//                     imgs={images}
//                 />
//             )}
//         </div>
//     );
// };

export default "";
