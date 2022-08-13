import { View, Text, StatusBar, FlatList, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctors, getDoctors, getLoading } from "../redux/doctorSlice";
import DoctorCard from "../components/DoctorCard";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const doctors = useSelector(getDoctors);
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Doctors</Text>
      </View>
      <View>
        {loading ? (
          <View style={styles.loadingContainer}>
            <Text style={styles.loading}>Loading...</Text>
          </View>
        ) : (
          <View style={{ marginBottom: 50 }}>
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
const styles = StyleSheet.create({
  container: { flex: 1, marginTop: StatusBar.currentHeight },
  titleContainer: { alignItems: "center", paddingTop: 20 },
  title: { fontSize: 24, fontWeight: "700" },
  loadingContainer: {
    marginTop: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  loading: { fontFamily: "montserratBold", fontSize: 20 },
});
