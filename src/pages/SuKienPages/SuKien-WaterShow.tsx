import {FaArrowLeftLong, FaArrowRightLong} from "react-icons/fa6";

function SuKienWaterShow() {
    const classNameTailwind = {
        paragraph: "text-left pt-6 fontNunito text-gray-500 text-[18px] leading-[27px]",
        span: "text-[#005AAB] underline"
    }

    return (
        <section>
            <div className="bg-[#ECF3E0] justify-center p-6 underline-offset-auto">
                <div className="bg-white p-6 justify-center">
                    <img className="w-screen" src="src/assets/water-show.png" alt=""/>
                    <div className="h-auto text-left pt-[56px] float">
                        <h1 className="fontBanger text-[76px] text-[#259E58] underline uppercase gap-2 w-auto">
                            nhạc nước đầm sen
                            <br className="hidden md:inline"/>
                            <span className="block md:inline">water show</span>
                        </h1>
                        <div className="flex-shrink-0 relative justify-between">
                            <div className="flex text-[#EC008C] text-[16px] jus fontNunito-semibold">
                                <img className="mr-1" src="src/assets/tag.svg" alt=""/>
                                <span>Sắp diễn ra</span>
                                <img className="ml-4" src="src/assets/time.svg" alt=""/>
                                <span className="text-gray-500 pl-1">11/02/2020</span>
                            </div>
                        </div>
                        <div
                            className=" fontNunito text-[20px] font-semibold w-[249px] h-[193px] float-right md:mt-[-280px]">
                            <h3>Mô tả</h3>
                            <hr className="border-b-pink-500 border-b-[1px] my-2"/>
                            <p className="text-[16px] text-gray-500">
                                Đầm Sen là nơi vui chơi yêu thích của các bạn nhỏ.
                            </p>
                        </div>
                    </div>
                    <div className="pt-20 w-[951px]">
                        <p className={classNameTailwind?.paragraph}>
                            CVVH Đầm Sen chuẩn bị ra mắt công trình nhạc nước Đầm Sen Water Show với tổng chiều dài biểu
                            diễn hơn 100 mét, kết hợp với khói lửa, công nghệ Laser dance và màn hình khổng lồ hình rẽ
                            quạt, được tạo bằng nước với chiều ngang 40 mét, và chiều cao 20 mét.
                        </p>
                    </div>
                    <div className="pt-10 text-center">
                        <img className="w-full pb-3" src="src/assets/water-show-2.png" alt=""/>
                        <p className="fontNunito text-gray-500 text-[16px]">Ảnh minh họa dự án Đầm Sen Water Show</p>
                    </div>
                    <div className="pt-10 w-[951px]">
                        <p className={classNameTailwind?.paragraph}>
                            Sau đại dịch Covid 19, CVVH Đầm Sen đã dần phục hồi trở lại. Đặc biệt là tiếp tục triển khai
                            dự án nhạc nước Đầm Sen Water Show. Đây được xem là công trình nhạc nước hoàn toàn mới tại
                            TP.HCM, được biểu diễn ngay trên mặt hồ của công viên.
                        </p>
                        <p className={classNameTailwind?.paragraph}>
                            Điểm đặc biệt của công trình nhạc nước này, là hình ảnh 3D được chiếu trên màn hình rẽ quạt
                            khổng lồ được tạo bằng nước, rộng 40 mét (cao 20 mét). Hệ thống vòi phun nhạc nước hiện đại
                            trên thê giới hiện nay, được lập trình kỹ lưỡng đến từng giây. Hệ thống khói lửa được tạo ra
                            ngay trên mặt hồ. Đồng thời, hệ thống ánh sáng laser hiện đại được nhập từ Châu Âu, và hệ
                            thống âm thanh với cả chục chiếc loa công suất lớn, đặt xung quanh hồ để tạo hiệu ứng cho
                            người xem.
                        </p>
                    </div>
                    <div className="pt-10 text-center">
                        <img className="w-full pb-3" src="src/assets/water-show-3.png" alt=""/>
                        <p className="fontNunito text-gray-500 text-[16px]">
                            Vị trí ngồi rộng rãi tại nhà hàng Thủy Tạ
                            xem biểu diễn Laser show màn nước 3D trên hồ Đầm Sen 2019
                        </p>
                    </div>
                    <div className="pt-10 w-[951px]">
                        <p className={classNameTailwind?.paragraph}>
                            Trước đây, CVVH Đầm Sen đã từng có công trình nhạc nước, nhưng với quy mô nhỏ tại <a href=""
                                                                                                                 className={classNameTailwind?.span}> khu
                            vực quảng trường La Mã</a>.
                            Rồi đến tháng tư năm 2019, <a href="" className={classNameTailwind?.span}> Công ty Cổ phần
                            Dịch vụ Du lịch Phú Thọ</a> (Phuthotourist – cơ quan chủ quản của Đầm Sen) đã quyết định đầu
                            tư giai đoạn 1 của dự án
                            nhạc nước trên mặt hồ với <a href="" className={classNameTailwind?.span}> công trình màn
                            nước laser show</a>.
                            Đến nay, giai đoạn 2 của hệ thống đang dần hoàn thiện trong tháng 11.
                            Dự kiến Đầm Sen Water Show sẽ chính thức ra mắt vào đầu
                            tháng 12/2020, để kịp phục vụ du khách vào những sự kiện cuối năm.
                        </p>
                        <p className={classNameTailwind?.paragraph}>
                            Ban lãnh đạo Phuthotourist cũng đang cân nhắc liệu có cho phép du khách được thưởng thức
                            nhạc nước bằng <a href="" className={classNameTailwind?.span}> thuyền Pedalo</a> trên mặt
                            hồ.
                            Nếu được, chắc chắn đây sẽ là điểm thú vị cho du
                            khách được trải nghiệm cảm giác ở ngồi trên nước và xem nhạc nước như thế nào.
                        </p>
                    </div>

                    <div className="w-full flex justify-between">
                        <div>
                            <button
                                className="float-left fontNunito-bold pt-20 pl-5 flex items-center text-pink-500">
                                <FaArrowLeftLong className="mr-[10px] items-center flex"/>
                                Phượng hoàng bay
                            </button>
                        </div>
                        <div>
                            <button
                                className="float-right- fontNunito-bold pt-20 pr-5 flex items-center text-pink-500">
                                Tàu vượt thác
                                <FaArrowRightLong className="ml-[10px] items-center flex"/>
                            </button>
                        </div>
                    </div>
                    <div className="pt-4 fontBanger text-[32px] pl-4 text-[#259E58] uppercase gap-2 w-fit">
                        <h2>
                            Có thể bạn thích
                        </h2>
                    </div>
                    <div className="flex items-center justify-center gap-3 pb-[72px]">
                        <div className="flex-shrink-0 relative">
                            <button
                                className="absolute left-[-30px] top-[50%] transform -translate-y-1/2 text-pink-500">
                                <img className="w-2 h-5" src="src/assets/LeftArrow_2.svg" alt=""/>
                            </button>
                            <img className="h-[165px]" src="src/assets/hippo.png" alt=""/>
                            <div className="flex pt-2 justify-between">
                                <h3 className="text-[#259E58] fontNunito-semibold text-[14px]">
                                    Hà Mã Châu Phi
                                </h3>
                                <p className="text-[14px] fontNunito text-gray-500">04/01/2021</p>
                            </div>
                            <div className="flex text-[#EC008C] text-[14px] fontNunito-semibold">
                                <img className="mr-1" src="src/assets/tag.svg" alt=""/> <span>Vườn thú</span>
                            </div>
                        </div>
                        <div className="flex-shrink-0 relative">
                            <img className="h-[165px]" src="src/assets/vong-xoay-khong-gian.png" alt=""/>
                            <div className="flex pt-2 justify-between">
                                <h3 className="text-[#259E58] fontNunito-semibold text-[14px]">
                                    Vòng xoay không gian
                                </h3>
                                <p className="text-[14px] fontNunito text-gray-500">11/02/2020</p>
                            </div>
                            <div className="flex text-[#EC008C] text-[14px] fontNunito-semibold">
                                <img className="mr-1" src="src/assets/tag.svg" alt=""/> <span>Cảm giác mạnh</span>
                            </div>
                        </div>
                        <div className="flex-shrink-0 relative">
                            <img className="h-[165px]" src="src/assets/vong-quay-than-toc.png" alt=""/>
                            <div className="flex pt-2 justify-between">
                                <h3 className="text-[#259E58] fontNunito-semibold text-[14px]">
                                    Vòng quay thần tốc
                                </h3>
                                <p className="text-[14px] fontNunito text-gray-500">12/02/2020</p>
                            </div>
                            <div className="flex text-[#EC008C] text-[14px] fontNunito-semibold">
                                <img className="mr-1" src="src/assets/tag.svg" alt=""/> <span>Cảm giác mạnh</span>
                            </div>
                        </div>
                        <div className="flex-shrink-0 relative">
                            <img className="object-cover w-[247.5px] h-[165px]" src="src/assets/ca-chep-nhao-lon.png" alt=""/>
                            <button
                                className="absolute right-[-30px] top-[50%] transform -translate-y-1/2 text-pink-500">
                                <img className="w-2 h-5" src="src/assets/RightArrow_2.svg" alt=""/>
                            </button>
                            <div className="flex pt-2 justify-between">
                                <h3 className="text-[#259E58] fontNunito-semibold text-[14px]">
                                    Cá chép nhào lộn
                                </h3>
                                <p className="text-[14px] fontNunito text-gray-500">11/02/2020</p>
                            </div>
                            <div className="flex text-[#EC008C] text-[14px] fontNunito-semibold">
                                <img className="mr-1" src="src/assets/tag.svg" alt=""/> <span>Cảm giác mạnh</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SuKienWaterShow;
