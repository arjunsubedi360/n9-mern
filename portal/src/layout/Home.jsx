import React from "react";
import TopBar from "../component/TopBar";
import NavBar from "../component/NavBar";
import Banner from "../component/Banner";
import PopularProduct from "../component/PopularProduct";
import Footer from "../component/Footer";
import UserReview from "../component/UserReview";

function Home() {
  return (
    <>
      <header>
        <TopBar />
        <NavBar />
        <Banner />
      </header>
      <PopularProduct />
      <UserReview />
      <Footer />
    </>
  );
}

export default Home;
