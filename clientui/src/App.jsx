import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./layout/Header";
import PopularProduct from "./layout/PopularProduct";
import UserReview from "./component/UserReview";
import Footer from "./layout/Footer";

function App() {
  return (
    <>
      <Header />
      <PopularProduct />
      <UserReview />
      <Footer />
    </>
  );
}

export default App;
