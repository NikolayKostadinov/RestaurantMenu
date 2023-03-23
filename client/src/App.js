import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { AlertProvider } from './contexts/AlertContext';
import { RestaurantManagementContextProvider } from './contexts/RestaurantManagementContext';

import MainNavigation from './components/main-nav/MainNavigation';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Authenticated from './components/common/Authenticated';
import Register from './components/register/Register';
import Menu from './components/menu/Menu';
import RestaurantManagement from './components/restaurant-management/RestaurantManagement';
import Reservation from './components/reservation/Reservation';
import Alert from './components/common/alert/Alert';
import Spinner from './components/common/spinner/Spinner';

import './App.css';
import ReservationManagement from './components/reservation/reservation-management/ReservationManagement';

function App() {
  return (
    <AlertProvider>
      <AuthProvider>
        <div className="App">
          <MainNavigation />
          <RestaurantManagementContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/reservation/:restaurantId/:title" element={<Reservation />} />
              <Route path="/menu/:restaurantId" element={<Menu />} />
              <Route element={<Authenticated />}>
                <Route path="/logout" element={<Logout />} />
                <Route path="/profile" element={<Register />} />
                <Route path="/management" element={<RestaurantManagement />} />
                <Route path="/reservations" element={<ReservationManagement />} />
              </Route>
            </Routes>
          </RestaurantManagementContextProvider>
          <Footer />
        </div>
        <Spinner />
        <Alert />
      </AuthProvider>
    </AlertProvider>
  );
}

export default App;
