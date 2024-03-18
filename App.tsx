import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppProvider} from './src/context/AppContext';
import Routes from './src/routes';

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AppProvider>
  );
}

const styles = StyleSheet.create({});
