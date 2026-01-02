import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { foodDetails } from '../../constants/foodItemDetails';
import MaterialDesignIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { recommendedFoods } from '../../constants/foods';
import FoodCard from '../../components/FoodCard';

const FoodItemDetailsScreen = ({ navigation, route }: any) => {
  const { item } = route.params;
  const [qty, setQty] = useState(foodDetails.defaultQty);

  return (
    <ScrollView
      className="flex-1 bg-white"
      showsVerticalScrollIndicator={false}
    >
      <View className="bg-[#f3f5f7] px-4 pt-6 pb-12 rounded-b-[200px] shadow-md">
        {/* Header Row */}
        <View className="flex-row items-center justify-between">
          <TouchableOpacity
            className="w-12 h-12 rounded-[12px] bg-white items-center justify-center shadow-md"
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={22} color="#111" />
          </TouchableOpacity>

          <Text
            className="text-[18px] font-semibold text-black"
            numberOfLines={1}
          >
            {item?.title}
          </Text>

          <TouchableOpacity className="w-12 h-12 rounded-[12px] bg-white items-center justify-center shadow-md">
            <Ionicons name="search" size={20} color="#111" />
          </TouchableOpacity>
        </View>

        {/* Food Image */}
        <Image
          source={item.image}
          className="w-full h-56 mt-6"
          resizeMode="contain"
        />
      </View>

      {/* Price & Quantity */}
      <View className="flex-row items-center justify-between px-4">
        <View>
          <Text className="text-xs text-gray-500">
            {foodDetails.defaultQty}
            {foodDetails.unit}
          </Text>
          <Text className="text-2xl text-green-800 font-bold">
            {foodDetails.price.currency}
            {foodDetails.price.amount.toFixed(2)}
          </Text>
        </View>

        <View className="flex-row items-center">
          <TouchableOpacity
            className="w-10 h-10 rounded-[8px] shadow-black/40 elevation-4 bg-white items-center justify-center shadow-md"
            onPress={() => qty > 1 && setQty(qty - 1)}
          >
            <Text className="text-[26px] font-bold">-</Text>
          </TouchableOpacity>

          <Text className="mx-3 font-semibold">
            {qty}
            {foodDetails.unit}
          </Text>

          <TouchableOpacity
            className="w-10 h-10 rounded-[8px] bg-green-600 items-center justify-center shadow-md"
            onPress={() => setQty(qty + 1)}
          >
            <Text className="text-[26px] font-bold text-white">+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Store Button */}
      <TouchableOpacity className="flex-row items-center bg-orange-500 mx-4 mt-5 py-4 px-2 rounded-[10px]">
        <Image
          source={require('../../assets/images/food_logo.png')}
          className="w-6 h-6 rounded-full"
        />
        <Text className="flex-1 ml-3 text-white font-semibold">
          {foodDetails.store.name}
        </Text>
        <View className="flex-row items-center justify-center gap-3">
          <Text className=" ml-3 text-white font-semibold">Store details</Text>
          <MaterialDesignIcons name="arrow-top-right" size={15} color="white" />
        </View>
      </TouchableOpacity>

      {/* Description */}
      <Text className="px-4 mt-4 text-gray-600 text-sm leading-5">
        {foodDetails.description}
      </Text>

      {/* Highlights */}
      {/* Highlights */}
      <View className="flex-row justify-between mt-4">
        {foodDetails.highlights.map(highlight => (
          <View
            key={highlight.id}
            className="flex-row gap-4 bg-red-100 rounded-[10px] items-center justify-center mx-3 px-3 py-2"
          >
            <Ionicons name={highlight.icon} size={18} color="#27AE60" />
            <Text className="ml-2 text-xs font-semibold">
              {highlight.label}
            </Text>
          </View>
        ))}
      </View>

      {/* Similar Items */}

      <View className="mt-[10px] p-3 mb-4">
        <View className="flex-row justify-between mb-3">
          <Text className="text-[18px] font-[600] text-black">
            Similar Items
          </Text>
        </View>

        <ScrollView horizontal>
          {recommendedFoods?.slice(0, 3)?.map(simiItem => (
            <FoodCard
              key={simiItem.id}
              item={simiItem}
              navigation={navigation}
            />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default FoodItemDetailsScreen;
