import { Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from "react-native";
import styles from "./Login.module";
import { FontAwesome } from "@expo/vector-icons";
import img from "../../../assets/logo.png";
import { Color } from "../../misc/Colors";
import Socialmedia from "../../components/socialmedia/Socialmedia";
import Titleofanimeworld from "../../components/title/Titleofanimeworld";
import bgimg from "../../../assets/animebg3.png";


const Login = ({navigation}) => {

    const Loginfun = () => {
        navigation.navigate('Home');
    }

    const samplepagefun = () => {
      navigation.navigate('Secondpage');
  }
  return (
    <ImageBackground source={bgimg} style={styles.loginpage} >
       <View>
      <View>
       <Titleofanimeworld/>
      </View>
      <View style={styles.container}>
        <View style={styles.formContainer}>
        <Text style={styles.loginHeading}>Login</Text>
          <TextInput
            style={[styles.input, styles.username]}
            placeholder="Username"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry
          />
          <TouchableOpacity onPress={Loginfun} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.diviedlinevertical} />

          <View style={styles.socialMediaContainer}>
            <Socialmedia />
            <View>
              <TouchableOpacity onPress={samplepagefun}>
                <Text style={styles.signUpText}>
                  Don't have an account?{" "}
                  <Text style={styles.signUpLink}>Sign Up</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.termsContainer}>
        <Text style={styles.termsText}>
          By logging in, you agree to our{" "}
          <Text style={styles.termsLink}>Terms and Conditions</Text>.
        </Text>
      </View>
    </View>
</ImageBackground>
  );
};

export default Login;
