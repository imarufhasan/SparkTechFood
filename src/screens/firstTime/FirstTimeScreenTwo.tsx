import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function FirstTimeScreenTwo({ navigation }: any) {
  return (
    <View className="flex-1 bg-white px-6">
      {/* Center Content */}
      <View className="flex-1 justify-center items-start w-full ">
        <View className="justify-end  w-full items-center mb-4 flex-1">
          <View className="w-[210px] h-[210px] rounded-full bg-yellow-100 justify-center items-center">
            <View className="w-[160px] h-[160px] rounded-full bg-yellow-300 justify-center items-center">
              <View className="w-[110px] h-[110px] rounded-full bg-yellow-500 justify-center items-center">
                <Image
                  source={require('../../assets/images/veg.png')}
                  className="w-16 h-16"
                />
              </View>
            </View>
          </View>
        </View>

        <View className="justify-start items-start  flex-1 w-full">
          {/* Title */}
          <Text className="text-yellow-600 text-[22px] w-full font-semibold mt-10 text-start">
            Gives You The Best Price{'\n'}For Every Items
          </Text>

          {/* Subtitle */}
          <Text className="text-gray-500 text-[14px] text-start mt-3 ">
            We are giving you the best price and alternatives for daily needs.
          </Text>
        </View>

        {/* Bottom Controls */}
        <View className="w-full flex-row items-center justify-between mb-6">
          {/* Skip */}
          <TouchableOpacity
            onPress={() => navigation.replace('Login')}
            className="bg-gray-100 rounded-md py-2 px-3"
          >
            <Text className="text-yellow-600 font-[600] text-[14px]">Skip</Text>
          </TouchableOpacity>

          {/* Dots */}
          <View className="flex-row gap-1">
            <View className="w-2 h-2 rounded-full bg-yellow-200" />
            <View className="w-2 h-2 rounded-full bg-yellow-500" />
            <View className="w-2 h-2 rounded-full bg-yellow-200" />
          </View>

          {/* Next Button */}
          <TouchableOpacity
            onPress={() => navigation.navigate('FirstTimeScreenThree')}
            className="w-12 h-12 rounded-full bg-yellow-500 justify-center items-center"
          >
            <Icon name="arrow-right" size={22} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
