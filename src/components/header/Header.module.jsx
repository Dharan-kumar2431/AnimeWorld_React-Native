import { StyleSheet } from "react-native";
import { Color } from "../../misc/Colors";

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
      menuContainer: {
        position: "absolute",
        top: 70,
        right: 0,
        backgroundColor: "white",
        // borderRadius: 8,
        padding: 10,
        elevation: 5,
        zIndex:1
      },
      menuItem: {
        padding: 10,
        fontSize: 16,
        color: Color.TEXTCOLOR,
      },
})

export default styles;