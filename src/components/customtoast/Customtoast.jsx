import React from 'react';
import { View, Text, Image } from 'react-native';

const CustomToast = ({ message, imageSource }) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'gray',
      padding: 10,
      borderRadius: 8,
    }}
  >
    {imageSource && <Image source={imageSource} style={{ width: 20, height: 20, marginRight: 10 }} />}
    <Text style={{ color: 'white' }}>{message}</Text>
  </View>
);

export default CustomToast;
