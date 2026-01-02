import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FloatingInput from '../../components/FloatingInput';
import { showToast } from '../../utils/share/showToast';

export default function ProfileScreen({ navigation, route }: any) {
  const { name, address } = route.params;
  const [nameEdit, setNameEdit] = React.useState(name);
  const [addressEdit, setAddressEdit] = React.useState(address);
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
        <TouchableOpacity
          onPress={() => showToast('change pic')}
          className="relative"
        >
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
        </TouchableOpacity>
      </View>

      <FloatingInput
        editable={true}
        label="Name"
        value={nameEdit}
        onChangeText={setNameEdit}
      />

      <FloatingInput
        editable={true}
        label="Address"
        value={addressEdit}
        onChangeText={setAddressEdit}
      />

      {/* Edit Button */}
      <View className="flex-1  items-center justify-end pb-5 w-full">
        <TouchableOpacity
          onPress={() => {
            showToast('Profile Updated');
          }}
          className="w-full mt-10 h-[50px] bg-green-600 py-4 rounded-full items-center justify-center shadow-md"
        >
          <Text className="text-white font-[600] text-[16px]">
            Save changes
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
