import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ChildHomeScreen from '../screens/ChildHomeScreen';
import TaskBoardScreen from '../screens/TaskBoardScreen';
import RewardStoreScreen from '../screens/RewardStoreScreen';
import HistoryScreen from '../screens/HistoryScreen';
import { colors, borderRadius, shadows } from '../theme/colors';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function ChildTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: colors.textTertiary,
        tabBarStyle: {
          backgroundColor: colors.surface,
          paddingBottom: 5,
          height: 60,
          borderTopLeftRadius: borderRadius.xl,
          borderTopRightRadius: borderRadius.xl,
          ...shadows.small,
        },
        headerStyle: {
          backgroundColor: colors.surface,
          ...shadows.small,
        },
        headerTitleStyle: {
          color: colors.text,
          fontSize: 18,
          fontWeight: '600',
        },
        headerShadowVisible: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={ChildHomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="My Tasks"
        component={TaskBoardScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="check-circle" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Rewards"
        component={RewardStoreScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="gift" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="clock" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="cog" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}