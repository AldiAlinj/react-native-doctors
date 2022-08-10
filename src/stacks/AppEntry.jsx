import React from 'react'
import LoggedStack from './LoggedStack'
import AuthStack from './AuthStack'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { getUser } from '../redux/doctorSlice'



const AppEntry = () => {
    
    const user = useSelector(getUser)
  
  
    return (
        <AuthStack />    
  )
}

export default AppEntry