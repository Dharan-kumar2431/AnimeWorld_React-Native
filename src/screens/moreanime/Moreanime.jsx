import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./Moreanime.module";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Moreanime = ({ route, navigation }) => {
  const { animes, categoriesName } = route.params;
  console.log(animes, "animeslist");

  const handleAnimePress = (animeData) => {
    navigation.navigate('Playanime', {anime: animeData});
  }
  return (
    <View style={styles.container}>
      <View>
        <Header />
      </View>
      <View style={{}}>
        <ScrollView>
          <Text style={styles.categoriesname}>{categoriesName}</Text>
          <View style={styles.animesContainer}>
            {animes.map((anime, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleAnimePress(anime)}
                style={styles.animeCard}
              >
                <Image source={anime.image} style={styles.animeImage} />
                <Text style={styles.animeTitle}>{anime.name}</Text>
                <Text numberOfLines={3} style={styles.animeDescription}>
                  {anime.Description}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={{marginBottom: 20}}>
            <Footer />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Moreanime;
