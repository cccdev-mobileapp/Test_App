import {
  Alert,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import AppContext from '../context/AppContext';

export default function Login() {
  const [email, SetEmail] = useState('testpracticaluser001@mailinator.com');
  const [password, SetPassword] = useState('Test@123');
  const {setLogin, setToken} = useContext(AppContext);

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://3.7.81.243/projects/plie-api/public/api/login',
    data: {email: email, password: password},
  };

  const handleClick = () => {
    if (email != '' && password != '') {
      axios
        .request(config)
        .then(async response => {
          if (response.data?.success == true) {
            try {
              await AsyncStorage.setItem('isLogin', 'true');
              await AsyncStorage.setItem(
                'Token',
                response?.data?.data?.token || null,
              );
              setLogin(true);
              setToken(response?.data?.data?.token || null);
            } catch (error) {
              Alert.alert('async save error', error.message);
            }
          } else {
            Alert.alert('Login Error!', response.data?.message);
          }
        })
        .catch(error => {
          Alert.alert('Login Error!', error.message);
        });
    } else {
      Alert.alert('All Fields Are Require');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 0.6, backgroundColor: '#edefed'}}>
        <View
          style={{
            marginTop: '10%',
            alignItems: 'center',
          }}>
          <Text style={{color: 'black', fontSize: 50}}>Plie</Text>
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'center',
            flex: 1,
            paddingBottom: 30,
          }}>
          <Image
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            style={{width: 80, height: 80}}
          />
        </View>
      </View>
      <ScrollView style={{flex: 1}}>
        <View style={{paddingTop: 30, paddingHorizontal: '18%'}}>
          <Text style={{color: 'black'}}>Email</Text>
          <TextInput
            keyboardType="email-address"
            textContentType="emailAddress"
            placeholder="email@email.com"
            value={email}
            onChangeText={e => {
              SetEmail(e);
            }}
            style={{
              height: 40,
              borderColor: 'gray',
              elevation: 2,
              paddingLeft: 15,
            }}
          />
        </View>
        <View style={{paddingTop: 15, paddingHorizontal: '18%'}}>
          <Text style={{color: 'black'}}>Password</Text>
          <TextInput
            secureTextEntry
            textContentType="password"
            keyboardType="default"
            placeholder="Password"
            value={password}
            onChangeText={SetPassword}
            style={{
              height: 40,
              borderColor: 'gray',
              elevation: 2,
              paddingLeft: 15,
              color: 'gray',
            }}
          />
          <Text
            style={{textAlign: 'right'}}
            onPress={() => console.log('Forgot Press')}>
            Frogot Password?
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: '18%',
            marginTop: 40,
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#0bc8a2ba',
              paddingHorizontal: 22,
              paddingVertical: 5,
              borderRadius: 3,
            }}
            onPress={handleClick}>
            <Text style={{color: 'white'}}>Sign In</Text>
          </TouchableOpacity>
          <Text style={{marginTop: 10, color: 'black'}}>
            Not a member?
            <Text
              style={{textDecorationLine: 'underline', color: 'black'}}
              onPress={() => console.log('Sign Up Press')}>
              {' '}
              Sign Up Here
            </Text>
          </Text>
        </View>
        <Text style={{textAlign: 'center', marginTop: 40, color: 'black'}}>
          -------- OR Sign In With --------
        </Text>
        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            marginTop: 30,
          }}>
          <Icon.Button
            name="google"
            color="white"
            alignItems="center"
            onPress={() => console.log('google press')}>
            Google
          </Icon.Button>
          <Icon.Button
            name="apple1"
            color="black"
            backgroundColor="gray"
            onPress={() => console.log('apple press')}>
            Ios
          </Icon.Button>
          <Icon.Button
            name="facebook-square"
            backgroundColor="#3b5998"
            onPress={() => console.log('facebook press')}>
            Facebook
          </Icon.Button>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          marginTop: 'auto',
          marginBottom: 18,
          marginRight: 20,
          alignItems: 'flex-end',
        }}
        onPress={() => console.log('Guest Click Press')}>
        <Text>Enter as Guest</Text>
      </TouchableOpacity>
    </View>
  );
}
