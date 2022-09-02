import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { HomeWithRouter } from "./pages/Home/Home";
import { LoginWithRouter } from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { ResetPasswordWithRouter } from "./pages/ResetPassword/ResetPassword";
import { AccVerifyWithRouter } from "./components/AccVerify/AccVerify";
import RedirectUser from "./middleware/RedirectUser";
import AuthenticateUser from "./middleware/AuthenticateUser";
import { SendEmailForPassResetWithRouter } from "./pages/ResetPassword/SendEmailForPassReset";
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
        <Route path="/reset-password" element={ <ResetPasswordWithRouter /> } />
        <Route path="/user/acc-verify/:token" element={ <AccVerifyWithRouter /> } />
        <Route path="/reset-password/confirmed" element={ <SendEmailForPassResetWithRouter /> } />
      </Routes>

    </>
  );
}

export default App;
