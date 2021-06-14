import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FortuneCookieScreen from '../screens/FortuneCookieScreen';
import StopwatchScreen from '../screens/StopwatchScreen';
import PomodoroScreen from '../screens/PomodoroScreen';
import TasksScreen from '../screens/TasksScreen';
import PasswordGenerator from '../screens/PasswordGenerator';
import NewsScreen from '../screens/NewsScreen';

const Stack = createStackNavigator();

function AppStack() {
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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
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

export default AppStack;
