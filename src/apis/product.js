import axios from '../axios';

export const getApiProduct = (params) => {
    return axios({
        url: '/product/get-all',
        method: 'GET',
        params: params,
    });
};
