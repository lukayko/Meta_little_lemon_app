import React from "react";
import HeroSection from "./components/HeroSection";
import ChefSection from "./components/ChefSection";
import Menu from "./components/Menu";
import TableOrder from "./components/TableOrder";
import Footer from "./components/Footer";

function Homepage() {
  return (
    <>
      <HeroSection />
      <ChefSection />
      <Menu />
      <TableOrder />
      <Footer />
    </>
  );
}
export default Homepage;
