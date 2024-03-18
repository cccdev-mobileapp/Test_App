import {Alert, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile() {
  const {setLogin, setToken} = useContext(AppContext);

  const onClick = async () => {
    try {
      await AsyncStorage.clear();
      setLogin(false);
      setToken(null);
    } catch (error) {
      Alert.alert('Log Out Error!', error.message);
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={onClick}
        style={{padding: 12, backgroundColor: '#68796880', borderRadius: 10}}>
        <Text style={{color: 'white', fontSize: 16}}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}
