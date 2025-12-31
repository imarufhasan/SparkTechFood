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

const ForgotPasswordScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');

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
          Forgot Password ?
        </Text>
      </View>

      <View className="px-2">
        {/* Description */}
        <Text className="text-sm text-gray-500 mb-6 mt-[80px] leading-5">
          Enter your email address to verify it’s you. We will send a code to
          this email.
        </Text>

        {/* Email */}
        <Text className="text-sm text-black mb-2">Email</Text>
        <TextInput
          placeholder="example@gmail.com"
          placeholderTextColor="#A0A0A0"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          className="
          w-full
          h-12
          bg-white
          rounded-md
          px-4
          mb-6
          text-sm
          shadow-md
          shadow-black/70
          elevation-3
        "
        />

        {/* Send Code Button */}
        <TouchableOpacity
          onPress={() => {
            showToast('Send code success');
            navigation.navigate('VerifyCode');
          }}
          activeOpacity={0.8}
          className="
          w-full
          h-12
          bg-green-600
          rounded-md
          items-center
          justify-center"
        >
          <Text className="text-white text-[15px] font-semibold">
            Send code
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;
