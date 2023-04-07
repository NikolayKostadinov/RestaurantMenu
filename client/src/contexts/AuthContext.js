import {createContext, useContext} from "react";
import useSessionPersister from '../hooks/useSessionPersister';

// Initialize create context to have intellisense where you use it
export const AuthContext = createContext(
    {
        user: {},
        userLogin: () => {
        },
        userLogout: () => {
        },
        isAuthenticated: false
    });

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider =
    ({
         children
     }) => {
        const [user, setUser] = useSessionPersister({});

        const userLogin = (authData) => {
            if (!authData.fullname) {
                authData.fullname = `${authData.firstname} ${authData.lastname}`;
            }
            setUser(authData);
        }

        const userLogout = () => {
            setUser({});
        }

        return (
            <AuthContext.Provider value={{
                user,
                userLogin,
                userLogout,
                isAuthenticated: !!user.username
            }}>
                {children}
            </AuthContext.Provider>
        )
    }
