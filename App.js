import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import HomeScreen from "./screens/HomeScreen.js";
import ProductOverview from "./screens/ProductOverview.js";
import ProductDetail from "./screens/ProductDetails.js";
import BlogScreen from "./screens/BlogScreen.js";
import BlogDetailScreen from './screens/BlogDetailScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Products" component={ProductOverview} />
      <Tab.Screen name="Blog" component={BlogScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainTabs" component={MainTabs} />
          <Stack.Screen name="Product" component={ProductDetail} />
          <Stack.Screen name="BlogDetail" component={BlogDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}