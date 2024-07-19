function GiaVeTapTheDuc() {
    const classNameTailwind = {
        paragraph: "text-left pt-6 fontNunito text-gray-500 text-[18px] leading-[27px]",
        
        div_GioMoCua: "grid grid-col-3 justify-center pt-[30px] w-[300px] h-[400px] rounded-3xl border-solid border-4 border-[#259E58]",
        div_GioMoCua__: "w-[200px] bg-[#259E58] rounded-b-[18px] h-[150px] origin-center flex justify-center items-center",
        
        div_GiaVe: "grid grid-col-3 justify-center pt-[30px] w-[300px] h-[400px] rounded-3xl border-solid border-4 border-[#FF41B2]",
        div_GiaVe__:"w-[200px] bg-[#FF41B2] rounded-b-[18px] h-[150px] origin-center flex justify-center items-center",
        
        div_VeThang:"grid grid-col-3 justify-center pt-[30px] w-[300px] h-[400px] rounded-3xl border-solid border-4 border-[#3781DB]",
        div_VeThang__:"w-[200px] bg-[#3781DB] rounded-b-[18px] h-[150px] origin-center flex justify-center items-center"
    }
    return (
        <section>
            <div className="bg-[#ECF3E0] justify-center items-start p-6">
                <div className="bg-white p-6 justify-center">
                    <img className=" w-full " src="src/assets/png/tap-the-duc.png" alt=""/>
                    <div className="text-left pt-[56px]">
                        <h1 className="fontBanger text-[96px] text-[#259E58] underline uppercase gap-2">
                            vé tập thể dục
                        </h1>
                        <div
                            className=" fontNunito text-[20px] font-semibold w-[249px] h-[193px] float-right mt-[-150px]">
                            <h3>Mô tả</h3>
                            <hr className="border-b-pink-500 border-b-[1px] my-2"/>
                            <p className="text-[16px] text-gray-500">
                                Đầm Sen là nơi tập thể dục yêu thích của hội người cao tuổi
                            </p>
                        </div>
                        <div className="pt-20 w-[973px]">
                            <p className={classNameTailwind?.paragraph}>
                                Quý khách có thể vào CVVH Đầm Sen để tập thể dục quanh hồ thoáng mát vào mỗi buổi sáng,
                                trên diện tích 32 hecta với nhiều cây xanh và không khí trong lành của một công viên
                                giải trí hàng đầu Việt Nam.
                            </p>
                        </div>
                        <div className="pt-12 flex gap-[60px] justify-center flex-wrap">
                            <div className={classNameTailwind?.div_GioMoCua}>
                                <div className={classNameTailwind?.div_GioMoCua__}>
                                    <img className="w-[90px] h-[90px]" src="src/assets/svg/gio-mo-cua.svg" alt=""/>
                                </div>
                                <h1 className="text-center uppercase fontNunito-semibold -mt-[40px] text-[30px] leading-[48px] text-[#259E58]">
                                    giờ mở cửa
                                </h1>
                                <h2 className="text-center fontNunito-semibold -mt-[65px] text-[18px] text-gray-500">
                                    4h00 - 8h00
                                    <br/>
                                    (mỗi ngày)
                                </h2>
                                
                            </div>

                            <div className={classNameTailwind?.div_GiaVe}>
                                <div className={classNameTailwind?.div_GiaVe__}>
                                    <img className="w-[90px] h-[90px]" src="src/assets/svg/gia-ve.svg" alt=""/>
                                </div>
                                <h1 className="text-center uppercase fontNunito-semibold -mt-[40px] text-[30px] leading-[48px] text-[#FF41B2]">
                                    giá vé
                                </h1>
                                <h2 className="text-center fontNunito-semibold -mt-[65px] text-[18px] text-gray-500">
                                    5.000 đồng/lượt
                                </h2>
                            </div>
                            <div className={classNameTailwind?.div_VeThang}>
                                <div className={classNameTailwind?.div_VeThang__}>
                                    <img className="w-[90px] h-[90px] " src="src/assets/svg/ve-thang.svg" alt=""/>
                                </div>
                                <h1 className="text-center uppercase fontNunito-semibold -mt-[40px] text-[30px] leading-[48px] text-[#3781DB]">
                                    vé tháng
                                </h1>
                                <h2 className="text-center fontNunito-semibold -mt-[65px] text-[18px] text-gray-500">
                                    Chưa áp dụng
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default GiaVeTapTheDuc;