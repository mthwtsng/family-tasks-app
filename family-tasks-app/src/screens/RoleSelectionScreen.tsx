import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { colors, borderRadius, shadows } from '../theme/colors';

type RoleSelectionScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'RoleSelection'>;

const RoleSelectionScreen = () => {
  const navigation = useNavigation<RoleSelectionScreenNavigationProp>();

  const handleRoleSelect = (role: 'parent' | 'child') => {
    navigation.navigate('Login', { role });
  };


  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to FamilyTasks</Text>
        <Text style={styles.subtitle}>I am a...</Text>

        <TouchableOpacity 
          style={[styles.roleButton, { backgroundColor: colors.primaryLight }]}
          onPress={() => handleRoleSelect('parent')}
        >
          <View style={[styles.iconContainer, { backgroundColor: colors.primary }]}>
            <Icon name="user-tie" size={32} color={colors.white} />
          </View>
          <Text style={styles.roleText}>Parent</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.roleButton, { backgroundColor: colors.secondaryLight }]}
          onPress={() => handleRoleSelect('child')}
        >
          <View style={[styles.iconContainer, { backgroundColor: colors.secondary }]}>
            <Icon name="child" size={32} color={colors.white} />
          </View>
          <Text style={styles.roleText}>Child</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.text,
  },
  subtitle: {
    fontSize: 22,
    marginBottom: 30,
    color: colors.textSecondary,
  },
  roleButton: {
    width: '100%',
    padding: 24,
    borderRadius: borderRadius.large,
    alignItems: 'center',
    marginBottom: 20,
    ...shadows.medium,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: borderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  roleText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
  },
});

export default RoleSelectionScreen;