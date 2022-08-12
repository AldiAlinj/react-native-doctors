
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const createUser = createAsyncThunk(
    'doctors/createUser',

    async(formData) => {
        console.log(formData);
       const response = await axios.post(`https://application-mock-server.loca.lt/register`, 
       formData,
       {
        headers: {
            'Content-Type' : 'application/json'
           }
       })
       
       return response.data
    }
)


export const loginUser = createAsyncThunk(
'doctors/loginUser',
    async(data) => {
        const response = await axios.post(`https://application-mock-server.loca.lt/login`,
        data,
        {headers:{
            'Content-Type' : 'application/json'

        }}).catch((err) => {console.log(err)})
            return response.data
    }
)


export const fetchDoctors = createAsyncThunk(
    'doctors/fetchDoctors',
    async() => {
        const response = await axios.get(`https://application-mock-server.loca.lt`)
        return response.data
    }
)




const initialState = {
    doctors: {},
    user: {},
    token: null,
    loading: false,
    errors: null
}


const doctorSlice = createSlice({
    name: 'doctors',
    initialState,
    reducers: {

    },
    extraReducers: {
        [createUser.pending]: (state) => {
            console.log('User Creation Pending');
            return {...state, loading: true}
        },
        [createUser.fulfilled]: (state, {payload}) => {
            console.log('User Created');
            return {...state, user: payload.user, token: payload.accessToken, loading: false}
        },
        [createUser.rejected]: (state) => {
                console.log("User Creation Failed");
                return {...state, loading: false}
        },
        [loginUser.pending]: (state) => {
            console.log('User Login Pending');
            return {...state, loading: true}
        },
        [loginUser.fulfilled]: (state, {payload}) => {
            console.log('User Logged');
            return {...state, user: payload.user, token: payload.accessToken, loading: false}
        },
        [loginUser.rejected]: (state) => {
                console.log("User Login Failed");
                return {...state, loading: false, errors: 'Invalid username or password!'}
        },
        [fetchDoctors.pending]: () => {
            console.log('Doctor list pending');
        },
        [fetchDoctors.fulfilled]: (state, {payload}) => {
            console.log('Doctors fetched');
            return {...state, doctors: payload}
        },
        [fetchDoctors.rejected]: () => {
                console.log("Doctors fetching failed");
        },

    }
})



export const getUser = (state) => state.doctors.user
export const getDoctors = (state) => state.doctors.doctors
export const getToken = (state) => state.doctors.token
export const getLoading = (state) => state.doctors.loading
export const getErrors = (state) => state.doctors.errors
export default doctorSlice.reducer