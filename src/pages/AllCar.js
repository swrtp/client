import React, { useEffect, useState } from "react";
import { getVehicles } from "../service/vehicleService";
import styles from "../Assets/css/Pagination.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatVNDMoney } from "../service/extensionService";
import ReactPaginate from "react-paginate";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { imageDb } from "../firebaseConfig";

function AllCar() {
  const [vehicles, setVehicles] = useState(null);
  const [imageVehicles, setImageVehicles] = useState([]);
  const [paging, setPaging] = useState(null);
  const [filter, setFilter] = useState({
    OrderBy: "",
    FromDate: "",
    ToDate: "",
    SearchText: "",
    Page: 1,
  });

  useEffect(() => {
    getImageVehiclesFromStorage();
    getVehicles(filter).then((response) => {
      setVehicles(response.items);
      // console.log(response);
      setPaging(response);
    });
  }, [filter]);
  const getImageVehiclesFromStorage = () => {
    try {
      listAll(ref(imageDb, "vehicles")).then((imgs) => {
        imgs.items.forEach((img) => {
          getDownloadURL(img).then((url) => {
            setImageVehicles((pre) => [...pre, url]);
          });
        });
      });
    } catch (e) {
      console.log(e);
    }
  };
  console.log(imageVehicles);
  const handlePageClick = async (page) => {
    setFilter({ ...filter, Page: ++page.selected });
  };
  return (
    <div>
      <>
        {/* Page Header Start */}
        <div className="container-fluid page-header">
          <h1 className="display-3 text-uppercase text-white mb-3">
            Danh sách xe
          </h1>
          <div className="d-inline-flex text-white">
            <h6 className="text-uppercase m-0">
              <Link className="text-white" to="/">
                Trang chủ
              </Link>
            </h6>
            <h6 className="text-body m-0 px-3">/</h6>
            <h6 className="text-uppercase text-body m-0">Danh sách xe</h6>
          </div>
        </div>
        {/* Page Header Start */}
        {/* Rent A Car Start */}
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
            <h1 className="display-4 text-uppercase text-center mb-5">
              Danh sách xe có sẵn
            </h1>
            <div className="row">
              {vehicles &&
                vehicles.map((vehicle) => {
                  return (
                    <div className="col-lg-4 col-md-6 mb-2" key={vehicle.id}>
                      <div className="rent-item mb-4">
                        <img
                          className="img-fluid mb-4"
                          style={{ height: 130 }}
                          src={
                            imageVehicles.filter((img) =>
                              img.includes(vehicle.id)
                            )[0]
                          }
                          alt="Ảnh xe"
                        />

                        <h4 className="text-uppercase mb-4">
                          {vehicle.vehicleName}
                        </h4>
                        <div className="d-flex justify-content-center mb-4">
                          <div className="px-1">
                            <i className="fa fa-car text-primary mr-1" />
                            <span>{vehicle.numberOfSeats + " chỗ"}</span>
                          </div>
                          <div className="px-1 border-left border-right">
                            <i className="fa fa-cogs text-primary mr-1" />
                            <span>{vehicle.transmissionSystem}</span>
                          </div>
                          <div className="px-1">
                            <i className="fa fa-road text-primary mr-1" />
                            <span>{vehicle.consumption + "L/100Km"}</span>
                          </div>
                        </div>
                        <Link
                          className="btn btn-primary px-3"
                          to={"/cars/" + vehicle.id}
                        >
                          {formatVNDMoney(vehicle.aDayRentalPrice)}
                        </Link>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        {paging && (
          <div
            className={
              "pagination d-flex justify-content-center align-items-center"
            }
          >
            <ReactPaginate
              breakLabel="..."
              nextLabel=">>"
              onPageChange={handlePageClick}
              pageCount={paging.totalPages}
              previousLabel="<< "
              containerClassName={styles.pagination}
              pageLinkClassName={styles.pageNum}
              nextLinkClassName={styles.pageNum}
              previousLinkClassName={styles.pageNum}
              activeClassName={styles.active}
              disabledClassName="d-none"
            />
          </div>
        )}
        {/* Rent A Car End */}
        {/* Banner Start */}
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="row mx-0">
              <div className="col-lg-6 px-0">
                <div
                  className="px-5 bg-secondary d-flex align-items-center justify-content-between"
                  style={{ height: 350 }}
                >
                  <img
                    className="img-fluid flex-shrink-0 ml-n5 w-50 mr-4"
                    src={`${process.env.PUBLIC_URL}/assets/img/banner-left.png`}
                    alt=""
                  />

                  <div className="text-right">
                    <h3 className="text-uppercase text-light mb-3">
                      Want to be driver?
                    </h3>
                    <p className="mb-4">
                      Lorem justo sit sit ipsum eos lorem kasd, kasd labore
                    </p>
                    <a className="btn btn-primary py-2 px-4" href="">
                      Start Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 px-0">
                <div
                  className="px-5 bg-dark d-flex align-items-center justify-content-between"
                  style={{ height: 350 }}
                >
                  <div className="text-left">
                    <h3 className="text-uppercase text-light mb-3">
                      Looking for a car?
                    </h3>
                    <p className="mb-4">
                      Lorem justo sit sit ipsum eos lorem kasd, kasd labore
                    </p>
                    <a className="btn btn-primary py-2 px-4" href="">
                      Start Now
                    </a>
                  </div>
                  <img
                    className="img-fluid flex-shrink-0 ml-n5 w-50 mr-4"
                    src={`${process.env.PUBLIC_URL}/assets/img/banner-right.png`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Banner End */}
      </>
    </div>
  );
}

export default AllCar;
