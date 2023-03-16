import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import useMeals from "./useMeals";
import * as mealService from "../../services/mealService";


const Loader = () => {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState({});
    const { meals } = useMeals();

    useEffect(() => {
        meals.forEach(m => {
            mealService.create(m)
                .then(meal => setResult(stat => ({...stat, [meal._id]: meal})))
});
setLoading(false);
    }, []);
console.log("The result is:");
console.log(result);

if (loading) {
    return (<h1>Loading...</h1>);
}

return (
    <Navigate to="/" />
)
}
export default Loader;

