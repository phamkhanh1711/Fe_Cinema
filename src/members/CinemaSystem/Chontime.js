import { useEffect, useState } from "react";
import DatePicker from "react-datepicker"; // Add this line to import DatePicker
import "react-datepicker/dist/react-datepicker.css";
import logo from "/FE_CGV/fecenima/src/img/logo.png";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
function Chontime() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  const MyContainer = ({ className, children }) => {
    return (
      <div className="my-container">
        <div className="inner-container">{children}</div>
      </div>
    );
  };

  function handledetail() {
    navigate("/chonghe");
  }
  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <div id="col-1063932164" className="col small-12 large-12">
          <div className="col-inner1 text-center">
            <div id="text-1009336684" className="text">
              <h2 id="p1">Bước 1: Chọn thời gian và địa điểm</h2>
            </div>
          </div>

          <main id="main" className="dark dark-page-wrapper">
            <div id="content" className="content-area page-wrapper" role="main">
              <div className="row row-main">
                <div className="large-12 col" style={{ paddingBottom: "0px" }}>
                  <div className="col-inner">
                    <div className="site-loader">
                      <div className="site-loader-container">
                        <div className="custom-loader" />
                      </div>
                    </div>
                    <div id="app" data-v-app>
                      <div>
                        <div className="row">
                          <div className="col medium-12 small-12 large-4">
                            <div className="col-inner">
                              <div className="c-box">
                                {/* Placeholder for date picker */}
                                <div className="dp__main dp__theme_dark dp__flex_display order-datepicker">
                                  {/* Hiển thị date picker */}
                                  <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    calendarContainer={MyContainer}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col medium-12 small-12 large-8">
                            <div className="col-inner">
                              <div className="c-box pb-0">
                                <div
                                  className="c-box"
                                  style={{ marginBottom: "20px" }}
                                >
                                  <div className="mt-list-widget">
                                    <ul>
                                      <li>
                                        <a href={logo}>BHD Star Le Van Viet</a>
                                      </li>
                                    </ul>
                                  </div>
                                  <p
                                    className="is-small"
                                    style={{ margin: "10px 0px 20px" }}
                                  >
                                    Tầng 4, Vincom Plaza Lê Văn Việt, 50 Lê Văn
                                    Việt, P.Hiệp Phú, Quận 9, TP.HCM
                                  </p>
                                  <div className="row row-small">
                                    <div className="col medium-4 small-12 large-3">
                                      <div className="col-inner">
                                        <div className="session-item film-item">
                                          <div
                                            onClick={handledetail}
                                            className="time text-center"
                                          >
                                            10:15
                                          </div>
                                          <div className="meta text-center">
                                            <span className="type">Phụ đề</span>
                                            <span className="format">2D</span>
                                            <span
                                              className="first-class"
                                              style={{ display: "none" }}
                                            >
                                              FIRST CLASS
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col medium-4 small-12 large-3">
                                      <div className="col-inner">
                                        <div className="session-item film-item">
                                          <div className="time text-center">
                                            11:00
                                          </div>
                                          <div className="meta text-center">
                                            <span className="type">Phụ đề</span>
                                            <span className="format">2D</span>
                                            <span
                                              className="first-class"
                                              style={{ display: "none" }}
                                            >
                                              FIRST CLASS
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* Các cột khác được sắp xếp tương tự */}
                                  </div>
                                </div>
                                <div
                                  className="c-box"
                                  style={{ marginBottom: "20px" }}
                                >
                                  <div className="mt-list-widget">
                                    <ul>
                                      <li>
                                        <a href="#">BHD Star Pham Hung</a>
                                      </li>
                                    </ul>
                                  </div>
                                  <p
                                    className="is-small"
                                    style={{ margin: "10px 0px 20px" }}
                                  >
                                    Tầng 4, TTTM Satra Phạm Hùng, C6/27 Phạm
                                    Hùng, Bình Chánh, TPHCM.
                                  </p>
                                  <div className="row row-small">
                                    <div className="col medium-4 small-12 large-3">
                                      <div className="col-inner">
                                        <div className="session-item film-item">
                                          <div className="time text-center">
                                            10:15
                                          </div>
                                          <div className="meta text-center">
                                            <span className="type">Phụ đề</span>
                                            <span className="format">2D</span>
                                            <span
                                              className="first-class"
                                              style={{ display: "none" }}
                                            >
                                              FIRST CLASS
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col medium-4 small-12 large-3">
                                      <div className="col-inner">
                                        <div className="session-item film-item">
                                          <div className="time text-center">
                                            11:00
                                          </div>
                                          <div className="meta text-center">
                                            <span className="type">Phụ đề</span>
                                            <span className="format">2D</span>
                                            <span
                                              className="first-class"
                                              style={{ display: "none" }}
                                            >
                                              FIRST CLASS
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* Các cột khác được sắp xếp tương tự */}
                                  </div>
                                </div>
                                <div
                                  className="c-box"
                                  style={{ marginBottom: "20px" }}
                                >
                                  <div className="mt-list-widget">
                                    <ul>
                                      <li>
                                        <a href="#">BHD Star Quang Trung</a>
                                      </li>
                                    </ul>
                                  </div>
                                  <p
                                    className="is-small"
                                    style={{ margin: "10px 0px 20px" }}
                                  >
                                    Tầng B1&amp;B2, TTTM Vincom, số 190 Quang
                                    Trung, Gò Vấp, Tp.HCM
                                  </p>
                                  <div className="row row-small">
                                    <div className="col medium-4 small-12 large-3">
                                      <div className="col-inner">
                                        <div className="session-item film-item">
                                          <div className="time text-center">
                                            10:15
                                          </div>
                                          <div className="meta text-center">
                                            <span className="type">Phụ đề</span>
                                            <span className="format">2D</span>
                                            <span
                                              className="first-class"
                                              style={{ display: "none" }}
                                            >
                                              FIRST CLASS
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col medium-4 small-12 large-3">
                                      <div className="col-inner">
                                        <div className="session-item film-item">
                                          <div className="time text-center">
                                            11:00
                                          </div>
                                          <div className="meta text-center">
                                            <span className="type">Phụ đề</span>
                                            <span className="format">2D</span>
                                            <span
                                              className="first-class"
                                              style={{ display: "none" }}
                                            >
                                              FIRST CLASS
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* Các cột khác được sắp xếp tương tự */}
                                  </div>
                                </div>
                                <div
                                  className="c-box"
                                  style={{ marginBottom: "20px" }}
                                >
                                  <div className="mt-list-widget">
                                    <ul>
                                      <li>
                                        <a href="#">BHD Star Thao Dien</a>
                                      </li>
                                    </ul>
                                  </div>
                                  <p
                                    className="is-small"
                                    style={{ margin: "10px 0px 20px" }}
                                  >
                                    Tầng 5, TTTM Vincom Center, 159 Xa Lộ Hà
                                    Nội, Quận 2, TP.HCM
                                  </p>
                                  <div className="row row-small">
                                    <div className="col medium-4 small-12 large-3">
                                      <div className="col-inner">
                                        <div className="session-item film-item">
                                          <div className="time text-center">
                                            10:15
                                          </div>
                                          <div className="meta text-center">
                                            <span className="type">Phụ đề</span>
                                            <span className="format">2D</span>
                                            <span
                                              className="first-class"
                                              style={{ display: "none" }}
                                            >
                                              FIRST CLASS
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col medium-4 small-12 large-3">
                                      <div className="col-inner">
                                        <div className="session-item film-item">
                                          <div className="time text-center">
                                            11:00
                                          </div>
                                          <div className="meta text-center">
                                            <span className="type">Phụ đề</span>
                                            <span className="format">2D</span>
                                            <span
                                              className="first-class"
                                              style={{ display: "none" }}
                                            >
                                              FIRST CLASS
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* Các cột khác được sắp xếp tương tự */}
                                  </div>
                                </div>
                                <div
                                  className="c-box"
                                  style={{ marginBottom: "20px" }}
                                >
                                  <div className="mt-list-widget">
                                    <ul>
                                      <li>
                                        <a href="#">BHD Star 3.2</a>
                                      </li>
                                    </ul>
                                  </div>
                                  <p
                                    className="is-small"
                                    style={{ margin: "10px 0px 20px" }}
                                  >
                                    Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2,
                                    Quận 10, TPHCM
                                  </p>
                                  <div className="row row-small">
                                    <div className="col medium-4 small-12 large-3">
                                      <div className="col-inner">
                                        <div className="session-item film-item">
                                          <div className="time text-center">
                                            10:15
                                          </div>
                                          <div className="meta text-center">
                                            <span className="type">Phụ đề</span>
                                            <span className="format">2D</span>
                                            <span
                                              className="first-class"
                                              style={{ display: "none" }}
                                            >
                                              FIRST CLASS
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col medium-4 small-12 large-3">
                                      <div className="col-inner">
                                        <div className="session-item film-item">
                                          <div className="time text-center">
                                            11:00
                                          </div>
                                          <div className="meta text-center">
                                            <span className="type">Phụ đề</span>
                                            <span className="format">2D</span>
                                            <span
                                              className="first-class"
                                              style={{ display: "none" }}
                                            >
                                              FIRST CLASS
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* Các cột khác được sắp xếp tương tự */}
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
            </div>
          </main>
        </div>
      )}
    </>
  );
}

export default Chontime;
