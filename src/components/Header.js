import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View style={{height: 80, backgroundColor: 'white'}}>
      <View style={{paddingTop: 20, paddingHorizontal: 25}}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
          }}>
          Hello Renzo!
        </Text>
        <Text style={{color: 'grey'}}>Are you ready to dance ?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
