import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
export const CheckoutPage = () => {
  const API_ROOT_URL = "http://localhost:8000/";
  // You need to define the 'cart' array before using it in the mapping below.

  const [carts, setCart] = useState([]); // Replace this with your actual cart data.

  // Get the cart items from local storage and update the state
  useEffect(() => {
    let cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : {};
    setCart(cart);
  }, []);

  const { products } = useSelector((state) => state.products);
  let filteredProducts = [];
  console.log(products);
  //  loop thorugh cart in local storage and get the key
  for (let key in carts) {
    // filter key in cart with sku in products
    console.log(key);
    const product = products.filter((product) => product.sku === key);
    //  push
    filteredProducts.push(product);
  }

  return (
    <div>
      <section
        className="h-100 h-custom mt-5"
        style={{ backgroundColor: "#eee" }}
      >
        <MDBContainer className="h-100 py-5">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol>
              <MDBCard
                className="shopping-cart"
                style={{ borderRadius: "15px" }}
              >
                <MDBCardBody className="text-black">
                  <MDBRow>
                    <MDBCol lg="7" className="px-5 py-4">
                      <MDBTypography
                        tag="h3"
                        className="mb-5 pt-2 text-center fw-bold text-uppercase"
                      >
                        Your products
                      </MDBTypography>

                      {/* Loop through the cart in local storage */}
                      {/* Filter product have same sku as in cart */}

                      {filteredProducts.map((item, index) => (
                        // let [name, description, price, thumbnail] = item[0];
                        <div
                          className="d-flex align-items-center mb-5"
                          key={index}
                        >
                          <div className="flex-shrink-0">
                            <MDBCardImage
                              src={API_ROOT_URL + item[0].thumbnail}
                              crossOrigin="anonymous"
                              fluid
                              style={{ width: "150px" }}
                              alt="Generic placeholder image"
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <a href="#!" className="float-end text-black">
                              <MDBIcon fas icon="times" />
                            </a>
                            <MDBTypography tag="h5">
                              {item[0].name}{" "}
                              {/* Replace with actual product data */}
                            </MDBTypography>
                            <MDBTypography
                              tag="h6"
                              style={{ color: "#9e9e9e" }}
                            >
                              Price: {item[0].salesPrice}{" "}
                              {/* Replace with actual product data */}
                            </MDBTypography>
                            <div className="d-flex align-items-center">
                              <div className="def-number-input number-input safari_only">
                                <button className="minus">-</button>
                                <input
                                  className="quantity fw-bold text-black"
                                  min={0}
                                  defaultValue={carts[item[0].sku]}
                                  type="number"
                                />
                                <button className="plus">+</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      {/* End loop through the cart in local storage */}

                      <hr
                        className="mb-4"
                        style={{
                          height: "2px",
                          backgroundColor: "#1266f1",
                          opacity: 1,
                        }}
                      />
                      {/* <div className="d-flex justify-content-between px-x">
                        <p className="fw-bold">Discount:</p>
                        <p className="fw-bold">95$</p>
                      </div> */}
                      <div
                        className="d-flex justify-content-between p-2 mb-2"
                        style={{ backgroundColor: "#e1f5fe" }}
                      >
                        <MDBTypography tag="h5" className="fw-bold mb-0">
                          Total:
                        </MDBTypography>
                        <MDBTypography tag="h5" className="fw-bold mb-0">
                          2261$
                        </MDBTypography>
                      </div>
                    </MDBCol>
                    <MDBCol lg="5" className="px-5 py-4">
                      <MDBTypography
                        tag="h3"
                        className="mb-5 pt-2 text-center fw-bold text-uppercase"
                      >
                        Payment
                      </MDBTypography>
                      <form className="mb-5">
                        <MDBInput
                          className="mb-5"
                          label="Card number"
                          type="text"
                          size="lg"
                          defaultValue="1234 5678 9012 3457"
                        />
                        <MDBInput
                          className="mb-5"
                          label="Name on card"
                          type="text"
                          size="lg"
                          defaultValue="John Smith"
                        />
                        <MDBRow>
                          <MDBCol md="6" className="mb-5">
                            <MDBInput
                              className="mb-4"
                              label="Expiration"
                              type="text"
                              size="lg"
                              minLength="7"
                              maxLength="7"
                              defaultValue="01/22"
                              placeholder="MM/YYYY"
                            />
                          </MDBCol>
                          <MDBCol md="6" className="mb-5">
                            <MDBInput
                              className="mb-4"
                              label="Cvv"
                              type="text"
                              size="lg"
                              minLength="3"
                              maxLength="3"
                              placeholder="&#9679;&#9679;&#9679;"
                              defaultValue="&#9679;&#9679;&#9679;"
                            />
                          </MDBCol>
                        </MDBRow>
                        <p className="mb-5">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit <a href="#!"> obcaecati sapiente</a>.
                        </p>
                        <MDBBtn block size="lg">
                          Buy now
                        </MDBBtn>
                        <MDBTypography
                          tag="h5"
                          className="fw-bold mb-5"
                          style={{ position: "absolute", bottom: "0" }}
                        >
                          <a href="#!">
                            <MDBIcon fas icon="angle-left me-2" />
                            Back to shopping
                          </a>
                        </MDBTypography>
                      </form>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};
