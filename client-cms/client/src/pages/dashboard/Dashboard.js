import React from "react";
import { ProductList } from "../../component/cards/ProductList";
import { Hero } from "../../component/dashboard/Hero";

import { Layout } from "../../layout/Layout";
import { Slider } from "../Slider/Slider";

export const Dashboard = () => {
  return (
    <Layout>
      <Hero />
      <Slider />
      <ProductList />
    </Layout>
  );
};
