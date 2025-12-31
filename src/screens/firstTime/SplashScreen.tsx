import { View, Text, Image } from 'react-native';
import React from 'react';

export default function SplashScreen() {
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image
        source={require('../../assets/images/veg.png')}
        className="w-40 h-40 mb-10"
      />
      <Text className="text-[20px] text-green-600 font-[700]">MY Shopper</Text>
    </View>
  );
}
