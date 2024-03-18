import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Search from '../screens/Search';
import Events from '../screens/Events';
import Favourites from '../screens/Favourites';
import Profile from '../screens/Profile';
import Login from '../screens/Login';
import AppContext from '../context/AppContext';

export default function Routes() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const {isLogin} = useContext(AppContext);

  function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Events"
        screenOptions={{headerShown: false}}>
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Events" component={Events} />
        <Tab.Screen name="Favourites" component={Favourites} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  }

  return (
    <Stack.Navigator>
      {isLogin ? (
        <Stack.Screen
          name="Dashboard"
          component={MyTabs}
          options={{headerShown: false}}
        />
      ) : (
        <Stack.Screen
          name="Auth"
          component={Login}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
}
