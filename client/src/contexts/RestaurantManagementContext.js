import { createContext, useContext, useState } from "react";

// Initialize create context to have intelisense where you use it
export const ReataurantManagementContext = createContext({
    isCreate: false,
    isEdit: false,
    restaurant: {},
    showCreateRestaurant: {},
    showEditReastaurant: {},
    hideForm: {}
});

export const useRestaurantManagementContext = () => {
    const context = useContext(ReataurantManagementContext);
    return context;
}

export const ReataurantManagementContextProvider = ({
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
        <ReataurantManagementContext.Provider
            value={{
                isCreate,
                isEdit,
                restaurant,
                showCreateRestaurant,
                showEditReastaurant,
                hideForm
            }} >
                { children }
        </ReataurantManagementContext.Provider>
    )
}