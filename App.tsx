import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IoOptions, IoPencil, IoTrash, IoHome } from "react-icons/io5";
import { FaChartLine, FaPlusCircle } from "react-icons/fa";


import { AddExpense, Login, Reports, Settings } from './screens'; // screens import from index
import { theme } from './theme'; // base pastel colors for app

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar style='dark' />
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Reports" component={Reports} />
        <Tab.Screen name="AddExpense" component={AddExpense} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}