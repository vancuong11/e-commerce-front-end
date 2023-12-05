import axios from '../axios';

export const apiGetCategories = () => {
    return axios({
        url: '/productcategory/get-category',
        method: 'GET',
    });
};
