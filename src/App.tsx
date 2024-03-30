import React from "react";
import { PATH } from "./constants/route.constants";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { Helmet } from "react-helmet";
import RechargePage from "./pages/RechargePage";
import LoginPage from "./pages/LoginPage";
import PrivateRoutes from "./utils/PrivateRoutes";

function App({}) {
  const location = useLocation();
  React.useEffect(() => {
    console.log("URL huydev:", location.pathname);
  }, [location.pathname]);
  const privateRoutes = [
    { path: PATH.HOME, component: HomePage },
    { path: PATH.RECHARGE, component: RechargePage },
  ];
  const publicRoutes = [{ path: PATH.LOGIN, component: LoginPage }];
  const getTitle = () => {
    return "Liên Minh Huyền Thoại: Tốc Chiến";
  };
  return (
    <React.Fragment>
      <Helmet>
        <title>{getTitle()}</title>
      </Helmet>
      <Routes>
        <Route element={<PrivateRoutes />}>
          {privateRoutes.map(({ path, component }) => (
            <Route
              key={path}
              path={path}
              element={React.createElement(component)}
            />
          ))}
        </Route>
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
