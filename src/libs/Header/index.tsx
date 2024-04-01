import React from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constants/route.constants";
import { useMediaQuery } from "react-responsive";
import { AppContext } from "../../contexts/AppContextProvider";

type Props = {};
const Header: React.FC<Props> = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate(PATH.LOGIN);
  };
  const isMobile = useMediaQuery({ maxWidth: 980 });
  const { isOpenSidebar, setIsOpenSidebar, sidebarRef } =
    React.useContext<any>(AppContext);
  return (
    <div
      id={`${isMobile ? "headerMB" : "header"}`}
      className={`${isMobile ? "headerMB" : "header"}`}
    >
      <a
        id="Header_HomeLogo_A"
        href="javascrip:void(0)"
        className={`${isMobile ? "logoMB" : "logo_game"}`}
      >
        <picture>
          <source
            srcSet="https://scdn-img.vng.games/mainsite/images/WR-logo-240x160_2D.png?size=origin&iswebp=1"
            type="image/webp"
            width={83}
            height={55}
            style={{ aspectRatio: "83 / 55" }}
          />
          <img
            src="https://scdn-stc.vng.games/mainsite/images/WR-logo-240x160_2D.png"
            alt="Liên Minh Huyền Thoại: Tốc Chiến"
            width={83}
            height={55}
            style={{ aspectRatio: "83 / 55" }}
          />
        </picture>
      </a>
      <div className={`${isMobile ? "right-header" : "right-group"}`}>
        {!isMobile && (
          <div className="right-header">
            <a id="BtnToMainsite_A" href="https://pay.zing.vn/">
              Quay về trang chủ
            </a>
          </div>
        )}
        {localStorage.getItem("name") && (
          <div id="Header_UserInfoCopy_Div" className="user-status no-balance">
            <div className="user-info" style={{}}>
              <div className="user-display">
                <span id="us-userInfo">{localStorage.getItem("name")}</span>
                <div
                  id="us-userInfo-uid"
                  className="user-info-uid"
                  style={{ left: 94 }}
                >
                  ID
                </div>
                <button
                  type="button"
                  className="el-button-mobi btnLogout el-button--text"
                  id="Header_Logout_Button"
                  data-id="UserInfoLogout"
                  onClick={handleLogout}
                >
                  (Thoát)
                </button>
              </div>
              <div>
                {/**/}
                {/**/}
                {/**/}
                {/**/}
              </div>
            </div>

            {/**/}
          </div>
        )}
        {isMobile && (
          <div className="mobile-menu">
            <button
              className={`shape-menu ${isOpenSidebar ? "active" : ""}`}
              ref={sidebarRef}
              onClick={() => setIsOpenSidebar(!isOpenSidebar)}
            >
              <span />
              <span />
              <span />
              <div id="rightPanel-bg" className="rightPanel-background" />
            </button>
            <ul
              role="menubar"
              className={`el-menu-vertical-demo ${isOpenSidebar ? '' : 'el-menu--collapse'} el-menu`}
              style={{}}
              id="rightPanel-content"
            >
              <li
                role="menuitem"
                tabIndex={-1}
                className="el-menu-item"
                style={{ paddingLeft: 20 }}
              >
                <div
                  id="Header_UserInfoCopy_Div"
                  className="user-status no-balance"
                >
                  <div className="user-info">
                    <div className="user-display">
                      <span id="us-userInfo">Kẻ 1 Line#420</span>
                      {/**/}
                      {/**/}
                    </div>
                    <div>
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                    </div>
                  </div>
                  <div className="user-info-mobile">
                    <span id="us-userInfo-uid">
                      <div className="user-info-uid mobile">ID</div> Kẻ 1
                      Line#420{" "}
                    </span>
                    <div
                      id="us-userInfo-copy"
                      className="user-info-copy"
                      style={{ left: 112 }}
                    >
                      Sao chép
                    </div>
                  </div>
                </div>
              </li>
              <li
                role="menuitem"
                tabIndex={-1}
                className="el-menu-item"
                data-id="NavBarBackToMainsite"
                style={{ paddingLeft: 20 }}
              >
                <a
                  id="BtnToMainsite_A"
                  href="https://pay.zing.vn/"
                  custom-value="navbar"
                  exact
                >
                  Quay về trang chủ
                </a>
              </li>
              {/**/}
              {/**/}
              {/**/}
              {/**/}
              <li
                role="menuitem"
                tabIndex={-1}
                className="el-menu-item mobile-menu__lang is-active"
                style={{ paddingLeft: 20 }}
              >
                <div className="left">
                  <p>Ngôn ngữ</p>
                  <p className="mobile-menu__lang-current">Tiếng Việt</p>
                </div>
                {/**/}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
