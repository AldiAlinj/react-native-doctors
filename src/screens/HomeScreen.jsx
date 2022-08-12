import { View, Text, Button, SafeAreaView, StatusBar, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDoctors, getDoctors, getLoading, logoutUser } from '../redux/doctorSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const doctors = useSelector(getDoctors)
  const loading = useSelector(getLoading)

 useEffect(() => {
  dispatch(fetchDoctors())
}, [])
 


  return (
      <View style={{flex: 1,marginTop: StatusBar.currentHeight}}>
        <View style={{alignItems: 'center', paddingTop: 20}}>
          <Text style={{fontSize: 24, fontWeight: '700'}}>Doctors</Text>
        </View>
        <View>
         {loading ? (
          <View>
            <Text>Loading...</Text>
          </View>
         )
          :
          (
            // <FlatList data={doctors} renderItem={({doctor}) => (
            //   <Text>{doctor.id}</Text>
            // )}  />
            <Text>Hello</Text>
          )
        
        }
        </View>
      </View>
  )
}

export default HomeScreen