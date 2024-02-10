import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Home/Home";

import Ionicons from "react-native-vector-icons/Ionicons";
import Lists from "../Home/Lists";
import Map from "../Home/Map";
import Profile from "../Home/Profile";
import Help from "../Home/Help";
import MentoreHome from "../Home/MentoreHome";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          borderRadius: 25,
          height: 70,
          backgroundColor: "#0066FF",
          elevation: 20,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 20,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        tabBarIcon: ({ focused, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Lists") {
            iconName = focused ? "list" : "list-outline";
          } else if (route.name === "Help") {
            iconName = focused ?"hand-right-sharp": "hand-right-outline"  ;
          } else if (route.name === "Map") {
            iconName = focused ? "map" : "map-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return (
            <View style={styles.icon}>
              <Ionicons name={iconName} size={size} color="#fff" />
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      {/* <Tab.Screen name="Home" component={MentoreHome} /> */}
      <Tab.Screen name="Lists" component={Lists} />
      <Tab.Screen name="Help" component={Help} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 48,
    height: 48,
    borderRadius: 100,
  },
});
