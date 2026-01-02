import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FloatingInput from '../../components/FloatingInput';

export default function ProfileScreen({ navigation }: any) {
  const userInfo = {
    name: 'Benjamin Willison',
    address: 'Kompleks Ruko Jl. Raya Rambutan',
  };
  const [name, setName] = React.useState(userInfo.name);
  const [address, setAddress] = React.useState(userInfo.address);
  return (
    <View className="flex-1 bg-white px-5 pt-6">
      {/* header */}
      <View className="flex-row items-center justify-between mb-6">
        {/* Back button */}
        <TouchableOpacity
          className="w-9 h-9 rounded-[10px] bg-white items-center justify-center shadow-md"
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={22} color="#111" />
        </TouchableOpacity>

        {/* Title */}
        <Text
          className="text-[18px]  mr-5 flex-1 text-center pr-4 font-[600]  text-black"
          numberOfLines={1}
        >
          My Account
        </Text>
      </View>

      {/* Profile */}
      <View className="items-center mb-10">
        <View className="relative">
          <View className="border-2 border-gray-200 rounded-full">
            <Image
              source={require('../../assets/images/profile1.jpg')} // change if needed
              className="w-[120px] h-[120px] rounded-full"
            />
          </View>

          {/* Online badge */}
          <View className="absolute bottom-1 right-1 w-8 h-8 bg-green-500 rounded-full border-[2px] border-white items-center justify-center">
            <AntDesign name="edit" size={16} color="white" />
          </View>
        </View>
      </View>

      <FloatingInput
        editable={false}
        label="Name"
        value={name}
        onChangeText={setName}
      />

      <FloatingInput
        editable={false}
        label="Address"
        value={address}
        onChangeText={setAddress}
      />

      {/* Edit Button */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProfileScreenEdit', { name, address });
        }}
        className="mt-10 h-[50px] bg-green-600 py-4 rounded-full items-center justify-center shadow-md"
      >
        <Text className="text-white font-[600] text-[16px]">Edit</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View className="justify-between items-center absolute bottom-4 self-center border-white border-[1px] bg-[#c6decf] px-3 py-3 rounded-full flex-row gap-8 shadow-lg">
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className="p-2 border-white bg-green-100 border-[2px] rounded-full">
          <Icon name="person" size={24} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
