import Header from "./header";
import { GoogleOAuthProvider } from '@react-oauth/google';
import SideBar from "./sideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <GoogleOAuthProvider clientId='92522573922-ivhbbqquto38lrji7eqtum1jjstdee2k.apps.googleusercontent.com'>
                <Header />
                <div className="flex">
                    <SideBar />
                    <Outlet />
                </div>
            </GoogleOAuthProvider>
        </>
    )
}

export default Layout;