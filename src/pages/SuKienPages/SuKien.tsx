import {FaArrowLeftLong, FaArrowRightLong} from "react-icons/fa6";
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {EffectCoverflow, Navigation, Pagination} from "swiper/modules";
import {useEffect, useState} from "react";
import {collection, DocumentData, getDocs} from "firebase/firestore";
import {firestore} from "../../lib/firebase.ts";

function TrangChu() {
    const [data, setData] = useState<DocumentData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const colRef = await getDocs(collection(firestore, "SuKien"));
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
                            Sự kiện
                        </h1>
                        <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={'auto'}
                        coverflowEffect={
                            {
                                rotate:0,
                                stretch:0,
                                depth:100,
                                modifier:2.5
                            }}
                        pagination={{el:'.swiper-pagination', clickable:true}}
                        navigation={{
                            nextEl:'.next-arrow',
                            prevEl:'.prev-arrow',
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="swiper_container"
                        >
                            <SwiperSlide>
                                <img className=" w-full" src="src/assets/png/water-show.png" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="w-full" src="src/assets/png/TrangChu.png" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="src/assets/png/TrangChu.png" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="src/assets/png/TrangChu.png" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="src/assets/png/TrangChu.png" alt="" />
                            </SwiperSlide>
                            
                            <div className="flex slider-controller pb-2 justify-between">
                                <div className="prev-arrow transform translate-x-[450px]">
                                    <img src="src/assets/svg/LeftArrow_3.svg" alt=""/>
                                </div>
                                <div className="next-arrow transform -translate-x-[450px]">
                                    <img src="src/assets/svg/RightArrow_3.svg" alt=""/>
                                </div>
                                <div className="swiper-pagination">
                                    
                                </div>
                            </div>

                        </Swiper>
                    </div>
                    <div className="flex flex-row-4 justify-between pt-[52px]">
                        <div className="w-[250px] h-[450px] shadow-lg">
                            <img src="src/assets/png/dam-sen-special.png" alt=""/>
                            <div>
                                <h2 className="fontNunito-bold text-[#259E58] py-3 px-4 text-[18px]">
                                    Ra mắt vé Đầm Sen Special chơi cả 2 công viên
                                </h2>
                            </div>
                            <div className="px-4">
                                <p className="fontNunito text-ellipsis text-gray-500">
                                    {data.map((item, index) => (
                                        <div key={index}>
                                            {item.DamSenSpecial}
                                        </div>
                                    ))}
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <div className="py-8 px-4">
                                    <div className="flex items-center">
                                        <img className="mr-1 w-5 h-5" src="src/assets/svg/tag.svg" alt=""/>
                                        <span
                                            className="fontNunito-bold text-pink-500 text-center text-[14px]">Sự kiện</span>
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
                        <div className="w-[250px] h-[450px] shadow-lg">
                            <img className="h-[187.5px] w-full" src="src/assets/png/cay-hoa-giay.png" alt=""/>
                            <div>
                                <h2 className="fontNunito-bold text-[#259E58] py-3 px-4 text-[18px]">
                                    Sắp ra mắt Đầm Sen Lake Show cuối năm 2020
                                </h2>
                            </div>
                            <div className="px-4">
                                <p className="fontNunito text-ellipsis line-clamp-4 overflow-hidden text-gray-500">
                                    {data.map((item, index) => (
                                        <div key={index}>
                                            {item.LakeShow2010}
                                        </div>
                                    ))}
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <div className="py-8 px-4">
                                    <div className="flex items-center">
                                        <img className="mr-1 w-5 h-5" src="src/assets/svg/tag.svg" alt=""/>
                                        <span
                                            className="fontNunito-bold text-pink-500 text-center text-[14px]">Sự kiện</span>
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
                        <div className="w-[250px] h-[450px] shadow-lg">
                            <img className="h-[187.5px] w-full" src="src/assets/png/cun-cung.png" alt=""/>
                            <div>
                                <h2 className="fontNunito-bold text-[#259E58] py-3 px-4 text-[18px]">
                                    Lễ hội cún cưng
                                </h2>
                            </div>
                            <div className="px-4 mt-0.5">
                                <p className="fontNunito text-ellipsis line-clamp-5 overflow-hidden text-gray-500">
                                    {data.map((item, index) => (
                                        <div key={index}>
                                            {item.LeHoiCunCung}
                                        </div>
                                    ))}
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <div className="py-8 px-4">
                                    <div className="flex items-center">
                                        <img className="mr-1 w-5 h-5" src="src/assets/svg/tag.svg" alt=""/>
                                        <span
                                            className="fontNunito-bold text-pink-500 text-center text-[14px]">Sự kiện</span>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-5 h-5 mr-1 mt-1 pl-0.5" src="src/assets/svg/time.svg" alt=""/>
                                        <span
                                            className="mt-1 fontNunito text-gray-500 text-center text-[14px]">07/12/2018</span>
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
                        <div className="w-[250px] h-[450px] shadow-lg">
                            <img className="h-[187.5px] w-full" src="src/assets/png/am-thuc-chay.png" alt=""/>
                            <div>
                                <h2 className="fontNunito-bold text-[#259E58] py-3 px-4 text-[18px]">
                                    Ngày hội ẩm thực chay 2019 Đầm Sen: “Vu Lan báo hiếu”
                                </h2>
                            </div>
                            <div className="px-4">
                                <p className="fontNunito text-ellipsis line-clamp-3 overflow-hidden text-gray-500">
                                    {data.map((item, index) => (
                                        <div key={index}>
                                            {item.AmThucChay}
                                        </div>
                                    ))}
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <div className="py-[33px] px-4">
                                    <div className="flex items-center">
                                        <img className="mr-1 w-5 h-5" src="src/assets/svg/tag.svg" alt=""/>
                                        <span
                                            className="fontNunito-bold text-pink-500 text-center text-[14px]">Sự kiện</span>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-5 h-5 mr-1 mt-1 pl-0.5" src="src/assets/svg/time.svg" alt=""/>
                                        <span
                                            className="mt-1 fontNunito text-gray-500 text-center text-[14px]">10/08/2019</span>
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
                        <div className="w-[250px] h-[450px] shadow-lg">
                            <img className="h-[187.19px]" src="src/assets/png/bao-chi.png" alt=""/>
                            <div>
                                <h2 className="fontNunito-bold text-[#259E58] py-3 px-4 text-[18px]">
                                    Cùng báo chí nói không với rác thải môi trường
                                </h2>
                            </div>
                            <div className="px-4">
                                <p className="fontNunito text-ellipsis line-clamp-4 text-gray-500">
                                    {data.map((item, index) => (
                                        <div key={index}>
                                            {item.BaoChi}
                                        </div>
                                    ))}
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <div className="py-8 px-4">
                                    <div className="flex items-center">
                                        <img className="mr-1 w-5 h-5" src="src/assets/svg/tag.svg" alt=""/>
                                        <span
                                            className="fontNunito-bold text-pink-500 text-center text-[14px]">Sự kiện</span>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-5 h-5 mr-1 mt-1 pl-0.5" src="src/assets/svg/time.svg" alt=""/>
                                        <span
                                            className="mt-1 fontNunito text-gray-500 text-center text-[14px]">21/06/2019</span>
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
                        <div className="w-[250px] h-[450px] shadow-lg">
                            <img className="h-[187.5px] w-full" src="src/assets/png/2020.png" alt=""/>
                            <div>
                                <h2 className="fontNunito-bold text-[#259E58] py-3 px-4 text-[18px]">
                                    Đón năm mới 2020: nhiều sân chơi miễn phí
                                </h2>
                            </div>
                            <div className="px-4">
                                <p className="fontNunito text-ellipsis line-clamp-4 overflow-hidden text-gray-500">
                                    {data.map((item, index) => (
                                        <div key={index}>
                                            {item.NamMoi2020}
                                        </div>
                                    ))}
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <div className="py-8 px-4">
                                    <div className="flex items-center">
                                        <img className="mr-1 w-5 h-5" src="src/assets/svg/tag.svg" alt=""/>
                                        <span
                                            className="fontNunito-bold text-pink-500 text-center text-[14px]">Sự kiện</span>
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
                        <div className="w-[250px] h-[450px] shadow-lg">
                            <img className="h-[187.5px] w-full" src="src/assets/png/vua-hung.png" alt=""/>
                            <div>
                                <h2 className="fontNunito-bold text-[#259E58] py-3 px-4 text-[18px]">
                                    Sắp ra mắt Quảng trường Vua Hùng tại Đầm Sen
                                </h2>
                            </div>
                            <div className="px-4 mt-0.5">
                                <p className="fontNunito text-ellipsis line-clamp-4 overflow-hidden text-gray-500">
                                    {data.map((item, index) => (
                                        <div key={index}>
                                            {item.VuaHung}
                                        </div>
                                    ))}
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <div className="py-8 px-4">
                                    <div className="flex items-center">
                                        <img className="mr-1 w-5 h-5" src="src/assets/svg/tag.svg" alt=""/>
                                        <span
                                            className="fontNunito-bold text-pink-500 text-center text-[14px]">Sự kiện</span>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-5 h-5 mr-1 mt-1 pl-0.5" src="src/assets/svg/time.svg" alt=""/>
                                        <span
                                            className="mt-1 fontNunito text-gray-500 text-center text-[14px]">08/04/2019</span>
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
                        <div className="w-[250px] h-[450px] shadow-lg">
                            <img className="h-[187.5px] w-full" src="src/assets/png/he-2019.png" alt=""/>
                            <div>
                                <h2 className="fontNunito-bold text-[#259E58] py-3 px-4 text-[18px]">
                                    Hè 2019 và những chương trình đặc biệt cho thiếu nhi
                                </h2>
                            </div>
                            <div className="px-4">
                                <p className="fontNunito text-ellipsis line-clamp-4 overflow-hidden text-gray-500">
                                    {data.map((item, index) => (
                                        <div key={index}>
                                            {item.He2019}
                                        </div>
                                    ))}
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <div className="py-[33px] px-4">
                                    <div className="flex items-center">
                                        <img className="mr-1 w-5 h-5" src="src/assets/svg/tag.svg" alt=""/>
                                        <span
                                            className="fontNunito-bold text-pink-500 text-center text-[14px]">Sự kiện</span>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-5 h-5 mr-1 mt-1 pl-0.5" src="src/assets/svg/time.svg" alt=""/>
                                        <span
                                            className="mt-1 fontNunito text-gray-500 text-center text-[14px]">30/05/2019</span>
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
                                Phượng hoàng bay
                            </button>
                        </div>
                        <div>
                            <button
                                className="float-right fontNunito-bold pt-20 pr-5 flex items-center text-pink-500">
                                Tàu vượt thác
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
                            <img className="h-[165px]" src="src/assets/png/roller-coaster.png" alt=""/>
                            <div className="flex pt-2 justify-between">
                                <h3 className="text-[#259E58] fontNunito-semibold text-[14px]">
                                    Roller Coaster
                                </h3>
                                <p className="text-[14px] fontNunito text-gray-500">10/02/2020</p>
                            </div>
                            <div className="flex text-[#EC008C] text-[14px] fontNunito-semibold">
                                <img className="mr-1" src="src/assets/svg/tag.svg" alt=""/> <span>Vườn thú</span>
                            </div>
                        </div>
                        <div className="flex-shrink-0 relative">
                            <img className="h-[165px]" src="src/assets/png/vong-xoay-khong-gian.png" alt=""/>
                            <div className="flex pt-2 justify-between">
                                <h3 className="text-[#259E58] fontNunito-semibold text-[14px]">
                                    Vòng xoay không gian
                                </h3>
                                <p className="text-[14px] fontNunito text-gray-500">11/02/2020</p>
                            </div>
                            <div className="flex text-[#EC008C] text-[14px] fontNunito-semibold">
                                <img className="mr-1" src="src/assets/svg/tag.svg" alt=""/> <span>Cảm giác mạnh</span>
                            </div>
                        </div>
                        <div className="flex-shrink-0 relative">
                            <img className="h-[165px]" src="src/assets/png/vong-quay-than-toc.png" alt=""/>
                            <div className="flex pt-2 justify-between">
                                <h3 className="text-[#259E58] fontNunito-semibold text-[14px]">
                                    Vòng quay thần tốc
                                </h3>
                                <p className="text-[14px] fontNunito text-gray-500">12/02/2020</p>
                            </div>
                            <div className="flex text-[#EC008C] text-[14px] fontNunito-semibold">
                                <img className="mr-1" src="src/assets/svg/tag.svg" alt=""/> <span>Cảm giác mạnh</span>
                            </div>
                        </div>
                        <div className="flex-shrink-0 relative">
                            <img className="object-cover w-[247.5px] h-[165px]"
                                 src="src/assets/png/ca-chep-nhao-lon.png" alt=""/>
                            <button
                                className="absolute right-[-30px] top-[50%] transform -translate-y-1/2 text-pink-500">
                                <img className="w-2 h-5" src="src/assets/svg/RightArrow_2.svg" alt=""/>
                            </button>
                            <div className="flex pt-2 justify-between">
                                <h3 className="text-[#259E58] fontNunito-semibold text-[14px]">
                                    Cá chép nhào lộn
                                </h3>
                                <p className="text-[14px] fontNunito text-gray-500">11/02/2020</p>
                            </div>
                            <div className="flex text-[#EC008C] text-[14px] fontNunito-semibold">
                                <img className="mr-1" src="src/assets/svg/tag.svg" alt=""/> <span>Cảm giác mạnh</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TrangChu;
