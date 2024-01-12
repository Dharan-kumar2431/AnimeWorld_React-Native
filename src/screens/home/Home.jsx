import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./Home.module";
import {
  categoriesData,
  top10Data,
  trendingNowData,
} from "../../components/shared/Categoryies";
import { FontAwesome } from "@expo/vector-icons";
import { Color } from "../../misc/Colors";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Carousel from "react-native-snap-carousel";
import Carouselslider from "../../components/carouselslider/Carouselslider";
import Manga from "../mangadoc/Manga";

const Home = ({navigation}) => {

  const handleAnimePress = (animeData) => {
    navigation.navigate('Playanime', {anime: animeData});
  }

  const handleMorePress = (animesData,catName) => {
    navigation.navigate('Moreanime',{animes: animesData, categoriesName: catName});
  }


  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Header/>
        </View>
        <View style={styles.featuredContent}>
          {/* <Image
            source={require("../../../assets/anime_world.jpg")}
            style={styles.featuredImage}
          /> */}
          {/* <Text style={styles.featuredText}>Featured Content</Text> */}
          <Carouselslider/>
        </View>
        <View style={styles.categories}>
          <Text style={styles.categoryTitle}>Popular Categories</Text>
          <View style={{ marginHorizontal: 15 }}>
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
                onPress={() => handleMorePress(categoriesData,"Popular Categories")}
              >
                <FontAwesome name="chevron-right"  style={styles.moreText} />
              </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>

        <View style={styles.top10Section}>
          <Text style={styles.top10Title}>Top 10</Text>
          <View style={{ marginHorizontal: 15 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {top10Data.map((top10Item, index) => (
                <TouchableOpacity
                  style={styles.top10Item}
                  key={top10Item.id}
                  onPress={() => handleAnimePress(top10Item)}
                >
                  <Image
                    source={top10Item.image}
                    style={styles.top10ItemImage}
                  />
                  <View style={styles.top10ItemOverlay}>
                    <Text style={styles.top10ItemNumber}>{index + 1}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>

        <View style={styles.trendingNow}>
          <Text style={styles.trendingTitle}>Trending Now</Text>
          <View style={{ marginHorizontal: 15 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {trendingNowData.map((trendingItem) => (
                <TouchableOpacity
                  style={styles.trendingCard}
                  key={trendingItem.id}
                  onPress={() => handleAnimePress(trendingItem)}
                >
                  <Image
                    source={trendingItem.image}
                    style={styles.trendingImage}
                  />
                  <Text style={styles.trendingName}>{trendingItem.name}</Text>
                </TouchableOpacity>
              ))}
              <View style={styles.moreoptiondiv}>
              <TouchableOpacity
                style={styles.moreIcon}
                onPress={() => handleMorePress(trendingNowData,"Trending Now")}
              >
                <FontAwesome name="chevron-right" style={styles.moreText} />
              </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>

        <View>
          <Footer/>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
