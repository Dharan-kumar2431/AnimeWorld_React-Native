import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./Profile.module";
import { useState } from "react";
import { categoriesData } from "../../components/shared/Categoryies";
import { FontAwesome } from "@expo/vector-icons";

const Profile = ({navigation}) => {
  const [showEmailDetails, setShowEmailDetails] = useState(false);
  const [showWatchlistDetails, setShowWatchlistDetails] = useState(false);
  const [showFavoriteListDetails, setShowFavoriteListDetails] = useState(false);
  const [showPhoneNumberDetails, setShowPhoneNumberDetails] = useState(false);

  const toggleEmailDetails = () => {
    setShowEmailDetails(!showEmailDetails);
  };

  const toggleWatchlistDetails = () => {
    setShowWatchlistDetails(!showWatchlistDetails);
  };

  const toggleFavoriteListDetails = () => {
    setShowFavoriteListDetails(!showFavoriteListDetails);
  };

  const togglePhoneNumberDetails = () => {
    setShowPhoneNumberDetails(!showPhoneNumberDetails);
  };

  const handleAnimePress = (animeData) => {
    navigation.navigate('Playanime', {anime: animeData});
  }

  const handleMorePress = (animesData,catName) => {
    navigation.navigate('Moreanime',{animes: animesData, categoriesName: catName});
  }

  return (
   <ScrollView>
     <View style={styles.container}>
      <View style={styles.profile}>
      <View style={styles.profileImageContainer}>
        <Image
          source={require("../../../assets/profile.jpeg")}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>Dharani Kumar V</Text>
      </View>
      </View>

      <View>
        <TouchableOpacity
          onPress={toggleEmailDetails}
          style={styles.detailsContainer}
        >
          <Text style={styles.detailsTitle}>Email</Text>
          <Text style={styles.arrows}>{showEmailDetails ? "▲" : "▼"}</Text>
        </TouchableOpacity>

        {showEmailDetails && (
          <View style={styles.additionalDetails}>
            <Text>Email: example@example.com</Text>
          </View>
        )}

        <TouchableOpacity
          onPress={toggleWatchlistDetails}
          style={styles.detailsContainer}
        >
          <Text style={styles.detailsTitle}>Watchlist</Text>
          <Text style={styles.arrows}>{showWatchlistDetails ? "▲" : "▼"}</Text>
        </TouchableOpacity>

        {showWatchlistDetails && (
          <View style={{ marginHorizontal: 15,marginBottom:20 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categoriesData.map((category) => (
              <TouchableOpacity
                style={styles.categoryCard}
                key={category.id}
                onPress={() => handleAnimePress(category)}
              >
                <Image source={category.image} style={styles.categoryImage} />
                <Text style={styles.categoryName}>{category.name}</Text>
              </TouchableOpacity>
            ))}
            <View style={styles.moreoptiondiv}>
            <TouchableOpacity
              style={styles.moreIcon}
              onPress={() => handleMorePress(categoriesData,"Watch List")}
            >
              <FontAwesome name="chevron-right" style={styles.moreText} />
            </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        )}

        <TouchableOpacity
          onPress={toggleFavoriteListDetails}
          style={styles.detailsContainer}
        >
          <Text style={styles.detailsTitle}>Favorite List</Text>
          <Text style={styles.arrows}>{showFavoriteListDetails ? "▲" : "▼"}</Text>
        </TouchableOpacity>

        {showFavoriteListDetails && (
         <View style={{ marginHorizontal: 15,marginBottom:20 }}>
         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
           {categoriesData.map((category) => (
             <TouchableOpacity
               style={styles.categoryCard}
               key={category.id}
               onPress={() => handleAnimePress(category)}
             >
               <Image source={category.image} style={styles.categoryImage} />
               <Text style={styles.categoryName}>{category.name}</Text>
             </TouchableOpacity>
           ))}
           <View style={styles.moreoptiondiv}>
           <TouchableOpacity
             style={styles.moreIcon}
             onPress={() => handleMorePress(categoriesData,"Watch List")}
           >
             <FontAwesome name="chevron-right" style={styles.moreText} />
           </TouchableOpacity>
           </View>
         </ScrollView>
       </View>
        )}

        <TouchableOpacity
          onPress={togglePhoneNumberDetails}
          style={styles.detailsContainer}
        >
          <Text style={styles.detailsTitle}>Phone Number</Text>
          <Text style={styles.arrows}>{showPhoneNumberDetails ? "▲" : "▼"}</Text>
        </TouchableOpacity>

        {showPhoneNumberDetails && (
          <View style={styles.additionalDetails}>
            <Text>Phone Number: 6374810236</Text>
          </View>
        )}
      </View>
    </View>
   </ScrollView>
  );
};

export default Profile;
