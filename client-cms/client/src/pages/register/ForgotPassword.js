import React from "react";
import { EmailOTP } from "../../component/register/EmailOTP.js";

import { Layout } from "../../layout/Layout";

export const ForgotPassword = () => {
  return (
    <Layout>
      <div className="reg-form d-flex justify-content-center mt-5">
        <EmailOTP />
      </div>
    </Layout>
  );
};
