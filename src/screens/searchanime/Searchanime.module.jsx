import { StyleSheet } from "react-native";
import { Color } from "../../misc/Colors";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    searchBarContainer: {
      backgroundColor: 'transparent',
      borderBottomColor: 'transparent',
      borderTopColor: 'transparent',
    },
    inputContainer: {
      backgroundColor: '#e0e0e0',
    },
    resultItem:{
        flexDirection:"row",
        marginLeft:10,
    },
    countryName:{
        fontSize: 18,
        fontWeight:"bold",
        // color: Color.MAINCOLOR
        color:"green"
    }
  });

export default styles