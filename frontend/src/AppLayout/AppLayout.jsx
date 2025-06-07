import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const AppLayout = () => {
  return (
    <>
      <Header />
      <ScrollToTop/>
      <Outlet />
      <Footer/>
    </>
  );
};

export default AppLayout;
