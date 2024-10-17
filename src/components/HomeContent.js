import CategoryButtons from "./CategoryBtn";
import categoryBtnData from "../utils/categoryBtnData";
import HomeVideoContainer from "./homeVideoContainer";

const HomeContent = () => {
    return (
        <>
            <div className="w-full h-[100vh] m-3">
                {/* category buttons */}
                <CategoryButtons data={categoryBtnData} />
                <HomeVideoContainer />
            </div>
        </>
    )
}

export default HomeContent;