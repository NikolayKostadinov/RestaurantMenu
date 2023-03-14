import { useState, useEffect } from "react";
import { useAlertContext } from "../../../contexts/AlertContext";
import { useAuthContext } from "../../../contexts/AuthContext";

import * as restaurantService from "../../../services/restaurantService"
import RestaurantListItem from "./RestaurantListItem";

import './RestaurantList.css';

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState([]);
    const { user } = useAuthContext();
    const alertContext = useAlertContext();

    useEffect(() => {
        restaurantService.getAllByUser(user)
        .then(rest => setRestaurants(rest))
        .catch(()=>{
            alertContext.showAlert("Данните за ресторантите немогат да бъдат прочетени!", 'danger')
        })
    }, [user]);
    return (
        <ul className="restaurant-list">
            {restaurants.map(r=><RestaurantListItem key={r._id} restaurant={r}/>)}
        </ul>
    )
}
export default RestaurantList;