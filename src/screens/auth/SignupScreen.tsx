import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  useColorScheme,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { showToast } from '../../utils/share/showToast';

const SignupScreen = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const [loading, setLoading] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);

  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    Icon.loadFont();
  }, []);

  const handleSignup = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showToast('Signup Success');
      navigation.replace('Login');
    }, 1500);
  };

  const handleSignupGoogle = async () => {
    setLoadingGoogle(true);
    setTimeout(() => {
      setLoadingGoogle(false);
      showToast('Signup Success with Google');
      navigation.replace('Home');
    }, 1500);
  };

  return (
    <View className="flex-1 bg-white px-5 items-center">
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View className="flex-1 px-1 w-full">
        <View className="justify-center items-center">
          <Image
            source={require('../../assets/images/veg.png')}
            className="w-24 h-24 mt-5 resize-contain"
          />

          <Text className="text-2xl font-bold text-green-600 mb-[40px]">
            MY Shopper
          </Text>

          <Text className="text-2xl font-extrabold text-gray-900 mb-8">
            Register as a user
          </Text>
        </View>

        {/* Name */}
        <Text className="w-full text-sm text-gray-600 mb-1">Name</Text>
        <TextInput
          placeholder="John Doe"
          placeholderTextColor="#999"
          className="w-full bg-white px-4 h-[45px] rounded-md mb-3 text-base shadow-md shadow-black/70 elevation-4"
          value={name}
          onChangeText={setName}
        />

        {/* Email */}
        <Text className="w-full text-sm text-gray-600 mb-1">Email</Text>
        <TextInput
          placeholder="example@gmail.com"
          placeholderTextColor="#999"
          className="w-full bg-white px-4 h-[45px] rounded-md mb-5 text-base shadow-md shadow-black/70 elevation-4"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Password */}
        <Text className="w-full text-sm text-gray-600 mb-1.5">Password</Text>
        <View className="w-full bg-white px-4 h-[45px] rounded-md mb-5 shadow-md shadow-black/70 elevation-4 flex-row items-center justify-between">
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

        {/* Signup Button */}
        <TouchableOpacity
          onPress={() => handleSignup()}
          className="w-full h-12 bg-green-600 py-3 mt-3 rounded-lg items-center mb-10"
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-white text-base font-bold">SIGN UP</Text>
          )}
        </TouchableOpacity>
        {/* or */}
        <View className="flex-row items-center justify-cente flex-1 w-full mb-5">
          <View className="w-[45%] h-[1px] bg-gray-300" />
          <Text className="w-[10%]  text-center text-gray-500 mx-2">OR</Text>
          <View className="w-[40%] h-[1px] bg-gray-300" />
        </View>
        <TouchableOpacity
          onPress={() => handleSignupGoogle()}
          className="w-full h-14 bg-white rounded-lg flex-row items-center 
          justify-center border 
        border-gray-200
          shadow-sm
        shadow-black/40
          elevation-3"
        >
          <Image
            source={require('../../assets/images/google.png')}
            className="w-5 h-5 mr-3"
            resizeMode="contain"
          />
          {loadingGoogle ? (
            <ActivityIndicator color="green" />
          ) : (
            <Text className="text-gray-800 text-base font-semibold">
              Continue with Google
            </Text>
          )}
        </TouchableOpacity>

        {/* Footer */}
        <View className="w-full  flex-1  flex-row justify-between items-end mb-5 mt-10">
          <Text className="text-[13px] text-black">
            Already have an account?
          </Text>
          <TouchableOpacity
            className="flex-row items-center"
            onPress={() => navigation.goBack()}
          >
            <Text className="text-[14px] text-black font-bold">Login</Text>
            <MaterialIcons name="arrow-right" size={22} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;
