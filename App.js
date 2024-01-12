import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./src/screens/welcome/Welcome";
import Login from "./src/screens/login/Login";
import SignUp from "./src/screens/register/Signup";
import Home from "./src/screens/home/Home";
import Moreanime from "./src/screens/moreanime/Moreanime";
import Playanime from "./src/screens/playanime/Playanime";
import Profile from "./src/screens/profile/Profile";
import Manga from "./src/screens/mangadoc/Manga";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import QuizPage from "./src/screens/games/Animequiz";

const stack = createNativeStackNavigator();

export default function App() {
  const [userData, setUserData] = useState([]);
  const [initialRoute, setInitialRoute] = useState("Welcome");

  useEffect(() => {
    const checkLoginStatus = async () => {
      const storedUserData = await AsyncStorage.getItem("userData");
      const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");

      console.log(storedUserData);
      console.log(isLoggedIn);

      if (isLoggedIn == "true" && storedUserData) {
        setUserData(JSON.parse(storedUserData));
        setInitialRoute("Home");
      }
    };

    checkLoginStatus();
  }, []);

  const handleSignUp = async (newUser) => {
    setUserData([...userData, newUser]);
    try {
      await AsyncStorage.setItem("userData", JSON.stringify([...userData, newUser]));
    } catch (error) {
      console.error("Error storing user data:", error);
    }
  };

  const handleLogin = async (credentials) => {
    const user = userData.find(
      (u) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );

    if (user) {
      try {
        await AsyncStorage.setItem("userData", JSON.stringify(userData));
        await AsyncStorage.setItem("isLoggedIn", "true");
      } catch (error) {
        console.error("Error storing user data:", error);
      }
    }

    return user;
  };

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName={initialRoute}>
        <stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <stack.Screen name="Signup" options={{ headerShown: false }}>
          {(props) => <SignUp {...props} onSignUp={handleSignUp} />}
        </stack.Screen>
        <stack.Screen name="Login" options={{ headerShown: false }}>
          {(props) => <Login {...props} onLogin={handleLogin} />}
        </stack.Screen>
        <stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Moreanime"
          component={Moreanime}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Playanime"
          component={Playanime}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Manga"
          component={Manga}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Quiz"
          component={QuizPage}
          options={{ headerShown: false }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
