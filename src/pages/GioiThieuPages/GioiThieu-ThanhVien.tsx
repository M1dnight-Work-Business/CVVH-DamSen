import {FaArrowLeftLong, FaArrowRightLong} from "react-icons/fa6";
import {useState} from "react";

function GioiThieuThanhVien() {
    const classNameTailwind = {
        paragraph: "text-left pt-2 fontNunito text-gray-500 text-[18px] leading-[27px]",
        div: "fontBanger pt-20 pb-6 text-[40px] text-pink-500 gap-2 w-[951px]"
    }

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images_NhaHangThuyTa = [
        'src/assets/png/ngan-sen.png',
        'src/assets/png/nha-hang-thuy-ta-2.png',
        'src/assets/png/jan-can-cook.png',
        'src/assets/png/nha-hang-thuy-ta-3.png',
        'src/assets/png/nha-hang-thuy-ta-4.png'
    ];

    const nextImage_NhaHangThuyTa = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images_NhaHangThuyTa.length - 1 ? 0 : prevIndex + 1));
    };

    const prevImage_NhaHangThuyTa = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images_NhaHangThuyTa.length - 1 : prevIndex - 1));
    };

    const images_CaPheVuonDa = [
        'src/assets/png/ca-phe-vuon-da-2.png',
        'src/assets/png/ca-phe-vuon-da-3.png',
        'src/assets/png/cafe-vuon-da.png',
        'src/assets/png/ca-phe-vuon-da-4.png',
        'src/assets/png/ca-phe-vuon-da-5.png'
    ];

    const nextImage_CaPheVuonDa = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images_CaPheVuonDa.length - 1 ? 0 : prevIndex + 1));
    };

    const prevImage_CaPheVuonDa = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images_CaPheVuonDa.length - 1 : prevIndex - 1));
    };
    
    const changeImage = (index: number) => {
        setCurrentImageIndex(index);
    };

    
    return (
        <section>
            <div className="bg-[#ECF3E0] justify-center p-6">
                <div className="bg-white p-6 justify-center">
                    <img src="src/assets/png/thanh-vien.png" alt=""/>
                    <div className="h-auto text-left pt-[56px] float">
                        <h1 className="fontBanger text-[76px] text-[#259E58] underline uppercase gap-2 w-fit">
                            Thành viên
                        </h1>
                        <div
                            className=" fontNunito text-[20px] font-semibold w-[249px] h-[193px] float-right mt-[-150px]">
                            <h3>Mô tả</h3>
                            <hr className="border-b-pink-500 border-b-[1px] my-2"/>
                            <p className="text-[16px] text-gray-500">
                                Thông tin về các đơn vị
                                thành viên của CVVH Đầm Sen
                            </p>
                        </div>
                    </div>
                    <div className={classNameTailwind?.div}>
                        <h2>
                            Nhà hàng Thuỷ tạ
                        </h2>
                        <div className="flex">
                            <p className={classNameTailwind?.paragraph}>
                                Đơn vị thành viên đầu tiên của Đầm Sen là Nhà hàng Thủy tạ nằm ở cổng số 2 của CVVH Đầm
                                Sen.
                                Địa chỉ số 3 Hòa Bình, Quận 11, TP.HCM. Ra đời từ năm 1985, nằm trong lòng CVVH Đầm Sen
                                (thuộc Công ty cổ phần Dịch vụ & Du lịch Phú Thọ quản lý), nhà hàng Thủy Tạ đã định hình
                                thương hiệu và không ngừng phát triển. Hàng năm, đội ngũ nhân viên của nhà hàng đều được
                                đào
                                tạo nâng cao về nghiệp vụ cũng như thái độ phục vụ để đáp ứng mọi yêu cầu của thực
                                khách.
                                Chính vì vậy, suốt nghiều năm qua, nhà hàng Thủy Tạ Đầm Sen vẫn là cái tên được lựa chọn
                                hàng đầu của các cá nhân và cơ quan đơn vị khi đặt tiệc tổ chức sự kiện.
                            </p>
                            <img className="w-[163px] h-[163px] ml-20" src="src/assets/png/nha-hang-thuy-ta.png"
                                 alt=""/>
                        </div>
                        <div className="fontNunito-bold bg-[#259E58] p-2 mt-6
                            text-center flex justify-center items-center text-[16px] rounded-lg text-white w-[140px]">
                            <button>
                                Xem thêm
                            </button>
                            <FaArrowRightLong className="ml-[10px] items-center flex"/>
                        </div>
                    </div>
                    <div className="pt-20 relative">
                        <img className="w-[800px] h-[532px] mx-auto" src={images_NhaHangThuyTa[currentImageIndex]}
                             alt=""/>
                        <div
                            className="absolute top-[50%] transform left-10 right-10 flex justify-between">
                            <button onClick={prevImage_NhaHangThuyTa}>
                                <img src="src/assets/svg/LeftArrow_2.svg" alt=""/>
                            </button>
                            <button onClick={nextImage_NhaHangThuyTa}>
                                <img src="src/assets/svg/RightArrow_2.svg" alt=""/>
                            </button>
                        </div>
                    </div>
                    <div className="text-center mx-auto text-gray-500 fontNunito w-[980px] text-[16px] pt-3">
                        <p>
                            Vua đầu bếp “Jan Can Cook” từng đến giao lưu với đội ngũ bếp của nhà hàng Thủy Tạ Đầm Sen
                        </p>
                    </div>
                    <div className="flex justify-center items-center mt-8">
                        {images_NhaHangThuyTa.map((image, index) => (
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
                    <div className={classNameTailwind?.div}>
                        <h2>
                            cà phê vườn đá
                        </h2>
                        <div className="flex">
                            <p className={classNameTailwind?.paragraph}>
                                Cà phê Vườn Đá bắt đầu hoạt động vào năm 2009. Đây được xem là cà phê rộng và “thiên
                                nhiên” nhất tại TP.HCM. Khuôn viên quán là một phần diện tích của CVVH Đầm Sen. Kiến
                                trúc nhà sàn bên cạnh những tảng đá thiên nhiên với đa dạng hình thù. Đồng thời có dòng
                                suối chảy róc rách cùng những loài chim thả tự nhiên. Khách đến có thể cảm nhận như một
                                “Đà Lạt thu nhỏ”. Đồng thời, vào mỗi tối và sáng thứ bảy – chủ nhật đều có biểu diễn
                                nhạc sống.
                                <br/>
                                <br/>
                                Năm 2018, đơn vị thành viên của Đầm Sen này đã khai trương thêm gian triển lãm tranh đá
                                quý để khách tham quan có điều kiện thưỡng lãm.
                            </p>
                            <img className="w-[163px] h-[163px] ml-20" src="src/assets/svg/ca-phe-vuon-da.svg"
                                 alt=""/>
                        </div>
                        <div className="fontNunito-bold bg-[#259E58] p-2 mt-6
                            text-center flex justify-center items-center text-[16px] rounded-lg text-white w-[140px]">
                            <button>
                                Xem thêm
                            </button>
                            <FaArrowRightLong className="ml-[10px] items-center flex"/>
                        </div>
                    </div>
                    <div className="pt-20 relative">
                        <img className="w-[800px] h-[532px] mx-auto" src={images_CaPheVuonDa[currentImageIndex]}
                             alt=""/>
                        <div
                            className="absolute top-[50%] transform left-10 right-10 flex justify-between">
                            <button onClick={prevImage_CaPheVuonDa}>
                                <img src="src/assets/svg/LeftArrow_2.svg" alt=""/>
                            </button>
                            <button onClick={nextImage_CaPheVuonDa}>
                                <img src="src/assets/svg/RightArrow_2.svg" alt=""/>
                            </button>
                        </div>
                    </div>
                    <div className="text-center mx-auto text-gray-500 fontNunito w-[980px] text-[16px] pt-3">
                        <p>
                            Quán cà phê Stone Garden tại CVVH Đầm Sen
                        </p>
                    </div>
                    <div className="flex justify-center items-center mt-8">
                        {images_CaPheVuonDa.map((image, index) => (
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
                            <img className="h-[165px]" src="src/assets/png/hippo.png" alt=""/>
                            <div className="flex pt-2 justify-between">
                                <h3 className="text-[#259E58] fontNunito-semibold text-[14px]">
                                    Hà Mã Châu Phi
                                </h3>
                                <p className="text-[14px] fontNunito text-gray-500">04/01/2021</p>
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
    )
}

export default GioiThieuThanhVien