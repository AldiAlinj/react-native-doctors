import {
  View,
  Text,
  Button,
  SafeAreaView,
  StatusBar,
  FlatList,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDoctors,
  getDoctors,
  getLoading,
  logoutUser,
} from "../redux/doctorSlice";
import DoctorCard from "../components/DoctorCard";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const doctors = useSelector(getDoctors);
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, []);


  const renderStars = (stars) => {
    let starsAmount = [];
    for(let i = 0; i <= stars; i++){
      starsAmount.push(<Ionicons name="star" color='yellow' height={10} width={10}  />)
    }
    return starsAmount

  }

  return (
    <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <View style={{ alignItems: "center", paddingTop: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "700" }}>Doctors</Text>
      </View>
      <View>
        {loading ? (
          <View style={{ marginTop: 150, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontFamily: 'montserratBold', fontSize: 20}}>Loading...</Text>
          </View>
        ) : (
         <View style={{marginBottom: 50}}>
           <FlatList
            data={doctors}
            renderItem={({ item }) => (
              <DoctorCard item={item} key={item.id} />
            )}
          />
         </View>
          // <Text>Hello</Text>
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
