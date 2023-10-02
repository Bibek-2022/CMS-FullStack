import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import { useSelector } from "react-redux";

export const CheckoutPage = () => {
  const API_ROOT_URL = "http://localhost:8000/";

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
    let cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : {};
    cart[sku] = cart[sku] + 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    calculateTotal();
    setCart(cart);
  };

  const handleOnSubtract = (sku) => () => {
    let cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : {};
    cart[sku] = cart[sku] - 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    calculateTotal();
    setCart(cart);
  };

  const { products } = useSelector((state) => state.products);
  let filteredProducts = [];

  for (let key in carts) {
    const product = products.filter((product) => product.sku === key);
    filteredProducts.push(product);
  }

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

  return (
    <div>
      <section
        className="h-100 h-custom mt-5"
        style={{ backgroundColor: "#eee" }}
      >
        <Container className="h-100 py-5">
          <Row className="justify-content-center align-items-center h-100">
            <Col>
              <Card className="shopping-cart" style={{ borderRadius: "15px" }}>
                <Card.Body className="text-black">
                  <Row>
                    <Col lg="7" className="px-5 py-4">
                      <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">
                        Your products
                      </h3>

                      {filteredProducts.length > 0 &&
                        filteredProducts.map((item, index) => (
                          <div
                            className="d-flex align-items-center mb-5"
                            key={index}
                          >
                            <div className="flex-shrink-0">
                              <Image
                                src={API_ROOT_URL + item[0].thumbnail}
                                fluid
                                style={{ width: "150px" }}
                                alt="Product Image"
                              />
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <a href="#!" className="float-end text-black">
                                X
                              </a>
                              <h5>{item[0].name}</h5>
                              <h6 style={{ color: "#9e9e9e" }}>
                                Price: ${item[0].salesPrice}
                              </h6>
                              <div className="d-flex align-items-center">
                                <div className="def-number-input number-input safari_only">
                                  <Button
                                    variant="outline-primary"
                                    className="minus"
                                    onClick={handleOnSubtract(item[0].sku)}
                                  >
                                    -
                                  </Button>
                                  {carts[item[0].sku]}
                                  <Button
                                    variant="outline-primary"
                                    className="plus"
                                    onClick={handleOnAdd(item[0].sku)}
                                  >
                                    +
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}

                      <hr
                        className="mb-4"
                        style={{
                          height: "2px",
                          backgroundColor: "#1266f1",
                          opacity: 1,
                        }}
                      />

                      <div
                        className="d-flex justify-content-between p-2 mb-2"
                        style={{ backgroundColor: "#e1f5fe" }}
                      >
                        <h5 className="fw-bold mb-0">Total:</h5>
                        <h5 className="fw-bold mb-0">${total}</h5>
                      </div>
                    </Col>

                    <Col lg="5" className="px-5 py-4">
                      <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">
                        Payment
                      </h3>
                      <Form className="mb-5">
                        <Form.Group className="mb-5">
                          <Form.Label>Name on card</Form.Label>
                          <Form.Control
                            type="text"
                            size="lg"
                            defaultValue="John Smith"
                          />
                        </Form.Group>

                        <Form.Group className="mb-5">
                          <Form.Label>Card Number</Form.Label>
                          <Form.Control type="text" size="lg" />
                        </Form.Group>

                        <Row>
                          <Col md="6" className="mb-5">
                            <Form.Group className="mb-4">
                              <Form.Label>Expiration</Form.Label>
                              <Form.Control
                                type="text"
                                size="lg"
                                minLength="7"
                                maxLength="7"
                                placeholder="MM/YYYY"
                              />
                            </Form.Group>
                          </Col>

                          <Col md="6" className="mb-5">
                            <Form.Group className="mb-4">
                              <Form.Label>CVV</Form.Label>
                              <Form.Control
                                type="text"
                                size="lg"
                                minLength="3"
                                maxLength="3"
                              />
                            </Form.Group>
                          </Col>
                        </Row>

                        <p className="mb-5">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit <a href="#!">obcaecati sapiente</a>.
                        </p>

                        <Button variant="primary" block size="lg">
                          Buy now
                        </Button>

                        <h5
                          className="fw-bold mb-5"
                          style={{ position: "absolute", bottom: "0" }}
                        >
                          <a href="#!">Back to shopping</a>
                        </h5>
                      </Form>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
