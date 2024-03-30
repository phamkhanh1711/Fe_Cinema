import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
function TaiKhoan() {
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
        <div id="col-1063932164" className="col small-12 large-12">
          <div className="page-title-inner dark">
            <div className="row align-middle">
              <div className="col medium-12 small-12 large-12">
                <div className="col-inner">
                  <h2 className="entry-title text-center">Tài khoản</h2>
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
                      <div>
                        <div className="row single-film-row single-mt-row myaccount-row">
                          <div className="col-12 col-md-12 col-lg-7">
                            <div id="col-inner1" className="col-inner">
                              <div className="icon-box icon-box-left align-middle text-left myaccount-box">
                                <div className="icon-box-img circle text-center">
                                  <label
                                    className="img-select"
                                    style={{ margin: "0px" }}>
                                    <img src="https://bhdstar.vn/wp-content/assets/loodo/no-user.jpg" />
                                    <input
                                      type="file"
                                      name="avatarFile"
                                      accept="image/*"
                                      style={{ display: "none" }}
                                    />
                                  </label>
                                  <div
                                    style={{
                                      margin: "10px 0px 0px",
                                      display: "none",
                                    }}>
                                    <a
                                      className="button is-xxsmall secondary"
                                      href="#"
                                      style={{ margin: "0px" }}>
                                      Hủy
                                    </a>
                                    &nbsp;
                                    <a
                                      href="#"
                                      className="button is-xxsmall"
                                      style={{ margin: "0px" }}>
                                      Cập nhật
                                    </a>
                                  </div>
                                </div>
                                <div className="icon-box-text p-last-0">
                                  <h4 className="display-name">Phạm Khánh</h4>
                                  <div className="account-metas">
                                    <ul className="account-meta">
                                      <li>
                                        Điểm RP: <span>0</span>
                                      </li>
                                      <li>
                                        Tổng visit: <span>0</span>
                                      </li>
                                    </ul>
                                    <ul className="account-meta">
                                      <li>
                                        Expried visit: <span>0</span>
                                      </li>
                                      <li>
                                        Active visit: <span>0</span>
                                      </li>
                                    </ul>
                                    <ul className="account-meta">
                                      <li>
                                        Tổng chi tiêu trong tháng (3/2024):{" "}
                                        <span>0&nbsp;VND</span>
                                      </li>
                                    </ul>
                                  </div>
                                  <span className="description">
                                    Vui lòng đăng ảnh chân dung, thấy rõ mặt có
                                    kích thước: ngang 200 pixel và dọc 200 pixel
                                    (dung lượng dưới 1MB)
                                  </span>
                                </div>
                              </div>
                              <hr></hr>

                              <div className="row">
                                <div className="col-md-12 col-sm-12 col-lg-6">
                                  <div className="col-inner">
                                    <p>
                                      <label htmlFor="reg_last_name">
                                        Họ <span className="required">*</span>
                                      </label>
                                      <input id="reg_last_name" type="text" />
                                    </p>
                                  </div>
                                </div>

                                <div className="col-md-12 col-sm-12 col-lg-6">
                                  <div className="col-inner">
                                    <p>
                                      <label htmlFor="reg_last_name">
                                        Tên đệm và tên{" "}
                                        <span className="required">*</span>
                                      </label>
                                      <input id="reg_last_name" type="text" />
                                    </p>
                                  </div>
                                </div>

                                <div className="col-md-12 col-sm-12 col-lg-12">
                                  <div className="col-inner">
                                    <p>
                                      <label htmlFor="reg_last_name">
                                        Email{" "}
                                        <span className="required">*</span>
                                      </label>
                                      <input id="reg_last_name1" type="text" />
                                    </p>
                                  </div>
                                </div>

                                <div className="col-md-12 col-sm-12 col-lg-8">
                                  <div className="col-inner">
                                    <p>
                                      <label htmlFor="reg_last_name">
                                        Mật khẩu{" "}
                                        <span className="required">*</span>
                                      </label>
                                      <input id="reg_last_name" type="text" />
                                    </p>
                                  </div>
                                </div>

                                <div className="col-md-12 col-sm-12 col-lg-12">
                                  <div className="col-inner">
                                    <p>
                                      <label htmlFor="reg_last_name">
                                        Số điện thoại{" "}
                                        <span className="required">*</span>
                                      </label>
                                      <input id="reg_last_name2" type="text" />
                                    </p>
                                  </div>
                                </div>

                                <div className="col-md-12 col-sm-12 col-lg-12">
                                  <div className="col-inner">
                                    <p>
                                      <label htmlFor="reg_last_name">
                                        Giới tính{" "}
                                        <span className="required">*</span>
                                      </label>
                                      <select
                                        id="reg_title"
                                        class="form-select"
                                        aria-label="Default select example">
                                        <option value="male">Nam</option>
                                        <option value="female">Nữ</option>
                                        <option value="other">Khác</option>
                                      </select>
                                    </p>
                                  </div>
                                </div>

                                <div className="col-md-12 col-sm-12 col-lg-12">
                                  <div className="col-inner">
                                    <p>
                                      <label htmlFor="reg_last_name">
                                        Ngày sinh{" "}
                                        <span className="required">*</span>
                                      </label>
                                    </p>
                                  </div>
                                </div>

                                <div className="col medium-12 small-12 large-4">
                                  <div className="col-inner">
                                    <p id="p2">
                                      <select
                                        tabindex="-1"
                                        class="select2-hidden-accessible"
                                        aria-hidden="true">
                                        =<option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="03">03</option>
                                        <option value="04">04</option>
                                        <option value="05">05</option>
                                        <option value="06">06</option>
                                        <option value="07">07</option>
                                        <option value="08">08</option>
                                        <option value="09">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                      </select>
                                    </p>
                                  </div>
                                </div>

                                <div className="col medium-12 small-12 large-4">
                                  <div className="col-inner">
                                    <p id="p3">
                                      <select
                                        tabindex="-1"
                                        class="select2-hidden-accessible"
                                        aria-hidden="true">
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="03">03</option>
                                        <option value="04">04</option>
                                        <option value="05">05</option>
                                        <option value="06">06</option>
                                        <option value="07">07</option>
                                        <option value="08">08</option>
                                        <option value="09">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                      </select>
                                    </p>
                                  </div>
                                </div>

                                <div class="col medium-12 small-12 large-4">
                                  <div class="col-inner">
                                    <p id="p4">
                                      <select
                                        tabindex="-1"
                                        class="select2-hidden-accessible"
                                        aria-hidden="true">
                                        <option value="2024">2024</option>
                                        <option value="2023">2023</option>
                                        <option value="2022">2022</option>
                                        <option value="2021">2021</option>
                                        <option value="2020">2020</option>
                                        <option value="2019">2019</option>
                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>
                                        <option value="2016">2016</option>
                                        <option value="2015">2015</option>
                                        <option value="2014">2014</option>
                                        <option value="2013">2013</option>
                                        <option value="2012">2012</option>
                                        <option value="2011">2011</option>
                                        <option value="2010">2010</option>
                                        <option value="2009">2009</option>
                                        <option value="2008">2008</option>
                                        <option value="2007">2007</option>
                                        <option value="2006">2006</option>
                                        <option value="2005">2005</option>
                                        <option value="2004">2004</option>
                                        <option value="2003">2003</option>
                                        <option value="2002">2002</option>{" "}
                                        <option value="2001">2001</option>
                                        <option value="2000">2000</option>
                                        <option value="1999">1999</option>
                                        <option value="1998">1998</option>
                                        <option value="1997">1997</option>
                                        <option value="1996">1996</option>
                                        <option value="1995">1995</option>
                                        <option value="1994">1994</option>
                                        <option value="1993">1993</option>
                                        <option value="1992">1992</option>
                                        <option value="1991">1991</option>
                                        <option value="1990">1990</option>
                                        <option value="1989">1989</option>
                                        <option value="1988">1988</option>
                                        <option value="1987">1987</option>
                                        <option value="1986">1986</option>
                                        <option value="1985">1985</option>
                                        <option value="1984">1984</option>
                                        <option value="1983">1983</option>
                                        <option value="1982">1982</option>
                                        <option value="1981">1981</option>
                                        <option value="1980">1980</option>
                                        <option value="1979">1979</option>
                                        <option value="1978">1978</option>
                                        <option value="1977">1977</option>
                                        <option value="1976">1976</option>
                                        <option value="1975">1975</option>
                                        <option value="1974">1974</option>
                                        <option value="1973">1973</option>
                                        <option value="1972">1972</option>
                                        <option value="1971">1971</option>
                                        <option value="1970">1970</option>
                                        <option value="1969">1969</option>
                                        <option value="1968">1968</option>
                                        <option value="1967">1967</option>
                                        <option value="1966">1966</option>
                                        <option value="1965">1965</option>
                                        <option value="1964">1964</option>
                                        <option value="1963">1963</option>
                                        <option value="1962">1962</option>
                                        <option value="1961">1961</option>
                                        <option value="1960">1960</option>
                                        <option value="1959">1959</option>
                                        <option value="1958">1958</option>
                                        <option value="1957">1957</option>
                                        <option value="1956">1956</option>
                                        <option value="1955">1955</option>
                                        <option value="1954">1954</option>
                                        <option value="1953">1953</option>
                                        <option value="1952">1952</option>
                                        <option value="1951">1951</option>
                                        <option value="1950">1950</option>
                                        <option value="1949">1949</option>
                                        <option value="1948">1948</option>
                                        <option value="1947">1947</option>
                                        <option value="1946">1946</option>
                                        <option value="1945">1945</option>
                                        <option value="1944">1944</option>
                                        <option value="1943">1943</option>
                                        <option value="1942">1942</option>
                                        <option value="1941">1941</option>
                                        <option value="1940">1940</option>
                                        <option value="1939">1939</option>
                                        <option value="1938">1938</option>
                                        <option value="1937">1937</option>
                                        <option value="1936">1936</option>
                                        <option value="1935">1935</option>
                                        <option value="1934">1934</option>
                                      </select>
                                    </p>
                                  </div>
                                </div>

                                <div className="col-md-12 col-sm-12 col-lg-12">
                                  <div className="col-inner">
                                    <p>
                                      <label htmlFor="reg_last_name">
                                        Số điện thoại{" "}
                                        <span className="required">*</span>
                                      </label>
                                      <input id="reg_last_name2" type="text" />
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-12 col-md-12 col-lg-5">
                            <div id="col-inner2" className="col-inner">
                              <aside className="widget">
                                <div className="icon-box icon-box-left align-middle text-left myaccount-card-box">
                                  <div className="icon-box-img">
                                    <div className="img-select">
                                      <img src="https://bhdstar.vn/phpqrcode/?text=ONLA1033377" />
                                    </div>
                                  </div>
                                  <div className="icon-box-text p-last-0">
                                    <div className="account-card-metas">
                                      <ul className="account-card-meta">
                                        <li>
                                          Tên đăng nhập:{" "}
                                          <span>
                                            khanhdanang12345@gmail.com
                                          </span>
                                        </li>
                                        <li>
                                          Số thẻ: <span>ONLA1033377</span>
                                        </li>
                                        <li>
                                          Hạng thẻ: <span>Star</span>
                                        </li>
                                        <li>
                                          Ngày đăng ký: <span>24/02/2024</span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </aside>
                            </div>
                          </div>
                        </div>

                        <div classname="row align-items-center form-row">
                          <div classname="col-md-12 col-sm-12 col-lg-8">
                            <h2 style={{ marginBottom: "0px" }}>
                              Lịch sử giao dịch
                            </h2>
                          </div>

                          <div className="table-container">
                            <table className="table table-bordered">
                              <thead>
                                <tr>
                                  <th className="text-center">STT</th>
                                  <th className="text-center">
                                    Thời gian giao dịch
                                  </th>
                                  <th className="text-center">Mã lấy vé</th>
                                  <th className="text-left">Thông tin rạp</th>
                                  <th className="text-right">Tổng tiền</th>
                                  <th className="text-right">Điểm RP</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="text-right" colSpan={4}>
                                    <b>Tổng cộng</b>
                                  </td>
                                  <td className="text-right">
                                    <span style={{ display: "none" }}>
                                      <b>0 VND</b>
                                    </span>
                                  </td>
                                  <td className="text-right">
                                    <b>0</b>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
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
    </div>
  );
}
export default TaiKhoan;
