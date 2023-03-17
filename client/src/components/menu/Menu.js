import { useParams } from "react-router-dom";
import MealList from "./meal-list/MealList";


const Menu = () => {
    const { restaurantId } = useParams();
    return (
        <>
            <MealList mealType="salad" restaurantId={restaurantId} title="Салати" subtitle={<>Свежи <span className="text-primary font-weight-bold">&amp;</span> Вкусни</>} />
            <MealList mealType="main" restaurantId={restaurantId} title="Основни ястия" subtitle={<>Ароматни <span className="text-primary font-weight-bold">&amp;</span> Сочни</>} transparent={true} />
            <MealList mealType="desert" restaurantId={restaurantId} title="Десерти" subtitle={<>Без <span className="text-primary font-weight-bold">|</span> Угризения</>} />
        </>
    )
}
export default Menu;