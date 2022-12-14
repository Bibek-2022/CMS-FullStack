import React, { useEffect } from "react";
import LoginForm from "../../components/LoginForm";
import { MainLayout } from "../../layout/MainLayout";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    user._id && navigate("/dashboard");
  }, [navigate, user]);
  console.log(user);
  return (
    <MainLayout>
      <div className="reg-form d-flex justify-content-center"></div>
      <LoginForm />
    </MainLayout>
  );
};

export default Login;
