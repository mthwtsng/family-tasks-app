import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors, borderRadius, shadows} from '../theme/colors';

interface SettingsSectionProps {
  title: string;
  children: React.ReactNode;
}

const SettingsSection: React.FC<SettingsSectionProps> = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [notifications, setNotifications] = React.useState(true);

  return (
    <ScrollView style={styles.container}>
      <SettingsSection title="Account">
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingContent}>
            <Icon name="user" size={20} color="#007AFF" />
            <Text style={styles.settingText}>Edit Profile</Text>
          </View>
          <Icon name="chevron-right" size={16} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingContent}>
            <Icon name="key" size={20} color="#007AFF" />
            <Text style={styles.settingText}>Change Password</Text>
          </View>
          <Icon name="chevron-right" size={16} color="#999" />
        </TouchableOpacity>
      </SettingsSection>

      <SettingsSection title="Notifications">
        <View style={styles.settingItem}>
          <View style={styles.settingContent}>
            <Icon name="bell" size={20} color="#007AFF" />
            <Text style={styles.settingText}>Push Notifications</Text>
          </View>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={notifications ? '#007AFF' : '#f4f3f4'}
          />
        </View>
      </SettingsSection>

      <SettingsSection title="Appearance">
        <View style={styles.settingItem}>
          <View style={styles.settingContent}>
            <Icon name="moon" size={20} color="#007AFF" />
            <Text style={styles.settingText}>Dark Mode</Text>
          </View>
          <Switch
            value={isDarkMode}
            onValueChange={setIsDarkMode}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isDarkMode ? '#007AFF' : '#f4f3f4'}
          />
        </View>
      </SettingsSection>

      <SettingsSection title="Support">
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingContent}>
            <Icon name="question-circle" size={20} color="#007AFF" />
            <Text style={styles.settingText}>Help & FAQ</Text>
          </View>
          <Icon name="chevron-right" size={16} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingContent}>
            <Icon name="envelope" size={20} color="#007AFF" />
            <Text style={styles.settingText}>Contact Support</Text>
          </View>
          <Icon name="chevron-right" size={16} color="#999" />
        </TouchableOpacity>
      </SettingsSection>

      <TouchableOpacity style={styles.logoutButton}>
        <Icon name="sign-out-alt" size={20} color="#FF3B30" />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>

      <Text style={styles.version}>Version 1.0.0</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  section: {
    marginVertical: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginBottom: 12,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 16,
    marginLeft: 12,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginVertical: 20,
    padding: 16,
    borderRadius: 12,
  },
  logoutText: {
    color: '#FF3B30',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  version: {
    textAlign: 'center',
    color: '#999',
    marginBottom: 20,
  },
});

export default SettingsScreen;