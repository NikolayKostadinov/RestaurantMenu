import * as fetchApi from './utils/fetchApi';

const urls = {
    login: '/users/login',
    logout: '/users/logout',
    register: '/users/register',
}

export const login = (username, password) => {
    return fetchApi.post(urls.login, { username, password})
}

export const logout = (user) => {
    return fetchApi.get(urls.logout, undefined, user);
}

export const register = (userData) => {
    return fetchApi.post(urls.register, userData)
}