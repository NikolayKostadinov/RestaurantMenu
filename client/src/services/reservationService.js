import * as fetchApi from './utils/fetchApi';

const urls = {
    getAll: '/jsonstore/reservations',
    getAllByRestaurantIdAndDate: (restaurantId, date, offset, pageSize)=>`${urls.getAll}?${createQueryString(restaurantId, date)}&offset=${offset}&pageSize=${pageSize}`,
    countByRestaurantIdAndDate: (restaurantId, date)=>`${urls.getAll}?${createQueryString(restaurantId, date)}&count`,
    create: '/jsonstore/reservations',
    delete: (reservationId) => `/jsonstore/reservations/${reservationId}`,
    update: (reservationId) => `/jsonstore/reservations/${reservationId}`,
}

export const getAll = () => {
    return fetchApi.get(urls.getAll);
}

export const getAllByRestaurantIdAndreservationTypePaged = (restaurantId, reservationType, offset, pageSize) => {
    return fetchApi.get(urls.getAllByRestaurantIdAndreservationType(restaurantId, reservationType, offset, pageSize));
}

export const getAllByRestaurantIdAndreservationTypeCount = (restaurantId, reservationType) => {
       return fetchApi.get(urls.countByRestaurantIdAndreservationType(restaurantId, reservationType));
}

export const create = (reservation) => {
    return fetchApi.post(urls.create, reservation);
}

export const update = (reservation) => {
    return fetchApi.put(urls.update(reservation._id), reservation);
}

export const del = (reservationId) => {
    return fetchApi.del(urls.delete(reservationId));
}

const createQueryString = (restaurantId, reservationType) => {
    const queryString = encodeURIComponent(`restaurantId="${restaurantId}" and reservationType="${reservationType}"`);
    return `where=${queryString}`
}

