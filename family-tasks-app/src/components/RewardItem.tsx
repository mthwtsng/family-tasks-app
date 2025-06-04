import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Reward } from '../types/reward';
import { colors, borderRadius, shadows } from '../theme/colors';

interface RewardItemProps {
    reward: Reward;
    onRedeem: (rewardId: string) => void;
}

const RewardItem: React.FC<RewardItemProps> = ({ reward, onRedeem }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{reward.title}</Text>
            <Text style={styles.description}>{reward.description}</Text>
            <Text style={styles.pointCost}>Cost: {reward.pointCost} points</Text>
            <Button title="Redeem" onPress={() => onRedeem(reward.id)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        marginVertical: 5,
    },
    pointCost: {
        fontSize: 14,
        color: '#888',
    },
});

export default RewardItem;