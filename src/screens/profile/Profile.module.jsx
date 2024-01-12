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
      editProfileIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: "black",
        padding: 10,
        borderRadius: 30,
        zIndex:1
      },
    
      editProfileIconText: {
        color: 'white',
        fontSize: 15,
      },
      userInfo: {
        alignItems: 'center',
        marginBottom: 20,
        flexDirection:"row"
      },
      userName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginLeft:40,
        marginTop:10
      },
      editProfileIconTransparent: {
        backgroundColor: 'transparent',
        marginLeft: 20,
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
      editButtonText: {
        color: 'blue', 
        fontSize: 20,
      },
      saveButtonText: {
        // color: Color.MAINCOLOR,
        color:"black",      
        fontSize: 16,       
        fontWeight: 'bold', 
      },
      editInputContainer:{
        flexDirection:"row"
      },
      editInput:{
        width:330
      },
      editInputWithBorder: {
        borderColor: 'black', // Change this to the color you want for the border
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        width:200
      },
    
});

export default styles;
