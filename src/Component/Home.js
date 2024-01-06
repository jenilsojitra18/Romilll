import React from "react";
import Card from "./Card";
import Main_Card from "./Main_Card";
import Banner from "./Banner";
import Footer from "./Footer";
import Top_Selling from "./Top_Selling";
import Best_Seller from "./Best_Seller";
// import Service from "./Service";
import Review from "./Review";

function Home() {
  return (
    <>
      <Banner />
      <Card />
      <Main_Card />
      <Best_Seller />
      <Top_Selling />
      <Review />
      {/* <Service /> */}
      <Footer />
    </>
  );
}

export default Home;
