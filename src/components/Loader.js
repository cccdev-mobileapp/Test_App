import {ActivityIndicator, Text, View} from 'react-native';
import React from 'react';

export default function Loader() {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <ActivityIndicator size={'large'} color={'green'} />
    </View>
  );
}
