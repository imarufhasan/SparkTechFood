import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  useColorScheme,
  StatusBar,
  Alert,
  ActivityIndicator,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { login } from '../../api/authApi';
import { showToast } from '../../utils/share/showToast';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  const isDarkMode = useColorScheme() === 'dark';

  const handleLogin = async () => {
    try {
      setLoading(true);
      const data = await login();
      console.log('login_res_data: ', data?.message);
      if (data?.message === 'nice to meet you') {
        navigation.navigate('Home');
        showToast('Login Success');
      }
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      Alert.alert(
        'Login Failed',
        error.response?.data?.message || 'Something went wrong',
      );
    }
  };

  useEffect(() => {
    Icon.loadFont();
  }, []);

  return (
    <View className="flex-1 bg-white px-6 items-center">
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      {/* Logo */}
      <Image
        source={require('../../assets/images/veg.png')}
        className="w-24 h-24 mt-10 resize-contain"
      />

      <Text className="text-2xl font-bold text-green-600 mb-[50px]">
        MY Shopper
      </Text>

      <Text className="text-2xl font-extrabold text-gray-900 mb-8">
        Login as a user
      </Text>

      {/* Email */}
      <Text className="w-full text-sm text-gray-600 mb-1.5">Email</Text>
      <TextInput
        placeholder="example@gmail.com"
        placeholderTextColor="#999"
        className="
    w-full 
    bg-white 
    px-4 
    py-3 
    h-[45px]
    rounded-md
    mb-5 
    text-base 
    shadow-md 
    shadow-black/70
    elevation-4"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password */}
      <Text className="w-full text-sm text-gray-600 mb-1.5">Password</Text>
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

      {/* Remember & Forgot */}
      <View className="w-full flex-row justify-between items-center mb-8">
        <TouchableOpacity
          onPress={() => setRemember(!remember)}
          className="flex-row items-center"
        >
          <CheckBox
            value={remember}
            onValueChange={setRemember}
            tintColors={{ true: '#28a745', false: '#000' }}
          />
          <Text className="text-[14px] text-black ml-1">Remember me</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}
        >
          <Text className=" underline font-[500] text-base text-black">
            Forgot password
          </Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity
        onPress={handleLogin}
        className="w-full h-12 bg-green-600 py-3 rounded-lg items-center mb-10"
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-white text-base font-bold">LOGIN</Text>
        )}
      </TouchableOpacity>

      {/* Footer */}
      <View className="w-full flex-1 flex-row justify-between items-end mb-5 mt-10">
        <Text className="text-[13px] mb-1 text-black">
          Don’t have an account?
        </Text>
        <TouchableOpacity
          className="flex-row items-center"
          onPress={() => navigation.navigate('Signup')}
        >
          <Text className="text-[14px]  text-black font-bold ">Register</Text>
          <MaterialIcons name="arrow-right" size={22} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
