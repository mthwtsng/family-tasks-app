import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Task } from '../types/task';
import { colors, borderRadius, shadows } from '../theme/colors';

interface TaskItemProps {
    task: Task;
    onClaim?: () => void;
    onComplete?: () => void;
    type: 'available' | 'claimed';
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onClaim, onComplete, type }) => {
    if (!task) {
        return (
            <View style={styles.container}>
                <Text style={styles.error}>Task not available</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{task.title}</Text>
            <Text style={styles.description}>{task.description}</Text>
            <Text style={styles.points}>Points: {task.points}</Text>
            <Text style={styles.deadline}>
                Due: {task.deadline?.toLocaleDateString() || 'No deadline set'}
            </Text>
            
            {type === 'available' && (
                <TouchableOpacity 
                    style={[styles.button, styles.claimButton]} 
                    onPress={onClaim}
                >
                    <Text style={styles.buttonText}>Claim Task</Text>
                </TouchableOpacity>
            )}
            
            {type === 'claimed' && task.status !== 'completed' && (
                <TouchableOpacity 
                    style={[styles.button, styles.completeButton]} 
                    onPress={onComplete}
                >
                    <Text style={styles.buttonText}>Mark Complete</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    points: {
        fontSize: 16,
        color: '#2E7D32',
        fontWeight: '600',
    },
    deadline: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    button: {
        padding: 12,
        borderRadius: 6,
        marginTop: 12,
        alignItems: 'center',
    },
    claimButton: {
        backgroundColor: '#1976D2',
    },
    completeButton: {
        backgroundColor: '#2E7D32',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
    },
    error: {
        color: '#666',
        textAlign: 'center',
        fontSize: 14,
    }
});

export default TaskItem;