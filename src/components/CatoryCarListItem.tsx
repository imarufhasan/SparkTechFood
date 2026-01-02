import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialDesignIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FoodItem, recommendedFoods } from '../constants/foods';

type Props = {
  item: FoodItem;
  navigation: any;
};

export default function CatoryCarListItem({ item, navigation }: Props) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('FoodListScreen', {
          title: item.title,
          data: recommendedFoods,
        });
      }}
      className="flex-1 bg-[#f3f5f7] rounded-2xl shadow-sm"
    >
      {/* Content */}
      <View className="shadow-md mb-2 shadow-black/70 bg-white elevation-4 w-full mr-4 rounded-[10] items-center">
        <Image
          source={item.image}
          className="w-full h-[130px] justify-center items-center rounded-t-xl"
        />
        <View className="flex-row flex-1  w-full items-center py-2 px-2 justify-between">
          <Text className="text-black font-[500] text-xs flex-1 text-start mt-1">
            {item.title}
          </Text>
          <View className="bg-gray-200 rounded-full p-1">
            <MaterialDesignIcons
              name="arrow-top-right"
              size={15}
              color="black"
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
