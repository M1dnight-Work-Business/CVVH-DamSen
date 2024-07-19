import { FaArrowRightLong } from "react-icons/fa6";
function GioiThieu() {
    const classNameTailwind = {
        ul: "text-left pl-6 fontNunito-bold text-gray-500 text-[16px] -ml-1 leading-[27px] list-disc",
        span: "fontNunito text-gray-400",
    }
    return (
        <section>
            <div className="bg-[#ECF3E0] justify-center p-6">
                <div className="bg-white p-6 justify-center">
                    <img src="src/assets/TrangChu.png" alt=""/>
                    <p className="text-center text-[#666666] text-[16px] fontNunito pt-2">
                        Công viên Văn Hóa Đầm Sen với hơn 30 trò
                        chơi, địa điểm check in và nhiều loại thú quý hiếm
                    </p>

                    <div className="text-center pt-[56px]">
                        <h1 className="fontBanger text-[96px] text-[#259E58] underline uppercase gap-2">
                            đầm sen thế giới tuyệt vời
                        </h1>
                    </div>

                    <div className="pl-[30px] pt-[73px]">
                        <div className="w-[752px] h-[532px] pl-[60px] bg-[#259E58] relative">
                            <div className="pt-[140px] pr-[241px] pb-[60px] 
                                            text-center text-white fontNunito">
                                <h1 className="fontNunito-bold text-4xl">
                                    Hơn 30 trò chơi
                                </h1>
                                <p className="pt-8 text-[16px] leading-[27px]">
                                    Công viên Văn hóa Đầm Sen có 13 trò chơi cảm giác mạnh
                                    (Tàu lượn siêu tốc, vượt thác, Power Surge…);
                                    5 trò chơi tương tác ảo công nghệ hiện đại;
                                    5 trò chơi thư giãn;
                                    12 trò chơi thiếu nhi;
                                    và nhiều trò chơi khác.
                                </p>
                            </div>
                            <div className="absolute top-[75px] -right-44">
                                <img className="object-cover h-[500px] w-[346px] " src="src/assets/TrangChu.png"
                                     alt=""/>
                            </div>
                            <div className="fontNunito-bold absolute bg-white ml-[150px] w-[140px] h-[40px]
                            text-center flex justify-center items-center rounded-md text-[#259E58]">
                                <button>
                                    Xem thêm
                                </button>
                                <FaArrowRightLong className="ml-[10px] items-center flex"/>
                            </div>
                        </div>
                    </div>
                    <p className="text-center pr-48 text-[#666666] text-[16px] fontNunito pt-2">
                        Công viên Văn hóa Đầm Sen từ trên cao.
                    </p>

                    <div className="pl-[280px] pt-[84px]">
                        <div className="w-[752px] h-[532px] pl-[60px] bg-[#F625A1] relative">
                            <div className="pt-[120px] pl-[200px] pr-[64px] pb-[60px] 
                                            text-center text-white fontNunito">
                                <h1 className="font-extrabold text-4xl">
                                    Nhiều loại thú quý hiếm
                                </h1>
                                <p className="pt-8 text-[16px] leading-[27px]">
                                    Đầm Sen còn được biết đến như một vườn thú có thể nuôi sinh sản được các loại động
                                    vật quý hiếm
                                    (thuộc sách đỏ) như: đười ươi Sumatra (sinh 2 lần); vượn má vàng; chim già đẩy, chim
                                    Giang sen…
                                    Ngoài ra còn có một Thủy cung với các loài thủy sinh vật biển và cá Amazon phong
                                    phú,
                                    như cá mập, cá Hải tượng (2 mét)…
                                </p>
                            </div>
                            <div className="absolute top-[75px] -left-40">
                                <img className="object-cover h-[500px] w-[346px] " src="src/assets/monkey_3.png"
                                     alt=""/>
                            </div>
                            <div className="fontNunito-bold absolute bg-white ml-[350px] w-[140px] h-[40px]
                            text-center flex justify-center items-center rounded-md text-[#F625A1]">
                                <button>
                                    Xem thêm
                                </button>
                                <FaArrowRightLong className="ml-[10px] items-center flex"/>
                            </div>
                        </div>
                    </div>
                    <p className="text-right pr-52 text-[#666666] text-[16px] fontNunito pt-2">
                        Vượn đen má vàng tại Công viên Văn hóa Đầm Sen.
                    </p>

                    <div className="pl-[30px] pt-[73px]">
                        <div className="w-[752px] h-[532px] pl-[55px] bg-[#259E58] relative">
                            <div className="pt-[140px] pr-[241px] pb-[60px] 
                                            text-center text-white fontNunito">
                                <h1 className="fontNunito-bold text-4xl">
                                    Nhà hàng Thủy Tạ Đầm Sen
                                </h1>
                                <p className="pt-8 text-[16px] leading-[27px]">
                                    Ẩm thực trong Công viên Văn hóa Đầm Sen gồm nhiều món ăn đường phố trong công viên,
                                    đặc biệt là nhà hàng Thủy Tạ, với không gian thưởng thức ẩm thực bên hồ.
                                </p>
                            </div>
                            <div className="absolute top-[75px] -right-44">
                                <img className="object-cover h-[500px] w-[346px] " src="src/assets/cau-cuu-khuc-2.png"
                                     alt=""/>
                            </div>
                            <div className="fontNunito-bold absolute bg-white ml-[150px] w-[140px] h-[40px]
                            text-center flex justify-center items-center rounded-md text-[#259E58]">
                                <button>
                                    Xem thêm
                                </button>
                                <FaArrowRightLong className="ml-[10px] items-center flex"/>
                            </div>
                        </div>
                    </div>
                    <p className="text-center pr-48 text-[#666666] text-[16px] fontNunito pt-2">
                        Công viên Văn hóa Đầm Sen từ trên cao.
                    </p>

                    <div className="pl-[280px] pt-[84px]">
                        <div className="w-[752px] h-[532px] pl-[60px] bg-[#F625A1] relative">
                            <div className="pt-[120px] pl-[200px] pr-[64px] pb-[45px] 
                                            text-center text-white fontNunito">
                                <h1 className="font-extrabold text-4xl">
                                    Cà phê Vườn Đá
                                </h1>
                                <p className="pt-8 text-[16px] leading-[27px]">
                                    Cà phê Vườn đá có không gian rộng, và nhiều cây xanh tại Sài Gòn.
                                    Đặc biệt, trong khuôn viên cà phê có một bộ sưu tập đá khổng lồ,
                                    với nhiều hình dáng kỳ dị theo nhãn quan của mỗi người.
                                    Buổi sáng thứ bảy và chủ nhật, quán thường đông khách do có nhạc sống,
                                    với những ca khúc bất hủ của thập niên 70-80, do các ban nhạc chuyên nghiệp TP.HCM
                                    biểu diễn.
                                </p>
                            </div>
                            <div className="absolute top-[75px] -left-40">
                                <img className="object-cover h-[500px] w-[346px] " src="src/assets/cafe-vuon-da.png"
                                     alt=""/>
                            </div>
                            <div className="fontNunito-bold absolute bg-white ml-[350px] w-[140px] h-[40px]
                            text-center flex justify-center items-center rounded-md text-[#F625A1]">
                                <button>
                                    Xem thêm
                                </button>
                                <FaArrowRightLong className="ml-[10px] items-center flex"/>
                            </div>
                        </div>
                    </div>
                    <p className="text-right pr-52 text-[#666666] text-[16px] fontNunito pt-2">
                        Vượn đen má vàng tại Công viên Văn hóa Đầm Sen.
                    </p>
                    <div className="pt-12">
                        <h2 className="text-[23px] text-[#EC008C] uppercase fontNunito-semibold">Ghi chú:</h2>
                        <ul className={classNameTailwind?.ul}>
                            <li>
                                Giờ bán vé: <span
                                className={classNameTailwind?.span}>8 giờ 00 - 17 giờ 30</span>
                            </li>
                            <li>
                                Vé mua từ cổng: <span className={classNameTailwind?.span}>
                                                        là vé được bán tại 2 cổng chính số 1A Lạc Long Quân 
                                                        (hoặc số 3 Hòa Bình), cổng số 2 (nhà hàng Thủy Tạ).
                                                    </span>
                            </li>
                            <li>
                                Vé mua trong công viên: <span className={classNameTailwind?.span}>
                                                                là loại vé được bán tại các quầy trong công viên. 
                                                                Đây là các loại vé trọn gói đã được trừ vé vào cổng của quý khách.
                                                            </span>
                            </li>
                            <li>
                                Vé từ cổng Công viên nước: <span className={classNameTailwind?.span}>
                                                                    là loại vé bán từ cổng liên thông phía công viên nước. 
                                                                    Đây là vé dành cho các du khách vui chơi phía công viên nước,      
                                                                    và muốn sang CVVH Đầm Sen.
                                                            </span>
                            </li>
                            <li>
                                {">"}1.4m: <span className={classNameTailwind?.span}>người cao trên 1,4m</span>
                            </li>
                            <li>
                                {"<"}1,4m: <span className={classNameTailwind?.span}>người cao dưới 1,4m</span>
                            </li>
                            <li>
                                Trẻ em dưới 1m được miễn phí <span className={classNameTailwind?.span}> (nhưng phải đi cùng với người lớn).</span>
                            </li>
                            <li>
                                Có vé mời, được giảm 50% vé trọn gói <span className={classNameTailwind?.span}>(áp dụng mua từ cổng).</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GioiThieu;