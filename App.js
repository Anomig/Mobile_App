import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CartProvider } from './context/CartContext';


import HomeScreen from "./screens/HomeScreen.js";
import ProductOverview from "./screens/ProductOverview.js";
import ProductDetail from "./screens/ProductDetails.js";
import BlogScreen from "./screens/BlogScreen.js";
import BlogDetailScreen from './screens/BlogDetailScreen';
import CartScreen from './screens/CartScreen';
import ContactUs from './screens/ContactUs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeMain" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Product" component={ProductDetail} options={{headerShown: false}} />                                                     
    </Stack.Navigator>
  );
}

function ProductsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProductsMain" component={ProductOverview} options={{ headerShown: false }} />
      <Stack.Screen name="Product" component={ProductDetail} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

function BlogStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BlogMain" component={BlogScreen} options={{ headerShown: false }} />
      <Stack.Screen name="BlogDetail" component={BlogDetailScreen} options={{ headerShown: false}} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Products" component={ProductsStack} />
          <Tab.Screen name="Blog" component={BlogStack} />
          <Tab.Screen name="Cart" component={CartScreen} />
          <Tab.Screen name="Contact" component={ContactUs} />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}