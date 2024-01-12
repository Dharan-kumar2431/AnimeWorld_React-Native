import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useFormik } from 'formik';
import axios from 'axios';
import styles from './Signup.module';
import Titleofanimeworld from '../../components/title/Titleofanimeworld';
import Socialmedia from '../../components/socialmedia/Socialmedia';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({navigation, onSignUp}) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      console.log(values);
      onSignUp(values);

      navigation.navigate('Login');
    },
  });

  return (
    <View style={styles.signupPage}>
      <View>
        <Titleofanimeworld />
      </View>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.signupHeading}>Sign Up</Text>
          <TextInput
            style={styles.input}
            placeholder="User Name"
            placeholderTextColor="white"
            onChangeText={formik.handleChange('username')}
            onBlur={formik.handleBlur('username')}
            value={formik.values.username}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="white"
            keyboardType="email-address"
            onChangeText={formik.handleChange('email')}
            onBlur={formik.handleBlur('email')}
            value={formik.values.email}
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
          <TouchableOpacity onPress={formik.handleSubmit} style={styles.signupButton}>
            <Text style={styles.signupButtonText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.diviedlinevertical} />

          <View style={styles.socialMediaContainer}>
            <Socialmedia />
            <View>
              <TouchableOpacity>
                <Text style={styles.signUpText}>
                  Already have an account? <Text style={styles.signUpLink}>Login</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.termsContainer}>
        <Text style={styles.termsText}>
          By signing up, you agree to our <Text style={styles.termsLink}>Terms and Conditions</Text>.
        </Text>
      </View>
    </View>
  );
};

export default SignUp;
