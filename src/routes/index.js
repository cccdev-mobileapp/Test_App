import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Search from '../screens/Search';
import Events from '../screens/Events';
import Favourites from '../screens/Favourites';
import Profile from '../screens/Profile';
import Login from '../screens/Login';
import AppContext from '../context/AppContext';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Routes() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const {isLogin} = useContext(AppContext);

  function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconNmae;
            if (route.name === 'Search') {
              iconNmae = focused ? 'home' : 'home-outline';
              size = focused ? 25 : 20;
              color = focused ? '#de3434' : '#555';
            } else if (route.name === 'Events') {
              iconNmae = focused ? 'calendar-sharp' : 'calendar-outline';
              size = focused ? 25 : 20;
              color = focused ? '#de3434' : '#555';
            } else if (route.name === 'Favourites') {
              iconNmae = focused ? 'heart' : 'heart-outline';
              size = focused ? 25 : 20;
              color = focused ? '#de3434' : '#555';
            } else if (route.name === 'Profile') {
              iconNmae = focused
                ? 'person-circle-sharp'
                : 'person-circle-outline';
              size = focused ? 25 : 20;
              color = focused ? '#de3434' : '#555';
            }
            return <Ionicons name={iconNmae} size={size} color={color} />;
          },
          headerShown: false,
          activeTintColor: '#de3434',
        })}>
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
