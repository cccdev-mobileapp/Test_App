import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import Header from '../components/Header';
import axios from 'axios';
import AppContext from '../context/AppContext';

export default function Events() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const {token} = useContext(AppContext);

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://3.7.81.243/projects/plie-api/public/api/events-listing',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const callApi = () => {
    axios
      .request(config)
      .then(response => {
        console.log(JSON.stringify(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Header />
      <Text>Events</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
