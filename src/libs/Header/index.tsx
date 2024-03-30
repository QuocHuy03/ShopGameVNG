import React from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constants/route.constants";

type Props = {};
const Header: React.FC<Props> = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate(PATH.LOGIN);
  };
  return (
    <div id="header" className="header">
      <a id="Header_HomeLogo_A" href="javascrip:void(0)" className="logo_game">
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
      <div className="right-group">
        <div className="right-header">
          <a id="BtnToMainsite_A" href="https://pay.zing.vn/">
            Quay về trang chủ
          </a>
          {/**/}
          {/**/}
          {/**/}
          {/**/}
        </div>
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
                  className="el-button btnLogout el-button--text"
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
      </div>
    </div>
  );
};
export default Header;
