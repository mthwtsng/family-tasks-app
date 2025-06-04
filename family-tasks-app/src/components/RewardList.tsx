import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import RewardItem from './RewardItem';
import { Reward } from '../types/reward';
import { colors, borderRadius, shadows } from '../theme/colors';

interface RewardListProps {
  rewards: Reward[];
  onRedeemReward?: (rewardId: string) => void; // Added prop for handling redemption
}

const RewardList: React.FC<RewardListProps> = ({ rewards, onRedeemReward }) => {
  const handleRedeem = (rewardId: string) => {
    if (onRedeemReward) {
      onRedeemReward(rewardId);
    }
  };

  const renderItem = ({ item }: { item: Reward }) => (
    <RewardItem 
      reward={item} 
      onRedeem={handleRedeem}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Rewards</Text>
      <FlatList
        data={rewards}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default RewardList;