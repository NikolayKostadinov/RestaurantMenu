import { useState, useEffect } from 'react';
import { useAlertContext } from '../../../contexts/AlertContext';

import { usePager } from '../../../hooks/usePager';
import * as mealService from '../../../services/mealService';
import { goToTop } from '../../common/utils';
import CreateMeal from './CreateMeal';

import MealListItem from './MealListItem';
const PAGE_SIZE = 6;

const MealList = ({
    restaurantId,
    isOwner,
    mealType,
    transparent,
    title,
    subtitle
}) => {
    const [meals, setMeals] = useState([]);
    const [isCreate, setIsCreate] = useState(false);
    const pagerContext = usePager(PAGE_SIZE);
    const alertContext = useAlertContext();

    useEffect(() => {
        alertContext.showLoading();

        const getMealsCount = mealService.getAllByRestaurantIdAndMealTypeCount(restaurantId, mealType);
        const getMealsPage = mealService.getAllByRestaurantIdAndMealTypePaged(restaurantId, mealType, pagerContext.offset, PAGE_SIZE);

        Promise.all([getMealsCount, getMealsPage])
            .then(([count, res]) => {
                pagerContext.setRecordsCount(count);
                setMeals(Object.values(res));
            })
            .catch(err => {
                console.log(err);
                alertContext.showAlert('Неуспешна операция!', 'danger');
            })
            .finally(() => {
                alertContext.hideLoading();
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [restaurantId, mealType, pagerContext.offset]);

    useEffect(() => {
        goToTop();
    }, [])

    const onDelete = (mealId) => {
        alertContext.showLoading();
        mealService.del(mealId)
            .then(() => setMeals(meals.filter(m => m._id !== mealId)))
            .catch(err => {
                console.log(err.message);
                alertContext.showAlert('Неуспешно изтриване!', 'danger')
            })
            .finally(() => alertContext.hideLoading());
    }

    const onUpdate = (meal) => {
        alertContext.showLoading();

        meal.price = Number(meal.price);
        mealService.update(meal)
            .then(changed => setMeals(meals.map(m => m._id !== meal._id ? m : changed)))
            .catch(err => {
                console.log(err.message);
                alertContext.showAlert('Неуспешнa промяна!', 'danger')
            })
            .finally(() => alertContext.hideLoading());
    }

    const onCreate = (meal) => {
        alertContext.showLoading();
        meal.price = Number(meal.price);

        mealService.create(meal)
            .catch(err => {
                console.log(err);
                alertContext.showAlert('Неуспешна операция!', 'danger');
            })
            .finally(
                () => {
                    alertContext.hideLoading();
                    setIsCreate(false);
                }
            );
    }

    let overlayed = '';

    if (transparent) {
        overlayed = "overlay";
    }

    return (
        <>
            <section className={`menu ${transparent ? 'transparent' : 'pattern-style-4 has-overlay'}`}>
                <div className={overlayed}>
                    <div className="container raise-2">
                        <h6 className="section-subtitle text-center">{subtitle}</h6>
                        <h3 className="section-title mb-2 pb-3 text-center">{title}</h3>
                        {isOwner &&
                            <button className="btn btn-primary create-meal" onClick={() => setIsCreate(true)}>
                                <i className="fa-regular fa-file"></i> Създай
                            </button>
                        }
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
                            {meals.map(m => <MealListItem key={m._id} meal={m} onDeleteHandler={onDelete} onUpdateHandler={onUpdate} />)}
                        </div>
                    </div>
                </div>
            </section>
            <CreateMeal isCreate={isCreate} restaurantId={restaurantId} mealType={mealType} onCreateHandler={onCreate} unloadCreate={()=>setIsCreate(false)}/>
        </>
    )
}
export default MealList;