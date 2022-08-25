import React from "react";
import { RegisterForm } from "../../component/register/RegisterForm";
import { Layout } from "../../layout/Layout";

export const Register = () => {
  return (
    <Layout>
      <div className="reg-form d-flex justify-content-center mt-5">
        <RegisterForm />
      </div>
    </Layout>
  );
};
