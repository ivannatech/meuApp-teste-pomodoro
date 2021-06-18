import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FortuneCookieScreen from '../screens/FortuneCookieScreen';
import StopwatchScreen from '../screens/StopwatchScreen';
import PomodoroScreen from '../screens/PomodoroScreen';
import TasksScreen from '../screens/TasksScreen';
import PasswordGenerator from '../screens/PasswordGenerator';
import NewsScreen from '../screens/NewsScreen';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#003400"
      barStyle={{ backgroundColor: '#006400' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#006400',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Home" component={MainTab} />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
        <Stack.Screen
          name="Biscoito da Sorte"
          component={FortuneCookieScreen}
        />
        <Stack.Screen name="Cronômetro" component={StopwatchScreen} />
        <Stack.Screen name="Pomodoro" component={PomodoroScreen} />
        <Stack.Screen name="Tarefas" component={TasksScreen} />
        <Stack.Screen name="Gerador de Senhas" component={PasswordGenerator} />
        <Stack.Screen name="Notícias" component={NewsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
