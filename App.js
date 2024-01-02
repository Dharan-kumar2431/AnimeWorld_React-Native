import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/screens/welcome/Welcome';
import Login from './src/screens/login/Login';
import SignUp from './src/screens/register/Signup';
import Home from './src/screens/home/Home';
import Moreanime from './src/screens/moreanime/Moreanime';
import Playanime from './src/screens/playanime/Playanime';
import Profile from './src/screens/profile/Profile';

const stack = createNativeStackNavigator()

export default function App() {
  return (
   <NavigationContainer>
    <stack.Navigator initialRouteName='Welcome'>
      <stack.Screen name='Welcome' component={Welcome} options={{headerShown: false}} />
      <stack.Screen name='Login' component={Login} options={{headerShown: false}} />
      <stack.Screen name='Signup' component={SignUp} options={{headerShown: false}} />
      <stack.Screen name='Home' component={Home} options={{headerShown: false}} />
      <stack.Screen name='Moreanime' component={Moreanime} options={{headerShown: false}} />
      <stack.Screen name='Playanime' component={Playanime} options={{headerShown: false}} />
      <stack.Screen name='Profile' component={Profile} options={{headerShown: false}} />
    </stack.Navigator>
   </NavigationContainer>
  );
}
