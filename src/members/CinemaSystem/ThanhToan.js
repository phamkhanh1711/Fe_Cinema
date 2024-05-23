import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Cookies from "js-cookie";

function ThanhToan() {
  useEffect(() => {
    Aos.init();
  }, []);
  useEffect(() => {
    // Sau khi trang đã được tải lại, cuộn về đầu trang
    window.scrollTo(0, 0);
  }, []);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const [first, setFirst] = useState(true);
  const handleChange = (data) => {
    if (data == "first") {
      if (first == true) {
        console.log(data, "our value");
      }
      setFirst(!first);
    }
  };
  const [promotionCode, setPromotionCode] = useState("");
  const [VeKhuyenmai, setVeKhuyenmai] = useState([]);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:4000/promotion/allPromoUser')
      .then((response) => {
        console.log(response);
        setVeKhuyenmai(response.data.data.allPromoUser);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);
    
const Token = Cookies.get("Token");
const [currCode , setCurrCode] = useState("");
const handleDiscount = () => {

  const appliedCode = JSON.parse(localStorage.getItem("code"));
  
  if (appliedCode === promotionCode) {
    alert("Mã giảm giá đã được sử dụng");
    return;
  }

  // Kiểm tra xem người dùng đã nhập mã giảm giá chưa
  axios.get(`http://localhost:4000/promotion/checkPromo`, {
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    params: {
      code: promotionCode,
    },
  })
    .then((response) => {
      console.log(response);
      if (response.data.message) {
        alert(response.data.message);
        return;
      }

      const code = response.data.currPromo.code;
      console.log("code:", code);
     

      if (currCode !== code) {
        const discount = response.data.currPromo.discount;
        console.log("discount:", discount);
        const totalSum = JSON.parse(localStorage.getItem("totalSum"));
        // discount only one 
        const discountAmount = totalSum - discount;

        localStorage.setItem("totalSum", JSON.stringify(discountAmount));
        localStorage.setItem("code", JSON.stringify(code));
        setCurrCode(code);
        alert("Áp dụng mã giảm giá thành công!");
      } else {
        alert("Mã giảm giá đã được sử dụng");
      }
    })
    .catch((error) => {
      console.error("Error applying discount:", error);
      alert(error.response.data.message || "Đã xảy ra lỗi khi áp dụng mã giảm giá. Vui lòng thử lại sau.");
   
    });
};

  const [itemQuantities, setItemQuantities] = useState({});
  const renderMenu = () => {

    const menuData = JSON.parse(localStorage.getItem("shows")); // dữ liệu về phim



    const menuCost = JSON.parse(localStorage.getItem("menu")); // dữ liệu về ghế 
    let food = JSON.parse(localStorage.getItem("food")) || {}; // dữ liệu về thức ăn


   const totalSeatPrice = JSON.parse(localStorage.getItem("totalSeatPrice")); // tổng giá ghế

   console.log("totalSeatPrice:", totalSeatPrice);

   const totalFoodPrice = JSON.parse(localStorage.getItem("totalFoodPrice")); // tổng giá thức ăn
   console.log("totalFoodPrice:", totalFoodPrice);

   const totalSum = JSON.parse(localStorage.getItem("totalSum")); // tổng giá
   console.log("totalSum:", totalSum);

    

    const seatIds = Object.keys(menuCost).map((key) => menuCost[key].seatId);


const seat = seatIds.filter((id) => id !== undefined);

    
const foodIds = Object.keys(food).map((key) => food[key].foodId);
const filteredFoodIds = foodIds.filter((id) => id !== undefined);
    

const foods = filteredFoodIds.reduce((acc, id) => {
  const qty = food[id].quantity || 0; // Lấy quantity từ menuCost hoặc gán mặc định là 0 nếu không có
  return {
    ...acc,
    [id]: qty
  };
}, {});






    Object.keys(menuData).map((key) => {
      const showIds = Object.keys(menuData).map((key) => menuData[key].showId);

      
    });
   

    const handlepayment = () => {
      const token = Cookies.get("Token");
      if (!token) {
        console.log("Token not found. Please log in.");
        return;
      }
    
      const bookingData = {
        showId: menuData[0].showId, // Đảm bảo rằng menuData chứa dữ liệu hợp lệ
        seat: seat, // Kiểm tra xem biến seat có chứa dữ liệu hợp lệ không
        food: foods, // Kiểm tra xem biến food có chứa dữ liệu hợp lệ không
        totalPrice: totalSum, // Đảm bảo rằng total đã được tính toán đúng
      };
      localStorage.setItem("booking", JSON.stringify(bookingData));
      const vnpay = {
        amount: Number(totalSum),
        bankCode: "VNBANK",
        language: "vn",
      }
      console.log(vnpay);
      // Kiểm tra xem các trường dữ liệu cần thiết đã được điền đầy đủ hay chưa
      if (!bookingData.showId || !bookingData.seat || !bookingData.food || !bookingData.totalPrice) {
        console.error("Missing required data for booking.");
        return;
      }
    let url = "http://localhost:4000/payment/create-payment-url";
      
    
      axios.post(url, vnpay)
        .then((response) => {
          console.log(response);
          if (response.data.data.vnpUrl) {
            window.location.href = response.data.data.vnpUrl;
          }
          
        })
        .catch((error) => {
          console.error("Error creating booking:", error);
          alert("Đã xảy ra lỗi khi đặt vé. Vui lòng thử lại sau.");
        });
    };
    
    return (
      <div className="col-12 col-md-12 col-lg-4">
          <div className="col-inner">
              <div className="c-box film-cart film-item">
                  <h4 className="cinema-title">BHD Star Le Van Viet</h4>
                  <span className="session-info">
                      <span className="screen">Screen {menuData[0].cinemaHallId}</span> -
                      {menuData[0].CreateOn} - Suất chiếu: {menuData[0].startTime}
                  </span>
                  <hr />
                  <h3 className="film-title">{menuData[0].movieName}</h3>
                  <div className="metaaa">
                      <span className="age-limit T18">T18</span>
                      <span className="type">Phụ đề</span>
                      <span className="format">{menuData[0].typeName}</span>
                  </div>
                  {menuCost ? (
                      <>
                          {Object.values(menuCost).some((item) => item.quantity !== 0) || Object.values(food).some((item) => item.quantity !== 0) ? (
                              <table className="cart-items">
                                  <tbody>
                                      {Object.keys(menuCost).map(
                                          (key) =>
                                              menuCost[key].quantity !== 0 && (
                                                  <tr key={key}>
                                                      <td className="title">
                                                          <>
                                                              <span className="quantity">{menuCost[key].quantity}</span>&nbsp;
                                                              <span>x</span>&nbsp;
                                                              <span className="name">{menuCost[key].numberSeat || menuCost[key].foodName}</span>
                                                          </>
                                                          <br />
                                                      </td>
                                                      <td className="price" style={{ fontWeight: "bold" }}>
                                                          {menuCost[key].price}
                                                      </td>
                                                  </tr>
                                              )
                                      )}
                                      {Object.keys(food).map(
                                          (key) =>
                                              food[key].quantity !== 0 && (
                                                  <tr key={key}>
                                                      <td className="title">
                                                          <>
                                                              <span className="quantity">{food[key].quantity}</span>&nbsp;
                                                              <span>x</span>&nbsp;
                                                              <span className="name">{food[key].foodName}</span>
                                                          </>
                                                          <br />
                                                      </td>
                                                      <td style={{ fontWeight: "bold" }}>
                                                          {food[key].foodPrice * food[key].quantity}
                                                      </td>
                                                  </tr>
                                              )
                                      )}
                                  </tbody>
                              </table>
                          ) : (
                              <span style={{ color: "red" }}>Vui lòng chọn ghế</span>
                          )}
                          <hr />
                          <table className="cart-total">
                              <tbody>
                                  <tr>
                                      <td className="title">
                                          <span>Tổng tiền</span>
                                          <span className="is-xxsmall" style={{ display: "none" }}>
                                              (Đã bao gồm phụ thu)
                                          </span>
                                      </td>
                                      <td className="price">{totalSum} VND</td>
                                  </tr>
                              </tbody>
                          </table>
                          <div className="text-center" style={{ marginTop: "20px" }}>
                              <div className="error-message" style={{ display: "none" }} />
                              <Link
                                  onClick={handlepayment}
                                  to={{
                                      pathname: "/thanhtoan",
                                  }}
                                  className="button primary expand"
                                  style={{ marginBottom: "15px" }}>
                                  Thanh Toán (4/4)
                              </Link>
                          </div>
                      </>
                  ) : (
                      <span style={{ color: "red" }}>Vui lòng chọn ghế</span>
                    )}
                    <div style={{ marginBottom: "5px" }}>
                        <Link to="/chondoan">← Trở lại</Link>
                    </div>
                </div>
            </div>
        </div>
    )
  
  }

  const renderPromotion = () => {
    return (
      <div className="apply-coupon-form">
      <input
        onChange={(e) => setPromotionCode(e.target.value)}
        type="text"
        placeholder="Nhập mã giảm giá tại đây"
      />
      <button
        onClick={handleDiscount}
        className="apply-coupon-submit button"
      >
        Áp dụng
      </button>
    </div>
    );
};


  return (
    <>
     {loading ? (
        <CircularProgress className="loading" />
      ) : (
      <div id="col-1063932164" className="col small-12 large-12">
        <div className="page-title-inner dark">
          <div className="row align-middle">
            <div className="col-12 col-md-12 col-lg-12">
              <div className="col-inner">
                <h2 className="entry-title text-center">
                  Bước 4: Nhập thông tin/Thanh Toán
                </h2>
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
                    <div className="row">
                      <div className="col-12 col-md-12 col-lg-8">
                        <div className="col-inner">
                          <div className="c-box mb">
                            <h4>Mã giảm giá</h4>
                            <hr className="dashed" />
                            {renderPromotion()}
                          </div>
                          <div className="c-box">
                            <h4>Hình thức thanh toán</h4>
                            <hr className="dashed" />

                            <div className="payment-gateways">
                              <div className="payment-gateway">
                                <div className="stack1 stack-row items-center">
                                  <span className="checkbox" />
                                  <img
                                    className="icon"
                                    src="https://bhdstar.vn/wp-content/assets/loodo/shopeepay.png"
                                  />
                                  <span className="title">
                                    Thanh toán qua SHOPEEPAY
                                  </span>
                                </div>
                                <hr className="dashed" />
                              </div>
                              <div className="payment-gateway">
                                <div className="stack1 stack-row items-center">
                                  <input
                                    value={first}
                                    onChange={() => handleChange("vnpay")}
                                    className="checkbox"
                                  />

                                  <img
                                    className="icon"
                                    src="https://bhdstar.vn/wp-content/assets/loodo/vnpay.png"
                                  />
                                  <span className="title">
                                    Thanh toán qua VNPAY (Visa, Master, Amex,
                                    JCB,...)
                                  </span>
                                </div>
                                <hr className="dashed" />
                              </div>
                              <div className="payment-gateway">
                                <div className="stack1 stack-row items-center">
                                  <span className="checkbox" />
                                  <img
                                    className="icon"
                                    src="https://bhdstar.vn/wp-content/assets/loodo/momo.png"
                                  />
                                  <span className="title">
                                    Thanh toán bằng Ví điện tử MoMo
                                  </span>
                                </div>
                                <hr className="dashed" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                        {renderMenu()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      )}
    </>
  );
}
export default ThanhToan;
