
const sections =[
    {
        title: 'Trực thuộc',
        items:[Image]
    },
    {
        title: 'Liên hệ',
        items: ['03 Hoà Bình, Phường 3, Quận 11', '0839 632 394', 'phuthotouristquan11@gmail.com']
    },
    {
        title: 'Giờ mở cửa',
        items: ['Ngày thường: 8h00 - 18h00 (bán vé 7h30 - 16h00)', 
                'Cuối tuần + Lễ: 7h30 - 21h00 (bán vé 7h30 - 19h00)', 
                'Công viên nghỉ thứ 3 hàng tuần']
    },
    {
        title: 'Các đơn vị cùng hệ thống Phuthotourist',
        items: ['Công ty CP DVDL Phú Thọ',
                'Khu du lịch sinh thái Vàm Sát',
                'Khách sạn Ngọc Lan',
                'Khách sạn Phú Thọ',
                'Trung tâm Du lịch Đầm Sen',
                'Cà phê Vườn Đá']
    }
]
function Footer() {
    return (
        <>
            <div className="w-full mt-24 bg-[#259E58] text-white py-y px-2 font">
                <div className="max-w-[1663px] mx-auto grid grid-cols-2 md:grid-cols-4 border-b-2 border-white py-8">
                    <img className="pl-10" src="../assets/svg/logo-footer.svg" alt=""/>
                    {
                        sections.map((section, index) => (
                            <div key={index}>
                                <h6 className="fontBanger uppercase">
                                    {section.title}
                                </h6>
                                <ul>
                                    {section.items.map((item, i) =>
                                        <li key={i}
                                            className="py-1 text-white ">
                                            {item}
                                        </li>
                                    )}
                                </ul>
                            </div>
                        ))
                    }
                </div>
                <div
                    className="flex flex-col max-w-[1663px] px-2 py-4 mx-auto justify-center sm:flex-row text-center text-white">
                    <p className="py-4">
                        Copyright Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist)
                    </p>
                </div>
            </div>

        </>
    )
}

export default Footer;