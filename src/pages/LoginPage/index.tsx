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
import data from "../../constants/data.json";
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

const LoginPage: React.FC<Props> = () => {
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
              <div>
                {/**/}
                <div className="content-box authentication" id="Authentication">
                  <div className="mask" />
                  <div className="content-box__header">
                    <div className="content-box__header-container">
                      <span className="content-box__header-number">1</span>
                      <span className="content-box__header-content">
                        Đăng nhập bằng Riot ID hoặc tên người dùng
                      </span>
                    </div>
                    <div
                      className="IdentificationCustomInfo QUICK INLINE"
                      id="Authentication_HowToFindRoleID_A"
                    >
                      {/**/}
                      <a className="GET_UID_IMAGE">Hướng dẫn tìm ID</a>
                    </div>
                  </div>
                  <div className="content-box__content">
                    <div>
                      {/**/}
                      <div className="loginForm">
                        <form className="el-form" auto-complete="on">
                          <div className="el-form-item is-required">
                            {/**/}
                            <div className="el-form-item__content">
                              <div className="el-input el-input--prefix el-input--suffix show-user-logged">
                                {/**/}
                                <input
                                  type="text"
                                  autoComplete="off"
                                  id="Authentication_RoleID_Input"
                                  placeholder=" Riot ID hoặc tên người dùng"
                                  className="el-input__inner"
                                />
                                <span className="el-input__prefix">
                                  <div className="user-logged">
                                    <p className="selected">
                                      {" "}
                                      Kẻ 1 Line#420 - Kẻ 1 Line#420{" "}
                                    </p>
                                  </div>
                                  {/**/}
                                </span>
                                {/**/}
                                {/**/}
                                {/**/}
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                          {/**/}
                          <input type="text" className="input-hidden" />
                          <button
                            className="el-button el-button--default button"
                            id="Authentication_SubmitLogin_Button"
                            custom-value="quick_rid"
                          >
                           
                            <span>Xác nhận</span>
                          </button>
                        </form>
                      </div>
                    </div>
                    {/**/}
                    <div
                      className="IdentificationCustomInfo undefined undefined"
                      id="Authentication_HowToFindRoleID_A"
                    >
                      {/**/}
                      {/**/}
                    </div>
                  </div>
                </div>
              </div>
              {/**/}
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

export default LoginPage;