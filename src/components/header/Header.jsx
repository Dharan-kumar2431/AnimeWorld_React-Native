import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native"
import { Color } from "../../misc/Colors";
import styles from "./Header.module";
import { useNavigation } from "@react-navigation/native";


const Header = () => {
  const navagation = useNavigation()
  const handleProfilePress = () => {
    navagation.navigate("Profile")
  }
    return(
        <View style={styles.header}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../../assets/logo.png")}
              style={styles.logo}
            />
            <Text style={styles.titletext}>
              <Text style={{ color: Color.TITLECOLOR }}>Anime</Text>World
            </Text>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity onPress={handleProfilePress}>
            <Image
              source={require("../../../assets/profile.jpeg")}
              style={styles.profileIcon}
            />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name="bars" size={25} style={{ marginHorizontal: 20 }} />
            </TouchableOpacity>
          </View>
        </View>
    )
}

export default Header;