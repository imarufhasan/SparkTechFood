import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import HomeScreen from '../screens/home/HomeScreen';
import FoodDetailsScreen from '../screens/home/FoodDetailsScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import VerifyCode from '../screens/auth/VerifyCode';
import ChangePassord from '../screens/auth/ChangePassord';
import PassResetSuccessScreen from '../screens/auth/PassResetSuccessScreen';
import SplashScreen from '../screens/firstTime/SplashScreen';
import FirstTimeScreenOne from '../screens/firstTime/FirstTimeScreenOne';
import FirstTimeScreenTwo from '../screens/firstTime/FirstTimeScreenTwo';
import FirstTimeScreenThree from '../screens/firstTime/FirstTimeScreenThree';

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Home: undefined;
  FoodDetails: { name: string; image: any; description: string; price: string };
  ForgotPassword: undefined;
  ChangePassord: undefined;
  VerifyCode: undefined;
  PassResetSuccess: undefined;
  SplashScreen: undefined;
  FirstTimeScreenOne: undefined;
  FirstTimeScreenTwo: undefined;
  FirstTimeScreenThree: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FirstTimeScreenOne" component={FirstTimeScreenOne} />
      <Stack.Screen name="FirstTimeScreenTwo" component={FirstTimeScreenTwo} />
      <Stack.Screen
        name="FirstTimeScreenThree"
        component={FirstTimeScreenThree}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="FoodDetails" component={FoodDetailsScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />

      <Stack.Screen name="VerifyCode" component={VerifyCode} />
      <Stack.Screen name="ChangePassord" component={ChangePassord} />
      <Stack.Screen
        name="PassResetSuccess"
        component={PassResetSuccessScreen}
      />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
