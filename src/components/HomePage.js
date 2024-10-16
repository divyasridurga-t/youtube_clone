import HomeContent from "./HomeContent";
import Layout from "./Layout";
import SideBar from "./sideBar";

const HomePage = () => {
    return (
        <>
            <Layout>
                <div className="flex">
                    <SideBar />
                    <HomeContent />
                </div>
            </Layout>
        </>
    )
}

export default HomePage;