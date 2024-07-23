import {useEffect, useState} from "react";
import {collection, DocumentData, getDocs} from "firebase/firestore";
import {firestore} from "../../lib/firebase.ts";

function GioiThieuChinhSachBaoMat() {
    const classNameTailwind = {
        paragraph:"text-left pt-6 fontNunito text-gray-500 text-[18px] leading-[27px]",
        ul_li:"text-left pt-6 pl-6 fontNunito text-gray-500 text-[18px] leading-[27px] list-decimal",
        h3_title:"fontNunito-bold text-[23px] text-gray-600 pt-6",
        div: "fontBanger pt-10 pb-6 text-[40px] text-pink-500 gap-2 w-[951px]"
    }

    const [data, setData] = useState<DocumentData[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const colRef = await getDocs(collection(firestore, "ChinhSachBaoMat"));
                const fetchedData: DocumentData[] = [];

                colRef.forEach((doc) => {
                    fetchedData.push(doc.data());
                });
                setData(fetchedData);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    return (
        <section>
            <div className="bg-[#ECF3E0] justify-center p-6">
                <div className="bg-white p-6 justify-center">
                    <img src="src/assets/png/than-tai.png" alt=""/>
                    <div className="h-auto text-left pt-[56px] float">
                        <h1 className="fontBanger text-[76px] text-[#259E58] underline uppercase gap-2 w-fit">
                            chính sách bảo mật
                        </h1>
                        <div className=" fontNunito text-[20px] font-semibold w-[249px] h-[193px] float-right mt-[-150px]">
                            <h3>Mô tả</h3>
                            <hr className="border-b-pink-500 border-b-[1px] my-2"/>
                            <p className="text-[16px] text-gray-500">
                                Chính sách bảo mật này nhằm mục đích giúp bạn hiểu rõ những thông tin chúng tôi thu
                                thập,
                                lý do chúng tôi thu thập và cách bạn có thể cập nhật, quản lý, xuất và xóa thông tin của
                                mình.
                            </p>
                        </div>
                    </div>
                    <div className={classNameTailwind?.div}>
                        <h2>
                            Chúng tôi là ai?
                        </h2>
                        <p className={classNameTailwind?.paragraph}>
                            {data.map((item, index) => (
                                <div key={index}>
                                    {item.ChungToiLaAi}
                                </div>
                            ))}
                        </p>
                    </div>
                    <div>
                        <img src="src/assets/png/TrangChu.png" alt=""/>
                    </div>
                    <div className={classNameTailwind?.div}>
                        <h2 className="uppercase">
                            Thông tin cá nhân nào bị thu thập và tại sao thu thập?
                        </h2>
                        <h3 className={classNameTailwind?.h3_title}>
                            1. Bình luận
                        </h3>
                        <p className={classNameTailwind?.paragraph}>
                            {data.map((item, index) => (
                                <div key={index}>
                                    {item.BinhLuan1}
                                </div>
                            ))}
                        </p>
                        <p className={classNameTailwind?.paragraph}>
                            {data.map((item, index) => (
                                <div key={index}>
                                    {item.BinhLuan2}
                                </div>
                            ))}
                        </p>
                        <h3 className={classNameTailwind?.h3_title}>
                            2. Thư viện
                        </h3>
                        <p className={classNameTailwind?.paragraph}>
                            {data.map((item, index) => (
                                <div key={index}>
                                    {item.ThuVien}
                                </div>
                            ))}
                        </p>
                        <h3 className={classNameTailwind?.h3_title}>
                            3. Cookies
                        </h3>
                        <p className={classNameTailwind?.paragraph}>
                            {data.map((item, index) => (
                                <div key={index}>
                                    {item.Cookies1}
                                </div>
                            ))}
                        </p>
                        <p className={classNameTailwind?.paragraph}>
                            {data.map((item, index) => (
                                <div key={index}>
                                    {item.Cookies2}
                                </div>
                            ))}
                        </p>
                        <p className={classNameTailwind?.paragraph}>
                            {data.map((item, index) => (
                                <div key={index}>
                                    {item.Cookies3}
                                </div>
                            ))}
                        </p>
                        <p className={classNameTailwind?.paragraph}>
                            {data.map((item, index) => (
                                <div key={index}>
                                    {item.Cookies4}
                                </div>
                            ))}
                        </p>
                        <h3 className={classNameTailwind?.h3_title}>
                            4. Nội dung nhúng từ website khác
                        </h3>
                        <p className={classNameTailwind?.paragraph}>
                            {data.map((item, index) => (
                                <div key={index}>
                                    {item.WebsiteKhac1}
                                </div>
                            ))}
                        </p>
                        <p className={classNameTailwind?.paragraph}>
                            {data.map((item, index) => (
                                <div key={index}>
                                    {item.WebsiteKhac2}
                                </div>
                            ))}
                        </p>
                    </div>
                    <div className={classNameTailwind?.div}>
                        <h2>
                            Dữ liệu của bạn tồn tại bao lâu
                        </h2>
                        <p className={classNameTailwind?.paragraph}>
                            {data.map((item, index) => (
                                <div key={index}>
                                    {item.TonTaiBaoLau1}
                                </div>
                            ))}
                        </p>
                        <p className={classNameTailwind?.paragraph}>
                            {data.map((item, index) => (
                                <div key={index}>
                                    {item.TonTaiBaoLau2}
                                </div>
                            ))}
                        </p>
                    </div>
                    <div className={classNameTailwind?.div}>
                        <h2>
                            Các quyền nào của bạn với dữ liệu của mình
                        </h2>
                        <p className={classNameTailwind?.paragraph}>
                            {data.map((item, index) => (
                                <div key={index}>
                                    {item.QuyenCuaBan}
                                </div>
                            ))}
                        </p>
                    </div>
                    <div className={classNameTailwind?.div}>
                        <h2>
                            Các dữ liệu của bạn được gửi tới đâu
                        </h2>
                        <p className={classNameTailwind?.paragraph}>
                            {data.map((item, index) => (
                                <div key={index}>
                                    {item.DuLieuCuaBan}
                                </div>
                            ))}
                        </p>
                    </div>
                    <div className={classNameTailwind?.div}>
                        <h2>
                            Thông tin bổ sung
                        </h2>
                        <ul className={classNameTailwind?.ul_li}>
                            <li>Cách chúng tôi bảo vệ dữ liệu của bạn</li>
                            <li>Các quá trình tiết lộ dữ liệu mà chúng tôi thực hiện</li>
                            <li>Những bên thứ ba chúng tôi nhận dữ liệu từ đó</li>
                            <li>Việc quyết định và/hoặc thu thập thông tin tự động mà chúng tôi áp dụng với dữ liệu người dùng</li>
                            <li>Các yêu cầu công bố thông tin được quản lý</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GioiThieuChinhSachBaoMat;