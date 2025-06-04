import React from 'react';
import { View, StyleSheet } from 'react-native';
import RewardList from '../components/RewardList';
import { Reward } from '../types/reward';

const RewardStoreScreen = () => {
  const [availableRewards] = React.useState<Reward[]>([]);

  const handleRewardRedeem = (rewardId: string) => {
    console.log('Redeeming reward:', rewardId);
    // Implement reward redemption logic
  };

  return (
    <View style={styles.container}>
      <RewardList rewards={availableRewards} onRedeemReward={handleRewardRedeem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default RewardStoreScreen;