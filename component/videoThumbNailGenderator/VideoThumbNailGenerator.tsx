import { createFFmpeg } from "@ffmpeg/ffmpeg";
import { dataURLtoFile, JDbutton } from "@janda-com/front";
import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { useCommentUpdate } from "../../hook/useComment";
import { useUpdateComponent } from "../../hook/useUpdateComponent";
import { useSingleUpload } from "../../hook/useUpload";
import { Ffile } from "../../types/api";
interface IProp {
    onChange?: (file: Ffile) => void;
}

export const VideoThumbNailGenerator: React.FC<IProp> = ({ onChange }) => {
    const fileCoverHtml = useRef<HTMLInputElement>(null);
    const { updateComponent } = useUpdateComponent();
    const videoRefContainer = useRef<HTMLInputElement>(null);
    const [message, setMessage] = useState("Click Start to import");
    const { onChangeFile, file } = useSingleUpload();
    const [downloadLink, setDownloadLink] = useState("");
    const ffmpeg = createFFmpeg({
        log: true,
        corePath: "./ffmpeg-core/dist/ffmpeg-core.js",
    });
    const getFileExtension = (file: File) => file.name.split(".")[1];
    const getFileMine = (file: File) => file.type;

    const getFile = (file: React.RefObject<HTMLInputElement>): File | null => {
        if (
            file.current &&
            file.current.files &&
            file.current.files.length !== 0
        ) {
            return file.current.files[0];
        } else {
            return null;
        }
    };
    const doImport = async () => {
        setMessage("코어파일 로딩중 ffmpeg-core.js");
        await ffmpeg.load();

        const video = getFile(videoRefContainer);
        if (video) {
            const extention = getFileExtension(video);
            const mine = getFileMine(video);
            // ffmpeg.FS(
            //     "writeFile",
            //     coverName,
            //     new Uint8Array(await cover.arrayBuffer())
            // );

            ffmpeg.FS(
                "writeFile",
                video.name,
                new Uint8Array(await video.arrayBuffer())
            );

            setMessage("동영상 편집중...");

            const args = [
                "-i",
                video.name,
                "-ss",
                "00:00:00",
                "-t",
                "00:04:30",
                "-an",
                extention.includes("mp4") ? "-crf" : "-q",
                "35",
                "-vf",
                "scale=480:-1,select='lt(mod(t,62),2)',setpts=N/FRAME_RATE/TB",
                "out.mp4",
            ];
            await ffmpeg.run(...args);
            setMessage("편집완료");
            const data = ffmpeg.FS("readFile", "out.mp4");
            URL.revokeObjectURL(downloadLink);
            const urlVideoObject = URL.createObjectURL(
                new Blob([data.buffer], { type: mine })
            );
            const newFile = dataURLtoFile(urlVideoObject, video.name);
            setDownloadLink(urlVideoObject);
            onChangeFile?.(newFile);
        } else {
            setMessage("Can not Import. need file check. 😪");
        }
    };

    useEffect(() => {
        if (getFile(videoRefContainer)) {
            doImport();
        }
    }, [getFile(videoRefContainer)?.name]);

    useEffect(() => {
        if (downloadLink.length) {
            window.open(downloadLink, "_blank");
        }
    }, [downloadLink.length]);

    useEffect(() => {
        if (file?._id) onChange?.(file);
    }, [file?._id]);

    return (
        <div>
            <JDbutton
                label="동영상 자동 썸네일 만들기"
                onClick={() => {
                    videoRefContainer.current?.click();
                }}
            />
            {message}
            {downloadLink}
            <input
                style={{
                    opacity: 0,
                    width: "1px",
                    height: "1px",
                    position: "absolute",
                }}
                onChange={() => {
                    updateComponent();
                }}
                ref={videoRefContainer}
                id="video"
                type="file"
                accept="video/mp4,video/x-m4v,video/*"
            />
            {/* <label htmlFor="img">image </label>{" "}
       
            <button onClick={doImport}>Start</button>
            <p>{message}</p>{" "}
            {downloadLink.length !== 0 && (
                <a href={downloadLink} download="result">
                    {" "}
                    download{" "}
                </a>
            )} */}
        </div>
    );
};
