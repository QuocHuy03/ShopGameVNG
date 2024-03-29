import React, { useState } from "react";
import Layout from "../../libs/Layout";
import { ConnectedProps, connect } from "react-redux";
import loading from "../../loading.gif";
import { Link, useParams } from "react-router-dom";
import { PATH } from "../../constants/route.constants";
import { formatPrice } from "../../helper/format";

const databank = {
  accountName: "Gia Lol",
  accountNumber: "0984746373",
  accountBank: "Vietcombank",
  noidung: "nhoncailu",
};

const mapStateToProps = (state: AppState) => ({
  data: state.home.data,
});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

interface Props extends ConnectedProps<typeof connector> {}

const RechargePage: React.FC<Props> = ({ data }) => {
  const { code } = useParams();
  const [activeTab, setActiveTab] = useState<number>(0);
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  const randomFourDigitNumber = () => Math.floor(1000 + Math.random() * 10000);
  return (
    <Layout>
      <div
        className="custom-newUI default-width fadeUp result"
        style={{ marginTop: 60 }}
      >
        <div className="el-row">
          <div className="el-col el-col-24 content single-item-order">
            <label className="headResult fail">
              Giao dịch không thành công
            </label>
            <div className="resultTitle" style={{}}>
              <div className="notification single-item-order">
                {/**/}
                <p className="message">
                  Thẻ đã được sử dụng, giao dịch thất bại!
                </p>
                {/**/}
                {/**/}
                {/**/}
              </div>
            </div>
            <div
              data-v-c359b4ec
              className="payment-info-result list-info customsize"
              style={{}}
            >
              <div data-v-c359b4ec className="product-wrapper">
                <div
                  custom-value="74c3b8cc-8b4a-4522-96aa-b89ffe6bbaec"
                  data-id="74c3b8cc-8b4a-4522-96aa-b89ffe6bbaec"
                  data-price={0}
                  className="package-item"
                >
                  <picture className="handle-image">
                    <source
                      srcSet="https://scdn-imgsot.vng.games/ws-content/uploads//TOCCHIEN-ZINGPAY-1-LIVE/image/product/1068560116225282048.png?size=origin&iswebp=1"
                      type="image/webp"
                    />
                    <img
                      src="https://stc-sot.vcdn.vn/ws-content/uploads//TOCCHIEN-ZINGPAY-1-LIVE/image/product/1068560116225282048.png"
                      alt="Gói 240 Wild Cores"
                    />
                  </picture>
                  {/**/}
                  {/**/}
                  <div
                    data-id="74c3b8cc-8b4a-4522-96aa-b89ffe6bbaec"
                    className="packageBadge"
                  >
                    {/**/}
                    {/**/}
                    {/**/}
                  </div>
                </div>
                <div className="retry-auto-debit-tooltip is-right-item">
                  <div
                    className="retry_tooltip__content"
                    style={{ display: "none" }}
                  >
                    <div className="notice-container">
                      <div className="content">
                        <div className="text">
                          Chúng tôi đang gặp một số vấn đề khi thu khoản thanh
                          toán của bạn để gia hạn gói nạp. Vui lòng kiểm tra lại
                          thông tin thanh toán và đảm bảo rằng bạn còn tiền
                          trong tài khoản liên kết của mình.
                        </div>
                        <div className="text bold-text">
                          Lưu ý: Bạn có thể huỷ gói bằng cách truy cập trang
                          Quản lý thanh toán và chọn “Huỷ gói”. Bạn có thể mua
                          lại gói nạp sau khi đã huỷ gói.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-c359b4ec className="info-detail">
                <p data-v-c359b4ec>
                  <span data-v-c359b4ec>Nhân vật</span>
                  <code data-v-c359b4ec className="roleName">
                    Kẻ 1 Line#420
                  </code>
                </p>
                {/**/}
                <p data-v-c359b4ec>
                  <span data-v-c359b4ec>Gói nạp</span>
                  <code data-v-c359b4ec className="productName">
                    Gói 240 Wild Cores
                  </code>
                </p>
                <p data-v-c359b4ec>
                  <span data-v-c359b4ec>Mã giao dịch</span>
                  <code data-v-c359b4ec className="orderNumberStr">
                    2668239909973663744
                  </code>
                </p>
                <p data-v-c359b4ec>
                  <span data-v-c359b4ec>Thanh toán</span>
                  <code data-v-c359b4ec>Thẻ Zing</code>
                </p>
                {/**/}
                {/**/}
                {/**/}
                {/**/}
                {/**/}
                {/**/}
                {/**/}
                {/**/}
                {/**/}
                <p data-v-c359b4ec>
                  <span data-v-c359b4ec>Thời gian giao dịch</span>
                  <code data-v-c359b4ec className="purchaseTime">
                    18:16 29/03/2024
                  </code>
                </p>
                {/**/}
                {/**/}
              </div>
            </div>
            <div className="resultButtonContainer" style={{}}>
              {/**/}
              <button type="button" className="el-button el-button--primary">
                Thanh toán lại
              </button>
              {/**/}
              {/**/}
              {/**/}
              {/**/}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default connector(RechargePage);
