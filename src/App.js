import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./AboutUs";
import OnlineOrder from "./OnlineOrder";
import Reservation from "./Reservation";
import Homepage from "./Homepage";
import Menu from "./Menu";
import FranchiseOffer from "./FranchiseOffer";
import OurFuture from "./OurFuture";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/online-order" element={<OnlineOrder />} />
        <Route path="/table-reservation" element={<Reservation />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/franchise-offer" element={<FranchiseOffer />} />
        <Route path="/our-future" element={<OurFuture />} />
      </Routes>
    </>
  );
}

export default App;
