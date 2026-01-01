import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ProfileScreen({ navigation }: any) {
  return (
    <View className="flex-1 bg-white px-5 pt-6">
      {/* header */}
      <View className="flex-row items-center justify-between mb-4">
        {/* Back button */}
        <TouchableOpacity
          className="w-9 h-9 rounded-[10px] bg-white items-center justify-center shadow-md"
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={22} color="#111" />
        </TouchableOpacity>

        {/* Title */}
        <Text
          className="text-lg flex-1 text-center pr-4 font-[600]  text-black"
          numberOfLines={1}
        >
          My Account
        </Text>
      </View>

      {/* Profile */}
      <View className="items-center mb-10">
        <View className="relative">
          <TouchableOpacity className="border-2 border-gray-200 rounded-full">
            <Image
              source={require('../../assets/images/profile.png')} // change if needed
              className="w-24 h-24 rounded-full"
            />
          </TouchableOpacity>

          {/* Online badge */}
          <View className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
        </View>
      </View>

      {/* Form */}
      <View className="gap-4">
        <View>
          <Text className="text-xs text-gray-500 mb-1">Name</Text>
          <View className="border border-gray-300 rounded-full px-4 py-3">
            <TextInput
              value="Benjamin Willison"
              editable={false}
              className="text-sm text-black"
            />
          </View>
        </View>

        <View>
          <Text className="text-xs text-gray-500 mb-1">Address</Text>
          <View className="border border-gray-300 rounded-full px-4 py-3">
            <TextInput
              value="Kodoli Island"
              editable={false}
              className="text-sm text-black"
            />
          </View>
        </View>
      </View>

      {/* Edit Button */}
      <TouchableOpacity className="mt-10 bg-green-600 py-4 rounded-full items-center justify-center shadow-md">
        <Text className="text-white font-[600] text-[16px]">Edit</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View className="justify-between items-center absolute bottom-4 self-center border-white border-[1px] bg-[#c6decf] px-3 py-3 rounded-full flex-row gap-8 shadow-lg">
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className="p-2 border-white bg-green-100 border-[2px] rounded-full">
          <Icon name="person" size={24} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
