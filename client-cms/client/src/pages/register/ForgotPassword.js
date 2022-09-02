import React from "react";
import { ResetPassword } from "../../component/register/ResetPassword";

import { Layout } from "../../layout/Layout";

export const ForgotPassword = () => {
  return (
    <Layout>
      <div className="reg-form d-flex justify-content-center mt-5">
        <ResetPassword />
      </div>
    </Layout>
  );
};
