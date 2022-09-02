import { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../context/UserContext";



// auth middleware
const RedirectUser = ({ children }) => {

    // context
    const { isLoggedIn } = useContext(UserContext);
    return isLoggedIn ? <Navigate to="/"/> : children

}

export default RedirectUser;