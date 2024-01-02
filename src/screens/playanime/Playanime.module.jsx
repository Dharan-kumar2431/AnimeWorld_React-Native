import { StyleSheet } from "react-native";
import { Color } from "../../misc/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.MAINCOLOR,
  },
  videoPlayer: {
    width: "100%",
    height: 200,
  },
  animeDetailsContainer: {
    padding: 10,
  },
  animeTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  animeDescription: {
    marginTop: 5,
  },
  actionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    // paddingVertical: 15,
  },
  actionButtonWrapper: {
    alignItems: "center",
  },
  actionButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  subscribeButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#FF0000",
  },
  actionButtonIcon: {
    fontSize: 30,
    color: "#333",
  },
  subscribeButtonIcon: {
    fontSize: 30,
    color: "#FFF",
  },
  actionButtonText: {
    marginTop: 5,
    fontSize: 15,
    color: "black",
    fontWeight:"bold"
  },
  recommendedAnimeContainer: {
    marginVertical: 20,
  },
  recommendedAnimeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recommendedAnimeScrollContainer: {
    paddingLeft: 10,
  },
  recommendedAnimeCard: {
    marginRight: 10,
  },
  recommendedAnimeImage: {
    width: 120,
    height: 180,
    borderRadius: 8,
  },
  recommendedAnimeName: {
    marginTop: 5,
    fontSize: 14,
    fontWeight:"bold"
    // textAlign: 'center',
  },
  footerContainer: {
    position:"absolute",
    bottom:0,
    width:"100%"
  },
});

export default styles;
