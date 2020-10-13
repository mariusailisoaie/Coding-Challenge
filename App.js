import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from "@expo/vector-icons"


import MainScreen from "./src/screens/MainScreen"
import ProfileScreen from "./src/screens/ProfileScreen"
import ParkingDetailsScreen from './src/screens/ParkingDetailsScreen'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const Home = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName

        if (route.name === "Main Screen") {
          iconName = "ios-map"
        } else if (route.name === "Profile") {
          iconName = "ios-information-circle"
        }

        return <Ionicons name={iconName} size={size} color={color} />
      },
    })}
    tabBarOptions={{
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
    }}
  >
    <Tab.Screen name="Main Screen" component={MainScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ParkingDetailsScreen" component={ParkingDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}