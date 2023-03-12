import * as fetchApi from './utils/fetchApi';

const urls = {
    login: '/users/login',
    logout: '/users/logout',
    register: '/users/register',
}

export const login = (username, password) => {
    return fetchApi.post('/users/login', { username, password})
}

export const logout = (user) => {
    return fetchApi.get('/users/logout', undefined, user);
}

export const register = (userData) => {
    return fetchApi.post('/users/register', userData)
}