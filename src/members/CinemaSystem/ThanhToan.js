import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
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

                      <div className="col-12 col-md-12 col-lg-4">
                        <div className="col-inner">
                          <div className="c-box film-cart film-item" style={{}}>
                            <h4 className="cinema-title">
                              BHD Star Le Van Viet
                            </h4>
                            <span className="session-info">
                              <span className="screen">Screen 6</span> -
                              4/3/2024 - Suất chiếu: 23h30
                            </span>
                            <hr />
                            <h3 className="film-title">MAI</h3>
                            <div className="metaaa">
                              <span className="age-limit T18">T18</span>
                              <span className="type">Phụ đề</span>
                              <span className="format">2D</span>
                            </div>

                            <table className="cart-items">
                              <tbody>
                                <tr>
                                  <td className="title">
                                    <span className="quantity">1</span>&nbsp;
                                    <span>x</span>&nbsp;
                                    <span className="name">
                                      Adult-VIP-2D-ES
                                    </span>
                                    <br />
                                    <span className="description">J16</span>
                                  </td>
                                  <td className="price">75.000 VND</td>
                                </tr>
                                <td class="title">
                                  <span class="quantity">1</span>&nbsp;
                                  <span>x</span>&nbsp;
                                  <span class="name">
                                    OL Special Combo1 Bap nam Ga Lac (Sweet)
                                  </span>
                                  <span class="description"></span>
                                </td>
                                <td class="price">135.000&nbsp;VND</td>
                              </tbody>
                            </table>

                            <hr />

                            <table className="cart-total" style={{}}>
                              <tbody>
                                <tr>
                                  <td className="title">
                                    <span>Tổng tiền</span>
                                    <span
                                      className="is-xxsmall"
                                      style={{ display: "none" }}
                                    >
                                      (Đã bao gồm phụ thu)
                                    </span>
                                  </td>
                                  <td className="price">70.000 VND</td>
                                </tr>
                              </tbody>
                            </table>

                            <div
                              className="text-center"
                              style={{ marginTop: "20px" }}
                            >
                              <div
                                className="error-message"
                                style={{ display: "none" }}
                              />
                              <Link
                                to="/thanhtoan"
                                className="button primary expand"
                                style={{ marginBottom: "15px" }}
                              >
                                Thanh Toán (4/4)
                              </Link>
                              <div style={{ marginBottom: "5px" }}>
                                <Link to="/chondoan">← Trở lại</Link>
                              </div>
                            </div>
                          </div>
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
    </>
  );
}
export default ThanhToan;
