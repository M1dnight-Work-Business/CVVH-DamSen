import Navbar from "../components/Navbar.tsx";
import {Outlet} from "react-router-dom";

function FullLayout() {
    return (
        <div>
            <div className="flex w-full">
                <Navbar/>
                <div className="ml-[257px] bottom-0 w-full">
                    <Outlet/>
                </div>
                <div className="fixed bottom-0 right-0 z-10 cursor-pointer">
                    <img className="w-[64px] h-[64px]" src="src/assets/svg/phone.svg" alt=""/>
                    <img className="w-[64px] h-[64px]" src="src/assets/svg/messenger.svg" alt=""/>
                </div>

            </div>

        </div>
    )
}

export default FullLayout;
