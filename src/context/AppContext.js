import React, {useEffect, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

const AppContext = React.createContext();
export const AppProvider = ({children}) => {
  const [isLogin, setLogin] = useState(false);
  const [token, setToken] = useState(null);
  const [Data, setData] = useState([]);

  const GetData = async () => {
    try {
      await AsyncStorage.getItem('isLogin', (error, result) => {
        if (result == 'true') {
          setLogin(true);
        } else {
          setLogin(false);
        }
      });

      await AsyncStorage.getItem('Token', (error, result) => {
        if (result != null) {
          setToken(result);
        } else {
          setToken(null);
        }
      });
    } catch (error) {
      Alert.alert('Context Get Error!');
    }
  };
  useEffect(() => {
    GetData();
  }, []);

  return (
    <AppContext.Provider
      value={{isLogin, setLogin, token, setToken, Data, setData}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
