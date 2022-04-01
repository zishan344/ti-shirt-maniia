import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import OrderReview from "./component/orderReview/OrderReview";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route
          path="/orderreview"
          element={<OrderReview></OrderReview>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
