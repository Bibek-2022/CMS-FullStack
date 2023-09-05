import React, { useEffect, useState } from "react";
import { fetchProductsAction } from "../../pages/product/productAction";
import { useDispatch, useSelector } from "react-redux";
import { Form, Table } from "react-bootstrap";
import {
  Grid,
  Card,
  Col,
  Row,
  Button,
  Text,
  Pagination,
} from "@nextui-org/react";
import "./cards.css";
import { CustomPagination } from "../pagination/Pagination";
const API_ROOT_URL = "http://localhost:8000/";
export const ProductList = () => {
  const dispatch = useDispatch();
  const [displayProducts, setDisplayProduct] = useState([]);
  const { products } = useSelector((state) => state.products);

  const [pagProduct, setPagProduct] = useState([]);
  const [active, setActive] = useState(1);
  //get setUser from redux
  const { user } = useSelector((state) => state.user);
  console.log("user", user);
  useEffect(() => {
    !displayProducts.length && dispatch(fetchProductsAction());
    products.length && setDisplayProduct(products);
  }, [products, dispatch]);

  const handleOnFilterbySearch = (e) => {
    // Get the value of the input.
    const value = e.target.value;

    // Filter the `displayProducts` array based on the value of the input.
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );

    // Set the state of the `displayProducts` array to the filtered array.
    setDisplayProduct(filteredProducts);
  };

  //add to cart
  // use local storage to store the cart items
  const addToCart = (product) => {
    console.log(product);
    let cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : {};
    let id = product.sku.toString();
    cart[id] = cart[id] ? cart[id] : 0;
    let qty = cart[id] + 1;
    cart[id] = qty;
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("cart", cart);
    // clear local storage
    // localStorage.clear();
    // setCart(cart);
  };

  const ordersPerTable = 9;
  const pages = Math.ceil(displayProducts.length / ordersPerTable);
  const orderStartAt = (active - 1) * ordersPerTable;
  const orderEndAt = orderStartAt + ordersPerTable;
  return (
    <div>
      {/* Search bar UI  */}

      <div className="container">
        <h1 className="text-center p-5 Auth-form-title mt-5">PRODUCTS</h1>
        <div className="">
          <div className="wrapper mb-5">
            <div className="search">
              <input
                id="search"
                type="search"
                placeholder="Search your product"
                autoComplete="off"
                onChange={handleOnFilterbySearch}
              />
              <i className="fas fa-search"></i>
            </div>
          </div>

          <div>
            {/* filter with dropdown */}
            {/* <div>
              <Form.Select defaultValue="all" onChange={handleOnFilter}>
                <option value="all"> -- filter --</option>
                <option value="processing">Shirt </option>
                <option value="shipped">Hoodie</option>
                <option value="cancelled">Shoes </option>
              </Form.Select>
            </div> */}
          </div>
        </div>
        <Grid.Container gap={2} justify="center">
          {displayProducts.map((product, i, array) => {
            return (
              i >= orderStartAt &&
              i < orderEndAt && (
                <>
                  <Grid
                    key={product.sku}
                    xs={12}
                    sm={4}
                    md={4}
                    l={4}
                    alignItems="center"
                  >
                    <Card
                      css={{ w: "300px", h: "400px", m: 20 }}
                      variant="bordered"
                    >
                      <Card.Header
                        css={{ position: "absolute", zIndex: 1, top: 5 }}
                      >
                        <Col>
                          <Text
                            size={12}
                            weight="bold"
                            transform="uppercase"
                            color="#ffffffAA"
                          >
                            New
                          </Text>
                          {/* <Text h3 color="black">
                      {product.name}
                    </Text> */}
                        </Col>
                      </Card.Header>
                      <Card.Body css={{ p: 0 }}>
                        <Card.Image
                          src={API_ROOT_URL + product.thumbnail}
                          crossOrigin="anonymous"
                          width="100%"
                          height="100%"
                          objectFit="cover"
                          alt="Card example background"
                        />
                      </Card.Body>
                      <Card.Footer
                        isBlurred
                        css={{
                          position: "absolute",
                          bgBlur: "#ffffff66",
                          borderTop:
                            "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                          bottom: 0,
                          zIndex: 1,
                        }}
                      >
                        <Row>
                          <Col>
                            {/* <Text color="#000" size={12}>
                        Available soon.
                      </Text> */}
                            <Text h5 color="black">
                              {product.name}
                            </Text>
                            {/* <Text color="#000" size={9}>
                            Get notified.
                          </Text> */}
                          </Col>
                          <Col
                            css={{
                              marginTop: "10px",
                            }}
                          >
                            <Row justify="flex-end">
                              <Text
                                css={{
                                  marginRight: "10px",
                                }}
                              >
                                <i
                                  className="fa fa-shopping-cart"
                                  onClick={() => {
                                    if (Object.keys(user).length === 0) {
                                      console.log(
                                        "Please Login to add to cart"
                                      );
                                    } else {
                                      addToCart(product); // Execute addToCart only if user exists
                                    }
                                  }}
                                ></i>
                              </Text>
                              <Text>
                                <i className="fa fa-shopping-cart"></i>
                              </Text>
                            </Row>
                          </Col>
                          {/* <Col>
                          <Row justify="flex-end">
                            <Button flat auto rounded color="secondary">
                              <Text
                                css={{ color: "inherit" }}
                                size={12}
                                weight="bold"
                                transform="uppercase"
                              >
                                Checkout
                              </Text>
                            </Button>
                          </Row>
                        </Col> */}
                        </Row>
                      </Card.Footer>
                    </Card>
                  </Grid>
                </>
              )
            );
          })}
        </Grid.Container>
        {/* <Pagination
          loop
          color="gradient"
          total={10}
          initialPage={1}
          onChange={handleOnChange}
        /> */}
        <div className="d-flex justify-content-center mt-5">
          <CustomPagination
            pages={pages}
            active={active}
            handleOnPaginationClick={setActive}
          />
        </div>
      </div>
    </div>
  );
};
