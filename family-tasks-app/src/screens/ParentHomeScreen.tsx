import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import ParentDashboard from '../components/ParentDashboard';
import { useNavigation } from '@react-navigation/native';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList, ParentTabParamList } from '../types/navigation';


type ParentScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<ParentTabParamList>,
  NativeStackNavigationProp<RootStackParamList>
>;
const ParentHomeScreen: React.FC = () => {
  const navigation = useNavigation<ParentScreenNavigationProp>();

  const handleTaskManagement = () => {
    navigation.navigate('Tasks');
  };

  const handleRewardManagement = () => {
    navigation.navigate('Rewards');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome, Parent 👋</Text>
      
      <View style={styles.dashboardCard}>
        <ParentDashboard />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleTaskManagement}>
        <Text style={styles.buttonText}>Manage Tasks</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleRewardManagement}>
        <Text style={styles.buttonText}>Manage Rewards</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#F9FAFB',
    flexGrow: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 20,
    color: '#1E1E1E',
  },
  dashboardCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#3D5AFE',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ParentHomeScreen;
