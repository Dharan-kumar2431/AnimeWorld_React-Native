import React, { useState } from "react";
import { Dimensions, Image, View } from "react-native";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styles from "./Carouselslider.module";
import { data } from "../shared/Categoryies";

const Carouselslider = () => {
  const { width: screenWidth } = Dimensions.get("window");
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({ item }) => (
    <View style={styles.featuredContent}>
      <Image
        source={item}
        style={styles.featuredImage}
      />
    </View>
  );

  const pagination = (
    <Pagination
      dotsLength={data.length}
      activeDotIndex={activeSlide}
      containerStyle={{ backgroundColor:"transprant",paddingVertical: 10 }}
      dotStyle={{
          width: 10,
          height: 5,
          borderRadius: 5,
          marginHorizontal: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.92)'
      }}
    //   inactiveDotStyle={{
          
    //   }}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
    />
  );

  return (
    <View>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        loop
        autoplay
        autoplayInterval={2000}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      {pagination}
    </View>
  );
};

export default Carouselslider;
