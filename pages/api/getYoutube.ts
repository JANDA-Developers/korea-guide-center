import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const result = await axios({
        method: "get",
        url: "https://koreaguide-youtube.vercel.app/api/get-video-data",
        responseType: "json",
    }).then(async function (response: any) {
        return response.data;
    });

    return res.json({
        ok: true,
        result,
    });
}
