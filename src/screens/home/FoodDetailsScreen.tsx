import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface FoodDetailsProps {
  route: {
    params: {
      name: string;
      image: any;
      description: string;
      price: string;
    };
  };
  navigation: any;
}

const FoodDetailsScreen: React.FC<FoodDetailsProps> = ({
  route,
  navigation,
}) => {
  const { name, image, description, price } = route.params;

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center px-4 py-4 gap-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#333" />
        </TouchableOpacity>
        <Text className="text-[20px] font-bold text-[#333]">Food Details</Text>
      </View>

      {/* Food Image */}
      <Image
        source={image}
        className="w-full h-[300px] rounded-b-[25px]"
        resizeMode="cover"
      />

      {/* Food Info */}
      <View className="p-5">
        <View className="flex-row justify-between items-center">
          <Text
            className="text-[24px] font-bold text-[#333] flex-1"
            numberOfLines={2}
          >
            {name}
          </Text>

          <TouchableOpacity>
            <Ionicons name="heart" size={28} color="#FF6347" />
          </TouchableOpacity>
        </View>

        <Text className="text-[16px] text-[#666] mt-2.5 leading-[22px]">
          {description}
        </Text>

        <Text className="text-[22px] font-bold text-[#FF6347] mt-4">
          {price}
        </Text>

        {/* Add to Cart Button */}
        <TouchableOpacity className="bg-[#FF6347] py-4 rounded-xl mt-6 items-center">
          <Text className="text-white text-[18px] font-bold">Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default FoodDetailsScreen;
