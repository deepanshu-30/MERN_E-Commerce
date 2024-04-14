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
export const FETCH_ACTION = 'user/registerUser'
export const userRegister = createAsyncThunk(FETCH_ACTION,
    async (data: {
        firstname: string, lastname: string, email: string, password: string, phoneno: number,
        address: {
            street: string,
            city: string,
            country: string,
            pincode: number
        }
    }, thunkAPI) => {
        try {
            console.log(data)
            const response = await axios({
                method: 'post',
                url: 'http://localhost:5000/api/v1/users/register',
                withCredentials: true,
                data: {
                    firstname: data.firstname,
                    lastname: data.lastname,
                    email: data.email,
                    password: data.password,
                    phoneno: data.phoneno,
                    address: {
                        street: data.address.street,
                        city: data.address.city,
                        country: data.address.country,
                        pincode: data.address.pincode
                    }
                }
            })
            return response.data
        }
        catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue({ error })
        }

    })

const userRegisterSlice = createSlice({
    name: 'userRegister',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userRegister.fulfilled, (state, action) => {
            console.log("hey" + JSON.stringify(action.payload))
            const { firstname, lastname, email, address, phoneno } = action.payload.data;
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

export default userRegisterSlice.reducer;