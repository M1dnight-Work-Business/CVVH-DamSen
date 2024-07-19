import Navbar from "../components/Navbar.tsx";
import { Outlet } from "react-router-dom";
//import Footer from "../components/Footer.tsx";

function MainLayout() {
    return (
        <>
            <div className="flex w-screen">
                <Navbar />
                {/*<Footer/>*/}
                <div className="ml-[257px] w-full">
                    <Outlet />
                </div>
                <div className="fixed bottom-0 right-0 z-10 cursor-pointer">
                    <img className="w-[64px] h-[64px]" src="src/assets/svg/phone.svg" alt=""/>
                    <img className="w-[64px] h-[64px]" src="src/assets/svg/messenger.svg" alt="" />
                </div>
            </div>
        </>
    )
}

export default MainLayout;
