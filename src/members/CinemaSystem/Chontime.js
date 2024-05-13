import { useEffect, useState } from "react";
import DatePicker from "react-datepicker"; // Add this line to import DatePicker
import "react-datepicker/dist/react-datepicker.css";
import logo from "/FE_CGV/fecenima/src/img/logo.png";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { format } from "date-fns";
import { useParams } from "react-router-dom";
import axios from "axios";
import { set } from "lodash";
function Chontime() {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [CreateOn, setCreateOn] = useState(format(new Date(), "yyyy-MM-dd"));
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [showTime, setShowTime] = useState([]);
  const [typeName, setTypeName] = useState([]);
  const [movieName, setMovieName] = useState([]);

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
    if (date) {
      const formattedDate = format(date, "yyyy-MM-dd");
      console.log("New Date:", formattedDate); // Kiểm tra xem ngày mới đã được cập nhật hay không
      setStartDate(date);
      setCreateOn(formattedDate);
      if (!isPastDate(date)) {
        callApiWithDate(formattedDate);
      } else {
        setShowTime([]);
      }
    }
  };
  


  useEffect(() => {
    callApiWithDate(CreateOn);
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
      const movieName = response.data.getShow.movieName;
      setMovieName(movieName);
      const showTime = response.data.getShow.movieTypes[0].Shows;
      setShowTime(showTime);
      const typeName = response.data.getShow.movieTypes[0].typeName;
      setTypeName(typeName);
      setLoading(false); // Dừng hiển thị loading khi dữ liệu được load thành công
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
  const today = new Date();
  function handledetail(
    showId,
    startTime,
    movieName,
    cinemaHallId,
    CreateOn,
    typeName
  ) {
    // Create an object with the showId, startTime, and movieName
    const showInfo = {
      showId: showId,
      startTime: startTime,
      movieName: movieName,
      cinemaHallId: cinemaHallId,
      CreateOn: CreateOn,
      typeName: typeName,
    };

    let showsArray = []; // Initialize an empty array to store show information

    // Check if there's any existing data in local storage
    let storedShows = localStorage.getItem("shows");

    const existingIndex = showsArray.findIndex(
      (show) => show.showId === showId
    );

    if (existingIndex === -1) {
      // If the show is not already in the array, add it
      showsArray.push(showInfo);
    } else {
      // If the show is already in the array, remove it
      showsArray.splice(existingIndex, 1);
    }

    // Save the updated array back to local storage
    localStorage.setItem("shows", JSON.stringify(showsArray));

    // Log the showId, startTime, and movieName for confirmation
    // console.log("showId:", showId);
    // console.log("startTime:", startTime);
    // console.log("movieName:", movieName);
    // console.log("cinemaHallId:", cinemaHallId);
    // console.log("CreateOn:", CreateOn);
    // console.log("typeName:", typeName);

    navigate(`/chonghe/${showId}`);
  }

  const renderShowTime = () => {
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="c-box pb-0">
        <div className="c-box" style={{ marginBottom: "20px" }}>
          <div className="mt-list-widget">
            <p>
              Tầng 4, Vincom Plaza Lê Văn Việt, 50 Lê Văn Việt, P.Hiệp Phú, Quận
              9, TP.HCM
            </p>

            <ul>
              <li>
                <a href={logo}>BHD Star </a>
              </li>
            </ul>
          </div>

          <div className="row row-small">
            {typeName && movieName && showTime.length > 0 ? (
              showTime.map((show) => (
                <div
                  key={show.showId}
                  className="col medium-4 small-12 large-3">
                  <div className="col-inner">
                    <div className="session-item film-item">
                      <div
                        onClick={() =>
                          handledetail(
                            show.showId,
                            show.startTime,
                            movieName,
                            show.cinemaHallId,
                            show.CreateOn,
                            typeName
                          )
                        }
                        className="time text-center">
                        {show.startTime}
                      </div>
                      <div className="meta text-center">
                        <span className="type">Phụ đề</span>
                        <span className="format">{typeName}</span>
                        <span
                          className="first-class"
                          style={{ display: "none" }}>
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
                                    minDate={today}
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
