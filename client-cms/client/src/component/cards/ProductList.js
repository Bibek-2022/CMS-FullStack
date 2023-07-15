import React, { useEffect, useState } from "react";
import { fetchProductsAction } from "../../pages/product/productAction";
import { useDispatch, useSelector } from "react-redux";
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
const API_ROOT_URL = "http://localhost:8000/";
export const ProductList = () => {
  const dispatch = useDispatch();
  const [displayProducts, setDisplayProduct] = useState([]);

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    !displayProducts.length && dispatch(fetchProductsAction());
    products.length && setDisplayProduct(products);
  }, [products, dispatch, displayProducts]);

  return (
    <div>
      {/* Search bar UI  */}

      <div className="container">
        <h1 className="text-center p-5 Auth-form-title mt-5">
          <bold>P</bold>RODUCTS
        </h1>
        <div className="">
          <div className="wrapper mb-5">
            <div className="search">
              <input
                id="search"
                type="search"
                placeholder="Search your product"
                autocomplete="off"
              />
              <i class="fas fa-search"></i>
            </div>
          </div>

          <div>{/* filter with dropdown */}</div>
        </div>
        <Grid.Container gap={2} justify="center">
          <Grid xs={12}>
            <Pagination color="primary" total={10} />
          </Grid>
          {displayProducts.map((product) => {
            return (
              <>
                <Grid xs={12} sm={4} md={3} l={4} alignItems="center">
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
                        crossorigin="anonymous"
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
                              <i class="fa fa-shopping-cart"></i>
                            </Text>
                            <Text>
                              <i class="fa fa-shopping-cart"></i>
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
            );
          })}
        </Grid.Container>
      </div>
    </div>
  );
};
