function GiaVeTrongCongVien() {
    const classNameTailwind = {
        ul: "text-left pl-6 fontNunito-bold text-gray-500 text-[16px] -ml-1 leading-[27px] list-disc",
        span: "fontNunito text-gray-400",
        li: "text-gray-500 fontNunito",

        div_VeThamQuan:"grid place-content-start justify-center pt-[30px] w-[300px] h-[550px] rounded-3xl border-solid border-4 border-[#259E58]",
        div_VeThamQuan__: "w-[235px] bg-[#259E58] rounded-b-[18px] h-[80px] origin-center flex justify-center items-center text-white uppercase fontNunito-bold text-2xl",

        div_VeTronGoi: "grid place-content-start justify-center pt-[30px] w-[300px] h-[550px] rounded-3xl border-solid border-4 border-[#FF41B2]",
        div_VeTronGoi__: "w-[240px] bg-[#FF41B2] rounded-b-[18px] h-[80px] origin-center flex justify-center items-center text-white uppercase fontNunito-bold text-2xl",

        div_VeSilver: "grid place-content-start justify-center pt-[30px] w-[300px] h-[550px] rounded-3xl border-solid border-4 border-[#3781DB]",
        div_VeSilver__: "w-[240px] bg-[#3781DB] rounded-b-[18px] h-[80px] origin-center flex justify-center items-center text-white uppercase fontNunito-bold text-2xl"
    }
    return (
        <section>
            <div className="bg-[#ECF3E0] justify-center items-start p-6">
                <div className="bg-white p-6 justify-center">
                    <img className=" w-full " src="src/assets/png/gia-ve.png" alt=""/>
                    <div className="text-left pt-[56px]">
                        <h1 className="fontBanger text-[96px] text-[#259E58] underline uppercase gap-2">
                            vé trong công viên
                        </h1>
                        <div
                            className=" fontNunito text-[20px] font-semibold w-[249px] h-[193px] float-right mt-[-150px]">
                            <h3>Mô tả</h3>
                            <hr className="border-b-pink-500 border-b-[1px] my-2"/>
                            <p className="text-[16px] text-gray-500">
                                Đầm Sen là điểm check-in được ưa chuộng của giới trẻ hiện nay.
                            </p>
                        </div>

                        <div className="w-full pt-12 flex gap-12 justify-center flex-wrap">
                            <div className={classNameTailwind?.div_VeThamQuan}>
                                <div className={classNameTailwind?.div_VeThamQuan__}>
                                    Vé tham quan
                                </div>
                                <div className="pt-5 flex fontNunito text-[16px]">
                                    <img src="src/assets/svg/check.svg" alt="" className="mr-2"/>
                                    <span className="text-gray-500">Tham quan trong ngày</span>
                                </div>
                                <div className="pt-1 fontNunito flex text-[16px]">
                                    <img src="src/assets/svg/x.svg" alt="" className="mr-2 -ml-1"/>
                                    <span className="text-gray-400 line-through">Bao gồm trò chơi</span>
                                </div>
                                <div className="pt-1 fontNunito flex text-[16px]">
                                    <img src="src/assets/svg/x.svg" alt="" className="mr-2 -ml-1"/>
                                    <span className="text-gray-400 line-through">Dịch vụ xe điện</span>
                                </div>
                                <div className="pt-1 fontNunito flex text-[16px]">
                                    <ul className={classNameTailwind?.ul}>
                                        <li>
                                            Mua từ cổng:
                                            <ul>
                                                <li className={classNameTailwind?.li}>
                                                    + 120.000 VNĐ/người ({">"}1.4m)
                                                </li>
                                                <li className={classNameTailwind?.li}>
                                                    + 80.000 VNĐ/trẻ em ({"<"}1.4m)
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Mua từ cổng Công viên nước:
                                            <ul>
                                                <li className={classNameTailwind?.li}>
                                                    + 80.000 VNĐ/người ({">"}1.4m)
                                                </li>
                                                <li className={classNameTailwind?.li}>
                                                    + 50.000 VNĐ/trẻ em ({"<"}1.4m)
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className={classNameTailwind?.div_VeTronGoi}>
                                <div className={classNameTailwind?.div_VeTronGoi__}>
                                    Vé trọn gói
                                </div>
                                <div className="pt-5 flex fontNunito text-[16px]">
                                    <img src="src/assets/svg/check.svg" alt="" className="mr-2"/>
                                    <span className="text-gray-500">Tham quan trong ngày</span>
                                </div>
                                <div className="pt-1 fontNunito flex text-[16px]">
                                    <img src="src/assets/svg/check.svg" alt="" className="mr-2"/>
                                    <span className="text-gray-500">Bao gồm trò chơi</span>
                                </div>
                                <div className="pt-1 fontNunito flex text-[16px]">
                                    <img src="src/assets/svg/x.svg" alt="" className="mr-2 -ml-1"/>
                                    <span className="text-gray-400 line-through">Thuỷ cung</span>
                                </div>
                                <div className="pt-1 fontNunito flex text-[16px]">
                                    <img src="src/assets/svg/x.svg" alt="" className="mr-2 -ml-1"/>
                                    <span className="text-gray-400 line-through">Dịch vụ xe điện</span>
                                </div>
                                <div className="pt-1 fontNunito flex text-[16px]">
                                    <ul className={classNameTailwind?.ul}>
                                        <li>
                                            Mua từ cổng:
                                            <ul>
                                                <li className={classNameTailwind?.li}>
                                                    + 260.000 VNĐ/người ({">"}1.4m)
                                                </li>
                                                <li className={classNameTailwind?.li}>
                                                    + 180.000 VNĐ/trẻ em ({"<"}1.4m)
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Mua từ cổng Công viên nước:
                                            <ul>
                                                <li className={classNameTailwind?.li}>
                                                    + 220.000 VNĐ/người ({">"}1.4m)
                                                </li>
                                                <li className={classNameTailwind?.li}>
                                                    + 150.000 VNĐ/trẻ em ({"<"}1.4m)
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Mua trong Công viên:
                                            <ul>
                                                <li className={classNameTailwind?.li}>
                                                    + 150.000 VNĐ/người
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={classNameTailwind?.div_VeSilver}>
                                <div className={classNameTailwind?.div_VeSilver__}>
                                    Vé silver
                                </div>
                                <div className="pt-5 flex fontNunito text-[16px]">
                                    <img src="src/assets/svg/check.svg" alt="" className="mr-2"/>
                                    <span className="text-gray-500">Tham quan trong ngày</span>
                                </div>
                                <div className="pt-1 fontNunito flex text-[16px]">
                                    <img src="src/assets/svg/check.svg" alt="" className="mr-2"/>
                                    <span className="text-gray-500">Bao gồm trò chơi</span>
                                </div>
                                <div className="pt-1 fontNunito flex text-[16px]">
                                    <img src="src/assets/svg/check.svg" alt="" className="mr-2"/>
                                    <span className="text-gray-500">Lối đi riêng</span>
                                </div>
                                <div className="pt-1 fontNunito flex text-[16px]">
                                    <img src="src/assets/svg/x.svg" alt="" className="mr-2 -ml-1"/>
                                    <span className="text-gray-400 line-through">Thuỷ cung</span>
                                </div>
                                <div className="pt-1 fontNunito flex text-[16px]">
                                    <img src="src/assets/svg/x.svg" alt="" className="mr-2 -ml-1"/>
                                    <span className="text-gray-400 line-through">Massage cá</span>
                                </div>
                                <div className="pt-1 fontNunito flex text-[16px]">
                                    <img src="src/assets/svg/x.svg" alt="" className="mr-2 -ml-1"/>
                                    <span className="text-gray-400 line-through">Dịch vụ xe điên</span>
                                </div>
                                <div className="pt-1 fontNunito flex text-[16px]">
                                    <ul className={classNameTailwind?.ul}>
                                        <li>
                                            Mua từ cổng:
                                            <ul>
                                                <li className={classNameTailwind?.li}>
                                                    + 380.000 VNĐ/người ({">"}1.4m)
                                                </li>
                                                <li className={classNameTailwind?.li}>
                                                    + 240.000 VNĐ/trẻ em ({"<"}1.4m)
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Mua từ cổng Công viên nước:
                                            <ul>
                                                <li className={classNameTailwind?.li}>
                                                    + 340.000 VNĐ/người ({">"}1.4m)
                                                </li>
                                                <li className={classNameTailwind?.li}>
                                                    + 220.000 VNĐ/trẻ em ({"<"}1.4m)
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Mua trong Công viên:
                                            <ul>
                                                <li className={classNameTailwind?.li}>
                                                    + 280.000 VNĐ/người
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
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
            </div>
        </section>
    )
}

export default GiaVeTrongCongVien;