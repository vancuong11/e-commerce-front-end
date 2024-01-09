import { createAsyncThunk } from '@reduxjs/toolkit';
import * as apis from '../../apis';

export const getCurrent = createAsyncThunk('user/current', async (data, { rejectWithValue }) => {
    const response = await apis.apiGetCurrentUser();
    if (!response.status === 'OK') {
        return rejectWithValue(response);
    }
    return response.data;
});
