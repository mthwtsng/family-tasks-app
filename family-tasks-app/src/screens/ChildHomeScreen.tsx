import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TaskList from '../components/TaskList';
import ChildDashboard from '../components/ChildDashboard';
import { Task } from '../types/task';
import { colors, borderRadius, shadows } from '../theme/colors';

const ChildHomeScreen = () => {
    // Mock data - replace with actual data from your state management solution
    const mockTasks: Task[] = [];
    const mockPoints = 0;
    const mockTaskTitles: string[] = [];

    const handleTaskComplete = (taskId: string) => {
        // Implement task completion logic
        console.log('Task completed:', taskId);
    };

    return (
        <View style={styles.container}>
            <ChildDashboard 
                points={mockPoints} 
                tasks={mockTaskTitles} 
            />
            <Text style={styles.title}>Your Tasks</Text>
            <TaskList 
                tasks={mockTasks} 
                onTaskComplete={handleTaskComplete} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
});

export default ChildHomeScreen;