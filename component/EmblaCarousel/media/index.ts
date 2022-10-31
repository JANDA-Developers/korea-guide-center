export const media = [
    "img/media/media-1.jpeg",
    "img/media/media-2.jpeg",
    "img/media/media-3.jpeg",
    "img/media/media-4.jpeg",
    "img/media/media-5.jpeg",
];
export const mediaByIndex = (index: any): any => media[index % media.length];
