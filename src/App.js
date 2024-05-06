import "./App.css";
import { CountdownProvider } from "./CountdownContext";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import React, { useState } from "react";
import { UserContext } from "./UserContext";
function App(props) {


  const [tongqty, setQty] = useState();
  function loginContext(xx) {
    setQty(xx);
  }




  return (
    <div>
      <UserContext.Provider value={{
        tongqty: tongqty,
        loginContext: loginContext,
      
      }}>
        <Header />
        <div
          style={{
            paddingTop: "135px",
            minHeight: "100vh",
            background: "rgb(18, 24, 37)",
          }}>
          <div id="col-1063932164" class="col small-12 large-12">
            {props.children}
          </div>
        </div>
      </UserContext.Provider>

      <Footer />
    </div>
  );
}

export default App;
