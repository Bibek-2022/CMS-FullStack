import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { EmailVerification } from "./pages/user/EmailVerification.js";
import { Dashboard } from "./pages/dashboard/Dashboard.js";
import { VerifyEmail } from "./component/register/VerifyEmail";
import { ForgotPassword } from "./pages/register/ForgotPassword";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify" element={<VerifyEmail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin-verification" element={<EmailVerification />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
