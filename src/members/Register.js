import React, { useEffect, useState } from "react";
import CheckError from "./CheckError";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Register() {
  const [startDate, setStartDate] = useState(new Date());
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Chỉ số của hình ảnh hiện tại
  const [transitionDuration, setTransitionDuration] = useState(500); // Thời gian chuyển đổi mặc định là 500ms
  const images = [
    "https://bhd-star.vercel.app/static/media/Banner1.d0c3b50b.jpg",
    "https://bhd-star.vercel.app/static/media/Banner2.c43f7b14.jpg",
    "https://bhd-star.vercel.app/static/media/Banner3.e833b03e.jpg",
    "https://bhd-star.vercel.app/static/media/Banner4.ea4ab10d.jpg",
    "https://bhd-star.vercel.app/static/media/Banner5.244b4ddc.jpg",
    // Thêm các URL hình ảnh khác nếu cần
  ];
  const MyContainer = ({ className, children }) => {
    return (
      <div>
        <div style={{ position: "relative" }}>{children}</div>
      </div>
    );
  };
  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "",
  });

  function handleInput(e) {
    const nameInput = e.target.name;
    const value = e.target.value;
    setInputs((state) => ({ ...state, [nameInput]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    let errorsSubmit = {};
    let flag = true;
    if (inputs.fullName === "") {
      errorsSubmit.fullName = "Vui lòng Nhập fullName";
      flag = false;
    }
    //   else if (!/^[a-zA-ZÀ-ÖØ-öø-ÿ ]+$/.test(inputs.fullName)) {
    //    errorsSubmit.fullName = "Vui lòng chỉ nhập chữ và khoảng trắng";
    //    flag = false;
    //  } else if (!/[a-zA-ZÀ-ÖØ-öø-ÿ]/.test(inputs.fullName)) {
    //    errorsSubmit.fullName = "Vui lòng nhập ít nhất một ký tự chữ";
    //    flag = false;
    //  } else if (!/^\S+(?: \S+)*$/.test(inputs.fullName)) {
    //    errorsSubmit.fullName = "Vui lòng chỉ nhập một khoảng trắng giữa các ký tự";
    //    flag = false;
    //  }

    if (inputs.email === "") {
      errorsSubmit.email = "Vui Lòng Nhập Email";
      flag = false;
    } else if (!IsEmail(inputs.email)) {
      errorsSubmit.email = "Chưa đúng định dạng Email";
      flag = false;
    }

    if (inputs.password === "") {
      errorsSubmit.password = "Vui lòng Nhập mật khẩu";
      flag = false;
    }
    if (inputs.phoneNumber === "") {
      errorsSubmit.phoneNumber = "Vui lòng Nhập số điện thoại";
      flag = false;
    }

    if (inputs.role === "") {
      errorsSubmit.role = "Vui lòng chọn role";
      flag = false;
    }
    // else if (
    //   !/^[A-Z]/.test(inputs.password) || // Kiểm tra chữ cái đầu tiên là in hoa
    //   !/\d/.test(inputs.password) ||     // Kiểm tra có ít nhất một chữ số
    //   !/[!@#$%^&*(),.?":{}|<>]/.test(inputs.password) || // Kiểm tra có ít nhất một ký tự đặc biệt
    //   inputs.password.length < 6            // Kiểm tra có ít nhất 6 ký tự
    // ) {
    //   errorsSubmit.password = "Mật khẩu phải đáp ứng các yêu cầu sau:\n" +
    //                            "- Bắt đầu bằng chữ cái in hoa\n" +
    //                            "- Chứa ít nhất một chữ số\n" +
    //                            "- Chứa ít nhất một ký tự đặc biệt\n" +
    //                            "- Có ít nhất 6 ký tự";
    //   flag = false;
    // }

    if (!flag) {
      setErrors(errorsSubmit);
    } else {
      setErrors({});
      
      const data = {
        
        fullName: inputs.fullName,
        email: inputs.email,
        password: inputs.password,
        phoneNumber: inputs.phoneNumber,
        role: inputs.role,
      };
      console.log(data);
      // Send a POST request to your API's registration endpoint
      axios
        .post("http://localhost:4000/auth/signup", data)

        .then((res) => {
          console.log(res);

            
          // localStorage.setItem('Token', JSON.stringify(Token));

          Swal.fire({
            title: "Success!",
            text: res.data.message,
            icon: "success",
          });
          navigate("/login");
        })
        .catch((response) => {
          console.log(response);
          Swal.fire({
            title: "Error!",  
            text: response.response.data.message,
            icon: "error",

          });

        });
    }
  }

  const arr = [
    { id: 2, name: "user" },
    { id: 1, name: "admin" }
  ];
  function IsEmail(email) {
    let regex =
      /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zAZ0-9]{2,4})+$/;
    if (!regex.test(email)) {
      return false;
    } else {
      return true;
    }
  }
  function renderSelect() {
    return arr.map((item) => (
      <option key={item.id} value={item.name}>
        {item.name}
      </option>
    ));
  }
  
  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : (
        <div id="col-1063932164" className="col small-12 large-12">
          <div className="page-title-inner dark">
            <div className="row align-middle">
              <div className="col medium-12 small-12 large-12">
                <div className="col-inner">
                  <h2 className="entry-title text-center">Đăng Kí Tài khoản</h2>
                </div>
              </div>
            </div>
          </div>

          <main id="main" className="dark dark-page-wrapper">
            <div id="content" className="content-area page-wrapper" role="main">
              <div className="row row-main">
                <div className="col-lg-12" style={{ paddingBottom: "0px" }}>
                  <div className="col-inner">
                    <div className="site-loader">
                      <div className="site-loader-container">
                        <div className="custom-loader"></div>
                      </div>
                    </div>

                    <div id="app" data-v-app>
                      <div>
                        <div className="row single-film-row single-mt-row myaccount-row">
                          <div className="col-12 col-md-12 col-lg-6">
                            <div id="col-inner1" className="col-inner">
                              <form className="row" onSubmit={handleSubmit}>
                                <div className="col-md-12 col-sm-12 col-lg-5">
                                  <div className="col-inner">
                                    <p>
                                      <label htmlFor="reg_last_name">
                                        Full Name{" "}
                                        <span className="required">*</span>
                                      </label>
                                      <input
                                        type="text"
                                        placeholder="fullname......."
                                        name="fullName"
                                        onChange={handleInput}
                                      />
                                      {errors.fullName && (
                                        <span className="text-danger">
                                          {" "}
                                          {errors.fullName}
                                        </span>
                                      )}
                                    </p>
                                  </div>
                                </div>

                                <div className="col-md-12 col-sm-12 col-lg-8">
                                  <div className="col-inner">
                                    <p>
                                      <label htmlFor="reg_last_name">
                                        Email Address{" "}
                                        <span className="required">*</span>
                                      </label>
                                      <input
                                        type="email"
                                        placeholder="Email Address"
                                        name="email"
                                        onChange={handleInput}
                                      />
                                      
                                    </p>
                                    {errors.email && (
                                        <span className="text-danger">
                                          {" "}
                                          {errors.email}
                                        </span>
                                      )}
                                  </div>
                                </div>

                                <div className="col-md-12 col-sm-12 col-lg-8">
                                  <div className="col-inner">
                                    <p>
                                      <label htmlFor="reg_last_name">
                                        Mật khẩu{" "}
                                        <span className="required">*</span>
                                      </label>
                                      <input
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        onChange={handleInput}
                                      />
                                     
                                    </p>
                                    {errors.password && (
                                        <span className="text-danger">
                                          {" "}
                                          {errors.password}
                                        </span>
                                      )}
                                  </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-lg-5">
                                  <div className="col-inner">
                                    <p>
                                      <label htmlFor="reg_last_name">
                                        Số điện thoại{" "}
                                        <span className="required">*</span>
                                      </label>
                                      <input
                                        type="number"
                                        placeholder="number"
                                        name="phoneNumber"
                                        onChange={handleInput}
                                      />
                                      {errors.phoneNumber && (
                                        <span className="text-danger">
                                          {" "}
                                          {errors.phoneNumber}
                                        </span>
                                      )}
                                      
                                    </p>
                                  </div>
                                </div>
<div className="col-inner">
  <p>
    <label htmlFor="reg_last_name">
      Role <span className="required">*</span>
    </label>
    <select name="role" onChange={handleInput}>
      {renderSelect()}
    </select>
    {errors.role && <span className="text-danger">{errors.role}</span>}
  </p>
</div>
                                <button
                                  className="sc-eDWCr gyTwqg mt-2"
                                  type="submit">
                                  Đăng ký thành viên
                                </button>
                              </form>
                              {/* <CheckError errors={errors} /> */}
                            </div>
                          </div>

                          <div className="col-12 col-md-12 col-lg-6">
                            <section className="sc-ehvNnt kEeQkC">
                              <div
                                className="sc-laZRCg dMekse left show"
                                onClick={goToPreviousImage}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                              </div>
                              <div className="sc-gGvHcT fbqXJq">
                                <div
                                  className="sc-ckEbSK EhTEH slider"
                                  style={{
                                    transitionDuration: `${transitionDuration}ms`,
                                  }}>
                                  <img
                                    src={images[currentImageIndex]}
                                    alt="Not Banner"
                                    className="sc-fbYMXx hguJuF"
                                  />
                                </div>
                              </div>
                              <div
                                className="sc-laZRCg dMekse right show"
                                onClick={goToNextImage}>
                                <FontAwesomeIcon icon={faChevronRight} />
                              </div>
                            </section>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  );
}
export default Register;
