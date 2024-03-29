import React from "react";

type Props = {};

const Footer: React.FC<Props> = () => {
  return (
    <div
      data-v-1ba88884
      className="footer-wrapper fixed"
      style={{ opacity: 1, marginBottom: 0 }}
    >
      <div data-v-1ba88884 className="footer">
        <div data-v-1ba88884 className="top">
          <a data-v-1ba88884 href="https://pay.zing.vn" target="_blank">
            <img
              data-v-1ba88884
              alt="VNG-Games-logo"
              className="logo"
              src="https://shop.vnggames.com/primo/static/img/logoshop2.png"
            />
          </a>
          <div data-v-1ba88884 className="footerPayzing">
            <div data-v-1ba88884 className="colPayzing">
              <div data-v-1ba88884 className="title">
                Khám phá
              </div>
              <div data-v-1ba88884 className="item-footer">
                <a
                  data-v-1ba88884
                  href="https://pay.zing.vn/thezing/#timdaily"
                  target="_blank"
                >
                  Đại lý thẻ Zing
                </a>
              </div>
            </div>
            <div data-v-1ba88884 className="colPayzing">
              <div data-v-1ba88884 className="title">
                Hỗ trợ
              </div>
              <div data-v-1ba88884 className="item-footer">
                <a
                  data-v-1ba88884
                  href="https://pay.zing.vn/instruction"
                  target="_blank"
                >
                  Hướng dẫn nạp tiền
                </a>
              </div>
              <div data-v-1ba88884 className="item-footer">
                <a
                  data-v-1ba88884
                  href="https://pay.zing.vn/faq"
                  target="_blank"
                >
                  Câu hỏi thường gặp
                </a>
              </div>
              <div data-v-1ba88884 className="item-footer">
                <a
                  data-v-1ba88884
                  href="https://support.vnggames.com/"
                  target="_blank"
                >
                  Chăm sóc khách hàng
                </a>
              </div>
            </div>
          </div>
        </div>
        <div data-v-1ba88884 className="term">
          <div data-v-1ba88884 className="copyright">
            ©Copyright ©2023 VNG. All Rights Reserved
          </div>
          {/**/}
        </div>
      </div>
    </div>
  );
};
export default Footer;
