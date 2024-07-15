function GiaVeTapTheDuc() {
    const classNameTailwind = {
        paragraph: "text-left pt-6 fontNunito text-gray-500 text-[18px] leading-[27px]",
    }
    return(
        <section>
            <div className="bg-[#ECF3E0] justify-center items-start p-6">
                <div className="bg-white p-6 justify-center">
                    <img className=" w-full " src="src/assets/tap-the-duc.png" alt=""/>
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
                                trên diện tích 32 hecta với nhiều cây xanh và không khí trong lành của một công viên giải trí hàng đầu Việt Nam.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default GiaVeTapTheDuc;