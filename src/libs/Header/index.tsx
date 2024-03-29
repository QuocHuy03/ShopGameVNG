import React from "react";

type Props = {};
const Header: React.FC<Props> = () => {
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
        <div id="Header_UserInfoCopy_Div" className="user-status no-balance">
          <div className="user-info" style={{}}>
            <div className="user-display">
              <span id="us-userInfo" />
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
          {/**/}
        </div>
      </div>
    </div>
  );
};
export default Header;
