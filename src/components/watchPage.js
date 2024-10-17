import { useSearchParams } from "react-router-dom";
import useVideoDetailApi from "../customHooks/useVideoDetailApi";

const WatchPage = () => {
    let [searchParams] = useSearchParams();
    let queryParam = searchParams.get('v');
    let data = useVideoDetailApi(queryParam);
    console.log(data, "???????????????????");


    return (
        <>
            <div className="m-5 w-full h-[90vh]">
                <iframe className="rounded-xl" width="70%" height="80%" src={`https://www.youtube.com/embed/${queryParam}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </>
    )
}

export default WatchPage;