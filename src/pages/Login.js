import React, { useEffect } from "react";
import styles from "../Assets/css/Login.module.css";
import { Link } from "react-router-dom";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router";
import { handleCallApiLogin } from "../service/authenticationService";
import { useDispatch } from "react-redux";
export default function Login() {
  const [failedAccount, setFailedAccount] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Tên đăng nhập bắt buộc phải nhập.")
      .test(
        "length", // tên của test
        "Tên đăng nhập bắt buộc từ 6-30 ký tự.",
        function (value) {
          // Kiểm tra nếu value là null hoặc undefined trước khi kiểm tra độ dài
          if (!value) return false;
          return value.length >= 6 && value.length <= 30;
        }
      ),
    password: Yup.string()
      .required("Mật khẩu bắt buộc phải nhập.")
      .test("length", "Mật khẩu bắt buộc từ 6-30 ký tự.", function (value) {
        if (!value) return false;
        return value.length >= 6 && value.length <= 30;
      }),
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
        <h2>Đăng nhập</h2>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleCallApiLogin(values)
              .then((e) => {
                console.log(e);
                if (e.statusCode == 401) {
                  if (e.errors.AccountInactive) {
                    setFailedAccount(e.errors.AccountInactive);
                  } else {
                    setFailedAccount("Tên đăng nhập hoặc mật khẩu không đúng.");
                  }
                } else {
                  setFailedAccount(null);
                  dispatch({
                    type: "LOGIN",
                    payload: {
                      user: e.data,
                    },
                  });
                  navigate("/");
                }
              })
              .catch(() => {
                setFailedAccount("Tên đăng nhập hoặc mật khẩu không đúng.");
              })
              .finally(() => {
                setSubmitting(false);
              });
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className={styles.inputGroup}>
                <label htmlFor="username">Tên đăng nhập</label>
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
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="password">Mật khẩu</label>
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
              </div>
              {failedAccount && (
                <p className={styles.errorMessage}>{failedAccount}</p>
              )}
              <div className={styles.inputGroup}>
                <button
                  type="submit"
                  className={styles.loginBtn + " w-100"}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Đang kiểm tra..." : "Đăng nhập"}
                </button>
              </div>
              <p
                className={
                  styles.forgotPassword + " d-flex justify-content-between"
                }
              >
                <Link to="/register">Bạn chưa có tài khoản ?</Link>
                <Link to="/forgot-password">Quên mật khẩu?</Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
