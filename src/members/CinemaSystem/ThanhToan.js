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
  const [first, setFirst] = useState(true);
  const handleChange = (data) => {
    if (data == "first") {
      if (first == true) {
        console.log(data, "our value");
      }
      setFirst(!first);
    }
  };

  const [itemQuantities, setItemQuantities] = useState({});
  const renderMenu = () => {

    const menuData = JSON.parse(localStorage.getItem("shows"));
    const menuCost = JSON.parse(localStorage.getItem("menu"));
    const menuTotal = JSON.parse(localStorage.getItem("total"));
    const total = JSON.parse(localStorage.getItem("Total"));
    console.log(
      total
    );
    const seatIds = Object.keys(menuCost).map((key) => menuCost[key].seatId);


const seat = seatIds.filter((id) => id !== undefined);
console.log(seat);
    
const foodIds = Object.keys(menuCost).map((key) => menuCost[key].foodId);
const filteredFoodIds = foodIds.filter((id) => id !== undefined);
    

const food = filteredFoodIds.reduce((acc, id) => {
  const qty = menuCost[id].quantity || 0; // Lấy quantity từ menuCost hoặc gán mặc định là 0 nếu không có
  return {
    ...acc,
    [id]: qty
  };
}, {});

console.log(food);




    Object.keys(menuData).map((key) => {
      const showIds = Object.keys(menuData).map((key) => menuData[key].showId);

      console.log(showIds); // In ra mảng các seatId
    });
    // Object.keys(menuCost).map((key) => {
    //   console.log("key", key);
    //    let seatID= menuCost[key].seatId;
    //   console.log( "seatID",seatID);
    // });

    const handlepayment = () => {
      const token = Cookies.get("Token");
      if (!token) {
        console.log("Token not found. Please log in.");
        return;
      }
    
      const bookingData = {
        showId: menuData[0].showId, // Đảm bảo rằng menuData chứa dữ liệu hợp lệ
        seat: seat, // Kiểm tra xem biến seat có chứa dữ liệu hợp lệ không
        food: food, // Kiểm tra xem biến food có chứa dữ liệu hợp lệ không
        totalPrice: total, // Đảm bảo rằng total đã được tính toán đúng
      };
      localStorage.setItem("booking", JSON.stringify(bookingData));
      const vnpay = {
        amount: Number(total),
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
          <div className="c-box film-cart film-item" style={{}}>
            <h4 className="cinema-title">
              BHD Star Le Van Viet
            </h4>
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
                {Object.values(menuCost).some((item) => item.quantity !== 0) ? (
                  <table className="cart-items">
                    <tbody>
                      {Object.keys(menuCost).map(
                        (key) =>
                          menuCost[key].quantity !== 0 && (
                            <tr key={key}>
                              <td className="title">
                                <>
                                  <span className="quantity">
                                    {menuCost[key].quantity}
                                  </span>
                                  &nbsp;
                                  <span>x</span>&nbsp;
                                  <span className="name">
                                    {menuCost[key].numberSeat}
                                  </span>
                                  <span className="name">
                                    {menuCost[key].foodName}
                                  </span>
                                </>
                                <br />
                              </td>

                              <td
                                className="price"
                                style={{ fontWeight: "bold" }}>
                                {menuCost[key].price}
                               
                                 { menuCost[key].foodPrice}
                                VND
                              </td>
                            </tr>
                          )
                      )}
                    </tbody>
                  </table>
                ) : null}

                {Object.values(menuCost).some(
                  (item) => item.quantity !== 0
                ) ? null : (
                  <span style={{ color: "red" }}>Vui lòng chọn ghế</span>
                )}

                <hr />

                <table className="cart-total" style={{}}>
                  <tbody>
                    <tr>
                      <td className="title">
                        <span>Tổng tiền</span>
                        <span
                          className="is-xxsmall"
                          style={{ display: "none" }}>
                          (Đã bao gồm phụ thu)
                        </span>
                      </td>
                      <td className="price">{total} VND</td>
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

  return (
    <>
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
                            <div className="apply-coupon-form">
                              <input
                                type="text"
                                placeholder="Nhập mã giảm giá tại đây"
                              />
                              <a
                                className="apply-coupon-submit button"
                                href="#"
                              >
                                Áp dụng
                              </a>
                            </div>
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
    </>
  );
}
export default ThanhToan;
