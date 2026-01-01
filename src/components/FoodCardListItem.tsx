import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import { FoodItem } from '../constants/foods';

type Props = {
  item: FoodItem;
};

export default function FoodCardListItem({ item }: Props) {
  const [heartIcon, setHeartIcon] = React.useState(false);

  return (
    <View className="flex-1 bg-[#f3f5f7] rounded-2xl pt-2 shadow-sm">
      {/* Header */}
      <View className="flex-row items-center px-2">
        {item.isNew && (
          <Text className="text-[10px] bg-blue-500 text-white px-2 py-1 rounded-r-xl">
            New
          </Text>
        )}
        <View className="flex-1" />
        <TouchableOpacity
          onPress={() => setHeartIcon(!heartIcon)}
          className="w-8 h-8 bg-white rounded-full items-center justify-center shadow-sm"
        >
          <FontAwesome
            name={heartIcon ? 'heart' : 'heart-o'}
            size={15}
            color={heartIcon ? '#ef4444' : '#111'}
          />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View className="p-3">
        <Image
          source={item.image}
          className="h-[60px] w-full rounded-xl mb-5"
          resizeMode="cover"
        />

        {/* Tags */}
        <View className="flex-row justify-between mb-2">
          <View className="bg-gray-300 rounded-md px-2 py-[2px]">
            <Text className="text-[11px] text-gray-800">{item.category}</Text>
          </View>
          <View className="bg-red-500 rounded-md px-2 py-[2px]">
            <Text className="text-[11px] text-white">{item.shop}</Text>
          </View>
        </View>

        {/* Title */}
        <Text className="text-[14px] font-bold text-black">{item.title}</Text>
        <Text className="text-[12px] text-gray-600 mb-2">{item.quantity}</Text>

        {/* Price + Action */}
        <View className="flex-row justify-between items-center">
          <Text className="text-[16px] font-extrabold text-green-800">
            {item.price}
          </Text>
          <TouchableOpacity className="w-9 h-9 rounded-full bg-white items-center justify-center shadow-md">
            <Icon name="basket" size={20} color="green" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
