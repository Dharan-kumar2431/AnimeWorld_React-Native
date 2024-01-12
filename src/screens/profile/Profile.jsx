import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./Profile.module";
import { useState } from "react";
import { categoriesData } from "../../components/shared/Categoryies";
import { FontAwesome } from "@expo/vector-icons";
import { Color } from "../../misc/Colors";

const Profile = ({ navigation }) => {
  const [showEmailDetails, setShowEmailDetails] = useState(false);
  const [showWatchlistDetails, setShowWatchlistDetails] = useState(false);
  const [showFavoriteListDetails, setShowFavoriteListDetails] = useState(false);
  const [showPhoneNumberDetails, setShowPhoneNumberDetails] = useState(false);

  const [email, setEmail] = useState("example@example.com");
  const [phoneNumber, setPhoneNumber] = useState("6374810236");
  const [profileName, setProfileName] = useState("Dharani Kumar V");

  const [editEmail, setEditEmail] = useState(false);
  const [editPhoneNumber, setEditPhoneNumber] = useState(false);
  const [editProfileName, setEditProfileName] = useState(false);

  const toggleEmailDetails = () => {
    setShowEmailDetails(!showEmailDetails);
  };

  const togglePhoneNumberDetails = () => {
    setShowPhoneNumberDetails(!showPhoneNumberDetails);
  };

  const handleEditEmail = () => {
    setEditEmail(!editEmail);
  };

  const toggleWatchlistDetails = () => {
    setShowWatchlistDetails(!showWatchlistDetails);
  };

  const toggleFavoriteListDetails = () => {
    setShowFavoriteListDetails(!showFavoriteListDetails);
  };

  const handleEditProfileName = () => {
    setEditProfileName(!editProfileName);
  };

  const handleEditPhoneNumber = () => {
    setEditPhoneNumber(!editPhoneNumber);
  };

  const handleAnimePress = (animeData) => {
    navigation.navigate("Playanime", { anime: animeData });
  };

  const handleMorePress = (animesData, catName) => {
    navigation.navigate("Moreanime", {
      animes: animesData,
      categoriesName: catName,
    });
  };

  return (
   <View style={{flex:1,backgroundColor: Color.MAINCOLOR}}>
     <ScrollView>
      <View style={styles.container}>
        <View style={styles.profile}>
          <View>
          <View style={styles.profileImageContainer}>
            <Image
              source={require("../../../assets/profile.jpeg")}
              style={styles.profileImage}
            />
          </View>
          <TouchableOpacity style={styles.editProfileIcon}>
            <FontAwesome name="pencil" style={styles.editProfileIconText} />
          </TouchableOpacity>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>
              {editProfileName ? (
                <View style={{flexDirection:"row"}}>
                  <TextInput
                    style={[styles.editInputWithBorder]}
                    value={profileName}
                    onChangeText={(text) => setProfileName(text)}
                  />
                  <TouchableOpacity
                    style={styles.saveButtons}
                    onPress={handleEditProfileName}
                  >
                    <Text style={{marginTop:10,marginLeft:20,color:"white",paddingHorizontal:20, backgroundColor:"blue"}}>Save</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={{ flexDirection: "row" }}>
                  <Text>{profileName}</Text>
                  <TouchableOpacity
                    style={styles.editButton}
                    onPress={handleEditProfileName}
                  >
                    <View style={{ marginLeft: 20 }}>
                      <FontAwesome name="edit" style={styles.editButtonText} />
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            </Text>
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
              {editEmail ? (
                <View style={styles.editInputContainer}>
                  <TextInput
                    style={styles.editInput}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                  />
                  <TouchableOpacity
                    style={styles.saveButton}
                    onPress={handleEditEmail}
                  >
                    <Text style={styles.saveButtonText}>Save</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ width: 350 }}>Email: {email}</Text>
                  <TouchableOpacity
                    style={styles.editButton}
                    onPress={handleEditEmail}
                  >
                    <View>
                      <FontAwesome
                        name="edit"
                        size={20}
                        style={styles.editButtonText}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          )}

          <TouchableOpacity
            onPress={toggleWatchlistDetails}
            style={styles.detailsContainer}
          >
            <Text style={styles.detailsTitle}>Watchlist</Text>
            <Text style={styles.arrows}>
              {showWatchlistDetails ? "▲" : "▼"}
            </Text>
          </TouchableOpacity>

          {showWatchlistDetails && (
            <View style={{ marginHorizontal: 15, marginBottom: 20 }}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categoriesData.map((category) => (
                  <TouchableOpacity
                    style={styles.categoryCard}
                    key={category.id}
                    onPress={() => handleAnimePress(category)}
                  >
                    <Image
                      source={category.image}
                      style={styles.categoryImage}
                    />
                    <Text style={styles.categoryName}>{category.name}</Text>
                  </TouchableOpacity>
                ))}
                <View style={styles.moreoptiondiv}>
                  <TouchableOpacity
                    style={styles.moreIcon}
                    onPress={() =>
                      handleMorePress(categoriesData, "Watch List")
                    }
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
            <Text style={styles.arrows}>
              {showFavoriteListDetails ? "▲" : "▼"}
            </Text>
          </TouchableOpacity>

          {showFavoriteListDetails && (
            <View style={{ marginHorizontal: 15, marginBottom: 20 }}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categoriesData.map((category) => (
                  <TouchableOpacity
                    style={styles.categoryCard}
                    key={category.id}
                    onPress={() => handleAnimePress(category)}
                  >
                    <Image
                      source={category.image}
                      style={styles.categoryImage}
                    />
                    <Text style={styles.categoryName}>{category.name}</Text>
                  </TouchableOpacity>
                ))}
                <View style={styles.moreoptiondiv}>
                  <TouchableOpacity
                    style={styles.moreIcon}
                    onPress={() =>
                      handleMorePress(categoriesData, "Watch List")
                    }
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
            <Text style={styles.arrows}>
              {showPhoneNumberDetails ? "▲" : "▼"}
            </Text>
          </TouchableOpacity>

          {showPhoneNumberDetails && (
            <View style={styles.additionalDetails}>
              {editPhoneNumber ? (
                <View style={styles.editInputContainer}>
                  <TextInput
                    style={styles.editInput}
                    value={phoneNumber}
                    onChangeText={(text) => setPhoneNumber(text)}
                  />
                  <TouchableOpacity
                    style={styles.saveButton}
                    onPress={handleEditPhoneNumber}
                  >
                    <View>
                      <Text style={styles.saveButtonText}>Save</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ width: 350 }}>
                    Phone Number: {phoneNumber}
                  </Text>
                  <TouchableOpacity
                    style={styles.editButton}
                    onPress={handleEditPhoneNumber}
                  >
                    <View>
                      <FontAwesome name="edit" style={styles.editButtonText} />
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          )}
        </View>
      </View>
    </ScrollView>
   </View>
  );
};

export default Profile;
