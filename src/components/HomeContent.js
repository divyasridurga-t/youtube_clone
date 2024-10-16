import CategoryButtons from "./CategoryBtn";
import categoryBtnData from "../utils/categoryBtnData";

const HomeContent = () => {
    return (
        <>
            <div className="w-full h-[100vh] m-3">
                {/* category buttons */}
                <CategoryButtons data={categoryBtnData}/>
                <div className="bg-slate-400 w-full h-[100vh]">

                </div>
            </div>
        </>
    )
}

export default HomeContent;