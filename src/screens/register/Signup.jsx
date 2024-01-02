import React from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./Signup.module";
import img from "../../../assets/logo.png";
import { Color } from "../../misc/Colors";
import Socialmedia from "../../components/socialmedia/Socialmedia";
import Titleofanimeworld from "../../components/title/Titleofanimeworld";

const SignUp = () => {
  return (
    <View style={styles.signupPage}>
      <View>
        <Titleofanimeworld/>
      </View>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.signupHeading}>Sign Up</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="white"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry
          />
          <TouchableOpacity style={styles.signupButton}>
            <Text style={styles.signupButtonText}>Sign Up</Text>
          </TouchableOpacity>

        <View style={styles.diviedlinevertical} />

        <View style={styles.socialMediaContainer}>
            <Socialmedia />
            <View>
              <TouchableOpacity>
                <Text style={styles.signUpText}>
                  Allready have an account?{" "}
                  <Text style={styles.signUpLink}>Login</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </View>

      <View style={styles.termsContainer}>
        <Text style={styles.termsText}>
          By signing up, you agree to our{" "}
          <Text style={styles.termsLink}>Terms and Conditions</Text>.
        </Text>
      </View>
    </View>
  );
};

export default SignUp;
