import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

const Authenticated = () => {
    const { isAuthenticated } = useAuthContext();
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }

    return <Outlet/>
}
export default Authenticated;