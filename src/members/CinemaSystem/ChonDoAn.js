import { Link, useLocation, useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../UserContext";

function ChonDoAn() {
  const user = useContext(UserContext);
  console.log(user);

  useEffect(() => {
    Aos.init();
  }, []);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const [itemQuantities, setItemQuantities] = useState({});
  console.log("itemQuantities", itemQuantities);

  const [foods, setFoods] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleIncrease = (foodId, foodName, foodPrice) => {
    let menuData = JSON.parse(localStorage.getItem("food")) || {};

    if (menuData[foodId] && menuData[foodId].foodName) {
      menuData[foodId].quantity += 1;
      menuData[foodId].subtotal = menuData[foodId].quantity * foodPrice;
    } else {
      menuData[foodId] = {
        foodId: foodId,
        foodName: foodName,
        foodPrice: foodPrice,
        quantity: 1,
      };
    }

    let totalQuantity = Object.values(menuData).reduce(
      (total, item) => total + (item.quantity || 0),
      0
    );

    user.loginContext(totalQuantity);
    localStorage.setItem("food", JSON.stringify(menuData));

    setItemQuantities(menuData);
  };

  const handleDecrease = (itemId, foodName, foodPrice) => {
    let menuData = JSON.parse(localStorage.getItem("food"));

    if (!menuData[itemId]) {
      return; // If the item doesn't exist, exit the function
    }

    if (menuData[itemId].quantity === 1) {
      delete menuData[itemId];
    } else {
      menuData[itemId].quantity -= 1;
      menuData[itemId].subtotal = menuData[itemId].quantity * foodPrice;
    }

    let totalQuantity = Object.values(menuData).reduce(
      (total, item) => total + (item.quantity || 0),
      0
    );

    user.loginContext(totalQuantity);
    localStorage.setItem("food", JSON.stringify(menuData));

    setItemQuantities(menuData);
  };

  const [selectedSeats, setSelectedSeats] = useState([]);
  useEffect(() => {
    const savedSelectedSeats = localStorage.getItem("selectedSeats");
    if (savedSelectedSeats) {
      setSelectedSeats(JSON.parse(savedSelectedSeats));
    }

    const savedMenu = localStorage.getItem("menu");
    if (savedMenu) {
      setItemQuantities(
        Object.keys(JSON.parse(savedMenu)).reduce((quantities, key) => {
          quantities[key] = JSON.parse(savedMenu)[key].quantity;
          return quantities;
        }, {})
      );
    }
  }, []);

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
          key={food.foodId}>
          <div className="icon-box-img" style={{ width: "80px" }}>
            <div className="icon">
              <div className="icon-inner">
                <img src={food.foodImage} alt="Product" />
              </div>
            </div>
          </div>
          <div className="icon-box-text last-reset">
            <h3 className="product-name">{food.foodName}</h3>
            <div className="stack stack-row justify-between items-center">
              <div className="quantity">
                <span
                  className="minus"
                  onClick={() =>
                    handleDecrease(food.foodId, food.foodName, food.foodPrice)
                  }>
                  -
                </span>
                <span className="number" size={2} autoComplete="off">
                  {/* Display the quantity from localStorage if it exists */}
                  {itemQuantities[food.foodId]?.quantity || 0}
                </span>
                <span
                  className="plus"
                  onClick={() =>
                    handleIncrease(food.foodId, food.foodName, food.foodPrice)
                  }>
                  +
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  const navigate = useNavigate();
  const menuData = JSON.parse(localStorage.getItem("shows"));
  const showID = menuData[0].showId;
  console.log("showID", showID);
  const handle = () => {
    navigate(`/chonghe/${showID}`);
  };
  const renderMenu = () => {
    const menuData = JSON.parse(localStorage.getItem("shows")) || [];
    let menuCost = JSON.parse(localStorage.getItem("menu")) || {};

    let food = JSON.parse(localStorage.getItem("food")) || {};
    console.log("food", food);

    let totalFoodPrice = Object.keys(food).reduce((total, key) => {
      const foodPrice = food[key].foodPrice || 0;
      const quantity = food[key].quantity || 0;
      console.log("quantity", quantity);

      return total + foodPrice * quantity;
    }, 0);

    console.log("Total food price:", totalFoodPrice);

    // Calculate total seat price
    let totalSeatPrice = Object.keys(menuCost).reduce((total, key) => {
      const seatPrice = menuCost[key].price || 0;
      return total + seatPrice;
    }, 0);

    console.log("Total seat price:", totalSeatPrice);

    const totalSum = totalFoodPrice + totalSeatPrice;
    console.log("Total sum of food and seat prices:", totalSum);

    localStorage.setItem("totalFoodPrice", JSON.stringify(totalFoodPrice));
    localStorage.setItem("totalSeatPrice", JSON.stringify(totalSeatPrice));
    localStorage.setItem("totalSum", JSON.stringify(totalSum));

    return (
      <div className="col-12 col-md-12 col-lg-4">
        <div className="col-inner">
          <div className="c-box film-cart film-item">
            <h4 className="cinema-title">BHD Star Le Van Viet</h4>
            {menuData.length > 0 && (
              <span className="session-info">
                <span className="screen">
                  Screen {menuData[0].cinemaHallId}
                </span>{" "}
                - {menuData[0].CreateOn} - Suất chiếu: {menuData[0].startTime}
              </span>
            )}
            <hr />
            {menuData.length > 0 && (
              <h3 className="film-title">{menuData[0].movieName}</h3>
            )}
            <div className="metaaa">
              <span className="age-limit T18">T18</span>
              <span className="type">Phụ đề</span>
              {menuData.length > 0 && (
                <span className="format">{menuData[0].typeName}</span>
              )}
            </div>

            {Object.keys(menuCost).length > 0 ? (
              <>
                {Object.values(menuCost).some((item) => item.quantity !== 0) ||
                Object.values(food).some((item) => item.quantity !== 0) ? (
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
                                    {menuCost[key].numberSeat ||
                                      menuCost[key].foodName}
                                  </span>
                                </>
                                <br />
                              </td>
                              <td
                                className="price"
                                style={{ fontWeight: "bold" }}>
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
                                  <span className="quantity">
                                    {food[key].quantity}
                                  </span>
                                  &nbsp;
                                  <span>x</span>&nbsp;
                                  <span className="name">
                                    {food[key].foodName}
                                  </span>
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
                        <span
                          className="is-xxsmall"
                          style={{ display: "none" }}>
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
                    to="/thanhtoan"
                    className="button primary expand"
                    style={{ marginBottom: "15px" }}>
                    Thanh Toán (3/4)
                  </Link>
                </div>
              </>
            ) : (
              <span style={{ color: "red" }}>Vui lòng chọn ghế</span>
            )}
          </div>
          <div style={{ marginBottom: "5px" }}>
            <a onClick={() => handle()}>← Trở lại</a>
          </div>
        </div>
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
                    Bước 3: Chọn đồ ăn
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
                                    </div>
                                    {/* Add other concession items here */}
                                  </div>
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
export default ChonDoAn;
