import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhotoVideo,
  faFilm,
  faCalendarDays,
  faAd,
} from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";

function Header() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const navigate = useNavigate();
  const toggleLoginForm = () => {
    navigate("/login"); // Thay đổi giá trị của showLoginForm khi nút "Đăng nhập" được nhấn
  };
  function handleTaiKhoan() {
    navigate("/taikhoan");
  }
  function renderLogin() {
    const Token = Cookies.get("Token");

    if (Token) {
      return (
        <>
          <li className="account-item has-icon">
            <a className="account-link account-login" title="Tài khoản">
              <i className="image-icon circle">
                <img
                  id="img1"
                  src="https://bhdstar.vn/wp-content/assets/loodo/no-user.jpg"
                />
              </i>
              <span className="header-account-title" onClick={handleTaiKhoan}>
                Phạm Khánh /
              </span>
            </a>

            <a className="lougout-link" onClick={logout}>
              Thoát
            </a>
          </li>
        </>
      );
    } else {
      return (
        <div className="position-relative">
          <Link to={"/login"} width={170} className="sc-eDWCr kzpCjd">
            Đăng Nhập
          </Link>
        </div>
      );
    }
  }

  function logout() {
    Cookies.remove("Token");
    Cookies.remove("Auth");

    navigate("/login");
  }

  return (
    <>
      <header className="sc-ftTHYK hbFaTg">
        <div className="sc-pyfCe gqNPmB">
          <Link to="/">
            <img
              src="https://www.tiendauroi.com/wp-content/uploads/2020/02/bhd-star-cinema.png"
              alt="Logo App"
              className="sc-jrcTuL iOAGuY"
            />
          </Link>
          <ul className="sc-kDvujY eVEMRo">
            <li className="sc-ipEyDJ gXsTKn">
              <Link to="/">
                <div
                  content="Trang chủ"
                  className="sc-csuSiG deyjus"
                  title="Trang chủ"
                >
                  <FontAwesomeIcon icon={faPhotoVideo} />
                </div>
              </Link>
            </li>
            <li className="sc-ipEyDJ gXsTKn">
              <Link to="/hethongrap">
                <div
                  content="Hệ thống rạp phim"
                  className="sc-csuSiG gtBTq"
                  title="Hệ thống rạp phim"
                >
                  <FontAwesomeIcon icon={faFilm} />
                </div>
              </Link>
            </li>
            <li className="sc-ipEyDJ gXsTKn">
              <Link to="/lichchieuphim">
                <div
                  content="Lịch chiếu"
                  className="sc-csuSiG eyfsYm"
                  title="Lịch chiếu"
                >
                  <FontAwesomeIcon icon={faCalendarDays} />
                </div>
              </Link>
            </li>
            <li className="sc-ipEyDJ gXsTKn">
              <Link to="/khuyenmai">
                <div
                  content="Khuyến mãi"
                  className="sc-csuSiG dfhXIX"
                  title="Khuyến mãi"
                >
                  <FontAwesomeIcon icon={faAd} />
                </div>
              </Link>
            </li>
          </ul>

          {renderLogin()}
        </div>
      </header>
    </>
  );
}

export default Header;
