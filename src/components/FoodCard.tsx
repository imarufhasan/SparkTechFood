import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FoodItem } from '../constants/foods';

type Props = {
  item: FoodItem;
};

export default function FoodCard({ item }: Props) {
  return (
    <View className="bg-gray-200 mr-4 w-[160px] rounded-2xl p-3 shadow-sm">
      <View className="flex-row justify-between items-center">
        {item.isNew && (
          <Text className="text-[10px] bg-green-100 text-green-600 px-2 py-0.5 rounded">
            New
          </Text>
        )}
        <Text className="text-gray-400 text-lg">❤️</Text>
      </View>

      <Image
        source={item.image}
        className="h-[80px] w-full rounded-xl my-4"
        resizeMode="cover"
      />

      <Text className="text-xs text-gray-500">{item.category}</Text>
      <Text className="text-sm font-medium">{item.title}</Text>

      <View className="flex-row justify-between items-center mt-2">
        <Text className="font-semibold">{item.price}</Text>
        <TouchableOpacity className="w-8 h-8 rounded-full bg-green-600 items-center justify-center">
          <Text className="text-white text-lg">+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
