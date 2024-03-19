import {
  Alert,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState, useContext, useCallback} from 'react';
import Header from '../components/Header';
import axios from 'axios';
import AppContext from '../context/AppContext';
import Loader from '../components/Loader';
import NoData from '../components/NoData';
import ReduceData from '../components/ReduceData';

export default function Events() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const {token} = useContext(AppContext);

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://3.7.81.243/projects/plie-api/public/api/events-listing',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const callApi = async () => {
    setLoading(true);
    await axios
      .request(config)
      .then(response => {
        if (response.data?.success == true) {
          setLoading(false);
          setData(response?.data?.data?.events || []);
        } else {
          Alert.alert('Data Get Error!', response.data?.message);
        }
      })
      .catch(error => {
        Alert.alert('Data Get Error!', error?.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    callApi();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    callApi();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={{flex: 1}}>
      <Header />
      {loading && !refreshing ? (
        <Loader />
      ) : data.length == 0 ? (
        <NoData onClick={callApi} />
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={data}
          renderItem={({item}) => <ReduceData data={item} />}
          keyExtractor={(item, index) => index}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
