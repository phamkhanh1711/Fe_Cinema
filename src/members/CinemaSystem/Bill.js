import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import movie from "../../img/movie.png";
import { FcApproval } from "react-icons/fc";

import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import QRCode from "react-qr-code";
import NotItem from "../../img/NotItem.png";

function Bill() {
  const booking = JSON.parse(localStorage.getItem("booking"));

  const token = Cookies.get("Token");

  const [status, setStatus] = useState(null);
  const [getDetail, setGetDetail] = useState(null);

  useEffect(() => {
    const code = JSON.parse(localStorage.getItem("code"));
    console.log("code", code);
    const queryParams = window.location.search;

    // Parse chuỗi query parameters
    const searchParams = new URLSearchParams(queryParams);

    // Gọi API success_payment
    axios
      .get(`http://localhost:4000/payment/payment-detail/${queryParams}`)
      .then((res) => {
        console.log("API Response:", res);

        const status = res.data;
        setStatus(res.data);

        const RspCode = res.data.RspCode;

        const url = `http://localhost:4000/promotion/savePromo `;
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        if (RspCode === "00") {
          console.log(code);
          axios
            .post(url, { code }, config)
            .then((promoRes) => {
              console.log("Promo save response:", promoRes);
            })
            .catch((promoError) => {
              console.error("Error saving promo code:", promoError);
            });
          axios
            .post(`http://localhost:4000/booking/createbooking`, booking, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((res) => {
              console.log(res);
              const bookingId = res.data.data.createBook.bookingId;

              axios
                .get(`http://localhost:4000/booking/detailBooking/${bookingId}`)
                .then((res) => {
                  console.log("API Response:", res);

                  setGetDetail(res.data.data);
                  localStorage.removeItem("selectedSeats");
                  localStorage.removeItem("shows");
                  localStorage.removeItem("menu");
                });
            });
        }

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: status.Message,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Error fetching payment status:", error);
        Swal.fire({
          icon: "error",
          title: status,
          text: "Đặt vé thất bại",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  }, []);

  const total = JSON.parse(localStorage.getItem("Total"));
  if (!getDetail || !getDetail.detailBooking) {
    // Return empty content or a placeholder message
    return (
      <>
        <Typography
          variant="h4"
          style={{
            marginTop: "20%",
            color: "#72be43",
            fontWeight: "bold",
            fontFamily: "serif",
          }}
          ml={70}>
          {getDetail}
          <img
            style={{ width: "30%", marginTop: "-20%", marginLeft: "-6%" }}
            src={NotItem}
          />
        </Typography>
      </>
    );
  }
  // Assume getDetail is populated correctly
  const seat1 =
    getDetail.detailBookingTicket[0]?.CinemaHallSeat.Seat.numberSeat;
  const priceSeat1 = getDetail.detailBookingTicket[0]?.CinemaHallSeat.priceSeat;
  const seat2 =
    getDetail.detailBookingTicket[1]?.CinemaHallSeat.Seat.numberSeat;
  const priceSeat2 = getDetail.detailBookingTicket[1]?.CinemaHallSeat.priceSeat;

  let totalPriceSeats;
  let seatInfo;

  if (getDetail.detailBookingTicket.length === 1) {
    totalPriceSeats = priceSeat1;
    seatInfo = `${seat1} - ${priceSeat1} VND`;
  } else {
    totalPriceSeats = priceSeat1 + priceSeat2;
    seatInfo = `${seat1} - ${priceSeat1} VND, ${seat2} - ${priceSeat2} VND`;
  }

  // Calculate the total price of food items and format their information
  let totalPriceFood = 0;
  let foodInfo = "";

  if (getDetail.detailBookingFood.length > 0) {
    foodInfo = getDetail.detailBookingFood
      .map((food) => {
        const foodName = food.Food.foodName;
        console.log(foodName);
        totalPriceFood += food.priceFood;
        return `${foodName} - ${food.priceFood} VND`;
      })
      .join(", ");
  } else {
    foodInfo = "Không có";
  }

  let formattedFoodItems = "";

if (getDetail.detailBookingFood.length > 0) {
  formattedFoodItems = getDetail.detailBookingFood
    .map((food) => {
      const foodName = food.Food.foodName;
      const foodQuantity = food.quantity;
      return `${foodQuantity} x ${foodName}`;
    })
    .join(", ");
} else {
  formattedFoodItems = "Không có";
}

  const discount = localStorage.getItem("discount");
  const totalSum = localStorage.getItem("totalSum");
  // Calculate total price
  const totalPrice = totalPriceSeats + totalPriceFood;

    const qrData = `
    MA Ve: ${getDetail.detailBooking.bookingId}
    Ten Khach Hang: ${getDetail.detailBooking.User.fullName}
    Email: ${getDetail.detailBooking.User.email}
    So Dien Thoai: ${getDetail.detailBooking.User.phoneNumber}
    Ten Phim: ${getDetail.detailBookingTicket[0]?.Show.movie.movieName}

    Rap Chieu: ${getDetail.detailBookingTicket[0]?.Show.CinemaHall.cinemaHallName}
    Ghe: ${seatInfo}
    Tong Gia Ghe: ${totalPriceSeats} VND
    Gia Do An: ${formattedFoodItems}
    Tong Gia Do An: ${totalPriceFood} VND

    Tong Gia: ${totalSum} VND
    Giam Gia: ${discount} VND
    Tong Tien Sau Giam Gia  ${getDetail.detailBooking.totalPrice} VND
  `;

  // Encode the data to be displayed in the QR code
  const encoder = new TextEncoder();
  const encodedQrData = encoder.encode(qrData);
  console.log(new TextDecoder("utf-8").decode(encodedQrData));

  const handleQRCode = () => {
    return (
      <>
        <Typography
          variant="h4"
          style={{
            marginTop: "10%",
            color: "#72be43",
            fontWeight: "bold",
            fontFamily: "serif",
          }}
          mt={2}
          ml={4}>
          Hãy đưa mã QR này đến quầy để nhận vé
        </Typography>
        <Typography
          variant="h4"
          style={{
            color: "white",
            fontWeight: "bold",
            fontFamily: "serif",
            fontSize: "20px",
            width: "100%",
            display: "block",
          }}></Typography>
        <QRCode value={qrData} style={{ width: "100%", marginTop: "7%" }} />
        <Box>
          <Typography
            variant="body1"
            style={{
              color: "white",
              fontWeight: "bold",
              fontFamily: "serif",
              fontSize: "20px",
              width: "100%",
              display: "block",
            }}></Typography>
        </Box>
      </>
    );
  };

  const renderMenuRight = () => {
    if (!getDetail) return null;

    const cinemaHallSeats = getDetail.detailBookingTicket.map(
      (ticket) => ticket.CinemaHallSeat
    );
    const seatNumbers = cinemaHallSeats
      .map((seat) => seat.Seat.numberSeat)
      .join(", ");

    const discount = localStorage.getItem("discount");
    const totalSum = localStorage.getItem("totalSum");

    const foodDetails = getDetail.detailBookingFood.map((detail) => {
      return `${detail.quantity}x ${detail.Food.foodName}`;
  });
  
  const foodList = foodDetails.join(", ");


    const totalFoodPrice = getDetail.detailBookingFood.reduce(
      (total, food) => total + (food.priceFood || 0),
      0
    );
    const totalPriceSeat = getDetail.detailBookingTicket.reduce(
      (total, ticket) => {
        return total + ticket.CinemaHallSeat.priceSeat;
      },
      0
    );

    return (
      <Grid id="col-inner1" item xs={4}>
        <Grid id="col-inner1" container spacing={1}>
          <Grid item xs={12}>
            {/* Movie information */}
            <Typography
              variant="h4"
              style={{
                color: "white",
                fontWeight: "bold",
                fontFamily: "serif",
                fontSize: "20px",
              }}>
              {getDetail.detailBookingTicket[0].Show.movie.movieName}
            </Typography>
            <Typography
              variant="h4"
              style={{
                marginLeft: "40%",
                color: "#72be43",
                fontWeight: "bold",
                fontFamily: "serif",
                fontSize: "20px",
              }}
              mt={1}>
              BHD Star Cinema
            </Typography>
            <Typography
              paragraph={true}
              sx={{
                color: "white",
                marginTop: "1%",
                fontSize: "20px",
                maxWidth: "100%",
                fontFamily: "PT Sans",
                display: "flex",
                alignItems: "center",
              }}>
              <Box
                sx={{
                  marginRight: "10px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "serif",
                }}>
                Suất:
              </Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "#72be43",
                  fontSize: "20px",
                  fontFamily: "PT Sans",
                }}>
                {getDetail.detailBookingTicket[0].Show.startTime} ~{" "}
                {getDetail.detailBookingTicket[0].Show.endTime}
              </Typography>
            </Typography>
            <Typography
              paragraph={true}
              sx={{
                color: "white",
                marginTop: "-3%",
                fontSize: "20px",
                maxWidth: "100%",
                fontFamily: "PT Sans",
                display: "flex",
                alignItems: "center",
              }}>
              <Box
                sx={{
                  marginRight: "10px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "serif",
                }}>
                Phòng chiếu:
              </Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "#72be43",
                  fontSize: "20px",
                  fontFamily: "PT Sans",
                }}>
                {
                  getDetail.detailBookingTicket[0].Show.CinemaHall
                    .cinemaHallName
                }
              </Typography>
            </Typography>

            <Typography
              paragraph={true}
              sx={{
                color: "white",
                marginTop: "-4%",
                fontSize: "20px",
                maxWidth: "100%",
                fontFamily: "PT Sans",
                display: "flex",
                alignItems: "center",
              }}>
              <Box
                sx={{
                  marginRight: "10px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "serif",
                }}>
                Ghế:
              </Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "#72be43",
                  fontSize: "20px",
                  fontFamily: "PT Sans",
                }}>
                {seatNumbers}
              </Typography>
            </Typography>

            <Typography
              paragraph={true}
              sx={{
                color: "white",
                marginTop: "-4%",
                fontSize: "20px",
                maxWidth: "100%",
                fontFamily: "PT Sans",
                display: "flex",
                alignItems: "center",
              }}>
              <Box
                sx={{
                  width: "30%",
                  marginRight: "10px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "serif",
                }}>
                Đồ Ăn:
              </Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "#72be43",
                  fontSize: "20px",
                  fontFamily: "PT Sans",
                }}>
               {foodList}
              </Typography>
            </Typography>
          </Grid>
        </Grid>

        <Grid id="col-inner1" container spacing={-2} mt={2}>
          <Grid item xs={12}>
            {/* Order summary */}
            <Typography
              variant="h4"
              style={{
                color: "white",
                fontWeight: "bold",
                fontFamily: "serif",
                fontSize: "20px",
              }}>
              Tóm tắt đơn hàng
            </Typography>
            <hr style={{ borderTop: "1px solid #454d6a" }}></hr>
            {/* Seat information */}
            <Typography
              paragraph={true}
              sx={{
                color: "white",
                marginTop: "2%",
                fontSize: "20px",
                maxWidth: "100%",
                fontFamily: "PT Sans",
                display: "flex",
                alignItems: "center",
              }}>
              <Box
                sx={{
                  marginRight: "10px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "serif",
                }}>
                Ghế:
              </Box>
              <Typography
                ml={20}
                sx={{
                  fontWeight: "bold",
                  color: "#72be43",
                  fontSize: "20px",
                  fontFamily: "PT Sans",
                }}>
                {totalPriceSeat} VND
              </Typography>
            </Typography>
            <Typography
              paragraph={true}
              sx={{
                color: "white",
                marginTop: "-4%",
                fontSize: "20px",
                maxWidth: "100%",
                fontFamily: "PT Sans",
                display: "flex",
                alignItems: "center",
              }}>
              <Box
                sx={{
                  marginRight: "10px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "serif",
                }}>
                Đồ ăn:
              </Box>
              <Typography
                ml={22}
                mt={2}
                sx={{
                  fontWeight: "bold",
                  color: "#72be43",
                  fontSize: "20px",
                  fontFamily: "PT Sans",
                }}>
                {totalFoodPrice} VND
              </Typography>
            </Typography>
            <hr style={{ borderTop: "1px solid #454d6a" }}></hr>
            {/* Total price */}
            <Typography
              paragraph={true}
              sx={{
                color: "white",
                marginTop: "2%",
                fontSize: "20px",
                maxWidth: "100%",
                fontFamily: "PT Sans",
                display: "flex",
                alignItems: "center",
              }}>
              <Box
                sx={{
                  marginRight: "10px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "serif",
                }}>
                Tổng tiền:
              </Box>
              <Typography
                ml={18}
                sx={{
                  fontWeight: "bold",
                  color: "#72be43",
                  fontSize: "20px",
                  fontFamily: "PT Sans",
                }}>
                {totalSum} VND
              </Typography>
            </Typography>
            <Typography
              paragraph={true}
              sx={{
                color: "white",
                marginTop: "2%",
                fontSize: "20px",
                maxWidth: "100%",
                fontFamily: "PT Sans",
                display: "flex",
                alignItems: "center",
              }}>
              <Box
                sx={{
                  marginRight: "10px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "serif",
                }}>
                Giảm Giá:
              </Box>
              <Typography
                ml={18}
                sx={{
                  fontWeight: "bold",
                  color: "#72be43",
                  fontSize: "20px",
                  fontFamily: "PT Sans",
                }}>
                -{discount} VND
              </Typography>
            </Typography>
            <Typography
              paragraph={true}
              sx={{
                color: "white",
                marginTop: "2%",
                fontSize: "20px",
                maxWidth: "100%",
                fontFamily: "PT Sans",
                display: "flex",
                alignItems: "center",
              }}>
              <Box
                sx={{
                  marginRight: "10px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "serif",
                }}>
                Tổng tiền (đã giảm giá):
              </Box>
              <Typography
                ml={18}
                sx={{
                  fontWeight: "bold",
                  color: "#72be43",
                  fontSize: "20px",
                  fontFamily: "PT Sans",
                }}>
                {getDetail.detailBooking.totalPrice} VNĐ
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const renderStatus = () => {
    if (!status) {
      return null;
    }

    return (
      <Typography
        variant="h4"
        style={{
          color: "#72be43",
          fontWeight: "bold",
          fontFamily: "serif",
        }}
        mt={4}
        ml={4}>
        {status.Message} tại BHD Star Cinema{" "}
        <FcApproval style={{ fontSize: "28px" }} />
      </Typography>
    );
  };

  const renderInfo = () => {
    const Auth = Cookies.get("Auth");

    const user = JSON.parse(Auth);

    return (
      <>
        <Typography
          paragraph={true}
          sx={{
            color: "white",
            marginLeft: "5%",
            marginTop: "2%",
            fontSize: "20px",
            maxWidth: "100%", // Adjust the value as needed
            fontFamily: "PT Sans",
            display: "flex",
            alignItems: "center", // Center-align the items vertically
          }}>
          <Box
            sx={{
              marginRight: "10px",
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "serif",
            }}>
            Tên Khách Hàng:
          </Box>{" "}
          {/* Add margin to create space between "Đạo Diễn:" and the director's name */}
          <Typography
            sx={{
              fontWeight: "bold",
              color: "#72be43",
              fontSize: "20px",
              fontFamily: "PT Sans",
            }}>
            {user.fullName}
          </Typography>
        </Typography>

        <Typography
          paragraph={true}
          sx={{
            color: "white",
            marginLeft: "5%",
            marginTop: "-2%",
            fontSize: "20px",
            maxWidth: "100%", // Adjust the value as needed
            fontFamily: "PT Sans",
            display: "flex",
            alignItems: "center", // Center-align the items vertically
          }}>
          <Box
            sx={{
              marginRight: "10px",
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "serif",
            }}>
            Email:
          </Box>{" "}
          {/* Add margin to create space between "Đạo Diễn:" and the director's name */}
          <Typography
            sx={{
              fontWeight: "bold",
              color: "#72be43",
              fontSize: "20px",
              fontFamily: "PT Sans",
            }}>
            {user.email}
          </Typography>
        </Typography>

        <Typography
          paragraph={true}
          sx={{
            color: "white",
            marginLeft: "5%",
            marginTop: "-2%",
            fontSize: "20px",
            maxWidth: "100%", // Adjust the value as needed
            fontFamily: "PT Sans",
            display: "flex",
            alignItems: "center", // Center-align the items vertically
          }}>
          <Box
            sx={{
              marginRight: "10px",
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "serif",
            }}>
            Số Điện Thoại:
          </Box>{" "}
          {/* Add margin to create space between "Đạo Diễn:" and the director's name */}
          <Typography
            sx={{
              fontWeight: "bold",
              color: "#72be43",
              fontSize: "20px",
              fontFamily: "PT Sans",
            }}>
            {user.phoneNumber}
          </Typography>
        </Typography>
      </>
    );
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} sx={{ p: 5 }}>
        <Grid id="col-inner1" item xs={8}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <img src={movie} alt="Cinema" width="90%" height="100%"></img>

              <Typography
                variant="h6"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "serif",
                  fontSize: "16px",
                  width: "100%",
                }}>
                Cảm ơn bạn đã lựa chọn BHD Star Cinema
              </Typography>
            </Grid>
            <Grid item xs={8}>
              {renderStatus()}
              <Typography
                variant="h5"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "serif",
                }}
                mt={2}
                ml={4}>
                Tầng 4, Vincom Plaza Lê Văn Việt, 50 Lê Văn Việt, P.Hiệp Phú,
                Quận 9, TP.HCM
              </Typography>

              {handleQRCode()}

              <Typography
                variant="h4"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "serif",
                }}
                mt={4}
                ml={4}>
                Thông tin người đặt vé
              </Typography>

              {renderInfo()}
            </Grid>
          </Grid>
        </Grid>

        {renderMenuRight()}
      </Grid>
    </Box>
  );
}
export default Bill;
