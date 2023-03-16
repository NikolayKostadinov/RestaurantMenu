import { useParams } from "react-router-dom";
import MealList from "./meal-list/MealList";


const Menu = () => {
    const{restaurantId} = useParams();
    return(
        <>
            <MealList mealType="salad" restaurantId={restaurantId}/>
            <MealList mealType="main" restaurantId={restaurantId} transparent={true}/>
            <MealList mealType="desert" restaurantId={restaurantId}/>
        </>
    )
}
export default Menu;