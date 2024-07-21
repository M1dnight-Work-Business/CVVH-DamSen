function Footer() {
    return (
        <footer className="fixed w-[1180px] h-fit bottom-0 bg-[#259E58] text-white">
            <div className=" px-20 py-6">
                <div className="flex flex-wrap justify-between">
                    <div className="text-white fontBanger">
                        Trực thuộc
                        <img className="w-56 pt-[30px] " src="src/assets/svg/logo-footer.svg" alt=""/>
                    </div>
                    <div className="text-white fontBanger flex-col">
                        Liên hệ
                        <div className="pt-4 space-y-2">
                            <div className="flex">
                                <img className="w-5 flex" src="src/assets/svg/location-footer.svg" alt=""/>
                                <span className="pl-2 text-white fontNunito">03 Hòa Bình, Phường 3, Quận 11</span>
                            </div>
                            <div className="flex">
                                <img className='w-5' src="src/assets/svg/phone-footer.svg" alt=""/>
                                <span className="pl-2 text-white fontNunito">0839 632 394</span>
                            </div>
                            <div className="flex">
                                <img className='w-5' src="src/assets/svg/mail-footer.svg" alt=""/>
                                <span className="pl-2 text-white fontNunito">phuthotouristquan11@gmail.com</span>
                            </div>
                        </div>
                        <div className="pt-7">
                            giờ mở cửa
                            <ul className="pt-3 pl-4 py-1 list-disc fontNunito flex">
                                <li>Ngày thường: <span className="font-semibold">8h00 - 18h00</span> (bán vé 7h30 -
                                    16h00)
                                </li>
                            </ul>
                            <ul className="pl-4 py-1 list-disc fontNunito flex">
                                <li>Cuối tuần + Lễ: <span className="font-semibold">7h30 - 21h00</span> (bán vé 7h30 -
                                    19h00)
                                </li>
                            </ul>
                            <ul className="pl-4 py-1 list-disc fontNunito flex">
                                <li>Công viên nghỉ <span className="font-semibold">thứ 3</span> hàng tuần
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-white fontBanger ">
                        Các đơn vị cùng hệ thống tourist
                        <ul className="pl-4 py-2 list-disc fontNunito space-y-2">
                            <li>Công ty CP DVDL Phú Thọ</li>
                            <li>Khu du lịch sinh thái Vàm Sát</li>
                            <li>Khách sạn Ngọc Lan</li>
                            <li>Khách sạn Phú Thọ</li>
                            <li>Trung tâm Du lịch Đầm Sen</li>
                            <li>Cà phê Vườn Đá</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="w-screen"/>
            <div className="text-center fontNunito px-4 py-4">
                Copyright © Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist)
            </div>
        </footer>
    )
}

export default Footer;
