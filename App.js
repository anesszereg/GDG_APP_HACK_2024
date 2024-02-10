import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import store from "./src/redux/Store/index";
import { Provider } from "react-redux";
import Login from "./src/Screen/Auth/Login";
import Tabs from "./src/Screen/Navigation/Tabs";
import WalkScreen from './src/Screen/WalkScreen/WalkScreen';
import Register from './src/Screen/Auth/Register';
import MentoreHome from './src/Screen/Home/MentoreHome';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={() => ({ headerShown: false })}>

{/* 
          <Stack.Screen name="Walkthrough" component={WalkScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Application" component={Tabs} /> */}
          <Stack.Screen name="MentorHome" component={MentoreHome} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

    
  );
}
