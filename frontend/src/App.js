import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import './App.scss';

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/reset-password" element={ <ResetPassword /> } />
      </Routes>

    </>
  );
}

export default App;
