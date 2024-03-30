import React, { useEffect, useState } from "react";
import logomai from "/FE_CGV/fecenima/src/img/logomai.png";
import thanhguom from "/FE_CGV/fecenima/src/img/thanhguom.png";
import mai from "/FE_CGV/fecenima/src/img/mai.jpg";
import chibau from "/FE_CGV/fecenima/src/img/chibau.png";
import madam from "/FE_CGV/fecenima/src/img/madam.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { CircularProgress } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
function Home() {
  const [loading, setLoading] = useState(true);

  
  const location = useLocation();

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [location.pathname.includes("/chontime")]);

  const navigate = useNavigate();
  function handleDetail(event) {
    navigate("/comment");
  }

  function closeDetail(event) {
    const parent = event.target.closest(".film-item");
    parent.querySelector(".detail-content").style.display = "none";
    parent.querySelector(".overlay").style.display = "none";
  }
  function handlepay() {
    navigate("/chontime");
  }
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    logomai,
    thanhguom,
    "https://bhdstar.vn/wp-content/uploads/2024/03/quatang8.3-web-1920.1080.jpg",
  ];

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <section className="sc-ehvNnt kEeQkC">
        <div className="sc-laZRCg dMekse left show" onClick={goToPreviousImage}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>


        <div className="sc-gGvHcT fbqXJq">
          <div className="sc-ckEbSK EhTEH slider">
            <img
              src={images[currentImageIndex]}
              alt="Not Banner"
              className="sc-fbYMXx hguJuF slide-image" // Thêm class mới slide-image
            />
          </div>
        </div>
        <div className="sc-laZRCg dMekse right show" onClick={goToNextImage}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </section>

      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          <div id="col-1063932164" class="col small-12 large-12">
            <div class="col-inner1 text-center">
              <div data-aos="flip-left" id="text-1009336684" class="text">
                <h2 id="p1">Vé bán trước</h2>
              </div>
            </div>
          </div>

          <div className="row large-columns-2 medium-columns-2 small-columns-1">
            <div id="col-1675063463" class="col small-12 large-12">
              <div className="col-inner">
                <div data-aos="fade-right" className="col film-col-item">
                  <div class="col-inner">
                    <div class="row row-collapse align-center film-row-item">
                      <div
                        id="col-1452808497"
                        class="col film-item small-12 large-12"
                      >
                        <ul class="col-inner">
                          <li class="text thumb">
                            <a
                              title="DUNE: PART II"
                              class=""
                              data-url="https://bhdstar.vn/phim/dune-part-ii/"
                              href="#filmQuickView"
                              data-id="34495"
                            >
                              <img
                                class="aligncenter size-medium wp-image-67"
                                src="https://bhdstar.vn/wp-content/uploads/2024/02/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-2.jpg"
                                alt="DUNE: PART II"
                              />
                            </a>
                          </li>
                          <li class="meta">
                            <span class="age-limit T16">T16</span>
                            <span class="type">Phụ đề</span>
                            <span class="format">2D</span>
                          </li>
                          <h4 class="title text-uppercase">DUNE: PART II</h4>
                          <li class="cats">
                            Thể loại phim:{" "}
                            <a
                              href="https://bhdstar.vn/the-loai-phim/action/"
                              title="Action"
                            >
                              Action
                            </a>
                          </li>
                          <li className="buttons">
                            <a className="button primary is-small ticket-button">
                              <span onClick={handlepay}>
                                {" "}
                                <FontAwesomeIcon icon={faTicket} /> Mua vé ngay
                              </span>
                            </a>
                            <a
                              className="button secondary is-small info-button"
                              onClick={handleDetail}
                            >
                              <span></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div data-aos="fade-right" className="col film-col-item">
                  <div className="col-inner">
                    <div className="row row-collapse align-center film-row-item">
                      <div
                        id="col-1452808497"
                        class="col film-item small-12 large-12"
                      >
                        <ul class="col-inner">
                          <li class="text thumb">
                            <a
                              title="MAI"
                              class=""
                              data-url="https://bhdstar.vn/phim/dune-part-ii/"
                              href="#filmQuickView"
                              data-id="34495"
                            >
                              <img
                                class="aligncenter size-medium wp-image-67"
                                src={mai}
                                alt="MAI"
                              />
                            </a>
                          </li>
                          <li class="meta">
                            <span class="age-limit T16">T18</span>
                            <span class="type">Phụ đề</span>
                            <span class="format">2D</span>
                          </li>
                          <h4 class="title text-uppercase">MAI</h4>
                          <li class="cats">
                            Thể loại phim:{" "}
                            <a
                              href="https://bhdstar.vn/the-loai-phim/action/"
                              title="Action"
                            >
                              Drama
                            </a>
                          </li>
                          <li class="buttons">
                            <a
                              onclick="ldapp_bookNow('Phim này chỉ dành cho trẻ em trên 16 tuổi. Vui lòng cân nhắc khi mua vé. BQL Rạp sẽ phải từ chối cho vào nếu sai quy định.', 'dune-part-ii');return false;"
                              href="/"
                              target="_self"
                              class="button primary is-small ticket-button"
                            >
                              <span>
                                {" "}
                                <FontAwesomeIcon icon={faTicket} /> Mua vé ngay
                              </span>
                            </a>
                            <a
                              className="button secondary is-small info-button"
                              onClick={handleDetail}
                            >
                              <span></span>
                            </a>
                            <div
                              className="overlay"
                              style={{ display: "none" }}
                              onClick={closeDetail}
                            ></div>

                            <div
                              className="detail-content"
                              style={{ display: "none" }}
                            >
                              <div
                                id="filmQuickView"
                                className="lightbox-by-id lightbox-content lightbox-white"
                                style={{
                                  maxWidth: "1100px",
                                  padding: "10px 40px",
                                }}
                              >
                                <section
                                  className="section"
                                  id="section_39126402"
                                >
                                  <div className="bg section-bg fill bg-fill bg-loaded" />
                                  <div className="section-content relative">
                                    <div
                                      id="gap-991741491"
                                      className="gap-element clearfix"
                                      style={{
                                        display: "block",
                                        height: "auto",
                                      }}
                                    />
                                    <div
                                      className="row single-film-video-row"
                                      id="row-1669531677"
                                    >
                                      <div
                                        id="col-1682650030"
                                        className="col medium-12 small-12 large-12"
                                      >
                                        <div className="col-inner text-center">
                                          <div className="trailer">
                                            <iframe
                                              title="(Official Trailer) DUNE 2 - Hành Tinh Cát Phần 2 - Trailer 3 | DKKC: 01.03.2024"
                                              width={640}
                                              height={360}
                                              // src="https://www.youtube.com/embed/gdVNnwEgSPE?feature=oembed"
                                              frameBorder={0}
                                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                              allowFullScreen
                                            />
                                          </div>
                                          <a
                                            style={{ margin: "0px" }}
                                            className="button trailer-viewer white is-outline is-small"
                                            href="#"
                                            onclick="toggleTrailerVideo();return false;"
                                          >
                                            <span>← Xem thông tin</span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="row single-film-row"
                                      id="row-1029861583"
                                    >
                                      <div
                                        id="col-1480397685"
                                        className="col image-col medium-5 small-12 large-4"
                                      >
                                        <div className="col-inner text-center">
                                          <div
                                            className="img has-hover x md-x lg-x y md-y lg-y"
                                            id="image_2125486326"
                                          >
                                            <div className="img-inner dark">
                                              <img
                                                src={mai}
                                                alt="DUNE: PART II"
                                              />
                                            </div>
                                          </div>
                                          <a
                                            onclick="ldapp_bookNow('Phim này chỉ dành cho trẻ em trên 16 tuổi. Vui lòng cân nhắc khi mua vé. BQL Rạp sẽ phải từ chối cho vào nếu sai quy định.', 'dune-part-ii');return false;"
                                            className="button primary is-small ticket-button"
                                          >
                                            <span onclick={handlepay}>
                                              Mua vé ngay
                                            </span>
                                          </a>
                                          <a
                                            className="button trailer-viewer white is-outline is-small"
                                            href="#"
                                            onclick="toggleTrailerVideo();return false;"
                                          >
                                            <span>Xem trailer</span>
                                          </a>
                                        </div>
                                      </div>
                                      <div
                                        id="col-15579790"
                                        className="col info-col medium-7 small-12 large-8"
                                      >
                                        <div className="col-inner">
                                          <h1 className="title text-uppercase">
                                            DUNE: PART II
                                          </h1>
                                          <div className="excerpt">
                                            <p>
                                              Một cậu bé trở thành Đấng cứu thế
                                              của những người du mục trên một
                                              hành tinh sa mạc có những con sâu
                                              khổng lồ bảo vệ một loại hàng hóa
                                              có tên là Spice. Anh ta sẽ trả cái
                                              giá nào để trở thành người cai trị
                                              mới của vũ trụ ?
                                            </p>
                                          </div>
                                          <div className="metaa">
                                            <p>
                                              <span className="meta-title">
                                                Phân loại:
                                              </span>{" "}
                                              <span className="tag age-limit">
                                                T16
                                              </span>{" "}
                                              <span className="text-uppercae">
                                                Phim phổ biến đến người xem từ
                                                16 tuổi trở lên
                                              </span>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Định dạng:
                                              </span>{" "}
                                              <span className="tag format">
                                                2D
                                              </span>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Đạo diễn:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/dao-dien/denis-villeneuve/"
                                                title="Denis Villeneuve"
                                              >
                                                Denis Villeneuve
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Diễn viên:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/denis-villeneuve/"
                                                title="Denis Villeneuve"
                                              >
                                                Denis Villeneuve
                                              </a>
                                              ,{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/jon-spaihts/"
                                                title="Jon Spaihts"
                                              >
                                                Jon Spaihts
                                              </a>
                                              ,{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/timothee-chalamet/"
                                                title="Timothée Chalamet"
                                              >
                                                Timothée Chalamet
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Thể loại:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/the-loai-phim/action/"
                                                title="Action"
                                              >
                                                Action
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Khởi chiếu:
                                              </span>{" "}
                                              01/03/2024
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Thời lượng:
                                              </span>{" "}
                                              120 phút
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Ngôn ngữ:
                                              </span>{" "}
                                              Phụ đề
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </div>

                              <a
                                href="#"
                                className="close-detail"
                                onClick={closeDetail}
                              >
                                Đóng
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-left" className="col film-col-item">
                  <div class="col-inner">
                    <div class="row row-collapse align-center film-row-item">
                      <div
                        id="col-1452808497"
                        class="col film-item small-12 large-12"
                      >
                        <ul class="col-inner">
                          <li class="text thumb">
                            <a
                              title="MAI"
                              class=""
                              data-url="https://bhdstar.vn/phim/dune-part-ii/"
                              href="#filmQuickView"
                              data-id="34495"
                            >
                              <img
                                class="aligncenter size-medium wp-image-67"
                                src={chibau}
                                alt="MAI"
                              />
                            </a>
                          </li>
                          <li class="meta">
                            <span class="age-limit T16">T18</span>
                            <span class="type">Phụ đề</span>
                            <span class="format">2D</span>
                          </li>
                          <h4 class="title text-uppercase">GẶP LẠI CHỊ BẦU</h4>
                          <li class="cats">
                            Thể loại phim:{" "}
                            <a
                              href="https://bhdstar.vn/the-loai-phim/action/"
                              title="Action"
                            >
                              Drama
                            </a>
                          </li>
                          <li class="buttons">
                            <a
                              onclick="ldapp_bookNow('Phim này chỉ dành cho trẻ em trên 16 tuổi. Vui lòng cân nhắc khi mua vé. BQL Rạp sẽ phải từ chối cho vào nếu sai quy định.', 'dune-part-ii');return false;"
                              href="/"
                              target="_self"
                              class="button primary is-small ticket-button"
                            >
                              <span>
                                {" "}
                                <FontAwesomeIcon icon={faTicket} /> Mua vé ngay
                              </span>
                            </a>
                            <a
                              className="button secondary is-small info-button"
                              onClick={handleDetail}
                            >
                              <span></span>
                            </a>
                            <div
                              className="overlay"
                              style={{ display: "none" }}
                              onClick={closeDetail}
                            ></div>

                            <div
                              className="detail-content"
                              style={{ display: "none" }}
                            >
                              <div
                                id="filmQuickView"
                                className="lightbox-by-id lightbox-content lightbox-white"
                                style={{
                                  maxWidth: "1100px",
                                  padding: "10px 40px",
                                }}
                              >
                                <section
                                  className="section"
                                  id="section_39126402"
                                >
                                  <div className="bg section-bg fill bg-fill bg-loaded" />
                                  <div className="section-content relative">
                                    <div
                                      id="gap-991741491"
                                      className="gap-element clearfix"
                                      style={{
                                        display: "block",
                                        height: "auto",
                                      }}
                                    />
                                    <div
                                      className="row single-film-video-row"
                                      id="row-1669531677"
                                    >
                                      <div
                                        id="col-1682650030"
                                        className="col medium-12 small-12 large-12"
                                      >
                                        <div className="col-inner text-center">
                                          <div className="trailer">
                                            <iframe
                                              title="(Official Trailer) DUNE 2 - Hành Tinh Cát Phần 2 - Trailer 3 | DKKC: 01.03.2024"
                                              width={640}
                                              height={360}
                                              // src="https://www.youtube.com/embed/gdVNnwEgSPE?feature=oembed"
                                              frameBorder={0}
                                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                              allowFullScreen
                                            />
                                          </div>
                                          <a
                                            style={{ margin: "0px" }}
                                            className="button trailer-viewer white is-outline is-small"
                                            href="#"
                                            onclick="toggleTrailerVideo();return false;"
                                          >
                                            <span>← Xem thông tin</span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="row single-film-row"
                                      id="row-1029861583"
                                    >
                                      <div
                                        id="col-1480397685"
                                        className="col image-col medium-5 small-12 large-4"
                                      >
                                        <div className="col-inner text-center">
                                          <div
                                            className="img has-hover x md-x lg-x y md-y lg-y"
                                            id="image_2125486326"
                                          >
                                            <div className="img-inner dark">
                                              <img
                                                src={chibau}
                                                alt="DUNE: PART II"
                                              />
                                            </div>
                                          </div>
                                          <a
                                            onclick="ldapp_bookNow('Phim này chỉ dành cho trẻ em trên 16 tuổi. Vui lòng cân nhắc khi mua vé. BQL Rạp sẽ phải từ chối cho vào nếu sai quy định.', 'dune-part-ii');return false;"
                                            className="button primary is-small ticket-button"
                                          >
                                            <span>Mua vé ngay</span>
                                          </a>
                                          <a
                                            className="button trailer-viewer white is-outline is-small"
                                            href="#"
                                            onclick="toggleTrailerVideo();return false;"
                                          >
                                            <span>Xem trailer</span>
                                          </a>
                                        </div>
                                      </div>
                                      <div
                                        id="col-15579790"
                                        className="col info-col medium-7 small-12 large-8"
                                      >
                                        <div className="col-inner">
                                          <h1 className="title text-uppercase">
                                            DUNE: PART II
                                          </h1>
                                          <div className="excerpt">
                                            <p>
                                              Một cậu bé trở thành Đấng cứu thế
                                              của những người du mục trên một
                                              hành tinh sa mạc có những con sâu
                                              khổng lồ bảo vệ một loại hàng hóa
                                              có tên là Spice. Anh ta sẽ trả cái
                                              giá nào để trở thành người cai trị
                                              mới của vũ trụ ?
                                            </p>
                                          </div>
                                          <div className="metaa">
                                            <p>
                                              <span className="meta-title">
                                                Phân loại:
                                              </span>{" "}
                                              <span className="tag age-limit">
                                                T16
                                              </span>{" "}
                                              <span className="text-uppercae">
                                                Phim phổ biến đến người xem từ
                                                16 tuổi trở lên
                                              </span>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Định dạng:
                                              </span>{" "}
                                              <span className="tag format">
                                                2D
                                              </span>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Đạo diễn:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/dao-dien/denis-villeneuve/"
                                                title="Denis Villeneuve"
                                              >
                                                Denis Villeneuve
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Diễn viên:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/denis-villeneuve/"
                                                title="Denis Villeneuve"
                                              >
                                                Denis Villeneuve
                                              </a>
                                              ,{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/jon-spaihts/"
                                                title="Jon Spaihts"
                                              >
                                                Jon Spaihts
                                              </a>
                                              ,{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/timothee-chalamet/"
                                                title="Timothée Chalamet"
                                              >
                                                Timothée Chalamet
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Thể loại:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/the-loai-phim/action/"
                                                title="Action"
                                              >
                                                Action
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Khởi chiếu:
                                              </span>{" "}
                                              01/03/2024
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Thời lượng:
                                              </span>{" "}
                                              120 phút
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Ngôn ngữ:
                                              </span>{" "}
                                              Phụ đề
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </div>

                              <a
                                href="#"
                                className="close-detail"
                                onClick={closeDetail}
                              >
                                Đóng
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-left" className="col film-col-item">
                  <div class="col-inner">
                    <div class="row row-collapse align-center film-row-item">
                      <div
                        id="col-1452808497"
                        class="col film-item small-12 large-12"
                      >
                        <ul class="col-inner">
                          <li class="text thumb">
                            <a
                              title="MAI"
                              class=""
                              data-url="https://bhdstar.vn/phim/dune-part-ii/"
                              href="#filmQuickView"
                              data-id="34495"
                            >
                              <img
                                class="aligncenter size-medium wp-image-67"
                                src={madam}
                                alt="MAI"
                              />
                            </a>
                          </li>
                          <li class="meta">
                            <span class="age-limit T16">T18</span>
                            <span class="type">Phụ đề</span>
                            <span class="format">2D</span>
                          </li>
                          <h4 class="title text-uppercase">MADAME WEB</h4>
                          <li class="cats">
                            Thể loại phim:{" "}
                            <a
                              href="https://bhdstar.vn/the-loai-phim/action/"
                              title="Action"
                            >
                              Drama
                            </a>
                          </li>
                          <li class="buttons">
                            <a
                              onclick="ldapp_bookNow('Phim này chỉ dành cho trẻ em trên 16 tuổi. Vui lòng cân nhắc khi mua vé. BQL Rạp sẽ phải từ chối cho vào nếu sai quy định.', 'dune-part-ii');return false;"
                              href="/"
                              target="_self"
                              class="button primary is-small ticket-button"
                            >
                              <span>
                                {" "}
                                <FontAwesomeIcon icon={faTicket} /> Mua vé ngay
                              </span>
                            </a>
                            <a
                              className="button secondary is-small info-button"
                              onClick={handleDetail}
                            >
                              <span></span>
                            </a>
                            <div
                              className="overlay"
                              style={{ display: "none" }}
                              onClick={closeDetail}
                            ></div>

                            <div
                              className="detail-content"
                              style={{ display: "none" }}
                            >
                              <div
                                id="filmQuickView"
                                className="lightbox-by-id lightbox-content lightbox-white"
                                style={{
                                  maxWidth: "1100px",
                                  padding: "10px 40px",
                                }}
                              >
                                <section
                                  className="section"
                                  id="section_39126402"
                                >
                                  <div className="bg section-bg fill bg-fill bg-loaded" />
                                  <div className="section-content relative">
                                    <div
                                      id="gap-991741491"
                                      className="gap-element clearfix"
                                      style={{
                                        display: "block",
                                        height: "auto",
                                      }}
                                    />
                                    <div
                                      className="row single-film-video-row"
                                      id="row-1669531677"
                                    >
                                      <div
                                        id="col-1682650030"
                                        className="col medium-12 small-12 large-12"
                                      >
                                        <div className="col-inner text-center">
                                          <div className="trailer">
                                            <iframe
                                              title="(Official Trailer) DUNE 2 - Hành Tinh Cát Phần 2 - Trailer 3 | DKKC: 01.03.2024"
                                              width={640}
                                              height={360}
                                              // src="https://www.youtube.com/embed/gdVNnwEgSPE?feature=oembed"
                                              frameBorder={0}
                                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                              allowFullScreen
                                            />
                                          </div>
                                          <a
                                            style={{ margin: "0px" }}
                                            className="button trailer-viewer white is-outline is-small"
                                            href="#"
                                            onclick="toggleTrailerVideo();return false;"
                                          >
                                            <span>← Xem thông tin</span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="row single-film-row"
                                      id="row-1029861583"
                                    >
                                      <div
                                        id="col-1480397685"
                                        className="col image-col medium-5 small-12 large-4"
                                      >
                                        <div className="col-inner text-center">
                                          <div
                                            className="img has-hover x md-x lg-x y md-y lg-y"
                                            id="image_2125486326"
                                          >
                                            <div className="img-inner dark">
                                              <img
                                                src={madam}
                                                alt="DUNE: PART II"
                                              />
                                            </div>
                                          </div>
                                          <a
                                            onclick="ldapp_bookNow('Phim này chỉ dành cho trẻ em trên 16 tuổi. Vui lòng cân nhắc khi mua vé. BQL Rạp sẽ phải từ chối cho vào nếu sai quy định.', 'dune-part-ii');return false;"
                                            className="button primary is-small ticket-button"
                                          >
                                            <span>Mua vé ngay</span>
                                          </a>
                                          <a
                                            className="button trailer-viewer white is-outline is-small"
                                            href="#"
                                            onclick="toggleTrailerVideo();return false;"
                                          >
                                            <span>Xem trailer</span>
                                          </a>
                                        </div>
                                      </div>
                                      <div
                                        id="col-15579790"
                                        className="col info-col medium-7 small-12 large-8"
                                      >
                                        <div className="col-inner">
                                          <h1 className="title text-uppercase">
                                            DUNE: PART II
                                          </h1>
                                          <div className="excerpt">
                                            <p>
                                              Một cậu bé trở thành Đấng cứu thế
                                              của những người du mục trên một
                                              hành tinh sa mạc có những con sâu
                                              khổng lồ bảo vệ một loại hàng hóa
                                              có tên là Spice. Anh ta sẽ trả cái
                                              giá nào để trở thành người cai trị
                                              mới của vũ trụ ?
                                            </p>
                                          </div>
                                          <div className="metaa">
                                            <p>
                                              <span className="meta-title">
                                                Phân loại:
                                              </span>{" "}
                                              <span className="tag age-limit">
                                                T16
                                              </span>{" "}
                                              <span className="text-uppercae">
                                                Phim phổ biến đến người xem từ
                                                16 tuổi trở lên
                                              </span>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Định dạng:
                                              </span>{" "}
                                              <span className="tag format">
                                                2D
                                              </span>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Đạo diễn:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/dao-dien/denis-villeneuve/"
                                                title="Denis Villeneuve"
                                              >
                                                Denis Villeneuve
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Diễn viên:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/denis-villeneuve/"
                                                title="Denis Villeneuve"
                                              >
                                                Denis Villeneuve
                                              </a>
                                              ,{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/jon-spaihts/"
                                                title="Jon Spaihts"
                                              >
                                                Jon Spaihts
                                              </a>
                                              ,{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/timothee-chalamet/"
                                                title="Timothée Chalamet"
                                              >
                                                Timothée Chalamet
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Thể loại:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/the-loai-phim/action/"
                                                title="Action"
                                              >
                                                Action
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Khởi chiếu:
                                              </span>{" "}
                                              01/03/2024
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Thời lượng:
                                              </span>{" "}
                                              120 phút
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Ngôn ngữ:
                                              </span>{" "}
                                              Phụ đề
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </div>

                              <a
                                href="#"
                                className="close-detail"
                                onClick={closeDetail}
                              >
                                Đóng
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
            style={{ display: "block", height: "auto", paddingTop: "30px" }}
          ></div>

          <div id="col-1063932164" class="col small-12 large-12">
            <div class="col-inner1 text-center">
              <div data-aos="flip-right" id="text-1009336684" class="text">
                <h2 id="p1">Phim đang chiếu</h2>
              </div>
            </div>
          </div>

          <div class="row large-columns-2 medium-columns-2 small-columns-1">
            <div id="col-1675063463" class="col small-12 large-12">
              <div class="col-inner">
                <div data-aos="zoom-in" class="col film-col-item">
                  <div class="col-inner">
                    <div class="row row-collapse align-center film-row-item">
                      <div
                        id="col-1452808497"
                        class="col film-item small-12 large-12"
                      >
                        <ul class="col-inner">
                          <li class="text thumb">
                            <a
                              title="DUNE: PART II"
                              class=""
                              data-url="https://bhdstar.vn/phim/dune-part-ii/"
                              href="#filmQuickView"
                              data-id="34495"
                            >
                              <img
                                class="aligncenter size-medium wp-image-67"
                                src="https://bhdstar.vn/wp-content/uploads/2024/02/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-2.jpg"
                                alt="DUNE: PART II"
                              />
                            </a>
                          </li>
                          <li class="meta">
                            <span class="age-limit T16">T16</span>
                            <span class="type">Phụ đề</span>
                            <span class="format">2D</span>
                          </li>
                          <h4 class="title text-uppercase">DUNE: PART II</h4>
                          <li class="cats">
                            Thể loại phim:{" "}
                            <a
                              href="https://bhdstar.vn/the-loai-phim/action/"
                              title="Action"
                            >
                              Action
                            </a>
                          </li>
                          <li className="buttons">
                            <a className="button primary is-small ticket-button">
                              <span onClick={handlepay}>
                                {" "}
                                <FontAwesomeIcon icon={faTicket} /> Mua vé ngay
                              </span>
                            </a>
                            <a
                              className="button secondary is-small info-button"
                              onClick={handleDetail}
                            >
                              <span></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div data-aos="zoom-in" class="col film-col-item">
                  <div class="col-inner">
                    <div class="row row-collapse align-center film-row-item">
                      <div
                        id="col-1452808497"
                        class="col film-item small-12 large-12"
                      >
                        <ul class="col-inner">
                          <li class="text thumb">
                            <a
                              title="MAI"
                              class=""
                              data-url="https://bhdstar.vn/phim/dune-part-ii/"
                              href="#filmQuickView"
                              data-id="34495"
                            >
                              <img
                                class="aligncenter size-medium wp-image-67"
                                src={mai}
                                alt="MAI"
                              />
                            </a>
                          </li>
                          <li class="meta">
                            <span class="age-limit T16">T18</span>
                            <span class="type">Phụ đề</span>
                            <span class="format">2D</span>
                          </li>
                          <h4 class="title text-uppercase">MAI</h4>
                          <li class="cats">
                            Thể loại phim:{" "}
                            <a
                              href="https://bhdstar.vn/the-loai-phim/action/"
                              title="Action"
                            >
                              Drama
                            </a>
                          </li>
                          <li class="buttons">
                            <a
                              onclick="ldapp_bookNow('Phim này chỉ dành cho trẻ em trên 16 tuổi. Vui lòng cân nhắc khi mua vé. BQL Rạp sẽ phải từ chối cho vào nếu sai quy định.', 'dune-part-ii');return false;"
                              href="/"
                              target="_self"
                              class="button primary is-small ticket-button"
                            >
                              <span>
                                {" "}
                                <FontAwesomeIcon icon={faTicket} /> Mua vé ngay
                              </span>
                            </a>
                            <a
                              className="button secondary is-small info-button"
                              onClick={handleDetail}
                            >
                              <span></span>
                            </a>
                            <div
                              className="overlay"
                              style={{ display: "none" }}
                              onClick={closeDetail}
                            ></div>

                            <div
                              className="detail-content"
                              style={{ display: "none" }}
                            >
                              <div
                                id="filmQuickView"
                                className="lightbox-by-id lightbox-content lightbox-white"
                                style={{
                                  maxWidth: "1100px",
                                  padding: "10px 40px",
                                }}
                              >
                                <section
                                  className="section"
                                  id="section_39126402"
                                >
                                  <div className="bg section-bg fill bg-fill bg-loaded" />
                                  <div className="section-content relative">
                                    <div
                                      id="gap-991741491"
                                      className="gap-element clearfix"
                                      style={{
                                        display: "block",
                                        height: "auto",
                                      }}
                                    />
                                    <div
                                      className="row single-film-video-row"
                                      id="row-1669531677"
                                    >
                                      <div
                                        id="col-1682650030"
                                        className="col medium-12 small-12 large-12"
                                      >
                                        <div className="col-inner text-center">
                                          <div className="trailer">
                                            <iframe
                                              title="(Official Trailer) DUNE 2 - Hành Tinh Cát Phần 2 - Trailer 3 | DKKC: 01.03.2024"
                                              width={640}
                                              height={360}
                                              // src="https://www.youtube.com/embed/gdVNnwEgSPE?feature=oembed"
                                              frameBorder={0}
                                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                              allowFullScreen
                                            />
                                          </div>
                                          <a
                                            style={{ margin: "0px" }}
                                            className="button trailer-viewer white is-outline is-small"
                                            href="#"
                                            onclick="toggleTrailerVideo();return false;"
                                          >
                                            <span>← Xem thông tin</span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="row single-film-row"
                                      id="row-1029861583"
                                    >
                                      <div
                                        id="col-1480397685"
                                        className="col image-col medium-5 small-12 large-4"
                                      >
                                        <div className="col-inner text-center">
                                          <div
                                            className="img has-hover x md-x lg-x y md-y lg-y"
                                            id="image_2125486326"
                                          >
                                            <div className="img-inner dark">
                                              <img
                                                src={mai}
                                                alt="DUNE: PART II"
                                              />
                                            </div>
                                          </div>
                                          <a
                                            onclick="ldapp_bookNow('Phim này chỉ dành cho trẻ em trên 16 tuổi. Vui lòng cân nhắc khi mua vé. BQL Rạp sẽ phải từ chối cho vào nếu sai quy định.', 'dune-part-ii');return false;"
                                            className="button primary is-small ticket-button"
                                          >
                                            <span onclick={handlepay}>
                                              Mua vé ngay
                                            </span>
                                          </a>
                                          <a
                                            className="button trailer-viewer white is-outline is-small"
                                            href="#"
                                            onclick="toggleTrailerVideo();return false;"
                                          >
                                            <span>Xem trailer</span>
                                          </a>
                                        </div>
                                      </div>
                                      <div
                                        id="col-15579790"
                                        className="col info-col medium-7 small-12 large-8"
                                      >
                                        <div className="col-inner">
                                          <h1 className="title text-uppercase">
                                            DUNE: PART II
                                          </h1>
                                          <div className="excerpt">
                                            <p>
                                              Một cậu bé trở thành Đấng cứu thế
                                              của những người du mục trên một
                                              hành tinh sa mạc có những con sâu
                                              khổng lồ bảo vệ một loại hàng hóa
                                              có tên là Spice. Anh ta sẽ trả cái
                                              giá nào để trở thành người cai trị
                                              mới của vũ trụ ?
                                            </p>
                                          </div>
                                          <div className="metaa">
                                            <p>
                                              <span className="meta-title">
                                                Phân loại:
                                              </span>{" "}
                                              <span className="tag age-limit">
                                                T16
                                              </span>{" "}
                                              <span className="text-uppercae">
                                                Phim phổ biến đến người xem từ
                                                16 tuổi trở lên
                                              </span>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Định dạng:
                                              </span>{" "}
                                              <span className="tag format">
                                                2D
                                              </span>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Đạo diễn:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/dao-dien/denis-villeneuve/"
                                                title="Denis Villeneuve"
                                              >
                                                Denis Villeneuve
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Diễn viên:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/denis-villeneuve/"
                                                title="Denis Villeneuve"
                                              >
                                                Denis Villeneuve
                                              </a>
                                              ,{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/jon-spaihts/"
                                                title="Jon Spaihts"
                                              >
                                                Jon Spaihts
                                              </a>
                                              ,{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/timothee-chalamet/"
                                                title="Timothée Chalamet"
                                              >
                                                Timothée Chalamet
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Thể loại:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/the-loai-phim/action/"
                                                title="Action"
                                              >
                                                Action
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Khởi chiếu:
                                              </span>{" "}
                                              01/03/2024
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Thời lượng:
                                              </span>{" "}
                                              120 phút
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Ngôn ngữ:
                                              </span>{" "}
                                              Phụ đề
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </div>

                              <a
                                href="#"
                                className="close-detail"
                                onClick={closeDetail}
                              >
                                Đóng
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-aos="zoom-in" class="col film-col-item">
                  <div class="col-inner">
                    <div class="row row-collapse align-center film-row-item">
                      <div
                        id="col-1452808497"
                        class="col film-item small-12 large-12"
                      >
                        <ul class="col-inner">
                          <li class="text thumb">
                            <a
                              title="MAI"
                              class=""
                              data-url="https://bhdstar.vn/phim/dune-part-ii/"
                              href="#filmQuickView"
                              data-id="34495"
                            >
                              <img
                                class="aligncenter size-medium wp-image-67"
                                src={chibau}
                                alt="MAI"
                              />
                            </a>
                          </li>
                          <li class="meta">
                            <span class="age-limit T16">T18</span>
                            <span class="type">Phụ đề</span>
                            <span class="format">2D</span>
                          </li>
                          <h4 class="title text-uppercase">GẶP LẠI CHỊ BẦU</h4>
                          <li class="cats">
                            Thể loại phim:{" "}
                            <a
                              href="https://bhdstar.vn/the-loai-phim/action/"
                              title="Action"
                            >
                              Drama
                            </a>
                          </li>
                          <li class="buttons">
                            <a
                              onclick="ldapp_bookNow('Phim này chỉ dành cho trẻ em trên 16 tuổi. Vui lòng cân nhắc khi mua vé. BQL Rạp sẽ phải từ chối cho vào nếu sai quy định.', 'dune-part-ii');return false;"
                              href="/"
                              target="_self"
                              class="button primary is-small ticket-button"
                            >
                              <span>
                                {" "}
                                <FontAwesomeIcon icon={faTicket} /> Mua vé ngay
                              </span>
                            </a>
                            <a
                              className="button secondary is-small info-button"
                              onClick={handleDetail}
                            >
                              <span></span>
                            </a>
                            <div
                              className="overlay"
                              style={{ display: "none" }}
                              onClick={closeDetail}
                            ></div>

                            <div
                              className="detail-content"
                              style={{ display: "none" }}
                            >
                              <div
                                id="filmQuickView"
                                className="lightbox-by-id lightbox-content lightbox-white"
                                style={{
                                  maxWidth: "1100px",
                                  padding: "10px 40px",
                                }}
                              >
                                <section
                                  className="section"
                                  id="section_39126402"
                                >
                                  <div className="bg section-bg fill bg-fill bg-loaded" />
                                  <div className="section-content relative">
                                    <div
                                      id="gap-991741491"
                                      className="gap-element clearfix"
                                      style={{
                                        display: "block",
                                        height: "auto",
                                      }}
                                    />
                                    <div
                                      className="row single-film-video-row"
                                      id="row-1669531677"
                                    >
                                      <div
                                        id="col-1682650030"
                                        className="col medium-12 small-12 large-12"
                                      >
                                        <div className="col-inner text-center">
                                          <div className="trailer">
                                            <iframe
                                              title="(Official Trailer) DUNE 2 - Hành Tinh Cát Phần 2 - Trailer 3 | DKKC: 01.03.2024"
                                              width={640}
                                              height={360}
                                              // src="https://www.youtube.com/embed/gdVNnwEgSPE?feature=oembed"
                                              frameBorder={0}
                                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                              allowFullScreen
                                            />
                                          </div>
                                          <a
                                            style={{ margin: "0px" }}
                                            className="button trailer-viewer white is-outline is-small"
                                            href="#"
                                            onclick="toggleTrailerVideo();return false;"
                                          >
                                            <span>← Xem thông tin</span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="row single-film-row"
                                      id="row-1029861583"
                                    >
                                      <div
                                        id="col-1480397685"
                                        className="col image-col medium-5 small-12 large-4"
                                      >
                                        <div className="col-inner text-center">
                                          <div
                                            className="img has-hover x md-x lg-x y md-y lg-y"
                                            id="image_2125486326"
                                          >
                                            <div className="img-inner dark">
                                              <img
                                                src={chibau}
                                                alt="DUNE: PART II"
                                              />
                                            </div>
                                          </div>
                                          <a
                                            onclick="ldapp_bookNow('Phim này chỉ dành cho trẻ em trên 16 tuổi. Vui lòng cân nhắc khi mua vé. BQL Rạp sẽ phải từ chối cho vào nếu sai quy định.', 'dune-part-ii');return false;"
                                            className="button primary is-small ticket-button"
                                          >
                                            <span>Mua vé ngay</span>
                                          </a>
                                          <a
                                            className="button trailer-viewer white is-outline is-small"
                                            href="#"
                                            onclick="toggleTrailerVideo();return false;"
                                          >
                                            <span>Xem trailer</span>
                                          </a>
                                        </div>
                                      </div>
                                      <div
                                        id="col-15579790"
                                        className="col info-col medium-7 small-12 large-8"
                                      >
                                        <div className="col-inner">
                                          <h1 className="title text-uppercase">
                                            DUNE: PART II
                                          </h1>
                                          <div className="excerpt">
                                            <p>
                                              Một cậu bé trở thành Đấng cứu thế
                                              của những người du mục trên một
                                              hành tinh sa mạc có những con sâu
                                              khổng lồ bảo vệ một loại hàng hóa
                                              có tên là Spice. Anh ta sẽ trả cái
                                              giá nào để trở thành người cai trị
                                              mới của vũ trụ ?
                                            </p>
                                          </div>
                                          <div className="metaa">
                                            <p>
                                              <span className="meta-title">
                                                Phân loại:
                                              </span>{" "}
                                              <span className="tag age-limit">
                                                T16
                                              </span>{" "}
                                              <span className="text-uppercae">
                                                Phim phổ biến đến người xem từ
                                                16 tuổi trở lên
                                              </span>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Định dạng:
                                              </span>{" "}
                                              <span className="tag format">
                                                2D
                                              </span>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Đạo diễn:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/dao-dien/denis-villeneuve/"
                                                title="Denis Villeneuve"
                                              >
                                                Denis Villeneuve
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Diễn viên:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/denis-villeneuve/"
                                                title="Denis Villeneuve"
                                              >
                                                Denis Villeneuve
                                              </a>
                                              ,{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/jon-spaihts/"
                                                title="Jon Spaihts"
                                              >
                                                Jon Spaihts
                                              </a>
                                              ,{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/timothee-chalamet/"
                                                title="Timothée Chalamet"
                                              >
                                                Timothée Chalamet
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Thể loại:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/the-loai-phim/action/"
                                                title="Action"
                                              >
                                                Action
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Khởi chiếu:
                                              </span>{" "}
                                              01/03/2024
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Thời lượng:
                                              </span>{" "}
                                              120 phút
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Ngôn ngữ:
                                              </span>{" "}
                                              Phụ đề
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </div>

                              <a
                                href="#"
                                className="close-detail"
                                onClick={closeDetail}
                              >
                                Đóng
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-aos="zoom-in" class="col film-col-item">
                  <div class="col-inner">
                    <div class="row row-collapse align-center film-row-item">
                      <div
                        id="col-1452808497"
                        class="col film-item small-12 large-12"
                      >
                        <ul class="col-inner">
                          <li class="text thumb">
                            <a
                              title="MAI"
                              class=""
                              data-url="https://bhdstar.vn/phim/dune-part-ii/"
                              href="#filmQuickView"
                              data-id="34495"
                            >
                              <img
                                class="aligncenter size-medium wp-image-67"
                                src={madam}
                                alt="MAI"
                              />
                            </a>
                          </li>
                          <li class="meta">
                            <span class="age-limit T16">T18</span>
                            <span class="type">Phụ đề</span>
                            <span class="format">2D</span>
                          </li>
                          <h4 class="title text-uppercase">MADAME WEB</h4>
                          <li class="cats">
                            Thể loại phim:{" "}
                            <a
                              href="https://bhdstar.vn/the-loai-phim/action/"
                              title="Action"
                            >
                              Drama
                            </a>
                          </li>
                          <li class="buttons">
                            <a
                              onclick="ldapp_bookNow('Phim này chỉ dành cho trẻ em trên 16 tuổi. Vui lòng cân nhắc khi mua vé. BQL Rạp sẽ phải từ chối cho vào nếu sai quy định.', 'dune-part-ii');return false;"
                              href="/"
                              target="_self"
                              class="button primary is-small ticket-button"
                            >
                              <span>
                                {" "}
                                <FontAwesomeIcon icon={faTicket} /> Mua vé ngay
                              </span>
                            </a>
                            <a
                              className="button secondary is-small info-button"
                              onClick={handleDetail}
                            >
                              <span></span>
                            </a>
                            <div
                              className="overlay"
                              style={{ display: "none" }}
                              onClick={closeDetail}
                            ></div>

                            <div
                              className="detail-content"
                              style={{ display: "none" }}
                            >
                              <div
                                id="filmQuickView"
                                className="lightbox-by-id lightbox-content lightbox-white"
                                style={{
                                  maxWidth: "1100px",
                                  padding: "10px 40px",
                                }}
                              >
                                <section
                                  className="section"
                                  id="section_39126402"
                                >
                                  <div className="bg section-bg fill bg-fill bg-loaded" />
                                  <div className="section-content relative">
                                    <div
                                      id="gap-991741491"
                                      className="gap-element clearfix"
                                      style={{
                                        display: "block",
                                        height: "auto",
                                      }}
                                    />
                                    <div
                                      className="row single-film-video-row"
                                      id="row-1669531677"
                                    >
                                      <div
                                        id="col-1682650030"
                                        className="col medium-12 small-12 large-12"
                                      >
                                        <div className="col-inner text-center">
                                          <div className="trailer">
                                            <iframe
                                              title="(Official Trailer) DUNE 2 - Hành Tinh Cát Phần 2 - Trailer 3 | DKKC: 01.03.2024"
                                              width={640}
                                              height={360}
                                              // src="https://www.youtube.com/embed/gdVNnwEgSPE?feature=oembed"
                                              frameBorder={0}
                                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                              allowFullScreen
                                            />
                                          </div>
                                          <a
                                            style={{ margin: "0px" }}
                                            className="button trailer-viewer white is-outline is-small"
                                            href="#"
                                            onclick="toggleTrailerVideo();return false;"
                                          >
                                            <span>← Xem thông tin</span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="row single-film-row"
                                      id="row-1029861583"
                                    >
                                      <div
                                        id="col-1480397685"
                                        className="col image-col medium-5 small-12 large-4"
                                      >
                                        <div className="col-inner text-center">
                                          <div
                                            className="img has-hover x md-x lg-x y md-y lg-y"
                                            id="image_2125486326"
                                          >
                                            <div className="img-inner dark">
                                              <img
                                                src={madam}
                                                alt="DUNE: PART II"
                                              />
                                            </div>
                                          </div>
                                          <a
                                            onclick="ldapp_bookNow('Phim này chỉ dành cho trẻ em trên 16 tuổi. Vui lòng cân nhắc khi mua vé. BQL Rạp sẽ phải từ chối cho vào nếu sai quy định.', 'dune-part-ii');return false;"
                                            className="button primary is-small ticket-button"
                                          >
                                            <span>Mua vé ngay</span>
                                          </a>
                                          <a
                                            className="button trailer-viewer white is-outline is-small"
                                            href="#"
                                            onclick="toggleTrailerVideo();return false;"
                                          >
                                            <span>Xem trailer</span>
                                          </a>
                                        </div>
                                      </div>
                                      <div
                                        id="col-15579790"
                                        className="col info-col medium-7 small-12 large-8"
                                      >
                                        <div className="col-inner">
                                          <h1 className="title text-uppercase">
                                            DUNE: PART II
                                          </h1>
                                          <div className="excerpt">
                                            <p>
                                              Một cậu bé trở thành Đấng cứu thế
                                              của những người du mục trên một
                                              hành tinh sa mạc có những con sâu
                                              khổng lồ bảo vệ một loại hàng hóa
                                              có tên là Spice. Anh ta sẽ trả cái
                                              giá nào để trở thành người cai trị
                                              mới của vũ trụ ?
                                            </p>
                                          </div>
                                          <div className="metaa">
                                            <p>
                                              <span className="meta-title">
                                                Phân loại:
                                              </span>{" "}
                                              <span className="tag age-limit">
                                                T16
                                              </span>{" "}
                                              <span className="text-uppercae">
                                                Phim phổ biến đến người xem từ
                                                16 tuổi trở lên
                                              </span>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Định dạng:
                                              </span>{" "}
                                              <span className="tag format">
                                                2D
                                              </span>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Đạo diễn:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/dao-dien/denis-villeneuve/"
                                                title="Denis Villeneuve"
                                              >
                                                Denis Villeneuve
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Diễn viên:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/denis-villeneuve/"
                                                title="Denis Villeneuve"
                                              >
                                                Denis Villeneuve
                                              </a>
                                              ,{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/jon-spaihts/"
                                                title="Jon Spaihts"
                                              >
                                                Jon Spaihts
                                              </a>
                                              ,{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/timothee-chalamet/"
                                                title="Timothée Chalamet"
                                              >
                                                Timothée Chalamet
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Thể loại:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/the-loai-phim/action/"
                                                title="Action"
                                              >
                                                Action
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Khởi chiếu:
                                              </span>{" "}
                                              01/03/2024
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Thời lượng:
                                              </span>{" "}
                                              120 phút
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Ngôn ngữ:
                                              </span>{" "}
                                              Phụ đề
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </div>

                              <a
                                href="#"
                                className="close-detail"
                                onClick={closeDetail}
                              >
                                Đóng
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div data-aos="zoom-in" class="col film-col-item">
                  <div class="col-inner">
                    <div class="row row-collapse align-center film-row-item">
                      <div
                        id="col-1452808497"
                        class="col film-item small-12 large-12"
                      >
                        <ul class="col-inner">
                          <li class="text thumb">
                            <a
                              title="MAI"
                              class=""
                              data-url="https://bhdstar.vn/phim/dune-part-ii/"
                              href="#filmQuickView"
                              data-id="34495"
                            >
                              <img
                                class="aligncenter size-medium wp-image-67"
                                src={madam}
                                alt="MAI"
                              />
                            </a>
                          </li>
                          <li class="meta">
                            <span class="age-limit T16">T18</span>
                            <span class="type">Phụ đề</span>
                            <span class="format">2D</span>
                          </li>
                          <h4 class="title text-uppercase">MADAME WEB</h4>
                          <li class="cats">
                            Thể loại phim:{" "}
                            <a
                              href="https://bhdstar.vn/the-loai-phim/action/"
                              title="Action"
                            >
                              Drama
                            </a>
                          </li>
                          <li class="buttons">
                            <a
                              onclick="ldapp_bookNow('Phim này chỉ dành cho trẻ em trên 16 tuổi. Vui lòng cân nhắc khi mua vé. BQL Rạp sẽ phải từ chối cho vào nếu sai quy định.', 'dune-part-ii');return false;"
                              href="/"
                              target="_self"
                              class="button primary is-small ticket-button"
                            >
                              <span>
                                {" "}
                                <FontAwesomeIcon icon={faTicket} /> Mua vé ngay
                              </span>
                            </a>
                            <a
                              className="button secondary is-small info-button"
                              onClick={handleDetail}
                            >
                              <span></span>
                            </a>
                            <div
                              className="overlay"
                              style={{ display: "none" }}
                              onClick={closeDetail}
                            ></div>

                            <div
                              className="detail-content"
                              style={{ display: "none" }}
                            >
                              <div
                                id="filmQuickView"
                                className="lightbox-by-id lightbox-content lightbox-white"
                                style={{
                                  maxWidth: "1100px",
                                  padding: "10px 40px",
                                }}
                              >
                                <section
                                  className="section"
                                  id="section_39126402"
                                >
                                  <div className="bg section-bg fill bg-fill bg-loaded" />
                                  <div className="section-content relative">
                                    <div
                                      id="gap-991741491"
                                      className="gap-element clearfix"
                                      style={{
                                        display: "block",
                                        height: "auto",
                                      }}
                                    />
                                    <div
                                      className="row single-film-video-row"
                                      id="row-1669531677"
                                    >
                                      <div
                                        id="col-1682650030"
                                        className="col medium-12 small-12 large-12"
                                      >
                                        <div className="col-inner text-center">
                                          <div className="trailer">
                                            <iframe
                                              title="(Official Trailer) DUNE 2 - Hành Tinh Cát Phần 2 - Trailer 3 | DKKC: 01.03.2024"
                                              width={640}
                                              height={360}
                                              // src="https://www.youtube.com/embed/gdVNnwEgSPE?feature=oembed"
                                              frameBorder={0}
                                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                              allowFullScreen
                                            />
                                          </div>
                                          <a
                                            style={{ margin: "0px" }}
                                            className="button trailer-viewer white is-outline is-small"
                                            href="#"
                                            onclick="toggleTrailerVideo();return false;"
                                          >
                                            <span>← Xem thông tin</span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="row single-film-row"
                                      id="row-1029861583"
                                    >
                                      <div
                                        id="col-1480397685"
                                        className="col image-col medium-5 small-12 large-4"
                                      >
                                        <div className="col-inner text-center">
                                          <div
                                            className="img has-hover x md-x lg-x y md-y lg-y"
                                            id="image_2125486326"
                                          >
                                            <div className="img-inner dark">
                                              <img
                                                src={madam}
                                                alt="DUNE: PART II"
                                              />
                                            </div>
                                          </div>
                                          <a
                                            onclick="ldapp_bookNow('Phim này chỉ dành cho trẻ em trên 16 tuổi. Vui lòng cân nhắc khi mua vé. BQL Rạp sẽ phải từ chối cho vào nếu sai quy định.', 'dune-part-ii');return false;"
                                            className="button primary is-small ticket-button"
                                          >
                                            <span>Mua vé ngay</span>
                                          </a>
                                          <a
                                            className="button trailer-viewer white is-outline is-small"
                                            href="#"
                                            onclick="toggleTrailerVideo();return false;"
                                          >
                                            <span>Xem trailer</span>
                                          </a>
                                        </div>
                                      </div>
                                      <div
                                        id="col-15579790"
                                        className="col info-col medium-7 small-12 large-8"
                                      >
                                        <div className="col-inner">
                                          <h1 className="title text-uppercase">
                                            DUNE: PART II
                                          </h1>
                                          <div className="excerpt">
                                            <p>
                                              Một cậu bé trở thành Đấng cứu thế
                                              của những người du mục trên một
                                              hành tinh sa mạc có những con sâu
                                              khổng lồ bảo vệ một loại hàng hóa
                                              có tên là Spice. Anh ta sẽ trả cái
                                              giá nào để trở thành người cai trị
                                              mới của vũ trụ ?
                                            </p>
                                          </div>
                                          <div className="metaa">
                                            <p>
                                              <span className="meta-title">
                                                Phân loại:
                                              </span>{" "}
                                              <span className="tag age-limit">
                                                T16
                                              </span>{" "}
                                              <span className="text-uppercae">
                                                Phim phổ biến đến người xem từ
                                                16 tuổi trở lên
                                              </span>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Định dạng:
                                              </span>{" "}
                                              <span className="tag format">
                                                2D
                                              </span>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Đạo diễn:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/dao-dien/denis-villeneuve/"
                                                title="Denis Villeneuve"
                                              >
                                                Denis Villeneuve
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Diễn viên:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/denis-villeneuve/"
                                                title="Denis Villeneuve"
                                              >
                                                Denis Villeneuve
                                              </a>
                                              ,{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/jon-spaihts/"
                                                title="Jon Spaihts"
                                              >
                                                Jon Spaihts
                                              </a>
                                              ,{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/timothee-chalamet/"
                                                title="Timothée Chalamet"
                                              >
                                                Timothée Chalamet
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Thể loại:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/the-loai-phim/action/"
                                                title="Action"
                                              >
                                                Action
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Khởi chiếu:
                                              </span>{" "}
                                              01/03/2024
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Thời lượng:
                                              </span>{" "}
                                              120 phút
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Ngôn ngữ:
                                              </span>{" "}
                                              Phụ đề
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </div>

                              <a
                                href="#"
                                className="close-detail"
                                onClick={closeDetail}
                              >
                                Đóng
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
                class="text"
              >
                <h2 id="p1">Phim sắp chiếu</h2>
              </div>
            </div>
          </div>
          <div class="row large-columns-2 medium-columns-2 small-columns-1">
            <div id="col-1675063463" class="col small-12 large-12">
              <div class="col-inner">
                <div
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="300"
                  data-aos-offset="0"
                  class="col film-col-item"
                >
                  <div class="col-inner">
                    <div class="row row-collapse align-center film-row-item">
                      <div
                        id="col-1452808497"
                        class="col film-item small-12 large-12"
                      >
                        <ul class="col-inner">
                          <li class="text thumb">
                            <a
                              title="DUNE: PART II"
                              class=""
                              data-url="https://bhdstar.vn/phim/dune-part-ii/"
                              href="#filmQuickView"
                              data-id="34495"
                            >
                              <img
                                class="aligncenter size-medium wp-image-67"
                                src="https://bhdstar.vn/wp-content/uploads/2024/02/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-2.jpg"
                                alt="DUNE: PART II"
                              />
                            </a>
                          </li>
                          <li class="meta">
                            <span class="age-limit T16">T16</span>
                            <span class="type">Phụ đề</span>
                            <span class="format">2D</span>
                          </li>
                          <h4 class="title text-uppercase">DUNE: PART II</h4>
                          <li class="cats">
                            Thể loại phim:{" "}
                            <a
                              href="https://bhdstar.vn/the-loai-phim/action/"
                              title="Action"
                            >
                              Action
                            </a>
                          </li>
                          <li className="buttons">
                            <a
                              title="THE GARFIELD MOVIE"
                              data-url="https://bhdstar.vn/phim/the-garfield-movie/"
                              href="#filmQuickView"
                              data-id="1115"
                              class="button secondary is-small non-ticket-button"
                            >
                              <span>Thông tin chi tiết</span>
                            </a>
                            <div
                              className="overlay"
                              style={{ display: "none" }}
                              onClick={closeDetail}
                            ></div>

                            <div
                              className="detail-content"
                              style={{ display: "none" }}
                            >
                              <div
                                id="filmQuickView"
                                className="lightbox-by-id lightbox-content lightbox-white"
                                style={{
                                  maxWidth: "1100px",
                                  padding: "10px 40px",
                                }}
                              >
                                <section
                                  className="section"
                                  id="section_39126402"
                                >
                                  <div className="bg section-bg fill bg-fill bg-loaded" />
                                  <div className="section-content relative">
                                    <div
                                      id="gap-991741491"
                                      className="gap-element clearfix"
                                      style={{
                                        display: "block",
                                        height: "auto",
                                      }}
                                    />
                                    <div
                                      className="row single-film-video-row"
                                      id="row-1669531677"
                                    >
                                      <div
                                        id="col-1682650030"
                                        className="col medium-12 small-12 large-12"
                                      >
                                        <div className="col-inner text-center">
                                          <div className="trailer">
                                            <iframe
                                              title="(Official Trailer) DUNE 2 - Hành Tinh Cát Phần 2 - Trailer 3 | DKKC: 01.03.2024"
                                              width={640}
                                              height={360}
                                              // src="https://www.youtube.com/embed/gdVNnwEgSPE?feature=oembed"
                                              frameBorder={0}
                                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                              allowFullScreen
                                            />
                                          </div>
                                          <a
                                            style={{ margin: "0px" }}
                                            className="button trailer-viewer white is-outline is-small"
                                            href="#"
                                            onclick="toggleTrailerVideo();return false;"
                                          >
                                            <span>← Xem thông tin</span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="row single-film-row"
                                      id="row-1029861583"
                                    >
                                      <div
                                        id="col-1480397685"
                                        className="col image-col medium-5 small-12 large-4"
                                      >
                                        <div className="col-inner text-center">
                                          <div
                                            className="img has-hover x md-x lg-x y md-y lg-y"
                                            id="image_2125486326"
                                          >
                                            <div className="img-inner dark">
                                              <img
                                                src="https://bhdstar.vn/wp-content/uploads/2024/02/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-2.jpg"
                                                alt="DUNE: PART II"
                                              />
                                            </div>
                                          </div>
                                          <a
                                            onclick="ldapp_bookNow('Phim này chỉ dành cho trẻ em trên 16 tuổi. Vui lòng cân nhắc khi mua vé. BQL Rạp sẽ phải từ chối cho vào nếu sai quy định.', 'dune-part-ii');return false;"
                                            className="button primary is-small ticket-button"
                                          >
                                            <span>Mua vé ngay</span>
                                          </a>
                                          <a
                                            className="button trailer-viewer white is-outline is-small"
                                            href="#"
                                            onclick="toggleTrailerVideo();return false;"
                                          >
                                            <span>Xem trailer</span>
                                          </a>
                                        </div>
                                      </div>
                                      <div
                                        id="col-15579790"
                                        className="col info-col medium-7 small-12 large-8"
                                      >
                                        <div className="col-inner">
                                          <h1 className="title text-uppercase">
                                            DUNE: PART II
                                          </h1>
                                          <div className="excerpt">
                                            <p>
                                              Một cậu bé trở thành Đấng cứu thế
                                              của những người du mục trên một
                                              hành tinh sa mạc có những con sâu
                                              khổng lồ bảo vệ một loại hàng hóa
                                              có tên là Spice. Anh ta sẽ trả cái
                                              giá nào để trở thành người cai trị
                                              mới của vũ trụ ?
                                            </p>
                                          </div>
                                          <div className="metaa">
                                            <p>
                                              <span className="meta-title">
                                                Phân loại:
                                              </span>{" "}
                                              <span className="tag age-limit">
                                                T16
                                              </span>{" "}
                                              <span className="text-uppercae">
                                                Phim phổ biến đến người xem từ
                                                16 tuổi trở lên
                                              </span>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Định dạng:
                                              </span>{" "}
                                              <span className="tag format">
                                                2D
                                              </span>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Đạo diễn:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/dao-dien/denis-villeneuve/"
                                                title="Denis Villeneuve"
                                              >
                                                Denis Villeneuve
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Diễn viên:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/denis-villeneuve/"
                                                title="Denis Villeneuve"
                                              >
                                                Denis Villeneuve
                                              </a>
                                              ,{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/jon-spaihts/"
                                                title="Jon Spaihts"
                                              >
                                                Jon Spaihts
                                              </a>
                                              ,{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/timothee-chalamet/"
                                                title="Timothée Chalamet"
                                              >
                                                Timothée Chalamet
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Thể loại:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/the-loai-phim/action/"
                                                title="Action"
                                              >
                                                Action
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Khởi chiếu:
                                              </span>{" "}
                                              01/03/2024
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Thời lượng:
                                              </span>{" "}
                                              120 phút
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Ngôn ngữ:
                                              </span>{" "}
                                              Phụ đề
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </div>

                              {/* <a href="#" className="close-detail" onClick={closeDetail}>Đóng</a> */}
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="300"
                  data-aos-offset="0"
                  class="col film-col-item"
                >
                  <div class="col-inner">
                    <div class="row row-collapse align-center film-row-item">
                      <div
                        id="col-1452808497"
                        class="col film-item small-12 large-12"
                      >
                        <ul class="col-inner">
                          <li class="text thumb">
                            <a
                              title="MAI"
                              class=""
                              data-url="https://bhdstar.vn/phim/dune-part-ii/"
                              href="#filmQuickView"
                              data-id="34495"
                            >
                              <img
                                class="aligncenter size-medium wp-image-67"
                                src={mai}
                                alt="MAI"
                              />
                            </a>
                          </li>
                          <li class="meta">
                            <span class="age-limit T16">T18</span>
                            <span class="type">Phụ đề</span>
                            <span class="format">2D</span>
                          </li>
                          <h4 class="title text-uppercase">MAI</h4>
                          <li class="cats">
                            Thể loại phim:{" "}
                            <a
                              href="https://bhdstar.vn/the-loai-phim/action/"
                              title="Action"
                            >
                              Drama
                            </a>
                          </li>
                          <li className="buttons">
                            <a
                              title="THE GARFIELD MOVIE"
                              data-url="https://bhdstar.vn/phim/the-garfield-movie/"
                              href="#filmQuickView"
                              data-id="1115"
                              class="button secondary is-small non-ticket-button"
                            >
                              <span>Thông tin chi tiết</span>
                            </a>
                            <div
                              className="overlay"
                              style={{ display: "none" }}
                              onClick={closeDetail}
                            ></div>

                            <div
                              className="detail-content"
                              style={{ display: "none" }}
                            >
                              <div
                                id="filmQuickView"
                                className="lightbox-by-id lightbox-content lightbox-white"
                                style={{
                                  maxWidth: "1100px",
                                  padding: "10px 40px",
                                }}
                              >
                                <section
                                  className="section"
                                  id="section_39126402"
                                >
                                  <div className="bg section-bg fill bg-fill bg-loaded" />
                                  <div className="section-content relative">
                                    <div
                                      id="gap-991741491"
                                      className="gap-element clearfix"
                                      style={{
                                        display: "block",
                                        height: "auto",
                                      }}
                                    />
                                    <div
                                      className="row single-film-video-row"
                                      id="row-1669531677"
                                    >
                                      <div
                                        id="col-1682650030"
                                        className="col medium-12 small-12 large-12"
                                      >
                                        <div className="col-inner text-center">
                                          <div className="trailer">
                                            <iframe
                                              title="(Official Trailer) DUNE 2 - Hành Tinh Cát Phần 2 - Trailer 3 | DKKC: 01.03.2024"
                                              width={640}
                                              height={360}
                                              // src="https://www.youtube.com/embed/gdVNnwEgSPE?feature=oembed"
                                              frameBorder={0}
                                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                              allowFullScreen
                                            />
                                          </div>
                                          <a
                                            style={{ margin: "0px" }}
                                            className="button trailer-viewer white is-outline is-small"
                                            href="#"
                                            onclick="toggleTrailerVideo();return false;"
                                          >
                                            <span>← Xem thông tin</span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="row single-film-row"
                                      id="row-1029861583"
                                    >
                                      <div
                                        id="col-1480397685"
                                        className="col image-col medium-5 small-12 large-4"
                                      >
                                        <div className="col-inner text-center">
                                          <div
                                            className="img has-hover x md-x lg-x y md-y lg-y"
                                            id="image_2125486326"
                                          >
                                            <div className="img-inner dark">
                                              <img
                                                src={mai}
                                                alt="DUNE: PART II"
                                              />
                                            </div>
                                          </div>
                                          <a
                                            onclick="ldapp_bookNow('Phim này chỉ dành cho trẻ em trên 16 tuổi. Vui lòng cân nhắc khi mua vé. BQL Rạp sẽ phải từ chối cho vào nếu sai quy định.', 'dune-part-ii');return false;"
                                            className="button primary is-small ticket-button"
                                          >
                                            <span onclick={handlepay}>
                                              Mua vé ngay
                                            </span>
                                          </a>
                                          <a
                                            className="button trailer-viewer white is-outline is-small"
                                            href="#"
                                            onclick="toggleTrailerVideo();return false;"
                                          >
                                            <span>Xem trailer</span>
                                          </a>
                                        </div>
                                      </div>
                                      <div
                                        id="col-15579790"
                                        className="col info-col medium-7 small-12 large-8"
                                      >
                                        <div className="col-inner">
                                          <h1 className="title text-uppercase">
                                            DUNE: PART II
                                          </h1>
                                          <div className="excerpt">
                                            <p>
                                              Một cậu bé trở thành Đấng cứu thế
                                              của những người du mục trên một
                                              hành tinh sa mạc có những con sâu
                                              khổng lồ bảo vệ một loại hàng hóa
                                              có tên là Spice. Anh ta sẽ trả cái
                                              giá nào để trở thành người cai trị
                                              mới của vũ trụ ?
                                            </p>
                                          </div>
                                          <div className="metaa">
                                            <p>
                                              <span className="meta-title">
                                                Phân loại:
                                              </span>{" "}
                                              <span className="tag age-limit">
                                                T16
                                              </span>{" "}
                                              <span className="text-uppercae">
                                                Phim phổ biến đến người xem từ
                                                16 tuổi trở lên
                                              </span>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Định dạng:
                                              </span>{" "}
                                              <span className="tag format">
                                                2D
                                              </span>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Đạo diễn:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/dao-dien/denis-villeneuve/"
                                                title="Denis Villeneuve"
                                              >
                                                Denis Villeneuve
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Diễn viên:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/denis-villeneuve/"
                                                title="Denis Villeneuve"
                                              >
                                                Denis Villeneuve
                                              </a>
                                              ,{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/jon-spaihts/"
                                                title="Jon Spaihts"
                                              >
                                                Jon Spaihts
                                              </a>
                                              ,{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/timothee-chalamet/"
                                                title="Timothée Chalamet"
                                              >
                                                Timothée Chalamet
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Thể loại:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/the-loai-phim/action/"
                                                title="Action"
                                              >
                                                Action
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Khởi chiếu:
                                              </span>{" "}
                                              01/03/2024
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Thời lượng:
                                              </span>{" "}
                                              120 phút
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Ngôn ngữ:
                                              </span>{" "}
                                              Phụ đề
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </div>

                              <a
                                href="#"
                                className="close-detail"
                                onClick={closeDetail}
                              >
                                Đóng
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="300"
                  data-aos-offset="0"
                  class="col film-col-item"
                >
                  <div class="col-inner">
                    <div class="row row-collapse align-center film-row-item">
                      <div
                        id="col-1452808497"
                        class="col film-item small-12 large-12"
                      >
                        <ul class="col-inner">
                          <li class="text thumb">
                            <a
                              title="MAI"
                              class=""
                              data-url="https://bhdstar.vn/phim/dune-part-ii/"
                              href="#filmQuickView"
                              data-id="34495"
                            >
                              <img
                                class="aligncenter size-medium wp-image-67"
                                src={chibau}
                                alt="MAI"
                              />
                            </a>
                          </li>
                          <li class="meta">
                            <span class="age-limit T16">T18</span>
                            <span class="type">Phụ đề</span>
                            <span class="format">2D</span>
                          </li>
                          <h4 class="title text-uppercase">GẶP LẠI CHỊ BẦU</h4>
                          <li class="cats">
                            Thể loại phim:{" "}
                            <a
                              href="https://bhdstar.vn/the-loai-phim/action/"
                              title="Action"
                            >
                              Drama
                            </a>
                          </li>
                          <li className="buttons">
                            <a
                              title="THE GARFIELD MOVIE"
                              data-url="https://bhdstar.vn/phim/the-garfield-movie/"
                              href="#filmQuickView"
                              data-id="1115"
                              class="button secondary is-small non-ticket-button"
                            >
                              <span>Thông tin chi tiết</span>
                            </a>
                            <div
                              className="overlay"
                              style={{ display: "none" }}
                              onClick={closeDetail}
                            ></div>

                            <div
                              className="detail-content"
                              style={{ display: "none" }}
                            >
                              <div
                                id="filmQuickView"
                                className="lightbox-by-id lightbox-content lightbox-white"
                                style={{
                                  maxWidth: "1100px",
                                  padding: "10px 40px",
                                }}
                              >
                                <section
                                  className="section"
                                  id="section_39126402"
                                >
                                  <div className="bg section-bg fill bg-fill bg-loaded" />
                                  <div className="section-content relative">
                                    <div
                                      id="gap-991741491"
                                      className="gap-element clearfix"
                                      style={{
                                        display: "block",
                                        height: "auto",
                                      }}
                                    />
                                    <div
                                      className="row single-film-video-row"
                                      id="row-1669531677"
                                    >
                                      <div
                                        id="col-1682650030"
                                        className="col medium-12 small-12 large-12"
                                      >
                                        <div className="col-inner text-center">
                                          <div className="trailer">
                                            <iframe
                                              title="(Official Trailer) DUNE 2 - Hành Tinh Cát Phần 2 - Trailer 3 | DKKC: 01.03.2024"
                                              width={640}
                                              height={360}
                                              // src="https://www.youtube.com/embed/gdVNnwEgSPE?feature=oembed"
                                              frameBorder={0}
                                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                              allowFullScreen
                                            />
                                          </div>
                                          <a
                                            style={{ margin: "0px" }}
                                            className="button trailer-viewer white is-outline is-small"
                                            href="#"
                                            onclick="toggleTrailerVideo();return false;"
                                          >
                                            <span>← Xem thông tin</span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="row single-film-row"
                                      id="row-1029861583"
                                    >
                                      <div
                                        id="col-1480397685"
                                        className="col image-col medium-5 small-12 large-4"
                                      >
                                        <div className="col-inner text-center">
                                          <div
                                            className="img has-hover x md-x lg-x y md-y lg-y"
                                            id="image_2125486326"
                                          >
                                            <div className="img-inner dark">
                                              <img
                                                src={chibau}
                                                alt="DUNE: PART II"
                                              />
                                            </div>
                                          </div>
                                          <a
                                            onclick="ldapp_bookNow('Phim này chỉ dành cho trẻ em trên 16 tuổi. Vui lòng cân nhắc khi mua vé. BQL Rạp sẽ phải từ chối cho vào nếu sai quy định.', 'dune-part-ii');return false;"
                                            className="button primary is-small ticket-button"
                                          >
                                            <span>Mua vé ngay</span>
                                          </a>
                                          <a
                                            className="button trailer-viewer white is-outline is-small"
                                            href="#"
                                            onclick="toggleTrailerVideo();return false;"
                                          >
                                            <span>Xem trailer</span>
                                          </a>
                                        </div>
                                      </div>
                                      <div
                                        id="col-15579790"
                                        className="col info-col medium-7 small-12 large-8"
                                      >
                                        <div className="col-inner">
                                          <h1 className="title text-uppercase">
                                            DUNE: PART II
                                          </h1>
                                          <div className="excerpt">
                                            <p>
                                              Một cậu bé trở thành Đấng cứu thế
                                              của những người du mục trên một
                                              hành tinh sa mạc có những con sâu
                                              khổng lồ bảo vệ một loại hàng hóa
                                              có tên là Spice. Anh ta sẽ trả cái
                                              giá nào để trở thành người cai trị
                                              mới của vũ trụ ?
                                            </p>
                                          </div>
                                          <div className="metaa">
                                            <p>
                                              <span className="meta-title">
                                                Phân loại:
                                              </span>{" "}
                                              <span className="tag age-limit">
                                                T16
                                              </span>{" "}
                                              <span className="text-uppercae">
                                                Phim phổ biến đến người xem từ
                                                16 tuổi trở lên
                                              </span>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Định dạng:
                                              </span>{" "}
                                              <span className="tag format">
                                                2D
                                              </span>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Đạo diễn:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/dao-dien/denis-villeneuve/"
                                                title="Denis Villeneuve"
                                              >
                                                Denis Villeneuve
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Diễn viên:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/denis-villeneuve/"
                                                title="Denis Villeneuve"
                                              >
                                                Denis Villeneuve
                                              </a>
                                              ,{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/jon-spaihts/"
                                                title="Jon Spaihts"
                                              >
                                                Jon Spaihts
                                              </a>
                                              ,{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/timothee-chalamet/"
                                                title="Timothée Chalamet"
                                              >
                                                Timothée Chalamet
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Thể loại:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/the-loai-phim/action/"
                                                title="Action"
                                              >
                                                Action
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Khởi chiếu:
                                              </span>{" "}
                                              01/03/2024
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Thời lượng:
                                              </span>{" "}
                                              120 phút
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Ngôn ngữ:
                                              </span>{" "}
                                              Phụ đề
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </div>

                              <a
                                href="#"
                                className="close-detail"
                                onClick={closeDetail}
                              >
                                Đóng
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="300"
                  data-aos-offset="0"
                  class="col film-col-item"
                >
                  <div class="col-inner">
                    <div class="row row-collapse align-center film-row-item">
                      <div
                        id="col-1452808497"
                        class="col film-item small-12 large-12"
                      >
                        <ul class="col-inner">
                          <li class="text thumb">
                            <a
                              title="MAI"
                              class=""
                              data-url="https://bhdstar.vn/phim/dune-part-ii/"
                              href="#filmQuickView"
                              data-id="34495"
                            >
                              <img
                                class="aligncenter size-medium wp-image-67"
                                src={madam}
                                alt="MAI"
                              />
                            </a>
                          </li>
                          <li class="meta">
                            <span class="age-limit T16">T18</span>
                            <span class="type">Phụ đề</span>
                            <span class="format">2D</span>
                          </li>
                          <h4 class="title text-uppercase">MADAME WEB</h4>
                          <li class="cats">
                            Thể loại phim:{" "}
                            <a
                              href="https://bhdstar.vn/the-loai-phim/action/"
                              title="Action"
                            >
                              Drama
                            </a>
                          </li>
                          <li className="buttons">
                            <a
                              title="THE GARFIELD MOVIE"
                              data-url="https://bhdstar.vn/phim/the-garfield-movie/"
                              href="#filmQuickView"
                              data-id="1115"
                              class="button secondary is-small non-ticket-button"
                            >
                              <span>Thông tin chi tiết</span>
                            </a>
                            <div
                              className="overlay"
                              style={{ display: "none" }}
                              onClick={closeDetail}
                            ></div>

                            <div
                              className="detail-content"
                              style={{ display: "none" }}
                            >
                              <div
                                id="filmQuickView"
                                className="lightbox-by-id lightbox-content lightbox-white"
                                style={{
                                  maxWidth: "1100px",
                                  padding: "10px 40px",
                                }}
                              >
                                <section
                                  className="section"
                                  id="section_39126402"
                                >
                                  <div className="bg section-bg fill bg-fill bg-loaded" />
                                  <div className="section-content relative">
                                    <div
                                      id="gap-991741491"
                                      className="gap-element clearfix"
                                      style={{
                                        display: "block",
                                        height: "auto",
                                      }}
                                    />
                                    <div
                                      className="row single-film-video-row"
                                      id="row-1669531677"
                                    >
                                      <div
                                        id="col-1682650030"
                                        className="col medium-12 small-12 large-12"
                                      >
                                        <div className="col-inner text-center">
                                          <div className="trailer">
                                            <iframe
                                              title="(Official Trailer) DUNE 2 - Hành Tinh Cát Phần 2 - Trailer 3 | DKKC: 01.03.2024"
                                              width={640}
                                              height={360}
                                              // src="https://www.youtube.com/embed/gdVNnwEgSPE?feature=oembed"
                                              frameBorder={0}
                                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                              allowFullScreen
                                            />
                                          </div>
                                          <a
                                            style={{ margin: "0px" }}
                                            className="button trailer-viewer white is-outline is-small"
                                            href="#"
                                            onclick="toggleTrailerVideo();return false;"
                                          >
                                            <span>← Xem thông tin</span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="row single-film-row"
                                      id="row-1029861583"
                                    >
                                      <div
                                        id="col-1480397685"
                                        className="col image-col medium-5 small-12 large-4"
                                      >
                                        <div className="col-inner text-center">
                                          <div
                                            className="img has-hover x md-x lg-x y md-y lg-y"
                                            id="image_2125486326"
                                          >
                                            <div className="img-inner dark">
                                              <img
                                                src={madam}
                                                alt="DUNE: PART II"
                                              />
                                            </div>
                                          </div>
                                          <a
                                            onclick="ldapp_bookNow('Phim này chỉ dành cho trẻ em trên 16 tuổi. Vui lòng cân nhắc khi mua vé. BQL Rạp sẽ phải từ chối cho vào nếu sai quy định.', 'dune-part-ii');return false;"
                                            className="button primary is-small ticket-button"
                                          >
                                            <span>Mua vé ngay</span>
                                          </a>
                                          <a
                                            className="button trailer-viewer white is-outline is-small"
                                            href="#"
                                            onclick="toggleTrailerVideo();return false;"
                                          >
                                            <span>Xem trailer</span>
                                          </a>
                                        </div>
                                      </div>
                                      <div
                                        id="col-15579790"
                                        className="col info-col medium-7 small-12 large-8"
                                      >
                                        <div className="col-inner">
                                          <h1 className="title text-uppercase">
                                            DUNE: PART II
                                          </h1>
                                          <div className="excerpt">
                                            <p>
                                              Một cậu bé trở thành Đấng cứu thế
                                              của những người du mục trên một
                                              hành tinh sa mạc có những con sâu
                                              khổng lồ bảo vệ một loại hàng hóa
                                              có tên là Spice. Anh ta sẽ trả cái
                                              giá nào để trở thành người cai trị
                                              mới của vũ trụ ?
                                            </p>
                                          </div>
                                          <div className="metaa">
                                            <p>
                                              <span className="meta-title">
                                                Phân loại:
                                              </span>{" "}
                                              <span className="tag age-limit">
                                                T16
                                              </span>{" "}
                                              <span className="text-uppercae">
                                                Phim phổ biến đến người xem từ
                                                16 tuổi trở lên
                                              </span>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Định dạng:
                                              </span>{" "}
                                              <span className="tag format">
                                                2D
                                              </span>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Đạo diễn:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/dao-dien/denis-villeneuve/"
                                                title="Denis Villeneuve"
                                              >
                                                Denis Villeneuve
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Diễn viên:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/denis-villeneuve/"
                                                title="Denis Villeneuve"
                                              >
                                                Denis Villeneuve
                                              </a>
                                              ,{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/jon-spaihts/"
                                                title="Jon Spaihts"
                                              >
                                                Jon Spaihts
                                              </a>
                                              ,{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/timothee-chalamet/"
                                                title="Timothée Chalamet"
                                              >
                                                Timothée Chalamet
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Thể loại:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/the-loai-phim/action/"
                                                title="Action"
                                              >
                                                Action
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Khởi chiếu:
                                              </span>{" "}
                                              01/03/2024
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Thời lượng:
                                              </span>{" "}
                                              120 phút
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Ngôn ngữ:
                                              </span>{" "}
                                              Phụ đề
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </div>

                              <a
                                href="#"
                                className="close-detail"
                                onClick={closeDetail}
                              >
                                Đóng
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="300"
                  data-aos-offset="0"
                  class="col film-col-item"
                >
                  <div class="col-inner">
                    <div class="row row-collapse align-center film-row-item">
                      <div
                        id="col-1452808497"
                        class="col film-item small-12 large-12"
                      >
                        <ul class="col-inner">
                          <li class="text thumb">
                            <a
                              title="MAI"
                              class=""
                              data-url="https://bhdstar.vn/phim/dune-part-ii/"
                              href="#filmQuickView"
                              data-id="34495"
                            >
                              <img
                                class="aligncenter size-medium wp-image-67"
                                src={madam}
                                alt="MAI"
                              />
                            </a>
                          </li>
                          <li class="meta">
                            <span class="age-limit T16">T18</span>
                            <span class="type">Phụ đề</span>
                            <span class="format">2D</span>
                          </li>
                          <h4 class="title text-uppercase">MADAME WEB</h4>
                          <li class="cats">
                            Thể loại phim:{" "}
                            <a
                              href="https://bhdstar.vn/the-loai-phim/action/"
                              title="Action"
                            >
                              Drama
                            </a>
                          </li>
                          <li className="buttons">
                            <a
                              title="THE GARFIELD MOVIE"
                              data-url="https://bhdstar.vn/phim/the-garfield-movie/"
                              href="#filmQuickView"
                              data-id="1115"
                              class="button secondary is-small non-ticket-button"
                            >
                              <span>Thông tin chi tiết</span>
                            </a>
                            <div
                              className="overlay"
                              style={{ display: "none" }}
                              onClick={closeDetail}
                            ></div>

                            <div
                              className="detail-content"
                              style={{ display: "none" }}
                            >
                              <div
                                id="filmQuickView"
                                className="lightbox-by-id lightbox-content lightbox-white"
                                style={{
                                  maxWidth: "1100px",
                                  padding: "10px 40px",
                                }}
                              >
                                <section
                                  className="section"
                                  id="section_39126402"
                                >
                                  <div className="bg section-bg fill bg-fill bg-loaded" />
                                  <div className="section-content relative">
                                    <div
                                      id="gap-991741491"
                                      className="gap-element clearfix"
                                      style={{
                                        display: "block",
                                        height: "auto",
                                      }}
                                    />
                                    <div
                                      className="row single-film-video-row"
                                      id="row-1669531677"
                                    >
                                      <div
                                        id="col-1682650030"
                                        className="col medium-12 small-12 large-12"
                                      >
                                        <div className="col-inner text-center">
                                          <div className="trailer">
                                            <iframe
                                              title="(Official Trailer) DUNE 2 - Hành Tinh Cát Phần 2 - Trailer 3 | DKKC: 01.03.2024"
                                              width={640}
                                              height={360}
                                              // src="https://www.youtube.com/embed/gdVNnwEgSPE?feature=oembed"
                                              frameBorder={0}
                                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                              allowFullScreen
                                            />
                                          </div>
                                          <a
                                            style={{ margin: "0px" }}
                                            className="button trailer-viewer white is-outline is-small"
                                            href="#"
                                            onclick="toggleTrailerVideo();return false;"
                                          >
                                            <span>← Xem thông tin</span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="row single-film-row"
                                      id="row-1029861583"
                                    >
                                      <div
                                        id="col-1480397685"
                                        className="col image-col medium-5 small-12 large-4"
                                      >
                                        <div className="col-inner text-center">
                                          <div
                                            className="img has-hover x md-x lg-x y md-y lg-y"
                                            id="image_2125486326"
                                          >
                                            <div className="img-inner dark">
                                              <img
                                                src={madam}
                                                alt="DUNE: PART II"
                                              />
                                            </div>
                                          </div>
                                          <a
                                            onclick="ldapp_bookNow('Phim này chỉ dành cho trẻ em trên 16 tuổi. Vui lòng cân nhắc khi mua vé. BQL Rạp sẽ phải từ chối cho vào nếu sai quy định.', 'dune-part-ii');return false;"
                                            className="button primary is-small ticket-button"
                                          >
                                            <span>Mua vé ngay</span>
                                          </a>
                                          <a
                                            className="button trailer-viewer white is-outline is-small"
                                            href="#"
                                            onclick="toggleTrailerVideo();return false;"
                                          >
                                            <span>Xem trailer</span>
                                          </a>
                                        </div>
                                      </div>
                                      <div
                                        id="col-15579790"
                                        className="col info-col medium-7 small-12 large-8"
                                      >
                                        <div className="col-inner">
                                          <h1 className="title text-uppercase">
                                            DUNE: PART II
                                          </h1>
                                          <div className="excerpt">
                                            <p>
                                              Một cậu bé trở thành Đấng cứu thế
                                              của những người du mục trên một
                                              hành tinh sa mạc có những con sâu
                                              khổng lồ bảo vệ một loại hàng hóa
                                              có tên là Spice. Anh ta sẽ trả cái
                                              giá nào để trở thành người cai trị
                                              mới của vũ trụ ?
                                            </p>
                                          </div>
                                          <div className="metaa">
                                            <p>
                                              <span className="meta-title">
                                                Phân loại:
                                              </span>{" "}
                                              <span className="tag age-limit">
                                                T16
                                              </span>{" "}
                                              <span className="text-uppercae">
                                                Phim phổ biến đến người xem từ
                                                16 tuổi trở lên
                                              </span>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Định dạng:
                                              </span>{" "}
                                              <span className="tag format">
                                                2D
                                              </span>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Đạo diễn:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/dao-dien/denis-villeneuve/"
                                                title="Denis Villeneuve"
                                              >
                                                Denis Villeneuve
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Diễn viên:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/denis-villeneuve/"
                                                title="Denis Villeneuve"
                                              >
                                                Denis Villeneuve
                                              </a>
                                              ,{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/jon-spaihts/"
                                                title="Jon Spaihts"
                                              >
                                                Jon Spaihts
                                              </a>
                                              ,{" "}
                                              <a
                                                href="https://bhdstar.vn/dien-vien/timothee-chalamet/"
                                                title="Timothée Chalamet"
                                              >
                                                Timothée Chalamet
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Thể loại:
                                              </span>{" "}
                                              <a
                                                href="https://bhdstar.vn/the-loai-phim/action/"
                                                title="Action"
                                              >
                                                Action
                                              </a>
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Khởi chiếu:
                                              </span>{" "}
                                              01/03/2024
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Thời lượng:
                                              </span>{" "}
                                              120 phút
                                            </p>
                                            <p>
                                              <span className="meta-title">
                                                Ngôn ngữ:
                                              </span>{" "}
                                              Phụ đề
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </div>

                              <a
                                href="#"
                                className="close-detail"
                                onClick={closeDetail}
                              >
                                Đóng
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className="section"
            id="section_82365801"
          >
            <div class="bg section-bg fill bg-fill bg-loaded"></div>

            <div className="section-content relative">
              <div
                className="gap-element clearfix"
                style={{ display: "block", height: "auto", paddingTop: "30px" }}
              ></div>

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
                        className="button primary is-outline"
                      >
                        <span>Đăng ký ngay</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section news-section" id="section_1576838817">
            <div className="bg section-bg fill bg-fill bg-loaded">
              <div className="section-content relative">
                <div
                  id="gap-2106675855"
                  className="gap-element clearfix"
                  style={{ display: "block", height: "auto" }}
                >
                  <div className="row align-middle align-center card-member-row">
                    <div className="cangiua"></div>
                    <div id="col-1063932164" class="col small-12 large-12">
                      <div class="col-inner1 text-center">
                        <div id="text-1009336684" class="text">
                          <h2 id="p1">Phim sắp chiếu</h2>
                        </div>
                      </div>
                    </div>
                    00
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
export default Home;
