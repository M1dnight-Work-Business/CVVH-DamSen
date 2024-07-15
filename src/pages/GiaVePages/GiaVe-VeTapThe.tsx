function GiaVeTapThe() {
    const classNameTailwind = {
        paragraph: "text-left pt-6 fontNunito text-gray-500 text-[18px] leading-[27px]",
        ul: "text-left pt-6 pl-6 fontNunito-bold text-gray-600 text-[18px] leading-[27px] list-decimal",
        ul__: "text-left pl-6 fontNunito text-gray-500 text-[18px] leading-[27px] list-disc",
    }

    return (
        <section>
            <div className="bg-[#ECF3E0] justify-center p-6">
                <div className="bg-white p-6 justify-center">
                    <img src="src/assets/ve-tap-the.png" alt=""/>
                    <div className="h-auto text-left pt-[56px] float">
                        <h1 className="fontBanger text-[76px] text-[#259E58] underline uppercase gap-2 w-fit">
                            Vé tập thể
                        </h1>
                        <div
                            className=" fontNunito text-[20px] font-semibold w-[249px] h-[193px] float-right mt-[-150px]">
                            <h3>Mô tả</h3>
                            <hr className="border-b-pink-500 border-b-[1px] my-2"/>
                            <p className="text-[16px] text-gray-500">
                                Đầm Sen là nơi vui chơi yêu thích của các bạn nhỏ.
                            </p>
                        </div>
                        <div className="pt-20 w-[951px]">
                            <p className={classNameTailwind?.paragraph}>
                                Đối với các đoàn khách: Nhóm bạn, cơ quan đoàn thể, Trường học, công ty du lịch, công
                                nhân,
                                chúng tôi có giá vé tập thể ưu đãi cho Quý cơ quan khi đến tham quan vui chơi tại CVVH
                                Đầm Sen.
                                Bên cạnh đó, Quý cơ quan cũng có thể đặt yêu cầu hướng dẫn, tổ chức sự kiện,
                                Team building chúng tôi cũng sẽ đáp ứng đầy đủ.
                            </p>
                            <p className={classNameTailwind?.paragraph}>
                                Để biết chi tiết về chính sách giá ưu đãi và thực đơn cơm tại CVVH Đầm Sen,
                                Quý khách vui lòng liên hệ với nhân viên phụ trách như sau:
                            </p>
                            <ul className={classNameTailwind?.ul}>
                                <li>Công ty Du lịch/ giáo xứ/ nhóm bạn/ Cơ quan đoàn thể:</li>
                                <ul className={classNameTailwind?.ul__}>
                                    <li>Mrs. Minh: 0902 575 805</li>
                                    <li>Mr. Đăng Khánh: 0789 848 418</li>
                                </ul>
                                <li>Trường học: <span className="fontNunito">Mr. Hiếu Trung: 0989 967 129</span></li>
                                <li>Công nhân + sự kiện:</li>
                                <ul className={classNameTailwind?.ul__}>
                                    <li>Mrs. Minh: 0902 575 805</li>
                                    <li>Mr. Đăng Khánh: 0789 848 418</li>
                                </ul>
                                <li>Hotline: <span className="fontNunito">(028) 3963 3593 – 0902575805 (Mrs. Minh)</span></li>
                            </ul>
                        </div>
                        <div className="fontBanger pt-10 pb-6 text-[40px] text-pink-500 gap-2">
                            <h2>
                                Đặt tour - sự kiện - tiệc
                            </h2>
                            <p className={classNameTailwind?.paragraph}>
                                Phòng Tiếp nhận Tour Đầm Sen
                            </p>
                            <ul className="text-left pl-6 fontNunito-bold text-gray-500 text-[18px] leading-[27px] list-disc">
                                <li>
                                    Địa chỉ:
                                    <span
                                        className="fontNunito"> Cổng 1A, Số 3, Hòa Bình, Phường 3, Quận 11, TP. HCM</span>
                                </li>
                                <li>
                                    ĐT: 
                                    <span
                                        className="fontNunito"> (028) 3963.3593 – (028) 3858 8868</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GiaVeTapThe