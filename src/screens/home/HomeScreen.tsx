import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { bestSellerFoods, recommendedFoods } from '../../constants/foods';
import FoodCard from '../../components/FoodCard';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialDesignIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function HomeScreen({ navigation }: any) {
  // get image
  const fruitImage = require('../../assets/images/food5.png');
  const carrotImage = require('../../assets/images/food2.png');
  const squashImage = require('../../assets/images/spices.png');
  const dairyImage = require('../../assets/images/dairy.png');
  const BeveragesImage = require('../../assets/images/dairy.png');

  // Dummy data
  const categories = [
    { id: 1, title: 'Fruits & Vegetables', image: fruitImage },
    { id: 2, title: 'Dairy & Bakery', image: dairyImage },
    { id: 3, title: 'Spices', image: squashImage },
    { id: 4, title: 'Snacks', image: carrotImage },
    { id: 5, title: 'Beverages', image: BeveragesImage },
    { id: 6, title: 'Fruits & Vegetables', image: fruitImage },
    { id: 7, title: 'Dairy & Bakery', image: dairyImage },
  ];

  return (
    <View className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} className="px-4 pt-6">
        <View className="mb-5 flex-row gap-4">
          <FontAwesome6 name="location-dot" size={24} color="green" />
          <View className="gap-1">
            <Text className="text-[16px] text-black font-[800]">
              Hello, Benjamin
            </Text>
            <Text className="text-[14px] text-gray-700">Kodoli Island</Text>
          </View>
        </View>

        {/* Categories */}
        <View className="py-2">
          <View className="flex-row justify-between mb-3">
            <Text className="text-[18px] font-[600] text-black ">Category</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('FoodList', {
                  title: 'Categories',
                  data: categories,
                });
              }}
              className="flex-row"
            >
              <Text className="text-gray-500">View all</Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={20}
                color="gray"
              />
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories?.slice(0, 4)?.map(item => (
              <View
                key={item?.id}
                className="shadow-md mb-2 shadow-black/70 bg-white elevation-4 w-[120px] mr-4 rounded-[10] items-center"
              >
                <Image
                  source={item.image}
                  className="w-full h-[100px] justify-center items-center rounded-t-xl"
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
            ))}
          </ScrollView>
        </View>

        {/* Recommended */}
        <View className="mt-[10px]">
          <View className="flex-row justify-between mb-3">
            <Text className="text-[18px] font-[600] text-black">
              Recommended for you
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('FoodList', {
                  title: 'Recommended',
                  data: recommendedFoods,
                });
              }}
              className="flex-row"
            >
              <Text className="text-gray-500">View all</Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={20}
                color="gray"
              />
            </TouchableOpacity>
          </View>

          <ScrollView horizontal>
            {recommendedFoods?.slice(0, 3)?.map(item => (
              <FoodCard key={item.id} item={item} />
            ))}
          </ScrollView>
        </View>

        {/* Best Seller */}
        <View className="mb-24 mt-6">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-[18px] font-[600] text-black">
              Best seller
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('FoodList', {
                  title: 'Best Seller',
                  data: bestSellerFoods,
                });
              }}
              className="flex-row"
            >
              <Text className="text-gray-500">View all</Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={20}
                color="gray"
              />
            </TouchableOpacity>
          </View>

          <ScrollView horizontal>
            {bestSellerFoods?.slice(0, 3)?.map(item => (
              <FoodCard key={item.id} item={item} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="justify-between items-center absolute bottom-4 self-center border-white border-[1px] bg-[#c6decf] px-3 py-3 rounded-full flex-row gap-8 shadow-lg">
        <TouchableOpacity className="p-2 border-white bg-green-100 border-[2px] rounded-full">
          <Icon name="home" size={24} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          <Icon name="person" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
