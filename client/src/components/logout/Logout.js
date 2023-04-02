import{useContext} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

import * as authService from "../../services/authService";

const Logout = () => {
    const navigate = useNavigate();
    const {user, userLogout} = useContext(AuthContext);
    authService.logout(user)
    .then(()=>{
        userLogout();
        navigate('/', {replace:true});
    })
    .catch(()=>{
        navigate('/', {replace:true});
    })

    return null;
}

export default Logout;
