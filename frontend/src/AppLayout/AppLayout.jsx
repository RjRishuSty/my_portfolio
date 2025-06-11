import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { Outlet, useLocation } from "react-router-dom";
import LoadingPageLayout from "./LoadingPageLayout";

const AppLayout = () => {
  const location = useLocation();
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  const admin = location.pathname === "/login" || location.pathname === "/admin";

  useEffect(() => {
    const imagesToLoad = [
      "/assets/banner.png",
      "/assets/banner2.png",
      "/assets/banner3.png",
      "/assets/banner4.png",
      "/assets/bootstrap.png",
      "/assets/comingsoon.jpg",
    ];

    let loadedCount = 0;
    const totalImages = imagesToLoad.length;

    if (totalImages === 0) {
      setTimeout(() => setAssetsLoaded(true), 2000); // simulate load
      return;
    }

    imagesToLoad.forEach((src) => {
      const img = new Image();
      img.src = src;

      img.onload = img.onerror = () => {
        loadedCount += 1;
        if (loadedCount === totalImages) {
          setTimeout(() => setAssetsLoaded(true), 2000); // simulate load
        }
      };
    });
  }, []);

  if (!assetsLoaded) {
    return <LoadingPageLayout />;
  }

  return (
    <>
      {admin ? (
        <>
          <Outlet />
        </>
      ) : (
        <>
          <Header />
          <ScrollToTop />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default AppLayout;
