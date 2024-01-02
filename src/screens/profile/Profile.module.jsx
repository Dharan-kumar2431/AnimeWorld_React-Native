import { StyleSheet } from "react-native";
import { Color } from "../../misc/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.MAINCOLOR,
      },
      profile:{
        alignItems: 'center',
      },
      profileImageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 30,
        overflow: 'hidden',
      },
      profileImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
      userInfo: {
        alignItems: 'center',
        marginBottom: 20,
      },
      userName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
      },
      detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#ddd',
        justifyContent:"space-between",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
      },
      arrows:{
        // marginLeft:220
      },
      detailsTitle: {
        fontSize: 18,
        color: 'black',
      },
      additionalDetails: {
        width: '100%',
        backgroundColor: '#eee',
        padding: 10,
        borderRadius: 5,
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
});

export default styles;
