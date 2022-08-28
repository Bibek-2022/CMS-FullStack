import React, { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";
// import { emailVerificationAdminUser } from "../../helper/axios-helper";

// import { emailVerificationAdminUser } from "../components/helpers/axiosHelper";
import { Alert, Spinner } from "react-bootstrap";

import { emailVerification } from "../../helpers/axiosHelper";
import { Layout } from "../../layout/Layout";

export const EmailVerification = () => {
  const [isLoading, setIsLoading] = useState({});
  const [response, setResponse] = useState({});
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const email = searchParams.get("e");

    const verificationCode = searchParams.get("c");
    submitVerification({ email, verificationCode });
  }, []);

  const submitVerification = async (obj) => {
    setIsLoading(true);
    const result = await emailVerification(obj);
    setIsLoading(false);
    setResponse(result);
  };

  return (
    <Layout>
      <div className="verification mt-5 pt-5">
        <div className="message">
          <h1>Email Verification</h1>
          {response?.message && (
            <Alert
              variant={response.status === "success" ? "success" : "danger"}
            >
              {""}
              {response?.message}
            </Alert>
          )}

          {isLoading && <Spinner variant="primary" animation="border" />}
        </div>
      </div>
    </Layout>
  );
};
