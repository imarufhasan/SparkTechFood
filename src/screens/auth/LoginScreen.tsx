import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
// import { useDispatch } from 'react-redux';
// import { setCredentials } from '../../redux/slices/authSlice';
// import { login } from '../../api/authApi';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  //const dispatch = useDispatch();

  const handleLogin = async () => {
    setLoading(true);
    navigation.replace('Home');
    setLoading(false);

    // if (!email || !password) {
    //   Alert.alert('Error', 'Please enter email and password');
    //   return;
    // }

    // try {
    //   setLoading(true);
    //   const data = await login(email, password);
    //   dispatch(setCredentials({ token: data.token, user: data.user }));
    //   setLoading(false);
    //   navigation.replace('Home');
    // } catch (error: any) {
    //   setLoading(false);
    //   Alert.alert(
    //     'Login Failed',
    //     error.response?.data?.message || 'Something went wrong',
    //   );
    // }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholderTextColor={'gray'}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        placeholderTextColor={'gray'}
        secureTextEntry
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Login</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.link}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  link: { color: '#FF6347', marginTop: 15, textAlign: 'center' },
});
