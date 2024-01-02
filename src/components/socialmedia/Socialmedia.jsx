import { TouchableOpacity, View } from "react-native";
import styles from "./Socialmedia.module";
import Icon from "@expo/vector-icons/FontAwesome";



const Socialmedia = () => {
    return(
        <View style={{flexDirection:"row"}}>
            <TouchableOpacity style={styles.iconContainer}>
              <View style={styles.circle}>
                <Icon name="facebook" size={30} color="#1877f2" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconContainer}>
              <View style={styles.circle}>
                <Icon name="twitter" size={30} color="#1da1f2" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconContainer}>
              <View style={styles.circle}>
                <Icon name="google" size={30} color="#db4a39" />
              </View>
            </TouchableOpacity>
        </View>
    )
}

export default Socialmedia;