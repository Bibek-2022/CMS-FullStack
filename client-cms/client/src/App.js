import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
