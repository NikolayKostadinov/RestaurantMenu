import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

const Authenticated = () => {
    const { isAuthenticated } = useAuthContext();
    console.log(`isAuthenticated: ${isAuthenticated}`);
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }

    return <Outlet/>
}
export default Authenticated;