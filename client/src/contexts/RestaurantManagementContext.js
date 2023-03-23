import {createContext, useContext, useState} from "react";

// Initialize create context to have intelisense where you use it
export const RestaurantManagementContext = createContext({
    isCreate: false,
    isEdit: false,
    restaurant: {},
    showCreateRestaurant: {},
    showEditReastaurant: {},
    hideForm: {}
});

export const useRestaurantManagementContext = () => useContext(RestaurantManagementContext);

export const RestaurantManagementContextProvider = ({
    children
}) => {
    const [isCreate, setIsCreate] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [restaurant, setRestaurant] = useState({});

    const showCreateRestaurant = () => {
        setIsCreate(true);
    }

    const showEditReastaurant = (restaurant) => {
        setRestaurant(restaurant);
        setIsEdit(true);
    }

    const hideForm = () => {
        setRestaurant({});
        setIsCreate(false);
        setIsEdit(false);
    }

    return (
        <RestaurantManagementContext.Provider
            value={{
                isCreate,
                isEdit,
                restaurant,
                showCreateRestaurant,
                showEditReastaurant,
                hideForm
            }} >
                { children }
        </RestaurantManagementContext.Provider>
    )
}
