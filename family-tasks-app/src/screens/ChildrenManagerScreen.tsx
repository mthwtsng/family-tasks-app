import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, borderRadius, shadows } from '../theme/colors';

interface ChildProfile {
  id: string;
  name: string;
  points: number;
  tasksCompleted: number;
  lastActive: Date;
}

const ChildrenManagerScreen = () => {
  const [children] = useState<ChildProfile[]>([]);

  const renderChildCard = (child: ChildProfile) => (
    <View style={styles.childCard} key={child.id}>
      <View style={styles.avatarContainer}>
        <Icon name="child" size={40} color="#007AFF" />
      </View>
      <View style={styles.childInfo}>
        <Text style={styles.childName}>{child.name}</Text>
        <Text style={styles.pointsText}>{child.points} points</Text>
        <Text style={styles.lastActive}>
          Last active: {child.lastActive.toLocaleDateString()}
        </Text>
      </View>
      <TouchableOpacity style={styles.editButton}>
        <Icon name="edit" size={20} color="#007AFF" />
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Children</Text>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="plus" size={20} color="#fff" />
          <Text style={styles.addButtonText}>Add Child</Text>
        </TouchableOpacity>
      </View>

      {children.length === 0 ? (
        <View style={styles.emptyState}>
          <Icon name="users" size={50} color="#ccc" />
          <Text style={styles.emptyText}>No children added yet</Text>
          <Text style={styles.emptySubtext}>
            Add a child to start managing tasks and rewards
          </Text>
        </View>
      ) : (
        children.map(renderChildCard)
      )}

      <View style={styles.linkSection}>
        <Text style={styles.linkTitle}>Link Existing Account</Text>
        <TouchableOpacity style={styles.linkButton}>
          <Icon name="qrcode" size={20} color="#007AFF" />
          <Text style={styles.linkButtonText}>Scan QR Code</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#fff',
    marginLeft: 8,
  },
  childCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  childInfo: {
    flex: 1,
    marginLeft: 16,
  },
  childName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pointsText: {
    fontSize: 16,
    color: '#007AFF',
    marginTop: 4,
  },
  lastActive: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  editButton: {
    padding: 8,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
    marginTop: 16,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginTop: 8,
  },
  linkSection: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  linkTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  linkButtonText: {
    marginLeft: 8,
    color: '#007AFF',
    fontSize: 16,
  },
});

export default ChildrenManagerScreen;