import React from "react";
import { ProductList } from "../../component/cards/ProductList";
import { Layout } from "../../layout/Layout";
export const Product = () => {
  return (
    <div>
      <Layout>
        <ProductList />
      </Layout>
    </div>
  );
};
