
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const createUser = createAsyncThunk(
    'doctors/createUser',
    async(email, password) => {
       const response = await axios.post(`https://application-mock-server.loca.lt/users`, {
        email: email,
        password: password
       })
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
            console.log('Pending');
        },
        [createUser.fulfilled]: (state, {payload}) => {
            console.log('User Created');
            return {...state, user: payload}
        },
        [createUser.rejected]: () => {
                console.log("fail");
        }
    }
})



export default doctorSlice.reducer
export const getUser = (state) => state.doctors.user