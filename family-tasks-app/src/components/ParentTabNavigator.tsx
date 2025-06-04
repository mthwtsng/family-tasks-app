import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ParentHomeScreen from '../screens/ParentHomeScreen';
import TaskManagerScreen from '../screens/TaskManagerScreen';
import RewardManagerScreen from '../screens/RewardManagerScreen';
import ChildrenManagerScreen from '../screens/ChildrenManagerScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { colors, borderRadius, shadows } from '../theme/colors';

const Tab = createBottomTabNavigator();

export default function ParentTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
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
        component={ParentHomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Tasks"
        component={TaskManagerScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="clipboard-list" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Rewards"
        component={RewardManagerScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="gift" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Children"
        component={ChildrenManagerScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="users" size={size} color={color} />
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