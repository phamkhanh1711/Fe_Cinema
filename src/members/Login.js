import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import CheckError from "./CheckError";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
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

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    // Sau khi trang đã được tải lại, cuộn về đầu trang
    window.scrollTo(0, 0);
  }, []);
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  function handleInput(e) {
    const nameInput = e.target.name;
    const value = e.target.value;
    setInputs((state) => ({ ...state, [nameInput]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    let errorsSubmit = {};
    let flag = true;

    if (inputs.email === "") {
      errorsSubmit.email = "Vui long nhap lai Email";
      flag = false;
    } else if (!IsEmail(inputs.email)) {
      errorsSubmit.email = "Chua dung dinh dang Email";
      flag = false;
    }
    if (inputs.password === "") {
      errorsSubmit.password = "Vui long nhap password";
      flag = false;
    }

    if (!flag) {
      setErrors(errorsSubmit);
      Swal.fire({
        title: "Error!",
        text: "Login failed. Please check your credentials.",
        icon: "error",
      });
    } else {
      setErrors({});
      const data = {
        email: inputs.email,
        password: inputs.password,
         role: inputs.role,
      };
      axios
        .post("http://localhost:4000/auth/login", data)
        .then((res) => {
          console.log(res);

          const Token = res.data.data.accessToken;
          console.log(Token); 
          Cookies.set("Token", Token);
          const Auth = res.data.data.auth;
          console.log(Auth);
           Cookies.set("Auth", JSON.stringify(Auth));

      

          // Swal.fire({
          //   title: "Good job!",
          //   text: res.data.message,
          //   icon: "success",
          // });
          navigate("/");
          // Sau khi đăng nhập thành công, điều hướng đến trang tương ứng
        })
        .catch((response) => {
          console.log(response);
          Swal.fire({
            title: "Error!",
            text: response.response.data.message  ,
            icon: "error",
      })
        });
    }
  }

  function IsEmail(email) {
    let regex =
      /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zAZ0-9]{2,4})+$/;
    if (!regex.test(email)) {
      return false;
    } else {
      return true;
    }
  }
  return (
    <div className="sc-iFoMEM eEVWTU">
      <div className="container">
        <h3 className="sc-iqPaeV bRppPE">Đăng nhập</h3>
        <div className="sc-kSGOQU ighPre">
          <div className="sc-dvEHMn dKXwpB">
            <h3 className="sc-iqPaeV sc-eVspGN bRppPE bBgoTP">
              Thông tin đăng nhập
            </h3>
            <form
              action="#"
              className="sc-gzrROc kaVwkx mt-4"
              onSubmit={handleSubmit}
            >
              <div  className="col-12 col-md-12 col-lg-6">
                <label className="sc-fmPOXC eQGqHb">Email :</label>
                <div >
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                  
                    defaultValue=""
                    onChange={handleInput}
                  />
                  {errors.email && (
                    <span className="text-danger"> {errors.email}</span>
                  )}
                  <small className="sc-eYqcxL hmuDPY invalid-feedback" />
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-6">
                <label className="sc-fmPOXC eQGqHb">Mật khẩu :</label>
                <div >
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                   
                    defaultValue=""
                    onChange={handleInput}
                  />
                  {errors.password && (
                    <span className="text-danger"> {errors.password}</span>
                  )}

                  <small className="sc-eYqcxL hmuDPY invalid-feedback" />
                </div>
              </div>
              <button className="sc-eDWCr gyTwqg mt-2" type="submit">
                Đăng nhập
              </button>
              {/* Thêm nút đăng ký thành viên */}
              <Link
                to={"/register"}
                className="sc-eDWCr gyTwqg mt-2"
                type="button"
              >
                Đăng ký thành viên
              </Link>
            </form>
           
          </div>
          <section className="sc-ehvNnt kEeQkC">
            <div
              className="sc-laZRCg dMekse left show"
              onClick={goToPreviousImage}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className="sc-gGvHcT fbqXJq">
              <div
                className="sc-ckEbSK EhTEH slider"
                style={{ transitionDuration: `${transitionDuration}ms` }}
              >
                <img
                  src={images[currentImageIndex]}
                  alt="Not Banner"
                  className="sc-fbYMXx hguJuF"
                />
              </div>
            </div>
            <div
              className="sc-laZRCg dMekse right show"
              onClick={goToNextImage}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default Login;
