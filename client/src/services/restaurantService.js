import * as fetchApi from './utils/fetchApi';

const urls = {
    getAll: '/data/restaurants',
    getById: (id) => `/data/restaurants/${id}`,
    getAllByQuery: (query) => `/data/restaurants?${query}`,
    create: '/data/restaurants',
    update: (restaurantId) => `/data/users/${restaurantId}`,
}

export const getAll = () => {
    return fetchApi.get(urls.getAll);
}

export const getById = (id) => {
    return fetchApi.get(urls.getById(id));
}

export const getAllByUser = (user) => {
    const parameter = encodeURIComponent(`_ownerId="${user._id}"`);
    return fetchApi.get(urls.getAllByQuery(`where=${parameter}`));
}



