import React, { useEffect, useState } from "react";
import { fetchProductsAction } from "../../pages/product/productAction";
import { useDispatch, useSelector } from "react-redux";
import { Cards } from "./Cards";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
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
      <h1 className="text-center">Our Products</h1>
      <div className="container">
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </div>
      <div className="d-flex flex-wrap justify-content-center align-items-center gap-5">
        <div className="">
          <Cards />
        </div>
        <div className="">
          <Cards />
        </div>
        <div className="">
          <Cards />
        </div>
        <div className="">
          <Cards />
        </div>
        <div className="">
          <Cards />
        </div>
        <div className="">
          <Cards />
        </div>
      </div>
    </div>
  );
};
