import {useState} from "react";
import {FaArrowLeftLong, FaArrowRightLong} from "react-icons/fa6";

function CanhDepVuaHung() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images_CanhLamLe = [
        'src/assets/png/lam-le-1.png',
        'src/assets/png/lam-le-2.png',
        'src/assets/png/lam-le-1.png',
        'src/assets/png/lam-le-3.png',
        'src/assets/png/lam-le-2.png'
    ];

    const nextImage_CanhLamLe = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images_CanhLamLe.length - 1 ? 0 : prevIndex + 1));
    };

    const prevImage_CanhLamLe = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images_CanhLamLe.length - 1 : prevIndex - 1));
    };

    const images_DuKhach = [
        'src/assets/png/du-khach-1.png',
        'src/assets/png/du-khach-3.png',
        'src/assets/png/du-khach-1.png',
        'src/assets/png/du-khach-2.png',
        'src/assets/png/du-khach-1.png'
    ];

    const nextImage_DuKhach = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images_DuKhach.length - 1 ? 0 : prevIndex + 1));
    };

    const prevImage_DuKhach = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images_DuKhach.length - 1 : prevIndex - 1));
    };

    const images_DieuHanh = [
        'src/assets/png/dieu-hanh-2.png',
        'src/assets/png/dieu-hanh-3.png',
        'src/assets/png/dieu-hanh.png',
        'src/assets/png/dieu-hanh-4.png',
        'src/assets/png/dieu-hanh-5.png'
    ];

    const nextImage_DieuHanh = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images_DieuHanh.length - 1 ? 0 : prevIndex + 1));
    };

    const prevImage_DieuHanh = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images_DieuHanh.length - 1 : prevIndex - 1));
    };

    const images_BanhChung = [
        'src/assets/png/banh-chung-3.png',
        'src/assets/png/banh-chung-2.png',
        'src/assets/png/banh-chung-1.png',
        'src/assets/png/banh-chung-3.png',
        'src/assets/png/banh-chung-2.png'
    ];

    const nextImage_BanhChung = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images_BanhChung.length - 1 ? 0 : prevIndex + 1));
    };

    const prevImage_BanhChung = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images_BanhChung.length - 1 : prevIndex - 1));
    };

    const changeImage = (index: number) => {
        setCurrentImageIndex(index);
    };
    return (
        <section>
            <div className="bg-[#ECF3E0] justify-center p-6">
                <div className="bg-white p-6 justify-center">
                    <img className="w-full object-cover" src="src/assets/png/quang-truong-vua-hung.png"
                         alt=""/>
                    <div className="h-auto text-left pt-[56px] float">
                        <h1 className="fontBanger text-[76px] text-[#259E58] underline uppercase gap-2 w-fit">
                            Quảng trường vua Hùng
                        </h1>
                        <div className="flex">
                            <img src="src/assets/svg/tag.svg" alt=""/>
                            <p className="fontNunito-bold text-[16px] text-pink-500 pl-0.5 pr-4">Cảnh đẹp</p>
                            <img src="src/assets/svg/time.svg" alt=""/>
                            <p className="fontNunito pl-0.5 text-gray-500 text-[16px]">11/02/2020</p>
                        </div>
                        <div
                            className="fontNunito text-[22px] font-semibold w-[220px] h-[120px] float-right mt-[-150px]">
                            <h3>Mô tả</h3>
                            <hr className="border-b-pink-500 border-b-[1px] my-2"/>
                            <p className="text-[18px] text-gray-500">
                                Quảng trường Vua Hùng trong ngày giỗ quốc tổ
                            </p>
                        </div>
                        <div className="text-gray-500 fontNunito w-[980px] text-[18px] pt-20">
                            <p>
                                Hàng ngàn du khách đã đến dâng hương trước tượng Hùng Vương tại Quảng trường vua Hùng
                                trong ngày 14/4/2019. Đây là quảng trường thứ 3 của CVVH Đầm Sen đưa vào hoạt động.
                                (Trước đó, Đầm Sen đã có quảng trường Âu Lạc và quảng trường La Mã chuyên phục vụ sự
                                kiện). Đền thờ này được xem như một cúng phẩm dâng lên trong ngày giổ Quốc tổ.
                            </p>
                        </div>
                        <div className="fontBanger pt-10 pb-6 text-[40px] text-pink-500 gap-2 w-[951px]">
                            <h2>
                                Ra mắt Quảng trường vua Hùng
                            </h2>
                            <p className="text-left pt-2 fontNunito text-gray-500 text-[18px] leading-[27px]">
                                Quảng trường này có tổng diện tích gần 1000m2. Bao gồm sân hành lễ được lát đá
                                Granite với hoa văn mặt trời đặt ở chính giữa. Kế đến là thang rồng, tiết diện bề
                                ngang 4,5 mét, đáp ứng đoàn khách 5 hàng. Trên cùng là khu vực dâng hương, được
                                thiết kế 3 đền thờ. Chính giữa là chánh điện với tượng vua Hùng cao 1,7 mét, được
                                làm bằng chất liệu composite phủ đồng, đặt trên bệ đá cao 0,8m.
                            </p>
                        </div>
                        <div className="w-full">
                            <img className="w-full" src="src/assets/png/quang-truong-vua-hung.png"/>
                            <p className="text-center pt-3 fontNunito text-gray-500 text-[18px] leading-[27px]">Quảng
                                trường vua Hùng trong ngày giỗ quốc tổ</p>
                        </div>
                        <div className="pt-10 w-[973px]">
                            <p className="fontNunito text-gray-500 text-[18px] leading-[27px]">
                                Bức tượng vua Hùng tại Đầm Sen đã được Thạc sĩ – Điêu khắc gia Phạm Văn Út thực hiện.
                                Tác giả đã xây dựng bố cục vua Hùng ngồi trên ngai, cách điệu từ hoa văn trống đồng. Mặt
                                tượng nhìn thẳng thể hiện sự tôn nghiêm. Tay phải nắm chùm bông lúa, ý muốn đề cao một
                                nền văn hóa lúa nước của dân tộc Việt, cho con cháu đời sau phải gìn giữ và tôn vinh.
                                Tay trái để tự nhiên trong tư thế ngồi trao đổi với các Lạc tướng, Lạc hầu. Các hoa văn
                                trang trí trên bộ trang phục, được lấy cảm hứng từ đường nét của nền văn hóa Đông Sơn.
                                Đặc biệt là hoa văn trên trống đồng Ngọc Lũ.
                            </p>
                        </div>
                        <div className="flex pt-6 gap-2">
                            <div>
                                <img className="w-full h-[460px]" src="src/assets/png/tuong-vua-hung.png" alt=""/>
                                <p className="text-center pt-3 fontNunito text-gray-500 text-[18px] leading-[27px]">Bức
                                    tượng vua Hùng mới được đặt tại Đầm Sen</p>
                            </div>
                            <div>
                                <img src="src/assets/png/dieu-khac-gia.png" alt=""/>
                                <p className="text-center pt-3 fontNunito text-gray-500 text-[18px] leading-[27px]">Điêu
                                    khắc gia Phạm Văn Út</p>
                            </div>
                        </div>
                        <div className="pt-6">
                            <img className="w-full" src="src/assets/png/chanh-dien.png" alt=""/>
                            <p className="text-center pt-3 fontNunito text-gray-500 text-[18px] leading-[27px]">Chánh
                                điện thờ vua Hùng trong ngày giỗ tổ</p>
                            <p className="w-[986px] pt-5 fontNunito text-gray-500 text-[18px] leading-[27px]">
                                Bên cạnh đó, chủ tịch Hồ Chí Minh từng nói: “Các vua Hùng đã có công dựng nước, Bác cháu
                                ta phải cùng nhau giữ lấy nước” (xem lịch sử câu nói tại đây). Thấu hiểu điều đó,
                                Phuthotourist không chỉ hướng ý thức của du khách đến viếng người có công dựng nước, mà
                                còn muốn nhắc đến công giữ nước của những danh tướng đã làm nên lịch sử. Đó là đền thờ
                                Hưng Đạo Vương, vị vua từng đánh tan hai cuộc xâm lược của quân Nguyên – Mông (năm 1285
                                và năm 1288). Hưng Đạo Vương còn lưu truyền thế hệ sau bằng bài thơ “Hịch tướng sĩ”.
                            </p>
                        </div>
                        <div className="pt-6">
                            <img className="w-full" src="src/assets/png/gian-tho.png" alt=""/>
                            <p className="text-center pt-3 fontNunito text-gray-500 text-[18px] leading-[27px]">Gian thờ
                                Hưng Đạo Vương đặt bên phải, với bào thơ Hịch Tướng Sĩ</p>
                            <p className="w-[986px] pt-5 fontNunito text-gray-500 text-[18px] leading-[27px]">
                                Danh tướng thứ hai là Hai Bà Trưng (xem thông tin lịch sử tại đây). Hai nữ anh hùng dân
                                tộc đầu tiên của đất Việt, phất cờ khởi nghĩa. Và lập quốc gia với kinh đô tại Mê Linh.
                                Bà Trưng Trắc lên ngôi Nữ vương, trở thành vị vua nữ đầu tiên trong trong lịch sử Việt
                                Nam. Với danh hiệu Trưng Nữ Vương. Cả hai biểu tượng danh tướng đều được đặt hai bên
                                chánh điện, trong khuôn viên của quảng trường vua Hùng. (xem thêm về lễ khánh thành
                                tượng Hai Bà Trưng tại đây)
                            </p>
                        </div>
                        <div className="pt-6">
                            <img className="w-full" src="src/assets/png/hai-ba-trung.png" alt=""/>
                            <p className="text-center pt-3 fontNunito text-gray-500 text-[18px] leading-[27px]">Gian thờ
                                Hưng Đạo Vương đặt bên phải, với bào thơ Hịch Tướng Sĩ</p>
                        </div>
                        <hr className="pt-20 mx-auto border-b-1 border-b-[#99C6B1] border-t-0"/>
                        <div>
                            <h2 className="fontBanger pt-20 pb-6 text-[40px] text-pink-500 gap-2 w-[951px]">Ngày giỗ tổ
                                đầu tiên trước linh tượng</h2>
                            <p className="fontNunito text-gray-500 text-[18px] leading-[27px] w-[973px]">8 giờ sáng
                                ngày
                                14/4/2019, Phuthotourist cùng UBND Quận 11, Mặt trận tổ quốc VN Quận 11,
                                Viện Lịch sử các dòng họ, đã tổ chức lễ dâng hương đầu tiên trước linh tượng vua Hùng.
                                Và đây cũng là sự kiện ra mắt quảng trường Hùng Vương tại Đầm Sen. Hàng ngàn người dân
                                và du khách đã đem lễ vật đến đây để dâng lên quốc tổ, cùng ôn lại lịch sử dân tộc ngàn
                                năm.</p>
                        </div>
                        <div className="pt-20 relative">
                            <img className="w-[800px] h-[532px] mx-auto" src={images_CanhLamLe[currentImageIndex]}
                                 alt=""/>
                            <div
                                className="absolute top-[50%] transform left-10 right-10 flex justify-between">
                                <button onClick={prevImage_CanhLamLe}>
                                    <img src="src/assets/svg/LeftArrow_2.svg" alt=""/>
                                </button>
                                <button onClick={nextImage_CanhLamLe}>
                                    <img src="src/assets/svg/RightArrow_2.svg" alt=""/>
                                </button>
                            </div>
                        </div>
                        <div className="text-center mx-auto text-gray-500 fontNunito w-[980px] text-[16px] pt-3">
                            <p>
                                Cảnh làm lễ giỗ quốc tổ tại quảng trường vua Hùng 2019
                            </p>
                        </div>
                        <div className="flex justify-center items-center mt-8">
                            {images_CanhLamLe.map((image, index) => (
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
                        <div className="w-[973px] pt-20">
                            <p className="fontNunito text-gray-500 text-[18px] leading-[27px]">Bên cạnh đó, Đầm Sen cũng
                                tổ chức thi nấu bánh chưng với sự tham gia của các đơn vị trong
                                quận 11. Tổng số bánh chưng 3000 chiếc đã được phát lộc cho du khách đến dâng hương tại
                                quảng trường ngay trong buổi sáng giỗ tổ.</p>
                        </div>
                        <div className="pt-20 relative">
                            <img className="w-[800px] h-[532px] mx-auto" src={images_DuKhach[currentImageIndex]}
                                 alt=""/>
                            <div
                                className="absolute top-[50%] transform left-10 right-10 flex justify-between">
                                <button onClick={prevImage_DuKhach}>
                                    <img src="src/assets/svg/LeftArrow_2.svg" alt=""/>
                                </button>
                                <button onClick={nextImage_DuKhach}>
                                    <img src="src/assets/svg/RightArrow_2.svg" alt=""/>
                                </button>
                            </div>
                        </div>
                        <div className="text-center mx-auto text-gray-500 fontNunito w-[980px] text-[16px] pt-3">
                            <p>
                                Cảnh làm lễ giỗ quốc tổ tại quảng trường vua Hùng 2019
                            </p>
                        </div>
                        <div className="flex justify-center items-center mt-8">
                            {images_DuKhach.map((image, index) => (
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
                        <div className="w-[973px] pt-20">
                            <p className="fontNunito text-gray-500 text-[18px] leading-[27px]">Trước đó, Đầm Sen cũng tổ
                                chức lễ diễu hành đặc biệt vào chiều ngày 13/4/2019. Buổi diễn hành này nhằm giới thiệu
                                quảng trường vua Hùng với nhân dân trên địa bàn quận 11.</p>
                        </div>
                        <div className="pt-20 relative">
                            <img className="w-[800px] h-[532px] mx-auto" src={images_DieuHanh[currentImageIndex]}
                                 alt=""/>
                            <div
                                className="absolute top-[50%] transform left-10 right-10 flex justify-between">
                                <button onClick={prevImage_DieuHanh}>
                                    <img src="src/assets/svg/LeftArrow_2.svg" alt=""/>
                                </button>
                                <button onClick={nextImage_DieuHanh}>
                                    <img src="src/assets/svg/RightArrow_2.svg" alt=""/>
                                </button>
                            </div>
                        </div>
                        <div className="text-center mx-auto text-gray-500 fontNunito w-[980px] text-[16px] pt-3">
                            <p>
                                Quãng trường Vua Hùng
                            </p>
                        </div>
                        <div className="flex justify-center items-center mt-8">
                            {images_DieuHanh.map((image, index) => (
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
                        <div className="w-[973px]">
                            <h2 className=" fontBanger pt-20 pb-6 text-[40px] text-pink-500 gap-2 w-[951px]">
                                Từ chiếc bánh chưng khổng lồ
                            </h2>
                            <p className="fontNunito text-gray-500 text-[18px] leading-[27px]">
                                Trước 2007, Phuthotourist từng tự tổ chức ngày giổ tổ Hùng Vương tại Đầm Sen vào ngày
                                10/3 âm lịch. Với mục đích ban đầu là tạo địa điểm để nhân viên Phuthotourist và những
                                du khách tưởng nhớ tổ tiên dân tộc. Số lượng khách tham dự lúc bấy giờ lên đến cả chục
                                ngàn người, vượt xa dự tính ban đầu.
                            </p>
                        </div>
                        <div className="pt-20 relative">
                            <img className="w-[800px] h-[532px] mx-auto" src={images_BanhChung[currentImageIndex]}
                                 alt=""/>
                            <div
                                className="absolute top-[50%] transform left-10 right-10 flex justify-between">
                                <button onClick={prevImage_BanhChung}>
                                    <img src="src/assets/svg/LeftArrow_2.svg" alt=""/>
                                </button>
                                <button onClick={nextImage_BanhChung}>
                                    <img src="src/assets/svg/RightArrow_2.svg" alt=""/>
                                </button>
                            </div>
                        </div>
                        <div className="text-center mx-auto text-gray-500 fontNunito w-[980px] text-[16px] pt-3">
                            <p>
                                Làm chiếc bánh chưng khổng lồ tại Đầm Sen năm 2016
                            </p>
                        </div>
                        <div className="flex justify-center items-center mt-8">
                            {images_BanhChung.map((image, index) => (
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
                        <div className="w-[973px] pt-20">
                            <p className="fontNunito text-gray-500 text-[18px] leading-[27px]">Sau khi Quốc Hội quyết
                                định công nhận ngày quốc tổ vào tháng 4/2007, Phuthotourist đã phối hợp với UBMT Tổ Quốc
                                Quận 11, tổ chức nhiều hoạt động lớn hơn. Tuy nhiên, Đầm Sen vẫn mong muốn làm được cống
                                vật gì xứng đáng. Và phải mang ý nghĩa góp công sức của tập thể. Vậy là ý tưởng về chiếc
                                bánh chưng khổng lồ ra đời từ những năm đầu 2010. Và đến năm 2016, Đầm Sen đã xác lập kỷ
                                lục Guinness Thế giới với chiếc bánh chưng khổng lồ nặng nhất: 2,5 Tấn. Để làm chiếc
                                bánh chưng này, đã có hơn 50 người với nhiều công đoạn gói, nấu bánh khác thường. Sau đó
                                luộc suốt 3 ngày liên tục để dâng cúng Quốc tổ.</p>
                        </div>
                        <div>
                            <h2 className=" fontBanger pt-20 pb-6 text-[40px] text-pink-500 gap-2 w-[951px]">
                                Đến nhu cầu cần một đền thờ vua Hùng
                            </h2>
                            <p className="fontNunito text-gray-500 text-[18px] leading-[27px] w-[973px]">
                                Từ những thành công đó, Phuthotourist lại tiếp tục suy nghĩ: Nếu như nhà thờ không thể
                                thiếu tượng chúa, Đình chùa không thể vắng tượng phật. Thì một nơi mà hàng ngàn người
                                dân cùng hướng về tổ tiên lại càng không thể thiếu một linh tượng.
                            </p>
                            <img className="w-full pt-6" src="src/assets/png/lanh-dao.png" alt=""/>
                            <p className="text-center fontNunito text-gray-500 text-[18px] leading-[27px] pt-3">
                                Các vị lãnh đạo và đại biểu lên dâng hương trước linh tượng vua Hùng tại Đầm Sen
                            </p>
                            <p className="fontNunito text-gray-500 text-[18px] leading-[27px] w-[973px] pt-10">
                                Qua một khảo sát, cho thấy các địa điểm thờ phụng vua Hùng chỉ tập trung khách viếng vào
                                ngày 10/3 âm lịch. Còn những ngày thường thì do mưu sinh cuộc sống, nên ít người lui
                                tới. Thời gian rảnh rỗi chủ yếu vui chơi để phục hồi sức khỏe làm việc. Vì vậy, việc xây
                                dựng một đền thờ vua Hùng vào khu vui chơi giải trí là việc nên làm. Khi du khách dạo
                                chơi qua đây, sẽ dành vài phút tưởng nhớ đến các bậc anh linh đất Việt. Và truyền dạy
                                cho con trẻ về chân dung của những vị vua nhân ái của đất nước.
                            </p>
                        </div>
                        <div className="w-[973px] pt-20">
                            <p className="fontNunito text-gray-500 text-[18px] leading-[27px]">Sau khi Quốc Hội quyết
                                định công nhận ngày quốc tổ vào tháng 4/2007, Phuthotourist đã phối hợp với UBMT Tổ Quốc
                                Quận 11, tổ chức nhiều hoạt động lớn hơn. Tuy nhiên, Đầm Sen vẫn mong muốn làm được cống
                                vật gì xứng đáng. Và phải mang ý nghĩa góp công sức của tập thể. Vậy là ý tưởng về chiếc
                                bánh chưng khổng lồ ra đời từ những năm đầu 2010. Và đến năm 2016, Đầm Sen đã xác lập kỷ
                                lục Guinness Thế giới với chiếc bánh chưng khổng lồ nặng nhất: 2,5 Tấn. Để làm chiếc
                                bánh chưng này, đã có hơn 50 người với nhiều công đoạn gói, nấu bánh khác thường. Sau đó
                                luộc suốt 3 ngày liên tục để dâng cúng Quốc tổ.</p>
                        </div>
                        <div>
                            <h2 className=" fontBanger pt-20 pb-6 text-[40px] text-pink-500 gap-2 w-[951px]">
                                Những khó khăn khi thực hiện
                            </h2>
                            <p className="fontNunito text-gray-500 text-[18px] leading-[27px] w-[973px]">
                                Mặc dù đã lên phương án xây dựng một Quảng trường vua Hùng từ nhiều năm. Nhưng khó khăn
                                nhất là vấn đề chân dung của vua Hùng. Trong nhận thức của người Việt, một vị vua cha
                                phải mang những nét anh minh và đức độ; nghiêm khắc nhưng bao dung; hiền hậu nhưng quyết
                                đoán. Để lột tả được những nét đặc trưng đó, quả là điều không dễ. Điều này đã được bàn
                                đi bàn lại, từ đường nét gương mặt; trang phục; vóc dáng; tư thế; cho đến cả chất liệu
                                sao cho dễ di chuyển.
                            </p>
                            <img className="w-full pt-6" src="src/assets/png/ngay-ra-mat.png" alt=""/>
                            <p className="text-center fontNunito text-gray-500 text-[18px] leading-[27px] pt-3">
                                Sân hành lễ với sức chứa hàng ngàn người trong ngày đầu tiên ra mắt quảng trường vua
                                Hùng tại Đầm Sen
                            </p>
                            <p className="fontNunito text-gray-500 text-[18px] leading-[27px] w-[973px] pt-10">
                                Khó khăn kế tiếp là mặt bằng để xây dựng đền thờ. Với một nơi quy tụ mọi tầng lớp nhân
                                dân đến vui chơi như Đầm Sen, thì việc tìm vị trí xây dựng khu linh thiêng, trang trọng
                                không phải dễ. Đặc biệt là khi ý thức người dân về bảo vệ môi trường cảnh quan chưa cao.
                                Việc xả rác bừa bãi, ăn nằm vạ vật nơi linh thiêng, chưa kể việc khắc tên vẽ bậy vẫn
                                thường diễn ra ở nhiều nơi tôn nghiêm khiến ban lãnh đạo công ty phải suy nghĩ.
                                <br/>
                                <br/>
                                Phuthotourist đã phối hợp với Viện nghiên cứu lịch sử, viện lịch sử dòng họ… để tìm giải
                                pháp. Đồng thời tìm kiếm những nhà điêu khắc có kinh nghiệm để cùng bàn bạc ý tưởng;
                                phác họa nên một chân dung vị vua Hùng dân tộc. Và cuối cùng, ngày 14/4/2019, Quảng
                                trường vua Hùng chính thức ra mắt tại Đầm Sen. Mở thêm một địa điểm mới để người dân đến
                                đây dâng hương trong những ngày giỗ quốc tổ.
                            </p>
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
            </div>
        </section>
    )
}

export default CanhDepVuaHung;