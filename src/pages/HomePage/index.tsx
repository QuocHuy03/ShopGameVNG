import React, { useEffect, useState } from "react";
import Layout from "../../libs/Layout";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import createNotification from "../../constants/notification.constants";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../../reducers";
import { AnyAction } from "redux";
import { createOrderThunk } from "./Home.thunks";

import data from "../../constants/packages.json";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../helper/format";
import FormFieldError from "../../components/FormFieldError";
type Props = {};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Định dạng email không hợp lệ")
    .required("Email là bắt buộc"),
});

const HomePage: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(data?.[0] || null);

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: async (values: any) => {
      // try {
      //   NProgress.start();
      //   const response: any = await (
      //     dispatch as ThunkDispatch<RootState, null, AnyAction>
      //   )(createOrderThunk(updatedTransactionDetails));
      //   if (response) {
      //     navigate(`/recharge/${parseInt(uuidv4().replace(/-/g, ""), 16)}`);
      //   } else {
      //     createNotification("error", "topRight", "Lỗi vui lòng xem lại");
      //   }
      // } catch (error: any) {
      //   createNotification("error", "topRight", error?.message);
      // } finally {
      //   NProgress.done();
      // }
    },
  });


  return (
    <Layout>
      <div style={{ marginTop: 0 }}>
        {/**/}
        {/**/}
        {/**/}
        {/**/}
        <div className="container pc">
          <div className="banner">
            <div className="banner-content banner-img">
              <div className="banner-content__center">
                <picture>
                  <source
                    srcSet="https://scdn-img.vng.games/mainsite/images/WR-searchbanner-1920x450_new.jpg?size=origin&iswebp=1"
                    type="image/webp"
                  />
                  <img
                    src="https://scdn-stc.vng.games/mainsite/images/WR-searchbanner-1920x450_new.jpg"
                    alt="https://scdn-stc.vng.games/mainsite/images/WR-searchbanner-1920x450_new.jpg"
                  />
                </picture>
              </div>
            </div>
            <picture>
              <source
                srcSet="https://scdn-img.vng.games/mainsite/images/WR-logo-240x160_2D.png?size=origin&iswebp=1"
                type="image/webp"
              />
              <img
                src="https://scdn-stc.vng.games/mainsite/images/WR-logo-240x160_2D.png"
                alt="https://scdn-stc.vng.games/mainsite/images/WR-logo-240x160_2D.png"
                className="banner-logo"
              />
            </picture>
            <span className="banner-title">
              Liên Minh Huyền Thoại: Tốc Chiến
            </span>
          </div>
          <div className="content">
            <div className="content-main-flow">
              <div className="content-box" id="IngameAccountInfo">
                <div className="mask" />
                <div className="content-box__header">
                  <div className="content-box__header-container">
                    <span className="content-box__header-number">1</span>
                    <span className="content-box__header-content">
                      {" "}
                      Đăng nhập bằng Riot ID hoặc tên người dùng
                    </span>
                  </div>
                </div>
                <div className="content-box__content">
                  <div
                    className="el-row"
                    style={{ marginLeft: "-5px", marginRight: "-5px" }}
                  >
                    <div
                      className="el-col el-col-24"
                      style={{ paddingLeft: 5, paddingRight: 5 }}
                    >
                      <div className="custom-userInfo">
                        <p data-v-3f3af4cc className="information-row">
                          <span data-v-3f3af4cc>Riot ID :</span>
                          <code data-v-3f3af4cc style={{ paddingLeft: "5px" }}>
                            {localStorage.getItem("name")}
                          </code>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="errorWrapper">
                    <p className="error-mess" />
                    {/**/}
                  </div>
                  {/**/}
                  {/**/}
                  <div
                    tabIndex={-1}
                    className="el-drawer__wrapper"
                    style={{ display: "none" }}
                  >
                    <div
                      role="document"
                      tabIndex={-1}
                      className="el-drawer__container"
                    >
                      <div
                        role="dialog"
                        tabIndex={-1}
                        className="el-drawer btt redeem-drawer"
                        style={{ height: "30%" }}
                      >
                        {/**/}
                        {/**/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-box selectPackage" id="packageList">
                <div className="mask" />
                <div className="content-box__header">
                  <div className="content-box__header-container">
                    <span className="content-box__header-number">2</span>
                    <span className="content-box__header-content">
                      Chọn gói
                    </span>
                  </div>
                </div>
                <div className="content-box__content">
                  {/**/}
                  <div className="packageGroup">
                    {data?.map((item: any, index: number) => (
                      <div
                        key={index}
                        className="button-wrapper"
                        id="ProductListing_GroupProduct_Button"
                      >
                        <button
                          className={`el-button button el-button--default around ${
                            selectedItem === item ? "selected" : "default"
                          }`}
                          onClick={() => handleItemClick(item)}
                        >
                          {/**/}
                          {/**/}
                          <span>
                            {/**/} {item.name}
                          </span>
                        </button>
                        {/**/}
                        {/**/}
                      </div>
                    ))}
                    {/* <div
                      data-v-239b83ca
                      className="button-wrapper"
                      id="ProductListing_GroupProduct_Button"
                      custom-value="G1"
                      item-order={1}
                    >
                      <button className="el-button button el-button--default default around">
                        <span>Viettel </span>
                      </button>
                    </div> */}
                  </div>
                  <div
                    className="listProduct el-row productWrapper"
                    style={{ marginLeft: "-15px", marginRight: "-15px" }}
                  >
                    {selectedItem.denominations?.map(
                      (row: any, index: number) => (
                        <>
                          <div
                          key={index}
                            className="el-col el-col-12"
                            style={{ paddingLeft: 15, paddingRight: 15 }}
                          >
                            <div
                              className="product-wrapper"
                              id="ProductListing_Product_Div"
                            >
                              <div className="package-item">
                                <picture className="handle-image">
                                  <source
                                    srcSet={row.image}
                                    type="image/webp"
                                  />
                                  <img
                                    src={row.image}
                                    alt="Gói 11035 Wild Cores"
                                  />
                                </picture>
                                {/**/}
                                {/**/}
                                <div
                                  data-id="e6e5d541-4e57-425a-b4c4-135017f23c50"
                                  className="packageBadge"
                                >
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                </div>
                              </div>
                              <div className="retry-auto-debit-tooltip is-left-item">
                                <div
                                  className="retry_tooltip__content"
                                  style={{ display: "none" }}
                                >
                                  <div className="notice-container">
                                    <div className="content">
                                      <div className="text">
                                        Chúng tôi đang gặp một số vấn đề khi thu
                                        khoản thanh toán của bạn để gia hạn gói
                                        nạp. Vui lòng kiểm tra lại thông tin
                                        thanh toán và đảm bảo rằng bạn còn tiền
                                        trong tài khoản liên kết của mình.
                                      </div>
                                      <div className="text bold-text">
                                        Lưu ý: Bạn có thể huỷ gói bằng cách truy
                                        cập trang Quản lý thanh toán và chọn
                                        “Huỷ gói”. Bạn có thể mua lại gói nạp
                                        sau khi đã huỷ gói.
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                        </>
                      )
                    )}
                  </div>
                  {/**/}
                </div>
              </div>
              {/**/}
              {/**/}
              {/**/}
              <div
                data-v-5d4a953c
                className="content-box"
                id="paymentMethodList"
              >
                <div className="mask" />
                <div className="content-box__header">
                  <div className="content-box__header-container">
                    <span className="content-box__header-number">3</span>
                    <span className="content-box__header-content">
                      Chọn phương thức thanh toán
                    </span>
                  </div>
                </div>
                <div className="content-box__content">
                  <div
                    data-v-5d4a953c
                    role="tablist"
                    aria-multiselectable="true"
                    className="el-collapse pmt-method-group"
                  >
                    <div
                      data-v-5d4a953c
                      className="el-collapse-item"
                      id="PaymentChannel_GroupPaymentMethod_Div"
                      custom-value="zalopay_54"
                      item-order={0}
                    >
                      <div
                        role="tab"
                        aria-controls="el-collapse-content-3990"
                        aria-describedby="el-collapse-content-3990"
                      >
                        <div
                          role="button"
                          id="el-collapse-head-3990"
                          tabIndex={0}
                          className="el-collapse-item__header"
                        >
                          <div data-v-5d4a953c className="pmt-group">
                            <div data-v-5d4a953c className="pmt-group__content">
                              <div
                                data-v-5d4a953c
                                className="pmt-group__img zalopay_54-icon-small"
                              />
                              <div data-v-5d4a953c className="pmt-group__name">
                                <div data-v-5d4a953c className="displayName">
                                  <p
                                    data-v-5d4a953c
                                    className="custom-pmt-group-name"
                                  >
                                    {" "}
                                    ZaloPay {/**/}
                                  </p>
                                  <p data-v-5d4a953c className="minAmount">
                                    {" "}
                                    2,000,000 VND
                                  </p>
                                </div>
                                {/**/}
                              </div>
                            </div>
                          </div>
                          <i className="el-collapse-item__arrow el-icon-arrow-right" />
                        </div>
                      </div>
                      <div
                        role="tabpanel"
                        aria-labelledby="el-collapse-head-3990"
                        id="el-collapse-content-3990"
                        className="el-collapse-item__wrap"
                        style={{}}
                        data-old-padding-top
                        data-old-padding-bottom
                        data-old-overflow
                      >
                        <div className="el-collapse-item__content">
                          {/**/}
                          {/**/}
                          {/**/}
                          <div
                            data-v-5d4a953c
                            className="el-row"
                            style={{ marginLeft: "-5px", marginRight: "-5px" }}
                          >
                            <div
                              data-v-5d4a953c
                              className="el-col el-col-8"
                              style={{ paddingLeft: 5, paddingRight: 5 }}
                            >
                              <div
                                data-v-eac0a7dc
                                data-v-5d4a953c
                                className="pmt-method"
                                id="PaymentChannel_PaymentMethod_Div"
                                custom-value='{"paymentCountryID":"VN","paymentCurrencyID":"VND","paymentGatewayID":"1","paymentGroupID":"zalopay_54","paymentMethodID":"61","paymentPartnerID":"1","paymentProviderID":"61","isBindingAgreement":0,"isChannelAgreement":0}'
                                data-id="61-61"
                                item-order={0}
                                data-from
                                data-not-support="Không hỗ trợ."
                              >
                                <span
                                  data-v-eac0a7dc
                                  className="pmt-method__info"
                                >
                                  <div
                                    data-v-eac0a7dc
                                    className="pmt__img payzing zalopay_54 partner-1 icon-61"
                                  />
                                  <span data-v-eac0a7dc className="pmt__cost">
                                    <span data-v-5d4a953c data-v-eac0a7dc>
                                      2,000,000 VND{" "}
                                    </span>
                                  </span>
                                  {/**/}
                                </span>
                                <div
                                  data-v-eac0a7dc
                                  className="pmt-method__name"
                                >
                                  <span data-v-5d4a953c data-v-eac0a7dc>
                                    Ví ZaloPay
                                  </span>
                                </div>
                              </div>
                            </div>
                            {/**/}

                            <div
                              data-v-5d4a953c
                              className="el-col el-col-24"
                              style={{ paddingLeft: 5, paddingRight: 5 }}
                            >
                              <div data-v-5d4a953c className="pmt-input show">
                                <div
                                  data-v-5d4a953c
                                  className="pmtInputContainer"
                                >
                                  <form className="el-form pmtMethodInput el-form--label-top">
                                    <div className="el-form-item is-error is-required">
                                      <label
                                        htmlFor="cardSerial"
                                        className="el-form-item__label"
                                      >
                                        Số seri
                                      </label>
                                      <div className="el-form-item__content">
                                        <div
                                          className="dataInput el-input"
                                          id="PaymentInfoSubmission_cardSerial_Input"
                                        >
                                          {/**/}
                                          <input
                                            type="text"
                                            autoComplete="off"
                                            placeholder="Nhập số seri"
                                            data-id="InputString-card-cardSerial"
                                            className="el-input__inner"
                                          />
                                          {/**/}
                                          {/**/}
                                          {/**/}
                                          {/**/}
                                        </div>
                                        <input
                                          type="text"
                                          className="input-hidden"
                                        />
                                        {/**/}
                                        <div
                                          id="PaymentInfoSubmission_cardSerial_error_input"
                                          className="el-form-item__error primo-error"
                                          data-gtm-vis-recent-on-screen35751452_151={
                                            1620092
                                          }
                                          data-gtm-vis-first-on-screen35751452_151={
                                            1620092
                                          }
                                          data-gtm-vis-total-visible-time35751452_151={
                                            100
                                          }
                                          data-gtm-vis-has-fired35751452_151={1}
                                        >
                                          Vui lòng nhập số seri thẻ
                                        </div>
                                      </div>
                                    </div>
                                    <div className="el-form-item is-required">
                                      <label
                                        htmlFor="cardPassword"
                                        className="el-form-item__label"
                                      >
                                        Mã thẻ
                                      </label>
                                      <div className="el-form-item__content">
                                        <div
                                          className="dataInput el-input"
                                          id="PaymentInfoSubmission_cardPassword_Input"
                                        >
                                          {/**/}
                                          <input
                                            type="text"
                                            autoComplete="off"
                                            placeholder="Nhập mã thẻ"
                                            data-id="InputString-card-cardPassword"
                                            className="el-input__inner"
                                          />
                                          {/**/}
                                          {/**/}
                                          {/**/}
                                          {/**/}
                                        </div>
                                        <input
                                          type="text"
                                          className="input-hidden"
                                        />
                                        {/**/}
                                        {/**/}
                                      </div>
                                    </div>
                                  </form>
                                  <button className="el-button el-button--default button disabled">
                                    {/**/}
                                    {/**/}
                                    <span>Xác nhận</span>
                                  </button>
                                </div>
                                {/**/}
                              </div>
                            </div>
                          </div>
                          {/**/}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ddddddddd */}
              <div className="content-box confirm-single confirm" id="confirm">
                <div className="mask" />
                <div className="content-box__header">
                  <div className="content-box__header-container">
                    <span className="content-box__header-number">4</span>
                    <span className="content-box__header-content">
                      Xác nhận thông tin
                    </span>
                  </div>
                </div>
                <div className="content-box__content">
                  <div data-v-c359b4ec className="list-info customsize">
                    <div data-v-c359b4ec className="product-wrapper">
                      <div
                        custom-value="74c3b8cc-8b4a-4522-96aa-b89ffe6bbaec"
                        item-order={0}
                        data-id="74c3b8cc-8b4a-4522-96aa-b89ffe6bbaec"
                        data-price={50000}
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
                                Chúng tôi đang gặp một số vấn đề khi thu khoản
                                thanh toán của bạn để gia hạn gói nạp. Vui lòng
                                kiểm tra lại thông tin thanh toán và đảm bảo
                                rằng bạn còn tiền trong tài khoản liên kết của
                                mình.
                              </div>
                              <div className="text bold-text">
                                Lưu ý: Bạn có thể huỷ gói bằng cách truy cập
                                trang Quản lý thanh toán và chọn “Huỷ gói”. Bạn
                                có thể mua lại gói nạp sau khi đã huỷ gói.
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
                      {/**/}
                      {/**/}
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
                      {/**/}
                      {/**/}
                      {/**/}
                    </div>
                  </div>
                  {/**/}
                  <p className="prdDescription" />
                  <p>Gói 240 Wild Cores</p>
                  <p />
                  {/**/}
                  <p className="confirmPolicy">
                    Bằng việc nhấn vào nút Thanh toán ngay, Bạn đồng ý rằng,
                    giao dịch này là không hoàn, không hủy.
                  </p>
                  <button
                    className="el-button el-button--default button"
                    id="OrderConfirmation_SubmitOrder_Button"
                    custom-value="74c3b8cc-8b4a-4522-96aa-b89ffe6bbaec"
                  >
                    {/**/}
                    {/**/}
                    <span>Thanh toán ngay</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/**/}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
