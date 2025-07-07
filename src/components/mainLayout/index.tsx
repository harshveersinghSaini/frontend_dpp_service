import React from "react";
import { Outlet } from "react-router-dom";
import "@/styles/mainLayout/_main.scss";
import "./mainLayout.scss";
import Footer from "../Footer/Footer";

const MainLayout: React.FC = () => {
  return (
    <div className="publicLayout">
      <div className="publicLayout_inner">
        <div className="publicLayout_left">
          <img
            src="/Image/loginMainImage.png"
            alt="loginMainImage logo"
            className=""
          />
        </div>
        <div className="public-main">
          <Outlet />
        </div>
      </div>
      <div className="publicLayout_footer">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
