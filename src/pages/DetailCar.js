import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import styles from "../Assets/css/Login.module.css";
import { imageDb } from "../firebaseConfig";
import * as Yup from "yup";
import {
  checkVehicleAvailable,
  getVehicleById,
} from "../service/vehicleService";
import { formatVNDMoney } from "../service/extensionService";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

function DetailCar() {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [vehicle, setVehicle] = useState();
  const [imageVehicles, setImageVehicles] = useState([]);
  const [isAvailable, setIsAvailable] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [timeBooking, setTimeBooking] = useState(null);
  useEffect(() => {
    getImageVehiclesFromStorage();
    getVehicleById(id).then((e) => {
      setVehicle(e);
      console.log(e);
    });
  }, []);
  const getImageVehiclesFromStorage = () => {
    try {
      listAll(ref(imageDb, "vehicles")).then((imgs) => {
        imgs.items.forEach((img) => {
          getDownloadURL(img).then((url) => {
            if (url.includes(id) && !imageVehicles.includes(url)) {
              setImageVehicles((pre) => [...pre, url]);
            }
          });
        });
      });
    } catch (e) {
      console.log(e);
    }
  };
  const handleBooking = () => {
    if (!user) {
      setIsAvailable("");
      setIsLogin(false);
    } else {
      dispatch({
        type: "ADD_INFOR_BOOKING",
        payload: {
          infoBooking: {
            dataVehicle: vehicle,
            time: timeBooking,
          },
        },
      });
      navigate("/booking");
    }
  };
  return (
    <div>
      <>
        {/* Page Header Start */}
        <div className="container-fluid page-header">
          <h1 className="display-3 text-uppercase text-white mb-3">
            Chi tiết xe
          </h1>
          <div className="d-inline-flex text-white">
            <h6 className="text-uppercase m-0">
              <a className="text-white" href="/">
                Trang chủ
              </a>
            </h6>
            <h6 className="text-body m-0 px-3">/</h6>
            <h6 className="text-uppercase text-body m-0">Chi tiết xe</h6>
          </div>
        </div>
        {/* Page Header Start */}
        {/* Detail Start */}
        {vehicle && (
          <div className="container-fluid pt-5">
            <div className="container pt-5">
              <div className="row">
                <div className="col-lg-8 mb-5">
                  <h1 className="display-4 text-uppercase mb-5">
                    {vehicle.vehicleName + " (" + vehicle.vehicleCode + ")"}
                  </h1>
                  <div className="row mx-n2 mb-3">
                    {imageVehicles &&
                      imageVehicles.map((img, index) => {
                        return (
                          <div className="col-md-3 col-6 px-2 pb-2" key={index}>
                            <img
                              className="img-fluid w-100"
                              src={img}
                              alt="Ảnh xe"
                            />
                          </div>
                        );
                      })}
                  </div>
                  <div className="row pt-2">
                    <div className="col-md-5 col-6 mb-2">
                      <i className="fa fa-road text-primary mr-2" />
                      <span style={{ fontWeight: "bold" }}>Địa điểm: </span>
                      <span>{vehicle.currentAddress}</span>
                    </div>
                    <div className="col-md-5 col-6 mb-2">
                      <i className="fa fa-eye text-primary mr-2" />
                      <span style={{ fontWeight: "bold" }}>Phí đặt cọc: </span>
                      <span>{formatVNDMoney(vehicle.depositFee)}</span>
                    </div>
                    <div className="col-md-5 col-6 mb-2">
                      <i className="fa fa-car text-primary mr-2" />
                      <span style={{ fontWeight: "bold" }}>Nhiên liệu: </span>
                      <span>Nhiên liệu: {vehicle.fuel}</span>
                    </div>
                    <div className="col-md-5 col-6 mb-2">
                      <i className="fa fa-eye text-primary mr-2" />
                      <span style={{ fontWeight: "bold" }}>Phí giữ chỗ: </span>
                      <span>{formatVNDMoney(vehicle.reservationFee)}</span>
                    </div>
                    <div className="col-md-5 col-6 mb-2">
                      <i className="fa fa-car text-primary mr-2" />
                      <span style={{ fontWeight: "bold" }}>Tiêu hao: </span>
                      <span>{vehicle.consumption + "L/Km"}</span>
                    </div>
                    <div className="col-md-5 col-6 mb-2">
                      <i className="fa fa-eye text-primary mr-2" />
                      <span style={{ fontWeight: "bold" }}>
                        Phí gia tăng (VAT):{" "}
                      </span>
                      <span>{formatVNDMoney(vehicle.vatFee)}</span>
                    </div>
                    <div className="col-md-5 col-6 mb-2">
                      <i className="fa fa-car text-primary mr-2" />
                      <span style={{ fontWeight: "bold" }}>Chỗ ngồi: </span>
                      <span>{vehicle.numberOfSeats} chỗ</span>
                    </div>
                    <div className="col-md-5 col-6 mb-2">
                      <i className="fa fa-eye text-primary mr-2" />
                      <span style={{ fontWeight: "bold" }}>Phí thuê: </span>
                      <span>
                        {formatVNDMoney(vehicle.aDayRentalPrice)}/ngày
                      </span>
                    </div>
                    <div className="col-md-5 col-6 mb-2">
                      <i className="fa fa-car text-primary mr-2" />
                      <span style={{ fontWeight: "bold" }}>Truyền tải: </span>
                      <span>{vehicle.transmissionSystem}</span>
                    </div>
                  </div>
                  <h5 className="pt-3">Giới thiệu về {vehicle.vehicleName}</h5>
                  <p>{vehicle.description}</p>
                  <h5 className="pt-3">Tính năng nổi bật</h5>
                  <div className="row pt-2">
                    {vehicle.amenities.map((amenity, index) => {
                      return (
                        <div className="col-md-3 col-6 mb-2" key={index}>
                          <i className="fa fa-cogs text-primary mr-2" />
                          <span>{amenity}</span>
                        </div>
                      );
                    })}
                  </div>
                  <h5 className="pt-3">Điều khoản thuê xe</h5>
                  <div className="row pt-2">
                    <div className="col-md-12 col-6 mb-2">
                      <span style={{ fontWeight: "bold", fontSize: 14 }}>
                        - Sử dụng xe đúng mục đích.
                      </span>
                    </div>
                    <div className="col-md-12 col-6 mb-2">
                      <span style={{ fontWeight: "bold", fontSize: 14 }}>
                        - Không sử dụng xe thuê vào mục đích phi pháp, trái pháp
                        luật.
                      </span>
                    </div>
                    <div className="col-md-12 col-6 mb-2">
                      <span style={{ fontWeight: "bold", fontSize: 14 }}>
                        - Không sử dụng xe thuê để cầm cố, thế chấp.
                      </span>
                    </div>
                    <div className="col-md-12 col-6 mb-2">
                      <span style={{ fontWeight: "bold", fontSize: 14 }}>
                        - Không hút thuốc, nhả kẹo cao su, xả rác trong xe.
                      </span>
                    </div>
                    <div className="col-md-12 col-6 mb-2">
                      <span style={{ fontWeight: "bold", fontSize: 14 }}>
                        - Không chở hàng quốc cấm dễ cháy nổ.
                      </span>
                    </div>
                    <div className="col-md-12 col-6 mb-2">
                      <span style={{ fontWeight: "bold", fontSize: 14 }}>
                        - Không chở hoa quả, thực phẩm nặng mùi trong xe.
                      </span>
                    </div>
                    <div className="col-md-12 col-6 mb-2">
                      <span style={{ fontWeight: "bold", fontSize: 14 }}>
                        - Khi trả xe, nếu xe bẩn hoặc có mùi trong xe, khách
                        hàng vui lòng vệ sinh xe sạch sẽ hoặc gửi phụ thu phí vệ
                        sinh xe.
                      </span>
                    </div>
                    <div className="col-md-12 col-6 mb-2">
                      <span style={{ fontWeight: "bold", fontSize: 14 }}>
                        Nếu vi phạm các điều khoản trên, quý khách sẽ phải chịu
                        khoản phạt để bồi thường thiệt hại cho xe. Trân trọng
                        cảm ơn, chúc quý khách hàng có những chuyến đi tuyệt vời
                        !
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-5">
                  <Formik
                    initialValues={{
                      vehicleId: id,
                      dateOfBooking: "",
                      dateOfReturn: "",
                    }}
                    validationSchema={Yup.object({
                      dateOfBooking: Yup.date()
                        .required("Ngày đặt bắt buộc phải nhập.")
                        .test(
                          "is-future-date",
                          "Ngày đặt phải lớn hơn ngày và giờ hiện tại.",
                          function (value) {
                            return new Date(value) > new Date(); // Compare with current date and time
                          }
                        ),
                      dateOfReturn: Yup.date().required(
                        "Ngày trả bắt buộc phải nhập."
                      ),
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                      checkVehicleAvailable(values).then((e) => {
                        setIsAvailable("" + e);
                        setTimeBooking(values);
                      });
                    }}
                  >
                    <Form>
                      <div className="bg-secondary p-5">
                        <h3 className="text-primary text-center mb-4">
                          Kiểm tra xe có sẵn
                        </h3>

                        <div className="form-group">
                          <div
                            className="date"
                            id="date1"
                            data-target-input="nearest"
                          >
                            <Field
                              type="datetime-local"
                              className="form-control p-4 datetimepicker-input"
                              placeholder="Ngày đặt"
                              name="dateOfBooking"
                              data-target="#date1"
                              data-toggle="datetimepicker"
                              onBlur={(e) => {
                                setIsAvailable("");
                                setIsLogin(true);
                              }}
                            />
                            <ErrorMessage
                              name="dateOfBooking"
                              className={styles.errorMessage}
                              component={"p"}
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <div
                            className="time"
                            id="time1"
                            data-target-input="nearest"
                          >
                            <Field
                              type="datetime-local"
                              className="form-control p-4 datetimepicker-input"
                              placeholder="Dự kiến trả"
                              name="dateOfReturn"
                              data-target="#time1"
                              data-toggle="datetimepicker"
                              onBlur={(e) => {
                                setIsAvailable("");
                                setIsLogin(true);
                              }}
                            />
                            <ErrorMessage
                              name="dateOfReturn"
                              className={styles.errorMessage}
                              component={"p"}
                            />
                            {isAvailable == "false" ? (
                              <p className={styles.errorMessage}>
                                Xe không có sẵn trong thời gian này
                              </p>
                            ) : isAvailable == "true" ? (
                              <p style={{ color: "green", fontSize: 13 }}>
                                Xe có sẵn trong thời gian này
                              </p>
                            ) : (
                              ""
                            )}
                            {!isLogin ? (
                              <p className={styles.errorMessage}>
                                Vui lòng đăng nhập để thuê xe
                              </p>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>

                        <div className="form-group mb-0">
                          <button
                            className="btn btn-primary btn-block"
                            type="submit"
                            style={{ height: 50 }}
                          >
                            Kiểm tra ngay
                          </button>
                          {isAvailable == "true" ? (
                            <button
                              className="btn btn-success btn-block"
                              type="submit"
                              style={{ height: 50 }}
                              onClick={handleBooking}
                            >
                              Thuê xe ngay
                            </button>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Detail End */}
      </>
    </div>
  );
}

export default DetailCar;
