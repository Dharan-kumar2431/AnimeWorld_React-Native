import { StyleSheet } from "react-native";
import { Color } from "../../misc/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MAINCOLOR,
        paddingBottom:50
      },
      categoriesname:{
        fontSize:20,
        fontWeight:"bold",
        color: Color.TITLECOLOR,
        padding:10
      },
      animesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding:10
      },
      animeCard: {
        width: '48%',
        marginBottom: 15,
        borderColor: Color.TITLECOLOR,
        borderWidth: 1,
        borderRadius: 10,
        overflow: 'hidden',
      },
      animeImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
      },
      animeTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical:10,
        marginHorizontal: 5,
        // color: Color.TITLECOLOR
      },
      animeDescription: {
        marginHorizontal: 10,
        marginBottom: 10,
        // color: Color.TITLECOLOR
      },
})

export default styles;