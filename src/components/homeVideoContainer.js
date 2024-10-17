import useVideoListApi from "../customHooks/useVideoListApi";
import ChannelLogo from "./channelLogo";
import viewCountFn from "../customHooks/viewCount";
import timeStamp from "../customHooks/timeStamps";

const HomeVideoContainer = () => {
    let videoData = useVideoListApi();
    let { items = [] } = videoData || {};
    return (
        <>
            <div className="w-full h-[100vh] flex flex-wrap gap-5">
                {
                    items.length ? items.map((item) => {
                        let { id = '', snippet: { channelTitle = '', channelId = '', title = '', publishedAt = '', thumbnails: { standard: { url = '' } = {} } = {} } = {}, statistics: { viewCount = '' } = {} } = item || {};
                        return (
                            <div className="w-[300px] shadow-md h-auto rounded-lg" key={id}>
                                <div className="bg-gray-300 rounded-lg">
                                    {
                                        url ? <img width={300} height={200} className="rounded-lg" src={url} alt="thumbnail" /> : <div className="w-[300px] h-[225px] rounded-lg bg-gray-300"></div>

                                    }
                                </div>
                                <div className="flex mx-1 my-2 p-1">
                                    <ChannelLogo id={channelId} />
                                    <div>
                                        <h2 className="font-semibold text-sm line-clamp-2 h-[43px]">{title}</h2>
                                        <h2 className="text-[#909090] text-[14px] line-clamp-1">{channelTitle}</h2>
                                        <h2 className="text-[#909090] text-md">{viewCountFn(viewCount)} . {timeStamp(publishedAt)}</h2>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : ''
                }
            </div>
        </>
    )
}

export default HomeVideoContainer;
