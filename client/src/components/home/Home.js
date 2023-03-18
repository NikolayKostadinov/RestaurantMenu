import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAlertContext } from "../../contexts/AlertContext";

import * as restaurantService from '../../services/restaurantService';
import Restaurant from "../restaurant/Restaurant";

const Home = () => {
    const [restaurants, setRestaurants] = useState([]);
    const alertContext = useAlertContext();
    const navigate = useNavigate();

    useEffect(() => {
    alertContext.showLoading();
        restaurantService.getAll()
            .then(result => {
                setRestaurants(Object.values(result));
            })
            .catch(err => {
                alertContext.showAlert('Неуспешна операция!', 'danger');
                navigate('/', { replace: true })
            })
            .finally(() => {
                alertContext.hideLoading();
            }
            );
    }, []);

    return (
        <>
            <header className="transparent">
                <div className="overlay">
                    <img
                        src="/imgs/navbar-brand.svg"
                        alt="Logo"
                        className="logo"
                    />
                    <h2 className="subtitle">Добре дошли в електронното меню</h2>
                    <h1 className="title">Всичко е Свежо &amp; Вкусно</h1>
                    <div className="bg-primary delimiter"></div>
                </div>
            </header>
            {restaurants.map(restaurant => <Restaurant key={restaurant._id} restaurant={restaurant} />)}
        </>)
}
export default Home;