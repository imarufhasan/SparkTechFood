import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { showToast } from '../../utils/share/showToast';

const ChangePassord = ({ navigation }: any) => {
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);

  const [passwordCon, setPasswordCon] = useState('');
  const [secureCon, setSecureCon] = useState(true);

  return (
    <View className="flex-1 bg-white px-4 ">
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View className="flex-row  items-center mt-4 mb-10">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="w-9 h-9 rounded-[10] bg-white shadow-md shadow-black/30 elevation-3 items-center justify-center"
        >
          <Icon name="chevron-back" size={22} color="#000" />
        </TouchableOpacity>

        <Text className="flex-1 text-center text-[16px] text-[#000] font-semibold mr-9">
          Add new password
        </Text>
      </View>

      <View className="px-2">
        {/* Description */}
        <Text className="text-sm text-gray-500 mb-6 mt-[80px] leading-5">
          Enter your new password.
        </Text>

        {/* Password */}
        <Text className="w-full text-[14px] text-black mb-1.5">Password</Text>
        <View
          className="
            w-full
            bg-white
            px-4
            h-[45px]
            rounded-md
            mb-5
            shadow-md
            shadow-black/70
            elevation-4
            flex-row
            items-center
            justify-between
          "
        >
          <TextInput
            placeholder="********"
            placeholderTextColor="gray"
            className="flex-1 text-base text-gray-800"
            secureTextEntry={secure}
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity onPress={() => setSecure(!secure)}>
            <Icon
              name={secure ? 'eye-off-outline' : 'eye-outline'}
              size={22}
              color="#666"
            />
          </TouchableOpacity>
        </View>

        {/* confirm password     */}
        <Text className="w-full text-[14px] text-black mb-1.5">
          Confirm Password
        </Text>
        <View
          className="
            w-full
            bg-white
            px-4
            h-[45px]
            rounded-md
            mb-5
            shadow-md
            shadow-black/70
            elevation-4
            flex-row
            items-center
            justify-between
          "
        >
          <TextInput
            placeholder="********"
            placeholderTextColor="gray"
            className="flex-1 text-base text-gray-800"
            secureTextEntry={secureCon}
            value={passwordCon}
            onChangeText={setPasswordCon}
          />

          <TouchableOpacity onPress={() => setSecureCon(!secureCon)}>
            <Icon
              name={secureCon ? 'eye-off-outline' : 'eye-outline'}
              size={22}
              color="#666"
            />
          </TouchableOpacity>
        </View>

        {/* velidation ruls */}
        <View className="gap-2">
          <View className="flex-row  justify-start items-center">
            <View className="justify-center items-center bg-green-500 h-[15px] w-[15px] rounded-full mr-2">
              <Icon name="checkmark" size={10} color="#fff" />
            </View>
            <Text className="text-sm text-black">Minimum 8 characters</Text>
          </View>
          <View className="flex-row justify-start items-center">
            <View className="justify-center items-center bg-green-500 h-[15px] w-[15px] rounded-full mr-2">
              <Icon name="checkmark" size={10} color="#fff" />
            </View>
            <Text className="text-sm text-black">
              Minimum 1 letter, 1 symbol & 1 number
            </Text>
          </View>
          <View className="flex-row justify-start items-center">
            <View className="justify-center items-center bg-red-500 h-[15px] w-[15px] rounded-full mr-2">
              <Icon name="checkmark" size={10} color="#fff" />
            </View>
            <Text className="text-sm text-black">Special character</Text>
          </View>
        </View>

        {/* Send Code Button */}
        <TouchableOpacity
          onPress={() => {
            showToast('Password changed successfully');
            navigation.replace('PassResetSuccess');
          }}
          activeOpacity={0.8}
          className="
          mt-[30px]
          w-full
          h-12
          bg-green-600
          rounded-md
          items-center
          justify-center"
        >
          <Text className="text-white text-[15px] font-semibold">
            Change password
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangePassord;
