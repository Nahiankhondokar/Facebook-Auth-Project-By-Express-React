import { Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { HomeWithRouter } from "./pages/Home/Home";
import { LoginWithRouter } from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import { AccVerifyWithRouter } from "./components/AccVerify/AccVerify";
import RedirectUser from "./middleware/RedirectUser";
import AuthenticateUser from "./middleware/AuthenticateUser";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {


  return (
    <>


      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />

      <Routes>
        <Route path="/" element={ <AuthenticateUser><HomeWithRouter /></AuthenticateUser> } />
        <Route path="/login" element={ <RedirectUser><LoginWithRouter /></RedirectUser> } />
        <Route path="/register" element={ <RedirectUser><Register /></RedirectUser> } />
        <Route path="/reset-password" element={ <ResetPassword /> } />
        <Route path="/user/acc-verify/:token" element={ <AccVerifyWithRouter /> } />
      </Routes>

    </>
  );
}

export default App;
