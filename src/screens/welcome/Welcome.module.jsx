import { StyleSheet } from "react-native";
import { Color } from "../../misc/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Color.MAINCOLOR
  },
  heading: {
    alignItems: "center",
    marginTop: 100,
  },
  titleslogo:{
    width:20,
    height:20
  },
  minititle:{
    flexDirection:"row",
    transform: [{ rotate: "-90deg" }],
    width: 80,
    marginLeft: 0,
    marginBottom: 5,
  },
  titlename: {
    fontWeight: "bold",
    color: Color.TITLECOLOR,
  },
  storedata: {
    fontSize: 40,
    marginLeft: 70,
    marginTop: -70,
    fontWeight: "bold",
    fontStyle:"italic",
  },
  ultimately:{
    fontSize:18,
    marginLeft:200,
    color:Color.TITLECOLOR
  },
  linevertical: {
    width: 310,
    marginTop: 30,
    borderWidth: 1,
    borderColor: "white",
  },
  linehorizontal: {
    width: 150,
    transform: [{ rotate: "-90deg" }],
    borderWidth: 1,
    marginLeft: -20,
    borderColor: "white",
    marginBottom:10
  },
  buttonContainer: {
    width:180,
    marginVertical: 15,
    borderRadius: 5,
    overflow: 'hidden',
    marginHorizontal:110,
    
  },
  gradient: {
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  diviedlinevertical:{
    width: 300,
    borderWidth: 1,
    borderColor: "white",
    marginLeft:50
  },
});

export default styles;
