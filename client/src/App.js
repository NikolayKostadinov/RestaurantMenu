import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';

import MainNavigation from './components/main-nav/MainNavigation';

import './App.css';
import Footer from './components/footer/Footer';
import Prefooter from './components/prefooter/Prefooter';
import Menu from './components/menu/Menu';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Authenticated from './components/common/Authenticated';
import Register from './components/register/Register';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <MainNavigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/menu/*" element={<Menu />} />

          <Route element={<Authenticated />}>
            <Route path="/logout" element={<Logout />} />
            <Route path="/profile" element={<Logout />} />
          {/* <Route path="/restaurant/:restaurantId" element={<RestaurantDetails />} /> */}
          </Route>

        </Routes>
        {/* <Prefooter /> */}
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
