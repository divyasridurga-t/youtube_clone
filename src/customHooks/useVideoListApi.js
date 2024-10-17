import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";

let useVideoListApi = () => {
    let [data, setData] = useState(null);

    async function getVideoData() {
        let data = await fetch(YOUTUBE_VIDEO_API);
        let json = await data.json();
        setData(json);

    }
    useEffect(() => {
        getVideoData();
    }, [])

    return data;

}


export default useVideoListApi;