import React, { useEffect, useState } from "react";
import { fetchProductsAction } from "../../pages/product/productAction";
import { useDispatch, useSelector } from "react-redux";

export const ProductList = () => {
  const dispatch = useDispatch();
  const [displayProducts, setDisplayProduct] = useState([]);

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    !displayProducts.length && dispatch(fetchProductsAction());
    products.length && setDisplayProduct(products);
  }, [products, dispatch, displayProducts]);
  return <div>ProductList</div>;
};
