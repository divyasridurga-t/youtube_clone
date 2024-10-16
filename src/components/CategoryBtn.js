const CategoryButtons = ({ data }) => {


    return (
        <>
            <div className="p-2 flex flex-wrap justify-evenly mb-2">
                {
                    data?.data?.map((item, index) => {
                        return (
                            <button className="w-auto bg-[rgba(0,0,0,0.05)] text-black font-medium px-3 py-2 rounded-lg">
                                {item?.title}
                            </button>
                        )
                    })
                }

            </div>
        </>
    )
}

export default CategoryButtons;