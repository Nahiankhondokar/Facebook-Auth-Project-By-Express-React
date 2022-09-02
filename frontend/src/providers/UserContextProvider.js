import { useReducer } from "react";
import UserContext from "../context/UserContext";
import AuthReducer from "../reducers/AuthReducer";


// initial state
const INITIAL_STATE = {
    isLoggedIn : false,
    user : { }
}


// create user context provier 
const UserContextProvider = ({ children }) => {

    // use reducer
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <UserContext.Provider value={{
            isLoggedIn : state.isLoggedIn,
            user : state.user,
            dispatch
        }}>
            { children }
        </UserContext.Provider>
    )

}


export default UserContextProvider;