import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import MaterialDesignIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PasswordResetSuccessScreen = ({ navigation }: any) => {
  return (
    <View className="flex-1 bg-white items-center justify-center px-6">
      <StatusBar barStyle="dark-content" />

      <View className="items-center mb-8">
        <View className="w-[190px] h-[190px] rounded-full bg-green-100 items-center justify-center">
          <View className="w-[140px] h-[140px] rounded-full bg-green-300 items-center justify-center">
            <View className="w-[100px] h-[100px] rounded-full bg-green-600 items-center justify-center">
              <MaterialDesignIcons name="key-variant" size={60} color="#fff" />
            </View>
          </View>
        </View>
      </View>

      <Text className="text-green-600 text-[14px] font-semibold mb-3 mt-5">
        Password reset Successful
      </Text>

      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => navigation.replace('Login')}
        className="
          w-full
          h-12
          bg-green-600
          rounded-md
          items-center
          justify-center
        "
      >
        <Text className="text-white text-[15px] font-semibold">
          Back to Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PasswordResetSuccessScreen;
