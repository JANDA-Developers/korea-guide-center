export const stopAllVideo = () => {
    document
        .querySelectorAll(".JDvideo")
        // @ts-ignore
        .forEach((vid: HTMLVideoElement) => vid.pause());
};
