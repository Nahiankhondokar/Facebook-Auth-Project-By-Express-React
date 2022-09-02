import { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../context/UserContext";



// auth middleware
const AuthenticateUser = ({ children }) => {

    // context
    const { isLoggedIn } = useContext(UserContext);
    return isLoggedIn ? children : <Navigate to="/login" />

}

export default AuthenticateUser;