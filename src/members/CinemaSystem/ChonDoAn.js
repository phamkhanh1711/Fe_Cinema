import { Link, useLocation, useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { memo, useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import CountDownTimer from "./CountDownTimer";
import Swal from "sweetalert2";
import { useCountdownContext } from "../../CountdownContext";
function ChonDoAn() {
  useEffect(() => {
    Aos.init();
  }, []);

  const [quantity, setQuantity] = useState(0);

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleOnComplete = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Hết Thời Gian Mua Vé",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <>
      <div id="col-1063932164" className="col small-12 large-12">
        <div className="page-title-inner dark">
          <div className="row align-middle">
            <div className="col-12 col-md-12 col-lg-12">
              <div className="col-inner">
                <h2 className="entry-title text-center">Bước 3: Chọn đồ ăn</h2>
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
                      <div className="col-12 col-md-12 col-lg-7">
                        <div className="col-inner">
                          <div className="cinema-concession-container1">
                            <div className="cinema-concession-container">
                              <div className="c-box">
                                <div className="text-center">
                                  <div className="tab-buttons">
                                    <a className="selected" href="#">
                                      Concession
                                    </a>
                                  </div>
                                </div>
                                <hr className="dashed" />
                                <div className="tab-content concession-items">
                                  <div className="concession-item">
                                    <div class="icon-box featured-box align-middle text-left">
                                      <div
                                        className="icon-box-img"
                                        style={{ width: "80px" }}
                                      >
                                        <div className="icon">
                                          <div className="icon-inner">
                                            <img src="https://booking.bhdstar.vn/CDN/media/entity/get/ItemGraphic/662279?width=160&height=160&referenceScheme=HeadOffice&allowPlaceHolder=true" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="icon-box-text last-reset">
                                        <h3 className>
                                          OL Special Combo1 Bap nam Ga Lac
                                          (Sweet)
                                        </h3>
                                        <div className="stack stack-row justify-between items-center">
                                          <div className="quantity">
                                            <span
                                              className="minus"
                                              onClick={handleDecrease}
                                            >
                                              -
                                            </span>
                                            <span className="number">
                                              {quantity}
                                            </span>
                                            <span
                                              className="plus"
                                              onClick={handleIncrease}
                                            >
                                              +
                                            </span>
                                          </div>
                                          <span className="price">
                                            <del>150.000 VND</del>
                                            <br />
                                            135.000 VND
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Add other concession items here */}
                                </div>

                                <div className="tab-content concession-items">
                                  <div className="concession-item">
                                    <div class="icon-box featured-box align-middle text-left">
                                      <div
                                        className="icon-box-img"
                                        style={{ width: "80px" }}
                                      >
                                        <div className="icon">
                                          <div className="icon-inner">
                                            <img src="https://booking.bhdstar.vn/CDN/media/entity/get/ItemGraphic/662279?width=160&height=160&referenceScheme=HeadOffice&allowPlaceHolder=true" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="icon-box-text last-reset">
                                        <h3 className>
                                          OL Special Combo1 Bap nam Ga Lac
                                          (Sweet)
                                        </h3>
                                        <div className="stack stack-row justify-between items-center">
                                          <div className="quantity">
                                            <span className="minus">-</span>
                                            <span className="number">0</span>
                                            <span className="plus">+</span>
                                          </div>
                                          <span className="price">
                                            <del>150.000 VND</del>
                                            <br />
                                            135.000 VND
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Add other concession items here */}
                                </div>

                                <div className="tab-content concession-items">
                                  <div className="concession-item">
                                    <div class="icon-box featured-box align-middle text-left">
                                      <div
                                        className="icon-box-img"
                                        style={{ width: "80px" }}
                                      >
                                        <div className="icon">
                                          <div className="icon-inner">
                                            <img src="https://booking.bhdstar.vn/CDN/media/entity/get/ItemGraphic/662279?width=160&height=160&referenceScheme=HeadOffice&allowPlaceHolder=true" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="icon-box-text last-reset">
                                        <h3 className>
                                          OL Special Combo1 Bap nam Ga Lac
                                          (Sweet)
                                        </h3>
                                        <div className="stack stack-row justify-between items-center">
                                          <div className="quantity">
                                            <span className="minus">-</span>
                                            <span className="number">0</span>
                                            <span className="plus">+</span>
                                          </div>
                                          <span className="price">
                                            <del>150.000 VND</del>
                                            <br />
                                            135.000 VND
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tab-content concession-items">
                                    <div className="concession-item">
                                      <div class="icon-box featured-box align-middle text-left">
                                        <div
                                          className="icon-box-img"
                                          style={{ width: "80px" }}
                                        >
                                          <div className="icon">
                                            <div className="icon-inner">
                                              <img src="https://booking.bhdstar.vn/CDN/media/entity/get/ItemGraphic/662279?width=160&height=160&referenceScheme=HeadOffice&allowPlaceHolder=true" />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="icon-box-text last-reset">
                                          <h3 className>
                                            OL Special Combo1 Bap nam Ga Lac
                                            (Sweet)
                                          </h3>
                                          <div className="stack stack-row justify-between items-center">
                                            <div className="quantity">
                                              <span className="minus">-</span>
                                              <span className="number">0</span>
                                              <span className="plus">+</span>
                                            </div>
                                            <span className="price">
                                              <del>150.000 VND</del>
                                              <br />
                                              135.000 VND
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* Add other concession items here */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-md-12 col-lg-5">
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
                                Chọn đồ ăn (3/4)
                              </Link>
                              <div style={{ marginBottom: "5px" }}>
                                <Link to="/chonghe">← Trở lại</Link>
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
export default ChonDoAn;
