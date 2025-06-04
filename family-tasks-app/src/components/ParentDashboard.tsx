import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, borderRadius, shadows } from '../theme/colors';

const ParentDashboard: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Parent Dashboard</Text>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>Tasks Overview</Text>
                {/* Add task summary details here */}
            </View>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>Rewards Overview</Text>
                {/* Add reward summary details here */}
            </View>
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
        marginBottom: 20,
    },
    summary: {
        marginBottom: 15,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    summaryText: {
        fontSize: 18,
        fontWeight: '600',
    },
});

export default ParentDashboard;