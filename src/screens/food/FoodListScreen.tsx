import React from 'react';
import { View, Text, FlatList } from 'react-native';
import FoodCard from '../../components/FoodCard';

export default function FoodListScreen({ route }: any) {
  const { title, data } = route.params;

  return (
    <View className="flex-1 bg-gray-50 px-4 pt-6">
      <Text className="text-xl font-semibold mb-4">{title}</Text>

      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <FoodCard item={item} />}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </View>
  );
}
