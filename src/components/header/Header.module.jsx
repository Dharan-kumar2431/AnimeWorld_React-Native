import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        // backgroundColor:Color.MAINCOLOR
      },
      logo: {
        width: 50,
        height: 50,
      },
      titletext: {
        fontSize: 18,
        fontWeight: "bold",
        paddingLeft: 5,
      },
      headerText: {
        fontSize: 18,
        fontWeight: "bold",
      },
      headerIcons: {
        flexDirection: "row",
        alignItems: "center",
      },
      profileIcon: {
        width: 40,
        height: 40,
        borderRadius: 30,
        marginLeft: 10,
      },
})

export default styles;