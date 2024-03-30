import garden from "/FE_CGV/fecenima/src/img/garden.jpg";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Khuyenmai() {
  useEffect(() => {
    Aos.init();
  }, []);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          {/* Phần tiêu đề */}
          <div className="col-12 col-lg-12">
            <div className="col-inner1 text-center">
              <div className="text">
                <h2 id="p1">Khuyến Mãi</h2>
              </div>
            </div>
          </div>

          {/* Phần nội dung */}
          <div className="col-12 col-lg-12">
            <div className="row align-middle align-center" id="row-1156932607">
              <div id="col-1439933940" className="col small-12 large-12">
                <div className="col-inner">
                  <div
                    className="row large-columns-3 medium-columns-2 small-columns-1 news-slider row-slider slider slider-nav-dots-simple default-slider slider-nav-simple slider-nav-large slider-nav-light slider-style-normal is-draggable slider-lazy-load-active flickity-enabled"
                    data-flickity-options='{"imagesLoaded": true, "groupCells": 1, "dragThreshold" : 5, "cellAlign": "left","wrapAround": true,"prevNextButtons": true,"percentPosition": true,"pageDots": true, "rightToLeft": false, "autoPlay" : 6000}'
                    tabIndex={0}
                  >
                    <div
                      className="flickity-viewport"
                      style={{ height: "309.587px", touchAction: "pan-y" }}
                    >
                      <div className="flickity-slider">
                        {/* Slide 1 */}
                        <div
                          className="col"
                          style={{
                            width: "145%",
                            marginLeft: "11%",
                            marginRight: "-22%",
                          }}
                        >
                          <div className="col-inner">
                            <div className="post-item">
                              <div className="thumb">
                                <a
                                  href="#postQuickView"
                                  data-url="https://bhdstar.vn/quet-ma-qr-thang-tien-vao-rap/"
                                  title="Quét mã QR – Thẳng tiến vào Rạp"
                                >
                                  <img
                                    width={800}
                                    height={450}
                                    src="https://bhdstar.vn/wp-content/uploads/2023/08/Rectangle-21.png"
                                    data-src="https://bhdstar.vn/wp-content/uploads/2023/08/Rectangle-21.png"
                                    className="attachment-post-thumbnail size-post-thumbnail wp-post-image lazy-load-active"
                                    alt=""
                                    decoding="async"
                                    srcSet="https://bhdstar.vn/wp-content/uploads/2023/08/Rectangle-21.png 800w, https://bhdstar.vn/wp-content/uploads/2023/08/Rectangle-21-768x432.png 768w, https://bhdstar.vn/wp-content/uploads/2023/08/Rectangle-21-700x394.png 700w"
                                    data-srcset="https://bhdstar.vn/wp-content/uploads/2023/08/Rectangle-21.png 800w, https://bhdstar.vn/wp-content/uploads/2023/08/Rectangle-21-768x432.png 768w, https://bhdstar.vn/wp-content/uploads/2023/08/Rectangle-21-700x394.png 700w"
                                    sizes="(max-width: 800px) 100vw, 800px"
                                  />
                                </a>
                              </div>
                              <div className="info">
                                <a
                                  href="#postQuickView"
                                  data-url="https://bhdstar.vn/quet-ma-qr-thang-tien-vao-rap/"
                                  title="Quét mã QR – Thẳng tiến vào Rạp"
                                >
                                  <h4 className="title">
                                    Quét mã QR – Thẳng tiến vào Rạp
                                  </h4>
                                </a>
                                <div className="excerpt">
                                  <p>
                                    Thời gian sự kiện: 26/8/2023 – 26/9/2023
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Slide 2 */}
                        <div
                          className="col"
                          style={{
                            width: "145%",
                            marginLeft: "30%",
                            marginRight: "-22%",
                          }}
                        >
                          <div className="col-inner">
                            <div className="post-item">
                              <div className="thumb">
                                <a
                                  href="#postQuickView"
                                  data-url="https://bhdstar.vn/quet-ma-qr-thang-tien-vao-rap/"
                                  title="Quét mã QR – Thẳng tiến vào Rạp"
                                >
                                  <img
                                    width={800}
                                    height={450}
                                    src="https://bhdstar.vn/wp-content/uploads/2023/08/Rectangle-20.png"
                                  />
                                </a>
                              </div>
                              <div className="info">
                                <a
                                  href="#postQuickView"
                                  data-url="https://bhdstar.vn/quet-ma-qr-thang-tien-vao-rap/"
                                  title="Quét mã QR – Thẳng tiến vào Rạp"
                                >
                                  <h4 className="title">
                                    Happy day thứ 2 giá rẻ – Chỉ từ 60k/vé
                                  </h4>
                                </a>
                                <div className="excerpt">
                                  <p>
                                    Thời gian sự kiện: 26/8/2023 – 26/9/2023
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Slide 3 */}
                        <div
                          className="col"
                          style={{
                            width: "145%",
                            marginLeft: "30%",
                            marginRight: "-22%",
                          }}
                        >
                          <div className="col-inner">
                            <div className="post-item">
                              <div className="thumb">
                                <a
                                  href="#postQuickView"
                                  data-url="https://bhdstar.vn/quet-ma-qr-thang-tien-vao-rap/"
                                  title="Quét mã QR – Thẳng tiến vào Rạp"
                                >
                                  <img
                                    width={800}
                                    height={450}
                                    src="https://bhdstar.vn/wp-content/uploads/2023/08/Rectangle-18.png"
                                  />
                                </a>
                              </div>
                              <div className="info">
                                <a
                                  href="#postQuickView"
                                  data-url="https://bhdstar.vn/quet-ma-qr-thang-tien-vao-rap/"
                                  title="Quét mã QR – Thẳng tiến vào Rạp"
                                >
                                  <h4 className="title">
                                    Chạm thẻ visa – Tặng ngay bắp lớn
                                  </h4>
                                </a>
                                <div className="excerpt">
                                  <p>
                                    Thời gian sự kiện: 26/8/2023 – 26/9/2023
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Slide 4 */}
                        <div className="col" style={{ width: "56%" }}>
                          <div className="col-inner">
                            <div className="post-item">
                              {/* Nội dung của slide 4 */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="flickity-button flickity-prev-next-button previous"
                      type="button"
                      aria-label="Previous"
                    >
                      {/* Button prev */}
                    </button>
                    <button
                      className="flickity-button flickity-prev-next-button next"
                      type="button"
                      aria-label="Next"
                    >
                      {/* Button next */}
                    </button>
                    <ol className="flickity-page-dots">
                      <li className="dot" aria-label="Page dot 1" />
                      <li className="dot" aria-label="Page dot 2" />
                      <li className="dot" aria-label="Page dot 3" />
                      <li
                        className="dot is-selected"
                        aria-label="Page dot 4"
                        aria-current="step"
                      />
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Khuyenmai;
