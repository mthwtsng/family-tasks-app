import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, borderRadius, shadows } from '../theme/colors';

const ChildDashboard: React.FC<{ points: number; tasks: string[] }> = ({ points, tasks }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Child Dashboard</Text>
            <Text style={styles.points}>Current Points: {points}</Text>
            <Text style={styles.subHeader}>Your Tasks:</Text>
            {tasks.length > 0 ? (
                tasks.map((task, index) => (
                    <Text key={index} style={styles.taskItem}>
                        - {task}
                    </Text>
                ))
            ) : (
                <Text style={styles.noTasks}>No tasks assigned.</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    points: {
        fontSize: 18,
        marginBottom: 20,
    },
    subHeader: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 10,
    },
    taskItem: {
        fontSize: 16,
    },
    noTasks: {
        fontSize: 16,
        color: 'gray',
    },
});

export default ChildDashboard;