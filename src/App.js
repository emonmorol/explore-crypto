import { Route, Routes } from "react-router-dom";
import "./App.css";
import CoinDetail from "./Components/CoinDetail/CoinDetail";
import Coins from "./Components/Coins/Coins";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/coins" element={<Coins />}></Route>
        <Route path="/coin-details/:id" element={<CoinDetail />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
