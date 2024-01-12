import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, ImageBackground, Alert, Vibration } from 'react-native';
import { useFormik } from 'formik';
import axios from 'axios'; // Import Axios
import styles from './Login.module';
import Titleofanimeworld from '../../components/title/Titleofanimeworld';
import Socialmedia from '../../components/socialmedia/Socialmedia';
import bgimg from '../../../assets/animebg3.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation, onLogin }) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {

      // try {
      //   const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
      //     username: values.username,
      //     password: values.password,
      //   });
      //   console.log(response,"data")
      //   if (response.status === 200) {
      //     console.log('Login successful!');
      //     navigation.navigate('Home');
      //   } else {
      //     console.error('Login failed');
      //     Alert.alert('Login failed', 'Please check your credentials and try again.');
      //   }
      // } catch (error) {
      //   console.error('Login error', error);
      //   Alert.alert('Login error', 'An error occurred while trying to log in. Please try again later.');
      // }

      const user = onLogin(values);
      if (user) {
        console.log('Login successful!');
        Vibration.vibrate([100, 400, 100, 400]);
        navigation.navigate('Home');
      } else {
        console.error('Login failed');
        Alert.alert('Login failed', 'Please check your credentials and try again.');
      }
    },
  });

  const samplepagefun = () => {
    navigation.navigate('Secondpage');
  };

  return (
    <ImageBackground source={bgimg} style={styles.loginpage}>
      <View>
        <View>
          <Titleofanimeworld />
        </View>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <Text style={styles.loginHeading}>Login</Text>
            <TextInput
              style={[styles.input, styles.username]}
              placeholder="Username"
              placeholderTextColor="white"
              onChangeText={formik.handleChange('username')}
              onBlur={formik.handleBlur('username')}
              value={formik.values.username}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="white"
              secureTextEntry
              onChangeText={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')}
              value={formik.values.password}
            />
            <TouchableOpacity onPress={formik.handleSubmit} style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.diviedlinevertical} />

            <View style={styles.socialMediaContainer}>
              <Socialmedia />
              <View>
                <TouchableOpacity onPress={samplepagefun}>
                  <Text style={styles.signUpText}>
                    Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            By logging in, you agree to our <Text style={styles.termsLink}>Terms and Conditions</Text>.
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;
