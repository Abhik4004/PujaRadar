import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; // Import your desired icon library
import HomeScreen from "./Screens/HomeScreen";
import PujaPageList from "./Screens/PujaPageList";
import CalenderScreen from "./Screens/CalenderScreen";
import { NavigationContainer } from "@react-navigation/native";
import SubmitScreen from "./Screens/SubmitScreen";

//TODO:1.Home Screen
//TODO:2Photo Upload Screen
//TODO:3Image Details screen
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false, // Remove the header for all screens
          tabBarStyle: {
            backgroundColor: "#FFF3E0", // Set the background color of the tab bar
            borderTopWidth: 0, // Remove the top border
            elevation: 0, // Remove shadow on Android
            height: 60, // Increase height for a more substantial look
          },
          tabBarLabelStyle: {
            fontSize: 14, // Set font size for labels
            marginBottom: 5, // Space between label and icon
            fontWeight: "bold", // Bold label for better visibility
          },
          tabBarActiveTintColor: "#D32F2F", // Active icon and label color
          tabBarInactiveTintColor: "#5D4037", // Inactive icon and label color
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} /> // Add icon for Home
            ),
          }}
        />
        <Tab.Screen
          name="Trending"
          component={PujaPageList}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="flower-outline" size={size} color={color} /> // Add icon for Puja Page
            ),
          }}
        />
        <Tab.Screen
          name="Calender"
          component={CalenderScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="calendar-number-outline"
                size={size}
                color={color}
              /> // Add icon for Calendar
            ),
          }}
        />
        <Tab.Screen
          name="Login"
          component={SubmitScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="log-in-outline" size={size} color={color} /> // Add icon for Submit (Login)
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
