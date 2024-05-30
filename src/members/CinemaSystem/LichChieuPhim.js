


import Stack from "@mui/material/Stack";
import { Row, Col } from "react-bootstrap";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import Aos from "aos";
import { Button } from "@mui/material";
import "aos/dist/aos.css";
import axios from "axios";
import movieselection from "../../img/movieselection.png";

function LichChieuPhim() {
  const [loading, setLoading] = useState(true);
  const [GotoTop, setGotoTop] = useState(false);
  const location = useLocation();
  useEffect(() => {
    // Sau khi trang đã được tải lại, cuộn về đầu trang
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 200) {
        setGotoTop(true);
      } else {
        setGotoTop(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    Aos.init();
  }, []);
  useEffect(() => {
    // Set a timeout to change the loading state after 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 2 seconds delay

    // Clear the timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  const navigate = useNavigate();
  function handleDetail(movieId) {
    navigate(`/detail/${movieId}`);
  }
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function closeDetail(event) {
    const parent = event.target.closest(".film-item");
    parent.querySelector(".detail-content").style.display = "none";
    parent.querySelector(".overlay").style.display = "none";
  }

  const [getData, setData] = useState([]);
  const [getMovie, setMovie] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/movie/all-current-movie")
      .then((res) => {
        console.log(res);
        setData(res.data.allCurrentMovie);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:4000/movie/all-upcoming-movie")
      .then((res) => {
        console.log(res);
        
        const reversedMovies = res.data.allUpcomingMovie.reverse();
        setMovie(reversedMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handlepay(movieId) {
    navigate(`/chontime/${movieId}`);
  }

  return (
    <>
      {loading ? (
        <CircularProgress className="loading" />
      ) : (
        <div>
          <div id="col-1063932164" class="col small-12 large-12">
            <div class="col-inner1 text-center">
              <img
                data-aos="flip-left"
                src={movieselection}
                style={{ width: "30%", marginTop: "5%" }}
              />

              <div data-aos="flip-left" id="text-1009336684" class="text">
                <h2 id="p1" style={{ marginTop: "5%" }}>
                  Vé bán trước
                </h2>
              </div>
            </div>
          </div>

          <Box
            data-aos="fade-right"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Grid
              data-aos="fade-right"
              container
              spacing={5}
              sx={{ maxWidth: "1300px", marginLeft: "13%" }}>
              {getMovie.slice(0,8).map((movie, index) => (
                <Grid
                  data-aos="fade-right"
                  key={movie.id}
                  item
                  xs={3}
                  sx={{
                    marginTop: "30px",
                    marginLeft: index !== 0 ? "-20px" : "-150px", // Điều chỉnh marginLeft cho cột đầu tiên và các cột còn lại
                    marginRight: "-10px", // Khoảng cách giữa các cột ảnh
                  }}>
                  <Stack
                    sx={{ marginLeft: "100px" }}
                    data-aos="fade-right"
                    direction="column"
                    spacing={2}
                    alignItems="center"
                    style={{ margin: "0 auto", maxWidth: "250px" }}>
                    <img
                      src={movie.movieImage}
                      sx={{ width: 250, height: 300, borderRadius: "4%" }}
                    />
                    <Row className="meta" style={{ display: "flex" }}>
                      <Col
                        xs="auto"
                        style={{
                          backgroundColor: "red",
                          color: "white",
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginRight: "10px",
                          borderRadius: "4%",
                        }}>
                        T16
                      </Col>

                      <Col
                        xs="auto"
                        style={{
                          color: "white",
                          border: "1px solid #ffd600",
                          fontSize: "12px",
                          fontWeight: "bold",
                          marginRight: "10px",
                        }}>
                        {movie.language}
                      </Col>

                      <Col
                        xs="auto"
                        style={{
                          backgroundColor: "green",
                          color: "white",
                          fontSize: "10px",
                          fontWeight: "bold",
                          borderRadius: "5px",
                        }}>
                        2D
                      </Col>
                    </Row>

                    <Typography
                      variant="h6"
                      sx={{
                        width: "100%",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "14px",
                        marginRight: "20px",
                      }}>
                      {movie.movieName}
                    </Typography>

                    <Typography
                      variant="h5"
                      sx={{
                        color: "#cccccc",
                        height: "19px",
                        marginTop: "-7%",
                        marginBottom: "10px",
                        overflow: "hidden",
                      }}>
                      Thể loại phim:
                      <span
                        style={{
                          fontSize: "16px",
                          color: "white",
                          fontWeight: "bold",
                        }}>
                        {" "}
                        {movie.movieCategory}{" "}
                      </span>
                    </Typography>

                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Button
                        variant="contained"
                        className="custom-button"
                        onClick={() => handlepay(movie.movieId)}>
                        <span style={{ fontSize: "13px", fontWeight: "bold" }}>
                          Mua vé ngay
                        </span>
                      </Button>

                      <a
                        className="button secondary is-small info-button"
                        onClick={() => handleDetail(movie.movieId)}
                        style={{
                          marginTop: "0%",
                          fontSize: "16px",
                          color: "white",
                          marginLeft: "22px",
                        }}>
                        <span></span>
                      </a>
                    </div>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Box>

          <div className="text-center">
            <div
              className="is-divider divider clearfix"
              style={{
                marginTop: "0px",
                marginBottom: "0px",
                maxWidth: "100%",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            />
          </div>

          <div
            id="gap-257196199"
            className="gap-element clearfix"
            style={{
              display: "block",
              height: "auto",
              paddingTop: "30px",
            }}></div>

          <div id="col-1063932164" class="col small-12 large-12">
            <div class="col-inner1 text-center">
              <div data-aos="flip-right" id="text-1009336684" class="text">
                <h2 id="p1">Phim đang chiếu</h2>
              </div>
            </div>
          </div>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Grid
              container
              spacing={5}
              sx={{ maxWidth: "1300px", marginLeft: "13%" }}>
              {getData.map((movie, index) => (
                <Grid
                  key={movie.id}
                  item
                  xs={3}
                  sx={{
                    marginTop: "30px",
                    marginLeft: index !== 0 ? "-20px" : "-150px", // Điều chỉnh marginLeft cho cột đầu tiên và các cột còn lại
                    marginRight: "-10px", // Khoảng cách giữa các cột ảnh
                  }}>
                  <Stack
                    sx={{ marginLeft: "100px" }}
                    data-aos="fade-right"
                    direction="column"
                    spacing={2}
                    alignItems="center"
                    style={{ margin: "0 auto", maxWidth: "250px" }}>
                    <img
                      src={movie.movieImage}
                      sx={{ width: 250, height: 300, borderRadius: "4%" }}
                    />
                    <Row className="meta" style={{ display: "flex" }}>
                      <Col
                        xs="auto"
                        style={{
                          backgroundColor: "red",
                          color: "white",
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginRight: "10px",
                          borderRadius: "4%",
                        }}>
                        T16
                      </Col>

                      <Col
                        xs="auto"
                        style={{
                          color: "white",
                          border: "1px solid #ffd600",
                          fontSize: "12px",
                          fontWeight: "bold",
                          marginRight: "10px",
                        }}>
                        {movie.language}
                      </Col>

                      <Col
                        xs="auto"
                        style={{
                          backgroundColor: "green",
                          color: "white",
                          fontSize: "10px",
                          fontWeight: "bold",
                          borderRadius: "5px",
                        }}>
                        2D
                      </Col>
                    </Row>

                    <Typography
                      variant="h6"
                      sx={{
                        width: "100%",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "14px",
                        marginRight: "20px",
                      }}>
                      {movie.movieName}
                    </Typography>

                    <Typography
                      variant="h5"
                      sx={{
                        color: "#cccccc",
                        height: "19px",
                        marginTop: "-7%",
                        marginBottom: "10px",
                        overflow: "hidden",
                      }}>
                      Thể loại phim:
                      <span
                        style={{
                          fontSize: "16px",
                          color: "white",
                          fontWeight: "bold",
                        }}>
                        {" "}
                        {movie.movieCategory}{" "}
                      </span>
                    </Typography>

                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Button
                        variant="contained"
                        className="custom-button"
                        onClick={() => handlepay(movie.movieId)}>
                        <span style={{ fontSize: "13px", fontWeight: "bold" }}>
                          Mua vé ngay
                        </span>
                      </Button>

                      <a
                        className="button secondary is-small info-button"
                        onClick={() => handleDetail(movie.movieId)}
                        style={{
                          marginTop: "0%",
                          fontSize: "16px",
                          color: "white",
                          marginLeft: "22px",
                        }}>
                        <span></span>
                      </a>
                    </div>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Box>

          <div className="text-center">
            <div
              className="is-divider divider clearfix"
              style={{
                marginTop: "0px",
                marginBottom: "0px",
                maxWidth: "100%",
                height: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            />
          </div>

          <div id="col-1063932164" class="col small-12 large-12">
            <div class="col-inner1 text-center">
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                id="text-1009336684"
                class="text">
                <h2 id="p1">Phim sắp chiếu</h2>
              </div>
              <Box
                data-aos="fade-right"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Grid
                  data-aos="fade-right"
                  container
                  spacing={5}
                  sx={{ maxWidth: "1300px", marginLeft: "17%" }}>
                  {getMovie.slice(8,19).map((movie, index) => (
                    <Grid
                      data-aos="fade-right"
                      key={movie.id}
                      item
                      xs={3}
                      sx={{
                        marginTop: "30px",
                        marginLeft: index !== 0 ? "-50px" : "-50px", // Điều chỉnh marginLeft cho cột đầu tiên và các cột còn lại
                        marginRight: "-10px", // Khoảng cách giữa các cột ảnh
                      }}>
                      <Stack
                        sx={{ marginLeft: "100px" }}
                        data-aos="fade-right"
                        direction="column"
                        spacing={2}
                        alignItems="center"
                        style={{ margin: "0 auto", maxWidth: "250px" }}>
                        <img
                          src={movie.movieImage}
                          sx={{ width: 250, height: 300, borderRadius: "4%" }}
                        />
                        <Row className="meta" style={{ display: "flex" }}>
                          <Col
                            xs="auto"
                            style={{
                              backgroundColor: "red",
                              color: "white",
                              fontSize: "10px",
                              fontWeight: "bold",
                              marginRight: "10px",
                              borderRadius: "4%",
                            }}>
                            T16
                          </Col>

                          <Col
                            xs="auto"
                            style={{
                              color: "white",
                              border: "1px solid #ffd600",
                              fontSize: "12px",
                              fontWeight: "bold",
                              marginRight: "10px",
                            }}>
                            {movie.language}
                          </Col>

                          <Col
                            xs="auto"
                            style={{
                              backgroundColor: "green",
                              color: "white",
                              fontSize: "10px",
                              fontWeight: "bold",
                              borderRadius: "5px",
                            }}>
                            2D
                          </Col>
                        </Row>

                        <Typography
                          variant="h6"
                          sx={{
                            width: "100%",
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "14px",
                            marginRight: "20px",
                          }}>
                          {movie.movieName}
                        </Typography>

                        <Typography
                          variant="h5"
                          sx={{
                            color: "#cccccc",
                            height: "19px",
                            marginTop: "-7%",
                            marginBottom: "10px",
                            overflow: "hidden",
                          }}>
                          Thể loại phim:
                          <span
                            style={{
                              fontSize: "16px",
                              color: "white",
                              fontWeight: "bold",
                            }}>
                            {" "}
                            {movie.movieCategory}{" "}
                          </span>
                        </Typography>

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <li
                            className="buttons"
                            style={{
                              height: "50px",
                              listStyleType: "none",
                            }}>
                            <a
                              onClick={() => handleDetail(movie.movieId)}
                              title="THE GARFIELD MOVIE"
                              data-url="https://bhdstar.vn/phim/the-garfield-movie/"
                              data-id="1115"
                              class="button secondary is-small non-ticket-button">
                              <span style={{ color: "white" }}>
                                Thông tin chi tiết
                              </span>
                            </a>
                          </li>
                        </div>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </div>
          </div>

          <div class="row large-columns-2 medium-columns-2 small-columns-1">
            <div id="col-1675063463" class="col small-12 large-12">
              <div class="col-inner"></div>
            </div>
          </div>

          <section
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className="section"
            id="section_82365801">
            <div class="bg section-bg fill bg-fill bg-loaded"></div>

            <div className="section-content relative">
              <div
                className="gap-element clearfix"
                style={{
                  display: "block",
                  height: "auto",
                  paddingTop: "30px",
                }}></div>

              <div className="row align-middle align-center card-member-row">
                <div className="col-12 col-md-12">
                  <div className="col-inner text-center">
                    <div className="text mx-auto">
                      <p>
                        <img
                          decoding="async"
                          loading="lazy"
                          className="aligncenter wp-image-74"
                          src="https://demo.bhdstar.vn/wp-content/uploads/2023/08/bhdstarmember.png"
                          alt=""
                          width="322"
                          height="62"
                          srcSet="https://bhdstar.vn/wp-content/uploads/2023/08/bhdstarmember.png 530w, https://bhdstar.vn/wp-content/uploads/2023/08/bhdstarmember-300x58.png 300w"
                          sizes="(max-width: 322px) 100vw, 322px"
                        />
                      </p>
                    </div>
                  </div>
                </div>

                <div className="cangiua">
                  <div className="col-12 col-md-4 order-md-last">
                    <div className="col-inner">
                      <div className="text">
                        <a href="#" title="Star">
                          <img
                            src="https://bhdstar.vn/wp-content/uploads/2023/08/image-16.png"
                            alt="Star"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 order-md-last">
                    <div className="col-inner">
                      <div className="text">
                        <a href="#" title="Gold">
                          <img
                            src="https://bhdstar.vn/wp-content/uploads/2023/08/image-17.png"
                            alt="Gold"
                          />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-4 order-md-last">
                    <div className="col-inner">
                      <div className="text">
                        <a href="#" title="Gold">
                          <img
                            src="https://bhdstar.vn/wp-content/uploads/2023/08/image-17.png"
                            alt="Gold"
                          />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-4 order-md-last">
                    <div className="col-inner">
                      <div className="text">
                        <a href="#" title="Gold">
                          <img
                            src="https://bhdstar.vn/wp-content/uploads/2023/08/image-17.png"
                            alt="Gold"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-12">
                  <div className="col-inner text-center">
                    <div className="text mx-auto">
                      <a
                        href="#"
                        target="_self"
                        className="button primary is-outline">
                        <span>Đăng ký ngay</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {GotoTop && (
            <button
              style={{
                backgroundColor: "skyblue",
                position: "fixed",
                right: 20,
                bottom: 20,
              }}
              onClick={scrollToTop}>
              <i class="fas fa-arrow-up"></i>
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default LichChieuPhim;
