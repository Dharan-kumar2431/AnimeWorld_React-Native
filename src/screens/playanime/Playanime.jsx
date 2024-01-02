import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./Playanime.module";
import { Video } from "expo-av";
import { recommendedAnime } from "../../components/shared/Categoryies";
import Footer from "../../components/footer/Footer";
import { FontAwesome } from "@expo/vector-icons";
import Header from "../../components/header/Header";

const Playanime = ({ route, navigation }) => {
  const { anime } = route.params;
  console.log(anime, "play anime");

  const handleAnimePress = (animeData) => {
    navigation.navigate('Playanime', {anime: animeData});
  }

  return (
    <View style={styles.container}>
      <View>
        <Header/>
      </View>
      <ScrollView>
        <Video
          source={{
            uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          }}
          style={styles.videoPlayer}
          useNativeControls
          resizeMode="cover"
        />

        <View style={styles.animeDetailsContainer}>
          <Text style={styles.animeTitle}>{anime.name}</Text>
          <Text numberOfLines={3} style={styles.animeDescription}>
            {anime.Description}
          </Text>
        </View>

        <View style={styles.actionButtonsContainer}>
          <View style={styles.actionButtonWrapper}>
            <TouchableOpacity style={styles.actionButton}>
              <FontAwesome name="thumbs-up" style={styles.actionButtonIcon} />
            </TouchableOpacity>
            <Text style={styles.actionButtonText}>Like</Text>
          </View>

          <View style={styles.actionButtonWrapper}>
            <TouchableOpacity style={styles.actionButton}>
              <FontAwesome name="share" style={styles.actionButtonIcon} />
            </TouchableOpacity>
            <Text style={styles.actionButtonText}>Share</Text>
          </View>

          <View style={styles.actionButtonWrapper}>
            <TouchableOpacity style={styles.actionButton}>
              <FontAwesome name="bell" style={styles.actionButtonIcon} />
            </TouchableOpacity>
            <Text style={styles.actionButtonText}>Subscribe</Text>
          </View>
        </View>

        <View style={styles.recommendedAnimeContainer}>
          <Text style={styles.recommendedAnimeTitle}>Recommended Anime</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.recommendedAnimeScrollContainer}
          >
            {recommendedAnime.map((recommended, index) => (
              <TouchableOpacity onPress={() => handleAnimePress(recommended)} style={styles.recommendedAnimeCard} key={index}>
                <Image
                  source={recommended.image}
                  style={styles.recommendedAnimeImage}
                />
                <Text style={styles.recommendedAnimeName}>
                  {recommended.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </View>
  );
};

export default Playanime;
