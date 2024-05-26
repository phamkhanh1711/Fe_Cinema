import garden from "../img/garden.jpg";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Hethongrap() {
  useEffect(() => {
    Aos.init();
  }, []);
  useEffect(() => {
    // Sau khi trang đã được tải lại, cuộn về đầu trang
    window.scrollTo(0, 0);
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
        <CircularProgress className="loading"/>
      ) : (
        <div id="col-1063932164" class="col small-12 large-12">
          <div class="col-inner1 text-center">
            <div id="text-1009336684" class="text">
              <h2 id="p1">Hệ thống rạp</h2>
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
                                src={garden}
                                alt="DUNE: PART II"
                              />
                            </a>
                          </li>
                          <li class="meta">
                            <h4 class="title text-uppercase">
                              BHD Star The Garden
                            </h4>
                          </li>

                          <li className="buttons">
                            <a className="button primary is-small ticket-button">
                              <span> Thông tin chi tiết</span>
                            </a>
                            <a className="button secondary is-small info-button">
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
                                src="https://bhdstar.vn/wp-content/uploads/2023/12/LVV-243x330-1.jpg"
                                alt="MAI"
                              />
                            </a>
                          </li>
                          <li class="meta">
                            <h4 class="title text-uppercase">
                              BHD Star Le Van Liet
                            </h4>
                          </li>

                          <li class="buttons">
                            <a
                              onclick="ldapp_bookNow('Phim này chỉ dành cho trẻ em trên 16 tuổi. Vui lòng cân nhắc khi mua vé. BQL Rạp sẽ phải từ chối cho vào nếu sai quy định.', 'dune-part-ii');return false;"
                              href="/"
                              target="_self"
                              class="button primary is-small ticket-button"
                            >
                              <span> Thông tin chi tiết</span>
                            </a>
                            <a className="button secondary is-small info-button">
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
                                src="https://bhdstar.vn/wp-content/uploads/2023/12/PNT-CINEMA-243x330-1.jpg"
                                alt="MAI"
                              />
                            </a>
                          </li>
                          <li class="meta">
                            <h4 class="title text-uppercase">
                              BHD Star Phạm Ngọc Thạch
                            </h4>
                          </li>

                          <li class="buttons">
                            <a
                              onclick="ldapp_bookNow('Phim này chỉ dành cho trẻ em trên 16 tuổi. Vui lòng cân nhắc khi mua vé. BQL Rạp sẽ phải từ chối cho vào nếu sai quy định.', 'dune-part-ii');return false;"
                              href="/"
                              target="_self"
                              class="button primary is-small ticket-button"
                            >
                              <span> Thông tin chi tiết</span>
                            </a>
                            <a className="button secondary is-small info-button">
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
                                src="https://bhdstar.vn/wp-content/uploads/2023/12/long-khanh-243x330-1.jpg"
                                alt="MAI"
                              />
                            </a>
                          </li>
                          <li class="meta">
                            <h4 class="title text-uppercase">
                              BHD Star Phạm Hùng
                            </h4>
                          </li>

                          <li class="buttons">
                            <a
                              onclick="ldapp_bookNow('Phim này chỉ dành cho trẻ em trên 16 tuổi. Vui lòng cân nhắc khi mua vé. BQL Rạp sẽ phải từ chối cho vào nếu sai quy định.', 'dune-part-ii');return false;"
                              href="/"
                              target="_self"
                              class="button primary is-small ticket-button"
                            >
                              <span> Thông tin chi tiết</span>
                            </a>
                            <a className="button secondary is-small info-button">
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
                                src="https://bhdstar.vn/wp-content/uploads/2023/12/PH-243x330-1.jpg"
                                alt="MAI"
                              />
                            </a>
                          </li>
                          <li class="meta">
                            <h4 class="title text-uppercase">BHD Star Huế</h4>
                          </li>

                          <li class="buttons">
                            <a
                              onclick="ldapp_bookNow('Phim này chỉ dành cho trẻ em trên 16 tuổi. Vui lòng cân nhắc khi mua vé. BQL Rạp sẽ phải từ chối cho vào nếu sai quy định.', 'dune-part-ii');return false;"
                              href="/"
                              target="_self"
                              class="button primary is-small ticket-button"
                            >
                              <span> Thông tin chi tiết</span>
                            </a>
                            <a className="button secondary is-small info-button">
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
                                src="https://bhdstar.vn/wp-content/uploads/2023/12/PH-243x330-1.jpg"
                                alt="MAI"
                              />
                            </a>
                          </li>
                          <li class="meta">
                            <h4 class="title text-uppercase">
                              BHD Star Thảo Điền
                            </h4>
                          </li>

                          <li class="buttons">
                            <a
                              onclick="ldapp_bookNow('Phim này chỉ dành cho trẻ em trên 16 tuổi. Vui lòng cân nhắc khi mua vé. BQL Rạp sẽ phải từ chối cho vào nếu sai quy định.', 'dune-part-ii');return false;"
                              href="/"
                              target="_self"
                              class="button primary is-small ticket-button"
                            >
                              <span> Thông tin chi tiết</span>
                            </a>
                            <a className="button secondary is-small info-button">
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
                                src="https://bhdstar.vn/wp-content/uploads/2023/12/PH-243x330-1.jpg"
                                alt="MAI"
                              />
                            </a>
                          </li>
                          <li class="meta">
                            <h4 class="title text-uppercase">
                              BHD Star Quang Trung
                            </h4>
                          </li>

                          <li class="buttons">
                            <a
                              onclick="ldapp_bookNow('Phim này chỉ dành cho trẻ em trên 16 tuổi. Vui lòng cân nhắc khi mua vé. BQL Rạp sẽ phải từ chối cho vào nếu sai quy định.', 'dune-part-ii');return false;"
                              href="/"
                              target="_self"
                              class="button primary is-small ticket-button"
                            >
                              <span> Thông tin chi tiết</span>
                            </a>
                            <a className="button secondary is-small info-button">
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
                                src="https://bhdstar.vn/wp-content/uploads/2023/12/THAO-DIEN-CINEMA-243x330-1.jpg"
                                alt="MAI"
                              />
                            </a>
                          </li>
                          <li class="meta">
                            <h4 class="title text-uppercase">
                              BHD Star Pham Hung
                            </h4>
                          </li>

                          <li class="buttons">
                            <a
                              onclick="ldapp_bookNow('Phim này chỉ dành cho trẻ em trên 16 tuổi. Vui lòng cân nhắc khi mua vé. BQL Rạp sẽ phải từ chối cho vào nếu sai quy định.', 'dune-part-ii');return false;"
                              href="/"
                              target="_self"
                              class="button primary is-small ticket-button"
                            >
                              <span> Thông tin chi tiết</span>
                            </a>
                            <a className="button secondary is-small info-button">
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
                                src="https://bhdstar.vn/wp-content/uploads/2023/12/QUANG-TRUNG-243x330-1.jpg"
                                alt="MAI"
                              />
                            </a>
                          </li>
                          <li class="meta">
                            <h4 class="title text-uppercase">
                              BHD Star Long khanh
                            </h4>
                          </li>

                          <li class="buttons">
                            <a
                              onclick="ldapp_bookNow('Phim này chỉ dành cho trẻ em trên 16 tuổi. Vui lòng cân nhắc khi mua vé. BQL Rạp sẽ phải từ chối cho vào nếu sai quy định.', 'dune-part-ii');return false;"
                              href="/"
                              target="_self"
                              class="button primary is-small ticket-button"
                            >
                              <span> Thông tin chi tiêt</span>
                            </a>
                            <a className="button secondary is-small info-button">
                              <span></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
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
export default Hethongrap;
