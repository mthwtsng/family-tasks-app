import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TaskList from '../components/TaskList';
import { Task } from '../types/task';

const TaskBoardScreen: React.FC = () => {
    // Initialize with empty array
    const [availableTasks, setAvailableTasks] = useState<Task[]>([]);

    const handleTaskComplete = (taskId: string) => {
        console.log('Task completed:', taskId);
        // Implement task completion logic
    };

    return (
        <View style={styles.container}>
            <TaskList 
                tasks={availableTasks}
                onTaskComplete={handleTaskComplete}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 16
    }
});

export default TaskBoardScreen;