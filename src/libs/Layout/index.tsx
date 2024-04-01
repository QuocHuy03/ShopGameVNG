import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useMediaQuery } from "react-responsive";
import { AppContext } from "../../contexts/AppContextProvider";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 980 });
  const { isOpenSidebar } = React.useContext<any>(AppContext);
  return (
    <React.Fragment>
      <div id="app">
        <div className="page-component__scroll el-scrollbar">
          <div
            className={`el-scrollbar__wrap ${
              isMobile ? "el-scrollbar__wrap--hidden-default" : ""
            }`}
            style={{ overflowY: isOpenSidebar ? "scroll" : "hidden" }}
          >
            <div className="el-scrollbar__view">
              <div className={`layout ${isMobile ? "mobile" : "pc"}`}>
                <div id="payment-wrapper" style={{ position: "relative" }}>
                  <Header />
                  {children}
                </div>
                <Footer />
              </div>
            </div>
            <div className="el-scrollbar__bar is-horizontal">
              <div
                className="el-scrollbar__thumb"
                style={{ transform: "translateX(0%)" }}
              />
            </div>
            <div className="el-scrollbar__bar is-vertical">
              <div
                className="el-scrollbar__thumb"
                style={{ transform: "translateY(0%)", height: "64.0457%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Layout;
