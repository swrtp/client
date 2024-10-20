import styles from "../Assets/css/Profile.module.css";
export default function UpdateInformation(props) {
  const profile = props.profile;
  return (
    <div className={styles.rightProfile}>
      <h2>Hồ sơ cá nhân</h2>
      <form id="profileForm">
        <div className={styles.formGroup}>
          <label className={styles.labelInput} for="userName">
            <strong>Tên đăng nhập:</strong>
          </label>
          <input
            className={styles.inputProfile}
            type="text"
            id="userName"
            value={profile.userName}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.labelInput} for="displayName">
            <strong>Tên người dùng:</strong>
          </label>
          <input
            className={styles.inputProfile}
            type="text"
            id="displayName"
            value={profile.displayName}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.labelInput} for="email">
            <strong>Email:</strong>
          </label>
          <input
            className={styles.inputProfile}
            type="email"
            id="email"
            value={profile.email}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.labelInput} for="mobile">
            <strong>Số điện thoại:</strong>
          </label>
          <input
            className={styles.inputProfile}
            type="text"
            id="mobile"
            value={profile.mobile}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.labelInput} for="address">
            <strong>Địa chỉ:</strong>
          </label>
          <input
            className={styles.inputProfile}
            type="text"
            id="address"
            value={profile.address}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.labelInput} for="verifyStatus">
            <strong>Trạng thái xác minh:</strong>
          </label>
          <p className={styles.textPTag}>{profile.verifyStatus}</p>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.labelInput} for="status">
            <strong>Trạng thái tài khoản:</strong>
          </label>
          <p className={styles.textPTag}>{profile.status}</p>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.labelInput} for="created">
            <strong>Ngày tạo:</strong>
          </label>
          <p className={styles.textPTag}>{profile.created}</p>
        </div>
        <div
          className={styles.formGroup + " d-flex justify-content-center pt-3"}
        >
          <button type="button">Chỉnh sửa thông tin</button>
        </div>
      </form>
    </div>
  );
}
