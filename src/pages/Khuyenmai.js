import garden from "/FE_CGV/fecenima/src/img/garden.jpg";
import { Box, CircularProgress, Grid, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, Button, ImageList, ImageListItem } from "@mui/material";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import styled from "styled-components";

function Khuyenmai() {
  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    // Sau khi trang đã được tải lại, cuộn về đầu trang
    window.scrollTo(0, 0);
  }, []);

  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4000/promotion/allPromoUser")
      .then((res) => {
        console.log(res);
        setData(res.data.data.allPromoUser);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleClickOpen = (item) => {
    setCurrentItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentItem(null);
  };

  const StyledDialog = styled(Dialog)`
    .MuiPaper-root {
      background-color: black;
      color: white;
      width: 800px; /* Chỉnh chiều rộng */
      max-width: 800px; /* Giới hạn chiều rộng tối đa */
      height: 600px; /* Chỉnh chiều cao */
      max-height: 600px; /* Giới hạn chiều cao tối đa */
    }
  `;

  const StyledDialogTitle = styled(DialogTitle)`
    background-color: black;
    color: white;
  `;

  const StyledDialogContent = styled(DialogContent)`
    background-color: black;
    color: white;
  `;

  const StyledDialogContentText = styled(DialogContentText)`
    color: white;
  `;

  return (
    <div>
      {loading ? (
        <CircularProgress className="loading" />
      ) : (
        <>
          <div>
            {/* Phần tiêu đề */}
            <div className="col-12 col-lg-12">
              <div className="col-inner1 text-center">
                <div className="text">
                  <h2 id="p1">Khuyến Mãi</h2>
                </div>
              </div>
            </div>
          </div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3} sx={{ p: 5 }}>
              {data.map((item, index) => (
                <Grid item xs={4} sm={6} md={4} key={index}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={12}>
                      <img
                        className="img-fluid"
                        onClick={() => handleClickOpen(item)}
                        src={item.imagePromo} // Sử dụng URL hình ảnh từ dữ liệu của bạn
                        alt="Cinema"
                      />
                      <Typography
                        variant="h6"
                        style={{
                          color: "#B2EC0F",
                          fontWeight: "bold",
                          fontFamily: "serif",
                          fontSize: "20px",
                          width: "100%",
                        }}
                      >
                        {item.promotionName} - Tặng ngay bắp lớn
                      </Typography>
                      <Typography
                        variant="h6"
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontFamily: "serif",
                          fontSize: "16px",
                          width: "100%",
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Box>

          {currentItem && (
            <StyledDialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <StyledDialogTitle id="alert-dialog-title">
                <Grid container p={11} spacing={10}>
                  <Grid item xs={5}>
                    <Grid container spacing={2} direction="column">
                      <Grid item xs={6}>
                        <ImageList sx={{ width: 500, height: 380, ml: -12, mt: -10 }}>
                          <ImageListItem key={currentItem.promotionId}>
                            <img
                              src={currentItem.imagePromo}
                              alt={currentItem.imagePromo}
                              loading="lazy"
                            />
                          </ImageListItem>
                        </ImageList>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={7}>
                    <Typography
                      variant="h3"
                      component="h2"
                      gutterBottom
                      sx={{
                        marginTop: "-25%",
                        color: "#72be43",
                        marginLeft: "-20%",
                        fontWeight: "bold",
                        fontSize: "24px",
                        fontFamily: "PT Sans",
                      }}
                    >
                      {currentItem.promotionName}
                    </Typography>

                    <Typography
                      paragraph={true}
                      sx={{
                        color: "white",
                        marginLeft: "-10%",
                        marginTop: "5%",
                        fontSize: "14px",
                        maxWidth: "100%",
                        fontFamily: "PT Sans",
                      }}
                    >
                      {currentItem.startDate} - {currentItem.endDate}
                    </Typography>

                    <Typography
                      paragraph={true}
                      sx={{
                        color: "white",
                        marginLeft: "-17%",
                        marginTop: "-1%",
                        fontSize: "20px",
                        maxWidth: "100%", // Adjust the value as needed
                        fontFamily: "PT Sans",
                        display: "flex",
                        alignItems: "center", // Center-align the items vertically
                        letterspacing: "2px",
                      }}
                    >
                      Mã code:{" "}
                      <Typography
                        variant="body1"
                        sx={{
                          color: "skyblue",
                          fontSize: "18px",
                          fontFamily: "PT Sans",
                        }}
                      >
                        {currentItem.code}
                      </Typography>
                    </Typography>
                  </Grid>
                </Grid>
              </StyledDialogTitle>
            </StyledDialog>
          )}
        </>
      )}
    </div>
  );
}

export default Khuyenmai;
