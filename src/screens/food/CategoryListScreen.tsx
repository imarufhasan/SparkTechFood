import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CatoryCarListItem from '../../components/CatoryCarListItem';

export default function CategoryListScreen({ route, navigation }: any) {
  const { title, data } = route.params;

  const formattedData =
    data.length % 2 === 1 ? [...data, { id: 'empty' }] : data;

  return (
    <View className="flex-1 bg-white px-4 pt-3">
      {/* header */}
      <View className="flex-row items-center justify-between mb-6">
        <TouchableOpacity
          className="w-12 h-12 rounded-[10px] bg-white items-center justify-center shadow-black/70 shadow-md"
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={22} color="#111" />
        </TouchableOpacity>

        {/* Title */}
        <Text
          className="text-[18px] font-semibold text-black"
          numberOfLines={1}
        >
          {title}
        </Text>

        {/* Search button */}
        <TouchableOpacity className="w-12 h-12 rounded-[10px] bg-white items-center justify-center shadow-black/70 shadow-lg">
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
            <View className="flex-1" />
          ) : (
            <CatoryCarListItem item={item} navigation={navigation} />
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
