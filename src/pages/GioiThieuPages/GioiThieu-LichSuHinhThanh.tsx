function GioiThieuLichSuHinhThanh() {
    const classNameTailwind = {
        paragraph_one:"text-left pt-[80px] fontNunito text-gray-500 text-[18px] leading-[27px]",
        paragraph_two:"text-left mt-2 fontNunito text-gray-500 text-[18px] leading-[27px]"
    }
    
    return (
        <section>
            <div className="bg-[#ECF3E0] justify-center p-6">
                <div className="bg-white p-6 justify-center">
                    <img src="src/assets/phao-hoa.png" alt=""/>
                    <div className="h-auto text-left pt-[56px] float">
                        <h1 className="fontBanger text-[76px] text-[#259E58] underline uppercase gap-2 w-fit">
                            lịch sử hình thành
                        </h1>
                        <div className="fontNunito text-[20px] font-semibold w-[220px] h-[120px] float-right mt-[-150px]">
                            <h3>Mô tả</h3>
                            <hr className="border-b-pink-500 border-b-[1px] my-2"/>
                            <p className="text-[16px] text-gray-500">
                                Đầm Sen là một trong những điểm bắn pháo hoa trong các sự kiện lớn của cả nước.
                            </p>
                        </div>
                        <div className="w-[973px]">
                            <p className={classNameTailwind?.paragraph_one}>
                                Lịch sử hình thành CVVH Đầm Sen bắt đầu sau ngày đất nước thống nhất.
                                Lúc bấy giờ, Đầm Sen còn là một khu ruộng hoang đầm lầy.
                                Nơi đó chỉ toàn những đụn rau muống, rau ngổ, cây cỏ rậm rịt.
                                Đồng thời đây cũng là nơi chứa các tệ nạn xã hội.
                            </p>
                            <p className={classNameTailwind?.paragraph_two}>
                                Ngày 15/2/1976, Thành ủy – UBND TP.HCM ra lời kêu gọi
                                “Hãy xây dựng cho thành phố 3 công viên văn hóa lớn, một tại Bình Tiên, một tại Tân Bình
                                và một tại Đầm Sen”.
                                Hàng triệu công nhân lao động đã tham gia.
                                Công viên Đầm Sen được khởi công như thế trên diện tích 55ha.
                                Từ một đầm lầy hôm nào, đã sớm trở thành một hồ nước sạch,
                                với cảnh quan thoáng mát cho người dân thành phố.
                            </p>
                        </div>
                        <div className="w-[1001px]">
                            <h2 className="fontBanger pt-10 pb-6 text-[40px] text-pink-500 uppercase gap-2">
                                các mốc son phát triển
                            </h2>
                            <ul className="list-disc pl-6 fontNunito text-[18px] leading-[27px] text-gray-500">
                                <li>Năm 1977 – 1983: Đầm Sen do Thành Phố quản lý.
                                    Sau đó, 8/9/1983 Thành Phố giao cho Quận 11 quản lý (55ha, theo quyết định
                                    325/QĐ-UB).
                                </li>
                                <li>Quyết định 215/QĐ-UB ngày 25/5/1984 giao Đầm Sen về các đơn vị:
                                    Ban xây dựng nhà đất và công trình quận 11,
                                    Xí nghiệp quốc doanh nuôi trồng thủy sản và Công ty ăn uống và dịch vụ tổng hợp quận
                                    11.
                                    Do khó khăn chung và thiếu vốn xây dựng. Đầm Sen chỉ đáp ứng được nhu cầu kinh tế là
                                    hồ nuôi cá thịt với một số cây rất ít,
                                    chưa hình thành là một công viên
                                </li>
                                <li>Năm 1985: Quận 11 ra quyết định 108/QĐ-UB thống nhất giao Đầm Sen cho Công ty Dịch
                                    vụ Văn hóa Tổng hợp quận 11
                                    và có đại diện Xí nghiệp nuôi trồng thủy sản để thành lập ban quản lý Đầm Sen.
                                </li>
                                <li>
                                    Năm 1989: Công ty du lịch quận 11, tức Công ty Dịch vụ Du lịch Phú Thọ ngày nay được
                                    giao quản lý Đầm Sen,
                                    xí nghiệp nuôi trồng thủy sản giải thể do làm ăn thua lỗ.
                                </li>
                                <li>
                                    Từ đó CÔNG VIÊN VĂN HÓA ĐẦM SEN, một đơn vị trực thuộc công ty Du lịch Dịch vụ Phú
                                    Thọ Quận 11,
                                    từ khi đi vào hoạt động là một khu vui chơi giải trí tới nay, đã có những bước phát
                                    triễn mạnh mẽ,
                                    trở thành một công viên rộng lớn và hiện đại bậc nhất hiện nay ở TP. HCM,
                                    trở thành một công viên văn hóa và du lịch đi đầu và thành công nhất trong cả nước.
                                    Từ đầu năm 2003, Công Viên Văn Hóa Đầm Sen chính thức là thành viên của Tổng Công Ty
                                    Du Lịch Sài Gòn (Saigontourist).
                                    Đó là nhờ sự quan tâm tập trung đầu tư và năng động của ban giám đốc công ty Du lịch
                                    Phú Thọ,
                                    sự quản lý sang suốt của BGĐ và tập thể cán bộ – công nhân viên có tinh thần trách
                                    nhiệm và dày dạn kinh nghiệm làm việc.
                                </li>
                            </ul>
                        </div>
                        <div className="pt-6">
                            <img className="w-full" src="src/assets/cau-cuu-khuc.png" alt=""/>
                        </div>
                        <hr className="pt-20 mx-auto border-b-[1px] border-b-green-200 h-full"/>
                        <div className="">
                            <h2 className="fontBanger pt-20 pb-6 text-[40px] text-pink-500 uppercase gap-2 text-center">
                                những loại hình dịch vụ trọng tâm
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GioiThieuLichSuHinhThanh;