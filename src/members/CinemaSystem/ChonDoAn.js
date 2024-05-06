import { Link, useLocation, useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { memo, useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import CountDownTimer from "./CountDownTimer";
import Swal from "sweetalert2";
import { useCountdownContext } from "../../CountdownContext";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
function ChonDoAn() {
  const user = useContext(UserContext);
  console.log(user);

  useEffect(() => {
    Aos.init();
  }, []);

  const [itemQuantities, setItemQuantities] = useState({});
  const [foods, setFoods] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleIncrease = (itemId) => {
    setItemQuantities((prevQuantities) => {
      const newQuantity = (prevQuantities[itemId] || 0) + 1;
      console.log("Số lượng hiện tại của", itemId, ":", newQuantity);
      return {
        ...prevQuantities,
        [itemId]: newQuantity,
      };
    });
  };

  const handleDecrease = (itemId) => {
    console.log("Decrease item", itemId);
    if (itemQuantities[itemId] > 0) {
      setItemQuantities((prevQuantities) => {
        const newQuantity = prevQuantities[itemId] - 1;
        console.log("Số lượng hiện tại của", itemId, ":", newQuantity);
        return {
          ...prevQuantities,
          [itemId]: newQuantity,
        };
      });
    }
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

  useEffect(() => {
    axios
      .get("http://localhost:4000/food/all-Food")
      .then((response) => {
        console.log(response);
        setFoods(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);
  const renderFoods = () => {
    return foods.map((food) => {
      return (
        <div
          className="icon-box featured-box align-middle text-left"
          key={food.id}>
          <div className="icon-box-img" style={{ width: "80px" }}>
            <div className="icon">
              <div className="icon-inner">
                <img
                  src="https://booking.bhdstar.vn/CDN/media/entity/get/ItemGraphic/662279?width=160&height=160&referenceScheme=HeadOffice&allowPlaceHolder=true"
                  alt="Product"
                />
              </div>
            </div>
          </div>
          <div className="icon-box-text last-reset">
            <h3 className="product-name">{food.foodName}</h3>
            <div className="stack stack-row justify-between items-center">
              <div className="quantity">
                <span
               
                  className="minus"
                  onClick={() => handleDecrease(food.foodId)}>
                  -
                </span>
                <span className="number">
                  {itemQuantities[food.foodId] || 0}
                </span>
                <span
                  className="plus"
                  onClick={() => handleIncrease(food.foodId)}>
                  +
                </span>
              </div>
              <span className="price">
    {(itemQuantities[food.foodId] || 0) * food.foodPrice} VND
  </span>            
            </div>
          </div>
        </div>
      );
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
                                    {renderFoods()}
                                    <div className="total-price">Tổng giá: {totalPrice} VND</div>
                                  </div>
                                  {/* Add other concession items here */}
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
                                      style={{ display: "none" }}>
                                      (Đã bao gồm phụ thu)
                                    </span>
                                  </td>
                                  <td className="price">70.000 VND</td>
                                </tr>
                              </tbody>
                            </table>

                            <div
                              className="text-center"
                              style={{ marginTop: "20px" }}>
                              <div
                                className="error-message"
                                style={{ display: "none" }}
                              />
                              <Link
                                to="/thanhtoan"
                                className="button primary expand"
                                style={{ marginBottom: "15px" }}>
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
