function GioiThieuChinhSachBaoMat() {
    const classNameTailwind = {
        paragraph:"text-left pt-6 fontNunito text-gray-500 text-[18px] leading-[27px]",
        ul_li:"text-left pt-6 pl-6 fontNunito text-gray-500 text-[18px] leading-[27px] list-decimal",
        h3_title:"fontNunito-bold text-[23px] text-gray-600 pt-6",
        div: "fontBanger pt-10 pb-6 text-[40px] text-pink-500 gap-2 w-[951px]"
    }
    
    return (
        <section>
            <div className="bg-[#ECF3E0] justify-center p-6">
                <div className="bg-white p-6 justify-center">
                    <img src="src/assets/than-tai.png" alt=""/>
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
                            Đầm Sen là một trong những khu du lịch lớn đặc sắc nhất nước Việt Nam.
                            Kiến trúc được kết hợp một cách hoàn mĩ nền văn hóa Đông - Tây và một chút vẻ đẹp thời La
                            Mã.
                            Ngoài những khu vui chơi, Đầm Sen còn có những nhà hàng, khách sạn và hàng chục các loại
                            hình khác để phục vụ khách du lịch.
                            Đầm Sen là nơi vui chơi giải trí rất hấp dẫn cho người trong và ngoài nước.
                        </p>
                    </div>
                    <div>
                        <img src="src/assets/TrangChu.png" alt=""/>
                    </div>
                    <div className={classNameTailwind?.div}>
                        <h2 className="uppercase">
                            Thông tin cá nhân nào bị thu thập và tại sao thu thập?
                        </h2>
                        <h3 className={classNameTailwind?.h3_title}>
                            1. Bình luận
                        </h3>
                        <p className={classNameTailwind?.paragraph}>
                            Khi khách truy cập để lại bình luận trên trang web,
                            chúng tôi thu thập dữ liệu được hiển thị trong mẫu bình luận và cũng là địa chỉ IP của người
                            truy cập
                            và chuỗi user agent của người dùng trình duyệt để giúp phát hiện spam.
                        </p>
                        <p className={classNameTailwind?.paragraph}>
                            Một chuỗi ẩn danh được tạo từ địa chỉ email của bạn (còn được gọi là hash)
                            có thể được cung cấp cho dịch vụ Gravatar để xem bạn có đang sử dụng nó hay không.
                            Chính sách bảo mật của dịch vụ Gravatar có tại đây:
                            <span className="text-[#005AAB]">https://automattic.com/privacy/</span>.
                            Sau khi chấp nhận bình luận của bạn, ảnh tiểu sử của bạn được hiển thị công khai trong ngữ
                            cảnh bình luận của bạn.
                        </p>
                        <h3 className={classNameTailwind?.h3_title}>
                            2. Thư viện
                        </h3>
                        <p className={classNameTailwind?.paragraph}>
                            Nếu bạn tải hình ảnh lên trang web, bạn nên tránh tải lên hình ảnh có dữ liệu vị trí được
                            nhúng
                            (EXIF GPS) đi kèm. Khách truy cập vào trang web có thể tải xuống và giải nén bất kỳ dữ liệu
                            vị trí nào
                            từ hình ảnh trên trang website
                        </p>
                        <h3 className={classNameTailwind?.h3_title}>
                            3. Cookies
                        </h3>
                        <p className={classNameTailwind?.paragraph}>
                            Nếu bạn viết bình luận trong website, bạn có thể cung cấp cần nhập tên, email địa chỉ
                            website trong cookie.
                            Các thông tin này nhằm giúp bạn không cần nhập thông tin nhiều lần khi viết bình luận khác.
                            Cookie này sẽ được lưu giữ trong một năm.
                        </p>
                        <p className={classNameTailwind?.paragraph}>
                            Nếu bạn có tài khoản và đăng nhập và website, chúng tôi sẽ thiết lập một cookie tạm thời
                            để xác định nếu trình duyệt cho phép sử dụng cookie.
                            Cookie này không bao gồm thông tin cá nhân và sẽ được gỡ bỏ khi bạn đóng trình duyệt.
                        </p>
                        <p className={classNameTailwind?.paragraph}>
                            Khi bạn đăng nhập, chúng tôi sẽ thiết lập một vài cookie để lưu thông tin đăng nhập và lựa
                            chọn hiển thị.
                            Thông tin đăng nhập gần nhất lưu trong hai ngày và lựa chọn hiển thị gần nhất lưu trong một
                            năm.
                            Nếu bạn chọn “Nhớ tôi”, thông tin đăng nhập sẽ được lưu trong hai tuần.
                            Nếu bạn thoát tài khoản, thông tin cookie đăng nhập sẽ bị xoá.
                        </p>
                        <p className={classNameTailwind?.paragraph}>
                            Nếu bạn sửa hoặc công bố bài viết, một bản cookie bổ sung sẽ được lưu trong trình duyệt.
                            Cookie này không chứa thông tin cá nhân và chỉ đơn giản bao gồm ID của bài viết bạn đã sửa.
                            Nó tự động hết hạn sau 1 ngày.
                        </p>
                        <h3 className={classNameTailwind?.h3_title}>
                            4. Nội dung nhúng từ website khác
                        </h3>
                        <p className={classNameTailwind?.paragraph}>
                            Các bài viết trên trang web này có thể bao gồm nội dung được nhúng
                            (ví dụ: video, hình ảnh, bài viết, v.v.).
                            Nội dung được nhúng từ các trang web khác hoạt động theo cùng một cách chính xác
                            như khi khách truy cập đã truy cập trang web khác.
                        </p>
                        <p className={classNameTailwind?.paragraph}>
                            Những website này có thể thu thập dữ liệu về bạn, sử dụng cookie,
                            nhúng các trình theo dõi của bên thứ ba và giám sát tương tác của bạn
                            với nội dung được nhúng đó, bao gồm theo dõi tương tác của bạn với nội dung được nhúng
                            nếu bạn có tài khoản và đã đăng nhập vào trang web đó.
                        </p>
                    </div>
                    <div className={classNameTailwind?.div}>
                        <h2>
                            Dữ liệu của bạn tồn tại bao lâu
                        </h2>
                        <p className={classNameTailwind?.paragraph}>
                            Nếu bạn để lại bình luận, bình luận và siêu dữ liệu của nó sẽ được giữ lại vô thời hạn.
                            Điều này là để chúng tôi có thể tự động nhận ra và chấp nhận bất kỳ bình luận nào
                            thay vì giữ chúng trong khu vực đợi kiểm duyệt
                        </p>
                        <p className={classNameTailwind?.paragraph}>
                            Đối với người dùng đăng ký trên trang web của chúng tôi (nếu có),
                            chúng tôi cũng lưu trữ thông tin cá nhân mà họ cung cấp trong hồ sơ người dùng của họ.
                            Tất cả người dùng có thể xem, chỉnh sửa hoặc xóa thông tin cá nhân của họ bất kỳ lúc nào
                            (ngoại trừ họ không thể thay đổi tên người dùng của họ).
                            Quản trị viên trang web cũng có thể xem và chỉnh sửa thông tin đó.
                        </p>
                    </div>
                    <div className={classNameTailwind?.div}>
                        <h2>
                            Các quyền nào của bạn với dữ liệu của mình
                        </h2>
                        <p className={classNameTailwind?.paragraph}>
                            Nếu bạn có tài khoản trên trang web này hoặc đã để lại nhận xét,
                            bạn có thể yêu cầu nhận tệp xuất dữ liệu cá nhân mà chúng tôi lưu giữ về bạn,
                            bao gồm mọi dữ liệu bạn đã cung cấp cho chúng tôi.
                            Bạn cũng có thể yêu cầu chúng tôi xóa mọi dữ liệu cá nhân mà chúng tôi lưu giữ về bạn.
                            Điều này không bao gồm bất kỳ dữ liệu nào chúng tôi có nghĩa vụ giữ cho các mục đích hành
                            chính,
                            pháp lý hoặc bảo mật.
                        </p>
                    </div>
                    <div className={classNameTailwind?.div}>
                        <h2>
                            Các dữ liệu của bạn được gửi tới đâu
                        </h2>
                        <p className={classNameTailwind?.paragraph}>
                            Các bình luận của khách (không phải là thành viên) có thể được kiểm tra thông qua dịch vụ tự
                            động phát hiện spam.
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