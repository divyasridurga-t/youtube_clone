const SideBar = () => {
    return (
        <>
            <div className="h-[100vh] w-[70px] shadow-md">
                <ul className="flex flex-col justify-center items-center cursor-pointer">
                    <li className="text-xs my-7">
                        <img src="https://i.ibb.co/7Vh9ffy/home.png" width={30} height={30} />
                    </li>
                    <li className="text-xs my-7">
                        <img src="https://i.ibb.co/2hd80cv/clapperboard.png" width={30} height={30} />
                    </li>
                    <li className="text-[10px] my-7">
                        <img src="https://i.ibb.co/h89y8r4/subscribe.png" width={30} height={30} />
                    </li>
                    <li className="text-xs my-7">
                        <img src="https://i.ibb.co/ynPJgYs/user.png" width={30} height={30} />
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SideBar;