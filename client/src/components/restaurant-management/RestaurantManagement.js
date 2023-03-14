import RestaurantList from "./restaurant-list/RestaurantList";

const RestaurantManagement = () => {

    return (
        <section id="restaurant-management" className="transparent extended">
            <div className="overlay extended start">
                <h1 className="text-center">Управление на ресторантите</h1>
                <RestaurantList />
            </div>
        </section>
    )
}
export default RestaurantManagement;