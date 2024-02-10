// create user slice 


import { createSlice } from '@reduxjs/toolkit';
import createApi from '../../Api/Api';


const initialState = {
    user: null,
    loading: false,
    error: null,
};


const userSlice = createSlice({ 
    name : 'user',
    initialState,
    reducers:{
        setUser:(state ,action) => {
            state.user = action.payload;
        },
        setLoading:(state ,action) => {
            state.loading = action.payload;
        },
        setError:(state ,action) => {
            state.error = action.payload;
        },


    }
})

export const { setUser ,setLoading ,setError } = userSlice.actions;
export const selectUser = (state) => state.user.user; 
export default userSlice.reducer;


export const handleLogin = (password , email ) => async (dispatch) => {

    try {
        dispatch(setLoading(true));
        const api = await createApi();
        const response = await api.post('/sign-in', {
            email,
            password,
        });
        dispatch(setUser(response.data));
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(setLoading(false));
    }

};

export const handleRegister = (password , email , name ) => async (dispatch) => {
    
        try {
            dispatch(setLoading(true));
            const api = await createApi();
            const response = await api.post('/register', {
                email,
                password,
                name
            });
            dispatch(setUser(response.data));
        } catch (error) {
            dispatch(setError(error));
        } finally {
            dispatch(setLoading(false));
        }
    
    }
