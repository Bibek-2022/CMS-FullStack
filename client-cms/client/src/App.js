import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { EmailVerification } from "./pages/user/EmailVerification.js";
import { Dashboard } from "./pages/dashboard/Dashboard.js";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin-verification" element={<EmailVerification />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
