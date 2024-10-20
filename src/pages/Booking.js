import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserById } from "../service/userService";
import * as Yup from "yup";
import styles from "../Assets/css/Login.module.css";
import {
  calculateDaysRental,
  formatDateTimeString,
  formatVNDMoney,
} from "../service/extensionService";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { saveBooking } from "../service/bookingService";

function Booking() {
  const [user, setUser] = useState(null);
  const [userB, setUserB] = useState(null);
  const account = useSelector((state) => state.user.user);
  const vehicle = useSelector((state) => state.user.infoBooking.dataVehicle);
  const timeBooking = useSelector((state) => state.user.infoBooking.time);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const currentDate = new Date();
  useEffect(() => {
    getUserById(account.id, account.token).then((e) => {
      setUser(e);
    });
  }, []);
  return (
    <div>
      {user && vehicle && timeBooking && (
        <>
          {/* Page Header Start */}
          <div className="container-fluid page-header">
            <h1 className="display-3 text-uppercase text-white mb-3">Đặt xe</h1>
            <div className="d-inline-flex text-white">
              <h6 className="text-uppercase m-0">
                <a className="text-white" href="/">
                  Trang chủ
                </a>
              </h6>
              <h6 className="text-body m-0 px-3">/</h6>
              <h6 className="text-uppercase text-body m-0">Đặt xe</h6>
            </div>
          </div>
          {/* Page Header Start */}
          {/* Detail Start */}
          <div className="container-fluid pt-5">
            <div className="container pt-5 pb-3">
              <h1 className="display-4 text-uppercase mb-5 text-center">
                Xác nhận thuê xe
              </h1>
            </div>
          </div>
          {/* Detail End */}
          {/* Car Booking Start */}
          <div className="container-fluid pb-5">
            <div className="">
              <div className="row">
                <Formik
                  validationSchema={Yup.object({
                    email: Yup.string().required("Email không được để trống."),
                    mobile: Yup.string().required(
                      "Số điện thoại không được để trống."
                    ),
                    returnCarMethod: Yup.number().moreThan(
                      0,
                      "Vui lòng chọn cách thức hoàn trả xe"
                    ),
                    addressReturnCar: Yup.string().when("returnCarMethod", {
                      is: (value) => value === 2,
                      then: () =>
                        Yup.string().required(
                          "Vui lòng nhập địa chỉ hoàn trả xe"
                        ),
                    }),
                  })}
                  initialValues={{
                    email: user.email,
                    mobile: user.mobile,
                    returnCarMethod: 0,
                    addressReturnCar: "",
                    paymentMethod: 0,
                  }}
                  onSubmit={(values) => {
                    setUserB({
                      ...values,
                      returnCarMethod:
                        values.returnCarMethod === "1"
                          ? "Trả tại cửa hàng"
                          : "Lấy xe tận nơi",
                      paymentMethod:
                        values.paymentMethod === "0"
                          ? "Thanh toán tại cửa hàng"
                          : values.paymentMethod === "1"
                          ? "Thanh toán tại VNpay"
                          : "Thanh toán tại Paypal",
                    });
                    saveBooking(
                      {
                        userId: user.id,
                        vehicleId: vehicle.id,
                        couponId: null,
                        bookingType: parseInt(values.returnCarMethod),
                        paymentMethod: parseInt(values.paymentMethod),
                        startDate: timeBooking.dateOfBooking,
                        expectedReturnDate: timeBooking.dateOfReturn,
                        returnAddress: values.addressReturnCar,
                      },
                      account.token
                    )
                      .then((e) => {
                        console.log(e);
                      })
                      .catch((e) => {
                        console.log(e);
                      });
                  }}
                >
                  {({ handleSubmit }) => (
                    <div className="col-lg-3 border">
                      <Form>
                        <h4 className="mb-4 mt-3 text-center">
                          Thay đổi thông tin liên lạc
                        </h4>
                        <div className="mb-5">
                          <div className="row"></div>
                          <div className="row">
                            <div className="col-12 form-group">
                              <label style={{ fontSize: 13 }}>
                                Email liên hệ
                              </label>
                              <Field
                                type="email"
                                className="form-control p-4"
                                placeholder="Email của bạn"
                                name="email"
                              />
                              <ErrorMessage
                                name="email"
                                className={styles.errorMessage}
                                component={"p"}
                              />
                            </div>
                            <div className="col-12 form-group">
                              <label style={{ fontSize: 13 }}>
                                Số điện thoại
                              </label>
                              <Field
                                type="text"
                                className="form-control p-4"
                                placeholder="Số điện thoại"
                                name="mobile"
                              />
                              <ErrorMessage
                                name="mobile"
                                className={styles.errorMessage}
                                component={"p"}
                              />
                            </div>
                          </div>
                        </div>
                        <h4 className="mb-4 text-center">Chi tiết đặt xe</h4>
                        <div className="mb-5">
                          <div className="row">
                            <div className="col-12 form-group">
                              <label style={{ fontSize: 13 }}>
                                Cách thức trả xe
                              </label>
                              <Field
                                as="select"
                                className="custom-select px-4"
                                style={{ height: 50 }}
                                name="returnCarMethod"
                              >
                                <option value={0}>Cách thức trả xe</option>
                                <option value={1}>Trả tại cửa hàng</option>
                                <option value={2}>Lấy xe tận nơi</option>
                              </Field>
                              <ErrorMessage
                                name="returnCarMethod"
                                className={styles.errorMessage}
                                component={"p"}
                              />
                            </div>
                            <div className="col-12 form-group">
                              <label style={{ fontSize: 13 }}>
                                Địa chỉ trả xe (nếu lấy xe tận nơi)
                              </label>
                              <Field
                                type="text"
                                className="form-control p-4"
                                placeholder="Địa điểm lấy xe"
                                name="addressReturnCar"
                              />
                              <ErrorMessage
                                name="addressReturnCar"
                                className={styles.errorMessage}
                                component={"p"}
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 form-group">
                              <label style={{ fontSize: 13 }}>
                                Phương thức thanh toán
                              </label>
                              <Field
                                as="select"
                                className="custom-select px-4"
                                style={{ height: 50 }}
                                name="paymentMethod"
                              >
                                <option value={0}>
                                  Thanh toán tại cửa hàng
                                </option>
                                <option value={1}>Thanh toán bằng VNpay</option>
                                <option value={2}>
                                  Thanh toán bằng Paypal
                                </option>
                              </Field>
                            </div>
                          </div>
                          <button
                            className="btn btn-primary btn-block"
                            type="button"
                            onClick={() => {
                              setShow(true);
                            }}
                            style={{ height: 50 }}
                          >
                            Xác nhận thông tin
                          </button>
                        </div>
                        <div
                          className="modal show"
                          style={{ display: "block", position: "initial" }}
                        >
                          <Modal show={show} onHide={handleClose}>
                            <Modal.Header>
                              <Modal.Title>Xác nhận</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              Hợp đồng sẽ được cập nhật theo thông tin trên, bạn
                              chắc chắn với những thông tin trên ?
                            </Modal.Body>
                            <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                                Đóng
                              </Button>
                              <Button
                                variant="primary"
                                onClick={() => {
                                  handleSubmit();
                                  setShow(false);
                                }}
                              >
                                Xác nhận
                              </Button>
                            </Modal.Footer>
                          </Modal>
                        </div>
                      </Form>
                    </div>
                  )}
                </Formik>
                {/* HOP DONG THUE XE */}
                <div
                  className="col-lg-9 border"
                  style={{
                    width: 620,
                    paddingLeft: 60,
                    paddingRight: 60,
                    paddingBottom: 20,
                    paddingTop: 20,
                  }}
                >
                  <meta
                    content="text/html; charset=utf-8"
                    httpEquiv="Content-Type"
                  />
                  <meta content="text/css" httpEquiv="Content-Style-Type" />
                  <meta
                    content="Aspose.Words for .NET 11.5.0.0"
                    name="generator"
                  />
                  <title />
                  <div>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "center",
                        textIndent: "36pt",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontWeight: "bold",
                        }}
                      >
                        CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "center",
                        textIndent: "36pt",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontWeight: "bold",
                        }}
                      >
                        Độc lập – Tự do – Hạnh phúc
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "center",
                        textIndent: "36pt",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        &nbsp;
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "center",
                        textIndent: "36pt",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontWeight: "bold",
                        }}
                      >
                        HỢP ĐỒNG THUÊ XE
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontWeight: "bold",
                        }}
                      >
                        &nbsp;
                      </span>
                    </p>
                    <p
                      style={{
                        lineHeight: "17.25pt",
                        margin: "6pt 0pt 4.5pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontStyle: "italic",
                        }}
                      >
                        Hôm nay, ngày {currentDate.getUTCDate()} tháng{" "}
                        {currentDate.getUTCMonth() + 1} năm{" "}
                        {currentDate.getUTCFullYear()}, tại Đà Nẵng, chúng tôi
                        là: Hệ thống cho thuê xe CV Car
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontWeight: "bold",
                          textDecoration: "underline",
                        }}
                      >
                        BÊN CHO THUÊ
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontWeight: "bold",
                          textDecoration: "underline",
                        }}
                      >
                        &nbsp;
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontStyle: "italic",
                          fontWeight: "bold",
                        }}
                      >
                        &nbsp;
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontStyle: "italic",
                          fontWeight: "bold",
                        }}
                      >
                        {"(Bên A)"}
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontStyle: "italic",
                        }}
                      >
                        &nbsp;
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        Ông: Lê Văn Chính
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        {" "}
                        Sinh năm: 2003
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        CMND/
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        CCCD/Hộ chiếu số: 044203005749{" "}
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        do cục Cảnh Sát Lệ Thủy{" "}
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        cấp ngày 04/01/2024{" "}
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        Hộ khẩu thường trú tại: Hoàng Giang, Xuân Thủy, Lệ Thủy,
                        Quảng Bình
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        Ông: Phạm Tuấn Kiệt
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        {" "}
                        Sinh năm: 2003
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        CMND/CCCD/Hộ chiếu số: 044203005238{" "}
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        do cục Cảnh Sát Đông Hà cấp ngày 26/09/2023{" "}
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        Hộ khẩu thường trú tại: Phường 5, Đông Hà, Quảng Trị{" "}
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontWeight: "bold",
                          textDecoration: "underline",
                        }}
                      >
                        BÊN THUÊ
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        &nbsp;
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontStyle: "italic",
                          fontWeight: "bold",
                        }}
                      >
                        {"(Bên B)"}
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        Ông:
                        {user.displayName}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ngày đăng ký:{" "}
                        {user.created}
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        Email : {userB == null ? user.email : userB.email}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Số điện thoại
                        : {userB == null ? user.mobile : userB.mobile}
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        Hộ khẩu thường trú tại : {user.address}
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontStyle: "italic",
                        }}
                      >
                        Hai bên đã thỏa thuận và thống nhất ký kết Hợp đồng thuê
                        xe ôtô với những điều khoản cụ thể như sau:
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontWeight: "bold",
                        }}
                      >
                        Điều 1
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        .
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        &nbsp;
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontWeight: "bold",
                        }}
                      >
                        Đặc điểm và thỏa thuận thuê xe
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        Bằng hợp đồng này, Bên A đồng ý cho Bên B thuê và bên B
                        đồng ý thuê xe ô tô có đặc điểm sau đây:
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        Tên xe : {vehicle.vehicleName}
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        {" "}
                        Mã số : {vehicle.vehicleCode}
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        Loại xe : Ô tô
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        {" "}
                        Hộp số : {vehicle.transmissionSystem}
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        {" "}
                        Số chỗ ngồi: {vehicle.numberOfSeats} chỗ
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        Đăng ký xe có giá trị đến năm: 2028.
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        - Bên A cam đoan trước khi ký bản Hợp đồng này, xe ô tô
                        nêu trên:
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        &nbsp;
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        + Không có tranh chấp về quyền sở hữu/sử dụng;
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        &nbsp;
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        + Không bị ràng buộc bởi bất kỳ Hợp đồng thuê xe ô tô
                        nào đang có hiệu lực.
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        - Bên B cam đoan: Bên B được cấp giấy phép lái xe hạng
                        A1. có giá trị đến năm 2028.{" "}
                        {" (nếu bên B với tư cách cá nhân)"}
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontWeight: "bold",
                        }}
                      >
                        Điều 2. Thời hạn thuê xe ô tô
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        &nbsp;
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        &nbsp;
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        {" "}
                        Thời hạn thuê là từ ngày{" "}
                        <span style={{ fontWeight: "bold" }}>
                          {formatDateTimeString(timeBooking.dateOfBooking)}
                        </span>{" "}
                        đến ngày{" "}
                        <span style={{ fontWeight: "bold" }}>
                          {formatDateTimeString(timeBooking.dateOfReturn)}
                        </span>{" "}
                        , tổng số ngày thuê là:{" "}
                        {calculateDaysRental(
                          timeBooking.dateOfBooking,
                          timeBooking.dateOfReturn
                        )}{" "}
                        ngày.
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontWeight: "bold",
                        }}
                      >
                        Điều 3. Mục đích thuê
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        &nbsp;&nbsp;
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        {" "}
                        Bên B sử dụng tài sản thuê nêu trên vào mục đích du
                        lịch.
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        &nbsp;
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontWeight: "bold",
                        }}
                      >
                        Điều 4: Giá thuê và phương thức thanh toán
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        1. Giá thuê tài sản nêu trên là:
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        &nbsp;
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontWeight: "bold",
                        }}
                      >
                        {formatVNDMoney(
                          vehicle.aDayRentalPrice *
                            calculateDaysRental(
                              timeBooking.dateOfBooking,
                              timeBooking.dateOfReturn
                            ) +
                            vehicle.depositFee +
                            vehicle.reservationFee +
                            vehicle.vatFee
                        )}{" "}
                        (Bao gồm cả: phí đặt cọc, phí giữ chỗ và phí VAT).
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        2. Phương thức thanh toán:{" "}
                        {userB && userB.paymentMethod} với phương thức hoàn trả
                        xe là {userB && userB.returnCarMethod} và địa chỉ hoàn
                        trả là{" "}
                        {userB && userB.returnCarMethod == "Lấy xe tận nơi"
                          ? userB.addressReturnCar
                          : "12 Mai Thúc Lân, Đà Nẵng"}
                        .
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        3. Việc giao và nhận số tiền nêu trên do hai bên tự thực
                        hiện và chịu trách nhiệm trước pháp luật.
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        Điều 5: Phương thức giao, trả lại tài sản thuê
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        Hết thời hạn thuê nêu trên, Bên B phải giao trả chiếc xe
                        ô tô trên cho Bên A.
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        Điều 6: Nghĩa vụ và quyền của Bên A
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        5. Hai bên
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        &nbsp;
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        đều đã tự đọc lại toàn bộ nội dung của Hợp đồng này, đã
                        hiểu và đồng ý với toàn bộ nội dung ghi trong Hợp đồng,
                        không có điều gì vướng mắc. Bên A, bên B đã tự nguyện ký
                        tên/đóng dấu/điểm chỉ vào Hợp đồng này.
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        Hợp đồng được lập thành 2 bản có giá trị pháp lý như
                        nhau, mỗi bên giữ 1 bản làm bằng chứng.
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        &nbsp;
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontWeight: "bold",
                        }}
                      >
                        &nbsp;
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontWeight: "bold",
                        }}
                      >
                        &nbsp;
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontWeight: "bold",
                        }}
                      >
                        BÊN CHO THUÊ
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontWeight: "bold",
                        }}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontWeight: "bold",
                        }}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontWeight: "bold",
                        }}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontWeight: "bold",
                        }}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontWeight: "bold",
                        }}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontWeight: "bold",
                        }}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontWeight: "bold",
                        }}
                      >
                        BÊN THUÊ
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                        textAlign: "justify",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontStyle: "italic",
                        }}
                      >
                        (ký và ghi rõ họ tên)
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontStyle: "italic",
                        }}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontStyle: "italic",
                        }}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontStyle: "italic",
                        }}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontStyle: "italic",
                        }}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontStyle: "italic",
                        }}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                      </span>
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                          fontStyle: "italic",
                        }}
                      >
                        {" "}
                        (ký và ghi rõ họ tên)
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        &nbsp;
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "13pt",
                        lineHeight: "150%",
                        margin: "6pt 0pt",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Times New Roman"',
                          fontSize: "13pt",
                        }}
                      >
                        &nbsp;
                      </span>
                    </p>
                  </div>
                </div>
                <div className="tempcontent" style={{ display: "none" }} />
                <div className="m-auto p-5">
                  <button>Tiến thành thanh toán</button>
                </div>
              </div>
            </div>
          </div>

          {/* Car Booking End */}
        </>
      )}
    </div>
  );
}

export default Booking;
