import * as fetchApi from './utils/fetchApi';

const urls = {
    getAll: '/data/meals',
    create: '/data/meals',
    update: (mealId)=>`/data/users/${mealId}`,
}

export const getAll = () => {
    return fetchApi.get(urls.getAll);
}

export const getAllByRestaurantIdAndMealType = (restaurantId, mealType) => {
   
    return fetchApi.get(urls.getAll);
}

export const create = (meal) => {
    return fetchApi.post(urls.create, meal);
}

