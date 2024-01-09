import axios from '../axios';

export const apiRegister = (data) =>
    axios({
        url: '/user/create',
        method: 'POST',
        data: data,
    });
export const apiLogin = (data) =>
    axios({
        url: '/user/login',
        method: 'POST',
        data: data,
    });
export const apiForgotPassword = (data) =>
    axios({
        url: '/user/forgot-password',
        method: 'POST',
        data: data,
    });

export const apiResetPassword = (data) =>
    axios({
        url: '/user/reset-password',
        method: 'PUT',
        data: data,
    });
