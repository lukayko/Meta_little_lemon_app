import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import OnlineOrder from "./pages/OnlineOrder";
import Reservation from "./pages/Reservation";
import Homepage from "./pages/Homepage";
import Menu from "./pages/Menu";
import FranchiseOffer from "./pages/FranchiseOffer";
import OurFuture from "./pages/OurFuture";
import ConfirmedBooking from "./pages/ConfirmedBooking";

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
        <Route path="/confirmed-booking" element={<ConfirmedBooking />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
