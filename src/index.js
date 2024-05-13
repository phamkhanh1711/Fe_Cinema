import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import "font-awesome/css/font-awesome.min.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import Login from "./members/Login";
import Register from "./members/Register";
import LichChieuPhim from "./members/CinemaSystem/LichChieuPhim";
import Chontime from "./members/CinemaSystem/Chontime";
import ChonGhe from "./members/CinemaSystem/ChonGhe";
import ChonDoAn from "./members/CinemaSystem/ChonDoAn";
import ThanhToan from "./members/CinemaSystem/ThanhToan";
import TaiKhoan from "./members/TaiKhoan";
import Khuyenmai from "./pages/Khuyenmai";
import Hethongrap from "./pages/Hethongrap";
import Detail from "./members/CinemaSystem/Detail";
import Comment from "./members/CinemaSystem/Comment";
import ListComment from "./members/CinemaSystem/ListComment";
import Bill from "./members/CinemaSystem/Bill";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/login" element={<Login />} />
        <Route index path="/register" element={<Register />} />
        <Route index path="/lichchieuphim" element={<LichChieuPhim />} />
        <Route index path="/chontime/:movieId" element={<Chontime />} />
        <Route index path="/chonghe/:showId" element={<ChonGhe />} />
        <Route index path="/chondoan" element={<ChonDoAn />} />
        <Route index path="/thanhtoan" element={<ThanhToan />} />
        <Route index path="/taikhoan" element={<TaiKhoan />} />
        <Route index path="/detail/:movieId" element={<Detail />} />
        <Route index path="/comment/:movieId" element={<Comment/>} />
        <Route index path="/listcomment" element={<ListComment/>} />
        <Route index path="/khuyenmai" element={<Khuyenmai />} />
        <Route index path="/hethongrap" element={<Hethongrap />} />
        <Route index path="/bill" element={<Bill />} />

      </Routes>
    </App>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
