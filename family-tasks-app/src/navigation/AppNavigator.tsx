import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import type { RootStackParamList } from '../types/navigation';
import RoleSelectionScreen from '../screens/RoleSelectionScreen';
import LoginScreen from '../screens/LoginScreen';
import ParentTabNavigator from '../components/ParentTabNavigator';
import ChildTabNavigator from '../components/ChildTabNavigator';

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName="RoleSelection"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ParentHome" component={ParentTabNavigator} />
      <Stack.Screen name="ChildHome" component={ChildTabNavigator} />
    </Stack.Navigator>
  );
}