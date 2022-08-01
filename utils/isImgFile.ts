export const isImgFile = (file: File) => {
    return !!file.type.match(/image.*/);
};

const imgType = [
    "jpeg",
    "jpg",
    "jfif",
    "tiff",
    "gif",
    "png",
    "bmp",
    "webp",
    "svg",
];
export const isImg = (mineType?: string | null) => {
    if (!mineType) return true;
    const imgaMatch = !!(mineType || "").match(/image.*/);
    return imgaMatch || imgType.includes((mineType || "---").toLowerCase());
};
export const isVideo = (mineType?: string | null) => {
    if (!mineType) return false;
    return !!(mineType || "").match(/video*/);
};

export const isVideoFile = (file: File) => isVideo(file.type);
