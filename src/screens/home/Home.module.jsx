import { StyleSheet } from "react-native";
import { Color } from "../../misc/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.MAINCOLOR,
  },
  featuredContent: {
    // marginVertical: 10,
  },
  featuredImage: {
    width: "100%",
    height: 200,
  },
  featuredText: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    marginLeft: 10,
  },
  categories: {
    marginVertical: 10,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 10,
  },
  categoryCard: {
    marginRight: 10,
  },
  categoryImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  categoryName: {
    fontSize: 16,
    marginTop: 5,
  },
  moreoptiondiv:{
    justifyContent:"center",
    marginTop:-30
  },
  moreIcon: {
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  moreText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Color.TITLECOLOR,
  },
  trendingNow: {
    marginVertical: 10,
  },
  trendingTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 10,
  },
  trendingCard: {
    marginRight: 10,
  },
  trendingImage: {
    width: 160,
    height: 200,
    borderRadius: 10,
  },
  trendingName: {
    fontSize: 16,
    marginTop: 5,
  },
  top10Section: {
    marginVertical: 10,
  },
  top10Title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 10,
  },
  top10Item: {
    marginRight: 20,
  },
  top10ItemImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    position: "relative",
  },
  top10ItemOverlay: {
    ...StyleSheet.absoluteFillObject,
    // justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop:66,
  },
  top10ItemNumber: {
    fontSize: 50,
    fontWeight: "bold",
    color: Color.TITLECOLOR, 
    marginRight:-15
  },
});

export default styles;
