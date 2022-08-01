import { Bold, isEmpty, JDalign, JDbox, JDlabel } from "@janda-com/front";
import React from "react";
import { Fuser } from "../../../types/api";
import { FileBox } from "../../filebox/FileBox";

interface IProp {
    user: Fuser;
}

export const FilingCabinet: React.FC<IProp> = ({ user }) => {
    const { bankImage, guideLicenses } = user;
    return (
        <div>
            <JDbox>
                <Bold mb>서류함</Bold>
                {bankImage && (
                    <JDalign mb>
                        <JDlabel txt="통장사진" />
                        <FileBox file={bankImage} />
                    </JDalign>
                )}
                {!isEmpty(guideLicenses) && (
                    <div>
                        <JDlabel txt="가이드자격증" />
                        {guideLicenses.map((Gl) => (
                            <FileBox mb="small" key={Gl._id} file={Gl} />
                        ))}
                    </div>
                )}
            </JDbox>
        </div>
    );
};
