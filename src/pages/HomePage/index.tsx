import React, { useState } from "react";
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

import data from "../../constants/data.json";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../helper/format";
import FormFieldError from "../../components/FormFieldError";
type Props = {};

const bank = [
  {
    id: 1,
    name: "Momo",
    image: "https://i.imgur.com/qDEaodu.png",
  },
  {
    id: 2,
    name: "Ngân hàng",
    image: "https://hqpay.vn/assets/frontend/image/tknh.png",
  },
];

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Định dạng email không hợp lệ")
    .required("Email là bắt buộc"),
});

const HomePage: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
                          <span data-v-3f3af4cc>Riot ID:</span>
                          <code data-v-3f3af4cc>Kẻ 1 Line#420</code>
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
                    <div
                      data-v-239b83ca
                      className="button-wrapper"
                      id="ProductListing_GroupProduct_Button"
                      custom-value="G0"
                      item-order={0}
                    >
                      <button className="el-button button el-button--default default around selected">
                        {/**/}
                        {/**/}
                        <span>{/**/} ZaloPay </span>
                      </button>
                      {/**/}
                      {/**/}
                    </div>
                    <div
                      data-v-239b83ca
                      className="button-wrapper"
                      id="ProductListing_GroupProduct_Button"
                      custom-value="G1"
                      item-order={1}
                    >
                      <button className="el-button button el-button--default default around">
                        {/**/}
                        {/**/}
                        <span>{/**/} Zing Card </span>
                      </button>
                      {/**/}
                      {/**/}
                    </div>
                    <div
                      data-v-239b83ca
                      className="button-wrapper"
                      id="ProductListing_GroupProduct_Button"
                      custom-value="G2"
                      item-order={2}
                    >
                      <button className="el-button button el-button--default default around">
                        {/**/}
                        {/**/}
                        <span>{/**/} ATM </span>
                      </button>
                      {/**/}
                      {/**/}
                    </div>
                    <div
                      data-v-239b83ca
                      className="button-wrapper"
                      id="ProductListing_GroupProduct_Button"
                      custom-value="G3"
                      item-order={3}
                    >
                      <button className="el-button button el-button--default default around">
                        {/**/}
                        {/**/}
                        <span>{/**/} Credit Card </span>
                      </button>
                      {/**/}
                      {/**/}
                    </div>
                  </div>
                  <div
                    className="listProduct el-row productWrapper"
                    style={{ marginLeft: "-15px", marginRight: "-15px" }}
                  >
                    <div
                      className="el-col el-col-12"
                      style={{ paddingLeft: 15, paddingRight: 15 }}
                    >
                      <div
                        className="product-wrapper"
                        id="ProductListing_Product_Div"
                      >
                        <div
                          custom-value="e6e5d541-4e57-425a-b4c4-135017f23c50"
                          item-order={0}
                          data-id="e6e5d541-4e57-425a-b4c4-135017f23c50"
                          data-price={2000000}
                          className="package-item"
                        >
                          <picture className="handle-image">
                            <source
                              srcSet="https://scdn-imgsot.vng.games/ws-content/uploads//TOCCHIEN-ZINGPAY-1-LIVE/image/product/1068556360549011456.png?size=origin&iswebp=1"
                              type="image/webp"
                            />
                            <img
                              src="https://stc-sot.vcdn.vn/ws-content/uploads//TOCCHIEN-ZINGPAY-1-LIVE/image/product/1068556360549011456.png"
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
                                  Chúng tôi đang gặp một số vấn đề khi thu khoản
                                  thanh toán của bạn để gia hạn gói nạp. Vui
                                  lòng kiểm tra lại thông tin thanh toán và đảm
                                  bảo rằng bạn còn tiền trong tài khoản liên kết
                                  của mình.
                                </div>
                                <div className="text bold-text">
                                  Lưu ý: Bạn có thể huỷ gói bằng cách truy cập
                                  trang Quản lý thanh toán và chọn “Huỷ gói”.
                                  Bạn có thể mua lại gói nạp sau khi đã huỷ gói.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/**/}
                    <div
                      className="el-col el-col-12"
                      style={{ paddingLeft: 15, paddingRight: 15 }}
                    >
                      <div
                        className="product-wrapper"
                        id="ProductListing_Product_Div"
                      >
                        <div
                          custom-value="21347fdd-aa54-477a-b0c2-80de2a6581f4"
                          item-order={0}
                          data-id="21347fdd-aa54-477a-b0c2-80de2a6581f4"
                          data-price={50000}
                          className="package-item"
                        >
                          <picture className="handle-image">
                            <source
                              srcSet="https://scdn-imgsot.vng.games/ws-content/uploads//TOCCHIEN-ZINGPAY-1-LIVE/image/product/1068551560805617664.png?size=origin&iswebp=1"
                              type="image/webp"
                            />
                            <img
                              src="https://stc-sot.vcdn.vn/ws-content/uploads//TOCCHIEN-ZINGPAY-1-LIVE/image/product/1068551560805617664.png"
                              alt="Gói 250 Wild Cores"
                            />
                          </picture>
                          {/**/}
                          {/**/}
                          <div
                            data-id="21347fdd-aa54-477a-b0c2-80de2a6581f4"
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
                                  thanh toán của bạn để gia hạn gói nạp. Vui
                                  lòng kiểm tra lại thông tin thanh toán và đảm
                                  bảo rằng bạn còn tiền trong tài khoản liên kết
                                  của mình.
                                </div>
                                <div className="text bold-text">
                                  Lưu ý: Bạn có thể huỷ gói bằng cách truy cập
                                  trang Quản lý thanh toán và chọn “Huỷ gói”.
                                  Bạn có thể mua lại gói nạp sau khi đã huỷ gói.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="parentInfo el-col el-col-24"
                      style={{ paddingLeft: 15, paddingRight: 15, height: 0 }}
                    >
                      <div
                        id="Display_product_detail_div"
                        className="packageInfo"
                      >
                        <div className="packageInfo__head">
                          <span className="title" />
                          <span
                            id="Product_Detail_Close_Div"
                            custom-value
                            item-order
                            className="close"
                          >
                            Đóng
                          </span>
                        </div>
                        <div className="packageInfo__content">
                          <p />
                        </div>
                        <div
                          id="Product_Detail_Purchase_Div"
                          item-order
                          custom-value
                          className="packageInfo__button"
                        >
                          <button className="el-button el-button--default button">
                            {/**/}
                            {/**/}
                            <span>Mua ngay</span>
                          </button>
                        </div>
                        <div className="triangleTop" />
                      </div>
                    </div>
                    <div
                      className="el-col el-col-12"
                      style={{ paddingLeft: 15, paddingRight: 15 }}
                    >
                      <div
                        className="product-wrapper"
                        id="ProductListing_Product_Div"
                      >
                        <div
                          custom-value="034be5ce-3d00-40c8-9c69-d33ccc24d325"
                          item-order={0}
                          data-id="034be5ce-3d00-40c8-9c69-d33ccc24d325"
                          data-price={500000}
                          className="package-item"
                        >
                          <picture className="handle-image">
                            <source
                              srcSet="https://scdn-imgsot.vng.games/ws-content/uploads//TOCCHIEN-ZINGPAY-1-LIVE/image/product/1068555445263798272.png?size=origin&iswebp=1"
                              type="image/webp"
                            />
                            <img
                              src="https://stc-sot.vcdn.vn/ws-content/uploads//TOCCHIEN-ZINGPAY-1-LIVE/image/product/1068555445263798272.png"
                              alt="Gói 2610 Wild Cores"
                            />
                          </picture>
                          {/**/}
                          {/**/}
                          <div
                            data-id="034be5ce-3d00-40c8-9c69-d33ccc24d325"
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
                                  Chúng tôi đang gặp một số vấn đề khi thu khoản
                                  thanh toán của bạn để gia hạn gói nạp. Vui
                                  lòng kiểm tra lại thông tin thanh toán và đảm
                                  bảo rằng bạn còn tiền trong tài khoản liên kết
                                  của mình.
                                </div>
                                <div className="text bold-text">
                                  Lưu ý: Bạn có thể huỷ gói bằng cách truy cập
                                  trang Quản lý thanh toán và chọn “Huỷ gói”.
                                  Bạn có thể mua lại gói nạp sau khi đã huỷ gói.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/**/}
                    <div
                      className="el-col el-col-12"
                      style={{ paddingLeft: 15, paddingRight: 15 }}
                    >
                      <div
                        className="product-wrapper"
                        id="ProductListing_Product_Div"
                      >
                        <div
                          custom-value="6017a37d-c6b9-47cf-ba4d-769df294dcb8"
                          item-order={0}
                          data-id="6017a37d-c6b9-47cf-ba4d-769df294dcb8"
                          data-price={200000}
                          className="package-item"
                        >
                          <picture className="handle-image">
                            <source
                              srcSet="https://scdn-imgsot.vng.games/ws-content/uploads//TOCCHIEN-ZINGPAY-1-LIVE/image/product/1068554804525142016.png?size=origin&iswebp=1"
                              type="image/webp"
                            />
                            <img
                              src="https://stc-sot.vcdn.vn/ws-content/uploads//TOCCHIEN-ZINGPAY-1-LIVE/image/product/1068554804525142016.png"
                              alt="Gói 1025 Wild Cores"
                            />
                          </picture>
                          {/**/}
                          {/**/}
                          <div
                            data-id="6017a37d-c6b9-47cf-ba4d-769df294dcb8"
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
                                  thanh toán của bạn để gia hạn gói nạp. Vui
                                  lòng kiểm tra lại thông tin thanh toán và đảm
                                  bảo rằng bạn còn tiền trong tài khoản liên kết
                                  của mình.
                                </div>
                                <div className="text bold-text">
                                  Lưu ý: Bạn có thể huỷ gói bằng cách truy cập
                                  trang Quản lý thanh toán và chọn “Huỷ gói”.
                                  Bạn có thể mua lại gói nạp sau khi đã huỷ gói.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="parentInfo el-col el-col-24"
                      style={{ paddingLeft: 15, paddingRight: 15, height: 0 }}
                    >
                      <div
                        id="Display_product_detail_div"
                        className="packageInfo"
                      >
                        <div className="packageInfo__head">
                          <span className="title" />
                          <span
                            id="Product_Detail_Close_Div"
                            custom-value
                            item-order
                            className="close"
                          >
                            Đóng
                          </span>
                        </div>
                        <div className="packageInfo__content">
                          <p />
                        </div>
                        <div
                          id="Product_Detail_Purchase_Div"
                          item-order
                          custom-value
                          className="packageInfo__button"
                        >
                          <button className="el-button el-button--default button">
                            {/**/}
                            {/**/}
                            <span>Mua ngay</span>
                          </button>
                        </div>
                        <div className="triangleTop" />
                      </div>
                    </div>
                    <div
                      className="el-col el-col-12"
                      style={{ paddingLeft: 15, paddingRight: 15 }}
                    >
                      <div
                        className="product-wrapper"
                        id="ProductListing_Product_Div"
                      >
                        <div
                          custom-value="e88d3626-14f7-4c41-a7e5-66fb472a2bb1"
                          item-order={0}
                          data-id="e88d3626-14f7-4c41-a7e5-66fb472a2bb1"
                          data-price={1000000}
                          className="package-item"
                        >
                          <picture className="handle-image">
                            <source
                              srcSet="https://scdn-imgsot.vng.games/ws-content/uploads//TOCCHIEN-ZINGPAY-1-LIVE/image/product/1068555949171675136.png?size=origin&iswebp=1"
                              type="image/webp"
                            />
                            <img
                              src="https://stc-sot.vcdn.vn/ws-content/uploads//TOCCHIEN-ZINGPAY-1-LIVE/image/product/1068555949171675136.png"
                              alt="Gói 5435 Wild Core"
                            />
                          </picture>
                          {/**/}
                          {/**/}
                          <div
                            data-id="e88d3626-14f7-4c41-a7e5-66fb472a2bb1"
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
                                  Chúng tôi đang gặp một số vấn đề khi thu khoản
                                  thanh toán của bạn để gia hạn gói nạp. Vui
                                  lòng kiểm tra lại thông tin thanh toán và đảm
                                  bảo rằng bạn còn tiền trong tài khoản liên kết
                                  của mình.
                                </div>
                                <div className="text bold-text">
                                  Lưu ý: Bạn có thể huỷ gói bằng cách truy cập
                                  trang Quản lý thanh toán và chọn “Huỷ gói”.
                                  Bạn có thể mua lại gói nạp sau khi đã huỷ gói.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/**/}
                    <div
                      className="el-col el-col-12"
                      style={{ paddingLeft: 15, paddingRight: 15 }}
                    >
                      <div
                        className="product-wrapper"
                        id="ProductListing_Product_Div"
                      >
                        <div
                          custom-value="9042ced9-8c73-44b2-8a77-ced7f649a7d0"
                          item-order={0}
                          data-id="9042ced9-8c73-44b2-8a77-ced7f649a7d0"
                          data-price={20000}
                          className="package-item"
                        >
                          <picture className="handle-image">
                            <source
                              srcSet="https://scdn-imgsot.vng.games/ws-content/uploads//TOCCHIEN-ZINGPAY-1-LIVE/image/product/1068550434010042368.png?size=origin&iswebp=1"
                              type="image/webp"
                            />
                            <img
                              src="https://stc-sot.vcdn.vn/ws-content/uploads//TOCCHIEN-ZINGPAY-1-LIVE/image/product/1068550434010042368.png"
                              alt="Gói 100 Wild Cores"
                            />
                          </picture>
                          {/**/}
                          {/**/}
                          <div
                            data-id="9042ced9-8c73-44b2-8a77-ced7f649a7d0"
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
                                  thanh toán của bạn để gia hạn gói nạp. Vui
                                  lòng kiểm tra lại thông tin thanh toán và đảm
                                  bảo rằng bạn còn tiền trong tài khoản liên kết
                                  của mình.
                                </div>
                                <div className="text bold-text">
                                  Lưu ý: Bạn có thể huỷ gói bằng cách truy cập
                                  trang Quản lý thanh toán và chọn “Huỷ gói”.
                                  Bạn có thể mua lại gói nạp sau khi đã huỷ gói.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="parentInfo el-col el-col-24"
                      style={{ paddingLeft: 15, paddingRight: 15, height: 0 }}
                    >
                      <div
                        id="Display_product_detail_div"
                        className="packageInfo"
                      >
                        <div className="packageInfo__head">
                          <span className="title" />
                          <span
                            id="Product_Detail_Close_Div"
                            custom-value
                            item-order
                            className="close"
                          >
                            Đóng
                          </span>
                        </div>
                        <div className="packageInfo__content">
                          <p />
                        </div>
                        <div
                          id="Product_Detail_Purchase_Div"
                          item-order
                          custom-value
                          className="packageInfo__button"
                        >
                          <button className="el-button el-button--default button">
                            {/**/}
                            {/**/}
                            <span>Mua ngay</span>
                          </button>
                        </div>
                        <div className="triangleTop" />
                      </div>
                    </div>
                    <div
                      className="el-col el-col-12"
                      style={{ paddingLeft: 15, paddingRight: 15 }}
                    >
                      <div
                        className="product-wrapper"
                        id="ProductListing_Product_Div"
                      >
                        <div
                          custom-value="a6f22a8e-7dfc-44af-bdcd-75143c099d84"
                          item-order={0}
                          data-id="a6f22a8e-7dfc-44af-bdcd-75143c099d84"
                          data-price={100000}
                          className="package-item"
                        >
                          <picture className="handle-image">
                            <source
                              srcSet="https://scdn-imgsot.vng.games/ws-content/uploads//TOCCHIEN-ZINGPAY-1-LIVE/image/product/1068554144211668992.png?size=origin&iswebp=1"
                              type="image/webp"
                            />
                            <img
                              src="https://stc-sot.vcdn.vn/ws-content/uploads//TOCCHIEN-ZINGPAY-1-LIVE/image/product/1068554144211668992.png"
                              alt="Gói 505 Wild Cores"
                            />
                          </picture>
                          {/**/}
                          {/**/}
                          <div
                            data-id="a6f22a8e-7dfc-44af-bdcd-75143c099d84"
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
                                  Chúng tôi đang gặp một số vấn đề khi thu khoản
                                  thanh toán của bạn để gia hạn gói nạp. Vui
                                  lòng kiểm tra lại thông tin thanh toán và đảm
                                  bảo rằng bạn còn tiền trong tài khoản liên kết
                                  của mình.
                                </div>
                                <div className="text bold-text">
                                  Lưu ý: Bạn có thể huỷ gói bằng cách truy cập
                                  trang Quản lý thanh toán và chọn “Huỷ gói”.
                                  Bạn có thể mua lại gói nạp sau khi đã huỷ gói.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="parentInfo el-col el-col-24"
                      style={{ paddingLeft: 15, paddingRight: 15, height: 0 }}
                    >
                      <div
                        id="Display_product_detail_div"
                        className="packageInfo"
                      >
                        <div className="packageInfo__head">
                          <span className="title" />
                          <span
                            id="Product_Detail_Close_Div"
                            custom-value
                            item-order
                            className="close"
                          >
                            Đóng
                          </span>
                        </div>
                        <div className="packageInfo__content">
                          <p />
                        </div>
                        <div
                          id="Product_Detail_Purchase_Div"
                          item-order
                          custom-value
                          className="packageInfo__button"
                        >
                          <button className="el-button el-button--default button">
                            {/**/}
                            {/**/}
                            <span>Mua ngay</span>
                          </button>
                        </div>
                        <div className="triangleTop" />
                      </div>
                    </div>
                  </div>
                  {/**/}
                </div>
              </div>
              {/**/}
              {/**/}
              {/**/}
            </div>
          </div>
          {/**/}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
