import { useEffect, useState } from "react";

const useVideoDetailApi = (query) => {
    let [data, setData] = useState(null);
    async function getData() {
        let api = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${query}&key=AIzaSyDntJTW9H-UQeiCwYqyocMEN2-umMETtUw`;
        let data_ = await fetch(api);
        let json = await data_.json();
        setData(json)
    }
    useEffect(() => {
        getData();
    }, [])

    return data;
}

export default useVideoDetailApi;