import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';

import MainNavigation from './components/main-nav/MainNavigation';

import './App.css';
import Footer from './components/footer/Footer';
import Prefooter from './components/prefooter/Prefooter';
import Menu from './components/menu/Menu';

function App() {
  return (
    <div className="App">
      <MainNavigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/restaurant/:restaurantId" element={<RestaurantDetails />} /> */}
        <Route path="/menu" element={<Menu />} />
      </Routes>
    <Prefooter />
    <Footer/>
    </div>
  );
}

export default App;
