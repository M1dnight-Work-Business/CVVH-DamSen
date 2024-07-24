import {useEffect, useState} from "react";
import {collection, DocumentData, getDocs} from "firebase/firestore";
import {firestore} from "../../lib/firebase.ts";

function GioiThieuLichSuHinhThanh() {
    const classNameTailwind = {
        paragraph_one: "text-left pt-[80px] fontNunito text-gray-500 text-[18px] leading-[27px]",
        paragraph_two: "text-left mt-2 fontNunito text-gray-500 text-[18px] leading-[27px]"
    }

    const [data, setData] = useState<DocumentData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const colRef = await getDocs(collection(firestore, "LichSuHinhThanh"));
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
                    <img src="src/assets/png/phao-hoa.png" alt=""/>
                    <div className="h-auto text-left pt-[56px] float">
                        <h1 className="fontBanger text-[76px] text-[#259E58] underline uppercase gap-2 w-fit">
                            lịch sử hình thành
                        </h1>
                        <div
                            className="fontNunito text-[20px] font-semibold w-[220px] h-[120px] float-right mt-[-150px]">
                            <h3>Mô tả</h3>
                            <hr className="border-b-pink-500 border-b-[1px] my-2"/>
                            <p className="text-[16px] text-gray-500">
                                Đầm Sen là một trong những điểm bắn pháo hoa trong các sự kiện lớn của cả nước.
                            </p>
                        </div>
                        <div className="w-[973px]">
                            <p className={classNameTailwind?.paragraph_one}>
                                {data.map((item, index) => (
                                    <div key={index}>
                                        {item.NoiDung1}
                                    </div>
                                ))}
                            </p>
                            <p className={classNameTailwind?.paragraph_two}>
                                {data.map((item, index) => (
                                    <div key={index}>
                                        {item.NoiDung2}
                                    </div>
                                ))}
                            </p>
                        </div>
                        <div className="w-[1001px]">
                            <h2 className="fontBanger pt-10 pb-6 text-[40px] text-pink-500 uppercase gap-2">
                                các mốc son phát triển
                            </h2>
                            <ul className="list-disc pl-6 fontNunito text-[18px] leading-[27px] text-gray-500">
                                <li>{data.map((item, index) => (
                                    <div key={index}>
                                        {item.li1}
                                    </div>
                                ))}
                                </li>
                                <li>{data.map((item, index) => (
                                    <div key={index}>
                                        {item.li2}
                                    </div>
                                ))}
                                </li>
                                <li>{data.map((item, index) => (
                                    <div key={index}>
                                        {item.li3}
                                    </div>
                                ))}
                                </li>
                                <li>
                                    {data.map((item, index) => (
                                        <div key={index}>
                                            {item.li4}
                                        </div>
                                    ))}
                                </li>
                                <li>
                                    {data.map((item, index) => (
                                        <div key={index}>
                                            {item.li5}
                                        </div>
                                    ))}
                                </li>
                            </ul>
                        </div>
                        <div className="pt-6">
                            <img className="w-full" src="src/assets/png/cau-cuu-khuc.png" alt=""/>
                        </div>
                        <hr className="pt-20 mx-auto border-b-[1px] border-b-green-200 h-full"/>
                        <div className="fontBanger pt-20 pb-6 text-[40px] text-pink-500 uppercase gap-2 text-center">
                            <h2>
                                những loại hình dịch vụ trọng tâm
                            </h2>
                        </div>
                        <div className="flex flex-row gap-6 justify-center">
                            <div className="w-[335px] h-[420px] shadow-lg">
                                <img src="src/assets/png/roller-coaster.png" alt=""/>
                                <h2 className="pt-6 text-center fontBanger text-[#259E58] text-4xl">
                                    Trò chơi
                                </h2>
                                <hr className="border-b-3 mx-auto w-[50px] pt-3 border-t-0 border-[#259E58]"/>
                                <p className="text-center text-gray-600 fontNunito text-[14px] pt-7">
                                    {data.map((item, index) => (
                                        <div key={index}>
                                            {item.TroChoi}
                                        </div>
                                    ))}
                                </p>
                            </div>
                            <div className="w-[335px] h-[420px] shadow-lg">
                                <img className="h-[223.5px]" src="src/assets/png/event.png" alt=""/>
                                <h2 className="pt-6 text-center fontBanger text-[#4293FA] text-4xl">
                                    Sự kiện
                                </h2>
                                <hr className="border-b-3 mx-auto w-[50px] pt-3 border-t-0 border-[#4293FA]"/>
                                <p className="text-center text-gray-600 fontNunito text-[14px] pt-7">
                                    {data.map((item, index) => (
                                        <div key={index}>
                                            {item.SuKien}
                                        </div>
                                    ))}
                                </p>
                            </div>
                            <div className="w-[335px] h-[420px] shadow-lg">
                                <img src="src/assets/png/scene.png" alt=""/>
                                <h2 className="pt-6 text-center fontBanger text-[#E931C3] text-4xl">
                                    Cảnh trí
                                </h2>
                                <hr className="border-b-3 mx-auto w-[50px] pt-3 border-t-0 border-[#E931C3]"/>
                                <p className="text-center text-gray-600 fontNunito text-[14px] pt-7">
                                    {data.map((item, index) => (
                                        <div key={index}>
                                            {item.CanhTri}
                                        </div>
                                    ))}
                                </p>
                            </div>
                        </div>
                        <div className="pt-6 flex flex-row gap-6 justify-center">
                            <div className="w-[335px] h-[420px] shadow-lg">
                                <img className="h-[223.5px]" src="src/assets/png/peacock.png" alt=""/>
                                <h2 className="pt-6 text-center fontBanger text-[#FFA034] text-4xl">
                                    Chim thú
                                </h2>
                                <hr className="border-b-3 mx-auto w-[50px] pt-3 border-t-0 border-[#FFA034]"/>
                                <p className="text-center text-gray-600 fontNunito text-[14px] pt-7">
                                    {data.map((item, index) => (
                                        <div key={index}>
                                            {item.ChimThu}
                                        </div>
                                    ))}
                                </p>
                            </div>
                            <div className="w-[335px] h-[420px] shadow-lg">
                                <img src="src/assets/png/cusine.png" alt=""/>
                                <h2 className="pt-6 text-center fontBanger text-[#31C996] text-4xl">
                                    Ẩm thực
                                </h2>
                                <hr className="border-b-3 mx-auto w-[50px] pt-3 border-t-0 border-[#31C996]"/>
                                <p className="text-center text-gray-600 fontNunito text-[14px] pt-7">
                                    {data.map((item, index) => (
                                        <div key={index}>
                                            {item.AmThuc}
                                        </div>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GioiThieuLichSuHinhThanh;