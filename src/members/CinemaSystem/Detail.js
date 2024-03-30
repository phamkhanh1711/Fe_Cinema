import "@fontsource/inter";
import * as React from "react";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import chibau from "/FE_CGV/fecenima/src/img/chibau.png";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Textarea from "@mui/joy/Textarea";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import FormatBold from "@mui/icons-material/FormatBold";
import FormatItalic from "@mui/icons-material/FormatItalic";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Check from "@mui/icons-material/Check";

function Detail() {
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
  const [italic, setItalic] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState("normal");
  const [anchorEl, setAnchorEl] = React.useState(null);
  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <div id="col-1063932164" className="col small-12 large-12">
          <div className="page-title-inner dark">
            <div className="row">
              <div className="detail-content">
                <div
                  id="filmQuickView"
                  className="lightbox-by-id lightbox-content lightbox-white"
                >
                  <section className="section" id="section_39126402">
                    <div className="bg section-bg fill bg-fill bg-loaded" />
                    <div className="section-content relative">
                      <div
                        id="gap-991741491"
                        className="gap-element clearfix"
                      />
                      <div className="row single-film-row" id="row-1029861583">
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
                                <img src={chibau} alt="DUNE: PART II" />
                              </div>
                            </div>
                            <Link
                              to={"/chontime"}
                              className="button primary is-small ticket-button"
                            >
                              <span>Mua vé ngay</span>
                            </Link>
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
                                Một cậu bé trở thành Đấng cứu thế của những
                                người du mục trên một hành tinh sa mạc có những
                                con sâu khổng lồ bảo vệ một loại hàng hóa có tên
                                là Spice. Anh ta sẽ trả cái giá nào để trở thành
                                người cai trị mới của vũ trụ ?
                              </p>
                            </div>
                            <div className="metaa">
                              <p>
                                <span className="meta-title">Phân loại:</span>{" "}
                                <span className="tag age-limit">T16</span>{" "}
                                <span className="text-uppercae">
                                  Phim phổ biến đến người xem từ 16 tuổi trở lên
                                </span>
                              </p>
                              <p>
                                <span className="meta-title">Định dạng:</span>{" "}
                                <span className="tag format">2D</span>
                              </p>
                              <p>
                                <span className="meta-title">Đạo diễn:</span>{" "}
                                <a
                                  href="https://bhdstar.vn/dao-dien/denis-villeneuve/"
                                  title="Denis Villeneuve"
                                >
                                  Denis Villeneuve
                                </a>
                              </p>
                              <p>
                                <span className="meta-title">Diễn viên:</span>{" "}
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
                                <span className="meta-title">Thể loại:</span>{" "}
                                <a
                                  href="https://bhdstar.vn/the-loai-phim/action/"
                                  title="Action"
                                >
                                  Action
                                </a>
                              </p>
                              <p>
                                <span className="meta-title">Khởi chiếu:</span>{" "}
                                01/03/2024
                              </p>
                              <p>
                                <span className="meta-title">Thời lượng:</span>{" "}
                                120 phút
                              </p>
                              <p>
                                <span className="meta-title">Ngôn ngữ:</span>{" "}
                                Phụ đề
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>

          <div className="response-area">
            <h2> RESPONSES</h2>
            <ul className="media-list">
              <li className="media">
                <a className="pull-left" href="#">
                  <img className="media-object" alt="" />
                </a>
                <div className="media-body">
                  <ul className="sinlge-post-meta">
                    <li>
                      <i className="fa fa-user" /> {"ádasdasd"}
                    </li>
                    <li>
                      <i className="fa fa-clock-o" /> {"ádasdasd"}
                    </li>
                    <li>
                      <i className="fa fa-calendar" /> {"ádasdasdasd"}
                    </li>
                  </ul>
                  <p>{"khanhasdjasndjkasbdajksdb"}</p>
                  <a className="btn btn-primary" href>
                    <i className="fa fa-reply" />
                    Reply
                  </a>
                </div>
              </li>

              <li className="media">
                <a className="pull-left" href="#">
                  <img className="media-object" alt="" />
                </a>
                <div className="media-body">
                  <ul className="sinlge-post-meta">
                    <li>
                      <i className="fa fa-user" /> {"ádasdasd"}
                    </li>
                    <li>
                      <i className="fa fa-clock-o" /> {"ádasdasd"}
                    </li>
                    <li>
                      <i className="fa fa-calendar" /> {"ádasdasdasd"}
                    </li>
                  </ul>
                  <p>{"khanhasdjasndjkasbdajksdb"}</p>
                  <a className="btn btn-primary" href>
                    <i className="fa fa-reply" />
                    Reply
                  </a>
                </div>
              </li>
              <li className="media">
                <a className="pull-left" href="#">
                  <img className="media-object" alt="" />
                </a>
                <div className="media-body">
                  <ul className="sinlge-post-meta">
                    <li>
                      <i className="fa fa-user" /> {"ádasdasd"}
                    </li>
                    <li>
                      <i className="fa fa-clock-o" /> {"ádasdasd"}
                    </li>
                    <li>
                      <i className="fa fa-calendar" /> {"ádasdasdasd"}
                    </li>
                  </ul>
                  <p>{"khanhasdjasndjkasbdajksdb"}</p>
                  <a className="btn btn-primary" href>
                    <i className="fa fa-reply" />
                    Reply
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="replay-box">
            <div className="row">
              <div className="col-sm-12">
                <div className="text-area">
                  <FormControl>
                    <FormLabel>Your comment</FormLabel>
                    <Textarea
                      placeholder="Type something here…"
                      minRows={7}
                      endDecorator={
                        <Box
                          sx={{
                            display: "flex",
                            gap: "var(--Textarea-paddingBlock)",
                            pt: "var(--Textarea-paddingBlock)",
                            borderTop: "1px solid",
                            borderColor: "divider",
                            flex: "auto",
                          }}
                        >
                          <IconButton
                            variant="plain"
                            color="neutral"
                            onClick={(event) =>
                              setAnchorEl(event.currentTarget)
                            }
                          >
                            <FormatBold />
                            <KeyboardArrowDown fontSize="md" />
                          </IconButton>
                          <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={() => setAnchorEl(null)}
                            size="sm"
                            placement="bottom-start"
                            sx={{ "--ListItemDecorator-size": "24px" }}
                          >
                            {["200", "normal", "bold"].map((weight) => (
                              <MenuItem
                                key={weight}
                                selected={fontWeight === weight}
                                onClick={() => {
                                  setFontWeight(weight);
                                  setAnchorEl(null);
                                }}
                                sx={{ fontWeight: weight }}
                              >
                                <ListItemDecorator>
                                  {fontWeight === weight && (
                                    <Check fontSize="sm" />
                                  )}
                                </ListItemDecorator>
                                {weight === "200" ? "lighter" : weight}
                              </MenuItem>
                            ))}
                          </Menu>
                          <IconButton
                            variant={italic ? "soft" : "plain"}
                            color={italic ? "primary" : "neutral"}
                            aria-pressed={italic}
                            onClick={() => setItalic((bool) => !bool)}
                          >
                            <FormatItalic />
                          </IconButton>
                          <Button sx={{ ml: "auto" }}>Send</Button>
                        </Box>
                      }
                      sx={{
                        fontSize: "16px",
                        minWidth: 300,
                        fontWeight,
                        fontStyle: italic ? "italic" : "initial",
                      }}
                    />
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Detail;
