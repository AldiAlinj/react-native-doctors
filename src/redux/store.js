import { configureStore } from "@reduxjs/toolkit";
import doctorReducer from './doctorSlice'


export default store = configureStore({
    reducer: {
        doctors: doctorReducer
    }
})