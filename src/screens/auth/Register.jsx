import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createUser, getErrors, getLoading } from '../../redux/doctorSlice';
import InputField from '../../components/InputField';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../../components/CustomButton';
import DateTimePicker from '@react-native-community/datetimepicker'


const Register = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const loading = useSelector(getLoading)
    const [confirmPassword, setConfirmPassword] = useState('')
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [dobLabel, setDobLabel] = useState('Date of Birth');
    const error = useSelector(getErrors)

    const [formData, setFormData] = useState({
      email: '',
      password: '',
      fullName: '',
      weight: '',
      height: '',
      bloodType: '',
      birthDate: '',

    })
    

    const registerUser = async() => {
      if(
      formData.email === '' || 
      formData.password === '' || 
      formData.fullName === '' || 
      formData.weight === '' ||
      formData.height === '' ||
      formData.bloodType === '' ||
      formData.birthDate === ''){
        alert('Please fill out all forms!')
      }else if(formData.password !==  confirmPassword){
        alert('Passwords do not match!')
      }else{
        dispatch(createUser(formData))
      }
     
    }


    const onDateSelected = (e, value) => {
      setOpen(false)
      setDate(value.toString())
      setDobLabel(value.toString())
      setFormData({...formData, birthDate: value.toString()})
    }

    
    return (
    
      <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 25}}>
          <View style={{alignItems: 'center'}}>
         <Image
         style={styles.image}
         
        source={require("../../../assets/favicon.png")}
       />

      </View>
        <Text
          style={{
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Register
        </Text> 
        <InputField
        onChange={(name) => setFormData({...formData, fullName: name})}
          label={'Full Name'}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
        />

        <InputField
        onChange={(email) => setFormData({...formData, email: email.toLowerCase()})}
          label={'Email ID'}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          keyboardType="email-address"
        />

        <InputField
          onChange={(password) => setFormData({...formData, password: password})}
          label={'Password'}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          inputType="password"
        />

        <InputField
        onChange={(confirmPassword) => setConfirmPassword(confirmPassword)}
          label={'Confirm Password'}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          inputType="password"
        />
        <InputField
        onChange={(height) => setFormData({...formData, height: height})}
          label={'Height (in CM)'}
          icon={
            <Ionicons
              name="md-swap-vertical-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          inputType='numeric'
/>
        <InputField
        onChange={(weight) => setFormData({...formData, weight: weight})}
          label={'Weight (in KG)'}
          icon={
            <Ionicons
              name="md-timer-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          inputType='numeric'
/>
        <InputField
        onChange={(bloodType) => setFormData({...formData, bloodType: bloodType})}
          label={'Blood Type'}
          icon={
            <Ionicons
              name="analytics-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
/>

        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 30,
          }}>
          <Ionicons
            name="calendar-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          <TouchableOpacity onPress={() => setOpen(true)}>
            <Text style={{color: '#666', marginLeft: 5, marginTop: 5}}>
              {dobLabel}
            </Text>
          </TouchableOpacity>
        </View>
        {
          open &&
          <DateTimePicker
          value={date}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onDateSelected}
          // style={styleSheet.datePicker}
        />
        }
         {error !== null ? (

          <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text style={{color: 'red', fontWeight: '700'}}>{error}</Text>

          </View>
      )
     : (
      null
     )}
        
        <CustomButton label={'Register'} onPress={registerUser} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}> Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
      );
    }
     
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
     
      image: {
        marginBottom: 40,
      },
     
      inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
     
        alignItems: "center",
      },
     
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
     
      forgot_button: {
        height: 30,
        marginBottom: 30,
      },
     
      loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FF1493",
      },
    });

export default Register