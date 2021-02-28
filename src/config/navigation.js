import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import MainLogin from '../screens/MainLogin';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MainLogin" component={MainLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;