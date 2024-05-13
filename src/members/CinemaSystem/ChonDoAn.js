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
  console.log("itemQuantities", itemQuantities);
  
  const [foods, setFoods] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleIncrease = (itemId, foodName, foodPrice) => {
  setItemQuantities((prevQuantities) => {
    const newQuantity = (prevQuantities[itemId] || 0) + 1;
    const newFoodPrice = foodPrice * newQuantity; // Tính giá mới

    // Lấy thông tin từ localStorage
    const menuData = JSON.parse(localStorage.getItem("menu")) || {};

    // Tạo một đối tượng mới chứa thông tin từ cả seat và food
    const newData = {
      ...menuData,
      [itemId]: {
        ...menuData[itemId],
        foodId: itemId,
        foodName: foodName,
        foodPrice: foodPrice,
        quantity: newQuantity,
      },
      
    };

    // Lưu lại đối tượng mới vào localStorage
    localStorage.setItem("menu", JSON.stringify(newData));

    return {
      ...prevQuantities,
      [itemId]: newQuantity,
    };
  });
};

  
  
  
  const handleDecrease = (itemId, foodName, foodPrice) => {
    if (itemQuantities[itemId] > 0) {
      setItemQuantities((prevQuantities) => {
        const newQuantity = (prevQuantities[itemId] || 0) - 1;
        console.log("Số lượng hiện tại của", itemId, ":", newQuantity);
        console.log("Tên đồ ăn: ", foodName);
        console.log("Giá tiền: ", foodPrice);

        // Get the existing menu data from local storage
        let menuData = JSON.parse(localStorage.getItem("menu")) || {};

        // Update the quantity for the selected food item
        menuData[itemId] = {
          foodId: itemId,
          foodName: foodName,
          foodPrice: foodPrice,
          quantity: newQuantity,
        };

        // Save the updated menu data back to local storage
        localStorage.setItem("menu", JSON.stringify(menuData));

        return {
          ...prevQuantities,
          [itemId]: newQuantity,
        };
      });
    }
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
    const menuCost = JSON.parse(localStorage.getItem("menu"));
   console.log("menuCost", menuCost);
    return foods.map((food) => {
      return (
        <div
          className="icon-box featured-box align-middle text-left"
          key={food.id}>
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
                <span className="number">
                  {itemQuantities[food.foodId] || 0}
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

  const renderMenu = () => {
    const menuData = JSON.parse(localStorage.getItem("shows"));
    const menuCost = JSON.parse(localStorage.getItem("menu"));
    console.log("menuCost", menuCost);

    function totalAmount(menuCost, itemQuantities) {
      return Object.keys(menuCost).reduce((total, key) => {
        const quantity = itemQuantities[menuCost[key].foodId] || 0;
        const price = menuCost[key].price || 0;
        const foodPrice = quantity !== 0 ? menuCost[key].foodPrice || 0 : 0; // Sử dụng toán tử ba ngôi để đảm bảo rằng khi quantity = 0 thì foodPrice cũng bằng 0
        return total + foodPrice + price;
      }, 0);
    }
    const totalPrice = totalAmount(menuCost, itemQuantities);
    console.log("totalPrice", totalPrice);

    localStorage.setItem("Total", JSON.stringify(totalPrice));
    return (
      <div className="col-12 col-md-12 col-lg-4">
        <div className="col-inner">
          <div className="c-box film-cart film-item" style={{}}>
            <h4 className="cinema-title">BHD Star Le Van Viet</h4>
            <span className="session-info">
              <span className="screen">Screen {menuData[0].cinemaHallId}</span>-{" "}
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
                                {menuCost[key].foodPrice}
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
                      <td className="price">{totalPrice} VND</td>
                    </tr>
                  </tbody>
                </table>

                <div className="text-center" style={{ marginTop: "20px" }}>
                  <div className="error-message" style={{ display: "none" }} />
                  <Link
                    to={{
                      pathname: "/thanhtoan",
                    }}
                    className="button primary expand"
                    style={{ marginBottom: "15px" }}>
                    Thanh Toán (3/4)
                  </Link>
                </div>
              </>
            ) : (
              <span style={{ color: "red" }}>Vui lòng chọn ghế</span>
            )}

            <div style={{ marginBottom: "5px" }}>
              <Link to="/chontime">← Trở lại</Link>
            </div>
          </div>
        </div>
      </div>
    );
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
                                    <div className="total-price">
                                      Tổng giá: {totalPrice} VND
                                    </div>
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
    </>
  );
}
export default ChonDoAn;
