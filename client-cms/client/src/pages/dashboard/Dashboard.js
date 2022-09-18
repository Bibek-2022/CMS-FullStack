import React from "react";
import { ProductList } from "../../component/cards/ProductList";
import { Hero } from "../../component/dashboard/Hero";

import { Layout } from "../../layout/Layout";

export const Dashboard = () => {
  return (
    <Layout>
      <Hero />
      <ProductList />
    </Layout>
  );
};
