import {FaArrowLeftLong, FaArrowRightLong} from "react-icons/fa6";
import {collection, getDocs, DocumentData } from 'firebase/firestore';
import {useEffect, useState} from "react";
import {firestore} from "../../lib/firebase.ts";

function GDTN_ThucVat() {
    
    const [data, setData] = useState<DocumentData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const colRef = await getDocs(collection(firestore, "GDTN-ThucVat"));
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
                <div className="bg-white p-6 justify-center relative">
                    <div className="h-auto">
                        <h1 className="fontBanger text-[96px] text-[#259E58] underline uppercase gap-2 w-fit">
                            Thực vật
                        </h1>
                        <div className="flex text-[#EC008C] mt-[-15px] mb-8 text-[14px] fontNunito-semibold">
                            <img className="mr-1" src="src/assets/svg/tag.svg" alt=""/>
                            <span>Giáo dục trải nghiệm</span>
                            <img className="pl-10" src="src/assets/svg/time.svg" alt=""/>
                            <p className="text-[14px] fontNunito text-gray-500">11/02/2020</p>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="src/assets/png/hoa-sen.png" alt=""/>
                        <div className="absolute top-1/2 transform pl-[30px] text-white w-[629px] text-[17px]">
                            <h2 className="left-0 text-5xl fontNunito-bold">Hoa sen</h2>
                            <hr className="border-white border-2 mt-2 w-[90px]"/>
                            <div>
                                <p className="fontNunito pt-[21px]">
                                    Hoa sen từ lâu đã được biết tới là loài hoa thanh khiết có ý nghĩa truyền thống lâu
                                    đời
                                    ở phương Đông. Sen mọc và lớn lên giữa bùn lầy nhưng không hề vì bùn mà bị ô nhiễm,
                                    vấy
                                    bẩn.
                                </p>
                            </div>
                            <div className="flex text-white text-[14px] pt-3 fontNunito-semibold">
                                <img className="mr-1" src="src/assets/svg/tag-white.svg" alt=""/>
                                <span>Thực vật</span>
                                <img className="pl-10" src="src/assets/svg/time-white.svg" alt=""/>
                                <p className="text-[14px] fontNunito text-white pl-1">29/06/2020</p>
                            </div>
                            <div className="fontNunito-bold bg-[#259E58] p-2 mt-6
                            text-center flex justify-center items-center text-[16px] rounded-lg text-white w-[140px]">
                                <button>
                                    Xem thêm
                                </button>
                                <FaArrowRightLong className="ml-[10px] items-center flex"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row-4 justify-between pt-[52px]">
                        <div className="w-[250px] h-[fit] shadow-lg">
                            <img src="src/assets/png/cay-duong-si.png" alt=""/>
                            <div>
                                <h2 className="fontNunito-bold text-[#259E58] py-3 px-4 text-[18px]">
                                    Cây Dương Xỉ
                                </h2>
                            </div>
                            <div className="px-4">
                                <p className="fontNunito text-ellipsis line-clamp-5 text-gray-500">
                                    {data.map((item, index) => (
                                        <div key={index}>
                                            {item.CayDuongXi}
                                        </div>
                                    ))}
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <div className="py-[33px] px-4">
                                    <div className="flex items-center">
                                        <img className="mr-1 w-5 h-5" src="src/assets/svg/tag.svg" alt=""/>
                                        <span
                                            className="fontNunito-bold text-pink-500 text-center text-[14px]">Thực vật</span>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-5 h-5 mr-1 mt-1 pl-0.5" src="src/assets/svg/time.svg" alt=""/>
                                        <span
                                            className="mt-1 fontNunito text-gray-500 text-center text-[14px]">06/11/2020</span>
                                    </div>
                                </div>
                                <div className="fontNunito-bold bg-[#259E58] p-2 h-fit mt-9 mx-auto
                                                text-center flex items-center text-[14px] rounded-lg text-white">
                                    <button>
                                        Xem thêm
                                    </button>
                                    <FaArrowRightLong className="ml-[10px]"/>
                                </div>
                            </div>
                        </div>
                        <div className="w-[250px] h-fit shadow-lg">
                            <img className="h-[187.5px] w-full" src="src/assets/png/cay-hoa-giay.png" alt=""/>
                            <div>
                                <h2 className="fontNunito-bold text-[#259E58] py-3 px-4 text-[18px]">
                                    Cây Hoa Giấy
                                </h2>
                            </div>
                            <div className="px-4">
                                <p className="fontNunito text-ellipsis overflow-hidden text-gray-500">
                                    {data.map((item, index) => (
                                        <div key={index}>
                                            {item.CayHoaGiay}
                                        </div>
                                    ))}
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <div className="py-[33px] px-4">
                                    <div className="flex items-center">
                                        <img className="mr-1 w-5 h-5" src="src/assets/svg/tag.svg" alt=""/>
                                        <span
                                            className="fontNunito-bold text-pink-500 text-center text-[14px]">Thực vật</span>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-5 h-5 mr-1 mt-1 pl-0.5" src="src/assets/svg/time.svg" alt=""/>
                                        <span
                                            className="mt-1 fontNunito text-gray-500 text-center text-[14px]">05/11/2020</span>
                                    </div>
                                </div>
                                <div className="fontNunito-bold bg-[#259E58] p-2 h-fit mt-9 mx-auto
                                                text-center flex items-center text-[14px] rounded-lg text-white">
                                    <button>
                                        Xem thêm
                                    </button>
                                    <FaArrowRightLong className="ml-[10px]"/>
                                </div>
                            </div>
                        </div>
                        <div className="w-[250px] h-fit shadow-lg">
                            <img className="h-[187.5px] w-full" src="src/assets/png/cay-lim-set.png" alt=""/>
                            <div>
                                <h2 className="fontNunito-bold text-[#259E58] py-3 px-4 text-[18px]">
                                    Cây Lim Sét
                                </h2>
                            </div>
                            <div className="px-4">
                                <p className="fontNunito text-ellipsis overflow-hidden text-gray-500">
                                    {data.map((item, index) => (
                                        <div key={index}>
                                            {item.CayLimSet}
                                        </div>
                                    ))}
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <div className="py-[33px] px-4">
                                    <div className="flex items-center">
                                        <img className="mr-1 w-5 h-5" src="src/assets/svg/tag.svg" alt=""/>
                                        <span
                                            className="fontNunito-bold text-pink-500 text-center text-[14px]">Thực vật</span>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-5 h-5 mr-1 mt-1 pl-0.5" src="src/assets/svg/time.svg" alt=""/>
                                        <span
                                            className="mt-1 fontNunito text-gray-500 text-center text-[14px]">06/11/2020</span>
                                    </div>
                                </div>
                                <div className="fontNunito-bold bg-[#259E58] p-2 h-fit mt-9 mx-auto
                                                text-center flex items-center text-[14px] rounded-lg text-white">
                                    <button>
                                        Xem thêm
                                    </button>
                                    <FaArrowRightLong className="ml-[10px]"/>
                                </div>
                            </div>
                        </div>
                        <div className="w-[250px] h-fit shadow-lg">
                            <img className="h-[187.5px] w-full" src="src/assets/png/cay-lan-y.png" alt=""/>
                            <div>
                                <h2 className="fontNunito-bold text-[#259E58] py-3 px-4 text-[18px]">
                                    Cây Lan Ý
                                </h2>
                            </div>
                            <div className="px-4">
                                <p className="fontNunito text-ellipsis overflow-hidden text-gray-500">
                                    Là một chi trong thực vật có hoa bản địa khu vực Nam Mỹ, từ Brasil về phía tây tới
                                    Peru và về phía nam tới miền nam Argentina.
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <div className="py-[33px] px-4">
                                    <div className="flex items-center">
                                        <img className="mr-1 w-5 h-5" src="src/assets/svg/tag.svg" alt=""/>
                                        <span
                                            className="fontNunito-bold text-pink-500 text-center text-[14px]">Thực vật</span>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-5 h-5 mr-1 mt-1 pl-0.5" src="src/assets/svg/time.svg" alt=""/>
                                        <span
                                            className="mt-1 fontNunito text-gray-500 text-center text-[14px]">05/11/2020</span>
                                    </div>
                                </div>
                                <div className="fontNunito-bold bg-[#259E58] p-2 h-fit mt-9 mx-auto
                                                text-center flex items-center text-[14px] rounded-lg text-white">
                                    <button>
                                        Xem thêm
                                    </button>
                                    <FaArrowRightLong className="ml-[10px]"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row-4 justify-between pt-[52px]">
                        <div className="w-[250px] h-fit shadow-lg">
                            <img src="src/assets/png/rau-ma-thai.png" alt=""/>
                            <div>
                                <h2 className="fontNunito-bold text-[#259E58] py-3 px-4 text-[18px]">
                                    Rau Má Thái
                                </h2>
                            </div>
                            <div className="px-4">
                                <p className="fontNunito text-ellipsis line-clamp-4 text-gray-500">
                                    {data.map((item, index) => (
                                        <div key={index}>
                                            {item.RauMaThai}
                                        </div>
                                    ))}
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <div className="py-[33px] px-4">
                                    <div className="flex items-center">
                                        <img className="mr-1 w-5 h-5" src="src/assets/svg/tag.svg" alt=""/>
                                        <span
                                            className="fontNunito-bold text-pink-500 text-center text-[14px]">Thực vật</span>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-5 h-5 mr-1 mt-1 pl-0.5" src="src/assets/svg/time.svg" alt=""/>
                                        <span
                                            className="mt-1 fontNunito text-gray-500 text-center text-[14px]">29/07/2020</span>
                                    </div>
                                </div>
                                <div className="fontNunito-bold bg-[#259E58] p-2 h-fit mt-9 mx-auto
                                                text-center flex items-center text-[14px] rounded-lg text-white">
                                    <button>
                                        Xem thêm
                                    </button>
                                    <FaArrowRightLong className="ml-[10px]"/>
                                </div>
                            </div>
                        </div>
                        <div className="w-[250px] h-fit shadow-lg">
                            <img src="src/assets/png/cay-re-quat.png" alt=""/>
                            <div>
                                <h2 className="fontNunito-bold text-[#259E58] py-3 px-4 text-[18px]">
                                    Cây Rẻ Quạt
                                </h2>
                            </div>
                            <div className="px-4">
                                <p className="fontNunito text-ellipsis line-clamp-4 text-gray-500">
                                    {data.map((item, index) => (
                                        <div key={index}>
                                            {item.CayReQuat}
                                        </div>
                                    ))}
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <div className="py-[33px] px-4">
                                    <div className="flex items-center">
                                        <img className="mr-1 w-5 h-5" src="src/assets/svg/tag.svg" alt=""/>
                                        <span
                                            className="fontNunito-bold text-pink-500 text-center text-[14px]">Thực vật</span>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-5 h-5 mr-1 mt-1 pl-0.5" src="src/assets/svg/time.svg" alt=""/>
                                        <span
                                            className="mt-1 fontNunito text-gray-500 text-center text-[14px]">29/07/2020</span>
                                    </div>
                                </div>
                                <div className="fontNunito-bold bg-[#259E58] p-2 h-fit mt-9 mx-auto
                                                text-center flex items-center text-[14px] rounded-lg text-white">
                                    <button>
                                        Xem thêm
                                    </button>
                                    <FaArrowRightLong className="ml-[10px]"/>
                                </div>
                            </div>
                        </div>
                        <div className="w-[250px] h-fit shadow-lg">
                            <img src="src/assets/png/cay-co-dau.png" alt=""/>
                            <div>
                                <h2 className="fontNunito-bold text-[#259E58] py-3 px-4 text-[18px]">
                                    Cây Cọ Dầu
                                </h2>
                            </div>
                            <div className="px-4">
                                <p className="fontNunito text-ellipsis overflow-hidden text-gray-500">
                                    {data.map((item, index) => (
                                        <div key={index}>
                                            {item.CayCoDau}
                                        </div>
                                    ))}
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <div className="py-[33px] px-4">
                                    <div className="flex items-center">
                                        <img className="mr-1 w-5 h-5" src="src/assets/svg/tag.svg" alt=""/>
                                        <span
                                            className="fontNunito-bold text-pink-500 text-center text-[14px]">Thực vật</span>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-5 h-5 mr-1 mt-1 pl-0.5" src="src/assets/svg/time.svg" alt=""/>
                                        <span
                                            className="mt-1 fontNunito text-gray-500 text-center text-[14px]">02/11/2020</span>
                                    </div>
                                </div>
                                <div className="fontNunito-bold bg-[#259E58] p-2 h-fit mt-9 mx-auto
                                                text-center flex items-center text-[14px] rounded-lg text-white">
                                    <button>
                                        Xem thêm
                                    </button>
                                    <FaArrowRightLong className="ml-[10px]"/>
                                </div>
                            </div>
                        </div>
                        <div className="w-[250px] h-fit shadow-lg">
                            <img className="h-[166.66px] w-full" src="src/assets/png/beo-tay.png" alt=""/>
                            <div>
                                <h2 className="fontNunito-bold text-[#259E58] py-3 px-4 text-[18px]">
                                    Bèo Tây
                                </h2>
                            </div>
                            <div className="px-4">
                                <p className="fontNunito text-ellipsis overflow-hidden text-gray-500">
                                    {data.map((item, index) => (
                                        <div key={index}>
                                            {item.BeoTay}
                                        </div>
                                    ))}
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <div className="py-[33px] px-4">
                                    <div className="flex items-center">
                                        <img className="mr-1 w-5 h-5" src="src/assets/svg/tag.svg" alt=""/>
                                        <span
                                            className="fontNunito-bold text-pink-500 text-center text-[14px]">Thực vật</span>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-5 h-5 mr-1 mt-1 pl-0.5" src="src/assets/svg/time.svg" alt=""/>
                                        <span
                                            className="mt-1 fontNunito text-gray-500 text-center text-[14px]">14/09/2020</span>
                                    </div>
                                </div>
                                <div className="fontNunito-bold bg-[#259E58] p-2 h-fit mt-9 mx-auto
                                                text-center flex items-center text-[14px] rounded-lg text-white">
                                    <button>
                                        Xem thêm
                                    </button>
                                    <FaArrowRightLong className="ml-[10px]"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-between">
                        <div>
                            <button
                                className="float-left fontNunito-bold pt-20 pl-5 flex items-center text-pink-500">
                                <FaArrowLeftLong className="mr-[10px] items-center flex"/>
                                Địa Điểm Sống Ảo
                            </button>
                        </div>
                        <div>
                            <button
                                className="float-right fontNunito-bold pt-20 pr-5 flex items-center text-pink-500">
                                Quảng Trường Âu Lạc
                                <FaArrowRightLong className="ml-[10px] items-center flex"/>
                            </button>
                        </div>
                    </div>
                    <div className="pt-4 fontBanger text-[32px] pl-4 text-[#259E58] uppercase gap-2 w-fit">
                        <h2>
                            Có thể bạn thích
                        </h2>
                    </div>
                    <div className="flex items-center justify-center gap-3 pb-[72px]">
                        <div className="flex-shrink-0 relative">
                            <button
                                className="absolute left-[-30px] top-[50%] transform -translate-y-1/2 text-pink-500">
                                <img className="w-2 h-5" src="src/assets/svg/LeftArrow_2.svg" alt=""/>
                            </button>
                            <img className="h-[165px]" src="src/assets/png/song-ao.png" alt=""/>
                            <div className="flex pt-2 justify-between">
                                <h3 className="text-[#259E58] fontNunito-semibold text-[14px]">
                                    Địa điểm sống ảo
                                </h3>
                                <p className="text-[14px] fontNunito text-gray-500">20/02/2020</p>
                            </div>
                            <div className="flex text-[#EC008C] text-[14px] fontNunito-semibold">
                                <img className="mr-1" src="src/assets/svg/tag.svg" alt=""/> <span>Cảnh đẹp</span>
                            </div>
                        </div>
                        <div className="flex-shrink-0 relative">
                            <img className="h-[165px]" src="src/assets/png/au-lac.png" alt=""/>
                            <div className="flex pt-2 justify-between">
                                <h3 className="text-[#259E58] fontNunito-semibold text-[14px]">
                                    Quảng trường Âu Lạc
                                </h3>
                                <p className="text-[14px] fontNunito text-gray-500">20/02/2020</p>
                            </div>
                            <div className="flex text-[#EC008C] text-[14px] fontNunito-semibold">
                                <img className="mr-1" src="src/assets/svg/tag.svg" alt=""/> <span>Cảnh đẹp</span>
                            </div>
                        </div>
                        <div className="flex-shrink-0 relative">
                            <img className="w-[248.11px] h-[165px]" src="src/assets/png/la-ma.png" alt=""/>
                            <div className="flex pt-2 justify-between">
                                <h3 className="text-[#259E58] fontNunito-semibold text-[14px]">
                                    Quảng trường La Mã
                                </h3>
                                <p className="text-[14px] fontNunito text-gray-500">20/02/2020</p>
                            </div>
                            <div className="flex text-[#EC008C] text-[14px] fontNunito-semibold">
                                <img className="mr-1" src="src/assets/svg/tag.svg" alt=""/> <span>Cảnh đẹp</span>
                            </div>
                        </div>
                        <div className="flex-shrink-0 relative">
                            <img className="object-cover w-[247.5px] h-[165px]"
                                 src="src/assets/png/cau-cuu-khuc-3.png" alt=""/>
                            <button
                                className="absolute right-[-30px] top-[50%] transform -translate-y-1/2 text-pink-500">
                                <img className="w-2 h-5" src="src/assets/svg/RightArrow_2.svg" alt=""/>
                            </button>
                            <div className="flex pt-2 justify-between">
                                <h3 className="text-[#259E58] fontNunito-semibold text-[14px]">
                                    Cầu cửu khúc
                                </h3>
                                <p className="text-[14px] fontNunito text-gray-500">20/02/2020</p>
                            </div>
                            <div className="flex text-[#EC008C] text-[14px] fontNunito-semibold">
                                <img className="mr-1" src="src/assets/svg/tag.svg" alt=""/> <span>Cảnh đẹp</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GDTN_ThucVat;
