import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import {getUser} from '../redux/doctorSlice'
import Ionicons from 'react-native-vector-icons/Ionicons'


const Profile = () => {

const user = useSelector(getUser)
  return (
    <View style={{marginTop: StatusBar.currentHeight}}>
      <View style={{marginVertical: 10, flexDirection: 'row', alignItems: 'center',  marginHorizontal: 25, justifyContent: 'space-between'}}>
        <TouchableOpacity>
        <Ionicons name='close' size={30} />
        </TouchableOpacity>
        <View>
          <Text style={{fontFamily: 'montserratBold'}}>Profile</Text>
        </View>
      </View>
    <View style={{backgroundColor: 'lightgray', flexDirection: 'row', justifyContent: 'space-between', padding: 10, width: '90%', margin: 20, borderRadius: 15}}>
      <View>
        <Image source={require('../assets/images/user-profile.jpg')}  style={{width: 100, height: 100, borderRadius: 15}}/>
      </View>
      <View style={{alignItems: 'flex-end', justifyContent: 'center', marginLeft: 10}}>
        <Text style={{fontFamily: 'montserratBold'}}>{user.fullName}</Text>
        <Text style={{fontFamily: 'montserratBold', fontSize: 20}}>Medical ID</Text>
      </View>
    </View>
    <View>

    </View>
    </View>
    
  )
}

export default Profile