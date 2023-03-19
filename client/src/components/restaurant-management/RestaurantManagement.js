import { useState, useEffect } from "react";
import RestaurantList from "./restaurant-list/RestaurantList";
import { useRestaurantManagementContext } from "../../contexts/RestaurantManagementContext";
import RestaurantForm from "./restaurant-form/RestaurantForm";
import { useAlertContext } from "../../contexts/AlertContext";
import * as restaurantService from "../../services/restaurantService";
import { useAuthContext } from "../../contexts/AuthContext";


const RestaurantManagement = () => {

    const [restaurants, setRestaurants] = useState([]);
    const { user } = useAuthContext();
    const alertContext = useAlertContext();


    useEffect(() => {
        alertContext.showLoading();
        restaurantService.getAllByUser(user)
            .then(rest => setRestaurants(rest))
            .catch(() => {
                alertContext.showAlert("Данните за ресторантите немогат да бъдат прочетени!", 'danger')
            })
            .finally(() => alertContext.hideLoading());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    const managementContext = useRestaurantManagementContext();



    const onCreate = () => {
        managementContext.showCreateRestaurant();
    } 
    
    const onEdit = (resteurant) => {
        managementContext.showEditReastaurant(resteurant);
    }

    const createRestaurant = (restaurant) => {
        alertContext.showLoading();
        restaurantService.create(restaurant)
            .then(() => {
                alertContext.showAlert(`Вие създадохте успешно ресторант "${restaurant.title}"!`, 'success', true);
            })
            .catch(err => {
                console.log(err);
                alertContext.showAlert('Неуспешна операция!', 'danger');
            })
            .finally(() => alertContext.hideLoading());
    }

    const editRestaurant = (restaurant) => {
        alertContext.showLoading();
        restaurantService.update(restaurant)
            .then(() => {
                alertContext.showAlert(`Успешно редактирахте ресторант "${restaurant.title}"!`, 'success', true);
            })
            .catch(err => {
                console.log(err);
                alertContext.showAlert('Неуспешна операция!', 'danger');
            })
            .finally(() => alertContext.hideLoading());
    }

    const deleteRestaurant = (restaurantId) => {
        alertContext.showLoading();
        restaurantService.del(restaurantId)
            .then(()=>{setRestaurants(stat=>stat.filter(r=>r._id !== restaurantId))})
            .catch(err => {
                console.log(err);
                alertContext.showAlert('Неуспешна операция!', 'danger');
            })
            .finally(() => alertContext.hideLoading());
    }

    const onSubmit = (restaurant) => {
        const restaurantModel = {
            title: restaurant.title,
            imagesUrls: restaurant.imagesUrls,
            workingHours: {
                businessDays: restaurant["workingHours.businessDays"],
                fridayAndSaturday: restaurant["workingHours.fridayAndSaturday"],
                sunday: restaurant["workingHours.sunday"],
            }
        };

        if (managementContext.isCreate) {
            createRestaurant(restaurantModel);
        } else if (managementContext.isEdit) {
            editRestaurant(restaurantModel);
        }
        else {
            alertContext.setShowAlert('Невалидна операция', 'дангер');
        }
        managementContext.hideForm();
    }

    return (
        <section id="restaurant-management" className="transparent extended">
            <div className="overlay extended">
                <div className="restaurant-list-wrapper">
                    <h1 className="text-center">Управление на ресторантите</h1>
                    <button className="btn btn-primary create-restaurant" onClick={onCreate}>
                        <i className="fa-regular fa-file"></i> Създай
                    </button>
                    <RestaurantList deleteHandler={deleteRestaurant} restaurants={restaurants} />
                </div>
            </div>

            <RestaurantForm onSubmitHandler={onSubmit} />
        </section>
    )
}

export default RestaurantManagement;