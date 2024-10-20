import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserById } from "../service/userService";
import styles from "../Assets/css/Profile.module.css";
import { imageDb } from "../firebaseConfig";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import UpdateInformation from "./UpdateInformation";
import VerifyAccount from "./VerifyAccount";
import { Link, useLocation } from "react-router-dom";
import ResetPassword from "./ResetPassword";

export default function Profile() {
  const user = useSelector((state) => state.user.user);
  const [currentPath, setCurrentPath] = useState("/profile");
  const location = useLocation();
  const [profile, setProfile] = useState(null);
  const [avatar, setAvatar] = useState(
    "https://i.pinimg.com/736x/c6/e5/65/c6e56503cfdd87da299f72dc416023d4.jpg"
  );
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);
  useEffect(() => {
    getUserById(user.id, user.token)
      .then((e) => {
        setProfile(e);
      })
      .catch((e) => {
        console.log(e);
      });
    getAvatarFromStorage();
  }, []);
  useEffect(() => {
    if (avatar == null) {
      setAvatar(
        "https://i.pinimg.com/736x/c6/e5/65/c6e56503cfdd87da299f72dc416023d4.jpg"
      );
    }
  }, [avatar]);
  const handleUploadAvatar = (img) => {
    if (img != null) {
      const imgRef = ref(imageDb, `avatars/${user.id}`);
      uploadBytes(imgRef, img).then((url) => {
        console.log(url);
      });
    }
    getAvatarFromStorage();
  };
  const getAvatarFromStorage = () => {
    try {
      listAll(ref(imageDb, "avatars")).then((imgs) => {
        var img = imgs.items.find((item) =>
          item._location.path_.includes(user.id)
        );
        getDownloadURL(img).then((url) => {
          setAvatar(url);
          console.log(url);
        });
      });
    } catch (e) {
      console.log(e);
      setAvatar(
        "https://i.pinimg.com/736x/c6/e5/65/c6e56503cfdd87da299f72dc416023d4.jpg"
      );
    }
  };
  return (
    profile && (
      <div className={styles.container}>
        <div className={styles.leftProfile}>
          <ul style={{ listStyleType: "none" }} className={styles.listFeature}>
            <li
              className={styles.lineFeature + " d-flex justify-content-center"}
            >
              <img
                className={styles.AvatarProfile}
                onClick={() => {
                  document.getElementById("fileImageChange").click();
                }}
                src={avatar}
                alt="Avatar"
              />
              <input
                type="file"
                id="fileImageChange"
                style={{ visibility: "hidden", width: 0 }}
                onChange={(e) => {
                  handleUploadAvatar(e.target.files[0]);
                }}
              />
            </li>
            <li className={`${styles.lineUserName}`}>{profile.displayName}</li>
            <li className={styles.lineFeature}>
              <p
                onClick={() => setCurrentPath("/profile")}
                className="pl-3 m-0"
              >
                Cập nhật thông tin
              </p>
            </li>
            <li className={styles.lineFeature}>
              <p
                onClick={() => setCurrentPath("/verify-account")}
                className="pl-3 m-0"
              >
                Xác minh tài khoản
              </p>
            </li>
            <li className={styles.lineFeature}>
              <p
                onClick={() => {
                  setCurrentPath("/reset-password");
                }}
                className="pl-3 m-0"
              >
                Đổi mật khẩu
              </p>
            </li>
          </ul>
        </div>
        {currentPath === "/profile" && profile && (
          <UpdateInformation profile={profile} />
        )}
        {currentPath === "/verify-account" && profile && (
          <VerifyAccount profile={profile} />
        )}
        {currentPath === "/reset-password" && profile && (
          <ResetPassword profile={profile} />
        )}
      </div>
    )
  );
}
