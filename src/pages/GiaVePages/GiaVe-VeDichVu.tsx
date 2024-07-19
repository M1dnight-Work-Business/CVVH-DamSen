function GiaVeDichVu() {
    const data_XeDien = [
        {type: 'Happy Car', people: '1-5', amount: '150.000 đồng/30 phút'},
        {type: 'Family Car', people: '6-7', amount: '200.000 đồng/30 phút'},
        {type: 'Friendly Car', people: '8-10', amount: '250.00 đồng/30 phút'},
        {type: 'Family Car', people: '11-12', amount: '300.000 đồng/30 phút'},
        {type: 'Cung đường', people: '1-5', amount: '50.000 đồng/chuyến'},
    ];
    const data_ChoThue = [
        {type: 'Xe đẩy', amount: '50.000 đồng/lần (Cỡ nhỏ)'},
        {type: '', amount: '80.000 đồng/lần (Cỡ lớn)'},
        {type: '', amount: ''},
        {type: 'Xe nôi', amount: '80.000 đồng/lần (Cỡ nhỏ)'},
        {type: '', amount: '120.000 đồng/lần (Cỡ lớn'},
        {type: '', amount: ''},
        {type: 'Xe lăn', amount: '100.000 đồng/lần'},
        {type: 'Tủ giữ đồ', amount: '20.000 đồng/hộc tủ/lần'},
    ];

    const classNameTailwind = {
        paragraph: "text-left pt-6 fontNunito text-gray-500 text-[18px] leading-[27px]",
    }
    return (
        <section>
            <div className="bg-[#ECF3E0] justify-center items-start p-6">
                <div className="bg-white p-6 justify-center">
                    <img className=" w-full " src="src/assets/dich-vu.png" alt=""/>
                    <div className="text-left pt-[56px]">
                        <h1 className="fontBanger text-[96px] text-[#259E58] underline uppercase gap-2">
                            vé dịch vụ
                        </h1>
                        <div
                            className="fontNunito text-[20px] font-semibold w-[249px] h-[193px] float-right mt-[-150px]">
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
                        <div className="fontBanger pt-10 pb-3 text-[40px] text-pink-500 gap-2">
                            <h2>
                                Dịch vụ xe điện
                            </h2>
                        </div>
                        <div className="flex">
                            <img src="src/assets/exclaimation.svg" alt=""/>
                            <p className="pl-2 fontNunito-bold text-[18px] text-[#DFA100]">Lưu ý: Không áp dụng Vé trọn
                                gói Đầm sen!</p>
                        </div>
                        <div>
                            <p className={classNameTailwind?.paragraph}>
                                Bên cạnh việc tham quan Đầm Sen bằng “đoàn tàu cổ tích” (bao gồm trong vé trọn gói và vé
                                Silver), du khách có thể thưởng ngoạn bằng dịch vụ xe điện riêng của Đầm Sen. Tùy vào
                                loại vé, hành trình xe điện sẽ đưa quý khách từ trạm đón (khu trò chơi cảm giác mạnh ở
                                quảng trường Âu Lạc), đi quanh hồ Đầm Sen, tham quan vườn chim thú ở khu B, và về vườn
                                Lan rừng để ngắm những loại hoa đẹp nhất tại Đầm Sen.
                            </p>
                        </div>
                    </div>
                    <div className="pt-4 text-[18px]">
                        <table className="w-[500px]">
                            <thead>
                            <tr className="text-gray-500 fontNunito-bold">
                                <th className="text-left px-4 py-2">Loại hình</th>
                                <th className="text-left px-4 py-2">Số người</th>
                                <th className="text-left px-4 py-2">Số tiền</th>
                            </tr>
                            </thead>
                            <tbody className="fontNunito text-gray-500">
                            {data_XeDien.map((row, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-2">{row.type}</td>
                                    <td className="px-4 py-2">{row.people}</td>
                                    <td className="px-4 py-2">{row.amount}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="fontBanger pt-10 pb-3 text-[40px] text-pink-500 gap-2">
                        <h2>
                            Dịch vụ cho thuê
                        </h2>
                    </div>
                    <div className="flex">
                        <img src="src/assets/exclaimation.svg" alt=""/>
                        <p className="pl-2 fontNunito-bold text-[18px] text-[#DFA100]">Lưu ý: Tiền thế chân từ 300.000
                            đồng đến 500.000 đồng + CMND</p>
                    </div>
                    <div className="pt-4 text-[18px]">
                        <table className="w-[500px]">
                            <thead>
                            <tr className="text-gray-500 fontNunito-bold">
                                <th className="text-left px-4 py-2">Cho Thuê</th>
                                <th className="text-left px-4 py-2">Số tiền</th>
                            </tr>
                            </thead>
                            <tbody className="fontNunito text-gray-500">
                            {data_ChoThue.map((row, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-2">{row.type}</td>
                                    <td className="px-4 py-2">{row.amount}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="pt-6">
                        <h2 className="text-[23px] text-[#EC008C] uppercase fontNunito-semibold">Ghi chú:</h2>
                        <p className="text-gray-500 fontNunito">Vé dịch vụ này không bao gồm trong các loại vé cổng, hay
                            vé trọn gói, cũng như Silver. Để
                            biết thêm về những loại vé này, xin vui lòng xem <a className="text-[#005AAB] underline"
                                                                                href="/gia-ve-trong-cong-vien">tại
                                đây</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GiaVeDichVu;