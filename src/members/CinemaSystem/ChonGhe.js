import { Link, useNavigate, useParams } from "react-router-dom";
import ghethuong from "/FE_CGV/fecenima/src/img/ghethuong.png";
import ghevip from "/FE_CGV/fecenima/src/img/ghevip.png";
import ghedoi from "/FE_CGV/fecenima/src/img/ghedoi.png";
import ghedachon from "/FE_CGV/fecenima/src/img/ghedachon.png";
import ghedaban from "/FE_CGV/fecenima/src/img/ghedaban.png";

import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";



import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../UserContext";

function ChonGhe() {
  useEffect(() => {
    Aos.init();
  }, []);

  const [selectedImage, setSelectedImage] = useState(ghethuong);

  const images = [ghedachon, ghethuong];
  const [selectedSeats, setSelectedSeats] = useState(true);
  const [selected, setSelected] = useState([]);

  const user = useContext(UserContext);
  console.log(user);
  const [newProducts, setNewProducts] = useState({});

  const handleClick = (seatId, seatKey, price, number) => {
    // Check if the seat is currently selected
    let isSelected = selectedSeats[seatKey] ; // Default to false if seatKey is not found

    console.log("isSelected", isSelected);
    let xx = localStorage.getItem("menu");
    let obj = {};
    let a = 1;
    if (xx) {
      obj = JSON.parse(xx);
      Object.keys(obj).forEach(function (key) {
        if (obj[key].seatId === seatId) {
          if (!isSelected) { // If the seat is not currently selected
            // If the seat is selected, set the quantity to 1
            obj[key].quantity = 1;
          } else {
            // If the seat is deselected, decrease the quantity only if it's greater than 0
            if (obj[key].quantity > 0) {
              obj[key].quantity -= 1;
            }
            // If the quantity becomes 0, remove the seat from selection
            if (obj[key].quantity === 0) {
              delete obj[key];
            }
          }
          a = 2;
        }
      });
    }

    // If the seat was not found in localStorage or was found but not in selectedSeats, add it with quantity 1
    if (a === 1) {
      obj[seatId] = {
        seatId: seatId,
        quantity: 1,
        price: price,
        numberSeat: number,
      };
    }

    // Update selectedSeats state
    setSelectedSeats({
      ...selectedSeats,
      [seatKey]: !isSelected, // Toggle the selected state
    });

    // Calculate total quantity
    let tongqty = Object.values(obj).reduce(
      (total, item) => total + item.quantity,
      0
    );

    // Update localStorage and state with new products and quantity
    localStorage.setItem("menu", JSON.stringify(obj));
    setNewProducts(obj);
    user.loginContext(tongqty);
    
    // Update selected image based on isSelected
    setSelectedImage(isSelected ? ghedachon : ghethuong);
};



  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem("menu");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const [seatJ, setSeatJ] = useState([{}]);
  const [seat, setSeat] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/seat/allSeat/${params.showId}`)
      .then((response) => {
        console.log(response);
        setSeat(response.data);

        setSeatJ(response.data.seatJ);
      });
  }, [params.showId]);
  const [itemQuantities, setItemQuantities] = useState({});
  const renderMenu = () => {
    const menuData = JSON.parse(localStorage.getItem("shows"));
    const menuCost = JSON.parse(localStorage.getItem("menu"));

    const total = JSON.parse(localStorage.getItem("Total"));

    if (!menuData || !menuCost) {
      return <div>Không có dữ liệu</div>;
    }


    function totalAmount(menuCost, itemQuantities) {
      return Object.keys(menuCost).reduce((total, key) => {
        const quantity = itemQuantities[menuCost[key].foodId] || 0;
        const price = menuCost[key].price || 0;
        const storedFoodPrice = menuCost[key].foodPrice || 0; // Lấy giá trị foodPrice từ localStorage
        const foodPrice = quantity !== 0 ? storedFoodPrice : 0; // Sử dụng toán tử ba ngôi để đảm bảo rằng khi quantity = 0 thì foodPrice cũng bằng 0
        return total + foodPrice + price;
      }, 0);
    }
    
    const totalPrice = totalAmount(menuCost, itemQuantities);
    console.log("totalPrice", totalPrice);

    

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
                                {menuCost[key].foodPrice}
                              </td>
                              <td
                                className="price"
                                style={{ fontWeight: "bold" }}>
                                {menuCost[key].price} VND
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
                      <td className="price">
                        {totalPrice} VND
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="text-center" style={{ marginTop: "20px" }}>
  <div className="error-message" style={{ display: "none" }} />
  <Link
    to={{
      pathname: "/chondoan",
    }}
    className={`button primary expand ${Object.values(selectedSeats).every(seat => seat === false) ? 'disabled' : ''}`}
    style={{ marginBottom: "15px", pointerEvents: Object.values(selectedSeats).every(seat => seat === false) ? 'none' : 'auto' }}
  >
    Chọn đồ ăn (2/4)
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
            <div className="col medium-12 small-12 large-12">
              <div className="col-inner">
                <h2 className="entry-title text-center">Bước 2: Chọn ghế</h2>
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
                          <div>
                            <div className="cinema-map-container">
                              <div className="map-body">
                                <table>
                                  <tbody>
                                    <tr>
                                      <td />
                                      <td colSpan={19}>
                                        <div className="map-header" />
                                        <div
                                          className="seat-types row row-small align-center"
                                          style={{
                                            marginTop: "30px",
                                            marginBottom: "15px",
                                          }}>
                                          <div className="col-md-6 col-lg-4 seat-icon-col">
                                            <div className="col-inner text-center">
                                              <div className="icon-box featured-box align-middle icon-box-left text-left">
                                                <div className="icon-box-img">
                                                  <div className="icon">
                                                    <div className="icon-inner">
                                                      {/* <span className="seat-icon standard" /> */}
                                                      <img
                                                        src={ghethuong}></img>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  className="icon-box-text last-reset"
                                                  style={{
                                                    paddingLeft: "10px",
                                                  }}>
                                                  Ghế Thường
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                          <div className="col-md-6 col-lg-4 seat-icon-col">
                                            <div className="col-inner text-center">
                                              <div className="icon-box featured-box align-middle icon-box-left text-left">
                                                <div className="icon-box-img">
                                                  <div className="icon">
                                                    <div className="icon-inner">
                                                      {/* <span className="seat-icon vip" /> */}
                                                      <img src={ghevip}></img>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  className="icon-box-text last-reset"
                                                  style={{
                                                    paddingLeft: "10px",
                                                  }}>
                                                  Ghế VIP
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                          <div className="col-md-6 col-lg-4 seat-icon-col">
                                            <div className="col-inner text-center">
                                              <div className="icon-box featured-box align-middle icon-box-left text-left">
                                                <div className="icon-box-img">
                                                  <div className="icon">
                                                    <div className="icon-inner">
                                                      {/* <span className="seat-icon couple" /> */}
                                                      <img src={ghedoi}></img>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  className="icon-box-text last-reset"
                                                  style={{
                                                    paddingLeft: "10px",
                                                  }}>
                                                  Ghế đôi
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                          <div
                                            className="col-md-6 col-lg-4 seat-icon-col"
                                            style={{ display: "none" }}>
                                            <div className="col-inner text-center">
                                              <div className="icon-box featured-box align-middle icon-box-left text-left">
                                                <div className="icon-box-img">
                                                  <div className="icon">
                                                    <div className="icon-inner">
                                                      {/* <span className="seat-icon first-class" /> */}
                                                      <img
                                                        src={ghedachon}></img>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  className="icon-box-text last-reset"
                                                  style={{
                                                    paddingLeft: "10px",
                                                  }}>
                                                  First class
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                          <div
                                            className="col-md-6 col-lg-4 seat-icon-col"
                                            style={{ display: "none" }}>
                                            <div className="col-inner text-center">
                                              <div className="icon-box featured-box align-middle icon-box-left text-left">
                                                <div className="icon-box-img">
                                                  <div className="icon">
                                                    <div className="icon-inner">
                                                      {/* <span className="seat-icon deluxe" /> */}
                                                      <img src={ghedaban}></img>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  className="icon-box-text last-reset"
                                                  style={{
                                                    paddingLeft: "10px",
                                                  }}>
                                                  Ghế Deluxe
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                          <div
                                            className="col-md-6 col-lg-4 seat-icon-col"
                                            style={{ display: "none" }}>
                                            <div className="col-inner text-center">
                                              <div className="icon-box featured-box align-middle icon-box-left text-left">
                                                <div className="icon-box-img">
                                                  <div className="icon">
                                                    <div className="icon-inner">
                                                      <span className="seat-icon sofa" />
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  className="icon-box-text last-reset"
                                                  style={{
                                                    paddingLeft: "10px",
                                                  }}>
                                                  Ghế sofa
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                          <div className="col-md-6 col-lg-4 seat-icon-col">
                                            <div className="col-inner text-center">
                                              <div className="icon-box featured-box align-middle icon-box-left text-left">
                                                <div className="icon-box-img">
                                                  <div className="icon">
                                                    <div className="icon-inner">
                                                      {/* <span className="seat-icon selected" /> */}
                                                      <img
                                                        src={ghedachon}></img>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  className="icon-box-text last-reset"
                                                  style={{
                                                    paddingLeft: "10px",
                                                  }}>
                                                  Ghế đã chọn
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                          <div className="col-md-6 col-lg-4 seat-icon-col">
                                            <div className="col-inner text-center">
                                              <div className="icon-box featured-box align-middle icon-box-left text-left">
                                                <div className="icon-box-img">
                                                  <div className="icon">
                                                    <div className="icon-inner">
                                                      {/* <span className="seat-icon disabled" /> */}
                                                      <img src={ghedaban}></img>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  className="icon-box-text last-reset"
                                                  style={{
                                                    paddingLeft: "10px",
                                                  }}>
                                                  Ghế đã bán
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                      <td />
                                    </tr>

                                    {Object.keys(seat).map((key) => {
  if (key >= "A" && key <= "I") {
    return (
      <tr key={key}>
        <td>{key}</td>
        {Array.isArray(seat[key]) ? (
          seat[key].map((seatItem, index) => (
            <td key={`${key}${index + 1}`} colSpan={1}>
              <div className="stack stack-row justify-center items-center">
              <img
  src={
    selectedSeats[`${key}${index + 1}`]
      ? ghedachon
      : seatItem.isBooked
      ? ghedaban
      : ghethuong
  }
  alt={`Seat ${key}${index + 1}`}
  onClick={() =>
    handleClick(
      seatItem.seatId,
      `${key}${index + 1}`,
      seatItem.priceSeat,
      seatItem.Seat.numberSeat
    )
  }
  className={seatItem.isBooked ? "img-disabled" : ""}
/>

              </div>
            </td>
          ))
        ) : (
          <td>{seat[key]}</td>
        )}
        <td>{key}</td>
      </tr>
    );
  }
})}



                                    <tr>
                                      <td>J</td>
                                      {seatJ.map((seat, index) => (
                                        <td key={`J${index + 1}`} colSpan={2}>
                                          <div className="stack2 stack-row justify-center items-center">
                                            <img
                                              src={
                                                selectedSeats[`J${index + 1}`]
                                                  ? ghedachon
                                                  : ghedoi
                                              }
                                              alt={`Seat J${index + 1}`}
                                              onClick={() =>
                                                handleClick(
                                                  seat.seatId,
                                                  `J${index + 1}`,
                                                  seat.priceSeat,
                                                  seat.Seat.numberSeat
                                                )
                                              }
                                            />
                                            <img
                                              src={
                                                selectedSeats[`J${index + 1}`]
                                                  ? ghedachon
                                                  : ghedoi
                                              }
                                              alt={`Seat J${index + 1}`}
                                              onClick={() =>
                                                handleClick(
                                                  seat.seatId,
                                                  `J${index + 1}`,
                                                  seat.priceSeat,
                                                  seat.Seat.numberSeat
                                                )
                                              }
                                            />
                                          </div>
                                        </td>
                                      ))}
                                      <td id="J1">J</td>
                                    </tr>
                                  </tbody>
                                </table>
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

export default ChonGhe;
