
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const createUser = createAsyncThunk(
    'doctors/createUser',

    async(formData) => {
        
       const response = await axios.post(`https://application-mock-server.loca.lt/register`, 
       formData,
       {
        headers: {
            'Content-Type' : 'application/json'
           }
       })
       .catch((err) => {console.log(err)})
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
    user: {}
}


const doctorSlice = createSlice({
    name: 'doctors',
    initialState,
    reducers: {

    },
    extraReducers: {
        [createUser.pending]: () => {
            console.log('User Creation Pending');
        },
        [createUser.fulfilled]: (state, {payload}) => {
            console.log('User Created');
            return {...state, user: payload}
        },
        [createUser.rejected]: () => {
                console.log("User Creation Failed");
        },
        [loginUser.pending]: () => {
            console.log('User Login Pending');
        },
        [loginUser.fulfilled]: (state, {payload}) => {
            console.log('User Logged');
            return {...state, user: payload}
        },
        [loginUser.rejected]: () => {
                console.log("User Login Failed");
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



export default doctorSlice.reducer
export const getUser = state => state.doctors.user
export const getDoctors = (state) => state.doctors.doctors
export const getState = (state) => state.doctors