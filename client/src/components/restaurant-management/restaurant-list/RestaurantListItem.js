import { Link } from "react-router-dom";

const RestaurantListItem = ({ restaurant }) => {
    return (
        <div className="restaurant-list-item" >
            <div className="restaurant-img">
                <img src={restaurant.imagesUrls[0]} alt={`${restaurant.title}`} />
            </div>
            <div className="restaurant-content">
                <h5 >{restaurant.title}</h5>
                {/* <h6 className="section-subtitle">Работно време</h6> */}

                <p className="text-primary font-weight-bold">
                    Понеделник - Четвъртък :
                    <span className="font-weight-normal pl-2 text-dark">
                        {restaurant.workindHours.businessDays}
                    </span>
                </p>
                <p className="text-primary font-weight-bold">
                    Петък - Събота :{" "}
                    <span className="font-weight-normal pl-2 text-dark">
                        {restaurant.workindHours.fridayAndSaturday}
                    </span>
                </p>
                <p className="text-primary font-weight-bold">
                    Неделя :{" "}
                    <span className="font-weight-normal pl-2 text-dark">
                        {restaurant.workindHours.sunday}
                    </span>
                </p>

                <ul className="links">
                    <li>
                        <Link to={`/edit/${restaurant._id}`} className="btn btn-primary btn-sm w-md ">
                            <i class="fa-regular fa-pen-to-square"></i> Промяна
                        </Link>
                    </li>
                    <li>
                        <Link to={`/delete/${restaurant._id}`} className="btn btn-outline-primary btn-sm w-md ">
                            <i class="fa-regular fa-trash-can"></i> Изтриване
                        </Link>
                    </li>
                </ul>

            </div>
        </div>

    )
}

export default RestaurantListItem;