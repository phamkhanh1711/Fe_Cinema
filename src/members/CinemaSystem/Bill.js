import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import movie from "/FE_CGV/fecenima/src/img/movie.png";
import { FcApproval } from "react-icons/fc";
import qrcode from "/FE_CGV/fecenima/src/img/qrcode.png";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

function Bill() {
  const booking = JSON.parse(localStorage.getItem("booking"));
  const token = Cookies.get("Token");
  useEffect(() => {
    const queryParams = window.location.search;

    // Parse chuỗi query parameters
    const searchParams = new URLSearchParams(queryParams);

    // Lấy toàn bộ thông tin từ query parameters
    const vnpAmount = searchParams.get("vnp_Amount");
    const vnpBankCode = searchParams.get("vnp_BankCode");
    const vnpBankTranNo = searchParams.get("vnp_BankTranNo");
    const vnpCardType = searchParams.get("vnp_CardType");
    const vnpOrderInfo = searchParams.get("vnp_OrderInfo");
    const vnpPayDate = searchParams.get("vnp_PayDate");
    const vnpResponseCode = searchParams.get("vnp_ResponseCode");
    const vnpTmnCode = searchParams.get("vnp_TmnCode");
    const vnpTransactionNo = searchParams.get("vnp_TransactionNo");
    const vnpTransactionStatus = searchParams.get("vnp_TransactionStatus");
    const vnpTxnRef = searchParams.get("vnp_TxnRef");
    const vnpSecureHash = searchParams.get("vnp_SecureHash");

    // Gọi API success_payment
    axios
      .get(`http://localhost:4000/payment/payment-detail/${queryParams}`, {})
      .then((res) => {
        console.log("API Response:", res.data);

        const { RspCode, Message } = res.data;
        if (RspCode === "00") {
          axios.post(`http://localhost:4000/booking/createbooking`, booking, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then((res) => {  
            ;
          console.log("API Response:", res);
          })
        }
        // localStorage.setItem("status", JSON.stringify(status));

        // console.log(status);

        // // Update the payment status state
        // setPaymentStatus(res.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Payment Succes",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(function (error) {
        console.error("Error fetching payment status:", error);
        Swal.fire({
          icon: "error",
          title: "Payment Fail...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  }, []);

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
              <Typography
                variant="h4"
                style={{
                  color: "#72be43",
                  fontWeight: "bold",
                  fontFamily: "serif",
                }}
                mt={4}
                ml={4}>
                Bạn đã đặt vé thành công tại BHD Star Cinema{" "}
                <FcApproval style={{ fontSize: "28px" }} />
              </Typography>
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
              <Typography
                variant="h4"
                style={{
                  color: "#72be43",
                  fontWeight: "bold",
                  fontFamily: "serif",
                }}
                mt={2}
                ml={4}>
                Hãy đưa mã QR này đến quầy để nhận vé
              </Typography>
              <img
                src={qrcode}
                alt="QR Code"
                width="30%"
                height="auto"
                style={{ marginLeft: "20%", marginTop: "5%" }}
              />

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
              <Typography
                paragraph={true}
                sx={{
                  color: "white",
                  marginLeft: "5%",
                  marginTop: "1%",
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
                  khanh11@gmail.com
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
                  0987654321
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid id="col-inner1" item xs={4}>
          <Grid id="col-inner1" container spacing={1}>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "serif",
                  fontSize: "20px",
                }}>
                Mai
              </Typography>
              <Typography
                variant="h4"
                style={{
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
                  Suất:
                </Box>{" "}
                {/* Add margin to create space between "Đạo Diễn:" and the director's name */}
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#72be43",
                    fontSize: "20px",
                    fontFamily: "PT Sans",
                  }}>
                  20:00 - 22:00 - ngày 20/10/2021
                </Typography>
              </Typography>
              <Typography
                paragraph={true}
                sx={{
                  color: "white",

                  marginTop: "-3%",
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
                  Phòng chiếu:
                </Box>{" "}
                {/* Add margin to create space between "Đạo Diễn:" and the director's name */}
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#72be43",
                    fontSize: "20px",
                    fontFamily: "PT Sans",
                  }}>
                  1
                </Typography>
              </Typography>
              <Typography
                paragraph={true}
                sx={{
                  color: "white",

                  marginTop: "-4%",
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
                  Ghế:
                </Box>{" "}
                {/* Add margin to create space between "Đạo Diễn:" and the director's name */}
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#72be43",
                    fontSize: "20px",
                    fontFamily: "PT Sans",
                  }}>
                  A1, A2
                </Typography>
              </Typography>
            </Grid>
          </Grid>

          <Grid id="col-inner1" container spacing={-2} mt={2}>
            <Grid item xs={12}>
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
              <Typography
                paragraph={true}
                sx={{
                  color: "white",

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
                  A1 , A2:
                </Box>{" "}
                {/* Add margin to create space between "Đạo Diễn:" and the director's name */}
                <Typography
                  ml={20}
                  sx={{
                    fontWeight: "bold",
                    color: "#72be43",
                    fontSize: "20px",
                    fontFamily: "PT Sans",
                  }}>
                  120.000 VNĐ
                </Typography>
              </Typography>
              <Typography
                paragraph={true}
                sx={{
                  color: "white",

                  marginTop: "-4%",
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
                  Đồ ăn:
                </Box>{" "}
                {/* Add margin to create space between "Đạo Diễn:" and the director's name */}
                <Typography
                  ml={22}
                  mt={2}
                  sx={{
                    fontWeight: "bold",
                    color: "#72be43",
                    fontSize: "20px",
                    fontFamily: "PT Sans",
                  }}>
                  50.000 VNĐ
                </Typography>
              </Typography>
              <hr style={{ borderTop: "1px solid #454d6a" }}></hr>
              <Typography
                paragraph={true}
                sx={{
                  color: "white",

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
                  Tổng tiền:
                </Box>{" "}
                {/* Add margin to create space between "Đạo Diễn:" and the director's name */}
                <Typography
                  ml={18}
                  sx={{
                    fontWeight: "bold",
                    color: "#72be43",
                    fontSize: "20px",
                    fontFamily: "PT Sans",
                  }}>
                  170.000 VNĐ
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Bill;
