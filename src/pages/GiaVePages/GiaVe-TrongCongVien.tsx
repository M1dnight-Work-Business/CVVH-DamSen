function GiaVeTrongCongVien() {
    return (
        <section>
            <div className="bg-[#ECF3E0] justify-center items-start p-6">
                <div className="bg-white p-6 justify-center">
                    <img className=" w-full " src="src/assets/gia-ve.png" alt=""/>
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GiaVeTrongCongVien;