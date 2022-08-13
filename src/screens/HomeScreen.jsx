import {
  View,
  Text,
  StatusBar,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDoctors,
  getDoctors,
  getLoading,
} from "../redux/doctorSlice";
import DoctorCard from "../components/DoctorCard";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const doctors = useSelector(getDoctors);
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, []);


  

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
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
