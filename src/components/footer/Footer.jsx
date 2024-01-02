import { Text, View } from "react-native";
import styles from "./Footer.module";

const Footer = () => {
    
    return (
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>© 2023 AnimeWorld. All Rights Reserved.</Text>
      </View>
    );
  };
  
  export default Footer;