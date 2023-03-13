import { useState, useEffect } from "react";

import * as restaurantService from '../../services/restaurantService';
import Restaurant from "../restaurant/Restaurant";

const Home = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        restaurantService.getAll()
            .then(result => {
                setRestaurants(Object.values(result));
            });
    }, []);

    return (
        <>
            <header className="transparent">
                <div className="overlay">
                    <img
                        src="./imgs/navbar-brand.svg"
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