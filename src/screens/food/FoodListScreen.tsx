import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import FoodCardListItem from '../../components/FoodCardListItem';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function FoodListScreen({ route, navigation }: any) {
  const { title, data } = route.params;

  // 👇 add dummy item if odd length
  const formattedData =
    data.length % 2 === 1 ? [...data, { id: 'empty' }] : data;

  return (
    <View className="flex-1 bg-white px-4 pt-6">
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
        <Text className="text-lg font-semibold text-black" numberOfLines={1}>
          {title}
        </Text>

        {/* Search button */}
        <TouchableOpacity className="w-10 h-10 rounded-[10px] bg-white items-center justify-center shadow-md">
          <Ionicons name="search" size={20} color="#111" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={formattedData}
        numColumns={2}
        keyExtractor={(item: any, index) =>
          item.id?.toString() || `empty-${index}`
        }
        renderItem={({ item }: any) =>
          item.id === 'empty' ? (
            <View className="flex-1" /> // 👈 empty space holder
          ) : (
            <FoodCardListItem item={item} />
          )
        }
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          gap: 12,
        }}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
      />
      <View className="mb-4" />
    </View>
  );
}
