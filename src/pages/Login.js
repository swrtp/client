import React from "react";
import styles from "../Assets/css/Login.module.css";
import { Link } from "react-router-dom";
export default function Login() {
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
        <form>
          <div className={styles.inputGroup}>
            <label htmlFor="username">Tên đăng nhập</label>
            <input
              type="text"
              id="username"
              placeholder="Tên đăng nhập"
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              id="password"
              placeholder="Mật khẩu"
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <button type="submit" className={styles.loginBtn}>
              Đăng nhập
            </button>
          </div>
          <p className={styles.forgotPassword}>
            <Link to="#">Quên mật khẩu?</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
