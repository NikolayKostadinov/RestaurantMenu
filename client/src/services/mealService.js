import * as fetchApi from './utils/fetchApi';

const urls = {
    getAll: '/data/meals',
    getAllByRestaurantIdAndMealType: (restaurantId, mealType, offset, pageSize)=>`${urls.getAll}?${createQueryString(restaurantId, mealType)}&offset=${offset}&pageSize=${pageSize}`,
    countByRestaurantIdAndMealType: (restaurantId, mealType)=>`${urls.getAll}?${createQueryString(restaurantId, mealType)}&count`,
    create: '/data/meals',
    update: (mealId) => `/data/users/${mealId}`,
}

export const getAll = () => {
    return fetchApi.get(urls.getAll);
}

export const getAllByRestaurantIdAndMealTypePaged = (restaurantId, mealType, offset, pageSize) => {
    return fetchApi.get(urls.getAllByRestaurantIdAndMealType(restaurantId, mealType, offset, pageSize));
}

export const getAllByRestaurantIdAndMealTypeCount = (restaurantId, mealType) => {
       return fetchApi.get(urls.countByRestaurantIdAndMealType(restaurantId, mealType));
}

export const create = (meal) => {
    return fetchApi.post(urls.create, meal);
}

const createQueryString = (restaurantId, mealType) => {
    const queryString = encodeURIComponent(`restaurantId="${restaurantId}" and mealType="${mealType}"`);
    return `where=${queryString}`
}

