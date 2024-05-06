import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import { useParams } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import thanhxuan from "/FE_CGV/fecenima/src/img/thanhxuan.jpg";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Comment from "./Comment";
import ListComment from "./ListComment";
function Detail(props) {
  const [italic, setItalic] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState("normal");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const params = useParams();
  const movieId = params.movieId;
  console.log(movieId);
  const [movieData, setMovieData] = useState(null);
  useEffect(() => {
    // Sau khi trang đã được tải lại, cuộn về đầu trang
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/movie/detail-movie/${movieId}`)
      .then((res) => {
        console.log(res);
        setMovieData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.movieId]);

  function renderData() {
    return (
      movieData && (
        <Grid container p={11} spacing={10}>
            <Grid item xs={5}>
            <Grid container spacing={2} direction="column">
              <Grid item xs={6}>
                <ImageList sx={{ width: 500, height: 500 }}>
                  <ImageListItem key={movieData.movieId}>
                    <img
                      src={movieData.movieImage}
                      alt={movieData.movieName}
                      loading="lazy"
                    />
                  </ImageListItem>
                </ImageList>
              </Grid>

              <Grid item xs={6}>
                <Button
                  variant="contained"
                  sx={{
                    fontSize: "12px",
                    backgroundColor: "green",
                    color: "white",
                    height: "35px",
                    fontFamily: "PT Sans",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}>
                  MUA VÉ NGAY
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={7}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                color: "green",
                marginLeft: "-20%",
                fontWeight: "bold",
                fontSize: "22px",
                fontFamily: "PT Sans",
              }}>
              Tên Phim: {movieData.movieName}
            </Typography>

            <Typography
              paragraph={true}
              sx={{
                color: "white",
                marginLeft: "-40%",
                marginTop: "5%",
                fontSize: "20px",
                maxWidth: "100%",
                fontFamily: "PT Sans",
              }}>
              {movieData.movieDescription}
            </Typography>

            <Typography
              paragraph={true}
              sx={{
                color: "white",
                marginLeft: "-40%",
                marginTop: "5%",
                fontSize: "20px",
                maxWidth: "100%", // Adjust the value as needed
                fontFamily: "PT Sans",
                display: "flex",
                alignItems: "center", // Center-align the items vertically
              }}>
              <Box sx={{ marginRight: "10px" }}>Phân loại:</Box>{" "}
              {/* Add margin to create space between "Đạo Diễn:" and the director's name */}
              <Typography
                sx={{
                  color: "rgba(255, 255, 255, 0.9)", // Màu chữ sáng hơn với độ trong suốt 90%
                  backgroundColor: "rgba(255, 0, 0, 0.9)", // Màu nền đỏ sáng hơn với độ trong suốt 90%
                  fontSize: "12px",
                  fontFamily: "PT Sans",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)", // Đánh bóng
                }}>
                T13
              </Typography>
              <Typography
                paragraph={true}
                sx={{
                  color: "white",
                  marginLeft: "2%",
                  marginTop: "2%",
                  fontSize: "20px",
                  maxWidth: "100%", // Adjust the value as needed
                  fontFamily: "PT Sans",
                  display: "flex",
                  alignItems: "center", // Center-align the items vertically
                  color: "skyblue",
                }}>
                Phim phổ biến đến người xem từ 13 tuổi trở lên
              </Typography>
            </Typography>

            <Typography
              paragraph={true}
              sx={{
                color: "white",
                marginLeft: "-40%",
                marginTop: "-2%",
                fontSize: "20px",
                maxWidth: "100%", // Adjust the value as needed
                fontFamily: "PT Sans",
                display: "flex",
                alignItems: "center", // Center-align the items vertically
              }}>
              <Box sx={{ marginRight: "10px" }}>Định dạng:</Box>{" "}
              {/* Add margin to create space between "Đạo Diễn:" and the director's name */}
              <Typography
                sx={{
                  color: "rgba(255, 255, 255, 0.9)",
                  backgroundColor: "rgba(0, 128, 0, 0.9)", // Màu xanh sáng hơn với độ trong suốt 90%
                  fontSize: "12px",
                  fontFamily: "PT Sans",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
                }}>
                2D
              </Typography>
            </Typography>
            <Typography
              paragraph={true}
              sx={{
                color: "white",
                marginLeft: "-40%",
                marginTop: "5%",
                fontSize: "20px",
                maxWidth: "100%", // Adjust the value as needed
                fontFamily: "PT Sans",
                display: "flex",
                alignItems: "center", // Center-align the items vertically
              }}>
              <Box sx={{ marginRight: "10px" }}>Đạo Diễn:</Box>{" "}
              {/* Add margin to create space between "Đạo Diễn:" and the director's name */}
              <Typography
                sx={{
                  color: "skyblue",
                  fontSize: "18px",
                  fontFamily: "PT Sans",
                }}>
                {movieData.movieDirector}
              </Typography>
            </Typography>

            <Typography
              paragraph={true}
              sx={{
                color: "white",
                marginLeft: "-40%",
                marginTop: "-1%",
                fontSize: "20px",
                maxWidth: "100%", // Adjust the value as needed
                fontFamily: "PT Sans",
                display: "flex",
                alignItems: "center", // Center-align the items vertically
              }}>
              <Box sx={{ marginRight: "10px" }}>Diễn Viên:</Box>{" "}
              {/* Add margin to create space between "Đạo Diễn:" and the director's name */}
              <Typography
                variant="body1"
                sx={{
                  color: "skyblue",
                  fontSize: "18px",
                  fontFamily: "PT Sans",
                }}>
                {movieData.movieActor}
              </Typography>
            </Typography>

            <Typography
              paragraph={true}
              sx={{
                color: "white",
                marginLeft: "-40%",
                marginTop: "-1%",
                fontSize: "20px",
                maxWidth: "100%", // Adjust the value as needed
                fontFamily: "PT Sans",
                display: "flex",
                alignItems: "center", // Center-align the items vertically
              }}>
              <Box sx={{ marginRight: "10px" }}>Thể Loại:</Box>{" "}
              {/* Add margin to create space between "Đạo Diễn:" and the director's name */}
              <Typography
                variant="body1"
                sx={{
                  color: "skyblue",
                  fontSize: "18px",
                  fontFamily: "PT Sans",
                }}>
                {movieData.movieCategory}
              </Typography>
            </Typography>

            <Typography
              paragraph={true}
              sx={{
                color: "white",
                marginLeft: "-40%",
                marginTop: "-1%",
                fontSize: "20px",
                maxWidth: "100%", // Adjust the value as needed
                fontFamily: "PT Sans",
                display: "flex",
                alignItems: "center", // Center-align the items vertically
              }}>
              <Box sx={{ marginRight: "10px" }}>Thời Lượng:</Box>{" "}
              {/* Add margin to create space between "Đạo Diễn:" and the director's name */}
              <Typography
                variant="body1"
                sx={{
                  color: "skyblue",
                  fontSize: "18px",
                  fontFamily: "PT Sans",
                }}>
                {movieData.movieDuration} phút
              </Typography>
            </Typography>

            <Typography
              paragraph={true}
              sx={{
                color: "white",
                marginLeft: "-40%",
                marginTop: "-1%",
                fontSize: "20px",
                maxWidth: "100%", // Adjust the value as needed
                fontFamily: "PT Sans",
                display: "flex",
                alignItems: "center", // Center-align the items vertically
              }}>
              <Box sx={{ marginRight: "10px" }}>Ngôn Ngữ:</Box>{" "}
              {/* Add margin to create space between "Đạo Diễn:" and the director's name */}
              <Typography
                variant="body1"
                sx={{
                  color: "skyblue",
                  fontSize: "18px",
                  fontFamily: "PT Sans",
                }}>
                {movieData.language}
              </Typography>
            </Typography>

            <Typography
              paragraph={true}
              sx={{
                color: "white",
                marginLeft: "-40%",
                marginTop: "-1%",
                fontSize: "20px",
                maxWidth: "100%", // Adjust the value as needed
                fontFamily: "PT Sans",
                display: "flex",
                alignItems: "center", // Center-align the items vertically
              }}>
              <Box sx={{ marginRight: "10px" }}>Quốc Gia:</Box>{" "}
              {/* Add margin to create space between "Đạo Diễn:" and the director's name */}
              <Typography
                variant="body1"
                sx={{
                  color: "skyblue",
                  fontSize: "18px",
                  fontFamily: "PT Sans",
                }}>
                {movieData.country}
              </Typography>
            </Typography>
          </Grid>
         
        
        </Grid>
      )
    );
  }

  return (
    <>
       <Grid container p={11} spacing={10}>
          {renderData()}
         



       </Grid>
     
       <ListComment movieId={params.movieId} />
     
      <Comment movieId={params.movieId} />
    
    </>
  );
}

export default Detail;
