import { createContext, useContext } from "react";
import useSessionPersister from '../hooks/useSessionPersister';

// Initialize create context to have intelisense where you use it
export const AuthContext = createContext({ user: {}, userLogin:{}, userLogout:{}, isAuthenticated:false});

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    return context;
}

export const AuthProvider = ({
    children
}) => {
    const [user, setUsert] = useSessionPersister({});

    const userLogin = (authData) => {
        if(!authData.fullname){
            authData.fullname = `${authData.firstname} ${authData.lastname}`;
        }
        setUsert(authData);
    }

    const userLogout = () => {
        setUsert({});
    }

    return (
        <AuthContext.Provider value={{ user, userLogin, userLogout, isAuthenticated: !!user.username }}>
            {children}
        </AuthContext.Provider>
    )
}
