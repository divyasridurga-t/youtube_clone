const HamburgerMenu = ({ MenuData }) => {
    return (
        <>
            <div className="w-[15%] h-[100vh] overflow-y-scroll bg-white absolute left-0 top-[6.5%] shadow-lg px-2">
                {
                    Object?.keys(MenuData)?.map((item, index) => {
                        return (
                            <ul key={`menubar_${index}`} className="flex flex-col justify-center items-center cursor-pointer px-2 border-b-[1px] border-grey-500">
                                {
                                    MenuData[item]?.data.map((key, index) => {
                                        return (
                                            <a className="w-[100%]" href={key?.link} key={`menuItems_${index}`}>
                                                <li className="mb-2 h-11 px-2 mt-2 flex justify-start items-center">
                                                    <div>
                                                        {key?.title}
                                                    </div>
                                                </li>
                                            </a>
                                        )
                                    })
                                }
                            </ul>
                        )
                    })
                }
            </div>
        </>
    )
}

export default HamburgerMenu;