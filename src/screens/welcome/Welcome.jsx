import {
  Image,
  StatusBar,
  Text,
  View,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native";
import styles from "./Welcome.module";
import { Color } from "../../misc/Colors";
import bgimg from "../../../assets/animebg3.png";
import img from "../../../assets/logo.png";
import { LinearGradient } from "expo-linear-gradient";
import Socialmedia from "../../components/socialmedia/Socialmedia";
import Titleofanimeworld from "../../components/title/Titleofanimeworld";

const Welcome = ({ navigation }) => {
  const Loginfun = () => {
    navigation.navigate("Login");
  };

  const signupfun = () => {
    navigation.navigate("Signup");
  };

  return (
    <>
      <StatusBar />
      {/* <ImageBackground source={bgimg} style={styles.container}> */}
        <View style={styles.container}>
          <View>
            <Titleofanimeworld />
          </View>
          <View style={styles.heading}>
            <View>
              <View style={styles.minititle}>
              <Image source={img} alt="No image" style={styles.titleslogo} />
              <Text style={styles.titlename}>AnimeWorld</Text>
              </View>     
              <View style={styles.linehorizontal} />
              <View>
                <Text style={styles.storedata}>WelcomeTo</Text>
              </View>
              <View style={{ marginTop: -25 }}>
                <Text style={styles.ultimately}>AnimeWorld</Text>
              </View>
              <View style={styles.linevertical} />
              <View style={{flexDirection:"row",marginLeft: 210,}}>
              <Image source={img} alt="No image" style={styles.titleslogo} />
              <Text
                style={{
                  color: Color.TITLECOLOR,
                  fontWeight: "bold",
                }}
              >
                AnimeWorld
              </Text>
              </View>
            </View>
          </View>

          <View style={{ marginVertical: 120 }}>
            <TouchableOpacity onPress={Loginfun} style={styles.buttonContainer}>
              <LinearGradient
                colors={["#00c6ff", "#9733EE"]}
                style={styles.gradient}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styles.buttonText}>Login</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={signupfun}
              style={styles.buttonContainer}
            >
              <LinearGradient
                colors={["#00c6ff", "#9733EE"]}
                style={styles.gradient}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styles.buttonText}>Sign In</Text>
              </LinearGradient>
            </TouchableOpacity>
            <View style={styles.diviedlinevertical} />

            <View style={{ marginLeft: 75 }}>
              <Socialmedia />
            </View>

            <View>
              <Text
                style={{ marginHorizontal: 120, fontSize: 12, color: "white" }}
              >
                @login with social media
              </Text>
            </View>
          </View>
        </View>
      {/* </ImageBackground> */}
    </>
  );
};

export default Welcome;
