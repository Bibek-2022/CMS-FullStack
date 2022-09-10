import React from "react";
import { Hero } from "../../component/dashboard/Hero";
import { Card } from "../../component/cards/Card";
import { Layout } from "../../layout/Layout";

export const Dashboard = () => {
  return (
    <Layout>
      <Hero />
      <Card />
    </Layout>
  );
};
