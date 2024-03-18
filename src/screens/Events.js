import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';

export default function Events() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  return (
    <View style={{flex: 1}}>
      <Header />
      <Text>Events</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
