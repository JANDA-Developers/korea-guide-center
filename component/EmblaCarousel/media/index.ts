// import media1 from "./media-1.jpeg";
// import media2 from "./media-2.jpeg";
// import media3 from "./media-3.jpeg";
// import media4 from "./media-4.jpeg";
// import media5 from "./media-5.jpeg";

export const media = [
    "img/media/media-1.jpeg",
    "img/media/media-2.jpeg",
    "img/media/media-3.jpeg",
    "img/media/media-4.jpeg",
    "img/media/media-5.jpeg",
];
export const mediaByIndex = (index: any): any => media[index % media.length];
