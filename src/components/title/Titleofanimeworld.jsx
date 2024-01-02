import { Image, Text, View } from "react-native"
import styles from "./Titleofanimeworld.module";
import img from "../../../assets/logo.png";
import { Color } from "../../misc/Colors";


const Titleofanimeworld = () => {
    return(
        <View style={styles.title}>
          <Image source={img} alt="No image" style={styles.titlelogo} />
          <Text style={styles.titletext}>
            <Text style={{ color: Color.TITLECOLOR }}>Anime</Text>World
          </Text>
        </View>
    )
}

export default Titleofanimeworld;