function GioiThieuThanhVien(){
    return (
        <section>
            <div className="bg-[#ECF3E0] justify-center p-6">
                <div className="bg-white p-6 justify-center">
                    <img src="src/assets/thanh-vien.png" alt=""/>
                    <div className="h-auto text-left pt-[56px] float">
                        <h1 className="fontBanger text-[76px] text-[#259E58] underline uppercase gap-2 w-fit">
                            Thành viên
                        </h1>
                        <div className=" fontNunito text-[20px] font-semibold w-[249px] h-[193px] float-right mt-[-150px]">
                            <h3>Mô tả</h3>
                            <hr className="border-b-pink-500 border-b-[1px] my-2"/>
                            <p className="text-[16px] text-gray-500">
                                Thông tin về các đơn vị
                                thành viên của CVVH Đầm Sen
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GioiThieuThanhVien