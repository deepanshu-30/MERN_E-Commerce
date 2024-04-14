import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface IAddress {
    street: string,
    city: string,
    country: string,
    pincode: number
}
export interface IUserLogin {
    firstname: string,
    lastname: string,
    email: string,
    phoneno: number,
    address: IAddress,
    loading: boolean,
    error: string
}

const initialState: IUserLogin = {
    firstname: '',
    lastname: '',
    email: '',
    phoneno: 0,
    address: {
        street: '',
        city: '',
        country: '',
        pincode: 0
    },
    loading: false,
    error: '',
}
export const FETCH_ACTION = 'user/fetchUser'
export const userLogin = createAsyncThunk(FETCH_ACTION,
    async (data: { email: string, password: string }, thunkAPI) => {
        try {
            const response = await axios({
                method: 'post',
                url: 'http://localhost:5000/api/v1/users/login',
                withCredentials: true,
                data: {
                    email: data.email,
                    password: data.password,
                }
            })
            return response.data
        }
        catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue({ error })
        }

    })

const UserLogin = createSlice({
    name: 'userLogin',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userLogin.fulfilled, (state, action) => {
            console.log("hey" + JSON.stringify(action.payload))
            const { firstname, lastname, email, address, phoneno } = action.payload.data.user;
            state.loading = false;
            state.error = '';
            state.firstname = firstname;
            state.lastname = lastname;
            state.email = email;
            state.address = address;
            state.phoneno = phoneno;

        })
    }
})

export default UserLogin.reducer;