import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Color } from "../../misc/Colors";
import styles from "./Header.module";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const Header = () => {
  const navigation = useNavigation();
  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleProfilePress = () => {
    navigation.navigate("Profile");
  };

  const handleMenuPress = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleManga = () => {
    navigation.navigate("Manga");
    setMenuVisible(false)
  }

  const handleQuiz = () => {
    navigation.navigate("Quiz");
    setMenuVisible(false)
  }

  const handleSearch = () => {
    navigation.navigate("Search");
    setMenuVisible(false)
  }

  return (
    <View style={styles.header}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={require("../../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.titletext}>
          <Text style={{ color: Color.TITLECOLOR }}>Anime</Text>World
        </Text>
      </View>
      <View style={styles.headerIcons}>
        <TouchableOpacity onPress={handleProfilePress}>
          <Image source={require("../../../assets/profile.jpeg")} style={styles.profileIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMenuPress}>
          <FontAwesome name="bars" size={25} style={{ marginHorizontal: 20 }} />
        </TouchableOpacity>
      </View>
      {isMenuVisible && (
        <View style={styles.menuContainer}>
           <TouchableOpacity onPress={()=> handleSearch()}>
            <Text style={styles.menuItem}>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuItem}>Setting</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuItem}>Your Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> handleManga()}>
            <Text style={styles.menuItem}>Manga</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> handleQuiz()}>
            <Text style={styles.menuItem}>Quiz</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Header;
