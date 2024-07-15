import MainLayout from "./layouts/MainLayout.tsx";
import "./index.css";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import TrangChu from "./pages/TrangChu.tsx";
import KhamPha from "./pages/KhamPha.tsx";
import GioiThieu from "./pages/GioiThieuPages/GioiThieu.tsx";
import SuKien from "./pages/SuKien.tsx";
import GioiThieuLichSuHinhThanh from "./pages/GioiThieuPages/GioiThieu-LichSuHinhThanh.tsx";
import GioiThieuChinhSachBaoMat from "./pages/GioiThieuPages/GioiThieu-ChinhSachBaoMat.tsx";
import GiaVeTapThe from "./pages/GiaVePages/GiaVe-VeTapThe.tsx";
import GioiThieuThanhVien from "./pages/GioiThieuPages/GioiThieu-ThanhVien.tsx";
import GiaVeTrongCongVien from "./pages/GiaVePages/GiaVe-TrongCongVien.tsx";
import GiaVeDichVu from "./pages/GiaVePages/GiaVe-VeDichVu.tsx";
import GiaVeTapTheDuc from "./pages/GiaVePages/GiaVe-VeTapTheDuc.tsx";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout/>}>
                <Route path='/trang-chu' element={<TrangChu/>}/>)
                <Route path='/kham-pha' element={<KhamPha/>}/>)
                <Route path='/gioi-thieu' element={<GioiThieu/>}/>)
                <Route path='/gioi-thieu-lich-su-hinh-thanh' element={<GioiThieuLichSuHinhThanh/>}/>)
                <Route path='/gioi-thieu-thanh-vien' element={<GioiThieuThanhVien/>}/>)
                <Route path='/gioi-thieu-chinh-sach-bao-mat' element={<GioiThieuChinhSachBaoMat/>}/>)
                <Route path='/gia-ve-trong-cong-vien' element={<GiaVeTrongCongVien/>}/>)
                <Route path='/gia-ve-dich-vu' element={<GiaVeDichVu/>}/>)
                <Route path='/gia-ve-tap-the' element={<GiaVeTapThe/>}/>)
                <Route path='/gia-ve-tap-the-duc' element={<GiaVeTapTheDuc/>}/>)
                <Route path='/su-kien' element={<SuKien/>}/>)
            </Route>
        )
    );
    return <RouterProvider router={router} />;
}

export default App;
