import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './MucLuc.css';

function MucLuc() {
    const list_TroChoi_CamGiacManh = [
        "Cá Chép Nhào Lộn",
        "Lâu Đài Kinh Dị",
        "Phượng Hoàng Bay",
        "Spinning Coaster",
        "Xe Bay Ảo Tưởng",
        "Thảm Bay",
        "Vòng Quay Thần Tốc",
        "Power Surge",
        "Tàu Vượt Thác",
        "Roller Coaster",
        "Vòng Xoay Không Gian",
        "Đấu Trường Bò Tót",
        "Xe Điện Đụng",
    ]
    const list_TroChoi_TuongTacAo = [
        "Xem Phim Cinemax 8D",
        "Đua Xe Turbo Racing",
        "9D Virtual Reality",
        "Bắn Súng Run Raider",
        "Lâu Đài Kỳ Thú",
    ]
    const list_TroChoi_GiaiTri = [
        "Băng Đăng",
        "Đu Quay Đứng Ferris Wheel",
        "Monorail",
        "Đạp Vịt Pedalo",
        "Massage Cá"
    ]
    const list_TroChoi_ThieuNhi = [
        "Ếch Nhảy",
        "Điệu Nhảy Thiên Thần",
        "Khinh Khí Cầu Bay",
        "Hải Cẩu Vượt Thác",
        "Ngựa Bay",
        "Kids Playground",
        "Khủng Long Bay",
        "Siêu Nhân Robot",
        "Rồng Lượn",
        "Vòng Lượn Tuổi Thơ",
        "Pháo Đài Bay",
        "Nhà Hơi Liên Hoàn",
    ]
    const list_VuonThu = [
        "Khỉ Đuôi Dài",
        "Gấu Ngựa",
        "Đười Ươi Sumatra",
        "Hà Mã Châu Phi",
        "Voi Châu Á",
        "Vượn Đen Má Vàng",
        "Thủy Cung",
        "Vườn Chim",
        "Hồ Cá Hải Tượng",
        "Cá Hỏa Tiễn",
        "Dê Núi",
    ]
    const list_CanhDep = [
        "Nam Tú Thượng Uyển",
        "Đảo Lan Rừng",
        "Vườn Nhật Bản",
        "Vườn Xương Rồng",
        "Địa Điểm Sống Ảo",
        "Quảng Trường Vua Hùng",
        "Quảng Trường Âu Lạc",
        "Quảng Trường La Mã",
        "Cầu Cửu Khúc",
    ]
    const list_SanKhau = [
        "Sân Khấu Dế Mèn",
        "Rạp Xiếc Thú",
        "Sân Khấu Ngôi Sao",
    ]
    const list_GiaoDucTraiNghiem = [
        "Nhà Trưng Bày Tiêu Bản Động Vật",
        "Thực Vật",
    ]
    const list_AmThuc = [
        "Nhà Hàng Thủy Tạ",
        "Cà Phê Vườn Đá",
        "Damsen Plaza",
    ]

    return (
        <Tabs>
            <TabList className="tabs-container pl-4 text-[30px] fontBanger text-[#67776F]">
                <Tab>Trò chơi</Tab>
                <Tab>Vườn thú</Tab>
                <Tab>Cảnh đẹp</Tab>
                <Tab>Sân khấu</Tab>
                <Tab>Giáo dục trải nghiệm </Tab>
                <Tab>Ẩm thực</Tab>
            </TabList>
            <hr className="border-[#EC008C] mx-5"/>

            <TabPanel className="px-12 pt-6">
                <div className="flex justify-between">
                    <ul className="fontNunito-semibold text-[25px] text-[#259E58] uppercase">
                        Cảm giác mạnh
                        {list_TroChoi_CamGiacManh.map((item, key) => {
                                const formattedIndex = `0${key + 1}`.slice(-2);
                                return (
                                    <div
                                        className="flex text-gray-600 text-[16px] fontNunito mt-6 normal-case items-center">
                                        <div className="relative w-8 h-8">
                                            <div className="absolute inset-0">
                                                <div
                                                    className="rounded-full border-1 border-pink-500 bg-white bg-opacity-50 flex items-center h-full">
                                                    <div className="pl-[5px]">
                                                        <ul>
                                                            <li className="text-pink-500" key={item}>
                                                                {formattedIndex}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pl-4">
                                            <p>{item}</p>
                                        </div>
                                    </div>
                                )
                            }
                        )}
                    </ul>
                    <ul className="fontNunito-semibold text-[25px] text-[#259E58] uppercase">
                        Tương tác ảo
                        {list_TroChoi_TuongTacAo.map((item, key) => {
                            const formattedIndex = `0${key + 1}`.slice(-2);
                            return (
                                <div
                                    className="flex text-gray-600 text-[16px] fontNunito mt-6 normal-case items-center">
                                    <div className="relative w-8 h-8">
                                        <div className="absolute inset-0">
                                            <div
                                                className="rounded-full border-1 border-pink-500 bg-white bg-opacity-50 flex items-center h-full">
                                                <div className="pl-[5px]">
                                                    <ul>
                                                        <li className="text-pink-500" key={item}>
                                                            {formattedIndex}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pl-4">
                                        <p>{item}</p>
                                    </div>
                                </div>
                            )
                            }
                        )}
                    </ul>
                    <ul className="fontNunito-semibold text-[25px] text-[#259E58] uppercase">
                        Giải trí
                        {list_TroChoi_GiaiTri.map((item, key) => {
                            const formattedIndex = `0${key + 1}`.slice(-2);
                            return (
                                <div
                                    className="flex text-gray-600 text-[16px] fontNunito mt-6 normal-case items-center">
                                    <div className="relative w-8 h-8">
                                        <div className="absolute inset-0">
                                            <div
                                                className="rounded-full border-1 border-pink-500 bg-white bg-opacity-50 flex items-center h-full">
                                                <div className="pl-[5px]">
                                                    <ul>
                                                        <li className="text-pink-500" key={item}>
                                                            {formattedIndex}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pl-4">
                                        <p>{item}</p>
                                    </div>
                                </div>
                            )
                            }
                        )}
                    </ul>
                    <ul className="fontNunito-semibold text-[25px] text-[#259E58] uppercase">
                        Thiếu nhi
                        {list_TroChoi_ThieuNhi.map((item, key) => {
                            const formattedIndex = `0${key + 1}`.slice(-2);
                            return (
                                <div
                                    className="flex text-gray-600 text-[16px] fontNunito mt-6 normal-case items-center">
                                    <div className="relative w-8 h-8">
                                        <div className="absolute inset-0">
                                            <div
                                                className="rounded-full border-1 border-pink-500 bg-white bg-opacity-50 flex items-center h-full">
                                                <div className="pl-[5px]">
                                                    <ul>
                                                        <li className="text-pink-500" key={item}>
                                                            {formattedIndex}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pl-4">
                                        <p>{item}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </TabPanel>

            <TabPanel className="pl-8">
                <div className="grid grid-cols-4">
                    {list_VuonThu.map((item, key) => {
                        const formattedIndex = `0${key + 1}`.slice(-2);
                        return (
                            <div className="flex text-gray-600 text-[16px] fontNunito mt-6 normal-case items-center">
                                <div className="relative w-8 h-8">
                                    <div className="absolute inset-0">
                                        <div
                                            className="rounded-full border-1 border-pink-500 bg-white bg-opacity-50 flex items-center h-full">
                                            <div className="pl-[5px]">
                                                <ul>
                                                    <li className="text-pink-500" key={item}>
                                                        {formattedIndex}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-4">
                                    <p>{item}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </TabPanel>

            <TabPanel className="pl-8">
                <div className="grid grid-cols-2 ">
                    {list_CanhDep.map((item, key) => {
                        const formattedIndex = `0${key + 1}`.slice(-2);
                        return (
                            <div className="flex text-gray-600 text-[16px] fontNunito mt-6 normal-case items-center">
                                <div className="relative w-8 h-8">
                                    <div className="absolute inset-0">
                                        <div
                                            className="rounded-full border-1 border-pink-500 bg-white bg-opacity-50 flex items-center h-full">
                                            <div className="pl-[5px]">
                                                <ul>
                                                    <li className="text-pink-500" key={item}>
                                                        {formattedIndex}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-4">
                                    <p>{item}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </TabPanel>

            <TabPanel className="pl-8">
                <div>
                    {list_SanKhau.map((item, key) => {
                        const formattedIndex = `0${key + 1}`.slice(-2);
                        return (
                            <div className="flex text-gray-600 text-[16px] fontNunito mt-6 normal-case items-center">
                                <div className="relative w-8 h-8">
                                    <div className="absolute inset-0">
                                        <div
                                            className="rounded-full border-1 border-pink-500 bg-white bg-opacity-50 flex items-center h-full">
                                            <div className="pl-[5px]">
                                                <ul>
                                                    <li className="text-pink-500" key={item}>
                                                        {formattedIndex}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-4">
                                    <p>{item}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </TabPanel>

            <TabPanel className="pl-8">
                <div>
                    {list_GiaoDucTraiNghiem.map((item, key) => {
                        const formattedIndex = `0${key + 1}`.slice(-2);
                        return (
                            <div className="flex text-gray-600 text-[16px] fontNunito mt-6 normal-case items-center">
                                <div className="relative w-8 h-8">
                                    <div className="absolute inset-0">
                                        <div
                                            className="rounded-full border-1 border-pink-500 bg-white bg-opacity-50 flex items-center h-full">
                                            <div className="pl-[5px]">
                                                <ul>
                                                    <li className="text-pink-500" key={item}>
                                                        {formattedIndex}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-4">
                                    <p>{item}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </TabPanel>

            <TabPanel className="pl-8">
                <div>
                    {list_AmThuc.map((item, key) => {
                        const formattedIndex = `0${key + 1}`.slice(-2);
                        return (
                            <div className="flex text-gray-600 text-[16px] fontNunito mt-6 normal-case items-center">
                                <div className="relative w-8 h-8">
                                    <div className="absolute inset-0">
                                        <div
                                            className="rounded-full border-1 border-pink-500 bg-white bg-opacity-50 flex items-center h-full">
                                            <div className="pl-[5px]">
                                                <ul>
                                                    <li className="text-pink-500" key={item}>
                                                        {formattedIndex}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-4">
                                    <p>{item}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </TabPanel>
        </Tabs>
        
    )
}

export default MucLuc;