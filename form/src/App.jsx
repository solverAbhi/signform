import "./App.css";
import { SignupFormDemo } from "./components/SignupFormDemo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginForm } from "./components/LoginForm";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignupFormDemo />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
