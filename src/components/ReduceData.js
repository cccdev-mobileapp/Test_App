import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

export default function ReduceData({data}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 10,
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 4,
      }}>
      <View style={{height: 80, width: 80}}>
        <Image
          source={{uri: data?.event_profile_img}}
          alt="image"
          style={{width: '100%', height: '100%', borderRadius: 10}}
        />
      </View>
      <View style={{marginLeft: 8}}>
        <Text style={{color: 'black', fontWeight: '600'}}>
          {data?.event_name}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text>{data?.readable_from_date}</Text>
          <Text>{data?.readable_to_date}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>${data?.event_price_from}-</Text>
          <Text> ${data?.event_price_to}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          {data?.keywords.map((data, index) => {
            return (
              <View
                key={index}
                style={{
                  borderWidth: 1,
                  backgroundColor: '#b0b8b030',
                  paddingHorizontal: 6,
                  marginHorizontal: 3,
                  borderRadius: 12,
                }}>
                <Text style={{color: 'black'}}>{data}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <View
        style={{
          marginLeft: 'auto',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}>
        <Icon name="arrowright" size={18} color="black" />
        <View style={{flexDirection: 'row'}}>
          <Text>{data?.city},</Text>
          <Text>{data?.country}</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={{marginRight: 10}}>
            <Icon name="upload" color="black" size={16} />
          </View>
          {data?.isFavorite == 1 ? (
            <Icon name="heart" color="lightgreen" size={16} />
          ) : (
            <Icon name="hearto" color="black" size={16} />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
