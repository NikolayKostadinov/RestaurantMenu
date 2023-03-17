import { useState, useEffect } from 'react';
import * as mealService from '../../../services/mealService';
import MealListItem from './MealListItem';
const PAGE_SIZE = 6;

const MealList = ({
    restaurantId,
    mealType,
    transparent,
    title,
    subtitle
}) => {
    const [page, setPage] = useState(0);
    const [pages, setPages] = useState(1);
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        mealService.getAllByRestaurantIdAndMealTypeCount(restaurantId, mealType)
            .then(count => {
                setPages(Math.ceil(count / PAGE_SIZE))
            });

        const offset = page * PAGE_SIZE;

        mealService.getAllByRestaurantIdAndMealTypePaged(restaurantId, mealType, offset, PAGE_SIZE)
            .then(res => setMeals(Object.values(res)));

    }, [restaurantId, mealType, page]);



    let overlayed = '';

    if (transparent) {
        overlayed = "overlay";
    }

    const prevHandler = () => {
        setPage(p => p - 1);
    }

    const nextHandler = () => {
        setPage(p => p + 1);
    }

    return (
        <section className={`menu ${transparent ? 'transparent' : 'pattern-style-4 has-overlay'}`}>
            <div className={overlayed}>
                <div className="container raise-2">
                    <h6 className="section-subtitle text-center">{subtitle}</h6>
                    <h3 className="section-title mb-2 pb-3 text-center">{title}</h3>
                    <ul className="pagination pagination-lg mb-4 justify-content-center">
                        <li className="page-item active">
                            <button className="page-link page-link-borderless" disabled={page === 0} onClick={prevHandler} >
                                <i class="ti-angle-double-left"></i>
                            </button>
                        </li>
                        <li className="page-item d-flex">
                        <h6 className="section-subtitle text-center align-self-center">Страница {page + 1} от {pages}</h6>
                        </li>
                        <li className="page-item active" >
                            <button className="page-link page-link-borderless" onClick={nextHandler} disabled={page + 1 === pages}>
                                <i class="ti-angle-double-right"></i>
                            </button>
                        </li>
                    </ul>
                    <div className='row'>
                        {meals.map(m => <MealListItem key={m._id} meal={m} />)}
                    </div>
                </div>
            </div>

        </section>)
}
export default MealList;