import React from "react";
import { LoginForm } from "../../component/login/LoginForm";
import { Layout } from "../../layout/Layout";

export const Login = () => {
  return (
    <Layout>
      <div className="reg-form d-flex justify-content-center">
        <LoginForm />
      </div>
    </Layout>
  );
};
