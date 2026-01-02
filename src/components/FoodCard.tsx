import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FoodItem } from '../constants/foods';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  item: FoodItem;
  navigation: any;
};

export default function FoodCard({ item, navigation }: Props) {
  const [heartIcon, setHeartIcon] = React.useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('click food item');
        navigation.navigate('FoodItemDetailsScreen', { item });
      }}
      className="bg-[#f3f5f7] mr-4 w-[170px] rounded-2xl pt-2 shadow-sm"
    >
      <View className="flex-row items-center">
        {item.isNew && (
          <Text className="text-[10px] bg-blue-400 text-white px-2 py-1 rounded-r-[10px]">
            New
          </Text>
        )}
        <View className="flex-1" />

        <TouchableOpacity
          onPress={() => setHeartIcon(!heartIcon)}
          className="w-8 h-8 border-white border-[1px] rounded-full items-center justify-center mr-3"
        >
          <FontAwesome
            name={heartIcon ? 'heart' : 'heart-o'}
            size={16}
            color={heartIcon ? 'red' : 'black'}
          />
        </TouchableOpacity>
      </View>

      <View className="p-3">
        <Image
          source={item.image}
          className="h-[80px]  w-full rounded-xl mb-4"
          resizeMode="cover"
        />

        <View className="flex-row justify-between mb-2">
          <View className="bg-gray-300 rounded-[5px] px-2 ">
            <Text className="text-[12px] text-gray-800">{item.category}</Text>
          </View>
          <View className="bg-red-400 rounded-[5px] px-2 ">
            <Text className="text-xs text-white">{item.shop}</Text>
          </View>
        </View>
        <Text className="text-[14px] font-[800] text-black">{item.title}</Text>
        <Text className="text-[12px] font-[300] text-black">
          {item.quantity}
        </Text>

        <View className="flex-row justify-between items-center mt-2">
          <Text className="font-[800] text-green-800 text-[16px]">
            {item.price}
          </Text>
          <TouchableOpacity className="w-8 h-8 elevation-4 shadow-md shadow-black/70 rounded-full bg-white items-center justify-center">
            <Icon name="basket" size={22} color="green" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}
