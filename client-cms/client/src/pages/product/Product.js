import React from "react";
import { ProductList } from "../../component/cards/ProductList";

import { Layout } from "../../layout/Layout";
export const Product = () => {
  return (
    <div>
      <Layout>
        <div className="container d-flex justify-content-center">
          <ProductList />
        </div>
      </Layout>
    </div>
  );
};
