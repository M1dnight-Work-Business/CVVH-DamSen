import {NavLink} from "react-router-dom";
import {RiArrowRightSLine} from "react-icons/ri";
import {ArrowContainer, Popover} from 'react-tiny-popover'
import {useState} from "react";
import 'react-tabs/style/react-tabs.css';
import MucLuc from "../pages/MucLuc.tsx";

function Navbar() {
    const [isPopoverOpen_GioiThieu, setIsPopoverOpen_GioiThieu] = useState(false)
    const [isPopoverOpen_GiaVe, setIsPopoverOpen_GiaVe] = useState(false)

    const classNameTailWind = {
        listItemNavigate: "hover:text-[#C8FF9C] flex justify-between"
    }

    const [isCategoryOpen, setIsCategoryOpen] = useState(false);

    return (
        <div className="h-screen">
            <section className="flex h-screen fixed top-0 left-0 z-30">
                <aside className="flex flex-col items-center bg-[#259E58] h-screen w-[257px]">
                    <div className="py-8">
                        <button onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
                            {isCategoryOpen
                                ? (<img src="src/assets/svg/Close.svg" alt="dam_sen"/>)
                                : (<img src="src/assets/svg/hamburger.svg" alt="dam_sen"/>)
                            }
                        </button>
                    </div>

                    <ul className="h-screen flex flex-col uppercase fontBanger text-white text-3xl gap-[27px] z-40">
                        <li className={classNameTailWind?.listItemNavigate}>
                            <NavLink to="/trang-chu">Trang chủ</NavLink>
                        </li>
                        <li className={classNameTailWind?.listItemNavigate}>
                            <NavLink to="/kham-pha">Khám phá</NavLink>
                        </li>
                        <li className={classNameTailWind?.listItemNavigate}>
                            <NavLink to="/gioi-thieu">Giới thiệu</NavLink>
                            <Popover
                                containerStyle={{
                                    zIndex: '50'
                                }}
                                isOpen={isPopoverOpen_GioiThieu}
                                positions={['right']}
                                padding={10}
                                onClickOutside={() => setIsPopoverOpen_GioiThieu(false)}
                                content={({position, childRect, popoverRect}) => (
                                    <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
                                        position={position}
                                        childRect={childRect}
                                        popoverRect={popoverRect}
                                        className='fontNunito bg-white rounded-xl shadow-lg w-[200px] 
                                               px-3 text-[16px] py-2 overflow-hidden'
                                        arrowClassName='popover-arrow'
                                        arrowColor={'none'}
                                        arrowSize={0}>
                                        <div>
                                            <div
                                                className="p-3 hover:bg-gray-200 rounded-sm transition-colors cursor-pointer"
                                                style={{opacity: 0.7}}
                                                onClick={() => setIsPopoverOpen_GioiThieu(!isPopoverOpen_GioiThieu)}>
                                                <NavLink to='/gioi-thieu-lich-su-hinh-thanh'>Lịch sử hình
                                                    thành</NavLink>
                                            </div>
                                            <hr/>
                                            <div
                                                className="p-3 hover:bg-gray-200 rounded-sm transition-colors cursor-pointer"
                                                style={{opacity: 0.7}}
                                                onClick={() => setIsPopoverOpen_GioiThieu(!isPopoverOpen_GioiThieu)}>
                                                <NavLink to='/gioi-thieu-thanh-vien'>Thành viên</NavLink>
                                            </div>
                                            <hr/>
                                            <div
                                                className="p-3 hover:bg-gray-200 rounded-sm transition-colors cursor-pointer"
                                                style={{opacity: 0.7}}
                                                onClick={() => setIsPopoverOpen_GioiThieu(!isPopoverOpen_GioiThieu)}>
                                                <NavLink to='/gioi-thieu-chinh-sach-bao-mat'>Chính sách bảo
                                                    mật</NavLink>
                                            </div>
                                        </div>
                                    </ArrowContainer>
                                )}
                            >
                                <button className="pl-8"
                                        onClick={() => setIsPopoverOpen_GioiThieu(!isPopoverOpen_GioiThieu)}>
                                    <RiArrowRightSLine/>
                                </button>
                            </Popover>
                        </li>
                        <li className={classNameTailWind?.listItemNavigate}>
                            <NavLink to="/gia-ve-trong-cong-vien">Giá vé</NavLink>
                            <Popover
                                containerStyle={{
                                    zIndex: '50'
                                }}
                                isOpen={isPopoverOpen_GiaVe}
                                positions={['right']}
                                padding={10}
                                onClickOutside={() => setIsPopoverOpen_GiaVe(false)}
                                content={({position, childRect, popoverRect}) => (
                                    <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
                                        position={position}
                                        childRect={childRect}
                                        popoverRect={popoverRect}
                                        className='fontNunito bg-white rounded-xl shadow-lg w-[200px] 
                                               px-3 text-[16px] py-2 overflow-hidden'
                                        arrowClassName='popover-arrow'
                                        arrowColor={'none'}
                                        arrowSize={0}>
                                        <div>
                                            <div
                                                className="p-3 hover:bg-gray-200 rounded-sm transition-colors cursor-pointer"
                                                style={{opacity: 0.7}}
                                                onClick={() => setIsPopoverOpen_GiaVe(!isPopoverOpen_GiaVe)}>
                                                <NavLink to='/gia-ve-trong-cong-vien'>Vé trong công viên</NavLink>
                                            </div>
                                            <hr/>
                                            <div
                                                className="p-3 hover:bg-gray-200 rounded-sm transition-colors cursor-pointer"
                                                style={{opacity: 0.7}}
                                                onClick={() => setIsPopoverOpen_GiaVe(!isPopoverOpen_GiaVe)}>
                                                <NavLink to='/gia-ve-dich-vu'>Vé dịch vụ</NavLink>
                                            </div>
                                            <hr/>
                                            <div
                                                className="p-3 hover:bg-gray-200 rounded-sm transition-colors cursor-pointer"
                                                style={{opacity: 0.7}}
                                                onClick={() => setIsPopoverOpen_GiaVe(!isPopoverOpen_GiaVe)}>
                                                <NavLink to='/gia-ve-tap-the'>Vé tập thể</NavLink>
                                            </div>
                                            <hr/>
                                            <div
                                                className="p-3 hover:bg-gray-200 rounded-sm transition-colors cursor-pointer"
                                                style={{opacity: 0.7}}
                                                onClick={() => setIsPopoverOpen_GiaVe(!isPopoverOpen_GiaVe)}>
                                                <NavLink to='/gia-ve-tap-the-duc'>Vé tập thể dục</NavLink>
                                            </div>
                                        </div>
                                    </ArrowContainer>
                                )}>
                                <button className="pl-8" onClick={() => setIsPopoverOpen_GiaVe(!isPopoverOpen_GiaVe)}>
                                    <RiArrowRightSLine/>
                                </button>
                            </Popover>
                        </li>
                        <li className={classNameTailWind?.listItemNavigate}>
                            <NavLink to="/su-kien">Sự kiện</NavLink>
                        </li>
                    </ul>

                    <div className="flex flex-col pb-9 gap-5">
                        <img src="src/assets/svg/DamSen.svg" alt="dam_sen"/>
                        <hr/>
                        <div className="flex flex-row justify-center gap-4">
                            <img src="src/assets/svg/facebook.svg" alt="facebook"/>
                            <img src="src/assets/svg/youtube.svg" alt="youtube"/>
                            <img src="src/assets/svg/instagram.svg" alt="instagram"/>
                        </div>
                    </div>
                </aside>
            </section>
            {isCategoryOpen && (<MucLuc/>)}
        </div>
    )
}

export default Navbar;