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
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-1'></div>
                        <div className="col-md-1 ">
                            <button className="prev float-left"  disabled={page === 0} onClick={prevHandler}> &lt; </button>
                        </div>
                        <div className='col-md-1'></div>
                        <div className="col-6 raise-2">
                            <h6 className="section-subtitle text-center">{subtitle}</h6>
                            <h3 className="section-title mb-2 pb-3 text-center">{title}</h3>
                            <h6 className="section-subtitle text-center mb-4">Страница {page+1} от {pages}</h6>

                            <div className='row'>
                                {meals.map(m => <MealListItem key={m._id} meal={m} />)}
                            </div>
                        </div>
                        <div className='col-md-1'></div>
                        <div className="col-md-1">
                            <button className="next float-right" onClick={nextHandler} disabled={page + 1 === pages}> &gt; </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}
export default MealList;