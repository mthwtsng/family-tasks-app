import React, { useState } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    FlatList, 
    StyleSheet,
    Modal 
} from 'react-native';
import { Reward } from '../types/reward';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, borderRadius, shadows } from '../theme/colors';

const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const RewardManagerScreen = () => {
    const [rewards, setRewards] = useState<Reward[]>([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [editingReward, setEditingReward] = useState<Reward | null>(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [pointCost, setPointCost] = useState('');

    const handleAddOrUpdateReward = () => {
        if (!title || !description || !pointCost) {
            alert('Please fill in all fields');
            return;
        }

        if (editingReward) {
            // Update existing reward
            setRewards(rewards.map(reward => 
                reward.id === editingReward.id 
                    ? { ...reward, title, description, pointCost: parseInt(pointCost) }
                    : reward
            ));
        } else {
            // Add new reward - use generateId() instead of uuidv4()
            const newReward: Reward = {
                id: generateId(),
                title,
                description,
                pointCost: parseInt(pointCost),
            };
            setRewards([...rewards, newReward]);
        }

        clearForm();
    };

    const clearForm = () => {
        setTitle('');
        setDescription('');
        setPointCost('');
        setEditingReward(null);
        setModalVisible(false);
    };

    const handleEditReward = (reward: Reward) => {
        setEditingReward(reward);
        setTitle(reward.title);
        setDescription(reward.description);
        setPointCost(reward.pointCost.toString());
        setModalVisible(true);
    };

    const handleDeleteReward = (id: string) => {
        setRewards(rewards.filter(reward => reward.id !== id));
    };

    const renderRewardItem = ({ item }: { item: Reward }) => (
        <View style={styles.rewardItem}>
            <View style={styles.rewardContent}>
                <Text style={styles.rewardTitle}>{item.title}</Text>
                <Text style={styles.rewardDescription}>{item.description}</Text>
                <Text style={styles.pointCost}>{item.pointCost} points</Text>
            </View>
            <View style={styles.rewardActions}>
                <TouchableOpacity 
                    onPress={() => handleEditReward(item)}
                    style={styles.actionButton}
                >
                    <Icon name="edit" size={20} color={colors.primary} />
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => handleDeleteReward(item.id)}
                    style={styles.actionButton}
                >
                    <Icon name="trash-alt" size={20} color={colors.error} />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Rewards Manager</Text>
                <TouchableOpacity 
                    style={styles.addButton}
                    onPress={() => setModalVisible(true)}
                >
                    <Icon name="plus" size={20} color="#FFF" />
                    <Text style={styles.addButtonText}>Add Reward</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={rewards}
                renderItem={renderRewardItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
                ListEmptyComponent={() => (
                    <View style={styles.emptyState}>
                        <Icon name="gift" size={50} color="#CCC" />
                        <Text style={styles.emptyStateText}>No rewards added yet</Text>
                    </View>
                )}
            />

            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>
                            {editingReward ? 'Edit Reward' : 'Add New Reward'}
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Reward Title"
                            value={title}
                            onChangeText={setTitle}
                        />
                        <TextInput
                            style={[styles.input, styles.multilineInput]}
                            placeholder="Reward Description"
                            value={description}
                            onChangeText={setDescription}
                            multiline
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Point Cost"
                            value={pointCost}
                            onChangeText={setPointCost}
                            keyboardType="numeric"
                        />
                        <View style={styles.modalActions}>
                            <TouchableOpacity 
                                style={[styles.modalButton, styles.cancelButton]}
                                onPress={clearForm}
                            >
                                <Text style={styles.cancelButtonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={[styles.modalButton, styles.saveButton]}
                                onPress={handleAddOrUpdateReward}
                            >
                                <Text style={styles.saveButtonText}>
                                    {editingReward ? 'Update' : 'Add'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',  // Changed to match TaskManager
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        // Removed marginBottom to match TaskManager
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        // Removed marginRight to match TaskManager
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#007AFF',
        padding: 8,
        paddingHorizontal: 12,  // Changed to match TaskManager
        borderRadius: 8,
        // Removed marginLeft auto to match TaskManager
    },
    addButtonText: {
        color: '#fff',
        marginLeft: 8,
        fontWeight: '600'
    },
    listContainer: {
        padding: 16,
    },
    rewardItem: {
        flexDirection: 'row',
        backgroundColor: '#fff',  // Changed to match TaskManager
        padding: 16,
        marginBottom: 12,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    rewardContent: {
        flex: 1,
    },
    rewardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#333',  // Changed to match TaskManager
    },
    rewardDescription: {
        fontSize: 14,
        color: '#666',  // Changed to match TaskManager
        marginBottom: 4,
    },
    pointCost: {
        fontSize: 16,
        color: '#007AFF',  // Changed to match TaskManager
        fontWeight: '600',
    },
    rewardActions: {
        justifyContent: 'space-around',
    },
    actionButton: {
        padding: 8,
    },
    emptyState: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
    },
    emptyStateText: {
        marginTop: 16,
        fontSize: 16,
        color: '#666',  // Changed to match TaskManager
        textAlign: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 16,
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        color: '#333',  // Changed to match TaskManager
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        backgroundColor: '#f9f9f9',
    },
    multilineInput: {
        height: 100,
        textAlignVertical: 'top',
    },
    modalActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    modalButton: {
        flex: 1,
        padding: 12,
        borderRadius: 8,
        marginHorizontal: 8,
    },
    cancelButton: {
        backgroundColor: '#f2f2f2',
    },
    saveButton: {
        backgroundColor: '#007AFF',
    },
    cancelButtonText: {
        color: '#666',
        textAlign: 'center',
        fontWeight: '600',
    },
    saveButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '600',
    },
});

export default RewardManagerScreen;