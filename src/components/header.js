import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import MenuData from "../utils/menuData";
import HamburgerMenu from "./HamburgerMenu";


const Header = () => {
    let [userInfo, setUserInfo] = useState(null);
    let [showBtn, setShowBtn] = useState(false);
    let [showMenu, setShowMenu] = useState(false);
    let [isLogIn, setIsLogIn] = useState(false);
    function handleError() {
        alert('login failed!! try again')
    }
    function handleSuccess(response) {

        let { credential = '' } = response;
        let data = jwtDecode(credential);
        setUserInfo(data);
        localStorage.setItem('userData', JSON.stringify(data));
        setIsLogIn(true)
    }

    useEffect(() => {
        let storedData = localStorage.getItem('userData');
        if (storedData) {
            setUserInfo(JSON.parse(storedData))
        }
    }, [])

    function handleLogOutClick() {
        setShowBtn(() => !showBtn)
    }
    function handleLogout() {
        localStorage.removeItem('userData');
        window.location.reload();
    }
    function handleMenuClick() {
        setShowMenu(() => !showMenu)
    }

    return (
        <>
            <div className="w-full h-[60px] flex items-center px-2 shadow-md justify-between">
                <div className="flex">
                    <button onClick={handleMenuClick}>
                        <img width={35} height={35} src="https://i.ibb.co/st4Hnhr/hamburger-1.png" alt="menu" />
                    </button>
                    {showMenu ?
                        <HamburgerMenu MenuData={MenuData} />
                        : ''}

                    <img className="ml-8" src="https://i.ibb.co/SdZShjX/youtube.png" width={40} height={40} />
                </div>
                <div className="flex">
                    <input className="w-[100%] h-10 border border-gray-400 rounded-l-lg p-1" type="text" placeholder="search.." />
                    <button className="w-auto p-2 bg-black text-white rounded-r-lg"><img src="https://i.ibb.co/fMh58rS/search.png" /></button>
                </div>
                <div className="flex items-center">
                    {
                        userInfo ? <UserInfo userInfo={userInfo} /> : <GoogleLogin onError={handleError} onSuccess={handleSuccess} />
                    }
                    {
                        isLogIn ?
                            <div>
                                <button onClick={handleLogOutClick}><img width={35} height={35} src="https://i.ibb.co/QcQRbVy/more.png" /></button>
                                {showBtn ? <div className=" w-auto h-auto bg-black absolute right-1 top-[6.5%]">
                                    <button onClick={handleLogout} className="text-white px-4 py-3">
                                        Logout
                                    </button>
                                </div> : ''}
                            </div> : ''
                    }
                </div>
            </div>

        </>
    )
}

export default Header;


function UserInfo({ userInfo }) {
    return (
        <>
            <div className="flex items-center">
                <img width={40} height={40} src={userInfo.picture} className="rounded-full mr-1" />
                <p>{userInfo.given_name}</p>
            </div>
        </>
    )
}