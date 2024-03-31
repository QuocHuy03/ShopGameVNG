import React from "react";
import Layout from "../../libs/Layout";
import { ConnectedProps, connect } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { PATH } from "../../constants/route.constants";
import formatDate, { formatPrice } from "../../helper/format";

const mapStateToProps = (state: AppState) => ({
  data: state.home.data,
});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

interface Props extends ConnectedProps<typeof connector> {}

const RechargePage: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { code } = useParams();
  const handlePay = () => {
    navigate(PATH.HOME);
  };
  const storedData = localStorage.getItem("tt");
  const parsedData = storedData ? JSON.parse(storedData) : null;
  const orderData = localStorage.getItem("order");

  const payData = orderData ? JSON.parse(orderData) : null;
  const currentDate: any = new Date();

  return localStorage.getItem("tt") == null ||
    localStorage.getItem("order") == null ? (
    <Navigate to={PATH.HOME} />
  ) : (
    <Layout>
      <div
        className="custom-newUI default-width fadeUp result"
        style={{ marginTop: 60 }}
      >
        <div className="el-row">
          <div className="el-col el-col-24 content single-item-order">
            <label
              className={`headResult ${payData.status ? "success" : "fail"}`}
            >
              {payData.status
                ? "Giao dịch thành công"
                : "Giao dịch không thành công"}
            </label>
            <div className="resultTitle" style={{}}>
              <div className="notification single-item-order">
                {/**/}
                <p className="message">{payData.message}</p>
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
                    <source srcSet={parsedData?.image} type="image/webp" />
                    <img src={parsedData?.image} alt={`Gói ${parsedData?.gift} Wild Cores`}/>
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
                    {localStorage.getItem("name")}
                  </code>
                </p>
                {/**/}
                <p data-v-c359b4ec>
                  <span data-v-c359b4ec>Gói nạp</span>
                  <code data-v-c359b4ec className="productName">
                    {formatPrice(parsedData?.price)} VNĐ
                  </code>
                </p>
                <p data-v-c359b4ec>
                  <span data-v-c359b4ec>Mã giao dịch</span>
                  <code data-v-c359b4ec className="orderNumberStr">
                    {code}
                  </code>
                </p>
                <p data-v-c359b4ec>
                  <span data-v-c359b4ec>Thanh toán</span>
                  <code
                    data-v-c359b4ec
                    style={{
                      textTransform: "uppercase",
                    }}
                  >
                    Thẻ {parsedData?.name}
                  </code>
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
                    {formatDate(currentDate)}
                  </code>
                </p>
                {/**/}
                {/**/}
              </div>
            </div>
            <div className="resultButtonContainer" style={{}}>
              {/**/}
              <button
                onClick={handlePay}
                type="button"
                className="el-button el-button--primary"
              >
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
