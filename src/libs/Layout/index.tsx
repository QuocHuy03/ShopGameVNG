import React from "react";
import Header from "../Header";
import Footer from "../Footer";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <div id="app">
        <div className="layout pc">
          <div id="payment-wrapper" style={{ position: "relative" }}>
            <Header />
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Layout;
