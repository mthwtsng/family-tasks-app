import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import TaskItem from './TaskItem';
import { Task } from '../types/task';
import { colors, borderRadius, shadows } from '../theme/colors';

interface TaskListProps {
  tasks: Task[];
  onTaskComplete: (taskId: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onTaskComplete }) => {
  if (!Array.isArray(tasks) || tasks.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No tasks available</Text>
      </View>
    );
  }

  const renderItem = ({ item }: { item: Task }) => (
    <TaskItem 
      task={item} 
      onComplete={() => onTaskComplete(item.id)} 
      type={'available'} 
    />
  );

  return (
    <View style={styles.container}> 
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  }
});

export default TaskList;