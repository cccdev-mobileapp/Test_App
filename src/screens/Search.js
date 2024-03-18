import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Search() {
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');

  const handleClick = () => {
    console.log(email, password);
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

const styles = StyleSheet.create({});
