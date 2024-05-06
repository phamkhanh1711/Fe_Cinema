import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { Button } from "@mui/material";
function TaiKhoan() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const [user, setUser] = useState({

    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
  
  });

  useEffect(()=>{
    let userData = JSON.parse(Cookies.get("Auth"));

  console.log(userData)
  if(userData)
  {
   
    setUser({
      fullName: userData.fullName,
        email : userData.email,
        password:userData.password,
      
        phoneNumber:userData.phoneNumber,
       
    })
    
  }    
  },[])


  const handleInput = (e) => {
    const nameInput = e.target.name;
    const value = e.target.value;
    setUser((state) => ({ ...state, [nameInput]: value }));
  };
 

   function handleSubmit(e) {
    e.preventDefault();
   
    
    let Auth = JSON.parse(Cookies.get("Auth"));
    console.log(Auth);
    let Token = Cookies.get("Token");
     
      let url = "http://localhost:4000/user/update/"+ Auth.userId;
      console.log(url)
      let config = { 
        headers: { 
        'Authorization': 'Bearer '+ Token,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
        } 
        
    };	
    console.log(config)
   
      const formData = new FormData();
       formData.append('name', user.fullName);
       formData.append('phone', user.phoneNumber);
      
       formData.append('password', user.password);
      formData.append('email', user.email);
   
   
     
      
      axios.put(url, formData, config)
        .then(response => {
          console.log(response);   
          alert("Update thông tin thanh cong");   
        })
        .catch(error => {
          console.log(error);      
        });
       
    }
  
const Info = () => {
  let Auth = JSON.parse(Cookies.get("Auth"));
  console.log(Auth);
   
    return (
      
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
                    Tên đăng nhập:
                    <span>
                      {Auth.email}
                    </span>
                  </li>
                  <li>
                    Số thẻ: <span>ONLA1033377</span>
                  </li>
                  <li>
                    Hạng thẻ: <span>Star</span>
                  </li>
                  <li>
                    Ngày đăng ký: <span>{Auth.createdAt}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
    )
}

  const renderdata = () => {
    return (
      <div id="col-inner1" className="col-inner">
        <div className="icon-box icon-box-left align-middle text-left myaccount-box">
          <div className="icon-box-img circle text-center">
            <label className="img-select" style={{ margin: "0px" }}>
              <img src="https://bhdstar.vn/wp-content/assets/loodo/no-user.jpg" />
              <input
                type="file"
                name="avatarFile"
                accept="image/*"
                style={{ display: "none" }}
              />
            </label>
          </div>
          <div className="icon-box-text p-last-0">
            <h4 className="display-name">Phạm Khánh</h4>
            <div className="account-metas">
              <ul className="account-meta">
                <li>
                  Tổng chi tiêu trong tháng (3/2024): <span>0&nbsp;VND</span>
                </li>
              </ul>
            </div>
            <span className="description">
              Vui lòng đăng ảnh chân dung, thấy rõ mặt có kích thước: ngang 200
              pixel và dọc 200 pixel (dung lượng dưới 1MB)
            </span>
          </div>
        </div>
        <hr></hr>

        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-6">
            <div className="col-inner">
              <p>
                <label htmlFor="reg_last_name">
                  Tên đệm và tên <span className="required">*</span>
                </label>
                <input id="reg_last_name" type="text" name="fullName" value={user.fullName} onChange={handleInput}/>
              </p>
            </div>
          </div>

          <div className="col-md-12 col-sm-12 col-lg-12">
            <div className="col-inner">
              <p>
                <label htmlFor="reg_last_name">
                  Email <span className="required">*</span>
                </label>
                <input id="reg_last_name1" type="text" name="email" value={user.email} onChange={handleInput}/>
              </p>
            </div>
          </div>

          <div className="col-md-12 col-sm-12 col-lg-8">
            <div className="col-inner">
              <p>
                <label htmlFor="reg_last_name">
                  Mật khẩu <span className="required">*</span>
                </label>
                <input id="reg_last_name" type="text" name="password"  value={user.password} onChange={handleInput}/>
              </p>
            </div>
          </div>

          <div className="col-md-12 col-sm-12 col-lg-12">
            <div className="col-inner">
              <p>
                <label htmlFor="reg_last_name">
                  Số điện thoại <span className="required">*</span>
                </label>
                <input id="reg_last_name2" type="text" name="phoneNumber" value={user.phoneNumber} onChange={handleInput}/>
              </p>
            </div>
          </div>

          <div className="col-md-12 col-sm-12 col-lg-12">
            <div className="col-inner">
              
              <Button onClick={handleSubmit} variant="contained" type="submit" sx={{ width: 200,height:25 , fontSize:"12px"}}>
                    Edit user 
                </Button>
             
            </div>
          </div>
          
        </div>
      </div>
    );
  };

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
                            {renderdata()}
                          </div>

                            {Info()}

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
