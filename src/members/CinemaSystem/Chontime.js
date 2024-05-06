import { useEffect, useState } from "react";
import DatePicker from "react-datepicker"; // Add this line to import DatePicker
import "react-datepicker/dist/react-datepicker.css";
import logo from "/FE_CGV/fecenima/src/img/logo.png";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { format } from "date-fns";
import { useParams } from "react-router-dom";
import axios from "axios";
function Chontime() {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [CreateOn, setCreateOn] = useState(format(new Date(), "yyyy-MM-dd"));
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [showTime, setShowTime] = useState([]);
  console.log(showTime);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const MyContainer = ({ className, children }) => {
    return (
      <div className="my-container">
        <div className="inner-container">{children}</div>
      </div>
    );
  };

  const handleDateChange = (date) => {
    const formattedDate = format(date, "yyyy-MM-dd");
    setCreateOn(formattedDate); // Cập nhật CreateOn thành ngày mới
    setStartDate(date);
  
    if (!isPastDate(date)) {
      // Gọi lại API với ngày mới
      callApiWithDate(formattedDate);
    } else {
      setShowTime([]); // Xoá dữ liệu ngày cũ nếu là ngày trong quá khứ
    }
  };
  
  useEffect(() => {
    callApiWithDate(CreateOn); // Gọi API khi CreateOn thay đổi
  }, [CreateOn]);
  
  const callApiWithDate = (date) => {
    axios
      .get(`http://localhost:4000/show/showTicket/${movieId}`, {
        params: {
          CreateOn: date,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data.getShow.movieTypes.length > 0) {
          setShowTime(response.data.getShow.movieTypes[0].Shows);
        } else {
          setShowTime([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  
  // Kiểm tra nếu ngày đã chọn là ngày đã qua
  const isPastDate = (date) => {
    const today = new Date();
    return date.getTime() < today.getTime(); // So sánh giá trị thời gian
  };
  

  function handledetail(showId) {
    console.log("showId",showId);
    navigate(`/chonghe/${showId}`);
  }
  
  const renderShowTime = () => {
    return (
      <div className="c-box pb-0">
        <div className="c-box" style={{ marginBottom: "20px" }}>
          <div className="mt-list-widget">
            <ul>
              <li>
                <a href={logo}>BHD Star Le Van Viet</a>
              </li>
            </ul>
          </div>
          <p className="is-small" style={{ margin: "10px 0px 20px" }}>
            Tầng 4, Vincom Plaza Lê Văn Việt, 50 Lê Văn Việt, P.Hiệp Phú, Quận
            9, TP.HCM
          </p>

          <div className="row row-small">
            {showTime.length > 0 ? (
              showTime.map((show) => (
                <div
                  key={show.showId}
                  className="col medium-4 small-12 large-3"
                >
                  <div className="col-inner">
                    <div className="session-item film-item">
                    <div  onClick={() => handledetail(show.showId)}  className="time text-center">{show.startTime}</div>
                      
                      <div className="meta text-center">
                        <span className="type">Phụ đề</span>
                        <span className="format">2D</span>
                        <span className="first-class" style={{ display: "none" }}>
                          FIRST CLASS
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center">Không có lịch chiếu</div>
            )}
          </div>
        </div>
      </div>
    );
  };


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
                                <div className="dp__main dp__theme_dark dp__flex_display order-datepicker">
                                  {/* Hiển thị date picker */}
                                  <DatePicker
                                    selected={startDate}
                                    onChange={handleDateChange}
                                    calendarContainer={MyContainer}
                                    dateFormat="yyyy-MM-dd"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col medium-12 small-12 large-8">
                            <div className="col-inner">{renderShowTime()}</div>
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
