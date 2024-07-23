import Navbar from "../components/Navbar.tsx";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer.tsx";

function FullLayout() {
    return (
        <>
            <div className="flex absolute w-full">
                <Navbar/>
                <div className="ml-[257px] bottom-0 w-full">
                    <Outlet/>
                    {/*<div className=" bottom-0">*/}
                    {/*    <Footer/>*/}
                    {/*</div>*/}
                </div>
                <div className="fixed bottom-0 right-0 z-10 cursor-pointer">
                    <img className="w-[64px] h-[64px]" src="src/assets/svg/phone.svg" alt=""/>
                    <img className="w-[64px] h-[64px]" src="src/assets/svg/messenger.svg" alt=""/>
                </div>

            </div>
        </>
    )
}

export default FullLayout;
