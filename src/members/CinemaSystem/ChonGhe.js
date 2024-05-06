import { Link, useNavigate, useParams } from "react-router-dom";
import ghethuong from "/FE_CGV/fecenima/src/img/ghethuong.png";
import ghevip from "/FE_CGV/fecenima/src/img/ghevip.png";
import ghedoi from "/FE_CGV/fecenima/src/img/ghedoi.png";
import ghedachon from "/FE_CGV/fecenima/src/img/ghedachon.png";
import ghedaban from "/FE_CGV/fecenima/src/img/ghedaban.png";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import LinearProgress from "@mui/material/LinearProgress";
import CountDownTimer from "./CountDownTimer";
import Swal from "sweetalert2";
import { useCountdownContext } from "../../CountdownContext";
import axios from "axios";
function ChonGhe() {
  
  useEffect(() => {
    Aos.init();
  }, []);

  const handleOnComplete = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Hết Thời Gian Mua Vé",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const [selectedImage, setSelectedImage] = useState(ghethuong);

  const images = [ghedachon, ghethuong];
  const [selectedSeats, setSelectedSeats] = useState({ A1: false, A2: false });
  const handleClick = (seat) => {
    setSelectedSeats({
      ...selectedSeats,
      [seat]: !selectedSeats[seat], // Toggle the selected state of the seat
    });
  };

  // const handleImageClick = (index) => {
  //   setSelectedImage(images[index]);
  // };

  const showId = useParams()
  console.log(showId)
  useEffect(() => {
    axios.get(`http://localhost:4000/seat/allSeat/${showId}`).then((response) => {
      console.log(response);
    });
    
    
}, [showId]);
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

                                    <tr>
                                      <td>A</td>
                                      {Array.from(
                                        { length: 19 },
                                        (_, index) => (
                                          <td key={`A${index + 1}`} colSpan={1}>
                                            <div className="stack stack-row justify-center items-center">
                                              <img
                                                src={
                                                  selectedSeats[`A${index + 1}`]
                                                    ? ghedachon
                                                    : ghethuong
                                                }
                                                alt={`Seat A${index + 1}`}
                                                onClick={() =>
                                                  handleClick(`A${index + 1}`)
                                                }
                                              />
                                            </div>
                                          </td>
                                        )
                                      )}
                                      <td>A</td>
                                    </tr>

                                    <tr>
                                      <td>B</td>
                                      {Array.from(
                                        { length: 19 },
                                        (_, index) => (
                                          <td key={`B${index + 1}`} colSpan={1}>
                                            <div className="stack stack-row justify-center items-center">
                                              <img
                                                src={
                                                  selectedSeats[`B${index + 1}`]
                                                    ? ghedachon
                                                    : ghethuong
                                                }
                                                alt={`Seat B${index + 1}`}
                                                onClick={() =>
                                                  handleClick(`B${index + 1}`)
                                                }
                                              />
                                            </div>
                                          </td>
                                        )
                                      )}
                                      <td>B</td>
                                    </tr>

                                    <tr>
                                      <td>C</td>
                                      {Array.from(
                                        { length: 19 },
                                        (_, index) => (
                                          <td key={`C${index + 1}`} colSpan={1}>
                                            <div className="stack stack-row justify-center items-center">
                                              <img
                                                src={
                                                  selectedSeats[`C${index + 1}`]
                                                    ? ghedachon
                                                    : ghethuong
                                                }
                                                alt={`Seat C${index + 1}`}
                                                onClick={() =>
                                                  handleClick(`C${index + 1}`)
                                                }
                                              />
                                            </div>
                                          </td>
                                        )
                                      )}
                                      <td>C</td>
                                    </tr>

                                    <tr>
                                      <td>D</td>
                                      {Array.from(
                                        { length: 19 },
                                        (_, index) => (
                                          <td key={`D${index + 1}`} colSpan={1}>
                                            <div className="stack stack-row justify-center items-center">
                                              <img
                                                src={
                                                  selectedSeats[`D${index + 1}`]
                                                    ? ghedachon
                                                    : ghethuong
                                                }
                                                alt={`Seat D${index + 1}`}
                                                onClick={() =>
                                                  handleClick(`D${index + 1}`)
                                                }
                                              />
                                            </div>
                                          </td>
                                        )
                                      )}
                                      <td>D</td>
                                    </tr>

                                    <tr>
                                      <td>E</td>
                                      {Array.from(
                                        { length: 19 },
                                        (_, index) => (
                                          <td key={`E${index + 1}`} colSpan={1}>
                                            <div className="stack stack-row justify-center items-center">
                                              <img
                                                src={
                                                  selectedSeats[`E${index + 1}`]
                                                    ? ghedachon
                                                    : ghethuong
                                                }
                                                alt={`Seat E${index + 1}`}
                                                onClick={() =>
                                                  handleClick(`E${index + 1}`)
                                                }
                                              />
                                            </div>
                                          </td>
                                        )
                                      )}
                                      <td>E</td>
                                    </tr>
                                    <tr>
                                      <td>F</td>
                                      {Array.from(
                                        { length: 19 },
                                        (_, index) => (
                                          <td key={`F${index + 1}`} colSpan={1}>
                                            <div className="stack stack-row justify-center items-center">
                                              <img
                                                src={
                                                  selectedSeats[`F${index + 1}`]
                                                    ? ghedachon
                                                    : ghethuong
                                                }
                                                alt={`Seat F${index + 1}`}
                                                onClick={() =>
                                                  handleClick(`F${index + 1}`)
                                                }
                                              />
                                            </div>
                                          </td>
                                        )
                                      )}
                                      <td>F</td>
                                    </tr>

                                    <tr>
                                      <td>G</td>
                                      {Array.from(
                                        { length: 19 },
                                        (_, index) => (
                                          <td key={`G${index + 1}`} colSpan={1}>
                                            <div className="stack stack-row justify-center items-center">
                                              <img
                                                src={
                                                  selectedSeats[`G${index + 1}`]
                                                    ? ghedachon
                                                    : ghethuong
                                                }
                                                alt={`Seat G${index + 1}`}
                                                onClick={() =>
                                                  handleClick(`G${index + 1}`)
                                                }
                                              />
                                            </div>
                                          </td>
                                        )
                                      )}
                                      <td>G</td>
                                    </tr>

                                    <tr>
                                      <td>H</td>
                                      {Array.from(
                                        { length: 19 },
                                        (_, index) => (
                                          <td key={`H${index + 1}`} colSpan={1}>
                                            <div className="stack stack-row justify-center items-center">
                                              <img
                                                src={
                                                  selectedSeats[`H${index + 1}`]
                                                    ? ghedachon
                                                    : ghethuong
                                                }
                                                alt={`Seat H${index + 1}`}
                                                onClick={() =>
                                                  handleClick(`H${index + 1}`)
                                                }
                                              />
                                            </div>
                                          </td>
                                        )
                                      )}
                                      <td>H</td>
                                    </tr>

                                    <tr>
                                      <td>I</td>
                                      {Array.from(
                                        { length: 19 },
                                        (_, index) => (
                                          <td key={`I${index + 1}`} colSpan={1}>
                                            <div className="stack stack-row justify-center items-center">
                                              <img
                                                src={
                                                  selectedSeats[`I${index + 1}`]
                                                    ? ghedachon
                                                    : ghethuong
                                                }
                                                alt={`Seat I${index + 1}`}
                                                onClick={() =>
                                                  handleClick(`I${index + 1}`)
                                                }
                                              />
                                            </div>
                                          </td>
                                        )
                                      )}
                                      <td>I</td>
                                    </tr>

                                 
                                   

                                    <tr>
                                      <td>J</td>
                                      {Array.from({ length: 9 }, (_, index) => (
                                        <td key={`J${index + 1}`} colspan={2}>
                                          <div className="stack2 stack-row justify-center items-center">
                                            <img
                                              src={
                                                selectedSeats[`J${index + 1}`]
                                                  ? ghedachon
                                                  : ghedoi
                                              }
                                              alt={`Seat J${index + 1}`}
                                              onClick={() =>
                                                handleClick(`J${index + 1}`)
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
                                                handleClick(`J${index + 1}`)
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

                      <div className="col-12 col-md-12 col-lg-4">
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
                                to={{
                                  pathname: "/chondoan",
                                }}
                                className="button primary expand"
                                style={{ marginBottom: "15px" }}>
                                Chọn đồ ăn (2/4)
                              </Link>
                              <div style={{ marginBottom: "5px" }}>
                                <Link to="/chontime">← Trở lại</Link>
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

export default ChonGhe;
