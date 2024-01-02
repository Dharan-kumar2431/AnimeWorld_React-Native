import { StyleSheet } from "react-native";
import { Color } from "../../misc/Colors";

const styles = StyleSheet.create({
  loginpage: {
    flex: 1,
    // backgroundColor: "blue",
  },
  title: {
    marginTop: 50,
    alignItems: "center",
  },
  titlelogo: {
    width: 100,
    height: 100,
  },
  titletext: {
    fontSize: 30,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  container: {
    alignItems: "center",
    marginTop: 80
  },
  formContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 10,
    padding: 16,
    width: "80%",
  },
  loginHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
    textAlign: 'center',
  },
  username:{
    marginTop: 5
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: Color.TITLECOLOR,
    height: 40,
    color: Color.TITLECOLOR,
    marginBottom: 16,
    paddingHorizontal: 15
  },
  loginButton: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 30
  },
  loginButtonText: {
    color: Color.TITLECOLOR,
    fontSize: 16,
    fontWeight: "bold",
  },
  diviedlinevertical:{
    width: 275,
    borderWidth: 1,
    borderColor: "white",
    marginTop: 20
  },
  socialMediaContainer: {
    marginTop: 16,
    marginLeft:20
  },
  signUpText: {
    color: "white",
    fontSize: 14,
    marginTop: 16,
    textAlign: "center",
  },
  signUpLink: {
    textDecorationLine: "underline",
    fontWeight: "bold",
    color:"blue"
  },
  termsContainer: {
    marginTop: 50,
  },
  termsText: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
  },
  termsLink: {
    color: Color.TITLECOLOR,
    textDecorationLine: "underline",
  },
});

export default styles;
