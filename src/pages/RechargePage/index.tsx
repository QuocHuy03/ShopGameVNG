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
  noidung: 'nhoncailu'
}

const mapStateToProps = (state: AppState) => ({
  data: state.home.data
});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

interface Props extends ConnectedProps<typeof connector> {}

const RechargePage: React.FC<Props> = ({data}) => {
  const { code } = useParams();
  const [activeTab, setActiveTab] = useState<number>(0);
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  const randomFourDigitNumber = () => Math.floor(1000 + Math.random() * 10000);
  return (
    <Layout>
      <div className="layout column justify-center align-center">
        <div className="row main-body mt-5">
          <div className="col-md-12 col-12 text-center">
            <h3>Đơn hàng #MTC{code}</h3>
            <p>Vui lòng không tắt trang website !</p>
            <p>
              <button
                onClick={() => handleTabClick(0)}
                className={`btn ${
                  activeTab === 0 ? "btn-primary" : "btn-secondary"
                }`}
              >
                Đơn chuyển khoản
              </button>{" "}
              <button
                onClick={() => handleTabClick(1)}
                className={`btn ${
                  activeTab === 1 ? "btn-primary" : "btn-secondary"
                }`}
              >
                Chi tiết đơn hàng
              </button>
            </p>
          </div>
          {activeTab === 0 && (
            <div className="col-md-12 col-12 text-center">
              <div style={{ justifyContent: "center" }}>
                <h3>Vui lòng chuyển khoản theo thông tin bên dưới</h3>
                <h3>
                  <img src={loading} alt="loading" style={{ width: 100 }} />
                </h3>
                <div className="alert alert-danger" role="alert">
                  <h5>
                    Vui lòng điền đúng số tiền &amp; nội dung chuyển khoản nhé
                  </h5>
                </div>
                <table
                  className="table table-bordered text-center"
                  style={{ height: "100%" }}
                >
                  <tbody>
                    <tr>
                      <th>Họ &amp; tên</th>
                      <td>
                        <b style={{ color: "red" }}>{databank.accountName}</b>
                      </td>
                    </tr>
                    <tr>
                      <th>Số tài khoản</th>
                      <td>
                        <b style={{ color: "red" }}>{databank.accountNumber} </b>
                        <button className="btn btn-sm btn-success">Copy</button>
                      </td>
                    </tr>
                    <tr>
                      <th>Thanh toán</th>
                      <td>
                        <b style={{ color: "red" }}>{databank.accountBank}</b>
                      </td>
                    </tr>
                    <tr>
                      <th>Số tiền cần chuyển</th>
                      <td>
                        <b style={{ color: "red" }}>{formatPrice(data.totalAmount)}</b>
                      </td>
                    </tr>
                    <tr>
                      <th>Nội dung ghi chú</th>
                      <td>
                        <b style={{ color: "red" }}>
                          {databank.noidung}_{randomFourDigitNumber()}{" "}
                          <button className="btn btn-sm btn-success">
                            Copy
                          </button>
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <th>Mã QR quét nhanh</th>
                      <td>
                        <img
                          alt="qr code"
                          className="img-fluid"
                          src={`https://img.vietqr.io/image/970416-${databank.accountNumber}-print.png?amount=
                          ${data.totalAmount}&addInfo=${databank.noidung}_${randomFourDigitNumber()}&accountName=${databank.accountName}`}
                          style={{ width: 200 }}
                        />
                       
                      </td>
                    </tr>
                 
                  </tbody>
                </table>
              </div>
              <div>
                <div>
                  <ul>
                    <li>
                      Chuyển tiền xong và sau 5 phút không thấy kết quả, hãy
                      liên hệ ngay admin.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          {activeTab === 1 && (
            <div className="col-md-12 col-12 text-center">
              <div style={{ justifyContent: "center" }}>
                <h3>Chi tiết đơn hàng</h3>
                <table
                  className="table table-bordered text-center"
                  style={{ height: "100%" }}
                >
                  <tbody>
                    <tr>
                      <th>Mã đơn hàng</th>
                      <td>
                        <b>MTC{code}</b>
                      </td>
                    </tr>
                    <tr>
                      <th>Người nhận</th>
                      <td>
                        <b>{data.email}</b>
                      </td>
                    </tr>
                    <tr>
                      <th>Nhà mạng</th>
                      <td>
                        <b>{data.cardType}</b>
                      </td>
                    </tr>
                    <tr>
                      <th>Mệnh giá</th>
                      <td>
                        <b>{formatPrice(data.cardValue)}</b>
                      </td>
                    </tr>
                    <tr>
                      <th>Số lượng</th>
                      <td>
                        <b>{data.quantity}</b>
                      </td>
                    </tr>
                    <tr>
                      <th>Số tiền cần chuyển</th>
                      <td>
                        <b>{formatPrice(data.totalAmount)}</b>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
          <div className="col-md-12">
            <Link
              to={PATH.HOME}
              className="roundstyle color-viettelpay-white v-btn v-btn--block v-btn--is-elevated v-btn--has-bg theme--light v-size--large"
            >
              <span className="v-btn__content">Quay lại !</span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default connector(RechargePage);
