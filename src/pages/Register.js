import React from "react";
import styles from "../Assets/css/Login.module.css";
import { Link } from "react-router-dom";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router";
import { handleCallApiRegister } from "../service/authenticationService";
export default function Register() {
  const [failedAccount, setFailedAccount] = useState({});
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    displayName: Yup.string().required("Tên của bạn không được để trống"),
    email: Yup.string()
      .email("Email không hợp lệ")
      .required("Email của bạn không được để trống"),
    mobile: Yup.string().required("Số điện thoại không được để trống"),
    address: Yup.string().required("Địa chỉ không được để trống"),
    username: Yup.string()
      .required("Tên đăng nhập không được để trống")
      .min(6, "Tên đăng nhập bắt buộc từ 6 ký tự.")
      .max(30, "Tên đăng nhập không được vượt quá 30 ký tự."),
    password: Yup.string()
      .required("Mật khẩu không được để trống")
      .min(6, "Mật khẩu bắt buộc từ 6 ký tự.")
      .max(30, "Mật khẩu không được vượt quá 30 ký tự."),
  });
  return (
    <div className={styles.loginContainer}>
      <div className={styles.imageSection}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/img/banner-right.png`}
          alt="Sleek Car"
          className={styles.image}
        />
      </div>
      <div className={styles.formSection}>
        <h2>Đăng ký tài khoản</h2>
        <Formik
          initialValues={{
            username: "",
            displayName: "",
            email: "",
            mobile: "",
            password: "",
            address: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            handleCallApiRegister(values)
              .then((e) => {
                console.log(e);
                if (e.statusCode == 400) {
                  setFailedAccount(e.errors);
                } else {
                  setFailedAccount(null);
                  navigate("/login?active=false");
                }
              })
              .catch(() => {
                console.log("Error jump to catch block");
              })
              .finally(() => {
                setSubmitting(false);
              });
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className={styles.inputGroup}>
                <Field
                  type="text"
                  id="displayName"
                  name="displayName"
                  placeholder="Tên của bạn"
                  className={styles.input}
                />
                <ErrorMessage
                  name="displayName"
                  className={styles.errorMessage}
                  component={"p"}
                />
              </div>
              <div className={styles.inputGroup}>
                <Field
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Tên đăng nhập"
                  className={styles.input}
                />
                <ErrorMessage
                  name="username"
                  className={styles.errorMessage}
                  component={"p"}
                />
                {failedAccount.Username && (
                  <p className={styles.errorMessage}>
                    {failedAccount.Username}
                  </p>
                )}
              </div>
              <div className={styles.inputGroup}>
                <Field
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email của bạn"
                  className={styles.input}
                />
                <ErrorMessage
                  name="email"
                  className={styles.errorMessage}
                  component={"p"}
                />
                {failedAccount.Email && (
                  <p className={styles.errorMessage}>{failedAccount.Email}</p>
                )}
              </div>
              <div className={styles.inputGroup}>
                <Field
                  type="text"
                  id="mobile"
                  name="mobile"
                  placeholder="Số điện thoại"
                  className={styles.input}
                />
                <ErrorMessage
                  name="mobile"
                  className={styles.errorMessage}
                  component={"p"}
                />
                {failedAccount.Mobile && (
                  <p className={styles.errorMessage}>{failedAccount.Mobile}</p>
                )}
              </div>
              <div className={styles.inputGroup}>
                <Field
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Địa chỉ"
                  className={styles.input}
                />
                <ErrorMessage
                  name="address"
                  className={styles.errorMessage}
                  component={"p"}
                />
              </div>
              <div className={styles.inputGroup}>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Mật khẩu"
                  className={styles.input}
                />
                <ErrorMessage
                  name="password"
                  className={styles.errorMessage}
                  component={"p"}
                />
                {failedAccount.Password && (
                  <p className={styles.errorMessage}>
                    {failedAccount.Password}
                  </p>
                )}
              </div>
              <div className={styles.inputGroup}>
                <button
                  type="submit"
                  className={styles.loginBtn + " w-100"}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Hệ thống đang xử lý..." : "Tạo tài khoản"}
                </button>
              </div>
              <p
                className={
                  styles.forgotPassword + " d-flex justify-content-center"
                }
              >
                <Link to="/login">Đăng nhập</Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
