import { useEffect, useState } from "react";

const ChannelLogo = ({ id }) => {
    let [logo, setLogo] = useState('');
    useEffect(() => {
        getLogo(id)
    }, [])

    async function getLogo(id) {
        let api = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&key=AIzaSyDntJTW9H-UQeiCwYqyocMEN2-umMETtUw
        `;
        let data = await fetch(api);
        let json = await data.json();
        let { items: [{ snippet: { thumbnails: { high: { url = '' } = {} } = {} } = {} } = {}] = [] } = json;
        setLogo(url)

    }

    return (
        <>
            <img className="rounded-full w-[50px] h-[50px] mr-3" src={logo} />
        </>
    )
}

export default ChannelLogo;