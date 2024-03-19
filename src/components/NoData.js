import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function NoData({onClick}) {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text style={{fontSize: 28, color: 'gray', fontWeight: '700'}}>
        No Data Found
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#49769880',
          padding: 18,
          borderRadius: 10,
          marginTop: 10,
        }}
        onPress={onClick}>
        <Text>Re APi Call</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
