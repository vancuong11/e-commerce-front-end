import { createAsyncThunk } from '@reduxjs/toolkit';
import * as apis from '../../apis';

export const getNewProducts = createAsyncThunk('product/newProducts', async (data, { rejectWithValue }) => {
    const response = await apis.getApiProduct({ sort: '-createdAt' });
    if (!response.status === 'OK') {
        return rejectWithValue(response);
    }
    return response.data;
});
