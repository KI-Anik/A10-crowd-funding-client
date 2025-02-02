/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../components/provider/AuthProvider";
import Loading from "../components/Loading";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({children}) => {
    const {user, loading}= useContext(AuthContext)
    if(loading){
        return <Loading></Loading>
    }
    if(user && user?.email){
        return children
    }
    return (
       <Navigate to={'/auth/login'}></Navigate>
    );
};

export default PrivateRouter;