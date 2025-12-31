import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { showToast } from '../../utils/share/showToast';

const VerificationCodeScreen = ({ navigation }: any) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputs = useRef<TextInput[]>([]);

  useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  const handleChange = (value: string, index: number) => {
    if (value.length > 1) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (value: string, index: number) => {
    if (!value && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <View className="flex-1 bg-white px-4">
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View className="flex-row items-center mt-4 mb-10">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="w-9 h-9 rounded-[10] bg-white shadow-md shadow-black/30 elevation-3 items-center justify-center"
        >
          <Icon name="chevron-back" size={22} color="#000" />
        </TouchableOpacity>

        <Text className="flex-1 text-center text-[16px] text-black font-semibold mr-9">
          Verify Code
        </Text>
      </View>

      <View>
        {/* Description */}
        <Text className="text-sm text-gray-500 mb-5 mt-[70px] leading-5 text-start">
          Enter the code we sent to your email.
        </Text>

        {/* OTP Inputs */}
        <View className="w-full flex-row justify-center gap-3 mb-12">
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={ref => {
                if (ref) inputs.current[index] = ref;
              }}
              value={digit}
              onChangeText={value => handleChange(value, index)}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === 'Backspace') {
                  handleBackspace(code[index], index);
                }
              }}
              keyboardType="number-pad"
              maxLength={1}
              textAlign="center"
              className="
                w-[14%]
                h-[48px]
                bg-white
                rounded-lg
                text-xl
                font-bold
                text-black
                shadow-md
                shadow-black/70
                elevation-3
              "
            />
          ))}
        </View>

        {/* Verify Button */}
        <TouchableOpacity
          onPress={() => {
            showToast('Verify Success');
            navigation.navigate('ChangePassord');
          }}
          activeOpacity={0.85}
          className="
            w-full
            h-12
            bg-green-600
            rounded-md
            items-center
            justify-center
          "
        >
          <Text className="text-white text-[16px] font-semibold">Verify</Text>
        </TouchableOpacity>

        {/* Resend */}
        <View className="flex-row justify-between mt-6 ">
          <Text className="text-base text-gray-500">
            Didn’t receive a code?
          </Text>
          <TouchableOpacity onPress={() => showToast('Send again')}>
            <Text className="ml-1 text-base underline text-green-600 font-semibold">
              Send again
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default VerificationCodeScreen;
