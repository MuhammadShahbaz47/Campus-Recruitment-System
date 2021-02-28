import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainLogin from '../screens/MainLogin';
import loginOptions from '../screens/loginOptions';
import CompanyPage from '../screens/CompanyPage';
import StudentPage from '../screens/StudentPage';
import AdminPage from '../screens/AdminPage';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="LoginOptions" component={loginOptions} options= {{headerShown: false}}/>
        <Stack.Screen name="Main Login" component={MainLogin} options= {{headerShown: false}}/>
        <Stack.Screen name="CompanyPage" component={CompanyPage} />
        <Stack.Screen name="StudentPage" component={StudentPage} />
        <Stack.Screen name="AdminPage" component={AdminPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;