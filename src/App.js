import "./App.css";
import { CountdownProvider } from "./CountdownContext";
import Footer from "./pages/Footer";
import Header from "./pages/Header";

function App(props) {
  return (
    <div>
      <CountdownProvider>
        <Header />
        <div
          style={{
            paddingTop: "135px",
            minHeight: "100vh",
            background: "rgb(18, 24, 37)",
          }}
        >
          <div id="col-1063932164" class="col small-12 large-12">
            {props.children}
          </div>
        </div>
      </CountdownProvider>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
