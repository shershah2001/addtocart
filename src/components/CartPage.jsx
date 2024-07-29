import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getCartTotal } from "./features/cartSlice";

const Wrapper = styled.div`
  .gradient-custom {
    background: #6a11cb;
    background: -webkit-linear-gradient(
      to right,
      rgba(106, 17, 203, 1),
      rgba(37, 117, 252, 1)
    );
    background: linear-gradient(
      to right,
      rgba(106, 17, 203, 1),
      rgba(37, 117, 252, 1)
    );
  }
`;
const CartPage = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );
  const dispatch = useDispatch();
  dispatch(getCartTotal())
  return (
    <>
      <Wrapper>
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0 text-dark">Cart - 2 items</h5>
                  </div>
                  <div className="card-body">
                    {/* <!-- Single item --> */}
                    {cart.map((data) => {
                       return(
                        <>
                        <div className="row">
                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                          {/* <!-- Image --> */}
                          <div
                            className="bg-image hover-overlay hover-zoom ripple rounded"
                            data-mdb-ripple-color="light"
                          >
                            <img
                              src={data.img}
                              className="w-100"
                              alt="Blue Jeans Jacket"
                            />
                            <a href="#!">
                              <div
                                className="mask"
                                style={{
                                  backgroundColor: "rgba(251, 251, 251, 0.2)",
                                }}
                              ></div>
                            </a>
                          </div>
                          {/* <!-- Image --> */}
                        </div>

                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                          {/* <!-- Data --> */}
                          <p>
                            <strong className="text-dark">
                              {data.title}
                            </strong>
                          </p>
                          {/* <p className="text-dark">{data.price}</p> */}
                          <button
                            type="button"
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-primary btn-sm me-1 mb-2"
                            data-mdb-tooltip-init
                            title="Remove item"
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                          {/* <button
                            type="button"
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-danger btn-sm mb-2"
                            data-mdb-tooltip-init
                            title="Move to the wish list"
                          >
                            <i className="fas fa-heart"></i>
                          </button> */}
                          {/* <!-- Data --> */}
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                          {/* <!-- Quantity --> */}
                          <div
                            className="d-flex mb-4"
                            style={{ maxWidth: "300px" }}
                          >
                            <button
                              data-mdb-button-init
                              data-mdb-ripple-init
                              className="btn btn-primary px-3 me-2"
                              onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                            >
                              <i className="fas fa-minus"></i>
                            </button>

                            <div data-mdb-input-init className="form-outline">
                              <input
                                id="form1"
                                min="0"
                                name="quantity"
                                value={data.quantity}
                                type="number"
                                className="form-control"
                              />
                              <label
                                className="form-label text-dark"
                                for="form1"
                              >
                              Quantity
                              </label>
                            </div>

                            <button
                              data-mdb-button-init
                              data-mdb-ripple-init
                              className="btn btn-primary px-3 ms-2"
                              onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                          {/* <!-- Quantity --> */}

                          {/* <!-- Price --> */}
                          <p className="text-start text-md-center">
                            <strong className="text-dark">{data.price}</strong>
                          </p>
                          {/* <!-- Price --> */}
                        </div>
                      </div>;
                        </>
                       )
                    })}
                    {/* <!-- Single item --> */}

                    <hr className="my-4" />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0 text-dark">Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 text-dark">
                        Total Quantity
                        <span className="text-dark">0</span>
                      </li>
                      {/* <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                Shipping
                <span>Gratis</span>
              </li> */}
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong className="text-dark">Total amount</strong>
                          {/* <strong>
                    <p className="mb-0">(including VAT)</p>
                  </strong> */}
                        </div>
                        <span>
                          <strong className="text-dark">$0</strong>
                        </span>
                      </li>
                    </ul>

                    <button
                      type="button"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Go to checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default CartPage;
