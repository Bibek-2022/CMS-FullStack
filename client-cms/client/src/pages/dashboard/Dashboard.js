import React from "react";
import { ProductList } from "../../component/cards/ProductList";
import { Hero } from "../../component/dashboard/Hero";

import { Layout } from "../../layout/Layout";
import { MidSection } from "../mid-page/MidSection";

export const Dashboard = () => {
  return (
    <Layout>
      <Hero />
      <MidSection />
    </Layout>
  );
};
