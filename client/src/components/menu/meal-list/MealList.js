import { useState, useEffect } from 'react';

import { usePager } from '../../../hooks/usePager';
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
    const [meals, setMeals] = useState([]);
    const pagerContext = usePager(PAGE_SIZE);

    useEffect(() => {
        mealService.getAllByRestaurantIdAndMealTypeCount(restaurantId, mealType)
            .then(count => {
                pagerContext.setRecordsCount(count);
            });
        mealService.getAllByRestaurantIdAndMealTypePaged(restaurantId, mealType, pagerContext.offset, PAGE_SIZE)
            .then(res => setMeals(Object.values(res)));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [restaurantId, mealType, pagerContext.offset]);



    let overlayed = '';

    if (transparent) {
        overlayed = "overlay";
    }

    return (
        <section className={`menu ${transparent ? 'transparent' : 'pattern-style-4 has-overlay'}`}>
            <div className={overlayed}>
                <div className="container raise-2">
                    <h6 className="section-subtitle text-center">{subtitle}</h6>
                    <h3 className="section-title mb-2 pb-3 text-center">{title}</h3>
                    <ul className="pagination pagination-lg mb-4 justify-content-center">
                        <li className={`page-item ${pagerContext.prevEnabled ? 'active' : 'disabled'} `}>
                            <button className="page-link page-link-borderless" disabled={!pagerContext.prevEnabled} onClick={pagerContext.prevClickHandler} >
                                <i className="ti-angle-double-left"></i>
                            </button>
                        </li>
                        <li className="page-item d-flex">
                            <h6 className="section-subtitle text-center align-self-center">Страница {pagerContext.page + 1} от {pagerContext.pages}</h6>
                        </li>
                        <li className={`page-item ${pagerContext.nextEnabled ? 'active' : 'disabled'} `} >
                            <button className="page-link page-link-borderless" onClick={pagerContext.nextClickHandler} disabled={!pagerContext.nextEnabled}>
                                <i className="ti-angle-double-right"></i>
                            </button>
                        </li>
                    </ul>
                    <div className='row'>
                        {meals.map(m => <MealListItem key={m._id} meal={m} />)}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MealList;