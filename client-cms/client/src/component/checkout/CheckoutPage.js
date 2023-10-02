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

  const [carts, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : {};
    setCart(cart);
    calculateTotal();
  }, []);

  const handleOnAdd = (sku) => () => {
    // Wrap the handler in another function
    // Get the cart items from local storage and update the state
    let cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : {};
    // increment the quantity
    cart[sku] = cart[sku] + 1;
    // update the local storage
    localStorage.setItem("cart", JSON.stringify(cart));
    // update the state
    calculateTotal();
    setCart(cart);
  };

  const handleOnSubtract = (sku) => () => {
    // Wrap the handler in another function
    // Get the cart items from local storage and update the state
    let cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : {};
    // decrement the quantity
    cart[sku] = cart[sku] - 1;
    // update the local storage
    localStorage.setItem("cart", JSON.stringify(cart));
    // update the state
    calculateTotal();
    setCart(cart);
  };

  const { products } = useSelector((state) => state.products);
  let filteredProducts = [];
  //  loop thorugh cart in local storage and get the key
  for (let key in carts) {
    // filter key in cart with sku in products
    console.log(key);
    const product = products.filter((product) => product.sku === key);
    //  push
    filteredProducts.push(product);
  }

  // calculate total
  const calculateTotal = () => {
    let newTotal = 0;
    for (let key in carts) {
      const prod = filteredProducts.find((product) => product[0].sku === key);
      if (prod) {
        newTotal += parseInt(prod[0].salesPrice) * parseInt(carts[key]);
      }
    }
    setTotal(newTotal);
  };

  console.log(total);

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

                      {filteredProducts.length > 0 &&
                        filteredProducts.map((item, index) => (
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
                                  <button
                                    className="minus"
                                    onClick={handleOnSubtract(item[0].sku)}
                                  >
                                    -
                                  </button>
                                  {carts[item[0].sku]}
                                  <button
                                    className="plus"
                                    onClick={handleOnAdd(item[0].sku)}
                                  >
                                    +
                                  </button>
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
                          ${total}
                        </MDBTypography>
                      </div>
                    </MDBCol>
                    {/* payment */}
                    <MDBCol lg="5" className="px-5 pt-4">
                      <MDBTypography
                        tag="h3"
                        className="mb-5 pt-2 text-center fw-bold text-uppercase"
                      >
                        Payment
                      </MDBTypography>
                      {/* label */}
                      <MDBTypography tag="h6" className="mb-3">
                        Name on card
                      </MDBTypography>
                      <MDBInput outline size="lg" className="mb-4" />

                      <MDBTypography tag="h6" className="mb-3">
                        Card Number
                      </MDBTypography>
                      <MDBInput outline size="lg" className="mb-4" />
                      <MDBRow>
                        <MDBCol md="4" className="mb-3">
                          <MDBTypography tag="h6" className="mb-3">
                            Expiration
                          </MDBTypography>
                          <MDBInput outline size="lg" className="mb-4" />
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                          <MDBTypography tag="h6" className="mb-3">
                            CVV
                          </MDBTypography>
                          <MDBInput outline size="lg" className="mb-4" />
                        </MDBCol>

                        {/* Icons for accepting VISA, MASTERCARD and other */}
                      </MDBRow>
                      <MDBCol md="6" className="mb-3">
                        {/* increase size of fonts */}
                        <MDBTypography tag="h6" className="mb-3">
                          Accepts:
                        </MDBTypography>
                        <MDBTypography tag="h1" className="mb-3 ">
                          {/* import from fontawesome */}
                          <MDBIcon fab icon="cc-visa" className="me-1 fa-lg" />
                          <MDBIcon
                            fab
                            icon="cc-mastercard"
                            className="me-1 fa-lg"
                          />
                          <MDBIcon fab icon="cc-amex" className="me-1 fa-lg" />
                          <MDBIcon
                            fab
                            icon="cc-paypal"
                            className="me-1 fa-lg"
                          />
                          <MDBIcon
                            fab
                            icon="cc-discover"
                            className="me-1 fa-lg"
                          />
                          <MDBIcon fab icon="cc-jcb" className="me-1 fa-lg" />
                        </MDBTypography>
                      </MDBCol>
                      <MDBBtn
                        color="primary"
                        rounded
                        className="btn-block z-depth-1a"
                      >
                        Place order
                      </MDBBtn>
                    </MDBCol>
                    {/* end payment */}
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
