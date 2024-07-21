import {useState} from 'react';
import {FaArrowLeftLong, FaArrowRightLong} from "react-icons/fa6";

function KhamPhaCaChepNhaoLon() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        'src/assets/png/ca-chep-nhao-lon.png',
        'src/assets/png/ca-chep-nhao-lon-4.png',
        'src/assets/png/ca-chep-nhao-lon-3.png',
        'src/assets/png/ca-chep-nhao-lon-5.png',
        'src/assets/png/ca-chep-nhao-lon-2.png'
    ];

    const changeImage = (index: number) => {
        setCurrentImageIndex(index);
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <section>
            <div className="bg-[#ECF3E0] justify-center p-6">
                <div className="bg-white p-6 justify-center">
                    <img className="w-full object-cover h-[500px]" src="src/assets/png/ca-chep-nhao-lon-2.png" alt=""/>
                    <div className="h-auto text-left pt-[56px] float">
                        <h1 className="fontBanger text-[76px] text-[#259E58] underline uppercase gap-2 w-fit">
                            cá chép nhào lộn
                        </h1>
                        <div className="flex">
                            <img src="src/assets/svg/tag.svg" alt=""/>
                            <p className="fontNunito-bold text-[16px] text-pink-500 pl-0.5 pr-4">Cảm giác mạnh</p>
                            <img src="src/assets/svg/time.svg" alt=""/>
                            <p className="fontNunito pl-0.5 text-gray-500 text-[16px]">11/02/2020</p>
                        </div>
                        <div
                            className="fontNunito text-[22px] font-semibold w-[220px] h-[120px] float-right mt-[-150px]">
                            <h3>Mô tả</h3>
                            <hr className="border-b-pink-500 border-b-[1px] my-2"/>
                            <p className="text-[18px] text-gray-500">
                                Trò chơi Cá chép nhào lộn tại CVVH Đầm Sen
                            </p>
                        </div>
                        <div className="text-gray-500 fontNunito w-[980px] text-[18px] pt-20">
                            <p>
                                Cá chép nhào lộn là trò chơi cảm giác mạnh do Công ty Cổ phần Dịch vụ Du lịch Phú Thọ
                                (Phuthotourist) đầu tư tại CVVH Đầm Sen. Đây là trò chơi hình thức con lắc Pendulum. Trò
                                chơi gồm 2 con tàu hình cá chép, đong đưa theo trục đứng. Trò chơi này cũng tương tự như
                                Phượng hoàng bay, nhưng có thể đánh vòng đến 360 độ
                            </p>
                            <br/>
                            <p>
                                Người chơi ngồi bên trên sẽ được đưa lên cao đến hơn 10m, rồi rơi tự do xuống, lại bật
                                lên nhiều vòng. Đỉnh điểm là khi cặp cá chép nhào lộn ngược trên không, khiến người chơi
                                phải la hét vì phấn khích. Trò chơi nằm ở khu cảm giác mạnh tại cổng số 1 (đường Lạc
                                Long Quân).
                            </p>
                        </div>

                        <div className="pt-20 relative">
                            <img className="w-[800px] h-[532px] mx-auto" src={images[currentImageIndex]}
                                 alt=""/>
                            <div
                                className="absolute top-[50%] transform left-10 right-10 flex justify-between">
                                <button onClick={prevImage}>
                                    <img src="src/assets/svg/LeftArrow_2.svg" alt=""/>
                                </button>
                                <button onClick={nextImage}>
                                    <img src="src/assets/svg/RightArrow_2.svg" alt=""/>
                                </button>
                            </div>
                        </div>
                        <div className="mx-auto text-center text-gray-500 fontNunito w-[980px] text-[16px] pt-3">
                            <p>
                                Hai con tàu hình cá chép
                            </p>
                        </div>
                        <div className="flex justify-center items-center mt-8">
                            {images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => changeImage(index)}
                                    className={`mx-3 focus:outline-none ${currentImageIndex === index
                                        ? 'p-1 border-4 border-pink-500'
                                        : 'opacity-50 hover:opacity-100'}`}>
                                    <img className="w-[200px] h-[150px] object-cover" src={image}
                                         alt={`Thumbnail ${index + 1}`}/>
                                </button>
                            ))}
                        </div>
                        <div className="w-full flex justify-between">
                            <div>
                                <button
                                    className="float-left fontNunito-bold pt-20 pl-5 flex items-center text-pink-500">
                                    <FaArrowLeftLong className="mr-[10px] items-center flex"/>
                                    Roller Coaster
                                </button>
                            </div>
                            <div>
                                <button
                                    className="float-right fontNunito-bold pt-20 pr-5 flex items-center text-pink-500">
                                    Phượng hoàng bay
                                    <FaArrowRightLong className="ml-[10px] items-center flex"/>
                                </button>
                            </div>
                        </div>
                        <div className="pt-4 fontBanger text-[32px] pl-6 text-[#259E58] uppercase gap-2 w-fit">
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
                                <img className="h-[165px]" src="src/assets/png/vong-xoay-khong-gian.png" alt=""/>
                                <div className="flex pt-2 justify-between">
                                    <h3 className="text-[#259E58] fontNunito-semibold text-[16px]">
                                        Vòng xoay không gian
                                    </h3>
                                    <p className="text-[14px] my-auto fontNunito text-gray-500">11/02/2020</p>
                                </div>
                                <div className="flex text-[#EC008C] text-[14px] fontNunito-semibold">
                                    <img className="mr-1" src="src/assets/svg/tag.svg" alt=""/> <span>Cảm giác mạnh</span>
                                </div>
                            </div>
                            <div className="flex-shrink-0 relative">
                                <img className="h-[165px]" src="src/assets/png/lau-dai-kinh-di.png" alt=""/>
                                <div className="flex pt-2 justify-between">
                                    <h3 className="text-[#259E58] fontNunito-semibold text-[16px]">
                                        Lâu đài kinh dị
                                    </h3>
                                    <p className="text-[14px] my-auto fontNunito text-gray-500">21/02/2020</p>
                                </div>
                                <div className="flex text-[#EC008C] text-[14px] fontNunito-semibold">
                                    <img className="mr-1" src="src/assets/svg/tag.svg" alt=""/>
                                    <span>Cảm giác mạnh</span>
                                </div>
                            </div>
                            <div className="flex-shrink-0 relative">
                                <img className="h-[165px]" src="src/assets/png/tau-vuot-thac.png" alt=""/>
                                <div className="flex pt-2 justify-between">
                                    <h3 className="text-[#259E58] fontNunito-semibold text-[16px]">
                                        Tàu vượt thác
                                    </h3>
                                    <p className="text-[14px] my-auto fontNunito text-gray-500">11/02/2020</p>
                                </div>
                                <div className="flex text-[#EC008C] text-[14px] fontNunito-semibold">
                                    <img className="mr-1" src="src/assets/svg/tag.svg" alt=""/>
                                    <span>Cảm giác mạnh</span>
                                </div>
                            </div>
                            <div className="flex-shrink-0 relative">
                                <img className="h-[165px]" src="src/assets/png/spinning-coaster.png" alt=""/>
                                <button
                                    className="absolute right-[-30px] top-[50%] transform -translate-y-1/2 text-pink-500">
                                    <img className="w-2 h-5" src="src/assets/svg/RightArrow_2.svg" alt=""/>
                                </button>
                                <div className="flex pt-2 justify-between">
                                    <h3 className="text-[#259E58] fontNunito-semibold text-[16px]">
                                        Spinning Coaster
                                    </h3>
                                    <p className="text-[14px] my-auto fontNunito text-gray-500">20/02/2020</p>
                                </div>
                                <div className="flex text-[#EC008C] text-[14px] fontNunito-semibold">
                                    <img className="mr-1" src="src/assets/svg/tag.svg" alt=""/>
                                    <span>Cảm giác mạnh</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default KhamPhaCaChepNhaoLon;
