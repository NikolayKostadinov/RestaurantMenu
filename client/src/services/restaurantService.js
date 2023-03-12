import * as fetchApi from './utils/fetchApi';

const urls = {
    getAll: '/data/restaurants',
    create: '/data/restaurants',
    update: (restaurantId)=>`/data/users/${restaurantId}`,
}

export const getAll = () => {
    return fetchApi.get(urls.getAll);
}

