function GiaVeDichVu() {
    const classNameTailwind = {
        paragraph: "text-left pt-6 fontNunito text-gray-500 text-[18px] leading-[27px]",
    }
    return(
        <section>
            <div className="bg-[#ECF3E0] justify-center items-start p-6">
                <div className="bg-white p-6 justify-center">
                    <img className=" w-full " src="src/assets/dich-vu.png" alt=""/>
                    <div className="text-left pt-[56px]">
                        <h1 className="fontBanger text-[96px] text-[#259E58] underline uppercase gap-2">
                            vé dịch vụ
                        </h1>
                        <div
                            className=" fontNunito text-[20px] font-semibold w-[249px] h-[193px] float-right mt-[-150px]">
                            <h3>Mô tả</h3>
                            <hr className="border-b-pink-500 border-b-[1px] my-2"/>
                            <p className="text-[16px] text-gray-500">
                                Trải nghiệm các dịch vụ tiện ích của Đầm Sen ngay bạn nhé!
                            </p>
                        </div>
                        <div className="pt-20 w-[973px]">
                            <p className={classNameTailwind?.paragraph}>
                                Bên cạnh các vé tham quan và chơi trò chơi tại Đầm Sen, 
                                chúng tôi còn có các vé dịch vụ cộng thêm dành cho du khách. 
                                Trong đó có các dịch vụ như xe điện, giữ đồ, cho thuê xe đẩy, xe nôi, xe lăn.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default GiaVeDichVu;