import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {

  
    // import useContext

    const {user , loading} = useContext(AuthContext);

    // loading show korbe . load korle jei page e ache sekanei thakbe.
    // onno page e nibe na load korle

    if(loading){

        return <span className="loading loading-spinner text-error"></span>
    }

    if(user){

        return children;
    }

    return  <Navigate to='/login'> </Navigate>
};

export default PrivateRoute;