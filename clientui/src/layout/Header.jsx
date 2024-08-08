import React from "react";
import NavBar from "../component/NavBar";
import TopBar from "../component/TopBar";
import Banner from "../component/Banner";

function Header() {
  return (
    <>
      <header>
        <TopBar />
        <NavBar />
        <Banner />
      </header>
    </>
  );
}

export default Header;
