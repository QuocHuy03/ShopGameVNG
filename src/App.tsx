import React from "react";
import { PATH } from "./constants/route.constants";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { Helmet } from "react-helmet";
import RechargePage from "./pages/RechargePage";
import LoginPage from "./pages/LoginPage";

function App({}) {
  const location = useLocation();
  React.useEffect(() => {
    console.log("URL huydev:", location.pathname);
  }, [location.pathname]);
  const publicRoutes = [
    { path: PATH.HOME, component: HomePage },
    { path: PATH.LOGIN, component: LoginPage },
    { path: PATH.RECHARGE, component: RechargePage },
  ];
  const getTitle = () => {
    return "Liên Minh Huyền Thoại: Tốc Chiến";
  };
  return (
    <React.Fragment>
      <Helmet>
        <title>{getTitle()}</title>
      </Helmet>
      <Routes>
        {publicRoutes.map(({ path, component }) => (
          <Route
            key={path}
            path={path}
            element={React.createElement(component)}
          />
        ))}
        <Route path={PATH.NOTFOUND} element={<NotFoundPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
