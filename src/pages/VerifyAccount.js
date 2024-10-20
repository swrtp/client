import { useDispatch, useSelector } from "react-redux";
import styles from "../Assets/css/Profile.module.css";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { imageDb } from "../firebaseConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { callRequestVerifyAccountAsync } from "../service/userService";
export default function VerifyAccount(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profile = props.profile;
  const [lisenseBefore, setLisenseBefore] = useState(null);
  const [lisenseAfter, setLisenseAfter] = useState(null);
  const [isError, setIsError] = useState(false);
  const handleUploadAvatar = (path, img) => {
    if (img != null) {
      const imgRef = ref(imageDb, `${path}/${profile.id}`);
      uploadBytes(imgRef, img).then((url) => {
        console.log(url);
      });
    }
    getAvatarFromStorage(path);
  };
  const getAvatarFromStorage = (path) => {
    try {
      listAll(ref(imageDb, path)).then((imgs) => {
        var img = imgs.items.find((item) =>
          item._location.path_.includes(profile.id)
        );
        getDownloadURL(img).then((url) => {
          setLisenseByPath(path, url);
          console.log(url);
        });
      });
    } catch (e) {
      console.log(e);
    }
  };
  const setLisenseByPath = (path, img) => {
    if (path.includes("before")) {
      setLisenseBefore(img);
    } else if (path.includes("after")) {
      setLisenseAfter(img);
    }
  };
  const requestVerifyAccount = () => {
    if (lisenseBefore == null || lisenseAfter == null) {
      setIsError(true);
    } else {
      callRequestVerifyAccountAsync(profile.id, profile.token)
        .then((e) => {
          dispatch({
            type: "LOGIN",
            payload: {
              user: { ...profile, verifyStatus: "Chờ phê duyệt" },
            },
          });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  return (
    <div className={styles.rightProfile}>
      <h2>Xác minh tài khoản</h2>
      {profile.verifyStatus === "Chờ phê duyệt" ? (
        <>
          <p className={`${styles.note}`}>
            Yêu cầu xác minh tài khoản của bạn đã được gửi đi, vui lòng chờ
            admin phê duyệt yêu cầu. Trong thời gian phê duyệt, nếu có bất kì
            thắc mắc xin vui lòng liên hệ về số điện thoại 0915412406. Xin cảm
            ơn!
          </p>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              onClick={() => {
                navigate("/profile");
              }}
            >
              Trang cá nhân
            </button>
          </div>
        </>
      ) : profile.verifyStatus === "Đã xác minh" ? (
        <>
          <p className={`${styles.note}`}>
            Tài khoản của bạn đã được xác minh thành công. Nếu có bất kì thắc
            mắc xin vui lòng liên hệ về số điện thoại 0915412406. Xin cảm ơn!
          </p>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              onClick={() => {
                navigate("/profile");
              }}
            >
              Trang cá nhân
            </button>
          </div>
        </>
      ) : (
        <>
          <p className={`${styles.note}`}>
            <span className={styles.starNote}>* </span>Vui lòng tải lên hình ảnh
            mặt trước và mặt sau của bằng lái xe để xác minh tài khoản và điều
            kiện thuê xe.
          </p>
          <div className="d-flex justify-content-center algin-items-center">
            {/* LISENSE-BEFORE */}
            <div
              className={
                styles.lisenceImg +
                " p-3 d-flex justify-content-center align-items-center"
              }
              onClick={() => {
                document.getElementById("lisenseBefore").click();
              }}
            >
              <input
                type="file"
                name="befLisenceImg"
                className="w-0 h-0"
                id="lisenseBefore"
                style={{ visibility: "hidden", width: 0 }}
                onChange={(e) => {
                  handleUploadAvatar("lisenses/before", e.target.files[0]);
                }}
              />
              {lisenseBefore ? (
                <img
                  className="w-100 h-100"
                  src={lisenseBefore}
                  alt="Ảnh mặt trước"
                />
              ) : (
                <span>Ảnh mặt trước</span>
              )}
            </div>
            {/* LISENSE-AFTER */}
            <div
              className={
                styles.lisenceImg +
                " p-3 d-flex justify-content-center align-items-center"
              }
              onClick={() => {
                document.getElementById("lisenseAfter").click();
              }}
            >
              <input
                type="file"
                name="aftLisenceImg"
                id="lisenseAfter"
                style={{ visibility: "hidden", width: 0 }}
                className="w-0 h-0"
                onChange={(e) => {
                  handleUploadAvatar("lisenses/after", e.target.files[0]);
                }}
              />
              {lisenseAfter ? (
                <img
                  className="w-100 h-100"
                  src={lisenseAfter}
                  alt="Ảnh mặt sau"
                />
              ) : (
                <span>Ảnh mặt sau</span>
              )}
            </div>
          </div>
          {isError && (
            <p style={{ textAlign: "center", color: "red", fontSize: 14 }}>
              Vui lòng tải mặt trước và mặt sau bằng lái xe của bạn
            </p>
          )}
          <div className="d-flex justify-content-center">
            <button type="button" onClick={requestVerifyAccount}>
              Gửi yêu cầu xác minh
            </button>
          </div>
        </>
      )}
    </div>
  );
}
